
import React from 'react';
import { Activity, Calendar, Users, Bell, TrendingUp, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const DashboardSection = () => {
  return (
    <section id="dashboard" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-wellness-blue-600 to-wellness-purple-600 bg-clip-text text-transparent sm:text-4xl font-poppins mb-4">
            Your Personal Learning Dashboard
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-wellness-blue-500 to-wellness-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get a comprehensive view of your learning journey with personalized insights, 
            progress tracking, and easy access to all our educational services.
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div 
          className="mt-16 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 lg:p-12 shadow-2xl border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Dashboard Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Welcome back, Sarah!</h3>
                <p className="text-gray-600 dark:text-gray-300">Here's your learning overview for today</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-wellness-green-100 to-wellness-blue-100 dark:from-wellness-green-900/30 dark:to-wellness-blue-900/30 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <motion.div 
                    className="w-3 h-3 bg-wellness-green-500 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-wellness-green-700 dark:text-wellness-green-300 font-medium">All systems active</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Activity, label: 'Learning Tracker', color: 'wellness-blue' },
              { icon: Calendar, label: 'Schedule Study', color: 'wellness-green' },
              { icon: Users, label: 'Join Community', color: 'wellness-purple' },
              { icon: Bell, label: 'Notifications', color: 'wellness-orange' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 cursor-pointer group vibrant-card">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className={`w-12 h-12 bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:from-${item.color}-500 group-hover:to-${item.color}-700 transition-all shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <p className="font-medium text-gray-900 dark:text-white">{item.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Dashboard Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Learning Metrics */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20 vibrant-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center">
                    <Heart className="h-5 w-5 text-red-500 mr-2" />
                    Learning Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">Study Hours</span>
                      <span className="font-semibold text-gray-900 dark:text-white">6.5h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">Courses Active</span>
                      <span className="font-semibold text-gray-900 dark:text-white">4</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">Learning Streak</span>
                      <span className="font-semibold text-wellness-green-600 dark:text-wellness-green-400">12 days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Weekly Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20 vibrant-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center">
                    <TrendingUp className="h-5 w-5 text-wellness-purple-500 mr-2" />
                    Weekly Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-600 dark:text-gray-300 text-sm">Mathematics</span>
                        <span className="text-gray-900 dark:text-white text-sm">85%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div 
                          className="bg-gradient-to-r from-wellness-blue-500 to-wellness-purple-500 h-2 rounded-full" 
                          initial={{ width: 0 }}
                          whileInView={{ width: '85%' }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-600 dark:text-gray-300 text-sm">Language</span>
                        <span className="text-gray-900 dark:text-white text-sm">72%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div 
                          className="bg-gradient-to-r from-wellness-green-500 to-wellness-blue-500 h-2 rounded-full" 
                          initial={{ width: 0 }}
                          whileInView={{ width: '72%' }}
                          transition={{ duration: 1, delay: 0.7 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Upcoming Activities */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-white to-green-50 dark:from-gray-800 dark:to-green-900/20 vibrant-card">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center">
                    <Calendar className="h-5 w-5 text-wellness-green-500 mr-2" />
                    Upcoming
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-wellness-blue-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Study Group</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Today, 3:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-wellness-green-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Language Exchange</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Tomorrow, 7:00 AM</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-wellness-purple-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">Project Review</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Friday, 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardSection;
