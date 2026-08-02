import React from 'react';
import { AbstractFlowingWaves } from './AbstractFlowingWaves';
import { ARCHITECTURAL_BW_IMAGE_PATH } from '../data/agencyData';

export const BackgroundAtmosphere: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0 bg-slate-50/90 transform-gpu">
      {/* 1. Base Architectural Graphic Texture */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-multiply pointer-events-none">
        <img
          src={ARCHITECTURAL_BW_IMAGE_PATH}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* 2. Soft Ambient Lighting Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/85" />

      {/* 3. LIGHTWEIGHT MESH GRADIENT SPOTLIGHTS (Pure CSS Radial Gradients - Zero Blur Filter Overhead) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 15%, rgba(16, 185, 129, 0.14) 0%, rgba(5, 150, 105, 0.05) 35%, transparent 65%),
            radial-gradient(circle at 90% 10%, rgba(6, 182, 212, 0.12) 0%, rgba(16, 185, 129, 0.04) 30%, transparent 60%),
            radial-gradient(circle at 15% 55%, rgba(52, 211, 153, 0.10) 0%, rgba(16, 185, 129, 0.03) 40%, transparent 70%),
            radial-gradient(circle at 85% 65%, rgba(6, 182, 212, 0.10) 0%, rgba(5, 150, 105, 0.03) 35%, transparent 65%),
            radial-gradient(circle at 20% 90%, rgba(5, 150, 105, 0.12) 0%, rgba(16, 185, 129, 0.04) 40%, transparent 70%)
          `,
        }}
      />

      {/* 4. SWEEPING TRANSLUCENT WAVE RIBBONS */}
      <div className="absolute inset-0 w-full h-full">
        <AbstractFlowingWaves className="w-full h-full opacity-100" />
      </div>

      {/* 5. ARCHITECTURAL GEOMETRIC VECTOR ACCENTS */}
      <svg
        className="absolute top-12 right-12 w-[420px] h-[420px] opacity-20 text-[#059669]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 6" />
        <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" />
        <circle cx="200" cy="200" r="70" stroke="currentColor" strokeWidth="1.8" />
        <line x1="10" y1="200" x2="390" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="200" y1="10" x2="200" y2="390" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </svg>

      <svg
        className="absolute bottom-12 left-8 w-[360px] h-[360px] opacity-15 text-[#10B981]"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 40 L300 190 M0 90 L300 240 M0 140 L300 290 M40 0 L190 300 M90 0 L240 300 M140 0 L290 300" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 6" />
      </svg>

      {/* 6. LIGHTWEIGHT FLOATING GLASS ACCENTS (Translucent gradients without heavy backdrop filter) */}
      <div className="hidden lg:block absolute top-32 left-[10%] w-24 h-24 rounded-full border border-emerald-500/20 bg-white/70 shadow-sm">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-400/15 via-transparent to-teal-400/10" />
      </div>

      <div className="hidden lg:block absolute top-[48%] right-[6%] w-36 h-18 rounded-3xl border border-teal-500/20 bg-white/70 shadow-sm">
        <div className="w-full h-full rounded-3xl bg-gradient-to-tr from-cyan-400/15 via-transparent to-emerald-400/10" />
      </div>

      <div className="hidden lg:block absolute bottom-36 left-[12%] w-20 h-20 rounded-full border-2 border-emerald-400/25 bg-white/60 shadow-sm" />
    </div>
  );
};
