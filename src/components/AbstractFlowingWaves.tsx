import React from 'react';

interface AbstractFlowingWavesProps {
  className?: string;
}

export const AbstractFlowingWaves: React.FC<AbstractFlowingWavesProps> = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin slice"
      >
        <defs>
          {/* Main Translucent Royal Blue Wave Gradient */}
          <linearGradient id="wave-terracotta-vivid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.10" />
            <stop offset="85%" stopColor="#1D4ED8" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.0" />
          </linearGradient>

          {/* Secondary Ribbon Gradient */}
          <linearGradient id="wave-crimson-vivid" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
          </linearGradient>

          {/* Soft Ribbon Gradient */}
          <linearGradient id="wave-mocha-vivid" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
            <stop offset="40%" stopColor="#2563EB" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Group 1: Left Vertical Sweeping Waves */}
        <g className="opacity-90">
          {/* Broad Primary Sweeping Ribbon */}
          <path
            d="M-120,-60 C160,220 110,480 -30,730 C-110,840 -10,1000 180,1100 L-160,1150 Z"
            fill="url(#wave-terracotta-vivid)"
          />

          {/* Flowing Secondary Ribbon */}
          <path
            d="M-60, -20 C240, 300 180, 580 40, 830 C-60, 980 80, 1140 340, 1240 L-120, 1250 Z"
            fill="url(#wave-crimson-vivid)"
          />

          {/* Fine Curved Vector Contour Lines */}
          <path
            d="M-30,10 C200,250 150,540 20,780 C-50,910 100,1060 300,1140"
            stroke="#2563EB"
            strokeWidth="1.8"
            strokeOpacity="0.30"
            fill="none"
          />
          <path
            d="M10,30 C240,280 190,570 60,810 C-10,940 140,1090 340,1170"
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeOpacity="0.25"
            fill="none"
          />
          <path
            d="M50,50 C270,310 220,600 100,840 C30,970 180,1120 380,1200"
            stroke="#1D4ED8"
            strokeWidth="1.2"
            strokeOpacity="0.20"
            fill="none"
          />
        </g>

        {/* Group 2: Bottom Flowing Ribbon Arc */}
        <g className="opacity-85">
          <path
            d="M-120,720 C280,640 700,800 1260,710 C1440,680 1560,760 1680,840 L1680,1080 L-120,1080 Z"
            fill="url(#wave-mocha-vivid)"
          />

          <path
            d="M-100,700 C300,620 720,780 1280,690 C1460,660 1580,740 1700,820"
            stroke="#2563EB"
            strokeWidth="1.8"
            strokeOpacity="0.25"
            fill="none"
          />
          <path
            d="M-80,730 C320,650 740,810 1300,720 C1480,690 1600,770 1720,850"
            stroke="#3B82F6"
            strokeWidth="1.2"
            strokeOpacity="0.20"
            fill="none"
          />
        </g>

        {/* Group 3: Top Right Flowing Ribbon Accent */}
        <g className="opacity-80">
          <path
            d="M880,-120 C1060,90 1280,40 1480,170 C1580,220 1640,140 1700,-60 Z"
            fill="url(#wave-terracotta-vivid)"
          />
          <path
            d="M900,-100 C1080,110 1300,60 1500,190"
            stroke="#2563EB"
            strokeWidth="1.8"
            strokeOpacity="0.25"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
};
