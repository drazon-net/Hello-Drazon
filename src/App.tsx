import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AiProposalModal } from './components/AiProposalModal';
import { AiChatAssistant } from './components/AiChatAssistant';
import { MobileBackground } from './components/MobileBackground';
import { BackgroundAtmosphere } from './components/BackgroundAtmosphere';

export default function App() {
  const [proposalModalOpen, setProposalModalOpen] = useState(false);
  const [chatAssistantOpen, setChatAssistantOpen] = useState(false);

  const handleOpenProposal = () => {
    setProposalModalOpen(true);
  };

  const handleOpenChat = () => {
    setChatAssistantOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen text-slate-900 font-sans selection:bg-[#10B981] selection:text-white relative overflow-hidden flex flex-col justify-between bg-transparent">
        
        {/* Desktop Multi-Layered Atmosphere & Wave Background */}
        <div className="hidden sm:block">
          <BackgroundAtmosphere />
        </div>

        {/* Dedicated Mobile Background Overlay */}
        <MobileBackground />

        {/* Top Navbar */}
        <Navbar
          onOpenProposal={handleOpenProposal}
          onOpenChat={handleOpenChat}
        />

        {/* Main Content Router */}
        <main id="main-content" className="flex-1 pt-16 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage onOpenProposal={handleOpenProposal} />} />
            <Route path="/services" element={<ServicesPage onOpenProposal={handleOpenProposal} />} />
            <Route path="/pricing" element={<PricingPage onOpenProposal={handleOpenProposal} />} />
            <Route path="/about" element={<AboutPage onOpenProposal={handleOpenProposal} />} />
            <Route path="/contact" element={<ContactPage onOpenProposal={handleOpenProposal} />} />
            <Route path="*" element={<HomePage onOpenProposal={handleOpenProposal} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenProposal={handleOpenProposal} />

        {/* AI Proposal Modal */}
        <AiProposalModal
          isOpen={proposalModalOpen}
          onClose={() => setProposalModalOpen(false)}
        />

        {/* AI Strategy Chat Assistant Drawer */}
        <AiChatAssistant
          isOpen={chatAssistantOpen}
          onClose={() => setChatAssistantOpen(false)}
        />

        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </div>
    </Router>
  );
}
