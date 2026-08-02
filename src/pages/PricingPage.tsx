import React from 'react';
import { Link } from 'react-router-dom';
import { PRICING_PLANS } from '../data/agencyData';
import { Check, Zap, Star, ShieldCheck, ArrowRight } from 'lucide-react';

interface PricingPageProps {
  onOpenProposal: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenProposal }) => {
  return (
    <div className="py-24 sm:py-28 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#059669] uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5 text-[#10B981]" />
          <span>Clear NZD Investment</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Transparent Pricing With <span className="text-emerald-gradient">No Hidden Costs</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Straightforward flat-rate pricing designed for New Zealand businesses. Choose the official service that fits your current goals.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-16">
        {PRICING_PLANS.map((plan) => {
          const isPrimary = plan.isPrimary;

          return (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 overflow-hidden ${
                isPrimary
                  ? 'bg-white border-2 border-[#10B981] shadow-xl shadow-[#10B981]/15 lg:-translate-y-2 bg-gradient-to-b from-emerald-50/50 via-white to-white'
                  : 'bg-white border border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              {/* Primary Service Badge */}
              {isPrimary && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] text-white text-[11px] font-black uppercase tracking-widest shadow-md shadow-[#10B981]/20 flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{plan.badge || 'Primary Service'}</span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-black text-slate-900">{plan.name}</h2>
                    <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 uppercase tracking-wider">
                      {plan.billingType === 'monthly' ? 'Monthly Support' : 'One-Time'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{plan.description}</p>
                </div>

                {/* Price Display */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900">
                      {plan.priceDisplay}
                    </span>
                  </div>
                  <p className="text-xs text-[#059669] font-semibold mt-1">
                    {plan.billingType === 'monthly' ? 'Flat monthly maintenance' : 'One-time project investment'}
                  </p>
                </div>

                {/* Features Included */}
                <div className="space-y-3 mb-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Included In Plan:</p>
                  <ul className="space-y-2.5">
                    {plan.includes.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <Link
                to="/contact"
                className={`w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                  isPrimary
                    ? 'bg-gradient-to-r from-[#10B981] to-[#059669] text-white shadow-md shadow-[#10B981]/25 hover:shadow-lg'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200'
                }`}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          );
        })}
      </div>

      {/* Guarantee & Contact Reassurance Banner */}
      <div className="p-8 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-[#10B981]" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Have questions about pricing or timeline?</h3>
            <p className="text-xs text-slate-600">Reach out directly to our team at hello@drazon.cc.cd or submit a contact inquiry.</p>
          </div>
        </div>

        <Link
          to="/contact"
          className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 border border-slate-200 whitespace-nowrap transition cursor-pointer"
        >
          Contact Our Team
        </Link>
      </div>
    </div>
  );
};
