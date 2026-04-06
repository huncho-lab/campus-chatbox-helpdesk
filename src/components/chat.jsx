import React, { useState } from 'react';
import './Chat.css';

export default function Chat() {
    const [messages, setMessages] = useState([
        { from: 'bot', text: 'Welcome! How can I help you today? Ask about rules, schedules, or facilities. Üdvözöljön! Milyen segítségre van szüksége?' },
        { from: 'user', text: 'Is the main library open on Sunday?' },
        { from: 'bot', text: 'Yes, the main library is open from 10:00 AM to 6:00 PM on Sundays. (Source: Student Handbook, pg 54)' }
    ]);
    const [input, setInput] = useState('');

    const send = () => {
        if (!input.trim()) return;
        setMessages([...messages, { from: 'user', text: input }]);
        setInput('');
        setTimeout(() => {
            setMessages(prev => [...prev, { from: 'bot', text: 'I\'m processing your question...' }]);
        }, 500);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') send();
    };

    return (
        <div className="chat">
            <div className="messages">
                {messages.map((m, i) => (
                    <div key={i} className={`message ${m.from}`}>
                        <span className="message-text">{m.text}</span>
                    </div>
                ))}
            </div>
            <div className="input-area">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything…"
                />
                <button onClick={send}>▶</button>
            </div>
        </div>
    );
}