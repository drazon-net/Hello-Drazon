import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Play, Shield, Cpu, Layers, Layout, MousePointer, Smartphone, Globe } from 'lucide-react';
import { DrazonLogo } from './DrazonLogo';

interface HeroSectionProps {
  onGetWebsite: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetWebsite }) => {
  return (
    <section id="hero-section" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#5B443D]/15 text-xs font-bold text-[#8B0E2D] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#F35A24]" />
              <span>Premium Digital Agency & Web Architecture</span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#111111] leading-[1.12]">
              Websites That Build Trust.{' '}
              <span className="text-[#F35A24] block sm:inline">
                Experiences That Drive Growth.
              </span>
            </h1>

            {/* Short Paragraph Describing Drazon */}
            <p className="text-base sm:text-lg text-[#4A4A4A] font-normal leading-relaxed max-w-2xl">
              Drazon is a premier digital design and web development agency. We engineer ultra-fast, high-converting websites and bespoke UI/UX experiences crafted to scale your business and outshine competition.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs text-[#5B443D] pt-1 font-semibold">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F35A24]" />
                <span>Bespoke UI/UX Engineering</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F35A24]" />
                <span>Sub-Second Performance</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F35A24]" />
                <span>Guaranteed Growth Results</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              {/* Primary CTA */}
              <button
                id="hero-start-project-cta"
                onClick={onGetWebsite}
                className="group flex items-center justify-center gap-3 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#F35A24] to-[#D86A43] hover:shadow-xl rounded-full shadow-md shadow-[#F35A24]/15 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <a
                id="hero-view-work-cta"
                href="#portfolio"
                className="flex items-center justify-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#111111] bg-white hover:bg-[#F3EEEC] rounded-full border border-[#5B443D]/20 shadow-xs transition-all duration-300"
              >
                <Play className="w-3.5 h-3.5 text-[#F35A24] fill-[#F35A24]" />
                <span>View Our Work</span>
              </a>
            </div>

            {/* Micro Stats Banner */}
            <div className="pt-6 border-t border-[#5B443D]/10 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="text-2xl font-black text-[#111111]">150+</p>
                <p className="text-xs text-[#5B443D] font-medium">Digital Assets Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#F35A24]">99.8%</p>
                <p className="text-xs text-[#4A4A4A] font-medium">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#111111]">3.8x</p>
                <p className="text-xs text-[#4A4A4A] font-medium">Avg Conversion Lift</p>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Website Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-white/50 border border-[#5B443D]/10 shadow-xs pointer-events-none" />

              {/* Desktop Browser Canvas */}
              <div className="relative rounded-2xl bg-white border border-[#5B443D]/15 shadow-xl p-4 overflow-hidden">
                
                {/* Browser Safari-style Top Chrome Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#5B443D]/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#5B443D]/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#5B443D]/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#5B443D]/30" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#F3EEEC] text-[10px] font-mono text-[#5B443D] flex items-center gap-1.5">
                    <Globe className="w-3 h-3 text-[#F35A24]" />
                    <span>drazon.cc.cd</span>
                  </div>
                  <div className="w-10" />
                </div>

                {/* Simulated High-End Website Hero Canvas */}
                <div className="bg-[#F9F0ED] rounded-xl p-4 space-y-4 border border-[#5B443D]/5">
                  <div className="flex items-center justify-between">
                    <DrazonLogo size="sm" />
                    <div className="flex gap-2">
                      <span className="w-10 h-2 rounded-full bg-[#5B443D]/20" />
                      <span className="w-10 h-2 rounded-full bg-[#5B443D]/20" />
                      <span className="px-2 py-0.5 bg-[#F35A24] text-white text-[9px] font-bold rounded-full">CTA</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="h-5 w-3/4 rounded-md bg-[#111111]" />
                    <div className="h-3 w-1/2 rounded-md bg-[#F35A24]/30" />
                    <div className="h-2 w-5/6 rounded-md bg-[#5B443D]/15" />
                  </div>

                  {/* Micro Visual Card Grid inside Mockup */}
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <div className="p-2.5 rounded-xl bg-white border border-[#5B443D]/10 space-y-1.5 shadow-xs">
                      <div className="w-5 h-5 rounded-md bg-[#F35A24]/10 text-[#F35A24] flex items-center justify-center">
                        <Layout className="w-3 h-3" />
                      </div>
                      <div className="h-1.5 w-8 bg-[#5B443D]/20 rounded" />
                      <div className="h-1 w-12 bg-[#5B443D]/10 rounded" />
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-[#5B443D]/10 space-y-1.5 shadow-xs">
                      <div className="w-5 h-5 rounded-md bg-[#8B0E2D]/10 text-[#8B0E2D] flex items-center justify-center">
                        <Smartphone className="w-3 h-3" />
                      </div>
                      <div className="h-1.5 w-8 bg-[#5B443D]/20 rounded" />
                      <div className="h-1 w-12 bg-[#5B443D]/10 rounded" />
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-[#5B443D]/10 space-y-1.5 shadow-xs">
                      <div className="w-5 h-5 rounded-md bg-[#D86A43]/10 text-[#D86A43] flex items-center justify-center">
                        <Cpu className="w-3 h-3" />
                      </div>
                      <div className="h-1.5 w-8 bg-[#5B443D]/20 rounded" />
                      <div className="h-1 w-12 bg-[#5B443D]/10 rounded" />
                    </div>
                  </div>
                </div>

                {/* Code Terminal Output Layer */}
                <div className="mt-3 p-2.5 rounded-xl bg-[#111111] text-white text-[11px] font-mono flex items-center justify-between border border-[#5B443D]/30">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F35A24]" />
                    <span className="text-slate-300">drazonEngine.compile()</span>
                  </div>
                  <span className="text-[#F35A24] font-bold">100% WCAG AA</span>
                </div>

              </div>

              {/* Clean Floating Badge 1 */}
              <div className="absolute -bottom-4 -left-4 p-3.5 rounded-2xl bg-white border border-[#5B443D]/15 shadow-lg flex items-center gap-3 z-20">
                <div className="w-9 h-9 rounded-xl bg-[#F9F0ED] border border-[#5B443D]/10 flex items-center justify-center text-[#F35A24] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-black text-[#111111]">Lighthouse 100/100</p>
                  <p className="text-[11px] text-[#F35A24] font-bold">Sub-Second Load Time</p>
                </div>
              </div>

              {/* Clean Floating Badge 2 */}
              <div className="absolute -top-4 -right-4 p-3 rounded-2xl bg-white border border-[#5B443D]/15 shadow-lg flex items-center gap-2.5 z-20">
                <div className="w-7 h-7 rounded-lg bg-[#F3EEEC] flex items-center justify-center text-[#F35A24]">
                  <MousePointer className="w-3.5 h-3.5" />
                </div>
                <div className="pr-1">
                  <p className="text-[11px] font-bold text-[#111111]">Precision UI/UX</p>
                  <p className="text-[10px] text-[#5B443D]">Fluid Motion Engine</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
