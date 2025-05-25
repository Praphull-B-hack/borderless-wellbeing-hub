
import React from 'react';
import { Brain, Activity, Users, Video } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'Cross-border Mental Health Support',
      description: 'Connect with licensed therapists and counselors from around the world. Get support in your preferred language and cultural context.',
      color: 'bg-wellness-blue-500',
      bgColor: 'bg-wellness-blue-50',
      borderColor: 'border-wellness-blue-200'
    },
    {
      icon: Activity,
      title: 'Fitness & Physical Wellness Tracking',
      description: 'Track your physical activities, monitor vital signs, and access personalized fitness programs designed by international wellness experts.',
      color: 'bg-wellness-green-500',
      bgColor: 'bg-wellness-green-50',
      borderColor: 'border-wellness-green-200'
    },
    {
      icon: Video,
      title: 'Virtual Consultations & Remote Healthcare',
      description: 'Book video consultations with healthcare providers worldwide. Access medical expertise regardless of your location.',
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: Users,
      title: 'Community Groups & Support Circles',
      description: 'Join supportive communities based on shared experiences, conditions, or wellness goals. Find your tribe across borders.',
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  return (
    <section id="features" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-poppins mb-4">
            Wellness Without Borders
          </h2>
          <div className="w-20 h-1 bg-wellness-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of features designed to support your journey towards better health and wellbeing, 
            connecting you with resources and communities from around the globe.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-300 ${feature.bgColor} ${feature.borderColor} border-2 hover:scale-105`}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl ${feature.color} text-white`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience Borderless Wellness?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of users who have already transformed their wellness journey with our global platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-wellness-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-wellness-blue-700 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-wellness-green-500 text-wellness-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-wellness-green-50 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
