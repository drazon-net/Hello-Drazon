import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/agencyData';
import { ServiceItem } from '../types';
import { Code2, Palette, ShieldCheck, Check, ArrowRight, X, Sparkles, Zap, Star } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForProposal: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForProposal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#F35A24]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#F35A24]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#F35A24]" />;
      default:
        return <Code2 className="w-6 h-6 text-[#F35A24]" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#5B443D]/15 text-xs font-bold text-[#8B0E2D] uppercase tracking-wider shadow-sm">
            <Zap className="w-3.5 h-3.5 text-[#F35A24]" />
            <span>Official Launch Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight">
            Tailored Digital Solutions For{' '}
            <span className="text-orange-gradient">Your Business</span>
          </h2>
          <p className="text-[#4A4A4A] text-base sm:text-lg leading-relaxed">
            Streamlined, high-performance web solutions engineered specifically to give modern businesses a powerful competitive edge.
          </p>
        </div>

        {/* Services Grid (3 Columns) */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {SERVICES_DATA.map((service) => {
            const isPrimary = service.isPrimary;

            return (
              <div
                key={service.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 group overflow-hidden ${
                  isPrimary
                    ? 'bg-white border-2 border-[#F35A24] shadow-xl shadow-[#F35A24]/15 lg:-translate-y-2'
                    : 'bg-white border border-[#5B443D]/10 hover:border-[#F35A24]/40 shadow-sm hover:shadow-lg'
                }`}
              >
                {/* Primary Badge */}
                {isPrimary && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#F35A24] to-[#D86A43] text-white text-[11px] font-extrabold uppercase tracking-widest shadow-md shadow-[#F35A24]/30 flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>Primary Service</span>
                  </div>
                )}

                <div>
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#F9F0ED] border border-[#5B443D]/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-xs">
                      {getIconComponent(service.icon)}
                    </div>
                    <span className="text-xs font-bold text-[#5B443D] bg-[#F3EEEC] px-3.5 py-1.5 rounded-full border border-[#5B443D]/10">
                      {service.pricing}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-[#111111] group-hover:text-[#F35A24] transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#4A4A4A] text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Includes List */}
                  <div className="space-y-3 mb-8 pt-4 border-t border-[#5B443D]/10">
                    <p className="text-xs font-extrabold text-[#5B443D] uppercase tracking-wider">What's Included:</p>
                    <ul className="space-y-2.5">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#111111] font-medium">
                          <Check className="w-4 h-4 text-[#F35A24] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-[#5B443D]/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-[#5B443D] hover:text-[#F35A24] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F35A24]" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForProposal(service.title)}
                    className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                      isPrimary
                        ? 'bg-gradient-to-r from-[#F35A24] to-[#D86A43] text-white shadow-md shadow-[#F35A24]/20 hover:shadow-lg'
                        : 'bg-[#F9F0ED] hover:bg-[#F3EEEC] text-[#111111] border border-[#5B443D]/15'
                    }`}
                  >
                    <span>Select Service</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white border border-[#5B443D]/15 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-[#5B443D] hover:text-[#111111] bg-[#F9F0ED] rounded-full border border-[#5B443D]/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F9F0ED] border border-[#5B443D]/10 flex items-center justify-center">
                {getIconComponent(selectedService.icon)}
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#111111]">{selectedService.title}</h3>
                <p className="text-xs text-[#F35A24] font-bold">{selectedService.pricing}</p>
              </div>
            </div>

            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              {selectedService.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-extrabold text-[#5B443D] uppercase tracking-wider">Service Scope & Deliverables</h4>
              <div className="grid gap-2">
                {selectedService.includes.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#111111] font-medium bg-[#F9F0ED] p-3 rounded-2xl border border-[#5B443D]/10">
                    <Check className="w-4 h-4 text-[#F35A24] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#5B443D]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#5B443D]">Tailored solutions available for your business.</span>
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForProposal(title);
                }}
                className="w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#F35A24] to-[#D86A43] rounded-full shadow-md cursor-pointer"
              >
                Get Started
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
