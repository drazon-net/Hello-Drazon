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
        return <Code2 className="w-7 h-7 text-[#2563EB]" />;
      case 'Palette':
        return <Palette className="w-7 h-7 text-[#2563EB]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-[#2563EB]" />;
      default:
        return <Code2 className="w-7 h-7 text-[#2563EB]" />;
    }
  };

  return (
    <div className="py-24 sm:py-28 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#2563EB] uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5 text-[#2563EB]" />
          <span>Official Launch Services</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight">
          Tailored Web Services For <span className="text-blue-gradient">Your Business</span>
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
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 group overflow-hidden ${
                isPrimary
                  ? 'bg-white border-2 border-[#2563EB] shadow-xl lg:-translate-y-2'
                  : 'bg-white border border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              {/* Primary Badge */}
              {isPrimary && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#2563EB] text-white text-[11px] font-black uppercase tracking-widest shadow-md flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>Primary Service</span>
                </div>
              )}

              <div>
                {/* Icon & Price */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center shadow-xs">
                    {getIconComponent(service.icon)}
                  </div>
                  <span className="text-sm font-extrabold text-[#111111] bg-slate-100 px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-xs">
                    {service.pricing}
                  </span>
                </div>

                {/* Service Title */}
                <h2 className="text-2xl font-bold text-[#111111] group-hover:text-[#2563EB] transition-colors mb-3">
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
                        <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
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
                  className={`w-full py-3.5 px-6 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                    isPrimary
                      ? 'bg-[#2563EB] hover:bg-[#111111] text-white shadow-md'
                      : 'bg-[#111111] hover:bg-[#2563EB] text-white'
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
      <div className="rounded-3xl bg-white border border-slate-200 p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="space-y-2">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-[#2563EB] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#2563EB]" />
            <span>Need a Custom Scope?</span>
          </div>
          <h3 className="text-xl font-bold text-[#111111]">Get a Tailored AI Proposal for Your Service</h3>
          <p className="text-xs text-slate-600 max-w-xl">
            Our instant AI proposal engine can generate a complete timeline, deliverables breakdown, and project roadmap in seconds.
          </p>
        </div>
        <button
          onClick={onOpenProposal}
          className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#111111] hover:bg-[#2563EB] rounded-full shadow-md transition whitespace-nowrap cursor-pointer"
        >
          Generate Proposal
        </button>
      </div>
    </div>
  );
};
