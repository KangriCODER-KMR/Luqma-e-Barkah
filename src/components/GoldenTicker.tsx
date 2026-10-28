import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const WORDS = [
  'Wazwan', 'Celebration', 'Heritage', 'Saffron', 'Valley',
  'Tradition', 'Craft', 'Blessing', 'Aroma', 'Texture',
  'Taste', 'Gathering', 'Kashmir', 'Origin', 'Spice',
];

export const GoldenTicker: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`reveal-up overflow-hidden ${isVisible ? 'is-revealed' : ''}`}
    >
      <div className="relative w-full py-4 bg-gradient-to-r from-[#b8932b] via-[#d4af37] to-[#b8932b] overflow-hidden">
        {/* Double the list for seamless loop */}
        <div className="ticker-track flex items-center gap-0 whitespace-nowrap">
          {[...WORDS, ...WORDS, ...WORDS].map((word, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="font-serif italic text-[#0e0c0a] text-lg sm:text-xl font-medium px-5 tracking-wide">
                {word}
              </span>
              <span className="text-[#0e0c0a]/50 text-base select-none">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
