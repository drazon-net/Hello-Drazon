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
        return <Code2 className="w-6 h-6 text-[#1D4ED8]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#1D4ED8]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#1D4ED8]" />;
      default:
        return <Code2 className="w-6 h-6 text-[#1D4ED8]" />;
    }
  };

  return (
    <section id="services" className="py-28 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-xs font-bold text-[#1D4ED8] uppercase tracking-wider shadow-xs">
            <Zap className="w-3.5 h-3.5 text-[#1D4ED8]" />
            <span>Official Launch Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Tailored Digital Solutions For{' '}
            <span className="text-blue-gradient">Your Business</span>
          </h2>
          <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
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
                className={`relative rounded-[18px] p-8 flex flex-col justify-between transition-all duration-300 group overflow-hidden bg-white border border-[#E2E8F0] shadow-[0_10px_35px_rgba(15,23,42,0.06)] hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)] ${
                  isPrimary ? 'border-2 border-[#1D4ED8]' : ''
                }`}
              >
                {/* Primary Badge */}
                {isPrimary && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#1D4ED8] text-white text-[10px] font-extrabold uppercase tracking-widest shadow-xs flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Featured</span>
                  </div>
                )}

                <div>
                  {/* Header Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-xs">
                      {getIconComponent(service.icon)}
                    </div>
                    <span className="text-xs font-bold text-[#475569] bg-[#F8FAFC] px-3.5 py-1.5 rounded-full border border-[#E2E8F0]">
                      {service.pricing}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#475569] text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Includes List */}
                  <div className="space-y-3 mb-8 pt-4 border-t border-[#E2E8F0]">
                    <p className="text-xs font-extrabold text-[#0F172A] uppercase tracking-wider">What's Included:</p>
                    <ul className="space-y-2.5">
                      {service.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#0F172A] font-medium">
                          <Check className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-[#E2E8F0] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-[#475569] hover:text-[#1D4ED8] flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#1D4ED8]" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForProposal(service.title)}
                    className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 bg-gradient-to-r from-[#1D4ED8] to-[#2563EB] hover:from-[#1E40AF] hover:to-[#1D4ED8] text-white shadow-xs"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white border border-[#E2E8F0] rounded-[20px] p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-[#475569] hover:text-[#0F172A] bg-[#F8FAFC] rounded-full border border-[#E2E8F0] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                {getIconComponent(selectedService.icon)}
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#0F172A]">{selectedService.title}</h3>
                <p className="text-xs text-[#1D4ED8] font-bold">{selectedService.pricing}</p>
              </div>
            </div>

            <p className="text-[#475569] text-sm leading-relaxed">
              {selectedService.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-extrabold text-[#0F172A] uppercase tracking-wider">Service Scope & Deliverables</h4>
              <div className="grid gap-2">
                {selectedService.includes.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-[#0F172A] font-medium bg-[#F8FAFC] p-3 rounded-2xl border border-[#E2E8F0]">
                    <Check className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#475569]">Tailored solutions available for your business.</span>
              <button
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForProposal(title);
                }}
                className="btn-primary w-full sm:w-auto"
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
