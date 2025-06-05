
import React from 'react';
import { ArrowRight, Heart, Users, Globe, Sparkles, BookOpen, Award } from 'lucide-react';
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
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8,
      rotateX: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100
      }
    }
  };

  const wordAssembleVariants = {
    hidden: { 
      opacity: 0,
      x: -200,
      rotate: -45,
      scale: 0.3
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 80
      }
    }
  };

  const rightAssembleVariants = {
    hidden: { 
      opacity: 0,
      x: 200,
      rotate: 45,
      scale: 0.3
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 80,
        delay: 0.2
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="relative pt-16 pb-20 overflow-hidden min-h-screen flex items-center stunning-gradient dark:bg-gradient-to-br dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-800">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full opacity-60 blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-50 blur-lg"
          animate={{ 
            y: [20, -20, 20],
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full opacity-40 blur-md"
          animate={{ 
            y: [-15, 25, -15],
            x: [-10, 10, -10],
            scale: [1, 1.6, 1],
            rotate: [0, -180, -360]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-full opacity-30 blur-sm"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 2, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "linear"
          }}
        />
        
        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute top-1/3 left-1/3 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 transform rotate-45 opacity-40"
          animate={{ 
            rotate: [45, 405],
            scale: [1, 1.5, 1],
            y: [-10, 10, -10]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Enhanced Content with Assembling Animation */}
          <motion.div 
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:mx-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Assembling Title Animation */}
            <div className="relative">
              <motion.h1 className="text-4xl tracking-tight font-bold text-white dark:text-white sm:text-5xl md:text-6xl font-poppins mb-6">
                {/* Word 1 - slides from left */}
                <motion.span 
                  className="block drop-shadow-2xl relative z-10"
                  initial={{ opacity: 0, x: -300, rotate: -45, scale: 0.2 }}
                  animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                  transition={{ 
                    duration: 1.8, 
                    delay: 0.5, 
                    type: "spring", 
                    stiffness: 60,
                    damping: 15
                  }}
                >
                  {t('hero.title1')}
                </motion.span>
                
                {/* Word 2 - assembles from pieces */}
                <motion.span 
                  className="block text-yellow-300 dark:text-yellow-300 glow-effect relative z-10"
                  initial={{ opacity: 0, y: 200, scale: 0.1 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 2, 
                    delay: 1, 
                    type: "spring", 
                    stiffness: 50,
                    damping: 12
                  }}
                >
                  {t('hero.title2')}
                </motion.span>
                
                {/* Word 3 - slides from right */}
                <motion.span 
                  className="block drop-shadow-2xl relative z-10"
                  initial={{ opacity: 0, x: 300, rotate: 45, scale: 0.2 }}
                  animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                  transition={{ 
                    duration: 1.8, 
                    delay: 1.3, 
                    type: "spring", 
                    stiffness: 60,
                    damping: 15
                  }}
                >
                  {t('hero.title3')}
                </motion.span>
              </motion.h1>

              {/* Animated decorative elements around title */}
              <motion.div 
                className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-60"
                animate={{ 
                  scale: [1, 1.5, 1],
                  rotate: [0, 360],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: 2
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-500 rounded-full opacity-50"
                animate={{ 
                  scale: [1, 2, 1],
                  y: [-5, 5, -5]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  delay: 2.5
                }}
              />
            </div>
            
            <motion.p 
              className="mt-6 text-base text-white/90 dark:text-gray-200 sm:text-lg md:text-xl lg:text-lg xl:text-xl max-w-3xl drop-shadow-md"
              variants={itemVariants}
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* Enhanced Feature Highlights */}
            <motion.div 
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
              variants={containerVariants}
            >
              {[
                { icon: BookOpen, text: "Interactive Learning", color: "from-blue-400 to-cyan-500" },
                { icon: Users, text: "Global Community", color: "from-purple-400 to-pink-500" },
                { icon: Award, text: "Certified Programs", color: "from-green-400 to-emerald-500" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-r ${item.color} rounded-xl p-4 text-white backdrop-blur-sm border border-white/20`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="h-6 w-6" />
                    </motion.div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="mt-10 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start"
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
                  className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 group glow-effect border-0"
                >
                  <Sparkles className="mr-2 h-5 w-5 animate-pulse" />
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
                  className="border-2 border-white/30 text-white hover:bg-white/20 backdrop-blur-md px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:border-white/50 transition-all duration-300"
                >
                  {t('hero.learnMore')}
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Animated Stats */}
            <motion.div 
              className="mt-12 grid grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {[
                { icon: Users, value: '50K+', label: t('stats.members'), color: 'text-yellow-300', bgColor: 'bg-yellow-400/20', gradient: 'from-yellow-400 to-orange-500' },
                { icon: Globe, value: '120+', label: t('stats.countries'), color: 'text-green-300', bgColor: 'bg-green-400/20', gradient: 'from-green-400 to-emerald-500' },
                { icon: Heart, value: '24/7', label: t('stats.support'), color: 'text-pink-300', bgColor: 'bg-pink-400/20', gradient: 'from-pink-400 to-rose-500' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 3, 
                    y: -8,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                >
                  <motion.div 
                    className={`flex justify-center mb-3 p-4 rounded-full bg-gradient-to-r ${stat.gradient} backdrop-blur-md shadow-xl`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2,
                      boxShadow: "0 0 30px rgba(255,255,255,0.3)"
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    <stat.icon className="h-8 w-8 text-white drop-shadow-lg" />
                  </motion.div>
                  <motion.div 
                    className="text-3xl font-bold text-white drop-shadow-lg mb-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2 + index * 0.2, type: "spring", stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Hero Image with More Animations */}
          <motion.div 
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
            initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 2, 
              delay: 1.5, 
              type: "spring", 
              stiffness: 50,
              damping: 15
            }}
          >
            <div className="relative mx-auto w-full rounded-lg lg:max-w-md">
              <motion.div 
                className="relative block w-full bg-white/20 dark:bg-gray-800/40 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-lg border border-white/30"
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 2,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                }}
                transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
              >
                <motion.img
                  className="w-full h-80 object-cover"
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
                  alt="Students collaborating across Europe"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 via-transparent to-blue-400/30"></div>
                
                {/* Enhanced Floating Elements */}
                <motion.div 
                  className="absolute -top-6 -right-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl shadow-2xl p-4 backdrop-blur-md border border-white/30"
                  animate={{ 
                    y: [-8, 8, -8],
                    rotate: [-3, 3, -3],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.15, rotate: 0 }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.div 
                      className="w-4 h-4 bg-white rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-sm font-bold text-white">Study Groups</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl shadow-2xl p-4 backdrop-blur-md border border-white/30"
                  animate={{ 
                    y: [8, -8, 8],
                    rotate: [3, -3, 3],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.15, rotate: 0 }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.3, 1], 
                        rotate: [0, 180, 360] 
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Heart className="h-5 w-5 text-white" />
                    </motion.div>
                    <span className="text-sm font-bold text-white">Language Exchange</span>
                  </div>
                </motion.div>

                {/* New floating element */}
                <motion.div 
                  className="absolute top-1/2 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-xl p-3 backdrop-blur-md border border-white/30"
                  animate={{ 
                    x: [-5, 5, -5],
                    y: [-3, 3, -3],
                    rotate: [-2, 2, -2]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                >
                  <BookOpen className="h-4 w-4 text-white" />
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
