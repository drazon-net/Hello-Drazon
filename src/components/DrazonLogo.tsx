import React from 'react';
import { DRAZON_OFFICIAL_LOGO_PATH, DRAZON_FAVICON_PATH } from '../data/agencyData';

interface DrazonLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon-only' | 'text-only' | 'image-full';
  showTagline?: boolean;
  lightMode?: boolean;
}

export const DrazonLogo: React.FC<DrazonLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
  showTagline = false,
  lightMode = true,
}) => {
  // Size dimensions for scaling
  const dimensions = {
    sm: { height: 'h-8', iconSize: 'w-7 h-7', text: 'text-base', tagline: 'text-[9px]' },
    md: { height: 'h-10', iconSize: 'w-9 h-9', text: 'text-xl', tagline: 'text-[10px]' },
    lg: { height: 'h-12', iconSize: 'w-11 h-11', text: 'text-2xl', tagline: 'text-xs' },
    xl: { height: 'h-16', iconSize: 'w-14 h-14', text: 'text-3xl', tagline: 'text-sm' },
  }[size];

  // Official Logo Image Mark
  const OfficialImageMark = (
    <img
      src={DRAZON_FAVICON_PATH}
      alt="DRAZON.NET Official Logo Mark"
      className={`${dimensions.iconSize} object-contain shrink-0 drop-shadow-[0_2px_12px_rgba(16,185,129,0.35)] transition-transform duration-300 hover:scale-105 rounded-xl`}
      referrerPolicy="no-referrer"
    />
  );

  // SVG Dragon Icon (Exact Vector Replica of Official Dragon Emblem updated with Emerald Accents)
  const DragonIcon = (
    <svg
      viewBox="0 0 100 100"
      className={`${dimensions.iconSize} inline-block shrink-0 drop-shadow-[0_2px_10px_rgba(16,185,129,0.35)] transition-transform duration-300 hover:scale-105`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-emerald-grad-official" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      
      {/* Outer White Border / Sticker Background */}
      <path
        d="M 72 45 C 80 44, 85 47, 86 52 C 83 55, 78 57, 72 57 C 63 65, 57 73, 62 83 C 54 85, 45 80, 40 73 C 33 63, 33 50, 40 40 C 34 38, 30 33, 32 28 C 38 31, 44 34, 48 37 C 43 32, 38 25, 40 20 C 48 24, 57 29, 65 37 C 70 41, 71 44, 72 45 Z"
        fill="#FFFFFF"
        stroke="#E2E8F0"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Vibrant Emerald Curved Inner Stripe */}
      <path
        d="M 39 42 C 32 52, 32 65, 43 75 C 48 79, 53 81, 58 81 C 52 79, 46 76, 42 71 C 36 63, 36 52, 43 43 Z"
        fill="url(#logo-emerald-grad-official)"
      />

      {/* Dragon Head Silhouette (Slate-900) */}
      <path
        d="M 72 45 C 80 44, 84 48, 85 52 C 82 55, 77 56, 71 56 C 61 63, 56 71, 61 82 C 54 83, 46 78, 42 72 C 36 62, 37 50, 44 41 C 39 39, 34 34, 35 29 C 41 32, 46 35, 50 38 C 45 33, 41 27, 43 21 C 50 25, 58 30, 65 37 C 70 41, 71 44, 72 45 Z"
        fill="#0F172A"
      />

      {/* Slanted Eye */}
      <polygon points="68,43 74,45 69,47" fill="#34D399" />
    </svg>
  );

  // Official Full Brand Image
  if (variant === 'image-full') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <img
          src={DRAZON_OFFICIAL_LOGO_PATH}
          alt="DRAZON.NET Official Brand Logo"
          className={`${dimensions.height} object-contain rounded-lg transition-all duration-300 hover:brightness-105 drop-shadow-sm`}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Typography component matching exact brand proportions
  const TextComponent = (
    <div className="flex flex-col justify-center leading-none select-none">
      <div className={`${dimensions.text} font-black tracking-wider text-slate-900 flex items-center`}>
        <span>DRAZON</span>
        <span className="text-[#10B981] ml-0.5 font-extrabold">.NET</span>
      </div>
      {showTagline && (
        <span className={`${dimensions.tagline} text-slate-500 font-mono tracking-widest uppercase mt-0.5`}>
          Digital Agency
        </span>
      )}
    </div>
  );

  if (variant === 'icon-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {DragonIcon}
      </div>
    );
  }

  if (variant === 'text-only') {
    return <div className={`inline-flex items-center ${className}`}>{TextComponent}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {DragonIcon}
      {TextComponent}
    </div>
  );
};
