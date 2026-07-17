/* ============================================================
   ASSET-MANIFEST.JS — critical image lists per page.
   Single source of truth shared by:
     • js/preload.js  (page preloader, browser context)
     • sw.js          (service-worker precache, worker context)
   Must stay DOM-free so the service worker can importScripts it.
============================================================ */

const HOME_ASSETS = [
  'assets/images/home/BGHome_1920x1080.png',
  'assets/images/home/logo.png',
  'assets/images/home/start_button.png',
  'assets/images/home/loadgame.png',
  'assets/images/home/setting_button.png',
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
