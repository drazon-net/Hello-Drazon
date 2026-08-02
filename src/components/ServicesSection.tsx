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
        return <Code2 className="w-6 h-6 text-[#FF6B00]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#FF6B00]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#FF6B00]" />;
      default:
        return <Code2 className="w-6 h-6 text-[#FF6B00]" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Official Launch Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Tailored Digital Solutions For{' '}
            <span className="text-orange-gradient">Your Business</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Streamlined, high-performance web solutions built specifically to give New Zealand businesses a modern competitive edge.
          </p>
        </div>

        {/* Services Grid (3 Columns) */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {SERVICES_DATA.map((service) => {
            const isPrimary = service.isPrimary;

            return (
              <div
                key={service.id}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 group overflow-hidden ${
                  isPrimary
                    ? 'glass-card border-2 border-[#FF6B00] shadow-2xl shadow-[#FF6B00]/25 lg:-translate-y-2 bg-gradient-to-b from-[#FF6B00]/10 via-slate-900/90 to-slate-950'
                    : 'glass-card border border-white/10 hover:border-white/20 bg-slate-900/50'
                }`}
              >
                {/* Primary Badge */}
                {isPrimary && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#FF8800] text-white text-[11px] font-black uppercase tracking-widest shadow-lg shadow-[#FF6B00]/40 flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>Primary Service</span>
                  </div>
                )}

                {/* Corner Glow */}
                <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl transition-all duration-300 pointer-events-none ${
                  isPrimary ? 'bg-[#FF6B00]/25' : 'bg-[#FF6B00]/10 group-hover:bg-[#FF6B00]/20'
                }`} />

                <div>
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-md shadow-[#FF6B00]/10">
                      {getIconComponent(service.icon)}
                    </div>
                    <span className="text-xs font-bold text-gray-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                      {service.pricing}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#FF6B00] transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Includes List */}
                  <div className="space-y-3 mb-8 pt-4 border-t border-white/10">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">What's Included:</p>
                    <ul className="space-y-2.5">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-200">
                          <Check className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-gray-300 hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF6B00]" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForProposal(service.title)}
                    className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                      isPrimary
                        ? 'bg-gradient-to-r from-[#FF6B00] to-[#FF8800] text-white shadow-lg shadow-[#FF6B00]/30 hover:scale-102'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-[#0f172a] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-white/5 rounded-full border border-white/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/20 border border-[#FF6B00]/40 flex items-center justify-center">
                {getIconComponent(selectedService.icon)}
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">{selectedService.title}</h3>
                <p className="text-xs text-[#FF6B00] font-semibold">{selectedService.pricing}</p>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              {selectedService.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Service Scope & Deliverables</h4>
              <div className="grid gap-2">
                {selectedService.includes.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-200 bg-white/5 p-3 rounded-xl border border-white/10">
                    <Check className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-gray-400">Tailored solutions available for your business.</span>
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForProposal(title);
                }}
                className="w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF6B00] to-[#FF8800] rounded-xl shadow-lg shadow-[#FF6B00]/30 cursor-pointer"
              >
                Get Started with {selectedService.title}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
