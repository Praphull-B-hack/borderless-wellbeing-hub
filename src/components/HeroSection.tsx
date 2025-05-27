
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
    <section id="home" className="relative pt-16 pb-20 overflow-hidden stunning-gradient dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-wellness-purple-400 to-wellness-pink-400 rounded-full opacity-60 animate-rainbow-glow"
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-wellness-blue-400 to-wellness-purple-400 rounded-full opacity-60"
          animate={{ 
            y: [10, -10, 10],
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-wellness-pink-400 to-wellness-orange-400 rounded-full opacity-60"
          animate={{ 
            y: [-5, 15, -5],
            x: [-5, 5, -5],
            scale: [1, 1.4, 1]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-8 h-8 bg-gradient-to-r from-wellness-green-400 to-wellness-blue-400 rounded-full opacity-50"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.5, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "linear"
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
              className="text-4xl tracking-tight font-bold text-white dark:text-white sm:text-5xl md:text-6xl font-poppins"
              variants={assembleVariants}
            >
              <motion.span 
                className="block drop-shadow-lg"
                initial={{ opacity: 0, x: -200, rotate: -25, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.2, type: "spring", stiffness: 100 }}
              >
                {t('hero.title1')}
              </motion.span>
              <motion.span 
                className="block text-yellow-300 dark:text-yellow-300 glow-effect"
                initial={{ opacity: 0, y: 100, scale: 0.3 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.4, delay: 0.5, type: "spring", stiffness: 120 }}
              >
                {t('hero.title2')}
              </motion.span>
              <motion.span 
                className="block drop-shadow-lg"
                initial={{ opacity: 0, x: 200, rotate: 25, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.8, type: "spring", stiffness: 100 }}
              >
                {t('hero.title3')}
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-base text-white/90 dark:text-gray-200 sm:text-lg md:text-xl lg:text-lg xl:text-xl max-w-3xl drop-shadow-md"
              variants={itemVariants}
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  onClick={onGetStarted}
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 group glow-effect border-0"
                >
                  {t('hero.startJourney')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-md px-8 py-3 text-lg font-semibold rounded-xl shadow-lg"
                >
                  {t('hero.learnMore')}
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div 
              className="mt-10 grid grid-cols-3 gap-4 sm:gap-6"
              variants={containerVariants}
            >
              {[
                { icon: Users, value: '50K+', label: t('stats.members'), color: 'text-yellow-300', bgColor: 'bg-yellow-400/20' },
                { icon: Globe, value: '120+', label: t('stats.countries'), color: 'text-green-300', bgColor: 'bg-green-400/20' },
                { icon: Heart, value: '24/7', label: t('stats.support'), color: 'text-pink-300', bgColor: 'bg-pink-400/20' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.15, rotate: 3, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    className={`flex justify-center mb-2 p-3 rounded-full ${stat.bgColor} backdrop-blur-md`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className={`h-8 w-8 ${stat.color} drop-shadow-lg`} />
                  </motion.div>
                  <div className="text-2xl font-bold text-white drop-shadow-lg">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Hero Image */}
          <motion.div 
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
            variants={rightAssembleVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative mx-auto w-full rounded-lg lg:max-w-md">
              <motion.div 
                className="relative block w-full bg-white/20 dark:bg-gray-800/40 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-lg border border-white/30"
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              >
                <img
                  className="w-full h-80 object-cover"
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
                  alt="Students collaborating across Europe"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 via-transparent to-blue-400/20"></div>
                
                {/* Enhanced Floating cards */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-xl p-4 backdrop-blur-md border border-white/30"
                  animate={{ 
                    y: [-5, 5, -5],
                    rotate: [-2, 2, -2]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                >
                  <div className="flex items-center space-x-2">
                    <motion.div 
                      className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Study Groups</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-xl p-4 backdrop-blur-md border border-white/30"
                  animate={{ 
                    y: [5, -5, 5],
                    rotate: [2, -2, 2]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                >
                  <div className="flex items-center space-x-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Heart className="h-4 w-4 text-pink-500" />
                    </motion.div>
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
