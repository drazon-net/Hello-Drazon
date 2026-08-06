import React from 'react';
import { AbstractFlowingWaves } from './AbstractFlowingWaves';
import { ARCHITECTURAL_BW_IMAGE_PATH } from '../data/agencyData';

export const BackgroundAtmosphere: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0 bg-[#F9F0ED] transform-gpu">
      {/* 1. Base Architectural Graphic Texture */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply pointer-events-none">
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

      {/* 2. Soft Warm Ambient Lighting Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9F0ED]/90 via-[#F9F0ED]/75 to-[#F3EEEC]" />

      {/* 3. LIGHTWEIGHT MESH GRADIENT SPOTLIGHTS */}
      <div
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 15%, rgba(243, 90, 36, 0.12) 0%, rgba(216, 106, 67, 0.04) 35%, transparent 65%),
            radial-gradient(circle at 90% 10%, rgba(139, 14, 45, 0.08) 0%, rgba(243, 90, 36, 0.03) 30%, transparent 60%),
            radial-gradient(circle at 15% 55%, rgba(216, 106, 67, 0.08) 0%, rgba(91, 68, 61, 0.03) 40%, transparent 70%),
            radial-gradient(circle at 85% 65%, rgba(243, 90, 36, 0.09) 0%, rgba(139, 14, 45, 0.03) 35%, transparent 65%),
            radial-gradient(circle at 20% 90%, rgba(91, 68, 61, 0.08) 0%, rgba(243, 90, 36, 0.03) 40%, transparent 70%)
          `,
        }}
      />

      {/* 4. SWEEPING TRANSLUCENT WAVE RIBBONS */}
      <div className="absolute inset-0 w-full h-full">
        <AbstractFlowingWaves className="w-full h-full opacity-100" />
      </div>

      {/* 5. ARCHITECTURAL GEOMETRIC VECTOR ACCENTS */}
      <svg
        className="absolute top-12 right-12 w-[420px] h-[420px] opacity-15 text-[#F35A24]"
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
        className="absolute bottom-12 left-8 w-[360px] h-[360px] opacity-12 text-[#D86A43]"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 40 L300 190 M0 90 L300 240 M0 140 L300 290 M40 0 L190 300 M90 0 L240 300 M140 0 L290 300" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 6" />
      </svg>

      {/* 6. LIGHTWEIGHT FLOATING GLASS ACCENTS */}
      <div className="hidden lg:block absolute top-32 left-[10%] w-24 h-24 rounded-full border border-[#F35A24]/20 bg-white/70 shadow-sm">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#F35A24]/15 via-transparent to-[#D86A43]/10" />
      </div>

      <div className="hidden lg:block absolute top-[48%] right-[6%] w-36 h-18 rounded-3xl border border-[#D86A43]/20 bg-white/70 shadow-sm">
        <div className="w-full h-full rounded-3xl bg-gradient-to-tr from-[#8B0E2D]/12 via-transparent to-[#F35A24]/10" />
      </div>

      <div className="hidden lg:block absolute bottom-36 left-[12%] w-20 h-20 rounded-full border-2 border-[#F35A24]/20 bg-white/60 shadow-sm" />
    </div>
  );
};
