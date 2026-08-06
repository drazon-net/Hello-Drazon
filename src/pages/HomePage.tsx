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
    <div className="space-y-16 pb-16">
      {/* 1. Hero Section */}
      <HeroSection onGetWebsite={onOpenProposal} />

      {/* 2. Brand Introduction Section */}
      <section className="py-12 relative border-y border-[#5B443D]/10 bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F0ED] border border-[#5B443D]/10 text-xs font-bold text-[#8B0E2D] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#F35A24]" />
                <span>Next-Gen Web Agency</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111111] tracking-tight leading-tight">
                Empowering Businesses With <span className="text-[#F35A24]">High-Impact Websites</span>
              </h2>

              <p className="text-[#4A4A4A] text-sm sm:text-base leading-relaxed">
                At Drazon, we combine modern visual aesthetics, rapid performance engineering, and reliable digital maintenance to help your brand establish an authority online presence. From custom web platforms to interface design, we deliver solutions engineered for growth.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#5B443D]">
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-[#5B443D]/15 shadow-xs">
                  <Clock className="w-4 h-4 text-[#F35A24]" />
                  <span>5-10 Day Turnaround</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-[#5B443D]/15 shadow-xs">
                  <Shield className="w-4 h-4 text-[#F35A24]" />
                  <span>Transparent NZD Pricing</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-[#5B443D]/15 shadow-xs">
                  <Award className="w-4 h-4 text-[#F35A24]" />
                  <span>Quality Guarantee</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl bg-white p-6 border border-[#5B443D]/15 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-[#5B443D]/10 pb-4">
                  <span className="text-xs font-bold text-[#5B443D] uppercase tracking-wider">Launch Agency</span>
                  <span className="text-xs font-extrabold text-[#8B0E2D] bg-[#F9F0ED] px-2.5 py-1 rounded-md border border-[#5B443D]/10">Drazon Official</span>
                </div>

                <div className="space-y-2.5 text-xs text-[#4A4A4A] font-medium">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#F35A24]" />
                    <span>Custom Website Development (NZ$699)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#F35A24]" />
                    <span>Professional UI/UX Design (NZ$299)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#F35A24]" />
                    <span>Ongoing Website Maintenance (NZ$199/mo)</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to="/about"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#F3EEEC] hover:bg-[#F9F0ED] text-[#111111] text-xs font-bold flex items-center justify-center gap-2 border border-[#5B443D]/15 transition"
                  >
                    <span>Read About Drazon</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F35A24]" />
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F0ED] border border-[#5B443D]/10 text-xs font-bold text-[#8B0E2D] uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-[#F35A24]" />
              <span>Official Launch Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
              Our Core <span className="text-[#F35A24]">Capabilities</span>
            </h2>
            <p className="text-[#4A4A4A] text-sm sm:text-base">
              Explore our primary digital launch services built specifically for modern business growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  service.isPrimary
                    ? 'bg-white border-2 border-[#F35A24] shadow-xl shadow-[#F35A24]/10 bg-gradient-to-b from-[#F9F0ED]/50 via-white to-white'
                    : 'bg-white border border-[#5B443D]/15 shadow-xs hover:border-[#5B443D]/30 hover:shadow-md'
                }`}
              >
                {service.isPrimary && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#F35A24] text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Primary Service</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F9F0ED] border border-[#5B443D]/10 flex items-center justify-center">
                      {getIconComponent(service.icon)}
                    </div>
                    <span className="text-xs font-bold text-[#111111] bg-[#F3EEEC] px-2.5 py-1 rounded-full border border-[#5B443D]/15">
                      {service.pricing}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#111111] mb-2">{service.title}</h3>
                  <p className="text-[#4A4A4A] text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.includes.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#4A4A4A] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#F35A24] shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/services"
                  className="w-full py-2.5 px-4 text-xs font-bold text-[#111111] bg-[#F3EEEC] hover:bg-[#F35A24] hover:text-white rounded-xl border border-[#5B443D]/15 transition flex items-center justify-center gap-1.5 cursor-pointer"
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
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#F35A24] to-[#D86A43] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition cursor-pointer"
            >
              Explore All Services
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-full bg-white hover:bg-[#F3EEEC] text-[#111111] text-xs font-bold uppercase tracking-wider border border-[#5B443D]/20 transition cursor-pointer"
            >
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Pricing Overview Section */}
      <section className="py-12 relative border-t border-[#5B443D]/10 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F0ED] border border-[#5B443D]/10 text-xs font-bold text-[#8B0E2D] uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-[#F35A24]" />
              <span>Transparent Investment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
              Official Flat-Rate <span className="text-[#F35A24]">Pricing</span>
            </h2>
            <p className="text-[#4A4A4A] text-sm sm:text-base">
              Clear NZD rates with zero hidden fees. Built to fit businesses of all sizes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between bg-white border border-[#5B443D]/15 shadow-xs relative ${
                  plan.isPrimary ? 'border-2 border-[#F35A24] shadow-md shadow-[#F35A24]/10' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-black text-[#111111]">{plan.name}</h3>
                    {plan.isPrimary && (
                      <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 bg-[#F9F0ED] text-[#8B0E2D] rounded-md border border-[#5B443D]/10">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#5B443D] mb-4">{plan.description}</p>
                  <p className="text-3xl font-black text-[#111111] mb-6">{plan.priceDisplay}</p>

                  <ul className="space-y-2 mb-6">
                    {plan.includes.slice(0, 4).map((inc, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#4A4A4A] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#F35A24] shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-gradient-to-r from-[#F35A24] to-[#D86A43] hover:shadow-md rounded-full transition cursor-pointer text-center"
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
        <div className="p-8 sm:p-12 rounded-3xl bg-[#111111] text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-[#5B443D]/30">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-[#F35A24] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#F35A24]" />
              <span>Ready To Launch?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Let's Build Your Business Website Today
            </h2>
            <p className="text-[#F3EEEC]/80 text-xs sm:text-sm leading-relaxed">
              Get an instant proposal generated by AI or contact our team directly for a custom scope consultation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
            <button
              onClick={onOpenProposal}
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#F35A24] to-[#D86A43] hover:shadow-lg rounded-full shadow-md transition cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Instant Proposal</span>
            </button>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#F35A24]" />
              <span>Contact Drazon</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};


