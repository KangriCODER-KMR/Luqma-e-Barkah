import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Review {
  id: number;
  author: string;
  source: string;
  text: string;
  dish?: string;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    author: 'PETE',
    source: 'GOOGLE REVIEW',
    text: '6 of us came here last night, on a last minute booking, the food was great, I had the lamb shank, it was delicious, service was fast & staff was accommodating & friendly. We all agreed we would return to this restaurant again.',
  },
  {
    id: 2,
    author: 'ZUBAIR AHMAD',
    source: 'GOOGLE REVIEW',
    text: 'The best dining experience in North Kashmir! Having open-air rooftop dining right along the highway is a game changer. The Wazwan Trami and Seekh Tujji are sensational, and the evening breeze under the fairy lights is unbeatable.',
  },
  {
    id: 3,
    author: 'DR. MIR FAROOQ',
    source: 'GOOGLE REVIEW',
    text: 'We hosted a 30-person family celebration on the terrace. The hospitality was exceptional, every dish from Rogan Josh to Butter Chicken arrived piping hot. Truly Luqma-e-Barkah lived up to its name — a blessing of flavors.',
  },
  {
    id: 4,
    author: 'AYESHA QADIR',
    source: 'GOOGLE REVIEW',
    text: 'Visited after college with friends. Their burgers, chicken momos, and sunset mocktails are surprisingly great! Very aesthetic ambiance, clean family seating, and incredibly courteous staff.',
  },
  {
    id: 5,
    author: 'TANVEER HASSAN',
    source: 'GOOGLE REVIEW',
    text: 'Driving from Srinagar to Handwara, this is hands down the premier highway halt. Ample parking, spotless restrooms, and warm Saffron Kahwa with Kashmiri bakarkhani served by the open embers.',
  },
  {
    id: 6,
    author: 'SAJAD DAR',
    source: 'GOOGLE REVIEW',
    text: 'Outstanding culinary craft! The charcoal Seekh Tujji paired with authentic walnut chutney is the finest in Baramulla district. A must-visit destination for anyone traveling on the Baramulla–Handwara highway.',
  },
  {
    id: 7,
    author: 'MOHAMMAD IRFAN',
    source: 'GOOGLE REVIEW',
    text: 'The rooftop terrace ambiance at night is purely magical. Soft music, warm glowing lanterns, and mouth-melting Gushtaba. Can not recommend Luqma-e-Barkah enough!',
  },
  {
    id: 8,
    author: 'SNEHA & RAHUL',
    source: 'GOOGLE REVIEW',
    text: 'Traveled through Kashmir and stopped here for dinner. The flavors are royal yet authentic. The staff took such generous care of us. An absolute highlight of our road trip.',
  },
];

export const ReviewsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { ref, isVisible } = useScrollReveal(0.1);

  // Auto-advance reviews every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const changeSlide = (newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(newIndex);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 450);
  };

  const handlePrev = () => {
    const prev = activeIndex === 0 ? REVIEWS.length - 1 : activeIndex - 1;
    changeSlide(prev);
  };

  const handleNext = () => {
    const next = activeIndex === REVIEWS.length - 1 ? 0 : activeIndex + 1;
    changeSlide(next);
  };

  const current = REVIEWS[activeIndex];

  return (
    <section id="reviews" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background with blurred ambient restaurant interior and starry sky */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
          alt="Luqma-e-Barkah Ambiance"
          className="w-full h-full object-cover filter brightness-[0.22] contrast-125 blur-xs scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090e]/90 via-[#07090e]/75 to-[#07090e]/95" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-[#07090e]" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-5xl mx-auto px-6 sm:px-10 lg:px-12 text-center reveal-up ${
          isVisible ? 'is-revealed' : ''
        }`}
      >
        {/* ── Top Rating Header (Exactly matching Image 3) ── */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {/* Big "4.8" Number */}
          <span className="font-serif text-5xl sm:text-7xl font-normal text-white tracking-tight leading-none">
            4.8
          </span>

          {/* Stars & Google text */}
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#d4af37] fill-[#d4af37]"
                />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-stone-300 font-light">
              Rated by <strong className="font-medium text-white">410</strong> guests on Google
            </p>
          </div>
        </div>

        {/* ── Review Quote in Italic Serif (Image 3) ── */}
        <div className="relative min-h-[160px] sm:min-h-[140px] flex items-center justify-center mb-8">
          <p
            className={`font-serif italic text-xl sm:text-2xl md:text-3xl text-stone-200 leading-relaxed max-w-3xl mx-auto font-light transition-all duration-500 transform ${
              isTransitioning ? 'opacity-0 translate-y-3 scale-98' : 'opacity-100 translate-y-0 scale-100'
            }`}
          >
            "{current.text}"
          </p>
        </div>

        {/* ── Author attribution (Image 3) ── */}
        <p className="text-xs sm:text-sm font-cinzel font-semibold tracking-[0.25em] text-[#d4af37] uppercase mb-10">
          {current.author} · {current.source}
        </p>

        {/* ── Navigation Controls: Previous / Next & Dots (Image 3) ── */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={handlePrev}
            className="p-1.5 text-stone-400 hover:text-white transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Pagination dots (matching the 8 dots in Image 3) */}
          <div className="flex items-center gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => changeSlide(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIndex
                    ? 'w-2.5 h-2.5 bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.8)] scale-110'
                    : 'w-1.5 h-1.5 bg-stone-600 hover:bg-stone-400'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-1.5 text-stone-400 hover:text-white transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
