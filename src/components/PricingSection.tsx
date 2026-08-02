import React from 'react';
import { PRICING_PLANS } from '../data/agencyData';
import { Check, Sparkles, Zap, Star, ShieldCheck, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string, price: number | string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Clear NZD Investment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Transparent Pricing With <span className="text-orange-gradient">No Hidden Costs</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Straightforward flat-rate pricing designed for New Zealand businesses. Choose the official service that fits your current goals.
          </p>
        </div>

        {/* Pricing Cards Grid (3 Columns) */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPrimary = plan.isPrimary;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 overflow-hidden ${
                  isPrimary
                    ? 'glass-card border-2 border-[#FF6B00] shadow-2xl shadow-[#FF6B00]/25 lg:-translate-y-2 bg-gradient-to-b from-[#FF6B00]/10 via-slate-900/95 to-slate-950'
                    : 'glass-card border border-white/10 hover:border-white/20 bg-slate-900/50'
                }`}
              >
                {/* Primary Service Badge */}
                {isPrimary && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8800] text-white text-[11px] font-black uppercase tracking-widest shadow-lg shadow-[#FF6B00]/40 flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{plan.badge || 'Primary Service'}</span>
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-black text-white">{plan.name}</h3>
                      <span className="text-[10px] font-bold text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10 uppercase tracking-wider">
                        {plan.billingType === 'monthly' ? 'Monthly Support' : 'One-Time'}
                      </span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Price Tag Display */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-white">
                        {plan.priceDisplay}
                      </span>
                    </div>
                    <p className="text-xs text-[#FF6B00] font-semibold mt-1">
                      {plan.billingType === 'monthly' ? 'Flat monthly retainer' : 'One-time investment'}
                    </p>
                  </div>

                  {/* Included Features List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Included In Plan:</p>
                    <ul className="space-y-2.5">
                      {plan.includes.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-200">
                          <Check className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan Select CTA Button */}
                <button
                  onClick={() => onSelectPlan(plan.name, plan.priceDisplay)}
                  className={`w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                    isPrimary
                      ? 'bg-gradient-to-r from-[#FF6B00] to-[#FF8800] text-white shadow-lg shadow-[#FF6B00]/30 hover:shadow-xl hover:scale-102'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-16 p-6 rounded-2xl glass-card border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#FF6B00]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Need a customized scope or technical advice?</h4>
              <p className="text-xs text-gray-400">Get in touch directly with our lead developer for a personalized project breakdown.</p>
            </div>
          </div>
          <button
            onClick={() => onSelectPlan('Custom Website Inquiry', 'Consultation')}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white border border-white/10 whitespace-nowrap cursor-pointer transition-colors"
          >
            Request Custom Scope
          </button>
        </div>

      </div>
    </section>
  );
};
