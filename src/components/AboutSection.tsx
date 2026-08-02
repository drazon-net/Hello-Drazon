import React from 'react';
import { Target, Lightbulb, Users, Globe2, ShieldCheck, Zap, Award, ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenProposal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenProposal }) => {
  return (
    <section id="about" className="py-20 md:py-28 relative bg-slate-900/40 backdrop-blur-sm border-y border-white/10">
      
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5" />
            <span>About Drazon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Bridging High-End Web Design &{' '}
            <span className="text-orange-gradient">Affordable Growth</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            We are a digital web agency founded on a simple premise: every business deserves a stunning, fast, and high-converting website without breaking the bank.
          </p>
        </div>

        {/* 3 Core Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Who We Are */}
          <div className="glass-card glass-card-hover rounded-2xl p-8 border border-white/10 space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/15 flex items-center justify-center text-[#FF6B00] mb-6 border border-[#FF6B00]/30">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Who We Are</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Drazon is a full-service web development and digital solutions studio. We are UI designers, full-stack engineers, and digital strategists passionate about helping small businesses, startups, and local shop owners thrive in the digital economy.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs text-[#FF6B00] font-semibold flex items-center gap-1">
              <span>Agile Creative Team</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 2: Why You Need a Strong Web Presence */}
          <div className="glass-card glass-card-hover rounded-2xl p-8 border border-white/10 space-y-4 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF6B00]/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/15 flex items-center justify-center text-[#FF6B00] mb-6 border border-[#FF6B00]/30">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Why Your Business Needs It</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Over 84% of consumers search online before visiting a local store or making a buying decision. An outdated or slow website drives customers straight to competitors. A modern Drazon website acts as your 24/7 top salesperson.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs text-[#FF6B00] font-semibold flex items-center gap-1">
              <span>24/7 Digital Sales Engine</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 3: Our Mission */}
          <div className="glass-card glass-card-hover rounded-2xl p-8 border border-white/10 space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/15 flex items-center justify-center text-[#FF6B00] mb-6 border border-[#FF6B00]/30">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                To democratize premium web design and AI capabilities. We make enterprise-level speed, glassmorphism design, and smart automation accessible and affordable for ambitious local businesses and rising startups worldwide.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 text-xs text-[#FF6B00] font-semibold flex items-center gap-1">
              <span>Premium Quality for Everyone</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

        {/* Mission Highlight Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-white/5 via-[#FF6B00]/10 to-white/5 border border-[#FF6B00]/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#FF6B00] text-sm font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>The Drazon Promise</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Ready to elevate your online presence?
            </h3>
            <p className="text-gray-300 text-sm max-w-xl">
              Get an instant AI-powered proposal tailored specifically to your industry, goals, and budget in under 30 seconds.
            </p>
          </div>

          <button
            id="about-section-proposal-btn"
            onClick={onOpenProposal}
            className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#FF6B00] hover:bg-[#FF8533] rounded-xl shadow-lg shadow-[#FF6B00]/25 transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            Start Your Website Build
          </button>
        </div>

      </div>
    </section>
  );
};
