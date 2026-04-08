// ─── Campus Helpdesk API — Groq AI + RAG ─────────────────────────────────────
// Replace VITE_GROQ_API_KEY in your .env file with your actual Groq API key.
// e.g.  VITE_GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxx

import { retrieveContext, detectCategory } from "./knowledgeBase.js";
import { trackQuestion } from "./analytics.js";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama3-70b-8192"; // Fast + high quality on Groq

const SYSTEM_PROMPT = `You are a friendly and helpful campus helpdesk assistant for a university.
Your job is to answer student questions about:
- Library hours, book loans, printing, and study facilities
- School rules, code of conduct, and campus policies
- Academic schedules, exam timetables, and holidays
- Sports facilities, clubs, and tournaments
- Tuition fees, scholarships, refunds, and financial aid
- Campus facilities (cafeteria, parking, hostel, clinic)
- Course registration, transcripts, and grades

You will be given relevant excerpts from the campus handbook (CONTEXT) to help answer questions accurately.
Always:
1. Base your answer primarily on the provided context.
2. If the context fully answers the question, give a clear, concise response.
3. If the context only partially answers, use it and note where the student can get more info.
4. If the context does not cover the question, say you do not have that specific info and direct them to the relevant campus office.
5. Keep answers friendly, clear, and under 150 words unless detail is needed.
6. Do NOT make up specific numbers, dates, or policies not found in the context.`;

// ─── Main RAG + Groq call ─────────────────────────────────────────────────────
export async function askQuestion(question) {
  const startTime = Date.now();

  // 1. Detect category
  const category = detectCategory(question);

  // 2. Retrieve relevant context (RAG)
  const contextEntries = retrieveContext(question, 3);
  const contextText =
    contextEntries.length > 0
      ? contextEntries.map((e) => `[${e.category.toUpperCase()}] ${e.text}`).join("\n\n")
      : "No specific handbook entries found for this query.";

  // 3. Build messages
  const messages = [
    { role: "system", content: SYSTEM_PROMPT },
    {
      role: "user",
      content: `CONTEXT FROM CAMPUS HANDBOOK:\n${contextText}\n\nSTUDENT QUESTION:\n${question}`,
    },
  ];

  // 4. Call Groq API
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;
  if (!apiKey) {
    throw new Error(
      "VITE_GROQ_API_KEY is not set. Add it to your .env file:\nVITE_GROQ_API_KEY=gsk_your_key_here"
    );
  }

  const response = await fetch(GROQ_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages,
      temperature: 0.4,
      max_tokens: 512,
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(
      `Groq API error ${response.status}: ${err?.error?.message || response.statusText}`
    );
  }

  const data = await response.json();
  const answer = data.choices?.[0]?.message?.content?.trim() || "Sorry, I could not generate a response.";
  const responseTimeMs = Date.now() - startTime;

  // 5. Track in analytics
  trackQuestion({ question, category, responseTimeMs });

  return {
    answer,
    category,
    sources: contextEntries.map((e) => ({ id: e.id, category: e.category })),
    responseTimeMs,
  };
}

// ─── Analytics exports ────────────────────────────────────────────────────────
export {
  getTrendingQuestions,
  getCategoryStats,
  getTotalQuestions,
  getAvgResponseTime,
  getRecentQuestions,
} from "./analytics.js";