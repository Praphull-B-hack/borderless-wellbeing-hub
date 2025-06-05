
import React from 'react';
import { ArrowRight, Globe, Users, Heart, BookOpen, MessageSquare, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  const { t } = useLanguage();

  const floatingIcons = [
    { icon: Globe, delay: 0, x: 100, y: 50 },
    { icon: Users, delay: 0.2, x: -80, y: 80 },
    { icon: Heart, delay: 0.4, x: 120, y: -60 },
    { icon: BookOpen, delay: 0.6, x: -100, y: -40 },
    { icon: MessageSquare, delay: 0.8, x: 80, y: 120 },
    { icon: Lightbulb, delay: 1.0, x: -120, y: 60 }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center professional-gradient overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ icon: Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute opacity-10"
            initial={{ scale: 0, x: 0, y: 0, rotate: 0 }}
            animate={{ 
              scale: [0, 1, 1.2, 1],
              x: [0, x * 0.5, x, x * 0.8],
              y: [0, y * 0.5, y, y * 0.8],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 2,
              delay: delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{
              left: `${20 + (index * 15)}%`,
              top: `${15 + (index * 12)}%`
            }}
          >
            <Icon size={40} className="text-white" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main heading with assembling effect */}
          <motion.h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins">
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, x: -100, rotate: -180 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
            >
              Borderless
            </motion.span>
            {" "}
            <motion.span
              className="inline-block text-professional-gradient"
              initial={{ opacity: 0, x: 100, rotate: 180 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
            >
              Wellbeing
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={onGetStarted}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transition-all duration-300"
              >
                {t('hero.getStarted')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                {t('hero.learnMore')}
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats section */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {[
              { number: "1M+", label: t('hero.stats.users') },
              { number: "50+", label: t('hero.stats.countries') },
              { number: "24/7", label: t('hero.stats.support') }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center professional-card p-6 rounded-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div 
                  className="text-3xl font-bold text-professional-gradient mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.1, type: "spring" }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
