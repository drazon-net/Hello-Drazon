import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/agencyData';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const active = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-28 relative bg-slate-900/40 backdrop-blur-sm border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-[#FF6B00] uppercase tracking-wider">
            <Quote className="w-3.5 h-3.5" />
            <span>Client Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Trusted By Business Owners <span className="text-orange-gradient">Worldwide</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Hear how Drazon helped local restaurants, gym founders, real estate brokers, and startups transform their online conversions.
          </p>
        </div>

        {/* Featured Testimonial Spotlight Card */}
        <div className="glass-card rounded-2xl p-8 sm:p-12 border border-white/10 max-w-4xl mx-auto relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-[#FF6B00] pointer-events-none">
            <Quote className="w-32 h-32" />
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Avatar & Client Info */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-3">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#FF6B00] shadow-lg shadow-[#FF6B00]/20">
                <img
                  src={active.avatarUrl}
                  alt={active.clientName}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">{active.clientName}</h3>
                <p className="text-xs text-[#FF6B00] font-semibold">{active.role}</p>
                <p className="text-xs text-gray-400">{active.company}</p>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-xs font-bold text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Result: {active.impactMetric}</span>
              </div>
            </div>

            {/* Testimonial Quote & Navigation Controls */}
            <div className="md:col-span-8 space-y-6">
              
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(active.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400" />
                ))}
              </div>

              <p className="text-lg sm:text-xl font-medium text-gray-100 leading-relaxed italic">
                &ldquo;{active.quote}&rdquo;
              </p>

              {/* Slider Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex gap-1">
                  {TESTIMONIALS_DATA.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        currentIndex === idx ? 'w-6 bg-[#FF6B00]' : 'w-2 bg-white/20'
                      }`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition cursor-pointer"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={nextTestimonial}
                    className="p-2 text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition cursor-pointer"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
