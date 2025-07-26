import React from 'react';
import { Video, Mic, Brain, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      icon: Video,
      title: 'Telehealth & Remote Counseling',
      description:
        'Access licensed healthcare professionals and mental health counselors through secure video consultations. Available 24/7 across multiple time zones.',
      features: [
        'Secure video calls',
        'Multi-language support',
        'Licensed professionals',
        '24/7 availability',
      ],
      gradient: 'from-blue-500 to-[#03353E]',
    },
    {
      icon: Mic,
      title: 'Multilingual Meditation Sessions',
      description:
        'Join guided meditation and mindfulness sessions in your native language, led by certified instructors from diverse cultural backgrounds.',
      features: [
        '50+ languages',
        'Live & recorded sessions',
        'Cultural adaptation',
        'Progress tracking',
      ],
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: Brain,
      title: 'AI-Powered Fitness Coach',
      description:
        'Get personalized workout plans and nutrition guidance from our intelligent fitness coach that adapts to your goals, limitations, and cultural preferences.',
      features: [
        'Personalized plans',
        'Real-time adjustments',
        'Cultural food preferences',
        'Progress analytics',
      ],
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: Database,
      title: 'International Health Records Sync',
      description:
        'Securely sync and access your health records across borders, ensuring continuity of care when traveling or relocating internationally.',
      features: [
        'Cross-border access',
        'Secure encryption',
        'Medical history sync',
        'Emergency access',
      ],
      gradient: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#03353E] sm:text-4xl font-poppins mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-[#D1835A] mx-auto mb-8 rounded-full" />
          <p className="text-lg text-[#03353E] max-w-3xl mx-auto">
            Comprehensive wellness services designed to support your health journey,
            no matter where you are in the world.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group p-8 rounded-xl bg-gray-50 hover:bg-white dark:bg-gray-900 dark:hover:bg-gray-800 transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <motion.div
                    className={`p-4 bg-gradient-to-br ${service.gradient} rounded-xl text-white`}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <service.icon className="h-8 w-8" />
                  </motion.div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#03353E] mb-3 group-hover:text-[#D1835A] transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-[#03353E] mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-[#03353E]"
                      >
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}
                        ></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;