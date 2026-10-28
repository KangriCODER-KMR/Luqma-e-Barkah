import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const StoryPhilosophy: React.FC = () => {
  const { ref: imgRef,  isVisible: imgVis  } = useScrollReveal(0.1);
  const { ref: textRef, isVisible: textVis } = useScrollReveal(0.1);
  const { ref: quoteRef,isVisible: quoteVis} = useScrollReveal(0.1);

  return (
    <section id="story" className="py-20 sm:py-28 bg-[#07090e]/75 backdrop-blur-xs relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── 2-column layout: image left, text right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* LEFT — Restaurant photo */}
          <div
            ref={imgRef}
            className={`reveal-left ${imgVis ? 'is-revealed' : ''}`}
          >
            <div className="relative rounded-sm overflow-hidden border border-amber-500/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85"
                alt="Luqma-e-Barkah Restaurant Ambiance"
                className="w-full h-[420px] sm:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 px-4 py-2 bg-[#0b0a09]/90 backdrop-blur-md border border-amber-500/30 rounded-xs">
                <p className="font-arabic text-amber-400 text-lg">لقمةِ برکت</p>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest">Hadipora, Rafiabad</p>
              </div>
            </div>
          </div>

          {/* RIGHT — Story text */}
          <div
            ref={textRef}
            className={`reveal-right space-y-6 ${textVis ? 'is-revealed' : ''}`}
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#d4af37]/60" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37] font-cinzel font-semibold">
                What is Luqma-e-Barkah?
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-tight">
              A word that means{' '}
              <em className="not-italic text-gold-gradient">a blessing.</em>
            </h2>

            {/* Body */}
            <div className="space-y-4 text-stone-300 text-base font-light leading-relaxed">
              <p>
                Every dish tells a story — of the origin, the spices, the slow-fire craftsmanship,
                and the taste of every morsel. It is the cornerstone of Kashmiri daily life,
                of culture, of history.
              </p>
              <p>
                <em className="text-stone-200">'Luqma-e-Barkah'</em> carries the extraordinary
                stories behind the foods we eat: authentic Kashmiri Wazwan, valley-smoked charcoal
                grills, and a multi-cuisine experience served with care, warmth, and divine generosity.
              </p>
            </div>

            {/* Quote block */}
            <div
              ref={quoteRef}
              className={`reveal-up border-l-2 border-[#d4af37]/50 pl-5 py-1 mt-2 ${quoteVis ? 'is-revealed' : ''}`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="font-serif italic text-lg sm:text-xl text-stone-200 leading-relaxed">
                "Luqma-e-Barkah is a place of gathering, of celebration,
                of heritage, and of genuine Kashmiri pleasure. Let the blessing begin…"
              </p>
              <p className="text-[11px] uppercase tracking-widest text-[#d4af37] mt-3 font-cinzel">
                — The Luqma Promise
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
