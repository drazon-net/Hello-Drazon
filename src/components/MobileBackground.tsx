import React from 'react';

export const MobileBackground: React.FC = () => {
  return (
    <div className="block sm:hidden fixed inset-0 pointer-events-none overflow-hidden z-0 select-none bg-[#F9F0ED] transform-gpu">
      {/* 1. Ultra-Minimal Soft Noise Texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.025] mix-blend-overlay pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="mob-noise-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#mob-noise-filter)" />
      </svg>

      {/* 2. Soft Warm Ambient Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9F0ED] via-[#F9F0ED]/95 to-[#F3EEEC]" />

      {/* 3. Subtle Light Glass Panel (4% opacity) */}
      <div className="absolute top-8 left-4 right-4 h-[480px] rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-[#5B443D]/5 shadow-xs" />
    </div>
  );
};

