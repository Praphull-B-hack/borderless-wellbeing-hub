
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
      title: 'Cross-border Medical Support',
      description: 'Connect with licensed healthcare professionals from across Europe. Receive medical advice, second opinions, and care tailored to your language and cultural background.',
      color: 'bg-gradient-to-r from-wellness-purple-500 to-wellness-blue-500',
      bgColor: 'bg-gradient-to-br from-wellness-purple-50 to-wellness-blue-50 dark:from-wellness-purple-900/20 dark:to-wellness-blue-900/20',
      borderColor: 'border-wellness-purple-200 dark:border-wellness-purple-700'
    },
    {
      icon: Activity,
      title: 'Health Monitoring & Progress Tracking',
      description: 'Track your symptoms, treatment plans, and recovery progress. Access personalized health recommendations created by medical experts from across the continent.',
      color: 'bg-gradient-to-r from-wellness-green-500 to-wellness-blue-500',
      bgColor: 'bg-gradient-to-br from-wellness-green-50 to-wellness-blue-50 dark:from-wellness-green-900/20 dark:to-wellness-blue-900/20',
      borderColor: 'border-wellness-green-200 dark:border-wellness-green-700'
    },
    {
      icon: Video,
      title: 'Virtual Consultations & Remote Care',
      description: 'Book and attend video appointments with doctors, therapists, and specialists—no matter where you are. Get care without borders.',
      color: 'bg-gradient-to-r from-wellness-pink-500 to-wellness-purple-500',
      bgColor: 'bg-gradient-to-br from-wellness-pink-50 to-wellness-purple-50 dark:from-wellness-pink-900/20 dark:to-wellness-purple-900/20',
      borderColor: 'border-wellness-pink-200 dark:border-wellness-pink-700'
    },
    {
      icon: Users,
      title: 'Patient Communities & Support Circles',
      description: 'Join patient groups based on health conditions, experiences, or treatment paths. Share your journey, find encouragement, and connect with others navigating similar challenges.',
      color: 'bg-gradient-to-r from-wellness-orange-500 to-wellness-pink-500',
      bgColor: 'bg-gradient-to-br from-wellness-orange-50 to-wellness-pink-50 dark:from-wellness-orange-900/20 dark:to-wellness-pink-900/20',
      borderColor: 'border-wellness-orange-200 dark:border-wellness-orange-700'
    }
  ];
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold bg-gradient-to-r from-wellness-purple-600 to-wellness-blue-600 bg-clip-text text-transparent sm:text-4xl font-poppins mb-4"
            whileHover={{ scale: 1.02 }}
          >
            {t('features.title')}
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-wellness-purple-500 to-wellness-blue-500 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
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
              whileHover={{ y: -8, scale: 1.02 }}
              className="card-hover"
            >
              <Card 
                className={`group hover:shadow-2xl transition-all duration-500 ${feature.bgColor} ${feature.borderColor} border-2 h-full vibrant-card backdrop-blur-sm`}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className={`p-3 rounded-xl ${feature.color} text-white shadow-lg`}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    >
                      <feature.icon className="h-6 w-6" />
                    </motion.div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-wellness-purple-600 dark:group-hover:text-wellness-purple-400 transition-colors">
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

        {/* Enhanced CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-white via-blue-50/50 to-green-50/50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border-2 border-gray-200 dark:border-gray-700">
            {/* Background decorations */}
            <div className="absolute inset-0 text-black "></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Experience Borderless Healthcare?
              </h3>
              <p className="text-black/90 mb-6">
               Join thousands of patients who have already improved their health journey with our cross-border European medical platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  className="bg-white text-wellness-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>
                <motion.button 
                 className="bg-white text-wellness-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
                >
                  View Demo
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
