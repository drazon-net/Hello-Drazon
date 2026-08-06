import React, { useEffect, useState } from 'react';
import { SUNSET_SKY_IMAGE_PATH } from '../data/agencyData';

// High-res realistic sunset photo backup URL for robust fallback
const REALISTIC_SUNSET_FALLBACK = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop';

export const BackgroundAtmosphere: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate subtle parallax offsets
  const parallaxOffsetSky = Math.min(scrollY * 0.1, 140);
  const parallaxOffsetClouds = Math.min(scrollY * 0.05, 80);

  return (
    <div className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0 bg-[#0f1424] transform-gpu">
      
      {/* 1. Base Gradient Sky Layer (Deep blue top -> lavender pink -> warm orange/gold bottom) */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#121c3b] via-[#3a2042] via-60% to-[#f37335]"
      />

      {/* 2. Realistic Sunset Sky Image Layer with Gentle Parallax */}
      <div 
        className="absolute -top-[10%] left-0 right-0 h-[130%] transition-transform duration-75 ease-out will-change-transform"
        style={{
          transform: `translate3d(0, ${parallaxOffsetSky}px, 0)`,
        }}
      >
        <img
          src={SUNSET_SKY_IMAGE_PATH}
          onError={(e) => {
            // Fallback to high-res Unsplash realistic sunset photo if local path ever fails
            e.currentTarget.src = REALISTIC_SUNSET_FALLBACK;
          }}
          alt="Realistic Sunset Sky"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-top contrast-[1.12] brightness-[0.92] saturate-[0.90] scale-105"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* 3. Horizon Warmth & Depth Layer */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-screen transition-transform duration-100 ease-out will-change-transform"
        style={{
          transform: `translate3d(0, ${parallaxOffsetClouds}px, 0)`,
          backgroundImage: `
            radial-gradient(circle at 50% 88%, rgba(251, 146, 60, 0.45) 0%, rgba(225, 29, 72, 0.18) 35%, transparent 70%),
            radial-gradient(circle at 80% 40%, rgba(99, 102, 241, 0.25) 0%, transparent 60%),
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.2) 0%, transparent 55%)
          `
        }}
      />

      {/* 4. Dark Overlay rgba(15,23,42,.35) for cinematic depth & WCAG text contrast */}
      <div className="absolute inset-0 bg-[#0F172A]/35" />

      {/* 5. Subtle Light Blend Overlay for Seamless Page Flow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-white/20 to-white/50 mix-blend-normal" />

      {/* 6. Ultra-Minimal Organic Noise Texture */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.02] mix-blend-overlay pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="sunset-noise-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#sunset-noise-filter)" />
      </svg>
    </div>
  );
};
