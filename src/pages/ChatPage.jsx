import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Zap, BookOpen, Tag } from "lucide-react";
import { askQuestion } from "../services/api";
import "./ChatPage.css";

const CATEGORY_COLORS = {
  library: "#3B82F6",
  fees: "#10B981",
  sports: "#F59E0B",
  schedules: "#8B5CF6",
  rules: "#EF4444",
  facilities: "#06B6D4",
  registration: "#EC4899",
  general: "#6B7280",
};

const SUGGESTED = [
  "What are the library hours?",
  "How do I pay my tuition fees?",
  "When are the final exams?",
  "How do I join a sports club?",
  "What is the dress code?",
  "How do I apply for a scholarship?",
];

export default function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 0,
      role: "bot",
      text: "Hi! I'm your Campus Helpdesk Assistant 👋\nAsk me anything about library hours, fees, schedules, sports, rules, or campus facilities.",
      category: null,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async (text) => {
    const question = (text || input).trim();
    if (!question || loading) return;

    setError(null);
    setInput("");
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), role: "user", text: question, category: null },
    ]);
    setLoading(true);

    try {
      const res = await askQuestion(question);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "bot",
          text: res.answer,
          category: res.category,
          sources: res.sources,
          responseTime: res.responseTimeMs,
        },
      ]);
    } catch (err) {
      setError(err.message);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "bot",
          text: "Sorry, something went wrong. Please check your Groq API key or try again.",
          category: null,
          isError: true,
        },
      ]);
    } finally {
      setLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return (
    <div className="chat-page">
      {/* Messages area */}
      <div className="messages-area">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={`message-row ${msg.role}`}
            >
              {/* Avatar */}
              <div className={`avatar ${msg.role}`}>
                {msg.role === "bot" ? <Bot size={16} /> : <User size={16} />}
              </div>

              {/* Bubble */}
              <div className={`bubble ${msg.role} ${msg.isError ? "error" : ""}`}>
                <p className="bubble-text">{msg.text}</p>

                {/* Category tag */}
                {msg.category && msg.category !== "general" && (
                  <div className="bubble-meta">
                    <span
                      className="category-tag"
                      style={{ background: CATEGORY_COLORS[msg.category] + "20", color: CATEGORY_COLORS[msg.category], borderColor: CATEGORY_COLORS[msg.category] + "40" }}
                    >
                      <Tag size={10} />
                      {msg.category}
                    </span>
                    {msg.responseTime && (
                      <span className="response-time">
                        <Zap size={10} />
                        {msg.responseTime}ms
                      </span>
                    )}
                    {msg.sources?.length > 0 && (
                      <span className="sources-label">
                        <BookOpen size={10} />
                        {msg.sources.length} handbook source{msg.sources.length > 1 ? "s" : ""}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Loading indicator */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="message-row bot"
          >
            <div className="avatar bot"><Bot size={16} /></div>
            <div className="bubble bot loading-bubble">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
          </motion.div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Suggestions (show only at start) */}
      {messages.length <= 1 && (
        <div className="suggestions">
          {SUGGESTED.map((s) => (
            <button key={s} className="suggestion-chip" onClick={() => handleSend(s)}>
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Error banner */}
      {error && (
        <div className="error-banner">
          ⚠️ {error.includes("VITE_GROQ_API_KEY") ? "Add your Groq API key to .env as VITE_GROQ_API_KEY" : error}
        </div>
      )}

      {/* Input area */}
      <div className="input-area">
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
          placeholder="Ask about schedules, fees, facilities, rules…"
          disabled={loading}
          className="chat-input"
        />
        <button
          onClick={() => handleSend()}
          disabled={loading || !input.trim()}
          className="send-btn"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}