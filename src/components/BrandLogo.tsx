import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'horizontal' | 'crest' | 'header' | 'compact';
  className?: string;
  crestSize?: number;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  className = '',
  crestSize = 42,
}) => {
  // Radiating golden spoons & spice grains motif inspired by Qissa's iconic sunburst crest
  const SpoonsSunburst = ({ size = 48 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff4d0" />
          <stop offset="35%" stopColor="#e5c158" />
          <stop offset="70%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#9a7b1c" />
        </linearGradient>
        <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fcedbe" />
          <stop offset="100%" stopColor="#c5a028" />
        </linearGradient>
      </defs>

      {/* Central ring arc */}
      <circle cx="50" cy="50" r="14" stroke="url(#goldGrad)" strokeWidth="2.5" fill="none" />
      <circle cx="50" cy="50" r="7" fill="url(#goldGrad)" opacity="0.9" />

      {/* Radiating decorative spoons & floral spice petals (16 rays in arc) */}
      {[
        { angle: -150, len: 38, headW: 5.5, headH: 9 },
        { angle: -130, len: 44, headW: 6.5, headH: 10 },
        { angle: -110, len: 40, headW: 5.8, headH: 9.5 },
        { angle: -90,  len: 46, headW: 7,   headH: 11 },
        { angle: -70,  len: 42, headW: 6,   headH: 9.5 },
        { angle: -50,  len: 45, headW: 6.8, headH: 10.5 },
        { angle: -30,  len: 39, headW: 5.5, headH: 9 },
        { angle: -10,  len: 43, headW: 6.2, headH: 10 },
        { angle: 10,   len: 41, headW: 6,   headH: 9.5 },
        { angle: 30,   len: 44, headW: 6.6, headH: 10 },
        { angle: 50,   len: 38, headW: 5.4, headH: 8.5 },
        { angle: 70,   len: 42, headW: 6,   headH: 9.5 },
        { angle: 90,   len: 45, headW: 6.8, headH: 10.5 },
        { angle: 110,  len: 39, headW: 5.6, headH: 9 },
        { angle: 130,  len: 42, headW: 6.2, headH: 10 },
        { angle: 150,  len: 37, headW: 5.2, headH: 8.5 },
      ].map((ray, i) => {
        const rad = (ray.angle * Math.PI) / 180;
        const stemX = 50 + Math.cos(rad) * 16;
        const stemY = 50 + Math.sin(rad) * 16;
        const tipX = 50 + Math.cos(rad) * ray.len;
        const tipY = 50 + Math.sin(rad) * ray.len;

        return (
          <g key={i}>
            {/* Spoon handle / stem */}
            <line
              x1={stemX}
              y1={stemY}
              x2={tipX}
              y2={tipY}
              stroke="url(#goldGrad)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Spoon oval bowl / spice grain bulb */}
            <ellipse
              cx={tipX}
              cy={tipY}
              rx={ray.headW / 2}
              ry={ray.headH / 2}
              transform={`rotate(${ray.angle + 90} ${tipX} ${tipY})`}
              fill="url(#glowGrad)"
            />
          </g>
        );
      })}

      {/* Tiny jewel dots between rays */}
      {[-140, -120, -100, -80, -60, -40, -20, 0, 20, 40, 60, 80, 100, 120, 140].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const dotX = 50 + Math.cos(rad) * 26;
        const dotY = 50 + Math.sin(rad) * 26;
        return (
          <circle
            key={i}
            cx={dotX}
            cy={dotY}
            r="1.6"
            fill="url(#goldGrad)"
          />
        );
      })}
    </svg>
  );

  // 1. Crest only (for avatars, markers, badges)
  if (variant === 'crest') {
    return (
      <div className={`relative inline-flex items-center justify-center ${className}`}>
        <SpoonsSunburst size={crestSize} />
      </div>
    );
  }

  // 1b. Compact column logo (Matches Column 1 of Image 5)
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3.5 ${className}`}>
        <div className="relative flex-shrink-0">
          <SpoonsSunburst size={crestSize} />
        </div>
        <div className="flex flex-col">
          <span className="font-serif text-2xl font-normal tracking-[0.2em] text-[#f7e3af] uppercase leading-none">
            LUQMA
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-cinzel mt-1">
            A Tale of Food
          </span>
        </div>
      </div>
    );
  }

  // 2. Header layout (compact horizontal)
  if (variant === 'header') {
    return (
      <div className={`flex items-center gap-3 group ${className}`}>
        <div className="relative flex-shrink-0">
          <SpoonsSunburst size={crestSize} />
        </div>
        <div className="flex flex-col text-left">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.18em] text-[#f7e3af] group-hover:text-white transition-colors">
              LUQMA
            </span>
            <span className="font-arabic text-[#e5c158] text-xs opacity-90 hidden sm:inline">
              لقمةِ برکت
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-[0.28em] text-[#d4af37]/80 font-cinzel -mt-0.5">
            E-BARKAH • ROOFTOP
          </span>
        </div>
      </div>
    );
  }

  // 3. Full luxury showcase logo (like Qissa logo in Image 2)
  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        {/* Radiating sunburst emblem */}
        <div className="relative mb-2">
          <SpoonsSunburst size={crestSize * 1.6} />
        </div>

        {/* Brand name */}
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-[0.22em] text-[#f7dfa5] uppercase">
          LUQMA-E-BARKAH
        </h2>

        {/* Tagline script */}
        <p className="font-serif italic text-xs sm:text-sm text-[#d4af37] tracking-widest mt-1">
          A Tale of Kashmiri Flavors
        </p>

        {/* Urdu Calligraphy */}
        <p className="font-arabic text-[#e5c158] text-base sm:text-lg mt-0.5">
          لقمةِ برکت
        </p>
      </div>
    );
  }

  // Default Horizontal
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <SpoonsSunburst size={crestSize} />
      <div className="flex flex-col">
        <span className="font-serif text-xl sm:text-2xl font-normal tracking-[0.2em] text-[#f7e3af] uppercase">
          LUQMA
        </span>
        <span className="text-[10px] uppercase tracking-[0.28em] text-[#d4af37] font-cinzel -mt-1">
          A Blessing in Every Bite
        </span>
      </div>
    </div>
  );
};
