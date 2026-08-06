import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/HeroSection';
import { SERVICES_DATA, PRICING_PLANS } from '../data/agencyData';
import { Code2, Palette, ShieldCheck, ArrowRight, Sparkles, Zap, Star, Check, Shield, Clock, Award, Mail } from 'lucide-react';

interface HomePageProps {
  onOpenProposal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenProposal }) => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#2563EB]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#2563EB]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#2563EB]" />;
      default:
        return <Code2 className="w-6 h-6 text-[#2563EB]" />;
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section */}
      <HeroSection onGetWebsite={onOpenProposal} />

      {/* 2. Brand Introduction Section */}
      <section className="py-12 relative border-y border-slate-200 bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#2563EB] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Next-Gen Web Agency</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111111] tracking-tight leading-tight">
                Empowering Businesses With <span className="text-blue-gradient">High-Impact Websites</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At Drazon, we combine modern visual aesthetics, rapid performance engineering, and reliable digital maintenance to help your brand establish an authority online presence. From custom web platforms to interface design, we deliver solutions engineered for growth.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
                  <Clock className="w-4 h-4 text-[#2563EB]" />
                  <span>5-10 Day Turnaround</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
                  <Shield className="w-4 h-4 text-[#2563EB]" />
                  <span>Transparent NZD Pricing</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
                  <Award className="w-4 h-4 text-[#2563EB]" />
                  <span>Quality Guarantee</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl bg-white p-6 border border-slate-200 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Launch Agency</span>
                  <span className="text-xs font-extrabold text-[#2563EB] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">Drazon Official</span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#2563EB]" />
                    <span>Custom Website Development (NZ$699)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#2563EB]" />
                    <span>Professional UI/UX Design (NZ$299)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#2563EB]" />
                    <span>Ongoing Website Maintenance (NZ$199/mo)</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/about"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#111111] text-xs font-bold flex items-center justify-center gap-2 border border-slate-200 transition"
                  >
                    <span>Read About Drazon</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Services Overview Section */}
      <section className="py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#2563EB] uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Official Launch Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
              Our Core <span className="text-blue-gradient">Capabilities</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore our primary digital launch services built specifically for modern business growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  service.isPrimary
                    ? 'bg-white border-2 border-[#2563EB] shadow-xl'
                    : 'bg-white border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {service.isPrimary && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#2563EB] text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Primary Service</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center">
                      {getIconComponent(service.icon)}
                    </div>
                    <span className="text-xs font-bold text-[#111111] bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                      {service.pricing}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#111111] mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.includes.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/services"
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#111111] hover:bg-[#2563EB] rounded-full transition flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>View Full Service Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom Action CTAs */}
          <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/services"
              className="px-6 py-3.5 rounded-full bg-[#2563EB] hover:bg-[#111111] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition cursor-pointer"
            >
              Explore All Services
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#111111] text-xs font-bold uppercase tracking-wider border border-slate-200 transition cursor-pointer"
            >
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Pricing Overview Section */}
      <section className="py-12 relative border-t border-slate-200 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#2563EB] uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Transparent Investment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
              Official Flat-Rate <span className="text-blue-gradient">Pricing</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Clear NZD rates with zero hidden fees. Built to fit businesses of all sizes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between bg-white border border-slate-200 shadow-xs relative ${
                  plan.isPrimary ? 'border-2 border-[#2563EB] shadow-lg' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-black text-[#111111]">{plan.name}</h3>
                    {plan.isPrimary && (
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 bg-blue-50 text-[#2563EB] rounded-md border border-blue-200">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mb-4">{plan.description}</p>
                  <p className="text-3xl font-black text-[#111111] mb-6">{plan.priceDisplay}</p>

                  <ul className="space-y-2 mb-6">
                    {plan.includes.slice(0, 4).map((inc, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#111111] rounded-full transition cursor-pointer text-center shadow-xs"
                >
                  Select Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#111111] text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-[#2563EB] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Ready To Launch?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Let's Build Your Business Website Today
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Get an instant proposal generated by AI or contact our team directly for a custom scope consultation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenProposal}
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-full shadow-md transition cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Instant Proposal</span>
            </button>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#2563EB]" />
              <span>Contact Drazon</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};


