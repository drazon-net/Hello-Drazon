import React from 'react';
import { BENEFITS_DATA } from '../data/agencyData';
import { DollarSign, Sparkles, Zap, Smartphone, Bot, Headphones, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'DollarSign': return <DollarSign className="w-6 h-6 text-[#10B981]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#10B981]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#10B981]" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-[#10B981]" />;
      case 'Bot': return <Bot className="w-6 h-6 text-[#10B981]" />;
      case 'Headphones': return <Headphones className="w-6 h-6 text-[#10B981]" />;
      default: return <ShieldCheck className="w-6 h-6 text-[#10B981]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-28 relative bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#059669] uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Why Choose Drazon</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Built Differently For{' '}
            <span className="text-emerald-gradient">Unmatched Results</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We eliminate traditional agency bloat, slow turnaround times, and inflated costs. Here is why businesses choose us as their long-term digital growth partner.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS_DATA.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-slate-200 space-y-4 relative group hover:border-emerald-300 hover:shadow-lg shadow-sm transition-all duration-300"
            >
              {/* Highlight Badge */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(benefit.iconName)}
                </div>
                <span className="text-[10px] font-bold text-[#059669] uppercase tracking-widest bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  {benefit.highlight}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#10B981] transition-colors">
                {benefit.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Banner */}
        <div className="mt-16 rounded-2xl bg-white p-6 sm:p-8 border border-slate-200 shadow-sm">
          <h3 className="text-center text-xl font-bold text-slate-900 mb-6">
            Traditional Agency vs. <span className="text-[#10B981]">Drazon Digital Agency</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            
            {/* Traditional Agency */}
            <div className="p-6 rounded-xl bg-red-50 border border-red-200 space-y-3">
              <p className="font-bold text-red-700 text-base">Old Traditional Agencies</p>
              <ul className="space-y-2 text-slate-600 text-xs">
                <li className="flex items-center gap-2">❌ $5,000 - $15,000+ astronomical initial pricing</li>
                <li className="flex items-center gap-2">❌ 2 to 3 months slow development timelines</li>
                <li className="flex items-center gap-2">❌ Bloated account managers and hidden monthly fees</li>
                <li className="flex items-center gap-2">❌ Clunky generic templates</li>
              </ul>
            </div>

            {/* Drazon */}
            <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 space-y-3">
              <p className="font-bold text-[#059669] text-base">The Drazon Advantage</p>
              <ul className="space-y-2 text-slate-700 text-xs font-medium">
                <li className="flex items-center gap-2">✅ Transparent pricing starting at NZ$299</li>
                <li className="flex items-center gap-2">✅ Fast 7 to 12 day guaranteed turnaround</li>
                <li className="flex items-center gap-2">✅ Direct developer support via WhatsApp & Email</li>
                <li className="flex items-center gap-2">✅ Custom React 19 + AI-powered modern code</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
