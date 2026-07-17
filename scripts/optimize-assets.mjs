#!/usr/bin/env node
/* ============================================================
   OPTIMIZE-ASSETS — one-shot, idempotent asset pipeline
   Usage:  npm run optimize          (skips already-optimized files)
           npm run optimize -- --force   (redo everything)

   1. PNGs under assets/images/ are palette-quantized in place
      (same filenames — no code changes needed anywhere).
      Only the three known-oversized 2740px files are downscaled;
      card art keeps its dimensions for high-DPI tablets.
   2. PWA icons + og-image are generated into assets/icons/.
   3. bgmusic.mp3 is converted to AAC .m4a via macOS afconvert.
============================================================ */

import { promises as fs, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import sharp from 'sharp';

const ROOT       = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const IMAGES_DIR = path.join(ROOT, 'assets', 'images');
const ICONS_DIR  = path.join(ROOT, 'assets', 'icons');
const FORCE      = process.argv.includes('--force');
const BRAND_BG   = '#f5c8a0';

/* Files rendered far smaller than their pixel size → safe to downscale.
   Everything else keeps its dimensions (card art is sized for ~2.7× DPR). */
const WIDTH_CAPS = {
  'assets/images/home/logo.png':            1600,
  'assets/images/home/loadgame.png':        1200,
  'assets/images/map_game/rolldice_bar.png': 1400,
};
const DEFAULT_CAP = 2048;

/* Painterly full-screen backgrounds keep more colors to avoid banding. */
const HIGH_QUALITY = new Set([
  'assets/images/home/BGHome_1920x1080.png',
  'assets/images/map_game/background_game.png',
]);

const kb = (n) => `${Math.round(n / 1024)} KB`;

/* ── PNG helpers ── */

async function* walkPngs(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walkPngs(p);
    else if (entry.isFile() && p.toLowerCase().endsWith('.png')) yield p;
  }
}

/* Read width + color type straight from the IHDR chunk.
   colorType 3 = indexed/palette → already quantized. */
async function pngInfo(file) {
  const fh  = await fs.open(file, 'r');
  const buf = Buffer.alloc(26);
  await fh.read(buf, 0, 26, 0);
  await fh.close();
  return { width: buf.readUInt32BE(16), colorType: buf[25] };
}

async function optimizePng(file) {
  const rel = path.relative(ROOT, file).split(path.sep).join('/');
  const { width, colorType } = await pngInfo(file);
  const cap = WIDTH_CAPS[rel] ?? DEFAULT_CAP;

  if (!FORCE && colorType === 3 && width <= cap) {
    return { rel, action: 'skipped', before: 0, after: 0 };
  }

  const before  = (await fs.stat(file)).size;
  const quality = HIGH_QUALITY.has(rel) ? 90 : 80;
  const tmp     = `${file}.tmp.png`;

  await sharp(file)
    .resize({ width: cap, withoutEnlargement: true })
    .png({ palette: true, quality, effort: 8, compressionLevel: 9, dither: 1.0 })
    .toFile(tmp);

  const after = (await fs.stat(tmp)).size;
  if (after < before) {
    await fs.rename(tmp, file);
    return { rel, action: 'optimized', before, after };
  }
  await fs.unlink(tmp);
  return { rel, action: 'kept (no gain)', before, after: before };
}

/* ── PWA icons + og-image ── */

async function generateIcons() {
  await fs.mkdir(ICONS_DIR, { recursive: true });
  const logo    = path.join(IMAGES_DIR, 'home', 'logo.png');
  const outputs = ['icon-192.png', 'icon-512.png', 'apple-touch-icon.png', 'favicon-32.png', 'og-image.jpg'];

  if (!FORCE && outputs.every((f) => existsSync(path.join(ICONS_DIR, f)))) {
    console.log('icons      : all outputs exist — skipped');
    return;
  }

  async function squareIcon(size, out, pad = 0.08) {
    const inner   = Math.round(size * (1 - pad * 2));
    const logoBuf = await sharp(logo).resize(inner, inner, { fit: 'inside' }).toBuffer();
    await sharp({ create: { width: size, height: size, channels: 4, background: BRAND_BG } })
      .composite([{ input: logoBuf, gravity: 'centre' }])
      .png({ palette: true, quality: 90 })
      .toFile(path.join(ICONS_DIR, out));
  }

  await squareIcon(192, 'icon-192.png');
  await squareIcon(512, 'icon-512.png');
  await squareIcon(180, 'apple-touch-icon.png');
  await squareIcon(32, 'favicon-32.png', 0.02);

  const bgHome  = path.join(IMAGES_DIR, 'home', 'BGHome_1920x1080.png');
  const logoBuf = await sharp(logo).resize(760, 420, { fit: 'inside' }).toBuffer();
  await sharp(bgHome)
    .resize(1200, 630, { fit: 'cover' })
    .composite([{ input: logoBuf, gravity: 'centre' }])
    .jpeg({ quality: 80 })
    .toFile(path.join(ICONS_DIR, 'og-image.jpg'));

  console.log('icons      : generated icon-192/512, apple-touch-icon, favicon-32, og-image.jpg');
}

/* ── Background music → AAC .m4a (macOS afconvert) ── */

async function convertAudio() {
  const mp3 = path.join(IMAGES_DIR, 'music', 'bgmusic.mp3');
  const m4a = path.join(IMAGES_DIR, 'music', 'bgmusic.m4a');

  if (existsSync(m4a) && !FORCE) { console.log('audio      : bgmusic.m4a exists — skipped'); return; }
  if (!existsSync(mp3))          { console.log('audio      : bgmusic.mp3 not found — skipped'); return; }
  if (!existsSync('/usr/bin/afconvert')) {
    console.log('audio      : afconvert not available — skipped (convert bgmusic.mp3 to AAC ~96kbps manually)');
    return;
  }

  await promisify(execFile)('/usr/bin/afconvert', ['-f', 'm4af', '-d', 'aac', '-b', '96000', '-q', '127', mp3, m4a]);
  const before = (await fs.stat(mp3)).size;
  const after  = (await fs.stat(m4a)).size;
  console.log(`audio      : bgmusic.mp3 ${kb(before)} → bgmusic.m4a ${kb(after)}`);
  console.log('             (js/bgm.js must point at bgmusic.m4a; delete the .mp3 once playback is verified)');
}

/* ── Main ── */

const startTotal = Date.now();
await generateIcons();
await convertAudio();

const files   = [];
for await (const f of walkPngs(IMAGES_DIR)) files.push(f);
files.sort();

const results = [];
for (const f of files) {
  try { results.push(await optimizePng(f)); }
  catch (err) { results.push({ rel: path.relative(ROOT, f), action: `ERROR ${err.message}`, before: 0, after: 0 }); }
}

let totalBefore = 0, totalAfter = 0, skipped = 0;
for (const r of results) {
  if (r.action === 'skipped') { skipped++; continue; }
  totalBefore += r.before;
  totalAfter  += r.after;
  console.log(`${r.action.padEnd(14)} ${r.rel}  ${r.before ? `${kb(r.before)} → ${kb(r.after)}` : ''}`);
}

console.log('─'.repeat(60));
console.log(`PNGs: ${results.length} scanned, ${skipped} already optimized`);
if (totalBefore) console.log(`Size: ${kb(totalBefore)} → ${kb(totalAfter)}  (saved ${kb(totalBefore - totalAfter)})`);
console.log(`Done in ${((Date.now() - startTotal) / 1000).toFixed(1)}s`);
