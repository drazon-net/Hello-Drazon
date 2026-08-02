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
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 py-3.5 shadow-sm'
          : 'bg-white/70 backdrop-blur-md py-4 border-b border-slate-200/60'
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
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-[#10B981] border-b-2 border-[#10B981] pb-1'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* AI Advisor Chat Button */}
            <button
              id="nav-chat-assistant-btn"
              onClick={onOpenChat}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition cursor-pointer"
            >
              <Bot className="w-4 h-4 text-[#10B981]" />
              <span>AI Web Advisor</span>
            </button>

            {/* Instant Proposal Primary Button */}
            <button
              id="nav-get-proposal-btn"
              onClick={onOpenProposal}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white uppercase tracking-wider bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#10B981] rounded-xl shadow-md shadow-[#10B981]/20 hover:shadow-lg transition cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Proposal</span>
            </button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenChat}
              className="p-2 text-slate-700 bg-slate-100 rounded-lg border border-slate-200"
              aria-label="Open AI Advisor"
            >
              <Bot className="w-5 h-5 text-[#10B981]" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'bg-emerald-50 text-[#10B981] border border-emerald-200'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProposal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#10B981] to-[#059669] rounded-xl shadow-md"
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
