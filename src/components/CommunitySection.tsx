
import React from 'react';
import {
  Users,
  Calendar,
  MessageCircle,
  Globe,
  BookOpen,
  Video,
  HeartPulse,
  Brain,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import CommunityChat from './CommunityChat';
import { motion } from 'framer-motion';

const CommunitySection = () => {
  const { t } = useLanguage();

  const upcomingEvents = [
    {
      title: 'Mental Health Awareness Meetup',
      date: 'Aug 10, 2025',
      time: '5:00 PM UTC',
      participants: '1.2K participants',
      icon: <Brain className="h-4 w-4" />,
    },
    {
      title: 'Find Local Wellness Groups',
      date: 'Aug 15, 2025',
      time: '4:00 PM UTC',
      participants: '900 participants',
      icon: <Globe className="h-4 w-4" />,
    },
    {
      title: 'Free Doctor Q&A Session',
      date: 'Aug 20, 2025',
      time: '7:30 PM UTC',
      participants: '2.1K participants',
      icon: <Video className="h-4 w-4" />,
    },
  ];

  return (
    <section id="community" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl font-poppins mb-4">
            {t('community.title')}
          </h2>
          <div className="w-20 h-1 bg-wellness-green-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('community.subtitle')}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* 🩺 Medical Support Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <HeartPulse className="h-6 w-6 text-red-500" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Medical & Mental Health Support
              </h3>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Find a Doctor</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Book an appointment with verified doctors near you.
                  </CardDescription>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Search Doctors
                  </button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mental Health Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Get connected with licensed psychiatrists and counselors.
                  </CardDescription>
                  <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                    Find Help
                  </button>
                </CardContent>
              </Card>

              {/* Optional: Chat Assistant for quick support */}
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <MessageCircle className="h-5 w-5 text-wellness-green-600" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Quick Support Chat
                  </h4>
                </div>
                <CommunityChat />
              </div>
            </div>
          </motion.div>

          {/* 🌐 Events & Community Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="h-6 w-6 text-wellness-green-600" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Events & Opportunities
              </h3>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3 flex-1">
                          <div className="text-wellness-blue-600">{event.icon}</div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                              {event.title}
                            </h4>
                            <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                              <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4" />
                                <span>
                                  {event.date} • {event.time}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Globe className="h-4 w-4" />
                                <span>{event.participants}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <motion.button
                          className="bg-wellness-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-wellness-green-700 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Join Event
                        </motion.button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Stats or Highlights */}
            <motion.div
              className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-gray-100 dark:border-gray-700"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Community Highlights
              </h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-wellness-blue-600">
                    120+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Events This Month
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-wellness-green-600">
                    50+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    Volunteer Opportunities
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
