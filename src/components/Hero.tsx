import React, { useState, useEffect } from 'react';

interface HeroProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
  onOpenCart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  const scrollDown = () => {
    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── Background video ── */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/luqma-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setLoaded(true)}
      />

      {/* ── Layered dark overlays for cinematic depth ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      {/* ── Ambient gold glow at bottom ── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-amber-600/10 blur-3xl pointer-events-none" />

      {/* ── Hero content ── */}
      <div
        className={`relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto pt-24 transition-all duration-1000 ease-out ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Eyebrow label */}
        <div
          className="flex items-center justify-center gap-3 mb-6"
          style={{ transitionDelay: '200ms' }}
        >
          <span className="h-px w-10 bg-[#d4af37]/60" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#d4af37] font-medium font-cinzel">
            A Blessing in Every Bite
          </span>
          <span className="h-px w-10 bg-[#d4af37]/60" />
        </div>

        {/* Main title */}
        <h1
          className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal text-white leading-[1.05] mb-6"
          style={{ textShadow: '0 4px 40px rgba(0,0,0,0.6)' }}
        >
          Luqma-e-Barkah
        </h1>

        {/* Urdu script */}
        <p className="font-arabic text-2xl text-amber-300/90 mb-6 tracking-wider">
          لقمةِ برکت
        </p>

        {/* Description */}
        <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto mb-10" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
          Celebrating authentic Kashmiri Wazwan, valley-spiced charcoal grills,
          and North Kashmir's premier open-sky rooftop dining in Hadipora, Rafiabad.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreMenu}
            className="text-sm tracking-[0.2em] uppercase text-stone-200 hover:text-white underline-offset-4 hover:underline transition-all font-medium"
          >
            View Menu
          </button>
          <button
            onClick={onOpenReservation}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold-gradient text-stone-950 text-sm font-bold uppercase tracking-widest shadow-2xl shadow-amber-500/25 hover:opacity-90 active:scale-95 transition-all"
          >
            Reserve a Table
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer transition-all duration-1000 delay-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={scrollDown}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400">Begin the Story</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#d4af37]/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
};
