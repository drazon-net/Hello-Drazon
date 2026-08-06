import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Loader2, User } from 'lucide-react';
import { DrazonLogo } from './DrazonLogo';

interface AiChatAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

export const AiChatAssistant: React.FC<AiChatAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: 'Hello! I am Drazon’s AI Digital Consultant. How can I help you regarding website design, pricing, delivery speed, or SEO for your business today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setInput('');

    const newMessages: Message[] = [...messages, { role: 'user', text: userText }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userText,
          chatHistory: newMessages.map((m) => ({ role: m.role, text: m.text })),
        }),
      });

      const data = await response.json();
      if (data.reply) {
        setMessages([...newMessages, { role: 'assistant', text: data.reply }]);
      } else {
        setMessages([...newMessages, { role: 'assistant', text: "Drazon offers Website Development starting from NZ$699 (One-time), UI/UX Design from NZ$299 (One-time), and Website Maintenance for NZ$199/month. How can we help your business?" }]);
      }
    } catch (err) {
      console.error('Chat error:', err);
      setMessages([...newMessages, { role: 'assistant', text: "Drazon specializes in professional Website Development (NZ$699), UI/UX Design (NZ$299), and Website Maintenance (NZ$199/mo). Feel free to request a proposal or contact us!" }]);
    } finally {
      setLoading(false);
    }
  };

  const quickPrompts = [
    'What are Drazon launch services?',
    'How much is Website Development?',
    'What is included in Website Maintenance?',
    'How does UI/UX Design work?'
  ];

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white border-l border-[#E2E8F0] shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
      
      {/* Header */}
      <div className="p-4 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center shadow-xs">
            <DrazonLogo variant="icon-only" size="sm" />
          </div>
          <div>
            <h3 className="text-sm font-black text-[#0F172A] flex items-center gap-1.5">
              <span>DRAZON AI Advisor</span>
              <span className="w-2 h-2 rounded-full bg-[#1D4ED8] animate-pulse" />
            </h3>
            <p className="text-[10px] text-[#475569] font-medium">24/7 Web Strategy & Growth Assistant</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-[#475569] hover:text-[#0F172A] bg-white rounded-full border border-[#E2E8F0] cursor-pointer shadow-xs transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F8FAFC]/50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div
              className={`w-8 h-8 rounded-2xl flex items-center justify-center shrink-0 text-xs font-bold ${
                msg.role === 'user'
                  ? 'bg-[#0F172A] text-white'
                  : 'bg-[#1D4ED8] text-white shadow-xs'
              }`}
            >
              {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div
              className={`p-3.5 rounded-2xl text-xs leading-relaxed max-w-[80%] ${
                msg.role === 'user'
                  ? 'bg-[#1D4ED8] text-white font-medium rounded-tr-none shadow-xs'
                  : 'bg-white border border-[#E2E8F0] text-[#0F172A] rounded-tl-none shadow-xs'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-2 text-xs text-[#475569] p-2">
            <Loader2 className="w-4 h-4 animate-spin text-[#1D4ED8]" />
            <span>Drazon AI is thinking...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts */}
      <div className="p-3 bg-[#F8FAFC] border-t border-[#E2E8F0] space-y-2">
        <p className="text-[10px] font-extrabold text-[#475569] uppercase tracking-wider">Suggested Questions:</p>
        <div className="flex flex-wrap gap-1.5">
          {quickPrompts.map((qp, i) => (
            <button
              key={i}
              onClick={() => setInput(qp)}
              className="px-3 py-1.5 rounded-full bg-white hover:bg-slate-100 border border-[#E2E8F0] text-[10px] font-bold text-[#0F172A] transition text-left cursor-pointer shadow-xs"
            >
              {qp}
            </button>
          ))}
        </div>
      </div>

      {/* Input Box */}
      <form onSubmit={handleSend} className="p-4 bg-white border-t border-[#E2E8F0] flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about website plans, SEO, timeline..."
          className="flex-1 px-4 py-2.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] text-xs focus:border-[#1D4ED8] focus:bg-white focus:outline-none transition"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="p-2.5 bg-[#1D4ED8] hover:bg-[#1E40AF] disabled:opacity-40 text-white rounded-2xl shadow-xs transition cursor-pointer"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
};
