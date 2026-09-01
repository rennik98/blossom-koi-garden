/* ============================================================
   AI-FACILITATOR.JS — "Ask Bloom" floating chat widget
   Calls the server-side proxy at /api/facilitator (never talks
   to the Claude API directly — the API key stays server-side).
============================================================ */

const BLOOM_UI = {
  en: {
    fab: 'Ask Bloom', title: '🌸 Ask Bloom', placeholder: 'Ask about this card or the rules…',
    send: 'Send', thinking: 'Bloom is thinking…',
    error: "Bloom couldn't answer that — please try again.",
    readAloud: '🔊 Read aloud', contextPrefix: 'About: ',
  },
  th: {
    fab: 'ถามบลูม', title: '🌸 ถามบลูม', placeholder: 'ถามเกี่ยวกับการ์ดนี้หรือกติกาเกม…',
    send: 'ส่ง', thinking: 'บลูมกำลังคิด…',
    error: 'บลูมตอบไม่ได้ในตอนนี้ — ลองอีกครั้งนะ',
    readAloud: '🔊 อ่านออกเสียง', contextPrefix: 'เกี่ยวกับ: ',
  },
};

function bloomLangTh() {
  return localStorage.getItem('cardLang') === 'th';
}
function bloomUi(key) {
  return (bloomLangTh() ? BLOOM_UI.th : BLOOM_UI.en)[key];
}

// Pulls the currently-open card (if any) from gameplay.js's global state,
// so questions can be answered "about this card" without the player
// having to re-type it.
function bloomCurrentCardContext() {
  if (typeof activeCard === 'undefined' || !activeCard || !activeCard.card) return null;
  if (typeof cardText !== 'function') return null;
  return {
    cardTitle: cardText(activeCard.card, 'title'),
    cardInstruction: cardText(activeCard.card, 'instruction').replace(/<[^>]+>/g, ''),
  };
}

let bloomOpen = false;
let bloomBusy = false;

function bloomBuildWidget() {
  const fab = document.createElement('button');
  fab.id = 'bloom-fab';
  fab.className = 'bloom-fab';
  fab.setAttribute('aria-label', 'Ask Bloom');
  fab.onclick = bloomToggle;
  fab.innerHTML = `<span class="bloom-fab-icon">🌸</span><span class="bloom-fab-label" id="bloom-fab-label"></span>`;

  const panel = document.createElement('div');
  panel.id = 'bloom-panel';
  panel.className = 'bloom-panel';
  panel.innerHTML = `
    <div class="bloom-panel-header">
      <span class="bloom-panel-title" id="bloom-panel-title"></span>
      <button class="bloom-panel-close" id="bloom-panel-close" aria-label="Close">✕</button>
    </div>
    <div class="bloom-panel-messages" id="bloom-messages"></div>
    <div class="bloom-panel-context" id="bloom-context"></div>
    <form class="bloom-panel-form" id="bloom-form">
      <input class="bloom-panel-input" id="bloom-input" type="text" autocomplete="off" maxlength="500" />
      <button class="bloom-panel-send" id="bloom-send" type="submit"></button>
    </form>
  `;

  document.body.appendChild(fab);
  document.body.appendChild(panel);

  document.getElementById('bloom-panel-close').onclick = bloomToggle;
  document.getElementById('bloom-form').onsubmit = bloomSubmit;

  bloomRefreshLang();
}

function bloomRefreshLang() {
  const label = document.getElementById('bloom-fab-label');
  const title = document.getElementById('bloom-panel-title');
  const input = document.getElementById('bloom-input');
  const send  = document.getElementById('bloom-send');
  if (!label) return;
  label.textContent = bloomUi('fab');
  title.textContent = bloomUi('title');
  input.placeholder = bloomUi('placeholder');
  send.textContent  = bloomUi('send');
  bloomRefreshContextLine();
}

function bloomRefreshContextLine() {
  const ctxEl = document.getElementById('bloom-context');
  if (!ctxEl) return;
  const ctx = bloomCurrentCardContext();
  if (ctx && ctx.cardTitle) {
    ctxEl.textContent = bloomUi('contextPrefix') + ctx.cardTitle;
    ctxEl.classList.add('show');
  } else {
    ctxEl.classList.remove('show');
  }
}

function bloomToggle() {
  bloomOpen = !bloomOpen;
  document.getElementById('bloom-panel').classList.toggle('open', bloomOpen);
  if (bloomOpen) {
    bloomRefreshLang();
    document.getElementById('bloom-input').focus();
  }
}

function bloomAddMessage(role, text, isError) {
  const list = document.getElementById('bloom-messages');
  const bubble = document.createElement('div');
  bubble.className = 'bloom-msg ' + (role === 'user' ? 'bloom-msg-user' : 'bloom-msg-bloom');
  if (isError) bubble.classList.add('bloom-msg-error');
  bubble.textContent = text;
  list.appendChild(bubble);
  list.scrollTop = list.scrollHeight;
  return bubble;
}

function bloomAddReadAloudButton(bubble, text) {
  if (typeof TTS === 'undefined' || !('speechSynthesis' in window)) return;
  const btn = document.createElement('button');
  btn.className = 'bloom-msg-read-btn';
  btn.textContent = bloomUi('readAloud');
  btn.onclick = () => TTS.speak(text, bloomLangTh() ? 'th' : 'en');
  bubble.appendChild(document.createElement('br'));
  bubble.appendChild(btn);
}

async function bloomSubmit(e) {
  e.preventDefault();
  if (bloomBusy) return;

  const input = document.getElementById('bloom-input');
  const message = input.value.trim();
  if (!message) return;

  input.value = '';
  bloomAddMessage('user', message);
  const thinkingBubble = bloomAddMessage('bloom', bloomUi('thinking'));
  thinkingBubble.classList.add('bloom-msg-thinking');

  bloomBusy = true;
  document.getElementById('bloom-send').disabled = true;

  try {
    const res = await fetch('/api/facilitator', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        lang: bloomLangTh() ? 'th' : 'en',
        context: bloomCurrentCardContext(),
      }),
    });
    const data = await res.json();

    thinkingBubble.remove();
    if (!res.ok || !data.reply) {
      bloomAddMessage('bloom', data.error || bloomUi('error'), true);
    } else {
      const replyBubble = bloomAddMessage('bloom', data.reply);
      bloomAddReadAloudButton(replyBubble, data.reply);
    }
  } catch (err) {
    thinkingBubble.remove();
    bloomAddMessage('bloom', bloomUi('error'), true);
  } finally {
    bloomBusy = false;
    document.getElementById('bloom-send').disabled = false;
  }
}

document.addEventListener('DOMContentLoaded', bloomBuildWidget);
