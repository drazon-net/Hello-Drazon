import React from 'react';
import { BENEFITS_DATA } from '../data/agencyData';
import { DollarSign, Sparkles, Zap, Smartphone, Bot, Headphones, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'DollarSign': return <DollarSign className="w-6 h-6 text-[#F35A24]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#F35A24]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#F35A24]" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-[#F35A24]" />;
      case 'Bot': return <Bot className="w-6 h-6 text-[#F35A24]" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-[#F35A24]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#F35A24]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-28 relative bg-[#F3EEEC] border-y border-[#5B443D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#5B443D]/15 text-xs font-bold text-[#8B0E2D] uppercase tracking-wider shadow-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#F35A24]" />
            <span>Why Choose Drazon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight">
            Built Differently For{' '}
            <span className="text-orange-gradient">Unmatched Results</span>
          </h2>
          <p className="text-[#4A4A4A] text-base sm:text-lg leading-relaxed">
            We eliminate traditional agency bloat, slow turnaround times, and inflated costs. Here is why businesses choose us as their long-term digital growth partner.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS_DATA.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-[#5B443D]/10 space-y-4 relative group hover:border-[#F35A24]/40 hover:shadow-xl shadow-sm transition-all duration-300"
            >
              {/* Highlight Badge */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#F9F0ED] border border-[#5B443D]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(benefit.iconName)}
                </div>
                <span className="text-[10px] font-extrabold text-[#8B0E2D] uppercase tracking-widest bg-[#F9F0ED] px-3 py-1 rounded-full border border-[#5B443D]/10">
                  {benefit.highlight}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#F35A24] transition-colors">
                {benefit.title}
              </h3>

              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Banner */}
        <div className="mt-16 rounded-3xl bg-white p-6 sm:p-10 border border-[#5B443D]/10 shadow-sm">
          <h3 className="text-center text-xl sm:text-2xl font-black text-[#111111] mb-8">
            Traditional Agency vs. <span className="text-[#F35A24]">Drazon Digital Agency</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            
            {/* Traditional Agency */}
            <div className="p-6 rounded-2xl bg-[#5B443D]/5 border border-[#5B443D]/15 space-y-3">
              <p className="font-bold text-[#5B443D] text-base">Old Traditional Agencies</p>
              <ul className="space-y-2.5 text-[#4A4A4A] text-xs font-medium">
                <li className="flex items-center gap-2">❌ $5,000 - $15,000+ inflated initial pricing</li>
                <li className="flex items-center gap-2">❌ 2 to 3 months slow development timelines</li>
                <li className="flex items-center gap-2">❌ Bloated account managers and hidden monthly fees</li>
                <li className="flex items-center gap-2">❌ Clunky generic templates</li>
              </ul>
            </div>

            {/* Drazon */}
            <div className="p-6 rounded-2xl bg-[#F9F0ED] border border-[#F35A24]/30 space-y-3 shadow-xs">
              <p className="font-bold text-[#8B0E2D] text-base">The Drazon Advantage</p>
              <ul className="space-y-2.5 text-[#111111] text-xs font-semibold">
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
