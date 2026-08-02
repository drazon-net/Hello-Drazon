import React from 'react';
import { ARCHITECTURAL_BW_IMAGE_PATH } from '../data/agencyData';

export const MobileBackground: React.FC = () => {
  return (
    <div className="block sm:hidden fixed inset-0 pointer-events-none overflow-hidden z-0 select-none bg-slate-50/90 transform-gpu">
      {/* 1. Base Architectural Texture */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-multiply">
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

      {/* 2. Soft Ambient White Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/85" />

      {/* 3. LIGHTWEIGHT CSS RADIAL SPOTLIGHTS */}
      <div
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          backgroundImage: `
            radial-gradient(circle at 80% 10%, rgba(16, 185, 129, 0.16) 0%, transparent 50%),
            radial-gradient(circle at 10% 30%, rgba(6, 182, 212, 0.12) 0%, transparent 50%),
            radial-gradient(circle at 85% 60%, rgba(5, 150, 105, 0.14) 0%, transparent 55%)
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
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.40" />
              <stop offset="50%" stopColor="#059669" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
            </linearGradient>

            <linearGradient id="mob-ribbon-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.35" />
              <stop offset="60%" stopColor="#10B981" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.0" />
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
              stroke="#10B981"
              strokeWidth="2"
              strokeOpacity="0.45"
              fill="none"
            />
            <path
              d="M180, -20 C290, 120 250, 320 380, 480"
              stroke="#06B6D4"
              strokeWidth="1.5"
              strokeOpacity="0.35"
              fill="none"
            />
          </g>
        </svg>
      </div>

      {/* 5. GLASS SHAPES */}
      <div className="absolute top-20 right-4 w-20 h-20 rounded-full border border-emerald-500/20 bg-white/70 shadow-sm">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-400/15 to-teal-400/10" />
      </div>

      <div className="absolute top-[44%] -left-6 w-28 h-14 rounded-2xl border border-teal-500/20 bg-white/70 shadow-sm">
        <div className="w-full h-full rounded-2xl bg-gradient-to-r from-cyan-400/15 to-emerald-400/10" />
      </div>
    </div>
  );
};
