import React from 'react';
import { Sparkles, Moon, Flame, Users, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { ROOFTOP_FEATURES } from '../data/restaurantData';

interface RooftopExperienceProps {
  onOpenReservation: () => void;
}

export const RooftopExperience: React.FC<RooftopExperienceProps> = ({ onOpenReservation }) => {
  return (
    <section id="rooftop" className="py-24 bg-gradient-to-b from-transparent via-[#07090e]/70 to-transparent relative overflow-hidden backdrop-blur-xs">
      {/* Ambient twilight glow effect */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-stone-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium mb-3">
            <Moon className="w-3.5 h-3.5" />
            <span>North Kashmir's 1st Open-Air Terrace</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-white mb-4">
            Dine Beneath The <span className="font-serif italic font-normal text-gold-gradient">Stars</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-4" />
          <p className="text-stone-300 text-sm sm:text-base font-light">
            Elevate your evening on North Kashmir’s most celebrated rooftop terrace. Enjoy the crisp mountain breeze of Rafiabad, warm glowing fairy lights, and live charcoal embers.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ROOFTOP_FEATURES.map((item, index) => {
            return (
              <div
                key={index}
                className="p-6 rounded-sm bg-stone-900/40 border border-stone-800/80 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-full border border-amber-500/30 bg-stone-950 flex items-center justify-center mb-4 group-hover:border-amber-400 transition-colors">
                    <Sparkles className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-white mb-2 group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-800/50 flex items-center justify-between text-[11px] text-[#d4af37] font-medium">
                  <span>Exclusive Setup</span>
                  <span className="font-arabic text-stone-500">برکت</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cinematic Visual Banner with Booking CTA */}
        <div className="relative rounded-sm overflow-hidden border border-amber-500/30 shadow-2xl">
          <div className="relative h-96 sm:h-[450px]">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
              alt="Luqma-e-Barkah Rooftop Terrace Experience"
              className="w-full h-full object-cover filter brightness-[0.38] contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0a09] via-[#0b0a09]/70 to-transparent" />
            
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-center p-8 sm:p-14 max-w-2xl">
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-2">
                Unforgettable Atmosphere
              </span>
              <h3 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-4 leading-snug">
                Ideal For Family Evenings, Birthday Gatherings & Quiet Highway Halts
              </h3>
              <p className="text-stone-300 text-sm sm:text-base font-light mb-8 leading-relaxed">
                Whether you are traveling between Srinagar, Baramulla, and Handwara or celebrating a milestone with loved ones, our open rooftop provides unmatched comfort and genuine Kashmiri hospitality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onOpenReservation}
                  className="px-8 py-3.5 rounded-sm bg-gold-gradient text-stone-950 font-semibold tracking-wider text-xs uppercase shadow-xl hover:shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve Your Rooftop Table</span>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
