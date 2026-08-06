import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, ShieldCheck, Code2, Palette, Target } from 'lucide-react';

interface AboutPageProps {
  onOpenProposal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenProposal }) => {
  return (
    <div className="py-24 sm:py-28 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#2563EB] uppercase tracking-wider">
          <Globe2 className="w-3.5 h-3.5 text-[#2563EB]" />
          <span>About Drazon</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111111] tracking-tight">
          Building Digital Presence For <span className="text-blue-gradient">Modern Businesses</span>
        </h1>
      </div>

      {/* Primary Statement Card */}
      <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-white border-2 border-[#2563EB] text-center shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB]">Our Core Mission</span>
          <blockquote className="text-lg sm:text-xl md:text-2xl font-bold text-[#111111] leading-relaxed">
            "Drazon is a digital agency focused on helping businesses build a strong online presence through professional website development, UI/UX design, and reliable website maintenance."
          </blockquote>
        </div>
      </div>

      {/* 4 Core Focus Pillars */}
      <div className="space-y-6 mb-16">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <h2 className="text-2xl font-black text-[#111111]">Our Core Commitments</h2>
          <p className="text-slate-600 text-xs sm:text-sm">Driven by quality, precision engineering, and business-focused visual design.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1: Professional Solutions */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-3 hover:border-blue-300 hover:shadow-md transition shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563EB]">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#111111]">Professional Solutions</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We deliver enterprise-grade code structures, responsive layouts across all screen sizes, and clean web architecture built for real-world business needs.
            </p>
          </div>

          {/* Pillar 2: Modern Design */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-3 hover:border-blue-300 hover:shadow-md transition shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563EB]">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#111111]">Modern Design</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our aesthetic direction combines sleek visual typography, balanced white space, and subtle modern accents to make your brand instantly memorable.
            </p>
          </div>

          {/* Pillar 3: Quality Service */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-3 hover:border-blue-300 hover:shadow-md transition shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563EB]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#111111]">Quality Service</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Transparent communication, guaranteed turnaround times, direct email support, and proactive monthly maintenance keep your site running smoothly.
            </p>
          </div>

          {/* Pillar 4: Business Growth */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-3 hover:border-blue-300 hover:shadow-md transition shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563EB]">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#111111]">Business Growth</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every website we craft acts as your 24/7 digital storefront, designed specifically to build trust, attract local inquiries, and increase sales conversions.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-xl font-bold text-[#111111]">Ready to take your business online?</h3>
          <p className="text-xs text-slate-600">Get in touch with us to start building your website or request an instant project proposal.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/contact"
            className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#2563EB] hover:bg-[#111111] rounded-full shadow-md transition cursor-pointer"
          >
            Contact Drazon
          </Link>
          <button
            onClick={onOpenProposal}
            className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#111111] bg-slate-100 hover:bg-slate-200 rounded-full border border-slate-200 transition cursor-pointer"
          >
            Get Proposal
          </button>
        </div>
      </div>
    </div>
  );
};
