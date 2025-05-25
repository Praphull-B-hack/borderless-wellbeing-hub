
import React from 'react';
import { ArrowRight, Heart, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const assembleVariants = {
    hidden: { 
      opacity: 0,
      x: -100,
      rotate: -15,
      scale: 0.7
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.5
      }
    }
  };

  const rightAssembleVariants = {
    hidden: { 
      opacity: 0,
      x: 100,
      rotate: 15,
      scale: 0.7
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.7
      }
    }
  };

  return (
    <section id="home" className="relative pt-16 pb-20 overflow-hidden hero-gradient dark:bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-10 left-10 w-20 h-20 bg-wellness-blue-200 dark:bg-wellness-blue-800 rounded-full opacity-50"
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-16 h-16 bg-wellness-green-200 dark:bg-wellness-green-800 rounded-full opacity-50"
          animate={{ 
            y: [10, -10, 10],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-wellness-blue-300 dark:bg-wellness-blue-700 rounded-full opacity-50"
          animate={{ 
            y: [-5, 15, -5],
            x: [-5, 5, -5]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Content */}
          <motion.div 
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:mx-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl tracking-tight font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl font-poppins"
              variants={assembleVariants}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -200, rotate: -25 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                {t('hero.title1')}
              </motion.span>
              <motion.span 
                className="block text-wellness-blue-600 dark:text-wellness-blue-400"
                initial={{ opacity: 0, y: 100, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                {t('hero.title2')}
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: 200, rotate: 25 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                {t('hero.title3')}
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-base text-gray-600 dark:text-gray-300 sm:text-lg md:text-xl lg:text-lg xl:text-xl max-w-3xl"
              variants={itemVariants}
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={onGetStarted}
                  size="lg"
                  className="bg-wellness-blue-600 hover:bg-wellness-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {t('hero.startJourney')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-wellness-green-500 text-wellness-green-600 hover:bg-wellness-green-50 dark:hover:bg-wellness-green-900 px-8 py-3 text-lg font-semibold rounded-xl"
                >
                  {t('hero.learnMore')}
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="mt-10 grid grid-cols-3 gap-4 sm:gap-6"
              variants={containerVariants}
            >
              {[
                { icon: Users, value: '50K+', label: t('stats.members'), color: 'text-wellness-blue-500' },
                { icon: Globe, value: '120+', label: t('stats.countries'), color: 'text-wellness-green-500' },
                { icon: Heart, value: '24/7', label: t('stats.support'), color: 'text-red-500' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
            variants={rightAssembleVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative mx-auto w-full rounded-lg lg:max-w-md">
              <motion.div 
                className="relative block w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  className="w-full h-80 object-cover"
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop&crop=center"
                  alt="Educational collaboration landscape"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wellness-blue-600/20 to-transparent"></div>
                
                {/* Floating cards with better animations */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4"
                  animate={{ 
                    y: [-5, 5, -5],
                    rotate: [-2, 2, -2]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Study Groups</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4"
                  animate={{ 
                    y: [5, -5, 5],
                    rotate: [2, -2, 2]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Language Exchange</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
