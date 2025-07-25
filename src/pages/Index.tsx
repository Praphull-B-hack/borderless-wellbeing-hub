
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import FeaturesSection from '../components/FeaturesSection';
import ServicesSection from '../components/ServicesSection';
import AccessibilitySection from '../components/AccessibilitySection';
import CulturalSection from '../components/CulturalSection';
import CommunityConnectionSection from '../components/CommunityConnectionSection';
import CommunitySection from '../components/CommunitySection';
import DashboardSection from '../components/DashboardSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import StudentIdeasSection from '../components/StudentIdeasSection';
import Footer from '../components/Footer';
import AuthModal from '../components/AuthModal';

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation onAuthClick={openAuthModal} />
      
      <main>
        <HeroSection onGetStarted={() => openAuthModal('register')} />
        <MissionSection />
        <AccessibilitySection />
        <CulturalSection />
        <CommunityConnectionSection />
        <FeaturesSection />
        <ServicesSection />
        <CommunitySection />
        <DashboardSection />
        <TestimonialsSection />
        <FAQSection />
        <StudentIdeasSection />
      </main>

      <Footer />

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </div>
  );
};

export default Index;
