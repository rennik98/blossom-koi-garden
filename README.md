# BrainBlooming 🌸

**A bilingual (Thai/English) digital board game that promotes body, brain, and social health for elderly players.**
เกมกระดานดิจิทัลส่งเสริมสุขภาพแบบองค์รวม — กาย สมอง สังคม — สำหรับผู้สูงอายุ · จัดแสดงในมหกรรมงานวิจัยแห่งชาติ 2569 (Thailand Research Expo 2026)

2–4 players take turns rolling a die on a flower-garden board, drawing activity cards (movement, brain teasers, social prompts, head-to-head duels), performing them, and voting on results. Designed for facilitated group play on a landscape tablet or touchscreen.

## Features

- 54 bilingual activity cards + reward/punish/event/minigame decks, many with randomized `{manual}` prompts for replayability
- Elder-friendly UI: large touch targets, card **read-aloud (TTS)** in Thai and English, EN/TH toggle everywhere
- Automated dice, token movement, scoring, voting, and win detection
- Save/resume via `localStorage`; background music + procedural sound effects
- **Installable PWA with full offline play** — everything (art, fonts, music) is precached by a service worker, so it keeps working on flaky venue Wi-Fi

## Quick start

```bash
npm install
npm run dev        # Vite dev server (or use any static server, e.g. npx serve .)
```

Pages: `/` (home), `/map.html` (game board), `/cards-pdf.html` (printable card reference — open → Ctrl+P → save as PDF).

Append `?debug` to the map URL to reveal the 🧪 card test panel (draw any specific card).

## Asset pipeline

All art lives in `assets/images/` and is referenced by stable relative paths. After adding or replacing art/music, run:

```bash
npm run optimize             # idempotent — skips already-optimized files
npm run optimize -- --force  # re-process everything
```

The script (`scripts/optimize-assets.mjs`):
- palette-quantizes PNGs **in place** (typically 4–5× smaller, alpha preserved) and downscales the few known-oversized files
- regenerates PWA icons + the social-preview image into `assets/icons/` from `assets/images/home/logo.png`
- converts `bgmusic.mp3` → AAC `bgmusic.m4a` via macOS `afconvert` (on other platforms, convert to ~96 kbps AAC manually)

## Offline / PWA notes

- `sw.js` precaches the app shell plus all page art (lists in `js/asset-manifest.js`) and every card illustration (derived from `js/cards.js` at install time). HTML/JS/CSS use network-first, so **code updates deploy without any cache-version bump**.
- **Bump `VERSION` in `sw.js` whenever images or music change** — that drops the old cache and re-precaches.
- During development, unregister the worker in DevTools → Application → Service Workers (or use a private window) to avoid stale caches.

## Deploy

Deployed on Vercel as raw static files — `vercel.json` sets `buildCommand: null`, serves the repo root, and rewrites `/map` → `/map.html`, `/cards` → `/cards-pdf.html`. Just push to `main`.

> TODO: once the production domain is final, make the `og:image` URLs in the three HTML heads absolute so link previews work in LINE/Facebook.

## Project structure

```
index.html            home + player selection + card browser
map.html              game board (dice, tokens, cards, scoring)
cards-pdf.html        printable card reference sheet
js/cards.js           all card data (bilingual) + manual-fill pools
js/map.js             board layout (40 spaces), dice, movement, saves
js/gameplay.js        card popups, voting, timers, effects, TTS
js/home.js            home screen, saves list, card browser
js/asset-manifest.js  critical image lists (shared by preloader & sw.js)
js/preload.js         per-page image preloader with progress bar
js/bgm.js · js/sfx.js background music · procedural sound effects
js/pwa.js · sw.js     service-worker registration · offline cache
scripts/              asset optimization pipeline
```
