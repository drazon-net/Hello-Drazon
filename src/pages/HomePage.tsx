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
        return <Code2 className="w-6 h-6 text-[#10B981]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#10B981]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#10B981]" />;
      default:
        return <Code2 className="w-6 h-6 text-[#10B981]" />;
    }
  };

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section */}
      <HeroSection onGetWebsite={onOpenProposal} />

      {/* 2. Brand Introduction Section */}
      <section className="py-12 relative border-y border-slate-200/80 bg-white/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#059669] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Next-Gen Web Agency</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Empowering Businesses With <span className="text-emerald-gradient">High-Impact Websites</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At Drazon, we combine modern visual aesthetics, rapid performance engineering, and reliable digital maintenance to help your brand establish an authority online presence. From custom web platforms to interface design, we deliver solutions engineered for growth.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                  <Clock className="w-4 h-4 text-[#10B981]" />
                  <span>5-10 Day Turnaround</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                  <Shield className="w-4 h-4 text-[#10B981]" />
                  <span>Transparent NZD Pricing</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                  <Award className="w-4 h-4 text-[#10B981]" />
                  <span>Quality Guarantee</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl bg-white p-6 border border-slate-200 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Launch Agency</span>
                  <span className="text-xs font-extrabold text-[#059669] bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">Drazon Official</span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#10B981]" />
                    <span>Custom Website Development (NZ$699)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#10B981]" />
                    <span>Professional UI/UX Design (NZ$299)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#10B981]" />
                    <span>Ongoing Website Maintenance (NZ$199/mo)</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/about"
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 border border-slate-200 transition"
                  >
                    <span>Read About Drazon</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#10B981]" />
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#059669] uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Official Launch Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Core <span className="text-emerald-gradient">Capabilities</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore our primary digital launch services built specifically for modern business growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  service.isPrimary
                    ? 'bg-white border-2 border-[#10B981] shadow-xl shadow-[#10B981]/15 bg-gradient-to-b from-emerald-50/50 via-white to-white'
                    : 'bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {service.isPrimary && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#10B981] text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Primary Service</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                      {getIconComponent(service.icon)}
                    </div>
                    <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                      {service.pricing}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.includes.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/services"
                  className="w-full py-2.5 px-4 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-[#10B981] hover:text-white rounded-xl border border-slate-200 transition flex items-center justify-center gap-1.5 cursor-pointer"
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
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#10B981] to-[#059669] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#10B981]/20 hover:scale-102 transition cursor-pointer"
            >
              Explore All Services
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider border border-slate-200 transition cursor-pointer"
            >
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Pricing Overview Section */}
      <section className="py-12 relative border-t border-slate-200/80 bg-white/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-[#059669] uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Transparent Investment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Official Flat-Rate <span className="text-emerald-gradient">Pricing</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Clear NZD rates with zero hidden fees. Built to fit businesses of all sizes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between bg-white border border-slate-200 shadow-sm relative ${
                  plan.isPrimary ? 'border-2 border-[#10B981] shadow-lg shadow-[#10B981]/10' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-black text-slate-900">{plan.name}</h3>
                    {plan.isPrimary && (
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 bg-emerald-100 text-[#059669] rounded-md border border-emerald-200">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 mb-4">{plan.description}</p>
                  <p className="text-3xl font-black text-slate-900 mb-6">{plan.priceDisplay}</p>

                  <ul className="space-y-2 mb-6">
                    {plan.includes.slice(0, 4).map((inc, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#10B981] rounded-xl shadow-md transition cursor-pointer text-center"
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
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready To Launch?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Let's Build Your Business Website Today
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Get an instant proposal generated by AI or contact our team directly for a custom scope consultation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenProposal}
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#10B981] hover:bg-[#059669] rounded-xl shadow-lg shadow-[#10B981]/25 transition cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Instant Proposal</span>
            </button>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#10B981]" />
              <span>Contact Drazon</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

