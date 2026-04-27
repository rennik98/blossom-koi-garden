/* ============================================================
   GAMEPLAY.JS — Card popup logic & game flow
============================================================ */

// ── Language helpers ──
const CARD_UI = {
  en: {
    pts: 'pts', pt: 'pt',
    applyEffect: '✅ Apply Effect',
    draw: '🤝 Draw', wins: 'Wins!',
    success: '✅ Success', fail: '❌ Fail', pass: '⏭ Pass',
    allCompete: '🎮 ALL players compete!',
    points: 'POINTS', diff: 'DIFF',
    startTimer: '▶ Start', stopTimer: '⏹ Stop',
    voteTitle: '⭐ Vote Time!', voteFail: '❌ Fail', votePass: '✅ Pass',
    voteQ: (name) => `Did ${name} complete the challenge?`,
    voteWaiting: (n) => `Waiting for ${n} more…`,
    labels: { body:'🏃 Body', brain:'🧠 Brain', social:'💬 Social', h2h:'⚔️ H2H',
              reward:'🪷 Reward', punish:'👻 Punish', event:'❓ Event', minigame:'🎮 Mini-Game' },
  },
  th: {
    pts: 'แต้ม', pt: 'แต้ม',
    applyEffect: '✅ รับผล',
    draw: '🤝 เสมอ', wins: 'ชนะ!',
    success: '✅ สำเร็จ', fail: '❌ ล้มเหลว', pass: '⏭ ข้าม',
    allCompete: '🎮 ทุกคนแข่ง!',
    points: 'คะแนน', diff: 'ระดับ',
    startTimer: '▶ เริ่ม', stopTimer: '⏹ หยุด',
    voteTitle: '⭐ โหวตเลย!', voteFail: '❌ ไม่ผ่าน', votePass: '✅ ผ่าน',
    voteQ: (name) => `${name} ทำสำเร็จไหม?`,
    voteWaiting: (n) => `รออีก ${n} คน…`,
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

// ── Category themes ──
const CATEGORY_THEMES = {
  body:     { bgImg: 'assets/images/card/card_bg_1.png', badge: '#4caf50', text: '#1b5e20' },
  brain:    { bgImg: 'assets/images/card/card_bg_2.png', badge: '#e91e8c', text: '#880e4f' },
  social:   { bgImg: 'assets/images/card/card_bg_3.png', badge: '#2e7d32', text: '#1b5e20' },
  h2h:      { bgImg: 'assets/images/card/card_bg_4.png', badge: '#1565c0', text: '#0d47a1' },
  reward:   { bgImg: 'assets/images/card/card_bg_1.png', badge: '#f9a825', text: '#5d3a00' },
  punish:   { bgImg: 'assets/images/card/card_bg_4.png', badge: '#c62828', text: '#7f0000' },
  event:    { bgImg: 'assets/images/card/card_bg_3.png', badge: '#4527a0', text: '#311b92' },
  minigame: { bgImg: 'assets/images/card/card_bg_2.png', badge: '#e65100', text: '#bf360c' },
};

// ── Resolve {manual} placeholders for cards that use the manual ──
function resolveManualCard(card) {
  const pool = MANUAL_DATA[card.manualKey];
  if (!pool || !pool.length) return card;
  const item  = pool[Math.floor(Math.random() * pool.length)];
  const valEn = (typeof item === 'object') ? item.en : item;
  const valTh = (typeof item === 'object') ? item.th : item;
  return Object.assign({}, card, {
    instruction:   card.instruction.replace('{manual}', valEn),
    instructionTh: card.instructionTh.replace('{manual}', valTh),
  });
}

// ── Get random card based on space type ──
function getCardForSpace(spaceType) {
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  let result;
  switch (spaceType) {
    case 'normal':   result = { deck: 'activity',  card: pick(ACTIVITY_CARDS)  }; break;
    case 'reward':   result = { deck: 'reward',    card: pick(REWARD_CARDS)    }; break;
    case 'punish':   result = { deck: 'punish',    card: pick(PUNISH_CARDS)    }; break;
    case 'event':    result = { deck: 'event',     card: pick(EVENT_CARDS)     }; break;
    case 'minigame': result = { deck: 'minigame',  card: pick(MINIGAME_CARDS)  }; break;
    default:         return null;
  }
  if (result.card.manualKey) {
    result = { deck: result.deck, card: resolveManualCard(result.card) };
  }
  return result;
}

// ── State ──
let activeCard    = null;
let h2hChallenger = -1;

// Stopwatch state
let swInterval = null;
let swSeconds  = 0;

// Vote state
let voteData = null;

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
  const theme     = CATEGORY_THEMES[card.category || deck] || CATEGORY_THEMES.event;
  const overlay   = document.getElementById('card-overlay');
  const isMinigame = deck === 'minigame';
  const isH2H      = card.category === 'h2h';
  const isEvent    = deck === 'event';
  const isReward   = deck === 'reward';
  const isPunish   = deck === 'punish';

  // Cards that use stopwatch + group vote (body / brain / social)
  const needsVote = !isH2H && !isEvent && !isReward && !isPunish && !isMinigame;

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

  // Points badge
  const pts = card.points || 0;
  const ptsHTML = pts ? `<div class="card-points-badge">+${pts} ${ui('pts')}</div>` : '';

  // Bottom area — stopwatch OR action buttons
  let bottomHTML = '';
  if (needsVote) {
    bottomHTML = `
      <div class="card-stopwatch-wrap">
        <div class="sw-display" id="sw-display">0s</div>
        <button class="card-btn sw-btn" id="sw-btn"
          onclick="toggleStopwatch(${playerIndex})">
          ${ui('startTimer')}
        </button>
      </div>`;
  } else {
    let actionsHTML = '';
    if (isEvent || isReward || isPunish) {
      actionsHTML = `<button class="card-btn card-btn-confirm" onclick="applyCardEffect()">
        ${ui('applyEffect')}
      </button>`;
    } else if (isH2H) {
      actionsHTML = `
        <button class="card-btn card-btn-success" onclick="cardSuccess(${playerIndex})">
          🏆 ${PLAYER_NAMES[playerIndex]} ${ui('wins')}
        </button>
        <button class="card-btn card-btn-fail"
          onclick="cardSuccess(${h2hChallenger >= 0 ? h2hChallenger : playerIndex})">
          🏆 ${h2hChallenger >= 0 ? PLAYER_NAMES[h2hChallenger] : 'Opponent'} ${ui('wins')}
        </button>
        <button class="card-btn card-btn-pass" onclick="cardDraw()">${ui('draw')}</button>
      `;
    } else {
      // minigame
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
    bottomHTML = `<div class="card-actions">${actionsHTML}</div>`;
  }

  // Illustration — matched by card title name
  const illustSrc = card.illus
    ? `assets/images/card/illustration_pic/${card.illus}.png`
    : `assets/images/card/illustration_pic/Morning Stretch.png`;

  overlay.innerHTML = `
    <div class="card-popup">
      <img class="card-bg-img" src="${theme.bgImg}" alt="" />

      <div class="card-inner">
        <!-- LEFT: illustration -->
        <div class="card-illus-wrap">
          <img class="card-illus-img" src="${illustSrc}" alt="illustration" />
        </div>

        <!-- RIGHT: content panel -->
        <div class="card-content-panel">

          <div class="card-top-row">
            <div class="card-badge" style="background:${theme.badge}; color:#fff">
              ${uiLabel(card.category || deck)}${card.diff ? ' · ' + card.diff : ''}
            </div>
            ${ptsHTML}
          </div>

          <div class="card-title-en" style="color:${theme.text}">${cardText(card, 'title')}</div>

          ${subtitle}

          <div class="card-instruction-en">${cardText(card, 'instruction')}</div>

          <div class="card-bottom-row">
            ${bottomHTML}
          </div>

        </div>
      </div>
    </div>
  `;
}

// ── Stopwatch ──
function toggleStopwatch(playerIndex) {
  if (swInterval) {
    // Stop → go to voting
    clearInterval(swInterval);
    swInterval = null;
    if (playerCount <= 1) {
      cardSuccess(playerIndex);
    } else {
      startVoting(playerIndex);
    }
  } else {
    // Start counting up
    swSeconds = 0;
    updateSwDisplay();
    const btn  = document.getElementById('sw-btn');
    const disp = document.getElementById('sw-display');
    if (btn)  { btn.textContent = ui('stopTimer'); btn.classList.add('sw-running'); }
    if (disp) disp.classList.add('sw-ticking');
    swInterval = setInterval(() => {
      swSeconds++;
      updateSwDisplay();
    }, 1000);
  }
}

function updateSwDisplay() {
  const el = document.getElementById('sw-display');
  if (!el) return;
  const m = Math.floor(swSeconds / 60);
  const s = swSeconds % 60;
  el.textContent = m > 0 ? `${m}:${String(s).padStart(2, '0')}` : `${swSeconds}s`;
}

// ── Voting ──
function startVoting(playerIndex) {
  const voters = [];
  for (let i = 0; i < playerCount; i++) {
    if (i !== playerIndex) voters.push(i);
  }
  voteData = { playerIndex, voters, votes: {} };
  renderVoteScreen();
}

function renderVoteScreen() {
  const { playerIndex, voters, votes } = voteData;
  const th         = isLangTh();
  const playerName = PLAYER_NAMES[playerIndex];
  const card       = activeCard?.card;
  const theme      = CATEGORY_THEMES[card?.category] || CATEGORY_THEMES.event;

  const rows = voters.map(i => {
    if (votes[i] !== undefined) {
      const passed = votes[i] === 'pass';
      return `
        <div class="vote-row voted">
          <span class="voter-name">${PLAYER_NAMES[i]}</span>
          <span class="vote-cast ${passed ? 'vote-yes' : 'vote-no'}">${passed ? '✅' : '❌'}</span>
        </div>`;
    }
    return `
      <div class="vote-row pending">
        <span class="voter-name">${PLAYER_NAMES[i]}</span>
        <div class="vote-btns">
          <button class="vote-btn vote-btn-pass" onclick="castVote(${i},'pass')">
            ${ui('votePass')}
          </button>
          <button class="vote-btn vote-btn-fail" onclick="castVote(${i},'fail')">
            ${ui('voteFail')}
          </button>
        </div>
      </div>`;
  }).join('');

  const remaining = voters.filter(i => votes[i] === undefined).length;

  document.getElementById('card-overlay').innerHTML = `
    <div class="vote-panel" style="--accent:${theme.badge}">
      <div class="vote-header">
        <div class="vote-title">${ui('voteTitle')}</div>
        <div class="vote-question">${(isLangTh() ? CARD_UI.th : CARD_UI.en).voteQ(playerName)}</div>
      </div>
      <div class="vote-list">${rows}</div>
      ${remaining > 0
        ? `<div class="vote-footer">${(isLangTh() ? CARD_UI.th : CARD_UI.en).voteWaiting(remaining)}</div>`
        : ''}
    </div>
  `;
}

function castVote(voterIdx, choice) {
  if (!voteData) return;
  voteData.votes[voterIdx] = choice;
  const allDone = voteData.voters.every(i => voteData.votes[i] !== undefined);
  if (allDone) {
    resolveVotes();
  } else {
    renderVoteScreen();
  }
}

function resolveVotes() {
  const { playerIndex, voters, votes } = voteData;
  const passes  = voters.filter(i => votes[i] === 'pass').length;
  const majority = passes > voters.length / 2;
  voteData = null;
  if (majority) {
    cardSuccess(playerIndex);
  } else {
    cardFail();
  }
}

// ── Outcome handlers ──
function cardSuccess(winnerIndex) {
  const pts = activeCard?.card?.points || 0;
  scores[winnerIndex] += pts;
  updateScore(winnerIndex);
  closeCardPopup();
  showToast(`🎉 ${PLAYER_NAMES[winnerIndex]} +${pts} pts!`);
  endTurn();
}

function cardFail() {
  closeCardPopup();
  showToast(`❌ No points this round.`);
  endTurn();
}

function cardDraw() {
  closeCardPopup();
  showToast(`🤝 It's a draw — no points.`);
  endTurn();
}

function applyCardEffect() {
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
        scores[leader]      -= 2;
        scores[currentTurn] += 2;
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
  clearInterval(swInterval);
  swInterval = null;
  swSeconds  = 0;
  voteData   = null;
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
