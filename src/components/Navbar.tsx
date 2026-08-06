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
      className="fixed top-5 left-1/2 -translate-x-1/2 w-[94%] max-w-7xl z-50 transition-all duration-300"
    >
      <div 
        className="rounded-[20px] px-5 sm:px-8 py-3.5 border transition-all duration-300"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.82)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          borderColor: 'rgba(255, 255, 255, 0.35)',
          boxShadow: '0 12px 40px rgba(15, 23, 42, 0.08)'
        }}
      >
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
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-[#1D4ED8] font-bold border-b-2 border-[#1D4ED8] pb-0.5'
                      : 'text-[#334155] hover:text-[#1E40AF]'
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
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#334155] hover:text-[#1D4ED8] bg-white/80 hover:bg-slate-50 border border-[#E2E8F0] rounded-full transition cursor-pointer shadow-xs"
            >
              <Bot className="w-4 h-4 text-[#1D4ED8]" />
              <span>AI Web Advisor</span>
            </button>

            {/* Instant Proposal Primary Button */}
            <button
              id="nav-get-proposal-btn"
              onClick={onOpenProposal}
              className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white uppercase tracking-wider bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] hover:from-[#1E40AF] hover:to-[#1D4ED8] rounded-full shadow-[0_8px_25px_rgba(29,78,216,0.25)] hover:shadow-[0_12px_30px_rgba(29,78,216,0.35)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Proposal</span>
            </button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenChat}
              className="p-2 text-[#334155] bg-white rounded-xl border border-[#E2E8F0]"
              aria-label="Open AI Advisor"
            >
              <Bot className="w-5 h-5 text-[#1D4ED8]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0F172A] hover:text-[#1D4ED8] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer Navigation inside floating card */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 rounded-2xl border border-[#E2E8F0] px-4 pt-4 pb-6 mt-3 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
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
                        ? 'bg-blue-50 text-[#1D4ED8] border border-blue-200 shadow-xs'
                        : 'text-[#334155] hover:bg-slate-100'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="pt-2 border-t border-[#E2E8F0] flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProposal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] hover:from-[#1E40AF] hover:to-[#1D4ED8] rounded-full shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Your Website Proposal</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
