import React from 'react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      image: '/images/comp.jpg',
      title: 'Telehealth & Remote Counseling',
      description:
        'Access licensed healthcare professionals and mental health counselors through secure video consultations. Available 24/7 across multiple time zones.',
      features: ['Secure video calls', 'Multi-language support', 'Licensed professionals', '24/7 availability'],
      gradient: 'from-[#D3845B] to-[#D3845B]',
    },
    {
      image: '/images/yoga9.jpg',
      title: 'Multilingual Meditation Sessions',
      description:
        'Join guided meditation and mindfulness sessions in your native language, led by certified instructors from diverse cultural backgrounds.',
      features: ['50+ languages', 'Live & recorded sessions', 'Cultural adaptation', 'Progress tracking'],
      gradient: 'from-[#D3845B] to-[#D3845B]',
    },
    {
      image: '/images/gym11.jpg',
      title: 'AI-Powered Fitness Coach',
      description:
        'Get personalized workout plans and nutrition guidance from our intelligent fitness coach that adapts to your goals, limitations, and cultural preferences.',
      features: ['Personalized plans', 'Real-time adjustments', 'Cultural food preferences', 'Progress analytics'],
      gradient: 'from-[#D3845B] to-[#D3845B]',
    },
    {
      image: '/images/books.jpg',
      title: 'International Health Records Sync',
      description:
        'Securely sync and access your health records across borders, ensuring continuity of care when traveling or relocating internationally.',
      features: ['Cross-border access', 'Secure encryption', 'Medical history sync', 'Emergency access'],
      gradient: 'from-[#D3845B] to-[#D3845B]',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl font-poppins mb-4">
            Our Services
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-700 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive wellness services designed to support your health journey,
            no matter where you are in the world.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="md:w-1/3 w-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl object-cover w-full h-54 md:h-72"
                  />
                </div>
                <div className="md:w-2/3 w-full">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-[#D1835A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-300"
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
