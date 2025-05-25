
import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';

interface NavigationProps {
  onAuthClick: (mode: 'login' | 'register') => void;
}

const Navigation: React.FC<NavigationProps> = ({ onAuthClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#mission', label: t('nav.mission') },
    { href: '#features', label: t('nav.features') },
    { href: '#services', label: t('nav.services') },
    { href: '#community', label: t('nav.community') },
    { href: '#dashboard', label: t('nav.dashboard') },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="p-2 bg-wellness-blue-500 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold font-poppins text-gray-900 dark:text-white">
              Borderless Wellbeing
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-wellness-blue-600 dark:hover:text-wellness-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
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
            <ThemeToggle />
            <LanguageSelector />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                onClick={() => onAuthClick('login')}
                className="text-gray-700 dark:text-gray-300 hover:text-wellness-blue-600 dark:hover:text-wellness-blue-400"
              >
                {t('nav.signIn')}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => onAuthClick('register')}
                className="bg-wellness-blue-600 hover:bg-wellness-blue-700 text-white"
              >
                {t('nav.getStarted')}
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-50 dark:bg-gray-800 p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-wellness-blue-600 hover:bg-gray-100 dark:hover:bg-gray-700"
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
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 rounded-lg shadow-lg mt-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-700 dark:text-gray-300 hover:text-wellness-blue-600 dark:hover:text-wellness-blue-400 block px-3 py-2 text-base font-medium w-full text-left"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <div className="border-t dark:border-gray-700 pt-3 space-y-2">
                  <div className="flex justify-center mb-2">
                    <LanguageSelector />
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => onAuthClick('login')}
                    className="w-full justify-start text-gray-700 dark:text-gray-300 hover:text-wellness-blue-600"
                  >
                    {t('nav.signIn')}
                  </Button>
                  <Button
                    onClick={() => onAuthClick('register')}
                    className="w-full bg-wellness-blue-600 hover:bg-wellness-blue-700 text-white"
                  >
                    {t('nav.getStarted')}
                  </Button>
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
