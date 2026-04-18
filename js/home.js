/* ============================================================
   HOME.JS — Logic for index.html (Home + Player Selection)
============================================================ */

// ── State ──
let selectedPlayers = 0;

// ── Screen helpers ──
function showScreen(id) {
  document.querySelectorAll('.ui-layer').forEach(el => el.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ── Home screen ──
function openSettings() {
  updateLangButtons();
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
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('lang-th').classList.toggle('active', lang === 'th');
}

function openAchievements() { console.log('Achievements'); }
function showCards()        { console.log('Cards'); }

// ── Player selection ──
function openPlayerSelection()  { showScreen('player-selection'); }
function closePlayerSelection() {
  selectedPlayers = 0;
  document.querySelectorAll('.player-choice').forEach(btn => btn.classList.remove('selected'));
  showScreen('home-screen');
}

function selectCount(num, btn) {
  selectedPlayers = num;
  // Highlight the chosen coin
  document.querySelectorAll('.player-choice').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  console.log('Selected players:', num);
}

function confirmSelection() {
  if (selectedPlayers < 1) {
    alert('Please select a player count first.');
    return;
  }
  // Save player count then go to the map page
  sessionStorage.setItem('playerCount', selectedPlayers);
  window.location.href = 'map.html';
}