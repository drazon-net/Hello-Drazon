import React from 'react';

export const BackgroundAtmosphere: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0 bg-[#F9F0ED] transform-gpu">
      {/* 1. Ultra-Minimal Soft Noise Texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.025] mix-blend-overlay pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="subtle-noise-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#subtle-noise-filter)" />
      </svg>

      {/* 2. Soft Warm Blur Layer for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9F0ED] via-[#F9F0ED]/95 to-[#F3EEEC]" />

      {/* 3. Subtle Light Frosted Glass Panels (3-8% opacity) */}
      <div className="absolute top-12 left-[8%] right-[8%] h-[600px] rounded-[3rem] bg-white/[0.04] backdrop-blur-2xl border border-[#5B443D]/5 shadow-[0_10px_40px_rgba(91,68,61,0.02)]" />
      <div className="absolute top-[650px] left-[5%] right-[5%] h-[800px] rounded-[3.5rem] bg-white/[0.03] backdrop-blur-xl border border-[#5B443D]/5 shadow-[0_8px_30px_rgba(91,68,61,0.015)]" />
    </div>
  );
};

