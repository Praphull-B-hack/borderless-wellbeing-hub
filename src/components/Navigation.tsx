import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

interface NavigationProps {
  onAuthClick: (mode: 'login' | 'register') => void;
  onDemoClick: () => void;
  onAiClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onAuthClick, onDemoClick, onAiClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#mission', label: t('nav.mission') },
    { href: '#services', label: t('nav.services') },
    { href: '#dashboard', label: t('nav.dashboard') },
    { href: '#community', label: t('nav.community') },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#F1E8DB] transition-all duration-300 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="h-16">
  <img
    src="/logo.png"
    alt="Well-Bridge Logo"
    className="h-full w-auto object-contain"
  />
</div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-[#333] hover:text-[#5C8C85] px-3 py-2 text-sm font-medium transition-colors duration-200"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                onClick={() => onAuthClick('login')}
                className="bg-transparent text-[#5C8C85] hover:bg-[#5C8C85]/10"
              >
                {t('nav.signIn')}
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={onDemoClick}
                className="bg-transparent text-[#5C8C85] hover:bg-[#5C8C85]/10"
              >
                {t('Ai Demo')}
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={onAiClick}
                className="bg-transparent text-[#5C8C85] hover:bg-[#5C8C85]/10"
              >
                {t('Ai Chat')}
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-100 p-2 rounded-md text-[#5C8C85] hover:bg-[#5C8C85]/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 rounded-lg shadow-lg mt-2 bg-white">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-[#333] hover:text-[#5C8C85] block px-3 py-2 text-base font-medium w-full text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <div className="border-t pt-3 space-y-2">
                  <div className="flex justify-center mb-2">
                    <LanguageSelector />
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => onAuthClick('login')}
                    className="w-full justify-start bg-transparent text-[#5C8C85] hover:bg-[#5C8C85]/10"
                  >
                    {t('nav.signIn')}
                  </Button>
                  <Button
                    onClick={onDemoClick}
                    className="w-full bg-transparent text-[#5C8C85] hover:bg-[#5C8C85]/10"
                  >
                    {t('Ai Demo')}
                  </Button>
                  {onAiClick && (
                    <Button
                      onClick={onAiClick}
                      className="w-full bg-transparent text-[#5C8C85] hover:bg-[#5C8C85]/10"
                    >
                      {t('Ai Chat')}
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;