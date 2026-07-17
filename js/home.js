/* ============================================================
   HOME.JS — Logic for index.html (Home + Player Selection)
============================================================ */

// ── State ──
let selectedPlayers = 0;
const SAVES_KEY = 'brainblooming_saves';

function getSaves() {
  try { return JSON.parse(localStorage.getItem(SAVES_KEY) || '[]'); } catch { return []; }
}

// ── Show Load Game button only if saves exist ──
window.addEventListener('DOMContentLoaded', () => {
  updateLangButtons();
  if (getSaves().length > 0) {
    document.getElementById('continue-btn').style.display = 'block';
  }
});

// ── Load screen ──
function renderLoadList() {
  const saves = getSaves();
  const list  = document.getElementById('load-save-list');

  if (!saves.length) {
    closeLoadScreen();
    document.getElementById('continue-btn').style.display = 'none';
    return;
  }

  list.innerHTML = saves.map(s => `
    <div class="load-save-row">
      <button class="load-save-item" onclick="loadSave('${s.id}')">
        <span class="load-save-slot">Save ${s.slot}</span>
        <span class="load-save-names">${(s.playerNames || []).join(' · ') || 'Players'}</span>
        <span class="load-save-date">${s.savedAt || ''}</span>
      </button>
      <button class="load-save-delete" onclick="deleteSave('${s.id}')" title="Delete" aria-label="Delete save">🗑</button>
    </div>
  `).join('');
}

function openLoadScreen() {
  if (!getSaves().length) return;
  SFX.click();
  renderLoadList();
  document.getElementById('load-screen-modal').classList.add('active');
}

function closeLoadScreen() {
  SFX.click();
  document.getElementById('load-screen-modal').classList.remove('active');
}

function loadSave(id) {
  const save = getSaves().find(s => s.id === id);
  if (!save) return;
  sessionStorage.setItem('playerCount', save.playerCount);
  sessionStorage.setItem('playerNames', JSON.stringify(save.playerNames || []));
  sessionStorage.setItem('currentSaveId', id);
  window.location.href = 'map.html';
}

function deleteSave(id) {
  SFX.deleteSave();
  const saves = getSaves().filter(s => s.id !== id);
  localStorage.setItem(SAVES_KEY, JSON.stringify(saves));
  renderLoadList();
}

