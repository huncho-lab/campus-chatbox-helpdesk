import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { askQuestion } from "../services/api";

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, role: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const response = await askQuestion(input);

    const botMessage = {
      text: response.answer,
      role: "bot",
    };

    setMessages((prev) => [...prev, botMessage]);
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-8 flex flex-col h-[80vh]">

      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Cloud-Based Campus Helpdesk Chatbox
      </h2>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-2">

        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"
              }`}
          >
            <div
              className={`px-5 py-3 rounded-2xl max-w-md text-sm shadow ${msg.role === "user"
                  ? "bg-indigo-600 text-white"
                  : "bg-white border"
                }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}

        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400 text-sm"
          >
            AI is thinking...
          </motion.div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="mt-6 flex items-center gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about schedules, fees, facilities..."
          className="flex-1 px-5 py-3 rounded-2xl border focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />

        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-indigo-600 p-3 rounded-2xl text-white hover:bg-indigo-700 transition"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}

export default ChatPage;