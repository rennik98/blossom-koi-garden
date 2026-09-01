/* ============================================================
   SW.JS — BrainBlooming service worker (offline-first kiosk)

   Strategy:
     • navigations      → network-first, cached fallback
     • same-origin js/css → network-first (fresh code after
       deploys), cached fallback when offline
     • same-origin images/audio → cache-first; audio Range
       requests are answered with a sliced 206 (Safari needs it)
     • Google Fonts     → cache-first (offline after first load)

   Bump VERSION when art or music changes so old caches are
   dropped; HTML/JS/CSS refresh automatically via network-first.
============================================================ */

importScripts('js/asset-manifest.js', 'js/cards.js');

const VERSION = 'bb-v1';
const CACHE   = 'brainblooming-' + VERSION;

/* Must all succeed at install (small, core files only). */
const APP_SHELL = [
  './',
  'index.html',
  'map.html',
  'cards-pdf.html',
  'css/home.css',
  'css/map.css',
  'css/card.css',
  'js/asset-manifest.js',
  'js/preload.js',
  'js/bgm.js',
  'js/sfx.js',
  'js/cards.js',
  'js/home.js',
  'js/map.js',
  'js/gameplay.js',
  'js/pwa.js',
  'manifest.webmanifest',
  'assets/icons/icon-192.png',
  'assets/icons/icon-512.png',
  'assets/icons/apple-touch-icon.png',
  'assets/icons/favicon-32.png',
];

/* Best-effort bulk precache: page art (from asset-manifest.js),
   every card illustration (derived from cards.js), and the music.
   A failed fetch here never blocks installation — anything missed
   is filled in later by the cache-first fetch handler. */
const ILLUSTRATIONS = (typeof ACTIVITY_CARDS !== 'undefined' ? ACTIVITY_CARDS : [])
  .map((c) => c.illus)
  .filter(Boolean)
  .map((name) => 'assets/images/card/illustration_pic/' + name + '.png');

const BULK_ASSETS = [...new Set([
  ...HOME_ASSETS,
  ...MAP_ASSETS,
  ...ILLUSTRATIONS,
  'assets/images/music/bgmusic.m4a',
  'assets/icons/og-image.jpg',
])];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(APP_SHELL);
    await Promise.allSettled(BULK_ASSETS.map((url) => cache.add(url)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter((n) => n !== CACHE).map((n) => caches.delete(n)));
    await self.clients.claim();
  })());
});

const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  if (req.mode === 'navigate') {
    event.respondWith(handleNavigate(req));
    return;
  }
  if (FONT_HOSTS.includes(url.hostname)) {
    event.respondWith(cacheFirst(req));
    return;
  }
  if (url.origin === self.location.origin) {
    if (/\.(?:js|css)$/.test(url.pathname)) {
      event.respondWith(networkFirst(req));
    } else if (req.headers.has('range')) {
      event.respondWith(rangeFromCache(req));
    } else if (/\.(?:png|jpe?g|webp|gif|svg|ico|m4a|mp3|webmanifest|json)$/.test(url.pathname)) {
      event.respondWith(cacheFirst(req));
    }
  }
});

async function handleNavigate(req) {
  const cache = await caches.open(CACHE);
  try {
    const fresh = await fetch(req);
    if (fresh.ok) cache.put(req, fresh.clone());
    return fresh;
  } catch {
    const hit = await cache.match(req);
    if (hit) return hit;
    /* Vercel clean-URL rewrites don't exist offline — normalize. */
    const p = new URL(req.url).pathname;
    const fallback =
      p.endsWith('/map')   || p.endsWith('/map.html')       ? 'map.html' :
      p.endsWith('/cards') || p.endsWith('/cards-pdf.html') ? 'cards-pdf.html' :
      'index.html';
    return (await cache.match(fallback)) || Response.error();
  }
}

async function networkFirst(req) {
  const cache = await caches.open(CACHE);
  try {
    const fresh = await fetch(req);
    if (fresh.ok) cache.put(req, fresh.clone());
    return fresh;
  } catch {
    return (await cache.match(req)) || Response.error();
  }
}

async function cacheFirst(req) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(req);
  if (hit) return hit;
  const fresh = await fetch(req);
  if (fresh.ok || fresh.type === 'opaque') cache.put(req, fresh.clone());
  return fresh;
}

/* Serve HTTP Range requests (audio seeking) from the cached full
   body — Safari refuses a plain 200 from a SW for media. */
async function rangeFromCache(req) {
  const cache = await caches.open(CACHE);
  const res = await cache.match(req.url);
  if (!res) {
    try { return await fetch(req); } catch { return Response.error(); }
  }

  const buf  = await res.arrayBuffer();
  const size = buf.byteLength;
  const m    = /bytes=(\d*)-(\d*)/.exec(req.headers.get('range') || '');
  if (!m) return new Response(buf, { status: 200, headers: res.headers });

  const start = m[1] === '' ? Math.max(0, size - Number(m[2])) : Number(m[1]);
  const end   = m[1] !== '' && m[2] !== '' ? Math.min(Number(m[2]), size - 1) : size - 1;
  if (Number.isNaN(start) || Number.isNaN(end) || start > end || start >= size) {
    return new Response(null, { status: 416, headers: { 'Content-Range': 'bytes */' + size } });
  }

  return new Response(buf.slice(start, end + 1), {
    status: 206,
    statusText: 'Partial Content',
    headers: {
      'Content-Type':   res.headers.get('Content-Type') || 'audio/mp4',
      'Content-Range':  'bytes ' + start + '-' + end + '/' + size,
      'Content-Length': String(end - start + 1),
      'Accept-Ranges':  'bytes',
    },
  });
}
