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
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
      
      {/* Header */}
      <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-1 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
            <DrazonLogo variant="icon-only" size="sm" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <span>DRAZON.NET AI Advisor</span>
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            </h3>
            <p className="text-[10px] text-slate-500">24/7 Web Strategy & Growth Assistant</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-slate-400 hover:text-slate-800 bg-white rounded-lg border border-slate-200 cursor-pointer shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                msg.role === 'user' ? 'bg-slate-800 text-white' : 'bg-[#10B981] text-white shadow-md shadow-[#10B981]/20'
              }`}
            >
              {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div
              className={`p-3.5 rounded-2xl text-xs leading-relaxed max-w-[80%] ${
                msg.role === 'user'
                  ? 'bg-[#10B981] text-white font-medium rounded-tr-none shadow-sm'
                  : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-sm'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex items-center gap-2 text-xs text-slate-500 p-2">
            <Loader2 className="w-4 h-4 animate-spin text-[#10B981]" />
            <span>Drazon AI is thinking...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts */}
      <div className="p-3 bg-slate-50 border-t border-slate-200 space-y-2">
        <p className="text-[10px] font-bold text-slate-500 uppercase">Suggested Questions:</p>
        <div className="flex flex-wrap gap-1.5">
          {quickPrompts.map((qp, i) => (
            <button
              key={i}
              onClick={() => setInput(qp)}
              className="px-2.5 py-1 rounded-md bg-white hover:bg-slate-100 border border-slate-200 text-[10px] font-medium text-slate-700 transition text-left cursor-pointer shadow-sm"
            >
              {qp}
            </button>
          ))}
        </div>
      </div>

      {/* Input Box */}
      <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-200 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about website plans, SEO, timeline..."
          className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-[#10B981] focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="p-2.5 bg-[#10B981] hover:bg-[#059669] disabled:opacity-40 text-white rounded-xl shadow-md transition cursor-pointer"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
};
