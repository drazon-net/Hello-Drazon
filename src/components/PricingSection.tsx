import React from 'react';
import { PRICING_PLANS } from '../data/agencyData';
import { Check, Sparkles, Zap, Star, ShieldCheck, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string, price: number | string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-20 md:py-28 relative bg-[#F3EEEC] border-y border-[#5B443D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#5B443D]/15 text-xs font-bold text-[#8B0E2D] uppercase tracking-wider shadow-sm">
            <Zap className="w-3.5 h-3.5 text-[#F35A24]" />
            <span>Clear Investment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight">
            Transparent Pricing With <span className="text-orange-gradient">No Hidden Costs</span>
          </h2>
          <p className="text-[#4A4A4A] text-base sm:text-lg leading-relaxed">
            Straightforward flat-rate pricing designed for modern businesses. Choose the official service that fits your current goals.
          </p>
        </div>

        {/* Pricing Cards Grid (3 Columns) */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPrimary = plan.isPrimary;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 overflow-hidden ${
                  isPrimary
                    ? 'bg-white border-2 border-[#F35A24] shadow-xl shadow-[#F35A24]/15 lg:-translate-y-2'
                    : 'bg-white/90 backdrop-blur-md border border-[#5B443D]/10 hover:border-[#F35A24]/40 shadow-sm hover:shadow-lg'
                }`}
              >
                {/* Primary Service Badge */}
                {isPrimary && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#F35A24] to-[#D86A43] text-white text-[11px] font-extrabold uppercase tracking-widest shadow-md shadow-[#F35A24]/30 flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{plan.badge || 'Primary Service'}</span>
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-black text-[#111111]">{plan.name}</h3>
                      <span className="text-[10px] font-extrabold text-[#8B0E2D] bg-[#F9F0ED] px-3 py-1 rounded-full border border-[#5B443D]/10 uppercase tracking-wider">
                        {plan.billingType === 'monthly' ? 'Monthly Support' : 'One-Time'}
                      </span>
                    </div>
                    <p className="text-xs text-[#4A4A4A] leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Price Tag Display */}
                  <div className="mb-6 pb-6 border-b border-[#5B443D]/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-[#111111]">
                        {plan.priceDisplay}
                      </span>
                    </div>
                    <p className="text-xs text-[#F35A24] font-bold mt-1">
                      {plan.billingType === 'monthly' ? 'Flat monthly retainer' : 'One-time investment'}
                    </p>
                  </div>

                  {/* Included Features List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#5B443D]">Included In Plan:</p>
                    <ul className="space-y-2.5">
                      {plan.includes.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#111111] font-medium">
                          <Check className="w-4 h-4 text-[#F35A24] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan Select CTA Button */}
                <button
                  onClick={() => onSelectPlan(plan.name, plan.priceDisplay)}
                  className={`w-full py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                    isPrimary
                      ? 'bg-gradient-to-r from-[#F35A24] to-[#D86A43] text-white shadow-md shadow-[#F35A24]/20 hover:shadow-lg'
                      : 'bg-[#F9F0ED] hover:bg-[#F3EEEC] text-[#111111] border border-[#5B443D]/15'
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
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-white border border-[#5B443D]/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#F9F0ED] border border-[#5B443D]/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#F35A24]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#111111]">Need a customized scope or technical advice?</h4>
              <p className="text-xs text-[#4A4A4A]">Get in touch directly with our lead developer for a personalized project breakdown.</p>
            </div>
          </div>
          <button
            onClick={() => onSelectPlan('Custom Website Inquiry', 'Consultation')}
            className="px-6 py-3 rounded-full bg-[#F9F0ED] hover:bg-[#F3EEEC] text-xs font-bold text-[#111111] border border-[#5B443D]/15 whitespace-nowrap cursor-pointer transition-colors"
          >
            Request Custom Scope
          </button>
        </div>

      </div>
    </section>
  );
};
