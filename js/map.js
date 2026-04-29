/* ============================================================
   MAP.JS — Board rendering, dice rolling, token movement
   Calls gameplay.js for card logic after landing
============================================================ */

// ── Language toggle ──
function ptsLabel() {
  return localStorage.getItem('cardLang') === 'th' ? 'แต้ม' : 'pts';
}
function mapSetLang(lang) {
  localStorage.setItem('cardLang', lang);
  document.getElementById('map-lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('map-lang-th').classList.toggle('active', lang === 'th');
  // Refresh all score displays
  for (let i = 0; i < playerCount; i++) updateScore(i);
}
function mapInitLang() {
  const lang = localStorage.getItem('cardLang') || 'en';
  mapSetLang(lang);
}

// ── Space type → image file ──
const SPACE_IMAGES = {
  start:    'assets/images/map_game/start_space.png',
  end:      'assets/images/map_game/end_space.png',
  reward:   'assets/images/map_game/reward_space.png',
  punish:   'assets/images/map_game/punish_space.png',
  event:    'assets/images/map_game/event_space.png',
  minigame: 'assets/images/map_game/minigame_space.png',
  normal:   'assets/images/map_game/normal_space.png',
};

// ── Player assets & names ──
const PLAYER_TOKENS = [
  'assets/images/map_game/player1.png',
  'assets/images/map_game/player2.png',
  'assets/images/map_game/player3.png',
  'assets/images/map_game/player4.png',
];
const PLAYER_NAMES = ['Player 1', 'Player 2', 'Player 3', 'Player 4'];

// ── Token offsets (so players don't stack on same space) ──
const TOKEN_OFFSETS = [
  { dx: -2.5, dy: -2.0 },
  { dx:  2.5, dy: -2.0 },
  { dx: -2.5, dy:  2.0 },
  { dx:  2.5, dy:  2.0 },
];

// ── SPACES — exact coordinates from Figma ──
const SPACES = [
  { type: 'start',    x:  10.00, y: 31.11 },  // #0
  { type: 'normal',   x:  18.02, y: 30.37 },  // #1
  { type: 'normal',   x:  25.52, y: 30.37 },  // #2
  { type: 'reward',   x:  32.34, y: 30.37 },  // #3
  { type: 'normal',   x:  39.84, y: 31.11 },  // #4
  { type: 'event',    x:  47.29, y: 32.04 },  // #5
  { type: 'normal',   x:  55.05, y: 31.11 },  // #6
  { type: 'punish',   x:  63.13, y: 30.37 },  // #7
  { type: 'normal',   x:  71.51, y: 30.19 },  // #8
  { type: 'minigame', x:  77.76, y: 30.19 },  // #9
  { type: 'reward',   x:  84.27, y: 31.11 },  // #10
  { type: 'normal',   x:  90.52, y: 34.72 },  // #11
  { type: 'normal',   x:  91.25, y: 43.15 },  // #12
  { type: 'event',    x:  88.23, y: 50.19 },  // #13
  { type: 'punish',   x:  82.50, y: 53.70 },  // #14
  { type: 'normal',   x:  74.74, y: 53.70 },  // #15
  { type: 'normal',   x:  68.02, y: 52.87 },  // #16
  { type: 'normal',   x:  61.25, y: 52.87 },  // #17
  { type: 'reward',   x:  54.01, y: 52.87 },  // #18
  { type: 'normal',   x:  46.25, y: 52.87 },  // #19
  { type: 'normal',   x:  39.64, y: 52.87 },  // #20
  { type: 'minigame', x:  33.07, y: 52.87 },  // #21
  { type: 'normal',   x:  26.98, y: 52.87 },  // #22
  { type: 'punish',   x:  20.52, y: 52.96 },  // #23
  { type: 'normal',   x:  14.01, y: 53.70 },  // #24
  { type: 'event',    x:   8.39, y: 57.41 },  // #25
  { type: 'normal',   x:   8.49, y: 67.59 },  // #26
  { type: 'minigame', x:  13.02, y: 75.19 },  // #27
  { type: 'normal',   x:  19.48, y: 77.87 },  // #28
  { type: 'reward',   x:  25.99, y: 77.50 },  // #29
  { type: 'normal',   x:  32.34, y: 76.57 },  // #30
  { type: 'punish',   x:  38.85, y: 78.24 },  // #31
  { type: 'normal',   x:  45.73, y: 76.94 },  // #32
  { type: 'normal',   x:  52.66, y: 75.56 },  // #33
  { type: 'event',    x:  59.90, y: 75.56 },  // #34
  { type: 'normal',   x:  66.82, y: 76.48 },  // #35
  { type: 'reward',   x:  72.76, y: 77.50 },  // #36
  { type: 'normal',   x:  78.49, y: 77.87 },  // #37
  { type: 'punish',   x:  84.23, y: 78.33 },  // #38
  { type: 'end',      x:  89.74, y: 76.48 },  // #39
];

// ── Game state ──
const playerCount    = parseInt(sessionStorage.getItem('playerCount')) || 2;
const positions      = Array(playerCount).fill(0);
const scores         = Array(playerCount).fill(0);
const frozenPlayers  = Array(playerCount).fill(false);
let   currentTurn    = 0;
let   turnDirection  = 1;   // 1 = clockwise, -1 = counter-clockwise (Reverse! card)
let   isRolling      = false;

// ── Persistence ──
const SAVE_KEY = 'blossom_saved_game';

function saveGame() {
  localStorage.setItem(SAVE_KEY, JSON.stringify({
    playerCount,
    positions:     [...positions],
    scores:        [...scores],
    frozenPlayers: [...frozenPlayers],
    currentTurn,
    turnDirection,
  }));
}

function clearSave() {
  localStorage.removeItem(SAVE_KEY);
}

function goHome() {
  saveGame();
  window.location.href = 'index.html';
}

// ── Init ──
window.addEventListener('DOMContentLoaded', () => {
  // Restore saved game if player count matches
  const raw   = localStorage.getItem(SAVE_KEY);
  const saved = raw ? JSON.parse(raw) : null;
  const isRestoring = saved && saved.playerCount === playerCount;

  if (isRestoring) {
    saved.positions.forEach((v, i)     => { if (i < playerCount) positions[i]     = v; });
    saved.scores.forEach((v, i)        => { if (i < playerCount) scores[i]        = v; });
    saved.frozenPlayers.forEach((v, i) => { if (i < playerCount) frozenPlayers[i] = v; });
    currentTurn   = saved.currentTurn;
    turnDirection = saved.turnDirection;
  }

  mapInitLang();
  renderSpaces();
  renderTokens();
  renderScoreBar();

  if (isRestoring) {
    for (let i = 0; i < playerCount; i++) {
      placeToken(document.getElementById(`token-${i}`), positions[i], i);
      updateScore(i);
    }
  }

  updateTurnLabel();
});

// ── Render all spaces ──
function renderSpaces() {
  const container = document.getElementById('spaces-container');
  container.innerHTML = '';
  SPACES.forEach((space) => {
    const el = document.createElement('div');
    el.className = 'space' +
      (space.type === 'start' || space.type === 'end' ? ' space-large' : '');
    el.style.left = space.x + '%';
    el.style.top  = space.y + '%';
    const img = document.createElement('img');
    img.src = SPACE_IMAGES[space.type];
    img.alt = space.type;
    el.appendChild(img);
    container.appendChild(el);
  });
}

// ── Render player tokens ──
function renderTokens() {
  const container = document.getElementById('tokens-container');
  container.innerHTML = '';
  for (let i = 0; i < playerCount; i++) {
    const token = document.createElement('div');
    token.id        = `token-${i}`;
    token.className = 'player-token';
    const img = document.createElement('img');
    img.src = PLAYER_TOKENS[i];
    img.alt = PLAYER_NAMES[i];
    token.appendChild(img);
    placeToken(token, 0, i);
    container.appendChild(token);
  }
}

// ── Render score bar ──
function renderScoreBar() {
  const bar = document.getElementById('score-bar');
  bar.className = `score-bar players-${playerCount}`;
  bar.innerHTML = '<div class="score-bar-side" id="score-left"></div><div class="score-bar-side" id="score-right"></div>';

  const leftCount = playerCount === 2 ? 1 : 2;

  for (let i = 0; i < playerCount; i++) {
    const chip = document.createElement('div');
    chip.id        = `score-chip-${i}`;
    chip.className = 'score-chip' + (i === 0 ? ' active-turn' : '');
    chip.innerHTML = `
      <img class="token-thumb" src="${PLAYER_TOKENS[i]}" alt="${PLAYER_NAMES[i]}" />
      <div class="chip-info">
        <span class="chip-name">${PLAYER_NAMES[i]}</span>
        <span class="chip-score" id="score-val-${i}">0 ${ptsLabel()}</span>
      </div>
    `;
    document.getElementById(i < leftCount ? 'score-left' : 'score-right').appendChild(chip);
  }
}

// ── Place token at space with per-player offset ──
function placeToken(token, spaceIndex, playerIndex) {
  const space = SPACES[spaceIndex];
  const off   = TOKEN_OFFSETS[playerIndex] || { dx: 0, dy: 0 };
  token.style.left = (space.x + off.dx) + '%';
  token.style.top  = (space.y + off.dy) + '%';
}

// ── Update turn label + score bar highlight ──
function updateTurnLabel() {
  document.getElementById('current-player-label').textContent =
    PLAYER_NAMES[currentTurn].toUpperCase();
  document.querySelectorAll('.score-chip').forEach((chip, i) => {
    chip.classList.toggle('active-turn', i === currentTurn);
    chip.classList.toggle('frozen', frozenPlayers[i]);
  });
}

// ── Update a player's score display ──
function updateScore(playerIndex) {
  const el = document.getElementById(`score-val-${playerIndex}`);
  if (el) el.textContent = scores[playerIndex] + ' ' + ptsLabel();
}

// ── Roll dice ──
function rollDice() {
  if (isRolling) return;
  isRolling = true;
  const rollBtn  = document.getElementById('roll-btn');
  const diceFace = document.getElementById('dice-face');
  rollBtn.disabled = true;
  diceFace.classList.add('rolling');

  let ticks = 0;
  const interval = setInterval(() => {
    const rand = Math.ceil(Math.random() * 6);
    diceFace.src = `assets/images/map_game/${rand}dice.png`;
    if (++ticks >= 8) {
      clearInterval(interval);
      const result = Math.ceil(Math.random() * 6);
      diceFace.src = `assets/images/map_game/${result}dice.png`;
      diceFace.classList.remove('rolling');
      movePlayer(result);
    }
  }, 100);
}

// ── Move current player step by step ──
function movePlayer(steps) {
  const maxSpace = SPACES.length - 1;
  let   step     = 0;

  const interval = setInterval(() => {
    if (step >= steps || positions[currentTurn] >= maxSpace) {
      clearInterval(interval);
      onLand(currentTurn, positions[currentTurn]);
      return;
    }
    positions[currentTurn]++;
    step++;
    const token = document.getElementById(`token-${currentTurn}`);
    placeToken(token, positions[currentTurn], currentTurn);
  }, 350);
}

// ── Handle landing on a space ──
function onLand(playerIndex, spaceIndex) {
  const space = SPACES[spaceIndex];
  console.log(`${PLAYER_NAMES[playerIndex]} landed on: ${space.type} (#${spaceIndex})`);

  if (space.type === 'end') {
    showGameEnd(playerIndex);
    return;
  }

  // Show card popup (defined in gameplay.js)
  showCardPopup(space.type, playerIndex);
}

// ── Called by gameplay.js after card is resolved ──
function endTurn() {
  // Advance to next player (respects direction and frozen state)
  let next = currentTurn;
  let tries = 0;
  do {
    next = ((next + turnDirection) % playerCount + playerCount) % playerCount;
    tries++;
    if (tries > playerCount) break;  // safety — all frozen edge case
  } while (frozenPlayers[next] && tries <= playerCount);

  // Unfreeze previous frozen player after their skipped turn
  if (frozenPlayers[currentTurn]) {
    frozenPlayers[currentTurn] = false;
  }

  currentTurn = next;
  updateTurnLabel();
  document.getElementById('roll-btn').disabled = false;
  isRolling = false;
  saveGame();
}

// ── Game end screen ──
function showGameEnd(winnerIndex) {
  clearSave(); // game is over — no need to keep the save
  const sorted = PLAYER_NAMES.slice(0, playerCount)
    .map((name, i) => ({ name, score: scores[i] }))
    .sort((a, b) => b.score - a.score);

  const overlay = document.getElementById('card-overlay');
  overlay.innerHTML = `
    <div class="card-popup" style="background: linear-gradient(135deg, #fff9c4, #f5d742); text-align:center; align-items:center;">
      <div style="font-size:clamp(40px,6vw,72px)">🏆</div>
      <div class="card-title-en" style="color:#5d3a00">Game Over!</div>
      <div class="card-h2h-label">🎉 Winner: ${PLAYER_NAMES[winnerIndex]}</div>
      <div style="width:100%; background:rgba(255,255,255,0.4); border-radius:14px; padding:14px; display:flex; flex-direction:column; gap:8px;">
        ${sorted.map((p, i) => `
          <div style="display:flex; justify-content:space-between; align-items:center; padding:6px 10px; background:rgba(255,255,255,0.4); border-radius:8px;">
            <span style="font-weight:700; color:#5d3a00">${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i+1}`} ${p.name}</span>
            <span style="font-family:Georgia,serif; font-size:1.2em; font-weight:800; color:#c07800">${p.score} pts</span>
          </div>
        `).join('')}
      </div>
      <button class="card-btn card-btn-confirm" onclick="window.location.href='index.html'">
        🏠 Back to Home
      </button>
    </div>
  `;
  overlay.classList.add('active');
}