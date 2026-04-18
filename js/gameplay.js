/* ============================================================
   GAMEPLAY.JS — Card popup logic & game flow
============================================================ */

// ── Language helpers ──
const CARD_UI = {
  en: {
    seconds: 'seconds', pts: 'pts', pt: 'pt',
    applyEffect: '✅ Apply Effect',
    draw: '🤝 Draw', wins: 'Wins!',
    success: '✅ Success', fail: '❌ Fail', pass: '⏭ Pass',
    allCompete: '🎮 ALL players compete!',
    time: 'TIME', points: 'POINTS', diff: 'DIFF', score: 'SCORE',
    labels: { body:'🏃 Body', brain:'🧠 Brain', social:'💬 Social', h2h:'⚔️ H2H',
              reward:'🪷 Reward', punish:'👻 Punish', event:'❓ Event', minigame:'🎮 Mini-Game' },
  },
  th: {
    seconds: 'วินาที', pts: 'แต้ม', pt: 'แต้ม',
    applyEffect: '✅ รับผล',
    draw: '🤝 เสมอ', wins: 'ชนะ!',
    success: '✅ สำเร็จ', fail: '❌ ล้มเหลว', pass: '⏭ ข้าม',
    allCompete: '🎮 ทุกคนแข่ง!',
    time: 'เวลา', points: 'คะแนน', diff: 'ระดับ', score: 'การนับ',
    labels: { body:'🏃 ร่างกาย', brain:'🧠 สมอง', social:'💬 สังคม', h2h:'⚔️ ดวล',
              reward:'🪷 รางวัล', punish:'👻 โทษ', event:'❓ เหตุการณ์', minigame:'🎮 มินิเกม' },
  },
};
function isLangTh() { return localStorage.getItem('cardLang') === 'th'; }
function ui(key)     { return (isLangTh() ? CARD_UI.th : CARD_UI.en)[key]; }
function uiLabel(cat){ return (isLangTh() ? CARD_UI.th : CARD_UI.en).labels[cat] || cat; }

function cardText(card, field) {
  const th = isLangTh();
  if (field === 'title')       return (th && card.titleTh)       ? card.titleTh       : (card.title || '');
  if (field === 'instruction') return (th && (card.instructionTh || card.descriptionTh))
                                  ? (card.instructionTh || card.descriptionTh)
                                  : (card.instruction || card.description || '');
  return '';
}

// ── Category themes — card_bg_1 to card_bg_4 ──
// card_bg_1 = body (koi/teal),  card_bg_2 = brain (cherry blossom)
// card_bg_3 = social (green),   card_bg_4 = h2h/special (blue)
const CATEGORY_THEMES = {
  body:     { bgImg: 'assets/images/card/card_bg_1.png', badge: '#4caf50', text: '#1b5e20', label: '🏃 Body' },
  brain:    { bgImg: 'assets/images/card/card_bg_2.png', badge: '#e91e8c', text: '#880e4f', label: '🧠 Brain' },
  social:   { bgImg: 'assets/images/card/card_bg_3.png', badge: '#2e7d32', text: '#1b5e20', label: '💬 Social' },
  h2h:      { bgImg: 'assets/images/card/card_bg_4.png', badge: '#1565c0', text: '#0d47a1', label: '⚔️ H2H' },
  reward:   { bgImg: 'assets/images/card/card_bg_1.png', badge: '#f9a825', text: '#5d3a00', label: '🪷 Reward' },
  punish:   { bgImg: 'assets/images/card/card_bg_4.png', badge: '#c62828', text: '#7f0000', label: '👻 Punish' },
  event:    { bgImg: 'assets/images/card/card_bg_3.png', badge: '#4527a0', text: '#311b92', label: '❓ Event' },
  minigame: { bgImg: 'assets/images/card/card_bg_2.png', badge: '#e65100', text: '#bf360c', label: '🎮 Mini-Game' },
};

