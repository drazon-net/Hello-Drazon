import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Play, Shield, Cpu, Layers, Layout, MousePointer, Smartphone, Globe } from 'lucide-react';
import { DrazonLogo } from './DrazonLogo';

interface HeroSectionProps {
  onGetWebsite: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetWebsite }) => {
  return (
    <section id="hero-section" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Copy & CTAs - Max width 700px for breathing room */}
          <div className="lg:col-span-7 space-y-8 text-left max-w-[700px]">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#E2E8F0] text-xs font-bold text-[#1D4ED8] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <span>Premium Digital Agency & Web Architecture</span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] tracking-[-0.03em] leading-[1.05]">
              Websites That Build Trust.{' '}
              <span className="text-[#1D4ED8] block sm:inline">
                Drive Growth.
              </span>
            </h1>

            {/* Short Paragraph Describing Drazon */}
            <p className="text-base sm:text-lg text-[#475569] font-normal leading-relaxed max-w-xl">
              Drazon is a premier digital design and web development agency. We engineer ultra-fast, high-converting websites and bespoke UI/UX experiences crafted to scale your business and outshine competition.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-8 text-xs text-[#475569] font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" />
                <span>Bespoke UI/UX Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" />
                <span>Sub-Second Performance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" />
                <span>Guaranteed Growth Results</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-2">
              {/* Primary CTA */}
              <button
                id="hero-start-project-cta"
                onClick={onGetWebsite}
                className="btn-primary group"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <a
                id="hero-view-work-cta"
                href="#portfolio"
                className="btn-secondary"
              >
                <Play className="w-3.5 h-3.5 text-[#1D4ED8] fill-[#1D4ED8]" />
                <span>View Our Work</span>
              </a>
            </div>

            {/* Micro Stats Banner */}
            <div className="pt-8 border-t border-[#E2E8F0] grid grid-cols-3 gap-6 max-w-lg">
              <div className="space-y-1">
                <p className="text-3xl font-extrabold text-[#1D4ED8]">150+</p>
                <p className="text-xs text-[#475569] font-medium">Digital Assets Delivered</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-extrabold text-[#1D4ED8]">99.8%</p>
                <p className="text-xs text-[#475569] font-medium">Client Satisfaction</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-extrabold text-[#1D4ED8]">3.8x</p>
                <p className="text-xs text-[#475569] font-medium">Avg Conversion Lift</p>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Website Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle Frame */}
              <div className="absolute -inset-2 rounded-3xl bg-white/60 border border-[#E2E8F0] shadow-xs pointer-events-none" />

              {/* Desktop Browser Canvas */}
              <div className="relative rounded-[18px] bg-white border border-[#E2E8F0] shadow-[0_10px_35px_rgba(15,23,42,0.06)] p-4 overflow-hidden">
                
                {/* Browser Safari-style Top Chrome Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E2E8F0]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#F8FAFC] text-[10px] font-mono text-[#475569] flex items-center gap-1.5">
                    <Globe className="w-3 h-3 text-[#1D4ED8]" />
                    <span>drazon.cc.cd</span>
                  </div>
                  <div className="w-10" />
                </div>

                {/* Simulated High-End Website Hero Canvas */}
                <div className="bg-[#F8FAFC] rounded-xl p-4 space-y-4 border border-[#E2E8F0]">
                  <div className="flex items-center justify-between">
                    <DrazonLogo size="sm" />
                    <div className="flex gap-2">
                      <span className="w-10 h-2 rounded-full bg-slate-200" />
                      <span className="w-10 h-2 rounded-full bg-slate-200" />
                      <span className="px-2.5 py-0.5 bg-[#1D4ED8] text-white text-[9px] font-bold rounded-full">CTA</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="h-5 w-3/4 rounded-md bg-[#0F172A]" />
                    <div className="h-3 w-1/2 rounded-md bg-[#1D4ED8]/30" />
                    <div className="h-2 w-5/6 rounded-md bg-slate-200" />
                  </div>

                  {/* Micro Visual Card Grid inside Mockup */}
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <div className="p-2.5 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5 shadow-xs">
                      <div className="w-5 h-5 rounded-md bg-blue-50 text-[#1D4ED8] flex items-center justify-center">
                        <Layout className="w-3 h-3" />
                      </div>
                      <div className="h-1.5 w-8 bg-slate-200 rounded" />
                      <div className="h-1 w-12 bg-slate-100 rounded" />
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5 shadow-xs">
                      <div className="w-5 h-5 rounded-md bg-blue-50 text-[#1D4ED8] flex items-center justify-center">
                        <Smartphone className="w-3 h-3" />
                      </div>
                      <div className="h-1.5 w-8 bg-slate-200 rounded" />
                      <div className="h-1 w-12 bg-slate-100 rounded" />
                    </div>

                    <div className="p-2.5 rounded-xl bg-white border border-[#E2E8F0] space-y-1.5 shadow-xs">
                      <div className="w-5 h-5 rounded-md bg-blue-50 text-[#1D4ED8] flex items-center justify-center">
                        <Cpu className="w-3 h-3" />
                      </div>
                      <div className="h-1.5 w-8 bg-slate-200 rounded" />
                      <div className="h-1 w-12 bg-slate-100 rounded" />
                    </div>
                  </div>
                </div>

                {/* Code Terminal Output Layer */}
                <div className="mt-3 p-2.5 rounded-xl bg-[#0F172A] text-white text-[11px] font-mono flex items-center justify-between border border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
                    <span className="text-slate-300">drazonEngine.compile()</span>
                  </div>
                  <span className="text-[#22C55E] font-bold">100% WCAG AA</span>
                </div>

              </div>

              {/* Clean Floating Badge 1 */}
              <div className="absolute -bottom-4 -left-4 p-3.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-lg flex items-center gap-3 z-20">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1D4ED8] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-black text-[#0F172A]">Lighthouse 100/100</p>
                  <p className="text-[11px] text-[#1D4ED8] font-bold">Sub-Second Load Time</p>
                </div>
              </div>

              {/* Clean Floating Badge 2 */}
              <div className="absolute -top-4 -right-4 p-3 rounded-2xl bg-white border border-[#E2E8F0] shadow-lg flex items-center gap-2.5 z-20">
                <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-[#1D4ED8]">
                  <MousePointer className="w-3.5 h-3.5" />
                </div>
                <div className="pr-1">
                  <p className="text-[11px] font-bold text-[#0F172A]">Precision UI/UX</p>
                  <p className="text-[10px] text-[#475569]">Fluid Motion Engine</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
