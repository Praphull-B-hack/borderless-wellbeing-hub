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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#f2e8dc] text-black overflow-hidden dark:bg-[#1f2937] dark:text-gray-300"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map(({ icon: Icon, delay, x, y }, index) => (
          <motion.div
            key={index}
            className="absolute opacity-10 dark:opacity-20"
            initial={{ scale: 0, x: 0, y: 0, rotate: 0 }}
            animate={{
              scale: [0, 1, 1.2, 1],
              x: [0, x * 0.5, x, x * 0.8],
              y: [0, y * 0.5, y, y * 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              delay: delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + index * 15}%`,
              top: `${15 + index * 12}%`,
            }}
          >
            <Icon
              size={40}
              className="text-black/30 dark:text-white/30"
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main heading */}
          <motion.h1 className="text-4xl md:text-6xl font-extrabold mb-6 font-poppins">
            <motion.span
              className="inline-block text-black dark:text-gray-100"
              initial={{ opacity: 0, x: -100, rotate: -180 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
            >
              Borderless
            </motion.span>{" "}
            <motion.span
              className="inline-block text-[#1f4f4f] dark:text-teal-400"
              initial={{ opacity: 0, x: 100, rotate: 180 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
            >
              Wellbeing
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-800 mb-8 max-w-3xl mx-auto leading-relaxed dark:text-gray-300"
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={onGetStarted}
                size="lg"
                className="bg-[#487f7b] text-white px-8 py-4 text-lg font-semibold rounded-md shadow-md transition-all duration-300 hover:bg-[#3a6a68] dark:bg-teal-500 dark:hover:bg-teal-600"
              >
                {t('GetStarted')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border border-[#487f7b] text-[#487f7b] px-8 py-4 text-lg font-semibold rounded-md transition-all duration-300 hover:bg-[#487f7b]/10 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-400/20"
              >
                {t('hero.learnMore')}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            {[
              { number: "1M+", label: t('Users') },
              { number: "7+", label: t('Countries') },
              { number: "24/7", label: t('Support') }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white/90 p-6 rounded-xl border border-gray-300 shadow-sm dark:bg-[#111827] dark:border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.div
                  className="text-3xl font-bold text-[#1f4f4f] dark:text-teal-400 mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.1, type: "spring" }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-700 font-medium dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-black/30 rounded-full flex justify-center dark:border-white/30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-black/30 rounded-full mt-2 dark:bg-white/30"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
