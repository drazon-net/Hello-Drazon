import React from 'react';
import { PRICING_PLANS } from '../data/agencyData';
import { Check, Sparkles, Zap, Star, ShieldCheck, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (planName: string, price: number | string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-28 md:py-32 relative bg-[#F8FAFC]/80 border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-xs font-bold text-[#1D4ED8] uppercase tracking-wider shadow-xs">
            <Zap className="w-3.5 h-3.5 text-[#1D4ED8]" />
            <span>Clear Investment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Transparent Pricing With <span className="text-blue-gradient">No Hidden Costs</span>
          </h2>
          <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
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
                className={`relative rounded-[18px] p-8 flex flex-col justify-between transition-all duration-300 overflow-hidden bg-white border border-[#E2E8F0] shadow-[0_10px_35px_rgba(15,23,42,0.06)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)] ${
                  isPrimary ? 'border-2 border-[#1D4ED8]' : ''
                }`}
              >
                {/* Primary Service Badge */}
                {isPrimary && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#1D4ED8] text-white text-[10px] font-extrabold uppercase tracking-widest shadow-xs flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{plan.badge || 'Featured'}</span>
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-black text-[#0F172A]">{plan.name}</h3>
                      <span className="text-[10px] font-extrabold text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-200 uppercase tracking-wider">
                        {plan.billingType === 'monthly' ? 'Monthly Support' : 'One-Time'}
                      </span>
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Price Tag Display */}
                  <div className="mb-6 pb-6 border-b border-[#E2E8F0]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-[#0F172A]">
                        {plan.priceDisplay}
                      </span>
                    </div>
                    <p className="text-xs text-[#1D4ED8] font-bold mt-1">
                      {plan.billingType === 'monthly' ? 'Flat monthly retainer' : 'One-time investment'}
                    </p>
                  </div>

                  {/* Included Features List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A]">Included In Plan:</p>
                    <ul className="space-y-2.5">
                      {plan.includes.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#0F172A] font-medium">
                          <Check className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan Select CTA Button */}
                <button
                  onClick={() => onSelectPlan(plan.name, plan.priceDisplay)}
                  className="btn-primary w-full justify-center"
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-[18px] bg-white border border-[#E2E8F0] text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_10px_35px_rgba(15,23,42,0.06)]">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#1D4ED8]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0F172A]">Need a customized scope or technical advice?</h4>
              <p className="text-xs text-[#475569]">Get in touch directly with our lead developer for a personalized project breakdown.</p>
            </div>
          </div>
          <button
            onClick={() => onSelectPlan('Custom Website Inquiry', 'Consultation')}
            className="btn-secondary whitespace-nowrap"
          >
            Request Custom Scope
          </button>
        </div>

      </div>
    </section>
  );
};
