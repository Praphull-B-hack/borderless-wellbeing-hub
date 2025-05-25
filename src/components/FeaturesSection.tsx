
import React from 'react';
import { Brain, Activity, Users, Video } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      title: 'Cross-border Mental Health Support',
      description: 'Connect with licensed therapists and counselors from around the world. Get support in your preferred language and cultural context.',
      color: 'bg-wellness-blue-500',
      bgColor: 'bg-wellness-blue-50 dark:bg-wellness-blue-900/20',
      borderColor: 'border-wellness-blue-200 dark:border-wellness-blue-700'
    },
    {
      icon: Activity,
      title: 'Fitness & Physical Wellness Tracking',
      description: 'Track your physical activities, monitor vital signs, and access personalized fitness programs designed by international wellness experts.',
      color: 'bg-wellness-green-500',
      bgColor: 'bg-wellness-green-50 dark:bg-wellness-green-900/20',
      borderColor: 'border-wellness-green-200 dark:border-wellness-green-700'
    },
    {
      icon: Video,
      title: 'Virtual Consultations & Remote Healthcare',
      description: 'Book video consultations with healthcare providers worldwide. Access medical expertise regardless of your location.',
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-700'
    },
    {
      icon: Users,
      title: 'Community Groups & Support Circles',
      description: 'Join supportive communities based on shared experiences, conditions, or wellness goals. Find your tribe across borders.',
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-700'
    }
  ];

  return (
    <section id="features" className="py-20 gradient-bg dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl font-poppins mb-4">
            {t('features.title')}
          </h2>
          <div className="w-20 h-1 bg-wellness-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card 
                className={`group hover:shadow-xl transition-all duration-300 ${feature.bgColor} ${feature.borderColor} border-2 h-full`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className={`p-3 rounded-xl ${feature.color} text-white`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <feature.icon className="h-6 w-6" />
                    </motion.div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Experience Borderless Wellness?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join thousands of users who have already transformed their wellness journey with our global platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="bg-wellness-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-wellness-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button 
                className="border-2 border-wellness-green-500 text-wellness-green-600 dark:text-wellness-green-400 px-8 py-3 rounded-xl font-semibold hover:bg-wellness-green-50 dark:hover:bg-wellness-green-900/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
