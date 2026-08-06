import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AiProposalModal } from './components/AiProposalModal';
import { AiChatAssistant } from './components/AiChatAssistant';
import { MobileBackground } from './components/MobileBackground';
import { BackgroundAtmosphere } from './components/BackgroundAtmosphere';
import { Sparkles } from 'lucide-react';

// Lazy loaded page components for optimal initial bundle loading performance
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const PricingPage = lazy(() => import('./pages/PricingPage').then(m => ({ default: m.PricingPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage').then(m => ({ default: m.TermsOfServicePage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

// Loading Fallback Component
const PageLoadingFallback: React.FC = () => (
  <div className="min-h-[65vh] flex items-center justify-center p-8">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 text-[#2563EB] flex items-center justify-center animate-spin">
        <Sparkles className="w-5 h-5" />
      </div>
      <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Loading Drazon...</p>
    </div>
  </div>
);

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
      <div className="min-h-screen text-[#111111] font-sans selection:bg-[#2563EB] selection:text-white relative overflow-hidden flex flex-col justify-between bg-transparent">
        
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

        {/* Main Content Router with Suspense */}
        <main id="main-content" className="flex-1 pt-16 relative z-10">
          <Suspense fallback={<PageLoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage onOpenProposal={handleOpenProposal} />} />
              <Route path="/services" element={<ServicesPage onOpenProposal={handleOpenProposal} />} />
              <Route path="/pricing" element={<PricingPage onOpenProposal={handleOpenProposal} />} />
              <Route path="/about" element={<AboutPage onOpenProposal={handleOpenProposal} />} />
              <Route path="/contact" element={<ContactPage onOpenProposal={handleOpenProposal} />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
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
      </div>
    </Router>
  );
}
