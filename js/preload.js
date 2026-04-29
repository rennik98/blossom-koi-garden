/* ============================================================
   PRELOAD.JS — Asset preloader for both index.html & map.html
   Runs immediately after the preloader div is in the DOM.
   Fades out the overlay once all critical images are loaded.
============================================================ */

(function () {

  /* ── Asset lists per page ── */
  const HOME_ASSETS = [
    'assets/images/home/BGHome_1920x1080.png',
    'assets/images/home/logo.png',
    'assets/images/home/start_button.png',
    'assets/images/home/setting_button.png',
    'assets/images/home/achievement_button.png',
    'assets/images/home/showcard_button.png',
    'assets/images/select_players/select_player_count.png',
    'assets/images/select_players/2player_token.png',
    'assets/images/select_players/3player_token.png',
    'assets/images/select_players/4player_token.png',
    'assets/images/select_players/confirm_button.png',
    'assets/images/select_players/back_button.png',
    'assets/images/card/card_bg_1.png',
    'assets/images/card/card_bg_2.png',
    'assets/images/card/card_bg_3.png',
    'assets/images/card/card_bg_4.png',
  ];

  const MAP_ASSETS = [
    'assets/images/map_game/background_game.png',
    'assets/images/home/logo.png',
    'assets/images/map_game/rolldice_bar.png',
    'assets/images/map_game/rolldice_button.png',
    'assets/images/map_game/1dice.png',
    'assets/images/map_game/2dice.png',
    'assets/images/map_game/3dice.png',
    'assets/images/map_game/4dice.png',
    'assets/images/map_game/5dice.png',
    'assets/images/map_game/6dice.png',
    'assets/images/map_game/start_space.png',
    'assets/images/map_game/end_space.png',
    'assets/images/map_game/reward_space.png',
    'assets/images/map_game/punish_space.png',
    'assets/images/map_game/event_space.png',
    'assets/images/map_game/minigame_space.png',
    'assets/images/map_game/normal_space.png',
    'assets/images/map_game/player1.png',
    'assets/images/map_game/player2.png',
    'assets/images/map_game/player3.png',
    'assets/images/map_game/player4.png',
    'assets/images/card/card_bg_1.png',
    'assets/images/card/card_bg_2.png',
    'assets/images/card/card_bg_3.png',
    'assets/images/card/card_bg_4.png',
  ];

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
