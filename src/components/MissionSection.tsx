
import React from 'react';
import { Heart, Users, Globe, Shield } from 'lucide-react';

const MissionSection = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-poppins mb-4">
            Our Mission
          </h2>
          <div className="w-20 h-1 bg-wellness-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              At Borderless Wellbeing, we believe that access to mental and physical health resources should know no boundaries. 
              Our mission is to create a global ecosystem where individuals from every corner of the world can connect, heal, 
              and thrive together. We're breaking down barriers to wellness through technology, community, and compassion.
            </p>
          </div>

          {/* Mission Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-wellness-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-wellness-blue-200 transition-colors duration-300">
                <Globe className="h-8 w-8 text-wellness-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Accessibility</h3>
              <p className="text-gray-600">
                Breaking geographical barriers to provide universal access to wellness resources.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-wellness-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-wellness-green-200 transition-colors duration-300">
                <Users className="h-8 w-8 text-wellness-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Support</h3>
              <p className="text-gray-600">
                Fostering meaningful connections and peer support across diverse communities.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Holistic Wellness</h3>
              <p className="text-gray-600">
                Addressing mental, physical, and emotional health through integrated approaches.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Privacy & Trust</h3>
              <p className="text-gray-600">
                Ensuring secure, confidential, and culturally sensitive healthcare delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
