
import React from 'react';
import { Video, Mic, Brain, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      icon: Video,
      title: 'Telehealth & Remote Counseling',
      description: 'Access licensed healthcare professionals and mental health counselors through secure video consultations. Available 24/7 across multiple time zones.',
      features: ['Secure video calls', 'Multi-language support', 'Licensed professionals', '24/7 availability'],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mic,
      title: 'Multilingual Meditation Sessions',
      description: 'Join guided meditation and mindfulness sessions in your native language, led by certified instructors from diverse cultural backgrounds.',
      features: ['50+ languages', 'Live & recorded sessions', 'Cultural adaptation', 'Progress tracking'],
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Brain,
      title: 'AI-Powered Fitness Coach',
      description: 'Get personalized workout plans and nutrition guidance from our intelligent fitness coach that adapts to your goals, limitations, and cultural preferences.',
      features: ['Personalized plans', 'Real-time adjustments', 'Cultural food preferences', 'Progress analytics'],
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Database,
      title: 'International Health Records Sync',
      description: 'Securely sync and access your health records across borders, ensuring continuity of care when traveling or relocating internationally.',
      features: ['Cross-border access', 'Secure encryption', 'Medical history sync', 'Emergency access'],
      gradient: 'from-orange-500 to-orange-600'
    }
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
            className="w-20 h-1 professional-gradient mx-auto mb-8 rounded-full"
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
              className="group professional-card p-8 rounded-xl interactive-element"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <motion.div 
                    className={`p-4 bg-gradient-to-br ${service.gradient} rounded-xl text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <service.icon className="h-8 w-8" />
                  </motion.div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Stats */}
        <motion.div 
          className="mt-20 professional-gradient rounded-2xl p-8 lg:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Trusted by Millions Worldwide</h3>
            <p className="text-white/90">Our services have helped people across the globe achieve better health outcomes</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "1M+", label: "Consultations Completed", color: "text-blue-300" },
              { value: "500K+", label: "Meditation Sessions", color: "text-green-300" },
              { value: "200K+", label: "Fitness Plans Created", color: "text-purple-300" },
              { value: "50+", label: "Countries Served", color: "text-orange-300" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
