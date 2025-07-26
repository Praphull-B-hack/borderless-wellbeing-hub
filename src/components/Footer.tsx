import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#F1E8DB] text-[#5E8E87]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Well-Bridge Logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-[#5C8C85] hover:text-[#D1835A] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#5C8C85] hover:text-[#D1835A] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#5C8C85] hover:text-[#D1835A] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
<h3 className="text-lg font-semibold text-[#5C8C85]">Quick Links</h3>
<ul className="space-y-2">
  {['About Us', 'Our Services', 'Community', 'Blog', 'Privacy Policy', 'Terms of Service'].map((link) => (
    <li key={link}>
      <a
        href="#"
        className="text-[#5E8E87] hover:text-[#D1835A] transition-colors"
      >
        {link}
      </a>
    </li>
  ))}
</ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#5C8C85]">Services</h3>
            <ul className="space-y-2">
              {['Telehealth', 'Mental Health Support', 'Fitness Tracking', 'Meditation Sessions', 'Community Groups', 'Health Records'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-[#5E8E87] hover:text-[#D1835A] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Language */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#5C8C85]">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-[#D1835A]" />
                <span>hello@borderlesswellbeing.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-[#D1835A]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-[#D1835A]" />
                <span>Global Headquarters</span>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-2 text-[#5C8C85]">Language</h4>
              <LanguageSelector />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D1835A] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#5E8E87]">
              © 2024 Borderless Wellbeing. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-[#5E8E87] hover:text-[#D1835A] text-sm transition-colors">
                Privacy
              </a>
              <a href="#" className=" text-[#5E8E87] hover:text-[#D1835A] text-sm transition-colors">
                Terms
              </a>
              <a href="#" className=" text-[#5E8E87] hover:text-[#D1835A] text-sm transition-colors">
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