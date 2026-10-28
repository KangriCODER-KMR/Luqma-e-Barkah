import React, { useState, useRef } from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/restaurantData';
import { Plus, Check, Download, ArrowRight, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface InteractiveMenuProps {
  onAddToCart: (dish: MenuItem) => void;
  onSelectDish: (dish: MenuItem) => void;
}

interface MenuSection {
  id: string;
  name: string;
  urdu: string;
  bannerImage: string;
  bannerTagline: string;
  items: MenuItem[];
}

export const InteractiveMenu: React.FC<InteractiveMenuProps> = ({
  onAddToCart,
  onSelectDish,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('wazwan');
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);
  const pillBarRef = useRef<HTMLDivElement>(null);
  const { ref: headerRef, isVisible: headerVis } = useScrollReveal(0.08);

  // Categorize dishes matching the Qissa structure
  const sections: MenuSection[] = [
    {
      id: 'wazwan',
      name: 'Wazwan Heritage & Specialties',
      urdu: 'کشمیری وازوان',
      bannerImage: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85',
      bannerTagline: 'Slow woodfire braised mutton & royal saffron delicacies',
      items: MENU_ITEMS.filter((i) => i.category === 'wazwan'),
    },
    {
      id: 'grills',
      name: 'Highway Charcoal Grills & BBQ',
      urdu: 'تندوری و سیخ تجی',
      bannerImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=85',
      bannerTagline: 'Smoked on glowing acacia embers with walnut chutney',
      items: MENU_ITEMS.filter((i) => i.category === 'grills'),
    },
    {
      id: 'mains',
      name: 'Royal Mains & Traditional Curries',
      urdu: 'شاہی سالن',
      bannerImage: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=1600&q=85',
      bannerTagline: 'Rich reductions of slow-simmered handi gravies',
      items: MENU_ITEMS.filter((i) => i.category === 'mains'),
    },
    {
      id: 'fastfood',
      name: 'Indo-Chinese & Highway Fast Bites',
      urdu: 'فاسٹ فوڈ و چائنیز',
      bannerImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1600&q=85',
      bannerTagline: 'Wok-tossed gravies, loaded smash burgers & crispy momos',
      items: MENU_ITEMS.filter((i) => i.category === 'fastfood'),
    },
    {
      id: 'breads',
      name: 'Artisanal Tandoori Breads & Rice',
      urdu: 'روغنی نان و چاول',
      bannerImage: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1600&q=85',
      bannerTagline: 'Puffed sesame lavasa, garlic butter kulchas & aged saffron basmati',
      items: MENU_ITEMS.filter((i) => i.category === 'breads'),
    },
    {
      id: 'beverages',
      name: 'Kashmiri Saffron Kahwa & Drinks',
      urdu: 'زعفرانی قہوہ و مشروبات',
      bannerImage: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1600&q=85',
      bannerTagline: 'Samovar-brewed Pampore saffron, noon chai & artisanal mocktails',
      items: MENU_ITEMS.filter((i) => i.category === 'beverages'),
    },
  ];

  const handlePillClick = (sectionId: string) => {
    setActiveCategory(sectionId);
    const targetEl = document.getElementById(`section-${sectionId}`);
    if (targetEl) {
      const yOffset = -140; // offset for sticky header & pill bar
      const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleAdd = (dish: MenuItem) => {
    onAddToCart(dish);
    setRecentlyAddedId(dish.id);
    setTimeout(() => setRecentlyAddedId(null), 1200);
  };

  return (
    <section id="menu" className="relative py-20 sm:py-28 text-stone-200">
      
      {/* ── Top Menu Header (Matches Image 1) ── */}
      <div
        ref={headerRef}
        className={`relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 mb-12 reveal-up ${
          headerVis ? 'is-revealed' : ''
        }`}
      >
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-cinzel tracking-[0.25em] text-[#d4af37] uppercase mb-4">
          <a href="#" className="hover:text-white transition-colors">HOME</a>
          <span className="text-stone-600">/</span>
          <span className="text-stone-300">THE MENU</span>
        </div>

        {/* Tagline */}
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-8 bg-[#d4af37]/60" />
          <span className="text-[11px] uppercase tracking-[0.35em] text-[#d4af37] font-cinzel font-semibold">
            DINE IN · TAKEAWAY
          </span>
        </div>

        {/* Title */}
        <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal text-white leading-tight mb-4">
          The Menu
        </h2>

        {/* Description */}
        <p className="text-stone-300 text-sm sm:text-base font-light max-w-2xl leading-relaxed">
          Every dish a story of origin, valley spices, and authentic woodfire craft. Dine beneath the stars of Rafiabad, or order it all directly to your door.
        </p>
      </div>

      {/* ── Sticky Category Navigation Bar (Matches Images 1, 2, 3, 4) ── */}
      <div className="sticky top-16 sm:top-18 z-30 bg-[#07090e]/95 backdrop-blur-md border-y border-amber-500/20 py-3 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-3">
          
          {/* Scrollable pill container */}
          <div
            ref={pillBarRef}
            className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 flex-1"
          >
            {sections.map((sec) => {
              const isActive = activeCategory === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => handlePillClick(sec.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full whitespace-nowrap text-[11px] sm:text-xs font-cinzel tracking-wider uppercase transition-all duration-300 flex-shrink-0 ${
                    isActive
                      ? 'bg-gold-gradient text-stone-950 font-bold shadow-lg shadow-amber-500/25 scale-102'
                      : 'bg-stone-900/80 text-stone-300 hover:text-white hover:bg-stone-800 border border-stone-800'
                  }`}
                >
                  {sec.name.split('&')[0].trim()}
                </button>
              );
            })}
          </div>

          {/* Right Action Buttons: Drinks Menu & Download */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0 pl-3 border-l border-stone-800">
            <button
              onClick={() => handlePillClick('beverages')}
              className="px-4 py-2 rounded-full border border-amber-500/40 text-amber-300 hover:bg-amber-950/40 text-xs font-cinzel uppercase tracking-wider transition-colors flex items-center gap-1.5"
            >
              <span>Drinks Menu</span>
              <ArrowRight className="w-3 h-3" />
            </button>
            <a
              href="#menu"
              className="px-4 py-2 rounded-full bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-300 text-xs font-cinzel uppercase tracking-wider transition-colors"
            >
              Download Menu
            </a>
          </div>

        </div>
      </div>

      {/* ── Category Sections with Banners & 2-Column Dish Grid (Images 1-4) ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 mt-12 space-y-24">
        {sections.map((section) => (
          <div
            key={section.id}
            id={`section-${section.id}`}
            className="scroll-mt-36"
          >
            {/* Wide Rounded Category Photo Banner (Images 1, 3, 4) */}
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/20 shadow-2xl h-52 sm:h-72 mb-10 group">
              <img
                src={section.bannerImage}
                alt={section.name}
                className="w-full h-full object-cover filter brightness-[0.45] contrast-110 group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/40 to-transparent" />
              
              {/* Banner Text Overlay */}
              <div className="absolute bottom-6 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="font-arabic text-[#e5c158] text-lg sm:text-xl block mb-1">
                    {section.urdu}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
                    {section.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 font-light mt-1 max-w-lg">
                    {section.bannerTagline}
                  </p>
                </div>

                <span className="text-[10px] sm:text-xs font-cinzel tracking-[0.25em] text-[#d4af37] uppercase bg-stone-950/80 px-3 py-1.5 rounded-full border border-amber-500/30 w-fit backdrop-blur-sm">
                  {section.items.length} Signature Offerings
                </span>
              </div>
            </div>

            {/* ── 2-Column Clean Editorial Dishes Grid (Images 2, 3, 4) ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10">
              {section.items.map((dish) => {
                const isJustAdded = recentlyAddedId === dish.id;

                return (
                  <div
                    key={dish.id}
                    className="group border-b border-stone-800/80 pb-6 flex flex-col justify-between hover:border-amber-500/40 transition-colors"
                  >
                    <div>
                      {/* Dish Row: Name + Badges on Left, Price on Right */}
                      <div className="flex items-baseline justify-between gap-4 mb-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4
                            onClick={() => onSelectDish(dish)}
                            className="font-serif text-2xl sm:text-3xl font-normal text-stone-100 group-hover:text-[#f3e5ab] cursor-pointer transition-colors leading-tight"
                          >
                            {dish.name}
                          </h4>

                          {/* Dietary Badges: [V], [VG], [HALAL] */}
                          {dish.isVegetarian ? (
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-xs border border-emerald-500/60 text-emerald-400 bg-emerald-950/40">
                              V
                            </span>
                          ) : (
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-xs border border-stone-700 text-stone-400 bg-stone-900/60">
                              HALAL
                            </span>
                          )}

                          {dish.isChefSpecial && (
                            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-xs border border-amber-500/60 text-amber-300 bg-amber-950/40 flex items-center gap-0.5">
                              <Sparkles className="w-2.5 h-2.5" />
                              CHEF
                            </span>
                          )}
                        </div>

                        {/* Price in Gold Serif (Matches Qissa) */}
                        <div className="flex-shrink-0 text-right">
                          <span className="font-serif text-2xl sm:text-3xl font-normal text-[#f7dfa5] tracking-tight">
                            ₹{dish.price}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed mb-3">
                        {dish.description}
                      </p>
                    </div>

                    {/* Bottom Action Row: Ingredients & + Add to Order */}
                    <div className="flex items-center justify-between text-xs pt-1">
                      {dish.urduName ? (
                        <span className="font-arabic text-[#d4af37] text-base">
                          {dish.urduName}
                        </span>
                      ) : (
                        <span className="text-[11px] text-stone-500 font-cinzel">
                          {dish.servingSize || 'Fresh to order'}
                        </span>
                      )}

                      <button
                        onClick={() => handleAdd(dish)}
                        className={`px-3 py-1 rounded-full text-[11px] font-cinzel tracking-wider uppercase transition-all flex items-center gap-1 ${
                          isJustAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-stone-900/80 hover:bg-[#d4af37] text-stone-300 hover:text-stone-950 border border-stone-700 hover:border-transparent'
                        }`}
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="w-3 h-3" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3 h-3" />
                            <span>Add to Order</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
