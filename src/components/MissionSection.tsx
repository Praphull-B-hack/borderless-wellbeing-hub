import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const MissionSection = () => {
  const { t } = useLanguage();

  const values = [
    {
      image: '/images/island.png',
      title: 'Cross-Border Care',
      description:
        '',
    },
    {
      image: '/images/hand.png',
      title: 'Community Support',
      description:
        '',
    },
    {
      image: '/images/girl.png',
      title: 'Holistic Wellness',
      description:
        '',
    },
    {
      image: '/images/trees.png',
      title: 'Privacy & Trust',
      description:
        '',
    }
  ];

  return (
    <section id="mission" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
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
            className="w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-700 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Subtitle */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed -mb-16">
              {t('mission.description')}
            </p>
          </motion.div>

          {/* Mission Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.img
                  src={value.image}
                  alt={value.title}
                  className="w-50 h-80 object-cover"
                />
                <h3 className="-mt-16 text-xl font-semibold text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-snug -mb-12">
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
