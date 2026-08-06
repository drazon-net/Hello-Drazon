import React from 'react';
import { SUNSET_SKY_IMAGE_PATH } from '../data/agencyData';

const REALISTIC_SUNSET_FALLBACK = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop';

export const MobileBackground: React.FC = () => {
  return (
    <div className="block sm:hidden fixed inset-0 pointer-events-none overflow-hidden z-0 select-none bg-[#0f1424] transform-gpu">
      {/* 1. Base Gradient Sky Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121c3b] via-[#3a2042] via-60% to-[#f37335]" />

      {/* 2. Realistic Sunset Sky Image Layer */}
      <div className="absolute inset-0">
        <img
          src={SUNSET_SKY_IMAGE_PATH}
          onError={(e) => {
            e.currentTarget.src = REALISTIC_SUNSET_FALLBACK;
          }}
          alt="Sunset Sky Mobile"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-top contrast-[0.96] brightness-[0.90]"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* 3. Dark Transparent Overlay (18%) */}
      <div className="absolute inset-0 bg-black/18" />

      {/* 4. Gentle Light Blend Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-white/20 to-white/50" />

      {/* 5. Minimal Noise */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.02] mix-blend-overlay pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="mob-sunset-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#mob-sunset-noise)" />
      </svg>
    </div>
  );
};