// ── Get random card based on space type ──
// Depends on card arrays defined in cards.js (loaded before this file)
function getCardForSpace(spaceType) {
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  switch (spaceType) {
    case 'normal':   return { deck: 'activity',  card: pick(ACTIVITY_CARDS)  };
    case 'reward':   return { deck: 'reward',    card: pick(REWARD_CARDS)    };
    case 'punish':   return { deck: 'punish',    card: pick(PUNISH_CARDS)    };
    case 'event':    return { deck: 'event',     card: pick(EVENT_CARDS)     };
    case 'minigame': return { deck: 'minigame',  card: pick(MINIGAME_CARDS)  };
    default:         return null;
  }
}

// ── State ──
let activeCard    = null;
let timerInterval = null;
let timerLeft     = 0;
let h2hChallenger = -1;  // index of the h2h opponent

// ── Show card popup when player lands ──
function showCardPopup(spaceType, playerIndex) {
  if (spaceType === 'start' || spaceType === 'end') return;

  const result = getCardForSpace(spaceType);
  if (!result) return;

  activeCard = result;
  const { deck, card } = result;

  // Pick challenger for h2h
  if (deck === 'activity' && card.category === 'h2h') {
    const others = [];
    for (let i = 0; i < playerCount; i++) {
      if (i !== playerIndex) others.push(i);
    }
    h2hChallenger = others[Math.floor(Math.random() * others.length)];
  } else {
    h2hChallenger = -1;
  }

  buildPopup(deck, card, playerIndex);
  document.getElementById('card-overlay').classList.add('active');
}

// ── Build popup HTML ──
function buildPopup(deck, card, playerIndex) {
  const theme = CATEGORY_THEMES[card.category || deck] || CATEGORY_THEMES.event;
  const overlay = document.getElementById('card-overlay');
  const isMinigame = deck === 'minigame';
  const isH2H      = card.category === 'h2h';
  const isEvent    = deck === 'event';
  const isReward   = deck === 'reward';
  const isPunish   = deck === 'punish';

  // H2H subtitle
  let subtitle = '';
  if (isH2H && h2hChallenger >= 0) {
    subtitle = `<div class="card-h2h-label">
      ⚔️ ${PLAYER_NAMES[playerIndex]} vs ${PLAYER_NAMES[h2hChallenger]}
    </div>`;
  }
  if (isMinigame) {
    subtitle = `<div class="card-h2h-label">${ui('allCompete')}</div>`;
  }

  // Timer section
  const hasTimer = card.time > 0;
  const timerHTML = hasTimer ? `
    <div class="card-timer-wrap">
      <div class="card-timer-ring">
        <svg width="72" height="72" viewBox="0 0 72 72">
          <circle class="timer-bg-circle"  cx="36" cy="36" r="30" />
          <circle class="timer-prog-circle" id="timer-prog" cx="36" cy="36" r="30"
            stroke-dasharray="188.5" stroke-dashoffset="0" />
        </svg>
        <div class="card-timer-num" id="timer-num">${card.time}</div>
      </div>
      <div class="card-timer-label">${ui('seconds')}</div>
    </div>
  ` : '';

  // Points badge
  const pts = card.points || 0;
  const ptsHTML = pts ? `<div class="card-points-badge">+${pts} ${ui('pts')}</div>` : '';

  // Action buttons
  let actionsHTML = '';
  if (isEvent || isReward || isPunish) {
    // No success/fail — just apply effect
    actionsHTML = `<button class="card-btn card-btn-confirm" onclick="applyCardEffect()">
      ${ui('applyEffect')}
    </button>`;
  } else if (isH2H) {
    actionsHTML = `
      <button class="card-btn card-btn-success" onclick="cardSuccess(${playerIndex})">
        🏆 ${PLAYER_NAMES[playerIndex]} ${ui('wins')}
      </button>
      <button class="card-btn card-btn-fail" onclick="cardSuccess(${h2hChallenger >= 0 ? h2hChallenger : playerIndex})">
        🏆 ${h2hChallenger >= 0 ? PLAYER_NAMES[h2hChallenger] : 'Opponent'} ${ui('wins')}
      </button>
      <button class="card-btn card-btn-pass" onclick="cardDraw()">${ui('draw')}</button>
    `;
  } else {
    actionsHTML = `
      <button class="card-btn card-btn-success" onclick="cardSuccess(${playerIndex})">
        ${ui('success')}
      </button>
      <button class="card-btn card-btn-fail" onclick="cardFail()">
        ${ui('fail')}
      </button>
      <button class="card-btn card-btn-pass" onclick="cardFail()">
        ${ui('pass')}
      </button>
    `;
  }

  const illustNum = card.illus || 1;
  const illustSrc = `assets/images/card/illustration_pic/${illustNum}.png`;

  overlay.innerHTML = `
    <div class="card-popup">

      <!-- BG image fills entire card -->
      <img class="card-bg-img" src="${theme.bgImg}" alt="" />

      <!-- Two-column layout: illustration left, content right -->
      <div class="card-inner">

        <!-- LEFT: illustration -->
        <div class="card-illus-wrap">
          <img class="card-illus-img" src="${illustSrc}" alt="illustration" />
        </div>

        <!-- RIGHT: content panel -->
        <div class="card-content-panel">

          <!-- Top row: badge + points -->
          <div class="card-top-row">
            <div class="card-badge" style="background:${theme.badge}; color:#fff">
              ${uiLabel(card.category || deck)}
            </div>
            ${ptsHTML}
          </div>

          <!-- Card title -->
          <div class="card-title-en" style="color:${theme.text}">${cardText(card, 'title')}</div>

          ${subtitle}

          <!-- Instructions -->
          <div class="card-instruction-en">${cardText(card, 'instruction')}</div>

          <!-- Stats row (only for activity cards) -->
          ${card.diff ? `
            <div class="card-stats">
              <div class="stat-cell"><div class="stat-val">${card.time}s</div><div class="stat-lbl">${ui('time')}</div></div>
              <div class="stat-cell"><div class="stat-val">${card.points} ${card.points !== 1 ? ui('pts') : ui('pt')}</div><div class="stat-lbl">${ui('points')}</div></div>
              <div class="stat-cell"><div class="stat-val">${card.diff}</div><div class="stat-lbl">${ui('diff')}</div></div>
              <div class="stat-cell"><div class="stat-val">${card.scoring}</div><div class="stat-lbl">${ui('score')}</div></div>
            </div>
          ` : ''}

          <!-- Timer + Action buttons -->
          <div class="card-bottom-row">
            ${timerHTML}
            <div class="card-actions">${actionsHTML}</div>
          </div>

        </div><!-- end card-content-panel -->
      </div><!-- end card-inner -->
    </div>
  `;

  // Start timer if applicable
  if (hasTimer && !isEvent && !isReward && !isPunish) {
    startCardTimer(card.time);
  }
}

