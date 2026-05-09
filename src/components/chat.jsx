import { useState, useRef, useEffect } from 'react';
import { askQuestion } from '../services/api';
import { useLanguage } from '../contexts/LanguageContext';
import './Chat.css';

const STORAGE_KEY = 'due_chat_history';

const SUGGESTIONS = [
  'How do I register for exams?',
  'What is the NEPTUN system?',
  'What scholarships are available?',
  'How do I apply for a dorm?',
  'What programs are in English?',
  'How do I get from Budapest?',
];

function BotAvatar() {
  return (
    <div className="bot-avatar" aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm-5 8.18v2.64L12 17l5-3.18v-2.64L12 14l-5-2.82z" />
      </svg>
    </div>
  );
}

function SendIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

function loadHistory(welcomeText) {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch { /* ignore */ }
  return [{ from: 'bot', text: welcomeText }];
}

export default function Chat() {
  const { t } = useLanguage();
  const [messages, setMessages] = useState(() => loadHistory(t.chatWelcome));
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(messages.length <= 1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Persist messages to localStorage on every change
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(messages)); } catch { /* ignore */ }
  }, [messages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async (text) => {
    const userText = (text || input).trim();
    if (!userText || loading) return;
    setShowSuggestions(false);
    setMessages(prev => [...prev, { from: 'user', text: userText }]);
    setInput('');
    setLoading(true);
    try {
      const response = await askQuestion(userText);
      setMessages(prev => [...prev, { from: 'bot', text: response.answer }]);
    } catch {
      setMessages(prev => [...prev, { from: 'bot', text: 'Sorry, something went wrong. Please try again.' }]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const clearHistory = () => {
    const fresh = [{ from: 'bot', text: t.chatWelcome }];
    setMessages(fresh);
    setShowSuggestions(true);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="chat">
      <div className="chat-toolbar">
        <span className="chat-toolbar-label">
          <BotAvatar />
          DUE Assistant
        </span>
        {messages.length > 1 && (
          <button className="chat-clear-btn" onClick={clearHistory} aria-label="Clear conversation">
            Clear chat
          </button>
        )}
      </div>

      <div className="messages">
        {messages.map((m, i) => (
          <div key={i} className={`message ${m.from}`}>
            {m.from === 'bot' && <BotAvatar />}
            <span className="message-text">{m.text}</span>
          </div>
        ))}
        {loading && (
          <div className="message bot">
            <BotAvatar />
            <span className="message-text typing">
              <span className="dot" /><span className="dot" /><span className="dot" />
            </span>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {showSuggestions && (
        <div className="suggestions">
          {SUGGESTIONS.map(s => (
            <button key={s} className="suggestion-chip" onClick={() => send(s)}>
              {s}
            </button>
          ))}
        </div>
      )}

      <div className="input-area">
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') send(); }}
          placeholder={t.chatPlaceholder}
          disabled={loading}
          aria-label="Ask a question"
        />
        <button onClick={() => send()} disabled={loading || !input.trim()} aria-label="Send">
          <SendIcon />
        </button>
      </div>
    </div>
  );
}
