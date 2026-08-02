import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { AbstractFlowingWaves } from './AbstractFlowingWaves';
import { ARCHITECTURAL_BW_IMAGE_PATH } from '../data/agencyData';

export const BackgroundAtmosphere: React.FC = () => {
  const { scrollY } = useScroll();

  // Smooth spring physics for fluid 3D parallax scroll behavior
  const smoothY = useSpring(scrollY, { stiffness: 90, damping: 25, restDelta: 0.001 });

  // Multi-layered Parallax Transforms
  // Layer 1: Base architectural texture (slow distance depth)
  const yTexture = useTransform(smoothY, [0, 4000], [0, -140]);

  // Layer 2: Gradient Blobs (varying speeds & opposite directional shifts)
  const yBlobTopLeft = useTransform(smoothY, [0, 4000], [0, -280]);
  const yBlobTopRight = useTransform(smoothY, [0, 4000], [0, -180]);
  const yBlobCenterLeft = useTransform(smoothY, [0, 4000], [0, -360]);
  const yBlobCenterRight = useTransform(smoothY, [0, 4000], [0, -240]);
  const yBlobBottom = useTransform(smoothY, [0, 4000], [0, -450]);

  // Layer 3: Abstract Flowing Waves (mid-depth floating motion)
  const yWaves = useTransform(smoothY, [0, 4000], [0, -260]);
  const rotateWaves = useTransform(smoothY, [0, 4000], [0, 5]);

  // Layer 4: Geometric Vector Line Art & Rings (distinct rotational parallax)
  const yRings = useTransform(smoothY, [0, 4000], [0, -480]);
  const rotateRings = useTransform(smoothY, [0, 4000], [0, 75]);
  const yGrid = useTransform(smoothY, [0, 4000], [0, -340]);

  // Layer 5: Glassmorphic Floating Shapes (Foreground layer - fastest motion + rotational depth)
  const yGlassOrb = useTransform(smoothY, [0, 4000], [0, -620]);
  const rotateGlassOrb = useTransform(smoothY, [0, 4000], [0, 140]);

  const yGlassPill = useTransform(smoothY, [0, 4000], [0, -540]);
  const rotateGlassPill = useTransform(smoothY, [0, 4000], [12, -40]);

  const yGlassRing = useTransform(smoothY, [0, 4000], [0, -700]);
  const rotateGlassRing = useTransform(smoothY, [0, 4000], [-12, 50]);

  // Layer 6: Radial Light Flares
  const yFlares = useTransform(smoothY, [0, 4000], [0, -160]);

  return (
    <div className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0 bg-slate-50/80">
      {/* 1. Base Architectural Graphic Texture (Deepest Layer - Slowest) */}
      <motion.div
        style={{ y: yTexture }}
        className="absolute inset-0 opacity-[0.11] mix-blend-multiply pointer-events-none"
      >
        <img
          src={ARCHITECTURAL_BW_IMAGE_PATH}
          alt=""
          aria-hidden="true"
          className="w-full h-[120%] object-cover object-center filter grayscale contrast-150 scale-105"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* 2. Soft Ambient Lighting Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-transparent to-white/70" />

      {/* 3. PARALLAX MESH GRADIENT BLOBS */}
      {/* Top Left Giant Emerald Glow Spotlight */}
      <motion.div
        style={{ y: yBlobTopLeft }}
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#10B981]/30 via-[#059669]/20 to-transparent blur-[120px] animate-pulse-glow"
      />

      {/* Top Right Cyan-Teal Light Flare */}
      <motion.div
        style={{ y: yBlobTopRight }}
        className="absolute -top-20 -right-20 w-[650px] h-[650px] rounded-full bg-gradient-to-bl from-[#06B6D4]/25 via-[#10B981]/15 to-transparent blur-[130px]"
      />

      {/* Center Left Flowing Mint Aura */}
      <motion.div
        style={{ y: yBlobCenterLeft }}
        className="absolute top-1/3 -left-48 w-[750px] h-[750px] rounded-full bg-gradient-to-r from-[#34D399]/22 via-[#10B981]/18 to-transparent blur-[140px]"
      />

      {/* Center Right Cyan Orbit Spot */}
      <motion.div
        style={{ y: yBlobCenterRight }}
        className="absolute top-1/2 -right-40 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-l from-[#06B6D4]/22 via-[#059669]/15 to-transparent blur-[140px]"
      />

      {/* Bottom Left Emerald Mesh Base */}
      <motion.div
        style={{ y: yBlobBottom }}
        className="absolute -bottom-40 -left-32 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[#059669]/28 via-[#10B981]/18 to-transparent blur-[150px]"
      />

      {/* 4. SWEEPING TRANSLUCENT WAVE RIBBONS WITH PARALLAX */}
      <motion.div
        style={{ y: yWaves, rotate: rotateWaves }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <AbstractFlowingWaves className="w-full h-full opacity-100" />
      </motion.div>

      {/* 5. MODERN ARCHITECTURAL LINE ART & GEOMETRIC VECTOR ACCENTS */}
      {/* Concentric Architectural Rings */}
      <motion.svg
        style={{ y: yRings, rotate: rotateRings }}
        className="absolute top-16 right-12 w-[500px] h-[500px] opacity-25 text-[#059669]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="200" r="190" stroke="currentColor" strokeWidth="1.2" strokeDasharray="6 6" />
        <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" />
        <circle cx="200" cy="200" r="70" stroke="currentColor" strokeWidth="2" />
        <circle cx="200" cy="200" r="30" stroke="currentColor" strokeWidth="1" />
        <line x1="10" y1="200" x2="390" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="200" y1="10" x2="200" y2="390" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </motion.svg>

      {/* Isometric Perspective Grid Array */}
      <motion.svg
        style={{ y: yGrid }}
        className="absolute bottom-16 left-8 w-[420px] h-[420px] opacity-20 text-[#10B981]"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 40 L300 190 M0 90 L300 240 M0 140 L300 290 M40 0 L190 300 M90 0 L240 300 M140 0 L290 300" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 6" />
      </motion.svg>

      {/* 6. FOREGROUND GLASSMORPHIC FLOATING SHAPES (Fastest 3D Parallax Depth) */}
      {/* Top Left Floating Glass Disc */}
      <motion.div
        style={{ y: yGlassOrb, rotate: rotateGlassOrb }}
        className="hidden lg:block absolute top-36 left-[10%] w-28 h-28 rounded-full border border-emerald-500/30 bg-white/60 backdrop-blur-xl shadow-lg shadow-emerald-500/10"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-400/20 via-transparent to-teal-400/10" />
      </motion.div>

      {/* Middle Right Translucent Glass Pill */}
      <motion.div
        style={{ y: yGlassPill, rotate: rotateGlassPill }}
        className="hidden lg:block absolute top-[48%] right-[6%] w-40 h-20 rounded-3xl border border-teal-500/30 bg-white/50 backdrop-blur-xl shadow-xl shadow-teal-500/10"
      >
        <div className="w-full h-full rounded-3xl bg-gradient-to-tr from-cyan-400/20 via-transparent to-emerald-400/15" />
      </motion.div>

      {/* Bottom Left Glass Ring */}
      <motion.div
        style={{ y: yGlassRing, rotate: rotateGlassRing }}
        className="hidden lg:block absolute bottom-40 left-[12%] w-24 h-24 rounded-full border-2 border-emerald-400/35 bg-white/40 backdrop-blur-md shadow-md"
      />

      {/* 7. SOFT RADIAL LIGHT FLARES FOR DEPTH */}
      <motion.div
        style={{ y: yFlares }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-emerald-200/40 via-teal-100/25 to-transparent blur-[110px] rounded-full pointer-events-none"
      />
    </div>
  );
};
