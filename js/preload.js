/* ============================================================
   PRELOAD.JS — Asset preloader for both index.html & map.html
   Runs immediately after the preloader div is in the DOM.
   Fades out the overlay once all critical images are loaded.
   Asset lists live in js/asset-manifest.js (shared with sw.js).
============================================================ */

(function () {

  const isMap  = location.pathname.includes('map');
  const assets = isMap ? MAP_ASSETS : HOME_ASSETS;

  const bar    = document.getElementById('pre-bar');
  const text   = document.getElementById('pre-text');
  let   loaded = 0;

  function setProgress(n) {
    const pct = Math.round((n / assets.length) * 100);
    if (bar)  bar.style.width       = pct + '%';
    if (text) text.textContent       = pct + '%';
  }

  function loadImage(src) {
    return new Promise((resolve) => {
      const img    = new Image();
      img.onload   = () => { loaded++; setProgress(loaded); resolve(); };
      img.onerror  = () => { loaded++; setProgress(loaded); resolve(); }; // never block on a missing file
      img.src      = src;
    });
  }

  const startTime = Date.now();

  Promise.all(assets.map(loadImage)).then(() => {
    /* Show the preloader for at least 700 ms so it never just flickers */
    const wait = Math.max(0, 700 - (Date.now() - startTime));
    setTimeout(() => {
      const overlay = document.getElementById('preloader');
      if (!overlay) return;
      overlay.classList.add('pre-done');
      overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
    }, wait);
  });

})();
