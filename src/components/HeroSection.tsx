
import React from 'react';
import { ArrowRight, Heart, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <section id="home" className="relative pt-16 pb-20 overflow-hidden hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-wellness-blue-200 rounded-full opacity-50 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-wellness-green-200 rounded-full opacity-50 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-wellness-blue-300 rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Content */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:mx-0">
            <div className="animate-fade-in">
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl font-poppins">
                <span className="block">Your Global</span>
                <span className="block text-wellness-blue-600">Wellness Journey</span>
                <span className="block">Starts Here</span>
              </h1>
              
              <p className="mt-6 text-base text-gray-600 sm:text-lg md:text-xl lg:text-lg xl:text-xl max-w-3xl">
                Connect with health services, resources, and communities that promote mental and physical wellbeing across borders. Join a global movement towards better health for everyone, everywhere.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                <Button
                  onClick={onGetStarted}
                  size="lg"
                  className="bg-wellness-blue-600 hover:bg-wellness-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  Start Your Wellness Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-wellness-green-500 text-wellness-green-600 hover:bg-wellness-green-50 px-8 py-3 text-lg font-semibold rounded-xl"
                >
                  Learn More
                </Button>
              </div>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="h-8 w-8 text-wellness-blue-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">50K+</div>
                  <div className="text-sm text-gray-600">Global Members</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Globe className="h-8 w-8 text-wellness-green-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">120+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Heart className="h-8 w-8 text-red-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg lg:max-w-md animate-fade-in">
              <div className="relative block w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img
                  className="w-full h-80 object-cover"
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop&crop=center"
                  alt="Peaceful wellness landscape"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wellness-blue-600/20 to-transparent"></div>
                
                {/* Floating wellness cards */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 animate-float">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Wellness Tracker</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span className="text-sm font-medium text-gray-700">Health Monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
