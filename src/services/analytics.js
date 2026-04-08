// ─── Analytics Store ──────────────────────────────────────────────────────────
// Tracks trending questions, category frequency, and response times in memory.
// In production, this would sync to a backend DB / analytics table.

const store = {
  questions: [],       // { question, category, timestamp, responseTime }
  sessionStart: Date.now(),
};

// Log a new question interaction
export function trackQuestion({ question, category, responseTimeMs }) {
  store.questions.push({
    question,
    category,
    timestamp: Date.now(),
    responseTime: responseTimeMs,
  });
}

// Most asked questions (top N)
export function getTrendingQuestions(topN = 8) {
  const counts = {};
  for (const q of store.questions) {
    const key = q.question.trim().toLowerCase();
    if (!counts[key]) counts[key] = { question: q.question, count: 0, category: q.category };
    counts[key].count++;
  }
  return Object.values(counts)
    .sort((a, b) => b.count - a.count)
    .slice(0, topN);
}

// Category frequency breakdown
export function getCategoryStats() {
  const counts = {};
  for (const q of store.questions) {
    counts[q.category] = (counts[q.category] || 0) + 1;
  }
  return Object.entries(counts)
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count);
}

// Total questions asked this session
export function getTotalQuestions() {
  return store.questions.length;
}

// Average response time (ms)
export function getAvgResponseTime() {
  if (!store.questions.length) return 0;
  const total = store.questions.reduce((sum, q) => sum + (q.responseTime || 0), 0);
  return Math.round(total / store.questions.length);
}

// Questions asked per minute (activity rate)
export function getActivityRate() {
  const mins = (Date.now() - store.sessionStart) / 60000 || 1;
  return (store.questions.length / mins).toFixed(1);
}

// Last N questions in chronological order
export function getRecentQuestions(n = 5) {
  return store.questions.slice(-n).reverse();
}