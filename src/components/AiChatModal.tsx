import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';

const AiChatModal = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [country, setCountry] = useState('🇩🇪 Germany');
  const [city, setCity] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const GROQ_API_KEY = "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";
  const GROQ_MODEL = 'llama-3.3-70b-versatile';

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      user: 'You',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      message: newMessage,
      time: 'now',
      likes: 0,
      isOnline: true
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    try {
      const context = `User is currently located in ${city}, ${country}.`;
      const groqMessages = [
        { role: 'system', content: `You are a helpful assistant. ${context}` },
        ...messages.map(msg => ({
          role: msg.user === 'You' ? 'user' : 'assistant',
          content: msg.message
        })),
        { role: 'user', content: `${context} ${newMessage}` }
      ];

      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: groqMessages,
          temperature: 0.7
        })
      });

      const data = await res.json();
      const aiReply = data.choices?.[0]?.message?.content || 'No response from AI.';

      const botMessage = {
        id: Date.now() + 1,
        user: 'AI Agent',
        avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=AI',
        message: aiReply,
        time: 'just now',
        likes: 0,
        isOnline: true
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickPrompts = [
    'Where is the nearest doctor?',
    'How do I get a doctor in my region?',
    'Is there a hospital open now?',
    'What are the healthcare options nearby?'
  ];

  const countries = [
    '🇺🇸 United States', '🇩🇪 Germany', '🇨🇦 Canada', '🇬🇧 United Kingdom', '🇫🇷 France',
    '🇯🇵 Japan', '🇸🇪 Sweden', '🇮🇳 India', '🇧🇷 Brazil', '🇦🇺 Australia',
    '🇨🇭 Switzerland', '🇳🇴 Norway', '🇳🇱 Netherlands', '🇪🇸 Spain', '🇮🇹 Italy',
    '🇰🇷 South Korea', '🇨🇳 China', '🇲🇽 Mexico', '🇿🇦 South Africa', '🇸🇬 Singapore',
    '🇩🇰 Denmark', '🇧🇪 Belgium', '🇦🇹 Austria', '🇮🇱 Israel', '🇸🇦 Saudi Arabia',
    '🇱🇹 Lithuania', '🇱🇻 Latvia', '🇪🇪 Estonia'
  ];

  return (
    <div className="w-full h-full flex flex-col overflow-hidden rounded-2xl bg-[#F1E8DB]">
      {/* Header */}
      <div className="flex justify-between items-center p-4 text-sm bg-[#5C8C85] text-white">
        <span className="font-semibold">AI Assistant</span>
        <div className="flex items-center gap-2">
          <span className="text-sm">Select your region:</span>
          <select
            value={country}
            onChange={e => setCountry(e.target.value)}
            className="text-sm rounded-md px-2 py-1 text-[#03353E]"
          >
            {countries.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <input
            type="text"
            value={city}
            onChange={e => setCity(e.target.value)}
            placeholder="Postal Code or City"
            className="text-sm rounded-md px-2 py-1 text-[#03353E]"
          />
        </div>
      </div>

      {/* Quick Prompts */}
      <div className="px-3 py-2 flex flex-wrap gap-2 bg-white">
        {quickPrompts.map((prompt, idx) => (
          <button
            key={idx}
            onClick={() => setNewMessage(prompt)}
            className="text-xs px-3 py-1 rounded-full bg-[#E9D9CC] text-[#03353E]"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-white">
        {messages.map(msg => {
          const isUser = msg.user === 'You';
          return (
            <div key={msg.id} className={`flex ${isUser ? 'justify-end' : 'justify-start'} items-start space-x-2`}>
              {!isUser && (
                <img src={msg.avatar} alt={msg.user} className="w-8 h-8 rounded-full object-cover" />
              )}
              <div>
                <div className="text-xs mb-1 font-semibold text-[#5E8E87]">{msg.user}</div>
                <div
                  className={`rounded-2xl px-4 py-3 text-sm max-w-[75%] whitespace-pre-wrap break-words ${
                    isUser
                      ? 'bg-[#E9D9CC] text-[#03353E]'
                      : 'bg-[#5C8C85] text-white'
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: msg.message
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>')
                      .replace(/\n/g, '<br />')
                      .replace(/(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu, '<span class="inline text-lg">$1</span>')
                  }}
                />
              </div>
              {isUser && (
                <img src={msg.avatar} alt={msg.user} className="w-8 h-8 rounded-full object-cover" />
              )}
            </div>
          );
        })}
        {isTyping && <div className="text-sm text-[#5E8E87]">AI is typing...</div>}
        <div ref={messagesEndRef} className="h-px" />
      </div>

      {/* Input */}
      <div className="p-3 flex items-center gap-2 border-t border-[#D1835A] bg-[#F1E8DB]">
        <input
          type="text"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 text-sm rounded-full bg-white text-[#03353E] outline-none"
        />
        <button
          onClick={handleSendMessage}
          disabled={!newMessage.trim()}
          className="p-2 rounded-xl bg-[#D1835A] text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default AiChatModal;