// ── Screen helpers ──
function showScreen(id) {
  document.querySelectorAll('.ui-layer').forEach(el => el.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ── Home screen ──
function updateSoundButton() {
  const btn = document.getElementById('sound-toggle-btn');
  if (!btn) return;
  const on = BGM.isEnabled();
  btn.textContent = on ? 'ON' : 'OFF';
  btn.classList.toggle('active', on);
}

function toggleSound() {
  BGM.toggle();
  updateSoundButton();
}

function openSettings() {
  updateLangButtons();
  updateSoundButton();
  document.getElementById('settings-modal').classList.add('active');
}
function closeSettings(e) {
  if (e && e.target !== document.getElementById('settings-modal')) return;
  document.getElementById('settings-modal').classList.remove('active');
}
function setCardLang(lang) {
  localStorage.setItem('cardLang', lang);
  updateLangButtons();
}
function updateLangButtons() {
  const lang = localStorage.getItem('cardLang') || 'en';
  document.documentElement.lang = lang === 'th' ? 'th' : 'en';
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('lang-th').classList.toggle('active', lang === 'th');
}

// ── Card list ──
const HOME_THEMES = {
  body:   { bgImg:'assets/images/card/card_bg_1.png', badge:'#4caf50', text:'#1b5e20' },
  brain:  { bgImg:'assets/images/card/card_bg_2.png', badge:'#e91e8c', text:'#880e4f' },
  social: { bgImg:'assets/images/card/card_bg_3.png', badge:'#2e7d32', text:'#1b5e20' },
  h2h:    { bgImg:'assets/images/card/card_bg_4.png', badge:'#1565c0', text:'#0d47a1' },
};
const HOME_CAT_LABEL = {
  en: { body:'🏃 Body', brain:'🧠 Brain', social:'💬 Social', h2h:'⚔️ H2H' },
  th: { body:'🏃 ร่างกาย', brain:'🧠 สมอง', social:'💬 สังคม', h2h:'⚔️ ดวล' },
};

function showCards() {
  const th   = localStorage.getItem('cardLang') === 'th';
  const cats = [
    { key:'all',    en:'All Cards',  th:'การ์ดทั้งหมด', n: ACTIVITY_CARDS.length },
    { key:'body',   en:'🏃 Body',    th:'🏃 ร่างกาย',   n: ACTIVITY_CARDS.filter(c=>c.category==='body').length },
    { key:'brain',  en:'🧠 Brain',   th:'🧠 สมอง',      n: ACTIVITY_CARDS.filter(c=>c.category==='brain').length },
    { key:'social', en:'💬 Social',  th:'💬 สังคม',     n: ACTIVITY_CARDS.filter(c=>c.category==='social').length },
    { key:'h2h',    en:'⚔️ H2H',     th:'⚔️ ดวล',       n: ACTIVITY_CARDS.filter(c=>c.category==='h2h').length },
  ];

  document.getElementById('cls-title').textContent = th ? 'รายการการ์ด' : 'Card List';
  document.getElementById('cls-tabs').innerHTML = cats.map((c, i) =>
    `<button class="cls-tab${i===0?' active':''}" onclick="filterCardList('${c.key}',this)">
      ${th ? c.th : c.en} <span class="cls-tab-count">${c.n}</span>
    </button>`
  ).join('');

  filterCardList('all');
  document.getElementById('cards-list-overlay').classList.add('active');
}

function closeCards() {
  document.getElementById('cards-list-overlay').classList.remove('active');
}

function filterCardList(cat, btn) {
  if (btn) {
    document.querySelectorAll('.cls-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
  }

  const th    = localStorage.getItem('cardLang') === 'th';
  const lang  = th ? 'th' : 'en';
  const cards = cat === 'all' ? ACTIVITY_CARDS : ACTIVITY_CARDS.filter(c => c.category === cat);

  const html = cards.map(card => {
    const theme   = HOME_THEMES[card.category] || HOME_THEMES.body;
    const title   = (th && card.titleTh) ? card.titleTh : card.title;
    const catLabel = (HOME_CAT_LABEL[lang][card.category] || card.category)
                     + (card.diff ? ' · ' + card.diff : '');
    const pts     = card.points || 0;

    let instr = (th && (card.instructionTh || card.descriptionTh))
      ? (card.instructionTh || card.descriptionTh)
      : (card.instruction   || card.description || '');
    if (card.manualKey) {
      const chip = `<span class="cls-rand-badge">🎲 ${th ? 'สุ่มคำถาม' : 'random'}</span>`;
      instr = instr.replace('{manual}', chip);
    }

    const illustSrc = card.illus
      ? `assets/images/card/illustration_pic/${card.illus}.png`
      : `assets/images/card/illustration_pic/Morning Stretch.png`;

    return `
      <div class="cls-card-wrap">
        <div class="card-popup cls-no-anim">
          <img class="card-bg-img" src="${theme.bgImg}" alt="" loading="lazy" decoding="async" />
          <div class="card-inner">
            <div class="card-illus-wrap">
              <img class="card-illus-img" src="${illustSrc}" alt="${card.title}" loading="lazy" decoding="async" />
            </div>
            <div class="card-content-panel">
              <div class="card-top-row">
                <div class="card-badge" style="background:${theme.badge};color:#fff">${catLabel}</div>
                ${pts ? `<div class="card-points-badge">+${pts} ${pts!==1?'pts':'pt'}</div>` : ''}
              </div>
              <div class="card-title-en" style="color:${theme.text}">${title}</div>
              <div class="card-instruction-en">${instr}</div>
            </div>
          </div>
        </div>
      </div>`;
  }).join('');

  document.getElementById('cls-grid').innerHTML = html || `<p class="cls-empty">No cards found.</p>`;
}

// ── Player selection ──
function openPlayerSelection()  { SFX.click(); showScreen('player-selection'); }
function closePlayerSelection() {
  SFX.click();
  selectedPlayers = 0;
  document.querySelectorAll('.player-choice').forEach(btn => btn.classList.remove('selected'));
  showScreen('home-screen');
}

const DEFAULT_NAMES = ['Player 1', 'Player 2', 'Player 3', 'Player 4'];

const SETUP_TOKENS = [
  'assets/images/map_game/player1.png',
  'assets/images/map_game/player2.png',
  'assets/images/map_game/player3.png',
  'assets/images/map_game/player4.png',
];

function selectCount(num, btn) {
  SFX.click();
  selectedPlayers = num;
  document.querySelectorAll('.player-choice').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');

  const container = document.getElementById('name-inputs');
  container.innerHTML = Array.from({ length: num }, (_, i) => `
    <div class="name-input-wrap">
      <img class="token-thumb" src="${SETUP_TOKENS[i]}" alt="Player ${i + 1}" />
      <input class="name-input" id="name-p${i}" type="text"
             placeholder="${DEFAULT_NAMES[i]}" maxlength="16" />
    </div>`).join('');
  container.style.display = 'flex';
}

function confirmSelection() {
  SFX.click();
  if (selectedPlayers < 1) {
    alert('Please select a player count first.');
    return;
  }
  const names = Array.from({ length: selectedPlayers }, (_, i) => {
    const val = (document.getElementById(`name-p${i}`)?.value || '').trim();
    return val || DEFAULT_NAMES[i];
  });
  sessionStorage.removeItem('currentSaveId');
  sessionStorage.setItem('playerCount', selectedPlayers);
  sessionStorage.setItem('playerNames', JSON.stringify(names));
  window.location.href = 'map.html';
}