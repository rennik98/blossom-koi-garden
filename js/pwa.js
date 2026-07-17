/* ============================================================
   PWA.JS — register the offline service worker (see sw.js)
============================================================ */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {
      /* offline support is an enhancement — never break the game */
    });
  });
}
