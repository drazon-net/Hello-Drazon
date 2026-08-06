import React from 'react';
import { BENEFITS_DATA } from '../data/agencyData';
import { DollarSign, Sparkles, Zap, Smartphone, Bot, Headphones, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'DollarSign': return <DollarSign className="w-6 h-6 text-[#1D4ED8]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#1D4ED8]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#1D4ED8]" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-[#1D4ED8]" />;
      case 'Bot': return <Bot className="w-6 h-6 text-[#1D4ED8]" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-[#1D4ED8]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#1D4ED8]" />;
    }
  };

  return (
    <section id="why-us" className="py-28 md:py-32 relative bg-[#F8FAFC]/80 border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-xs font-bold text-[#1D4ED8] uppercase tracking-wider shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#1D4ED8]" />
            <span>Why Choose Drazon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Built Differently For{' '}
            <span className="text-blue-gradient">Unmatched Results</span>
          </h2>
          <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
            We eliminate traditional agency bloat, slow turnaround times, and inflated costs. Here is why businesses choose us as their long-term digital growth partner.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS_DATA.map((benefit, index) => (
            <div
              key={index}
              className="premium-card p-8 space-y-4 relative group"
            >
              {/* Highlight Badge */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(benefit.iconName)}
                </div>
                <span className="text-[10px] font-extrabold text-[#1D4ED8] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  {benefit.highlight}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors">
                {benefit.title}
              </h3>

              <p className="text-[#475569] text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Banner */}
        <div className="mt-16 rounded-[18px] bg-white p-6 sm:p-10 border border-[#E2E8F0] shadow-[0_10px_35px_rgba(15,23,42,0.06)]">
          <h3 className="text-center text-xl sm:text-2xl font-black text-[#0F172A] mb-8">
            Traditional Agency vs. <span className="text-[#1D4ED8]">Drazon Digital Agency</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            
            {/* Traditional Agency */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
              <p className="font-bold text-[#475569] text-base">Old Traditional Agencies</p>
              <ul className="space-y-2.5 text-[#475569] text-xs font-medium">
                <li className="flex items-center gap-2">❌ $5,000 - $15,000+ inflated initial pricing</li>
                <li className="flex items-center gap-2">❌ 2 to 3 months slow development timelines</li>
                <li className="flex items-center gap-2">❌ Bloated account managers and hidden monthly fees</li>
                <li className="flex items-center gap-2">❌ Clunky generic templates</li>
              </ul>
            </div>

            {/* Drazon */}
            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-3 shadow-xs">
              <p className="font-bold text-[#1D4ED8] text-base">The Drazon Advantage</p>
              <ul className="space-y-2.5 text-[#0F172A] text-xs font-semibold">
                <li className="flex items-center gap-2">✅ Transparent pricing starting at NZ$299</li>
                <li className="flex items-center gap-2">✅ Fast 7 to 12 day guaranteed turnaround</li>
                <li className="flex items-center gap-2">✅ Direct lead architect support</li>
                <li className="flex items-center gap-2">✅ Custom React 19 + Sub-second UI speed</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
