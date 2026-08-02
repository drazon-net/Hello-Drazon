import React from 'react';
import { ArrowRight, CheckCircle2, Zap, Sparkles, Play, Cpu, Shield, Clock, Award } from 'lucide-react';
import { HERO_IMAGE_PATH, ARCHITECTURAL_BW_IMAGE_PATH } from '../data/agencyData';
import { DrazonLogo } from './DrazonLogo';

interface HeroSectionProps {
  onGetWebsite: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetWebsite }) => {
  return (
    <section id="hero-section" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-[#059669] shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-[#10B981] animate-ping" />
              <Zap className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Next-Gen Web Agency for Small Businesses & Startups</span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Build Your Digital Presence With{' '}
              <span className="text-emerald-gradient drop-shadow-sm">Drazon</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              We create fast, modern, mobile-friendly websites and premium UI/UX designs that help New Zealand businesses build a powerful online presence and turn visitors into customers.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 pt-1 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Affordable Flat Pricing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>7–12 Day Fast Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>Mobile First & SEO Optimized</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              {/* Primary CTA */}
              <button
                id="hero-get-website-cta"
                onClick={onGetWebsite}
                className="group flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#059669] hover:to-[#10B981] rounded-xl shadow-xl shadow-[#10B981]/25 hover:shadow-2xl hover:shadow-[#10B981]/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
              >
                <span>Get Your Website</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <a
                id="hero-view-work-cta"
                href="/services"
                className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-wider text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300"
              >
                <Play className="w-3.5 h-3.5 text-[#10B981] fill-[#10B981]" />
                <span>Explore Services</span>
              </a>
            </div>

            {/* Micro Stats Banner */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="text-2xl font-black text-slate-900">150+</p>
                <p className="text-xs text-slate-500 font-medium">Websites Launched</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#10B981]">99.4%</p>
                <p className="text-xs text-slate-500 font-medium">Satisfaction Rate</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">3.4x</p>
                <p className="text-xs text-slate-500 font-medium">Average Lead Growth</p>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Visual & Code Widget Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glowing Outline Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#10B981]/30 to-teal-400/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse-glow" />

              {/* Main Card Container */}
              <div className="relative rounded-2xl bg-white border border-slate-200 shadow-2xl p-2.5 overflow-hidden">
                
                {/* Visual Header Banner */}
                <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden group">
                  <img
                    src={HERO_IMAGE_PATH}
                    alt="Drazon 3D Web Engineering Showcase"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-90" />
                  
                  {/* Floating Overlay Badge 1 */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700 text-xs font-semibold text-white shadow-lg">
                    <DrazonLogo variant="icon-only" size="sm" />
                    <span>Drazon Engine v2.6</span>
                  </div>

                  {/* Floating Overlay Badge 2 */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#10B981]/20 flex items-center justify-center border border-[#10B981]/40">
                        <Zap className="w-5 h-5 text-[#10B981]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Lighthouse Performance</p>
                        <p className="text-[11px] text-emerald-400 font-medium">99/100 Speed Score</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-500/30 rounded-md">
                      OPTIMIZED
                    </span>
                  </div>
                </div>

                {/* Code Terminal Widget */}
                <div className="p-4 space-y-3 bg-slate-900 rounded-xl mt-2.5 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="ml-2 font-mono text-[11px] text-slate-400">drazon-build.ts</span>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] text-[#34D399] font-medium">
                      <Cpu className="w-3 h-3" />
                      AI Live Stack
                    </span>
                  </div>

                  <pre className="text-[11px] font-mono text-slate-300 leading-relaxed overflow-x-auto p-2 bg-slate-950 rounded-lg border border-slate-800">
                    <code>
                      <span className="text-purple-400">const</span> clientWebsite = <span className="text-emerald-400">drazonEngine</span>.<span className="text-blue-400">build</span>(&#123;<br />
                      &nbsp;&nbsp;theme: <span className="text-emerald-300">&apos;Emerald Minimal&apos;</span>,<br />
                      &nbsp;&nbsp;performance: <span className="text-emerald-300">&apos;Sub-Second&apos;</span>,<br />
                      &nbsp;&nbsp;seoScore: <span className="text-emerald-400">100</span>,<br />
                      &nbsp;&nbsp;aiAdvisor: <span className="text-purple-400">true</span><br />
                      &#125;);
                    </code>
                  </pre>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
