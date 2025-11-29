import React, { useState, useEffect, useRef } from 'react';
import { createChatSession, sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Icons } from './Icons';
import { Chat } from "@google/genai";
import { useLanguage } from '../contexts/LanguageContext';

const Concierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  
  const initialMessage = language === 'fr' 
    ? "Bonjour. Bienvenue chez Montrex. Je suis votre concierge personnel. Comment puis-je vous aider à découvrir notre collection aujourd'hui ?"
    : "Bonjour. Welcome to Montrex. I am your personal concierge. How may I assist you in discovering our exclusive collection today?";

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [hasOpened, setHasOpened] = useState(false);

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat when opened first time
  useEffect(() => {
    if (isOpen && !hasOpened) {
      setMessages([{ role: 'model', text: initialMessage }]);
      setHasOpened(true);
    }
  }, [isOpen, hasOpened, initialMessage]);

  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
      chatSessionRef.current = createChatSession();
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !chatSessionRef.current) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      const responseText = await sendMessageToGemini(chatSessionRef.current, userMessage);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: language === 'fr' ? "Toutes mes excuses, je n'arrive pas à accéder au réseau de la boutique." : "My apologies, I seem to be having trouble connecting to our boutique network." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-gold-500 hover:bg-gold-300 text-onyx-950 px-6 py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 ${isOpen ? 'translate-y-24 opacity-0' : 'translate-y-0 opacity-100'}`}
      >
        <Icons.Chat className="w-6 h-6" />
        <span className="font-cinzel font-semibold tracking-wider">Concierge</span>
      </button>

      {/* Chat Interface */}
      <div className={`fixed bottom-0 right-0 sm:bottom-8 sm:right-8 z-50 w-full sm:w-[400px] h-[600px] bg-onyx-900 border border-gold-900/30 shadow-2xl rounded-t-2xl sm:rounded-2xl flex flex-col transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-[120%] opacity-0'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gold-900/20 bg-onyx-950 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <h3 className="font-cinzel text-gold-300 text-lg">Montrex Concierge</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gold-300 transition-colors">
            <Icons.Close className="w-6 h-6" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-onyx-900 to-onyx-950">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-gold-700 text-white rounded-tr-none' 
                  : 'bg-onyx-800 text-gray-200 border border-gold-900/20 rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-onyx-800 p-4 rounded-2xl rounded-tl-none border border-gold-900/20 flex gap-2">
                <span className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-gold-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-onyx-950 border-t border-gold-900/20 rounded-b-2xl">
          <div className="relative flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={language === 'fr' ? "Posez une question..." : "Inquire about our collection..."}
              className="w-full bg-onyx-900 text-gold-100 placeholder-gray-600 border border-gold-900/30 rounded-full py-3 px-6 pr-12 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/50 transition-all font-sans text-sm"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim()}
              className="absolute right-2 p-2 bg-gold-500 text-onyx-900 rounded-full hover:bg-gold-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Icons.Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-center text-[10px] text-gray-600 mt-2 font-serif italic">
            Powered by Montrex Intelligence
          </p>
        </div>
      </div>
    </>
  );
};

export default Concierge;
