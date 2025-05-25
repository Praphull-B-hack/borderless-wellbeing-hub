
import React from 'react';
import { Users, Calendar, MessageCircle, Globe, BookOpen, Video } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import CommunityChat from './CommunityChat';
import { motion } from 'framer-motion';

const CommunitySection = () => {
  const { t } = useLanguage();

  const communityGroups = [
    {
      title: 'European Language Exchange',
      members: '12.5K members',
      description: 'Practice languages with native speakers from across Europe.',
      tags: ['Languages', 'Exchange', 'Cultural'],
      isActive: true,
      icon: <Globe className="h-5 w-5" />
    },
    {
      title: 'Computer Science Study Group',
      members: '8.2K members',
      description: 'Collaborate on coding projects and share programming knowledge.',
      tags: ['Programming', 'Technology', 'Collaboration'],
      isActive: true,
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      title: 'European History Forum',
      members: '6.7K members',
      description: 'Discuss European history and share academic research.',
      tags: ['History', 'Research', 'Academic'],
      isActive: false,
      icon: <MessageCircle className="h-5 w-5" />
    },
    {
      title: 'International Business Network',
      members: '4.3K members',
      description: 'Connect with business students and professionals across Europe.',
      tags: ['Business', 'Networking', 'Career'],
      isActive: true,
      icon: <Users className="h-5 w-5" />
    }
  ];

  const upcomingEvents = [
    {
      title: 'European Student Summit 2024',
      date: 'Dec 15, 2024',
      time: '6:00 PM UTC',
      participants: '2.5K participants',
      icon: <Video className="h-4 w-4" />
    },
    {
      title: 'Multi-language Literature Workshop',
      date: 'Dec 18, 2024',
      time: '3:00 PM UTC',
      participants: '1.8K participants',
      icon: <BookOpen className="h-4 w-4" />
    },
    {
      title: 'Cross-Border Research Symposium',
      date: 'Dec 22, 2024',
      time: '7:00 AM UTC',
      participants: '3.2K participants',
      icon: <Globe className="h-4 w-4" />
    }
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

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Community Groups */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Users className="h-6 w-6 text-wellness-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('community.forums.title')}
              </h3>
            </div>
            
            <div className="space-y-4">
              {communityGroups.map((group, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-2">
                          {group.icon}
                          <div>
                            <CardTitle className="text-lg text-gray-900 dark:text-white mb-1">
                              {group.title}
                            </CardTitle>
                            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                              <Users className="h-4 w-4" />
                              <span>{group.members}</span>
                              {group.isActive && (
                                <div className="flex items-center space-x-1">
                                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                  <span className="text-green-600 dark:text-green-400">Active</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-gray-600 dark:text-gray-300 mb-3">
                        {group.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {group.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-1 bg-wellness-blue-100 dark:bg-wellness-blue-900 text-wellness-blue-700 dark:text-wellness-blue-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Community Chat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <MessageCircle className="h-6 w-6 text-wellness-green-600" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('community.chat.title')}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t('community.chat.description')}
            </p>
            <CommunityChat />
          </motion.div>

          {/* Events Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="h-6 w-6 text-wellness-green-600" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t('community.events.title')}
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
                                <span>{event.date} • {event.time}</span>
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

            {/* Community Stats */}
            <motion.div 
              className="mt-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-2 border-gray-100 dark:border-gray-700"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Educational Impact
              </h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-wellness-blue-600">150+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Study Groups</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-wellness-green-600">300+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Weekly Events</div>
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
