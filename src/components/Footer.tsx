import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenReservation?: () => void;
  onOpenCart?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation, onOpenCart }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="relative bg-[#05070c] text-stone-300 overflow-hidden pt-12 pb-16 border-t border-amber-500/20">
      
      {/* ── Giant Engraved Inline Watermark Typography (Matches Image 5: "QISSA" -> "LUQMA") ── */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 mb-12 sm:mb-16 select-none pointer-events-none">
        <svg
          viewBox="0 0 1200 240"
          className="w-full h-auto max-h-44 sm:max-h-64 mx-auto filter drop-shadow-[0_4px_25px_rgba(212,175,55,0.15)]"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="qissaGoldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#d8b868" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#b38f38" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#6e541b" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="strokeGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#eed082" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#9a771c" />
            </linearGradient>
          </defs>

          {/* Outer primary letterforms */}
          <text
            x="50%"
            y="78%"
            textAnchor="middle"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="210"
            fontWeight="400"
            letterSpacing="28"
            fill="url(#qissaGoldGrad)"
            stroke="url(#strokeGold)"
            strokeWidth="1.6"
            className="transition-all duration-700"
          >
            LUQMA
          </text>

          {/* Double-line inner engraved contour for authentic Qissa look */}
          <text
            x="50%"
            y="78%"
            textAnchor="middle"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="206"
            fontWeight="300"
            letterSpacing="28"
            fill="none"
            stroke="rgba(247, 223, 165, 0.45)"
            strokeWidth="0.8"
          >
            LUQMA
          </text>
        </svg>
      </div>

      {/* ── 4-Column Layout (Exact Match to Image 5) ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-amber-500/15 text-xs sm:text-sm">
          
          {/* Column 1: Brand Logo + Description + Newsletter (Image 5 Col 1) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo variant="compact" crestSize={38} />
            </div>

            <p className="text-stone-300 font-light text-xs sm:text-sm leading-relaxed max-w-sm">
              A Tale of Food — authentic Kashmiri Wazwan &amp; charcoal grills in the heart of Hadipora, Rafiabad.
            </p>

            {/* Newsletter Pill Input (Image 5) */}
            <form onSubmit={handleSubscribe} className="pt-2 max-w-xs">
              <div className="relative flex items-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Join the tale — your email"
                  className="w-full pl-4 pr-12 py-3 bg-[#0c0e14] border border-amber-500/35 rounded-full text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors shadow-inner"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 w-8 h-8 rounded-full bg-gold-gradient text-stone-950 flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-transform"
                >
                  {subscribed ? (
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  )}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 mt-2 pl-3">
                  Welcome to the tale! We look forward to hosting you.
                </p>
              )}
            </form>
          </div>

          {/* Column 2: EXPLORE (Image 5 Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-4">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#story" className="text-stone-300 hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#menu" className="text-stone-300 hover:text-white transition-colors">
                  The Menu
                </a>
              </li>
              <li>
                <a href="#rooftop" className="text-stone-300 hover:text-white transition-colors">
                  Rooftop Terrace
                </a>
              </li>
              <li>
                <a href="#events" className="text-stone-300 hover:text-white transition-colors">
                  Private Dining
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-stone-300 hover:text-white transition-colors">
                  Guest Reviews
                </a>
              </li>
              <li>
                <a href="#location" className="text-stone-300 hover:text-white transition-colors">
                  Visit &amp; Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: HOURS (Image 5 Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-4">
              HOURS
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between gap-4">
                <span className="text-stone-400">Mon – Thu</span>
                <span className="text-stone-200 font-mono">10:30 – 22:30</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-stone-400">Fri – Sat</span>
                <span className="text-stone-200 font-mono">10:30 – 23:00</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-stone-400">Sunday</span>
                <span className="text-stone-200 font-mono">10:30 – 23:00</span>
              </div>
              <p className="text-[11px] text-stone-500 pt-1 italic font-light">
                Open daily for Lunch, Afternoon Saffron Kahwa &amp; Rooftop Starlight Dinner.
              </p>
            </div>
          </div>

          {/* Column 4: CONTACT & FOLLOW (Image 5 Col 4) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-4">
              CONTACT &amp; FOLLOW
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <p className="text-stone-300 font-light leading-relaxed">
                Near GDC Hadipora, Baramulla–Handwara Highway, Rafiabad, J&amp;K 193301
              </p>
              <p>
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-stone-300 hover:text-white transition-colors">
                  {RESTAURANT_INFO.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="text-stone-400 hover:text-[#d4af37] transition-colors">
                  {RESTAURANT_INFO.email}
                </a>
              </p>
              <div className="pt-2 space-y-1.5">
                <button
                  onClick={onOpenReservation}
                  className="text-xs text-[#d4af37] hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wider font-cinzel"
                >
                  <span>Reserve a table</span>
                  <span>↗</span>
                </button>
                <button
                  onClick={onOpenCart}
                  className="text-xs text-[#d4af37] hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wider font-cinzel"
                >
                  <span>Order takeaway</span>
                  <span>↗</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* ── Magnificent Bottom Banner: "LUQMA-E-BARKAH" (Image 5 Footer Base) ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <div className="flex items-center gap-2">
            <span className="font-cinzel tracking-[0.25em] font-semibold text-[#f7dfa5]">
              LUQMA-E-BARKAH
            </span>
            <span className="text-stone-600">•</span>
            <span className="font-arabic text-amber-400 text-sm">لقمةِ برکت</span>
          </div>

          <p className="text-stone-400">
            © {new Date().getFullYear()} Luqma-e-Barkah. All rights reserved.
          </p>

          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-stone-400 hover:text-[#d4af37] transition-colors"
          >
            Baramulla–Handwara Highway Marker ↗
          </a>
        </div>

      </div>
    </footer>
  );
};
