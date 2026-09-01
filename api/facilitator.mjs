// ============================================================
// /api/facilitator — server-side proxy to the Claude API.
// Keeps ANTHROPIC_API_KEY off the client; the browser never
// talks to Anthropic directly.
// ============================================================
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

const MODEL_ID = process.env.FACILITATOR_MODEL || 'claude-opus-5';
const MAX_MESSAGE_LEN = 500;
const MAX_TOKENS = 300;

const SYSTEM_PROMPT = {
  en: `You are "Bloom", the friendly in-game facilitator for BrainBlooming — a bilingual board game for elderly players covering body, brain, and social health, played in a small group sharing one tablet.

Speak warmly and simply, in 1-3 short sentences. Avoid jargon and long explanations. If asked about the current card, explain what to do in plain, encouraging language. If asked a general game-rules question, answer briefly; if you're not certain of a specific rule, say so and suggest asking the human facilitator running the session. Never invent card content or rules you don't actually know.`,
  th: `คุณคือ "บลูม" ผู้ช่วยประจำเกม BrainBlooming เกมกระดานสองภาษาสำหรับผู้สูงอายุ ครอบคลุมสุขภาพกาย สมอง และสังคม เล่นเป็นกลุ่มเล็กบนแท็บเล็ตเครื่องเดียว

พูดด้วยน้ำเสียงอบอุ่นและเข้าใจง่าย 1-3 ประโยคสั้นๆ หลีกเลี่ยงศัพท์เทคนิคและคำอธิบายยาว หากถูกถามเกี่ยวกับการ์ดปัจจุบัน ให้อธิบายสิ่งที่ต้องทำด้วยภาษาที่เป็นมิตรและให้กำลังใจ หากถูกถามคำถามทั่วไปเกี่ยวกับกติกา ให้ตอบสั้นๆ หากไม่แน่ใจกติกาข้อใด ให้บอกตามตรงและแนะนำให้สอบถามผู้ดูแลเกม ห้ามสร้างเนื้อหาการ์ดหรือกติกาที่ไม่รู้จักขึ้นมาเอง`,
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { message, lang, context } = req.body || {};

  if (typeof message !== 'string' || !message.trim()) {
    res.status(400).json({ error: 'message is required' });
    return;
  }
  if (message.length > MAX_MESSAGE_LEN) {
    res.status(400).json({ error: `message too long (max ${MAX_MESSAGE_LEN} chars)` });
    return;
  }

  const isTh = lang === 'th';
  const system = SYSTEM_PROMPT[isTh ? 'th' : 'en'];

  let userContent = message.trim();
  if (context && (context.cardTitle || context.cardInstruction)) {
    const ctxLabel = isTh ? 'บริบทการ์ดปัจจุบัน' : 'Current card context';
    userContent = `[${ctxLabel}: "${context.cardTitle || ''}" — ${context.cardInstruction || ''}]\n\n${userContent}`;
  }

  try {
    const response = await client.messages.create({
      model: MODEL_ID,
      max_tokens: MAX_TOKENS,
      system,
      messages: [{ role: 'user', content: userContent }],
    });

    const textBlock = response.content.find((b) => b.type === 'text');
    res.status(200).json({ reply: textBlock ? textBlock.text : '' });
  } catch (err) {
    console.error('facilitator error:', err);
    res.status(502).json({ error: 'AI facilitator is unavailable right now.' });
  }
}
