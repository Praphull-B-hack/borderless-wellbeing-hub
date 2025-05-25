
import React from 'react';
import { Users, Calendar, MessageCircle, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CommunitySection = () => {
  const communityGroups = [
    {
      title: 'Anxiety Support Circle',
      members: '12.5K members',
      description: 'A safe space for sharing experiences and coping strategies for anxiety management.',
      tags: ['Mental Health', 'Support', 'Global'],
      isActive: true
    },
    {
      title: 'International Fitness Challenge',
      members: '8.2K members',
      description: 'Join our monthly fitness challenges with participants from around the world.',
      tags: ['Fitness', 'Challenge', 'Community'],
      isActive: true
    },
    {
      title: 'Mindful Parenting Network',
      members: '6.7K members',
      description: 'Connect with parents globally to share mindful parenting techniques and support.',
      tags: ['Parenting', 'Mindfulness', 'Family'],
      isActive: false
    },
    {
      title: 'Chronic Pain Warriors',
      members: '4.3K members',
      description: 'Supportive community for those living with chronic pain conditions.',
      tags: ['Support', 'Health', 'Resilience'],
      isActive: true
    }
  ];

  const upcomingEvents = [
    {
      title: 'Global Meditation Hour',
      date: 'Dec 15, 2024',
      time: '6:00 PM UTC',
      participants: '2.5K participants'
    },
    {
      title: 'Mental Health Awareness Webinar',
      date: 'Dec 18, 2024',
      time: '3:00 PM UTC',
      participants: '1.8K participants'
    },
    {
      title: 'International Yoga Session',
      date: 'Dec 22, 2024',
      time: '7:00 AM UTC',
      participants: '3.2K participants'
    }
  ];

  return (
    <section id="community" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-poppins mb-4">
            Global Wellness Community
          </h2>
          <div className="w-20 h-1 bg-wellness-green-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with like-minded individuals from around the world. Share experiences, 
            find support, and participate in wellness events that bring our global community together.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Community Groups */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Users className="h-6 w-6 text-wellness-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-900">Support Groups & Forums</h3>
            </div>
            
            <div className="space-y-4">
              {communityGroups.map((group, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white border-2 border-gray-100">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg text-gray-900 mb-1">{group.title}</CardTitle>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Users className="h-4 w-4" />
                          <span>{group.members}</span>
                          {group.isActive && (
                            <div className="flex items-center space-x-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-green-600">Active</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <MessageCircle className="h-5 w-5 text-gray-400" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 mb-3">
                      {group.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {group.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-1 bg-wellness-blue-100 text-wellness-blue-700 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Events Calendar */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Calendar className="h-6 w-6 text-wellness-green-600" />
              <h3 className="text-2xl font-semibold text-gray-900">Upcoming Events</h3>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white border-2 border-gray-100">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h4>
                        <div className="space-y-1 text-sm text-gray-600">
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
                      <button className="bg-wellness-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-wellness-green-700 transition-colors">
                        Join Event
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Community Stats */}
            <div className="mt-8 bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Community Impact</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-wellness-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Active Groups</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-wellness-green-600">120+</div>
                  <div className="text-sm text-gray-600">Weekly Events</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
