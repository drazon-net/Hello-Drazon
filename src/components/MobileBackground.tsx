import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ARCHITECTURAL_BW_IMAGE_PATH } from '../data/agencyData';

export const MobileBackground: React.FC = () => {
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, { stiffness: 90, damping: 25, restDelta: 0.001 });

  const yBlobTop = useTransform(smoothY, [0, 3000], [0, -180]);
  const yBlobMid = useTransform(smoothY, [0, 3000], [0, -260]);
  const yBlobBottom = useTransform(smoothY, [0, 3000], [0, -380]);

  const yWaves = useTransform(smoothY, [0, 3000], [0, -220]);

  const yGlassOrb = useTransform(smoothY, [0, 3000], [0, -420]);
  const rotateGlassOrb = useTransform(smoothY, [0, 3000], [0, 90]);

  const yGlassPill = useTransform(smoothY, [0, 3000], [0, -350]);
  const rotateGlassPill = useTransform(smoothY, [0, 3000], [6, -24]);

  return (
    <div className="block sm:hidden fixed inset-0 pointer-events-none overflow-hidden z-0 select-none bg-slate-50/80">
      {/* 1. Base Subtle Architectural Texture */}
      <div className="absolute inset-0 opacity-[0.10] mix-blend-multiply">
        <img
          src={ARCHITECTURAL_BW_IMAGE_PATH}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top filter grayscale contrast-150 scale-110"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* 2. Soft Ambient White Vignette for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/85" />

      {/* 3. DEDICATED LARGE BLURRED EMERALD & TEAL GRADIENT CIRCLES */}
      <motion.div style={{ y: yBlobTop, willChange: 'transform' }} className="absolute -top-20 -right-20 w-88 h-88 rounded-full bg-gradient-to-br from-[#10B981]/30 via-[#059669]/20 to-transparent blur-[50px]" />
      <motion.div style={{ y: yBlobMid, willChange: 'transform' }} className="absolute top-1/4 -left-28 w-92 h-92 rounded-full bg-gradient-to-tr from-[#06B6D4]/25 via-[#10B981]/15 to-transparent blur-[60px]" />
      <motion.div style={{ y: yBlobBottom, willChange: 'transform' }} className="absolute top-1/2 -right-28 w-[380px] h-[380px] rounded-full bg-gradient-to-bl from-[#059669]/22 via-[#34D399]/14 to-transparent blur-[60px]" />

      {/* 4. SOFT RADIAL LIGHTING FLARES */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[360px] h-[220px] bg-emerald-200/50 blur-[60px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[360px] h-[220px] bg-cyan-200/40 blur-[70px] rounded-full" />

      {/* 5. MOBILE ORGANIC FLOWING WAVE RIBBONS SVG */}
      <motion.div style={{ y: yWaves }} className="absolute inset-0 w-full h-[120%]">
        <svg
          className="w-full h-full opacity-85"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 375 812"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="mob-ribbon-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#059669" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0.08" />
            </linearGradient>

            <linearGradient id="mob-ribbon-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.40" />
              <stop offset="60%" stopColor="#10B981" stopOpacity="0.20" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.0" />
            </linearGradient>

            <filter id="mob-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <g filter="url(#mob-glow)">
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
              strokeOpacity="0.5"
              fill="none"
            />
            <path
              d="M0, 15 C180, 195 150, 395 30, 555 C-40, 655 70, 765 240, 845"
              stroke="#34D399"
              strokeWidth="1.5"
              strokeOpacity="0.45"
              fill="none"
            />
            <path
              d="M180, -20 C290, 120 250, 320 380, 480"
              stroke="#06B6D4"
              strokeWidth="1.8"
              strokeOpacity="0.4"
              fill="none"
            />
          </g>
        </svg>
      </motion.div>

      {/* 6. GLASSMORPHIC FLOATING TRANSLUCENT GEOMETRIC SHAPES */}
      <motion.div
        style={{ y: yGlassOrb, rotate: rotateGlassOrb }}
        className="absolute top-24 right-4 w-28 h-28 rounded-full border border-emerald-500/30 bg-white/60 backdrop-blur-xl shadow-md"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-400/20 to-teal-400/10" />
      </motion.div>

      <motion.div
        style={{ y: yGlassPill, rotate: rotateGlassPill }}
        className="absolute top-[44%] -left-6 w-36 h-18 rounded-2xl border border-teal-500/30 bg-white/60 backdrop-blur-xl shadow-md"
      >
        <div className="w-full h-full rounded-2xl bg-gradient-to-r from-cyan-400/20 to-emerald-400/15" />
      </motion.div>
    </div>
  );
};
