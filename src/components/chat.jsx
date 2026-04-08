import { useState, useRef, useEffect } from 'react';
import { askQuestion } from '../services/api';
import './Chat.css';

const INITIAL_MESSAGES = [
  { from: 'bot', text: 'Welcome to the Dunaújváros University Information Guide! Ask me about schedules, facilities, fees, or any campus information.' },
];

export default function Chat() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;

    const userText = input.trim();
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
    }
  };

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i} className={`message ${m.from}`}>
            <span className="message-text">{m.text}</span>
          </div>
        ))}
        {loading && (
          <div className="message bot">
            <span className="message-text typing">AI is thinking…</span>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <div className="input-area">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') send(); }}
          placeholder="Ask me anything…"
          disabled={loading}
        />
        <button onClick={send} disabled={loading}>▶</button>
      </div>
    </div>
  );
}
