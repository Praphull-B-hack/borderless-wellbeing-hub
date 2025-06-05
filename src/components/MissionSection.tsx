
import React from 'react';
import { Heart, Users, Globe, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const MissionSection = () => {
  const { t } = useLanguage();

  return (
    <section id="mission" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl font-poppins mb-4">
            {t('mission.title')}
          </h2>
          <motion.div 
            className="w-20 h-1 professional-gradient mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('mission.description')}
            </p>
          </motion.div>

          {/* Mission Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: Globe,
                title: 'Global Accessibility',
                description: 'Breaking geographical barriers to provide universal access to wellness resources.',
                gradient: 'from-blue-500 to-blue-600'
              },
              {
                icon: Users,
                title: 'Community Support',
                description: 'Fostering meaningful connections and peer support across diverse communities.',
                gradient: 'from-green-500 to-green-600'
              },
              {
                icon: Heart,
                title: 'Holistic Wellness',
                description: 'Addressing mental, physical, and emotional health through integrated approaches.',
                gradient: 'from-red-500 to-red-600'
              },
              {
                icon: Shield,
                title: 'Privacy & Trust',
                description: 'Ensuring secure, confidential, and culturally sensitive healthcare delivery.',
                gradient: 'from-purple-500 to-purple-600'
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <value.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
