import React, { useState, useCallback, useEffect } from 'react';
import { ShoppingBag, Calendar } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

const NAV_LINKS = [
  { index: '00', name: 'Home',           href: '#'         },
  { index: '01', name: 'Our Story',      href: '#story'    },
  { index: '02', name: 'The Menu',       href: '#menu'     },
  { index: '03', name: 'Rooftop Terrace',href: '#rooftop'  },
  { index: '04', name: 'Private Events', href: '#events'   },
  { index: '05', name: 'Reviews',        href: '#reviews'  },
  { index: '06', name: 'Find Us',        href: '#location' },
];

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOpenReservation }) => {
  const [isScrolled, setIsScrolled]   = useState(false);
  const [isMounted,  setIsMounted]    = useState(false);
  const [isOpen,     setIsOpen]       = useState(false);

  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMounted ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMounted]);

  const openMenu = useCallback(() => {
    setIsMounted(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setIsOpen(true)));
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setTimeout(() => setIsMounted(false), 650);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();
    const delay = href === '#' ? 0 : 400;
    setTimeout(() => {
      if (href === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, delay);
  };

  return (
    <>
      {/* ── TOP NAVBAR WITH ALL SECTION LINKS PRESENT ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          isScrolled
            ? 'bg-[#07090e]/95 backdrop-blur-md shadow-2xl border-b border-amber-500/20 py-2 sm:py-3'
            : 'bg-gradient-to-b from-[#07090e]/90 via-[#07090e]/40 to-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

          {/* LEFT – Brand Logo with Radiating Golden Sunburst */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center group flex-shrink-0"
          >
            <BrandLogo variant="header" crestSize={38} />
          </a>

          {/* CENTER – Top Navigation Bar With All Sections Present */}
          <nav className="hidden xl:flex items-center space-x-6 2xl:space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[11px] 2xl:text-xs tracking-[0.2em] uppercase font-medium text-stone-300 hover:text-[#d4af37] transition-all relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#d4af37] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* RIGHT – MENU OVERLAY TRIGGER + ORDER + RESERVE */}
          <div className="flex items-center justify-end gap-2.5 sm:gap-3 flex-shrink-0">
            {/* Menu overlay trigger */}
            <button
              onClick={openMenu}
              aria-label="Open full navigation"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-stone-800/60 text-stone-300 hover:text-[#d4af37] border border-stone-800 hover:border-amber-500/40 transition-all"
            >
              <span className="flex flex-col gap-[4px] justify-center w-4">
                <span className="block w-4 h-[1.5px] bg-current" />
                <span className="block w-2.5 h-[1.5px] bg-current" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium hidden sm:inline">
                Menu
              </span>
            </button>

            {/* Cart / Order button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-stone-700 hover:border-amber-400/70 text-stone-200 hover:text-white text-[10px] sm:text-xs uppercase tracking-widest font-medium transition-all bg-stone-900/60"
            >
              <span>Order</span>
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7l5-5 5 5M12 2v13M19 12v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7"/>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#d4af37] text-stone-950 text-[9px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Reserve CTA button */}
            <button
              onClick={onOpenReservation}
              className="flex items-center gap-1.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gold-gradient text-stone-950 text-[10px] sm:text-xs uppercase tracking-widest font-bold hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-amber-500/20"
            >
              <span>Reserve</span>
              <svg viewBox="0 0 24 24" className="w-3 h-3 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7l5-5 5 5M12 2v13M19 12v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7"/>
              </svg>
            </button>
          </div>

        </div>

        {/* Secondary horizontal navigation bar on md & lg screens so all sections are always accessible */}
        <div className="xl:hidden flex items-center justify-center gap-4 sm:gap-6 overflow-x-auto scrollbar-none px-4 pt-2 border-t border-stone-800/50 text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-stone-400">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-[#d4af37] whitespace-nowrap transition-colors py-0.5"
            >
              {link.name}
            </a>
          ))}
        </div>
      </header>

      {/* ── FULL-SCREEN OVERLAY MENU ── */}
      {isMounted && (
        <div
          className={`nav-overlay fixed inset-0 z-50 bg-[#0b0a09] flex flex-col${isOpen ? ' is-open' : ''}`}
          role="dialog"
          aria-modal="true"
        >
          {/* Ambient gold glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-[-8%] left-[-4%] w-[480px] h-[480px] rounded-full bg-amber-600/[0.07] blur-[110px]" />
            <div className="absolute bottom-[-8%] right-[-4%] w-[380px] h-[380px] rounded-full bg-amber-800/[0.05] blur-[90px]" />
          </div>

          {/* Overlay top bar */}
          <div className="relative z-10 h-16 sm:h-18 grid grid-cols-3 items-center px-5 sm:px-8 lg:px-12 border-b border-amber-500/[0.12]">
            {/* Close button LEFT */}
            <button
              onClick={closeMenu}
              className="flex items-center gap-2.5 text-stone-300 hover:text-white transition-colors group w-fit"
            >
              <span className="relative w-5 h-4 flex flex-col justify-center">
                <span className="block absolute w-5 h-[1.5px] bg-current rotate-45" />
                <span className="block absolute w-5 h-[1.5px] bg-current -rotate-45" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.22em] font-medium hidden sm:inline group-hover:text-[#d4af37] transition-colors">
                Close
              </span>
            </button>

            {/* Logo CENTER */}
            <div className="flex flex-col items-center">
              <BrandLogo variant="crest" crestSize={34} />
              <span className="font-cinzel text-[9px] tracking-[0.22em] text-[#d4af37] hidden sm:block mt-1">LUQMA-E-BARKAH</span>
            </div>

            <div />
          </div>

          {/* Content: 2-column on desktop */}
          <div className="relative z-10 flex-1 flex flex-col lg:flex-row overflow-hidden">

            {/* LEFT – large numbered links */}
            <div className="nav-panel-left flex-1 flex flex-col justify-between px-6 sm:px-10 lg:px-14 xl:px-20 py-8 lg:py-10 overflow-y-auto">
              <nav className="space-y-0">
                {NAV_LINKS.map((link, i) => (
                  <div
                    key={link.href}
                    className="nav-link-item"
                    style={{ transitionDelay: isOpen ? `${i * 65 + 100}ms` : '0ms' }}
                  >
                    <a
                      href={link.href}
                      onClick={e => handleNavClick(e, link.href)}
                      className="group flex items-baseline gap-3 py-1.5 w-fit cursor-pointer"
                    >
                      <sup className="font-cinzel text-[9px] text-[#d4af37]/70 tracking-widest group-hover:text-[#d4af37] transition-colors font-semibold">
                        {link.index}
                      </sup>
                      <span className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight text-stone-100 group-hover:text-[#f3e5ab] transition-colors duration-200">
                        {link.name}
                      </span>
                    </a>
                  </div>
                ))}
              </nav>

              {/* Bottom CTAs */}
              <div className="nav-cta-group flex flex-wrap gap-3 mt-8 pt-6 border-t border-amber-500/[0.14]">
                <button
                  onClick={() => { closeMenu(); setTimeout(onOpenReservation, 400); }}
                  className="px-7 py-3 rounded-full bg-gold-gradient text-stone-950 text-xs font-bold uppercase tracking-[0.2em] shadow-xl flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  Reserve
                </button>
                <button
                  onClick={() => { closeMenu(); setTimeout(onOpenCart, 400); }}
                  className="px-7 py-3 rounded-full border border-stone-600 hover:border-amber-400/60 text-stone-200 text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 transition-all"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Order {cartCount > 0 && `(${cartCount})`}
                </button>
              </div>
            </div>

            {/* RIGHT info panel */}
            <div className="nav-panel-right hidden lg:flex flex-col justify-between w-[36%] xl:w-[33%] px-10 xl:px-14 py-10 border-l border-amber-500/[0.12] overflow-y-auto">

              {[
                {
                  delay: '280ms',
                  label: null,
                  content: (
                    <div>
                      <BrandLogo variant="crest" crestSize={48} className="mb-2" />
                      <p className="font-serif text-lg font-bold tracking-[0.16em] text-[#f3e5ab]">LUQMA-E-BARKAH</p>
                      <p className="font-arabic text-amber-400 text-sm mt-0.5">لقمةِ برکت</p>
                      <p className="text-xs text-stone-400 mt-1 italic font-light">A Blessing in Every Bite</p>
                    </div>
                  ),
                },
                {
                  delay: '360ms',
                  label: '◆ FIND US',
                  content: (
                    <>
                      <p className="text-sm text-stone-300 font-light leading-relaxed">
                        Near GDC Hadipora,<br />Baramulla–Handwara Highway,<br />Rafiabad, J&amp;K 193301
                      </p>
                      <a href={RESTAURANT_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                        className="inline-block mt-1 text-xs text-[#d4af37]/80 hover:text-[#d4af37] transition-colors underline underline-offset-2">
                        Open in Google Maps ↗
                      </a>
                    </>
                  ),
                },
                {
                  delay: '430ms',
                  label: '◆ RESERVATIONS',
                  content: (
                    <>
                      <p className="text-sm text-stone-300">{RESTAURANT_INFO.phone}</p>
                      <a href="https://wa.me/917006812345" target="_blank" rel="noopener noreferrer"
                        className="block text-sm text-stone-400 hover:text-[#d4af37] transition-colors mt-0.5">
                        WhatsApp Us ↗
                      </a>
                    </>
                  ),
                },
                {
                  delay: '500ms',
                  label: '◆ HOURS',
                  content: (
                    <div className="space-y-1">
                      {RESTAURANT_INFO.hours.map((h, i) => (
                        <div key={i} className="flex justify-between text-xs gap-4">
                          <span className="text-stone-400">{h.days}</span>
                          <span className="text-stone-200 font-mono">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  ),
                },
                {
                  delay: '560ms',
                  label: '◆ FOLLOW THE TALE',
                  content: (
                    <div className="flex gap-2.5">
                      <a href={RESTAURANT_INFO.instagram} target="_blank" rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full border border-amber-500/30 bg-stone-900 hover:border-amber-400 hover:bg-stone-800 flex items-center justify-center text-stone-300 hover:text-white transition-all"
                        aria-label="Instagram">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[1.6]" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="20" x="2" y="2" rx="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </a>
                    </div>
                  ),
                },
              ].map(({ delay, label, content }) => (
                <div
                  key={delay}
                  className="nav-info-block space-y-2"
                  style={{ transitionDelay: isOpen ? delay : '0ms' }}
                >
                  {label && (
                    <p className="text-[10px] font-cinzel tracking-[0.28em] text-[#d4af37] uppercase font-semibold">
                      {label}
                    </p>
                  )}
                  {content}
                </div>
              ))}

            </div>
          </div>

          {/* Mobile bottom strip */}
          <div className="lg:hidden relative z-10 px-6 py-4 border-t border-amber-500/[0.12] text-xs text-stone-400 flex flex-wrap gap-4">
            <span>📍 Hadipora, Rafiabad</span>
            <span>🕐 10:30 AM – 11:00 PM</span>
            <span>📞 {RESTAURANT_INFO.phone}</span>
          </div>
        </div>
      )}
    </>
  );
};