// ── Timer ──
function startCardTimer(seconds) {
  stopCardTimer();
  timerLeft = seconds;
  const total = seconds;
  const prog  = document.getElementById('timer-prog');
  const num   = document.getElementById('timer-num');
  const circ  = 188.5;

  timerInterval = setInterval(() => {
    timerLeft--;
    if (num) num.textContent = timerLeft;
    if (prog) {
      const offset = circ * (1 - timerLeft / total);
      prog.style.strokeDashoffset = offset;
    }
    if (timerLeft <= 5 && prog) prog.style.stroke = '#e53935';
    if (timerLeft <= 0) {
      stopCardTimer();
      // Flash time's up
      const numEl = document.getElementById('timer-num');
      if (numEl) { numEl.textContent = '⏰'; numEl.style.fontSize = '20px'; }
    }
  }, 1000);
}

function stopCardTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

// ── Outcome handlers ──
function cardSuccess(winnerIndex) {
  stopCardTimer();
  const pts = activeCard?.card?.points || 0;
  scores[winnerIndex] += pts;
  updateScore(winnerIndex);
  closeCardPopup();
  showToast(`🎉 ${PLAYER_NAMES[winnerIndex]} +${pts} pts!`);
  endTurn();
}

function cardFail() {
  stopCardTimer();
  closeCardPopup();
  showToast(`❌ No points this round.`);
  endTurn();
}

function cardDraw() {
  stopCardTimer();
  closeCardPopup();
  showToast(`🤝 It's a draw — no points.`);
  endTurn();
}

