import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, Menu, X, Sparkles } from 'lucide-react';
import { DrazonLogo } from './DrazonLogo';

interface NavbarProps {
  onOpenProposal: () => void;
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProposal, onOpenChat }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/#portfolio' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F9F0ED]/90 backdrop-blur-xl border-b border-[#5B443D]/10 py-3.5 shadow-sm'
          : 'bg-[#F9F0ED]/70 backdrop-blur-md py-4 border-b border-[#5B443D]/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" id="brand-logo-link" className="flex items-center group">
            <DrazonLogo size="md" showTagline={true} />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (link.href.startsWith('/#') && location.hash === link.href.substring(1));
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'text-[#8B0E2D] border-b-2 border-[#F35A24] pb-1'
                      : 'text-[#4A4A4A] hover:text-[#111111]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* AI Advisor Chat Button */}
            <button
              id="nav-chat-assistant-btn"
              onClick={onOpenChat}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#5B443D] bg-white/80 hover:bg-white border border-[#5B443D]/15 rounded-full transition cursor-pointer shadow-sm"
            >
              <Bot className="w-4 h-4 text-[#F35A24]" />
              <span>AI Web Advisor</span>
            </button>

            {/* Instant Proposal Primary Button */}
            <button
              id="nav-get-proposal-btn"
              onClick={onOpenProposal}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white uppercase tracking-wider bg-gradient-to-r from-[#F35A24] to-[#D86A43] hover:from-[#D86A43] hover:to-[#F35A24] rounded-full shadow-md shadow-[#F35A24]/20 hover:shadow-lg transition duration-200 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Proposal</span>
            </button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenChat}
              className="p-2 text-[#5B443D] bg-white rounded-xl border border-[#5B443D]/10"
              aria-label="Open AI Advisor"
            >
              <Bot className="w-5 h-5 text-[#F35A24]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111111] hover:text-[#F35A24] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F9F0ED]/95 backdrop-blur-xl border-b border-[#5B443D]/10 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 text-sm font-bold rounded-xl transition-colors ${
                    isActive
                      ? 'bg-white text-[#8B0E2D] border border-[#F35A24]/30 shadow-sm'
                      : 'text-[#4A4A4A] hover:bg-white/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#5B443D]/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProposal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#F35A24] to-[#D86A43] rounded-full shadow-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Your Website Proposal</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
