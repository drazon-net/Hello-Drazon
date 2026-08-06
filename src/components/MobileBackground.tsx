import React from 'react';
import { ARCHITECTURAL_BW_IMAGE_PATH } from '../data/agencyData';

export const MobileBackground: React.FC = () => {
  return (
    <div className="block sm:hidden fixed inset-0 pointer-events-none overflow-hidden z-0 select-none bg-[#F9F0ED] transform-gpu">
      {/* 1. Base Architectural Texture */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply">
        <img
          src={ARCHITECTURAL_BW_IMAGE_PATH}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top filter grayscale contrast-125"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* 2. Soft Ambient Warm Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9F0ED]/90 via-[#F9F0ED]/75 to-[#F3EEEC]" />

      {/* 3. LIGHTWEIGHT CSS RADIAL SPOTLIGHTS */}
      <div
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          backgroundImage: `
            radial-gradient(circle at 80% 10%, rgba(243, 90, 36, 0.14) 0%, transparent 50%),
            radial-gradient(circle at 10% 30%, rgba(216, 106, 67, 0.10) 0%, transparent 50%),
            radial-gradient(circle at 85% 60%, rgba(139, 14, 45, 0.08) 0%, transparent 55%)
          `,
        }}
      />

      {/* 4. MOBILE ORGANIC WAVE RIBBONS */}
      <div className="absolute inset-0 w-full h-full">
        <svg
          className="w-full h-full opacity-80"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 375 812"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="mob-ribbon-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F35A24" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#D86A43" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#8B0E2D" stopOpacity="0.02" />
            </linearGradient>

            <linearGradient id="mob-ribbon-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B0E2D" stopOpacity="0.20" />
              <stop offset="60%" stopColor="#F35A24" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#5B443D" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          <g>
            <path
              d="M-50, -20 C140, 160 110, 360 -10, 520 C-80, 620 30, 730 200, 820 L-100, 850 Z"
              fill="url(#mob-ribbon-1)"
            />
            <path
              d="M200, -30 C310, 110 270, 310 400, 470 L420, -30 Z"
              fill="url(#mob-ribbon-2)"
            />
            <path
              d="M-30, 0 C160, 180 130, 380 10, 540 C-60, 640 50, 750 220, 830"
              stroke="#F35A24"
              strokeWidth="1.8"
              strokeOpacity="0.30"
              fill="none"
            />
            <path
              d="M180, -20 C290, 120 250, 320 380, 480"
              stroke="#D86A43"
              strokeWidth="1.5"
              strokeOpacity="0.25"
              fill="none"
            />
          </g>
        </svg>
      </div>

      {/* 5. GLASS SHAPES */}
      <div className="absolute top-20 right-4 w-20 h-20 rounded-full border border-[#F35A24]/20 bg-white/70 shadow-sm">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#F35A24]/15 to-[#D86A43]/10" />
      </div>

      <div className="absolute top-[44%] -left-6 w-28 h-14 rounded-2xl border border-[#D86A43]/20 bg-white/70 shadow-sm">
        <div className="w-full h-full rounded-2xl bg-gradient-to-r from-[#8B0E2D]/12 to-[#F35A24]/10" />
      </div>
    </div>
  );
};