function applyCardEffect() {
  stopCardTimer();
  const card = activeCard?.card;
  if (!card) { closeCardPopup(); endTurn(); return; }

  switch (card.effect) {
    case 'points':
      scores[currentTurn] += card.value;
      updateScore(currentTurn);
      showToast(`⭐ ${PLAYER_NAMES[currentTurn]} +${card.value} pts!`);
      break;
    case 'extraTurn':
      showToast(`⭐ ${PLAYER_NAMES[currentTurn]} gets an extra turn!`);
      closeCardPopup();
      // Don't advance turn
      document.getElementById('roll-btn').disabled = false;
      isRolling = false;
      return;
    case 'move':
      movePlayerForward(currentTurn, card.value);
      showToast(`🚀 ${PLAYER_NAMES[currentTurn]} moves +${card.value} spaces!`);
      break;
    case 'moveBack':
      movePlayerBack(currentTurn, card.value);
      showToast(`😬 ${PLAYER_NAMES[currentTurn]} goes back ${card.value} spaces!`);
      break;
    case 'freeze':
      frozenPlayers[currentTurn] = true;
      showToast(`🥶 ${PLAYER_NAMES[currentTurn]} is frozen next turn!`);
      break;
    case 'reverse':
      turnDirection *= -1;
      showToast(`🔄 Turn order reversed!`);
      break;
    case 'groupDance':
      for (let i = 0; i < playerCount; i++) { scores[i] += 1; updateScore(i); }
      showToast(`💃 Everyone dances! All +1 pt!`);
      break;
    case 'quake':
      for (let i = 0; i < playerCount; i++) {
        if (scores[i] >= 10) { scores[i] -= 3; } else { scores[i] += 2; }
        updateScore(i);
      }
      showToast(`🌋 Point Earthquake!`);
      break;
    case 'steal': {
      const leader = scores.indexOf(Math.max(...scores));
      if (leader !== currentTurn) {
        scores[leader]       -= 2;
        scores[currentTurn]  += 2;
        updateScore(leader);
        updateScore(currentTurn);
        showToast(`😈 Stole 2 pts from ${PLAYER_NAMES[leader]}!`);
      }
      break;
    }
    case 'doubleOrNothing': {
      const flip = Math.random() < 0.5;
      scores[currentTurn] += flip ? 3 : -2;
      updateScore(currentTurn);
      showToast(flip ? `🍀 Heads! +3 pts!` : `💀 Tails! -2 pts!`);
      break;
    }
    case 'luckyMove': {
      const roll = Math.ceil(Math.random() * 6);
      movePlayerForward(currentTurn, roll);
      showToast(`🍀 Lucky! Move +${roll} spaces!`);
      break;
    }
    case 'bonusRound':
      closeCardPopup();
      showMinigameForAll();
      return;
    default:
      showToast(`✅ Effect applied!`);
  }

  closeCardPopup();
  endTurn();
}

// ── Move helpers ──
function movePlayerForward(playerIndex, steps) {
  const max = SPACES.length - 1;
  positions[playerIndex] = Math.min(positions[playerIndex] + steps, max);
  const token = document.getElementById(`token-${playerIndex}`);
  placeToken(token, positions[playerIndex], playerIndex);
}

function movePlayerBack(playerIndex, steps) {
  positions[playerIndex] = Math.max(positions[playerIndex] - steps, 0);
  const token = document.getElementById(`token-${playerIndex}`);
  placeToken(token, positions[playerIndex], playerIndex);
}

// ── Show a random minigame for all players ──
function showMinigameForAll() {
  const result = getCardForSpace('minigame');
  activeCard = result;
  buildPopup('minigame', result.card, currentTurn);
  document.getElementById('card-overlay').classList.add('active');
}

// ── Close popup ──
function closeCardPopup() {
  stopCardTimer();
  document.getElementById('card-overlay').classList.remove('active');
  activeCard = null;
}

// ── Toast notification ──
let toastTimer;
function showToast(msg) {
  let toast = document.getElementById('game-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'game-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}