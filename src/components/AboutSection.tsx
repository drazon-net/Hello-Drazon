import React from 'react';
import { Target, Lightbulb, Users, Globe2, ShieldCheck, Zap, Award, ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenProposal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenProposal }) => {
  return (
    <section id="about" className="py-20 md:py-28 relative bg-[#F3EEEC] border-y border-[#5B443D]/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#5B443D]/15 text-xs font-bold text-[#8B0E2D] uppercase tracking-wider shadow-sm">
            <Globe2 className="w-3.5 h-3.5 text-[#F35A24]" />
            <span>About Drazon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight">
            Bridging High-End Web Design &{' '}
            <span className="text-orange-gradient">Affordable Growth</span>
          </h2>
          <p className="text-[#4A4A4A] text-base sm:text-lg leading-relaxed">
            We are a digital web agency founded on a simple premise: every business deserves a stunning, fast, and high-converting website without breaking the bank.
          </p>
        </div>

        {/* 3 Core Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Who We Are */}
          <div className="bg-white rounded-3xl p-8 border border-[#5B443D]/10 hover:border-[#F35A24]/40 shadow-sm hover:shadow-lg transition-all duration-300 space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F9F0ED] flex items-center justify-center text-[#F35A24] mb-6 border border-[#5B443D]/10 shadow-xs">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#111111] mb-2">Who We Are</h3>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                Drazon is a full-service web development and digital solutions studio. We are UI designers, full-stack engineers, and digital strategists passionate about helping small businesses, startups, and local shop owners thrive in the digital economy.
              </p>
            </div>
            <div className="pt-4 border-t border-[#5B443D]/10 text-xs text-[#F35A24] font-bold flex items-center gap-1">
              <span>Agile Creative Team</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 2: Why You Need a Strong Web Presence */}
          <div className="bg-white rounded-3xl p-8 border border-[#5B443D]/10 hover:border-[#F35A24]/40 shadow-sm hover:shadow-lg transition-all duration-300 space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F9F0ED] flex items-center justify-center text-[#F35A24] mb-6 border border-[#5B443D]/10 shadow-xs">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#111111] mb-2">Why Your Business Needs It</h3>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                Over 84% of consumers search online before visiting a local store or making a buying decision. An outdated or slow website drives customers straight to competitors. A modern Drazon website acts as your 24/7 top salesperson.
              </p>
            </div>
            <div className="pt-4 border-t border-[#5B443D]/10 text-xs text-[#F35A24] font-bold flex items-center gap-1">
              <span>24/7 Digital Sales Engine</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 3: Our Mission */}
          <div className="bg-white rounded-3xl p-8 border border-[#5B443D]/10 hover:border-[#F35A24]/40 shadow-sm hover:shadow-lg transition-all duration-300 space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F9F0ED] flex items-center justify-center text-[#F35A24] mb-6 border border-[#5B443D]/10 shadow-xs">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-[#111111] mb-2">Our Mission</h3>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                To democratize premium web design and digital capabilities. We make enterprise-level speed, elegant visual design, and smart conversion architecture accessible for ambitious businesses and rising startups worldwide.
              </p>
            </div>
            <div className="pt-4 border-t border-[#5B443D]/10 text-xs text-[#F35A24] font-bold flex items-center gap-1">
              <span>Premium Quality for Everyone</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

        {/* Mission Highlight Banner */}
        <div className="rounded-3xl bg-white border border-[#5B443D]/10 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#8B0E2D] text-xs font-extrabold uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#F35A24]" />
              <span>The Drazon Promise</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#111111]">
              Ready to elevate your online presence?
            </h3>
            <p className="text-[#4A4A4A] text-sm max-w-xl leading-relaxed">
              Get an instant tailored proposal designed specifically to match your industry, brand goals, and growth budget.
            </p>
          </div>

          <button
            id="about-section-proposal-btn"
            onClick={onOpenProposal}
            className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#F35A24] to-[#D86A43] hover:shadow-lg rounded-full shadow-md transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            Start Your Website Build
          </button>
        </div>

      </div>
    </section>
  );
};
