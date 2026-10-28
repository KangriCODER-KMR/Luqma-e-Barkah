import React, { useRef, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* Circular Top-Down Gourmet Kashmiri & Grill Plates */
const DISHES = [
  {
    id: 1,
    name: 'Shahi Rogan Josh',
    urdu: 'روغن جوش',
    desc: 'Slow-braised tender mutton in cockscomb extract & Kashmiri fennel',
    src: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 2,
    name: 'Authentic Gushtaba',
    urdu: 'گوشتابہ',
    desc: 'Velvety mutton spheres poached in spiced curd & wild mint gravy',
    src: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 3,
    name: 'Crispy Tabak Maaz',
    urdu: 'طباق ماز',
    desc: 'Desi ghee crackled ribs simmered in spiced milk stock',
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 4,
    name: 'Barkah Seekh Tujji',
    urdu: 'سیخ تجی',
    desc: 'Charcoal grilled skewers with walnut chutney & fresh lavasa',
    src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 5,
    name: 'Dum Gosht Biryani',
    urdu: 'دم گوشت بریانی',
    desc: 'Dough-sealed saffron basmati layered with tender spring mutton',
    src: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 6,
    name: 'Shahi Saffron Kahwa',
    urdu: 'زعفرانی قہوہ',
    desc: 'Pampore saffron brewed in samovars with crushed green almonds',
    src: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 7,
    name: 'Old Delhi Butter Chicken',
    urdu: 'بٹر چکن',
    desc: 'Tandoor-smoked chicken in rich tomato, honey & butter reduction',
    src: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=85',
  },
  {
    id: 8,
    name: 'Smoky Tandoori Feast',
    urdu: 'تندوری چکن',
    desc: 'Clay-oven charred spring chicken with degi mirch & hung curd',
    src: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=85',
  },
];

export const DishCarousel: React.FC = () => {
  const { ref: headRef, isVisible: headVis } = useScrollReveal(0.1);

  const trackRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number>(0);
  const posRef = useRef(0);
  const dragRef = useRef({ active: false, startX: 0, startPos: 0 });
  const pausedRef = useRef(false);

  const SPEED = 0.85; // smooth speed
  const CARD_W = 340; // width of circular plate container + spacing
  const allDishes = [...DISHES, ...DISHES];
  const totalW = DISHES.length * CARD_W;

  useEffect(() => {
    const animate = () => {
      if (!pausedRef.current && trackRef.current) {
        posRef.current -= SPEED;
        if (Math.abs(posRef.current) >= totalW) {
          posRef.current = 0;
        }
        trackRef.current.style.transform = `translateX(${posRef.current}px)`;
      }
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [totalW]);

  // Touch & Mouse Drag handlers
  const startDrag = (clientX: number) => {
    pausedRef.current = true;
    dragRef.current = { active: true, startX: clientX, startPos: posRef.current };
  };
  const moveDrag = (clientX: number) => {
    if (!dragRef.current.active || !trackRef.current) return;
    const delta = clientX - dragRef.current.startX;
    posRef.current = dragRef.current.startPos + delta;
    trackRef.current.style.transform = `translateX(${posRef.current}px)`;
  };
  const endDrag = () => {
    dragRef.current.active = false;
    pausedRef.current = false;
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-transparent via-[#090b12]/50 to-transparent">
      {/* Background ambient circular glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

      {/* ── Section header (Identical to Qissa's Masterpieces) ── */}
      <div
        ref={headRef}
        className={`reveal-up text-center max-w-3xl mx-auto px-5 mb-16 ${headVis ? 'is-revealed' : ''}`}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-8 bg-[#d4af37]/60" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-cinzel font-semibold">
            The Masterpieces
          </span>
          <span className="h-px w-8 bg-[#d4af37]/60" />
        </div>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight">
          Crafted icons &amp;{' '}
          <em className="not-italic text-gold-gradient">signature plates.</em>
        </h2>
        <p className="text-stone-400 text-sm sm:text-base font-light mt-3 max-w-lg mx-auto">
          Every plate is presented as a culinary artwork, slow-cooked in traditional deghs and woodfire embers.
        </p>
      </div>

      {/* ── Circular Dish Plates Track (strictly circular, fitted plates) ── */}
      <div
        className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing select-none py-6"
        onMouseDown={(e) => startDrag(e.clientX)}
        onMouseMove={(e) => moveDrag(e.clientX)}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
        onTouchMove={(e) => moveDrag(e.touches[0].clientX)}
        onTouchEnd={endDrag}
      >
        {/* Soft edge gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#07090e] via-[#07090e]/70 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#07090e] via-[#07090e]/70 to-transparent z-10" />

        <div
          ref={trackRef}
          className="flex items-center gap-10 sm:gap-14 will-change-transform px-4"
          style={{ width: 'max-content' }}
        >
          {allDishes.map((dish, i) => (
            <div
              key={`${dish.id}-${i}`}
              className="flex flex-col items-center flex-shrink-0 group w-[260px] sm:w-[300px]"
            >
              {/* Circular Plate Container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2 bg-gradient-to-br from-[#2a241b] via-[#141210] to-[#2a241b] shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(212,175,55,0.18)] border border-amber-500/30 transition-transform duration-500 group-hover:scale-108 group-hover:border-amber-400/70">
                {/* Plate Rim Inner Gold Line */}
                <div className="w-full h-full rounded-full overflow-hidden border border-amber-500/20 relative">
                  <img
                    src={dish.src}
                    alt={dish.name}
                    draggable={false}
                    className="w-full h-full object-cover object-center rounded-full pointer-events-none filter brightness-95 group-hover:brightness-105 transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Subtle glass reflection on the ceramic plate */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
                </div>

                {/* Floating gold leaf badge */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#110f0d]/90 border border-amber-500/40 backdrop-blur-sm text-[10px] text-amber-300 font-cinzel font-semibold shadow-lg whitespace-nowrap">
                  {dish.urdu}
                </div>
              </div>

              {/* Text label underneath */}
              <div className="text-center mt-6 space-y-1">
                <h3 className="font-serif text-lg sm:text-xl text-stone-100 group-hover:text-[#f3e5ab] transition-colors">
                  {dish.name}
                </h3>
                <p className="text-xs text-stone-400 font-light line-clamp-1 max-w-[240px]">
                  {dish.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Touch drag indicator */}
      <div className="flex items-center justify-center gap-3 text-[11px] text-[#d4af37]/75 font-cinzel tracking-[0.25em] uppercase mt-8">
        <span>← DRAG OR SWIPE PLATES →</span>
      </div>
    </section>
  );
};
