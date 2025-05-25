
import React from 'react';
import { Video, Mic, Brain, Database } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Video,
      title: 'Telehealth & Remote Counseling',
      description: 'Access licensed healthcare professionals and mental health counselors through secure video consultations. Available 24/7 across multiple time zones.',
      features: ['Secure video calls', 'Multi-language support', 'Licensed professionals', '24/7 availability']
    },
    {
      icon: Mic,
      title: 'Multilingual Meditation Sessions',
      description: 'Join guided meditation and mindfulness sessions in your native language, led by certified instructors from diverse cultural backgrounds.',
      features: ['50+ languages', 'Live & recorded sessions', 'Cultural adaptation', 'Progress tracking']
    },
    {
      icon: Brain,
      title: 'AI-Powered Fitness Coach',
      description: 'Get personalized workout plans and nutrition guidance from our intelligent fitness coach that adapts to your goals, limitations, and cultural preferences.',
      features: ['Personalized plans', 'Real-time adjustments', 'Cultural food preferences', 'Progress analytics']
    },
    {
      icon: Database,
      title: 'International Health Records Sync',
      description: 'Securely sync and access your health records across borders, ensuring continuity of care when traveling or relocating internationally.',
      features: ['Cross-border access', 'Secure encryption', 'Medical history sync', 'Emergency access']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-poppins mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-wellness-green-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive wellness services designed to support your health journey, 
            no matter where you are in the world.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-gradient-to-br from-wellness-blue-500 to-wellness-green-500 rounded-xl text-white group-hover:shadow-lg transition-shadow duration-300">
                    <service.icon className="h-8 w-8" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-wellness-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-wellness-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Stats */}
        <div className="mt-20 bg-gradient-to-r from-wellness-blue-50 to-wellness-green-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted by Millions Worldwide</h3>
            <p className="text-gray-600">Our services have helped people across the globe achieve better health outcomes</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-wellness-blue-600 mb-1">1M+</div>
              <div className="text-sm text-gray-600">Consultations Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-wellness-green-600 mb-1">500K+</div>
              <div className="text-sm text-gray-600">Meditation Sessions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-1">200K+</div>
              <div className="text-sm text-gray-600">Fitness Plans Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
