import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/agencyData';
import { Code2, Palette, ShieldCheck, Check, Star, ArrowRight, Zap, Sparkles } from 'lucide-react';

interface ServicesPageProps {
  onOpenProposal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenProposal }) => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-7 h-7 text-[#10B981]" />;
      case 'Palette':
        return <Palette className="w-7 h-7 text-[#10B981]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-[#10B981]" />;
      default:
        return <Code2 className="w-7 h-7 text-[#10B981]" />;
    }
  };

  return (
    <div className="py-24 sm:py-28 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#059669] uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5 text-[#10B981]" />
          <span>Official Launch Services</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
          Tailored Web Services For <span className="text-emerald-gradient">Your Business</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Streamlined, high-performance web solutions built specifically to give local businesses a modern competitive edge.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-16">
        {SERVICES_DATA.map((service) => {
          const isPrimary = service.isPrimary;

          return (
            <div
              key={service.id}
              className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 group overflow-hidden ${
                isPrimary
                  ? 'bg-white border-2 border-[#10B981] shadow-xl shadow-[#10B981]/15 lg:-translate-y-2 bg-gradient-to-b from-emerald-50/50 via-white to-white'
                  : 'bg-white border border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              {/* Primary Badge */}
              {isPrimary && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] text-white text-[11px] font-black uppercase tracking-widest shadow-md shadow-[#10B981]/20 flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>Primary Service</span>
                </div>
              )}

              {/* Corner Glow */}
              <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl transition-all duration-300 pointer-events-none ${
                isPrimary ? 'bg-emerald-500/15' : 'bg-emerald-500/5 group-hover:bg-emerald-500/10'
              }`} />

              <div>
                {/* Icon & Price */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shadow-sm">
                    {getIconComponent(service.icon)}
                  </div>
                  <span className="text-sm font-extrabold text-slate-800 bg-slate-100 px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-sm">
                    {service.pricing}
                  </span>
                </div>

                {/* Service Title */}
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-[#10B981] transition-colors mb-3">
                  {service.title}
                </h2>

                {/* Description */}
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features Included */}
                <div className="space-y-3 mb-8 pt-4 border-t border-slate-200">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Features & Deliverables:</p>
                  <ul className="space-y-2.5">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Action */}
              <div className="pt-6 border-t border-slate-200">
                <Link
                  to="/contact"
                  className={`w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                    isPrimary
                      ? 'bg-gradient-to-r from-[#10B981] to-[#059669] text-white shadow-md shadow-[#10B981]/25 hover:shadow-lg'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200'
                  }`}
                >
                  <span>Select {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          );
        })}
      </div>

      {/* Instant Proposal CTA Box */}
      <div className="rounded-2xl bg-white border border-slate-200 p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-2">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-[#059669] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#10B981]" />
            <span>Need a Custom Scope?</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900">Get a Tailored AI Proposal for Your Service</h3>
          <p className="text-xs text-slate-600 max-w-xl">
            Our instant AI proposal engine can generate a complete timeline, deliverables breakdown, and project roadmap in seconds.
          </p>
        </div>
        <button
          onClick={onOpenProposal}
          className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#10B981] hover:bg-[#059669] rounded-xl shadow-md shadow-[#10B981]/20 transition whitespace-nowrap cursor-pointer"
        >
          Generate Proposal
        </button>
      </div>
    </div>
  );
};
