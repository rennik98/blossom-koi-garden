/* ============================================================
   SFX.JS — Procedural sound effects via Web Audio API
============================================================ */
const SFX = (() => {
  let _ctx = null;

  function getCtx() {
    if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (_ctx.state === 'suspended') _ctx.resume();
    return _ctx;
  }

  function isEnabled() {
    return localStorage.getItem('audioEnabled') !== 'false';
  }

  function play(fn) {
    if (!isEnabled()) return;
    try {
      const ac = getCtx();
      if (typeof BGM !== 'undefined') BGM.start();
      fn(ac);
    } catch (e) {}
  }

  // Oscillator helper: type, freq, gain, startOffset, endOffset (seconds from now)
  function osc(ac, type, freq, gainVal, t0, t1) {
    const o = ac.createOscillator();
    const g = ac.createGain();
    o.type = type;
    o.frequency.value = freq;
    o.connect(g);
    g.connect(ac.destination);
    const now = ac.currentTime;
    g.gain.setValueAtTime(gainVal, now + t0);
    g.gain.exponentialRampToValueAtTime(0.0001, now + t1);
    o.start(now + t0);
    o.stop(now + t1 + 0.01);
  }

  // White noise helper with optional bandpass filter
  function noise(ac, duration, gainVal, bandpassFreq) {
    const sr  = ac.sampleRate;
    const buf = ac.createBuffer(1, Math.ceil(sr * duration), sr);
    const d   = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const src = ac.createBufferSource();
    src.buffer = buf;
    const g = ac.createGain();
    g.gain.setValueAtTime(gainVal, ac.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + duration);
    if (bandpassFreq) {
      const f = ac.createBiquadFilter();
      f.type = 'bandpass';
      f.frequency.value = bandpassFreq;
      f.Q.value = 2;
      src.connect(f);
      f.connect(g);
    } else {
      src.connect(g);
    }
    g.connect(ac.destination);
    src.start();
    src.stop(ac.currentTime + duration + 0.01);
  }

  return {
    isEnabled,

    // ── UI ──
    click() {
      play(ac => osc(ac, 'sine', 680, 0.12, 0, 0.06));
    },

    // ── Dice ──
    diceRoll() {
      play(ac => noise(ac, 0.09, 0.22, 950));
    },

    diceLand() {
      play(ac => {
        osc(ac, 'sine', 170, 0.35, 0, 0.14);
        noise(ac, 0.07, 0.12, 600);
      });
    },

    // ── Token movement ──
    tokenStep() {
      play(ac => {
        const o = ac.createOscillator();
        const g = ac.createGain();
        o.type = 'sine';
        o.frequency.setValueAtTime(290, ac.currentTime);
        o.frequency.exponentialRampToValueAtTime(145, ac.currentTime + 0.08);
        o.connect(g);
        g.connect(ac.destination);
        g.gain.setValueAtTime(0.16, ac.currentTime);
        g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.08);
        o.start();
        o.stop(ac.currentTime + 0.09);
      });
    },

    // ── Landing on spaces ──
    landReward() {
      play(ac => {
        [523, 659, 784].forEach((f, i) => osc(ac, 'sine', f, 0.22, i * 0.13, i * 0.13 + 0.22));
      });
    },

    landPunish() {
      play(ac => {
        [330, 220].forEach((f, i) => osc(ac, 'sine', f, 0.18, i * 0.17, i * 0.17 + 0.24));
      });
    },

    landEvent() {
      play(ac => {
        osc(ac, 'sine', 440, 0.14, 0,    0.45);
        osc(ac, 'sine', 442, 0.09, 0,    0.45);
        osc(ac, 'sine', 660, 0.10, 0.18, 0.48);
      });
    },

    landMinigame() {
      play(ac => {
        [261, 329, 392, 523].forEach((f, i) =>
          osc(ac, 'square', f, 0.09, i * 0.08, i * 0.08 + 0.14)
        );
      });
    },

    landNormal() {
      play(ac => osc(ac, 'sine', 340, 0.09, 0, 0.09));
    },

    // ── Card ──
    cardFlip() {
      play(ac => {
        noise(ac, 0.14, 0.18, 2200);
        osc(ac, 'sine', 820, 0.09, 0, 0.11);
      });
    },

    cardClose() {
      play(ac => osc(ac, 'sine', 480, 0.09, 0, 0.08));
    },

    // ── Save / Delete ──
    save() {
      play(ac => {
        [523, 659].forEach((f, i) => osc(ac, 'sine', f, 0.18, i * 0.12, i * 0.12 + 0.18));
      });
    },

    deleteSave() {
      play(ac => {
        const o = ac.createOscillator();
        const g = ac.createGain();
        o.type = 'sine';
        o.frequency.setValueAtTime(230, ac.currentTime);
        o.frequency.exponentialRampToValueAtTime(80, ac.currentTime + 0.16);
        o.connect(g);
        g.connect(ac.destination);
        g.gain.setValueAtTime(0.18, ac.currentTime);
        g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + 0.16);
        o.start();
        o.stop(ac.currentTime + 0.17);
      });
    },

    // ── Game end ──
    win() {
      play(ac => {
        [523, 659, 784, 1047].forEach((f, i) =>
          osc(ac, 'sine', f, 0.22, i * 0.14, i * 0.14 + 0.28)
        );
        osc(ac, 'sine', 1047, 0.18, 0.58, 1.2);
      });
    },
  };
})();
