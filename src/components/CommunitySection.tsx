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
    <section id="community" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#03353E] sm:text-4xl font-poppins mb-4">
            {t('community.title')}
          </h2>
          <div className="w-24 h-1 bg-[#D1835A] mx-auto mb-8 rounded-full" />
          <p className="text-lg text-[#03353E] max-w-3xl mx-auto">
            {t('community.subtitle')}
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: Medical Support */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <HeartPulse className="h-6 w-6 text-red-500" />
              <h3 className="text-xl font-semibold text-[#03353E]">
                Medical & Mental Health Support
              </h3>
            </div>

            <div className="space-y-6 mt-7">
              <Card className="bg-white rounded-xl h-[14rem]">
                <CardHeader>
                  <CardTitle className="text-[#03353E]">Find a Doctor</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-[#03353E]">
                    Book an appointment with verified doctors near you.
                  </CardDescription>
                  <div className='flex justify-start'>
                  <button className="justify-end px-4 py-2 bg-[#D1835A] text-white rounded hover:bg-[#f4d3c2]">
                    Search Doctors
                  </button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white rounded-xl h-[14rem]">
                <CardHeader>
                  <CardTitle className="text-[#03353E]">Mental Health Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-[#03353E]">
                    Get connected with licensed psychiatrists and counselors.
                  </CardDescription>
                  <div className='flex justify-start'>
                  <button className="px-4 py-2 bg-[#5C8C85] text-white rounded hover:hover:bg-[#d4d8d8]">
                    Find Help
                  </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Column 2: Center Chat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4 justify-center ">
              <MessageCircle className="h-5 w-5 text-[#5C8C85]" />
              <h3 className="text-xl font-semibold text-[#03353E]">
                Community Chat
              </h3>
            </div>
            <div className='pt-2'></div>
            <CommunityChat />
          </motion.div>

          {/* Column 3: Events & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="h-6 w-6 text-[#5C8C85]" />
              <h3 className="text-xl font-semibold text-[#03353E]">
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
                  <Card className="bg-white rounded-xl">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3 flex-1">
                          <div className="text-[#5C8C85]">{event.icon}</div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-[#03353E] mb-2">
                              {event.title}
                            </h4>
                            <div className="space-y-1 text-sm text-[#5C8C85]">
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
                          className="bg-[#5C8C85] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#d4d8d8]"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Join
                        </motion.button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* <motion.div
              className="mt-8 bg-white rounded-xl p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-[#03353E] mb-4">
                Community Highlights
              </h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#D1835A]">120+</div>
                  <div className="text-sm text-[#5C8C85]">Events This Month</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#5C8C85]">50+</div>
                  <div className="text-sm text-[#5C8C85]">Volunteer Opportunities</div>
                </div>
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;