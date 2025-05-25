
import React, { useState, useRef, useEffect } from 'react';
import { Send, Users, Globe, Heart, ThumbsUp, MoreHorizontal } from 'lucide-react';
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
  likes?: number;
  isLiked?: boolean;
}

const CommunityChat = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      user: 'Maria Santos',
      message: 'Hello everyone! Looking for study partners for my linguistics course. Anyone interested in European language studies?',
      timestamp: new Date(Date.now() - 5 * 60000),
      country: 'Spain',
      avatar: '🇪🇸',
      likes: 12,
      isLiked: false
    },
    {
      id: 2,
      user: 'Klaus Mueller',
      message: 'Has anyone participated in the Erasmus exchange program? I need some advice about studying in France.',
      timestamp: new Date(Date.now() - 3 * 60000),
      country: 'Germany',
      avatar: '🇩🇪',
      likes: 8,
      isLiked: true
    },
    {
      id: 3,
      user: 'Sophie Laurent',
      message: 'Sharing my notes from the European History seminar. They cover medieval trade routes! DM me if interested.',
      timestamp: new Date(Date.now() - 1 * 60000),
      country: 'France',
      avatar: '🇫🇷',
      likes: 15,
      isLiked: false
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [onlineUsers] = useState(247);
  const [isTyping, setIsTyping] = useState(false);
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
        avatar: '🌍',
        likes: 0,
        isLiked: false
      };
      setMessages([...messages, message]);
      setNewMessage('');
      
      // Simulate typing indicator
      setIsTyping(true);
      setTimeout(() => setIsTyping(false), 2000);
    }
  };

  const handleLikeMessage = (messageId: number) => {
    setMessages(messages.map(msg => {
      if (msg.id === messageId) {
        const newLikes = msg.isLiked ? (msg.likes || 0) - 1 : (msg.likes || 0) + 1;
        return { ...msg, likes: newLikes, isLiked: !msg.isLiked };
      }
      return msg;
    }));
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
    <Card className="h-96 flex flex-col bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
      <CardHeader className="pb-3 border-b border-gray-200 dark:border-gray-700">
        <CardTitle className="flex items-center justify-between text-lg">
          <div className="flex items-center space-x-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Globe className="h-5 w-5 text-wellness-blue-600" />
            </motion.div>
            <span className="text-gray-900 dark:text-white">{t('community.chat.title')}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <motion.div 
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <Users className="h-4 w-4" />
            <span>{onlineUsers} {t('chat.online')}</span>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col p-4">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-4 scroll-smooth">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                className={`flex items-start space-x-3 group ${
                  message.user === 'You' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.user !== 'You' && (
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-wellness-blue-500 to-wellness-green-500 flex items-center justify-center text-white text-lg font-medium shadow-lg">
                      {message.avatar}
                    </div>
                  </motion.div>
                )}
                
                <div className={`max-w-xs lg:max-w-md ${
                  message.user === 'You' ? 'order-first' : ''
                }`}>
                  <motion.div 
                    className={`rounded-2xl px-4 py-3 shadow-md ${
                      message.user === 'You' 
                        ? 'bg-gradient-to-r from-wellness-blue-600 to-wellness-blue-700 text-white ml-auto' 
                        : 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {message.user !== 'You' && (
                      <div className="text-xs font-medium mb-2 opacity-75 flex items-center justify-between">
                        <span>{message.user} • {message.country}</span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <MoreHorizontal className="h-3 w-3 opacity-50 hover:opacity-100" />
                        </motion.button>
                      </div>
                    )}
                    <p className="text-sm leading-relaxed">{message.message}</p>
                    <div className={`flex items-center justify-between mt-2 ${
                      message.user === 'You' ? 'text-right' : 'text-left'
                    }`}>
                      <div className="text-xs opacity-75">
                        {formatTime(message.timestamp)}
                      </div>
                      {message.user !== 'You' && (
                        <div className="flex items-center space-x-2">
                          <motion.button
                            onClick={() => handleLikeMessage(message.id)}
                            className={`flex items-center space-x-1 text-xs ${
                              message.isLiked ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Heart className={`h-3 w-3 ${message.isLiked ? 'fill-current' : ''}`} />
                            <span>{message.likes}</span>
                          </motion.button>
                          <motion.button
                            className="text-xs text-gray-500 dark:text-gray-400 hover:text-wellness-blue-600"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ThumbsUp className="h-3 w-3" />
                          </motion.button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
                
                {message.user === 'You' && (
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-wellness-green-500 to-wellness-blue-500 flex items-center justify-center text-white text-lg font-medium shadow-lg">
                      🌍
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
              >
                <div className="flex space-x-1">
                  <motion.div
                    className="w-2 h-2 bg-gray-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-gray-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-gray-400 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                  />
                </div>
                <span className="text-xs">Someone is typing...</span>
              </motion.div>
            )}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <motion.div 
          className="flex space-x-2 p-2 bg-gray-50 dark:bg-gray-700 rounded-xl"
          whileFocus={{ scale: 1.02 }}
        >
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={t('chat.placeholder')}
            className="flex-1 px-4 py-3 border-none bg-transparent focus:outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
          />
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              size="sm"
              className="bg-wellness-blue-600 hover:bg-wellness-blue-700 text-white px-4 py-3 rounded-lg"
            >
              <Send className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default CommunityChat;
