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
          {/* Main Translucent Emerald Wave Gradient */}
          <linearGradient id="wave-emerald-vivid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.45" />
            <stop offset="45%" stopColor="#059669" stopOpacity="0.30" />
            <stop offset="85%" stopColor="#34D399" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.02" />
          </linearGradient>

          {/* Secondary Cyan/Teal Ribbon Gradient */}
          <linearGradient id="wave-cyan-vivid" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.40" />
            <stop offset="50%" stopColor="#0284C7" stopOpacity="0.25" />
            <stop offset="85%" stopColor="#10B981" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#34D399" stopOpacity="0.0" />
          </linearGradient>

          {/* Accent Mint Ribbon Gradient */}
          <linearGradient id="wave-mint-vivid" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#34D399" stopOpacity="0.48" />
            <stop offset="40%" stopColor="#10B981" stopOpacity="0.28" />
            <stop offset="80%" stopColor="#06B6D4" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.0" />
          </linearGradient>

          {/* Soft Glow Gaussian Filter */}
          <filter id="ribbon-glow-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Group 1: Left Vertical Sweeping Waves (Inspired by reference image) */}
        <g filter="url(#ribbon-glow-filter)" className="opacity-95">
          {/* Broad Primary Sweeping Ribbon */}
          <path
            d="M-120,-60 C160,220 110,480 -30,730 C-110,840 -10,1000 180,1100 L-160,1150 Z"
            fill="url(#wave-emerald-vivid)"
          />

          {/* Flowing Secondary Cyan Ribbon */}
          <path
            d="M-60, -20 C240, 300 180, 580 40, 830 C-60, 980 80, 1140 340, 1240 L-120, 1250 Z"
            fill="url(#wave-cyan-vivid)"
          />

          {/* Fine Curved Vector Contour Lines Lapping Along Left Frame */}
          <path
            d="M-30,10 C200,250 150,540 20,780 C-50,910 100,1060 300,1140"
            stroke="#10B981"
            strokeWidth="2.5"
            strokeOpacity="0.5"
            fill="none"
          />
          <path
            d="M10,30 C240,280 190,570 60,810 C-10,940 140,1090 340,1170"
            stroke="#34D399"
            strokeWidth="1.8"
            strokeOpacity="0.45"
            fill="none"
          />
          <path
            d="M50,50 C270,310 220,600 100,840 C30,970 180,1120 380,1200"
            stroke="#06B6D4"
            strokeWidth="2"
            strokeOpacity="0.4"
            fill="none"
          />
          <path
            d="M90,70 C300,340 250,630 140,870 C70,1000 220,1150 420,1230"
            stroke="#0284C7"
            strokeWidth="1.5"
            strokeOpacity="0.35"
            fill="none"
          />
        </g>

        {/* Group 2: Bottom Flowing Ribbon Arc across full screen width */}
        <g filter="url(#ribbon-glow-filter)" className="opacity-90">
          {/* Broad Bottom Sweep Ribbon */}
          <path
            d="M-120,720 C280,640 700,800 1260,710 C1440,680 1560,760 1680,840 L1680,1080 L-120,1080 Z"
            fill="url(#wave-mint-vivid)"
          />

          {/* Bottom Accent Stroke Ribbons */}
          <path
            d="M-100,700 C300,620 720,780 1280,690 C1460,660 1580,740 1700,820"
            stroke="#10B981"
            strokeWidth="2.5"
            strokeOpacity="0.5"
            fill="none"
          />
          <path
            d="M-80,730 C320,650 740,810 1300,720 C1480,690 1600,770 1720,850"
            stroke="#34D399"
            strokeWidth="2"
            strokeOpacity="0.4"
            fill="none"
          />
          <path
            d="M-60,760 C340,680 760,840 1320,750 C1500,720 1620,800 1740,880"
            stroke="#06B6D4"
            strokeWidth="1.8"
            strokeOpacity="0.35"
            fill="none"
          />
        </g>

        {/* Group 3: Top Right Flowing Ribbon Accent */}
        <g filter="url(#ribbon-glow-filter)" className="opacity-85">
          <path
            d="M880,-120 C1060,90 1280,40 1480,170 C1580,220 1640,140 1700,-60 Z"
            fill="url(#wave-emerald-vivid)"
          />
          <path
            d="M900,-100 C1080,110 1300,60 1500,190"
            stroke="#10B981"
            strokeWidth="2.2"
            strokeOpacity="0.45"
            fill="none"
          />
          <path
            d="M930,-80 C1110,130 1330,80 1530,210"
            stroke="#34D399"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
};
