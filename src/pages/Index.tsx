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
import AiHealthModal from '../components/AiHealth'; // ← NEW
import AiModal from '../components/AiModal'; // ← NEW
import { motion } from 'framer-motion';

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false); // ← NEW
  const [isAiModalOpen, setIsAiModalOpen] = useState(false); // ← NEW

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

   const openDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const openAiModal = () => {
    setIsAiModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation onAuthClick={openAuthModal} onDemoClick={openDemoModal} onAiClick={openAiModal}/>

      <main>
        <HeroSection onGetStarted={() => {}} />
        <MissionSection />
        <ServicesSection />
        <DashboardSection />
        <CommunitySection />
        {/* <StudentIdeasSection/> */}
      </main>

      {/* Floating Ai Chat button
      <div className="fixed bottom-4 right-4 z-50">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button
            onClick={openAiModal}
            className="btn-professional px-4 py-2 rounded-lg shadow-lg"
          >
            Ai Chat
          </button>
        </motion.div>
      </div> */}

      <Footer />

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />

      <AiHealthModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      <AiModal 
        isOpen={isAiModalOpen}
        onClose={() => setIsAiModalOpen(false)}
      />
    </div>
  );
};

export default Index;