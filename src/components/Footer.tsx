
import React from 'react';
import { Heart, Globe, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-wellness-blue-500 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold font-poppins">Borderless Wellbeing</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Connecting global communities to promote mental and physical wellbeing across all borders. 
              Your health journey knows no boundaries.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-wellness-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-wellness-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-wellness-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Our Services', 'Community', 'Blog', 'Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-wellness-green-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {['Telehealth', 'Mental Health Support', 'Fitness Tracking', 'Meditation Sessions', 'Community Groups', 'Health Records'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-wellness-green-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Language */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-wellness-blue-400" />
                <span className="text-gray-300">hello@borderlesswellbeing.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-wellness-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-wellness-blue-400" />
                <span className="text-gray-300">Global Headquarters</span>
              </div>
            </div>

            {/* Language Selector */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-2">Language</h4>
              <div className="flex items-center space-x-2 bg-gray-800 rounded-lg p-2">
                <Globe className="h-4 w-4 text-wellness-green-400" />
                <select className="bg-transparent text-white text-sm border-none outline-none">
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                  <option value="zh">中文</option>
                  <option value="ja">日本語</option>
                  <option value="ar">العربية</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Borderless Wellbeing. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-wellness-blue-400 text-sm transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-wellness-blue-400 text-sm transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-wellness-blue-400 text-sm transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
