
import React, { useState, useRef, useEffect } from 'react';
import { Send, Users, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatMessage {
  id: number;
  user: string;
  message: string;
  timestamp: Date;
  country: string;
  avatar: string;
}

const CommunityChat = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      user: 'Maria Santos',
      message: 'Hello everyone! Looking for study partners for my linguistics course.',
      timestamp: new Date(Date.now() - 5 * 60000),
      country: 'Spain',
      avatar: '🇪🇸'
    },
    {
      id: 2,
      user: 'Klaus Mueller',
      message: 'Has anyone participated in the Erasmus exchange program? I need some advice.',
      timestamp: new Date(Date.now() - 3 * 60000),
      country: 'Germany',
      avatar: '🇩🇪'
    },
    {
      id: 3,
      user: 'Sophie Laurent',
      message: 'Sharing my notes from the European History seminar. Link in bio!',
      timestamp: new Date(Date.now() - 1 * 60000),
      country: 'France',
      avatar: '🇫🇷'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [onlineUsers] = useState(247);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: ChatMessage = {
        id: messages.length + 1,
        user: 'You',
        message: newMessage,
        timestamp: new Date(),
        country: 'Your Country',
        avatar: '🌍'
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Card className="h-96 flex flex-col bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
      <CardHeader className="pb-3 border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="flex items-center justify-between text-lg">
          <div className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-wellness-blue-600" />
            <span>{t('community.chat.title')}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <Users className="h-4 w-4" />
            <span>{onlineUsers} {t('chat.online')}</span>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col p-4">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto space-y-3 mb-4 scroll-smooth">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex items-start space-x-3 ${
                  message.user === 'You' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.user !== 'You' && (
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-wellness-blue-500 to-wellness-green-500 flex items-center justify-center text-white text-sm font-medium">
                      {message.avatar}
                    </div>
                  </div>
                )}
                
                <div className={`max-w-xs lg:max-w-md ${
                  message.user === 'You' ? 'order-first' : ''
                }`}>
                  <div className={`rounded-lg px-3 py-2 ${
                    message.user === 'You' 
                      ? 'bg-wellness-blue-600 text-white ml-auto' 
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                  }`}>
                    {message.user !== 'You' && (
                      <div className="text-xs font-medium mb-1 opacity-75">
                        {message.user} • {message.country}
                      </div>
                    )}
                    <p className="text-sm">{message.message}</p>
                    <div className={`text-xs mt-1 opacity-75 ${
                      message.user === 'You' ? 'text-right' : 'text-left'
                    }`}>
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                </div>
                
                {message.user === 'You' && (
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-wellness-green-500 to-wellness-blue-500 flex items-center justify-center text-white text-sm font-medium">
                      🌍
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="flex space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={t('chat.placeholder')}
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-wellness-blue-500 dark:bg-gray-700 dark:text-white text-sm"
          />
          <Button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            size="sm"
            className="bg-wellness-blue-600 hover:bg-wellness-blue-700 text-white px-3 py-2"
          >
            <Send className="h-4 w-4" />
            <span className="ml-1 hidden sm:inline">{t('chat.send')}</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommunityChat;
