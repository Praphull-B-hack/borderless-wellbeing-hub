
import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  onAuthClick: (mode: 'login' | 'register') => void;
}

const Navigation: React.FC<NavigationProps> = ({ onAuthClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#mission', label: 'Mission' },
    { href: '#features', label: 'Features' },
    { href: '#services', label: 'Services' },
    { href: '#community', label: 'Community' },
    { href: '#dashboard', label: 'Dashboard' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-wellness-blue-500 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold font-poppins text-gray-900">
              Borderless Wellbeing
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-700 hover:text-wellness-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => onAuthClick('login')}
              className="text-gray-700 hover:text-wellness-blue-600"
            >
              Sign In
            </Button>
            <Button
              onClick={() => onAuthClick('register')}
              className="bg-wellness-blue-600 hover:bg-wellness-blue-700 text-white"
            >
              Get Started
            </Button>
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <Globe className="h-4 w-4" />
              <span>EN</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-50 p-2 rounded-md text-gray-700 hover:text-wellness-blue-600 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-700 hover:text-wellness-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
                >
                  {link.label}
                </button>
              ))}
              <div className="border-t pt-3 space-y-2">
                <Button
                  variant="ghost"
                  onClick={() => onAuthClick('login')}
                  className="w-full justify-start text-gray-700 hover:text-wellness-blue-600"
                >
                  Sign In
                </Button>
                <Button
                  onClick={() => onAuthClick('register')}
                  className="w-full bg-wellness-blue-600 hover:bg-wellness-blue-700 text-white"
                >
                  Get Started
                </Button>
                <div className="flex items-center justify-center space-x-1 text-sm text-gray-500 pt-2">
                  <Globe className="h-4 w-4" />
                  <span>EN</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
