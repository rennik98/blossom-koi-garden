/* ============================================================
   BGM.JS — Background music using uploaded MP3
============================================================ */
const BGM = (() => {
  let _audio = null;

  function isEnabled() {
    return localStorage.getItem('audioEnabled') !== 'false';
  }

  function getAudio() {
    if (!_audio) {
      _audio = new Audio('assets/images/music/bgmusic.mp3');
      _audio.loop   = true;
      _audio.volume = 0.45;
    }
    return _audio;
  }

  return {
    isEnabled,

    start() {
      if (!isEnabled()) return;
      const a = getAudio();
      if (a.paused) a.play().catch(() => {});
    },

    stop() {
      if (_audio && !_audio.paused) _audio.pause();
    },

    toggle() {
      const next = !isEnabled();
      localStorage.setItem('audioEnabled', String(next));
      if (next) BGM.start(); else BGM.stop();
      return next;
    },
  };
})();

// Start on first user gesture (browser autoplay policy)
['click', 'touchstart', 'keydown', 'pointerdown'].forEach(ev =>
  document.addEventListener(ev, function h() {
    BGM.start();
    document.removeEventListener(ev, h, true);
  }, { capture: true, once: true })
);
