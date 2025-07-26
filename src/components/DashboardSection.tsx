import React from 'react';
import { Activity, Calendar, Users, Bell, TrendingUp, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const DashboardSection = () => {
  return (
    <section id="dashboard" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D121C] font-poppins mb-4">
            Your Personal Health Dashboard
          </h2>
          <div className="w-24 h-1 bg-[#D1835A] mx-auto mb-8 rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Gain a complete view of your medical journey and personal wellness progress — with tailored insights, real-time tracking, and seamless access to all our health tools and resources.
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          className="mt-16 bg-white dark:bg-gray-900 rounded-2xl p-8 lg:p-12 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Dashboard Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[#0D121C] dark:text-white mb-2">Welcome back, Sarah!</h3>
                <p className="text-gray-600 dark:text-gray-300">Here's your health overview for today</p>
              </div>
              <div className="mt-4 sm:mt-0">
                <div className="flex items-center space-x-2 bg-[#E9F4EF] dark:bg-[#2E4B45] px-4 py-2 rounded-lg">
                  <motion.div
                    className="w-3 h-3 bg-[#4BAF94] rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-[#227B66] dark:text-[#A8E4D4] font-medium">All Systems Balanced</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Activity, label: 'Health Tracker', color: '#4BAF94' },
              { icon: Calendar, label: 'Wellness Metrics', color: '#9FBC56' },
              { icon: Users, label: 'Join Community', color: '#AC7BB6' },
              { icon: Bell, label: 'Notifications', color: '#D1835A' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-gray-800 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                      style={{
                        background: `linear-gradient(to right, ${item.color}, ${item.color})`
                      }}
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="font-medium text-[#0D121C] dark:text-white">{item.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Dashboard Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Wellness Metrics */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#F8FBFA] dark:bg-[#1F2E2B]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-[#0D121C] dark:text-white flex items-center">
                    <Heart className="h-5 w-5 text-red-500 mr-2" />
                    Wellness Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">Active Self-Care Time</span>
                      <span className="font-semibold text-[#0D121C] dark:text-white">6.5 hours this week</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">Ongoing Care Plans</span>
                      <span className="font-semibold text-[#0D121C] dark:text-white">4 programs</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">Healthy Habit Streak</span>
                      <span className="font-semibold text-[#4BAF94] dark:text-[#4BAF94]">🔥 12 days of consistency</span>
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
              <Card className="bg-[#F9F7FB] dark:bg-[#2A2533]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-[#0D121C] dark:text-white flex items-center">
                    <TrendingUp className="h-5 w-5 text-[#AC7BB6] mr-2" />
                    Weekly Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { label: 'Nutrition', percent: 85, from: '#4BAF94', to: '#AC7BB6' },
                      { label: 'Recovery', percent: 72, from: '#9FBC56', to: '#4BAF94' }
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-600 dark:text-gray-300 text-sm">{item.label}</span>
                          <span className="text-[#0D121C] dark:text-white text-sm">{item.percent}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="h-2 rounded-full"
                            style={{
                              background: `linear-gradient(to right, ${item.from}, ${item.to})`
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.percent}%` }}
                            transition={{ duration: 1, delay: 0.4 + i * 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Upcoming Appointments */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#F3FAF6] dark:bg-[#24322C]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-[#0D121C] dark:text-white flex items-center">
                    <Calendar className="h-5 w-5 text-[#9FBC56] mr-2" />
                    Upcoming Appointments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { color: '#4BAF94', title: 'Virtual Therapy Session', time: 'Today, 3:00 PM' },
                      { color: '#9FBC56', title: 'Nutrition Workshop', time: 'Tomorrow, 7:00 AM' },
                      { color: '#AC7BB6', title: 'Physiotherapy Review', time: 'Friday, 6:00 PM' }
                    ].map((event, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: event.color }}></div>
                        <div>
                          <p className="text-sm font-medium text-[#0D121C] dark:text-white">{event.title}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{event.time}</p>
                        </div>
                      </div>
                    ))}
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