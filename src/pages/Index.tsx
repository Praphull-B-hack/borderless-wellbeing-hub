
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import FeaturesSection from '../components/FeaturesSection';
import ServicesSection from '../components/ServicesSection';
import CommunitySection from '../components/CommunitySection';
import DashboardSection from '../components/DashboardSection';
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
    <div className="min-h-screen bg-white">
      <Navigation onAuthClick={openAuthModal} />
      
      <main>
        <HeroSection onGetStarted={() => openAuthModal('register')} />
        <MissionSection />
        <FeaturesSection />
        <ServicesSection />
        <CommunitySection />
        <DashboardSection />
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
