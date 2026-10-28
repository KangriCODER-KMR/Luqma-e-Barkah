import React, { useState } from 'react';
import { Navbar }            from './components/Navbar';
import { Hero }              from './components/Hero';
import { StoryPhilosophy }  from './components/StoryPhilosophy';
import { DishCarousel }     from './components/DishCarousel';
import { GoldenTicker }     from './components/GoldenTicker';
import { InteractiveMenu }  from './components/InteractiveMenu';
import { RooftopExperience }from './components/RooftopExperience';
import { EventsCatering }   from './components/EventsCatering';
import { ReviewsSection }   from './components/ReviewsSection';
import { LocationHours }    from './components/LocationHours';
import { Footer }           from './components/Footer';
import { StarryBackground } from './components/StarryBackground';
import { ReservationModal } from './components/ReservationModal';
import { OnlineOrderDrawer }from './components/OnlineOrderDrawer';
import { DishDetailModal }  from './components/DishDetailModal';
import { CartItem, MenuItem }from './types';
import { Check, MessageSquare, ShoppingBag } from 'lucide-react';
import { useScrollReveal }  from './hooks/useScrollReveal';

/* ── Small wrapper that applies reveal to any section ── */
function RevealSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollReveal(0.08);
  return (
    <div ref={ref} className={`reveal-up ${isVisible ? 'is-revealed' : ''} ${className}`}>
      {children}
    </div>
  );
}

export default function App() {
  const [cart,              setCart]              = useState<CartItem[]>([]);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isCartOpen,        setIsCartOpen]        = useState(false);
  const [selectedDish,      setSelectedDish]      = useState<MenuItem | null>(null);
  const [toast,             setToast]             = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const addToCart = (dish: MenuItem) => {
    setCart(prev => {
      const ex = prev.find(i => i.dish.id === dish.id);
      return ex
        ? prev.map(i => i.dish.id === dish.id ? { ...i, quantity: i.quantity + 1 } : i)
        : [...prev, { dish, quantity: 1 }];
    });
    showToast(`Added ${dish.name} to order`);
  };

  const updateQty = (id: string, qty: number) => {
    if (qty <= 0) { removeItem(id); return; }
    setCart(prev => prev.map(i => i.dish.id === id ? { ...i, quantity: qty } : i));
  };

  const removeItem = (id: string) =>
    setCart(prev => prev.filter(i => i.dish.id !== id));

  const totalCount = cart.reduce((s, i) => s + i.quantity, 0);

  const scrollToMenu = () =>
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#07090e] text-[#e8e4dc] antialiased overflow-x-hidden relative">
      {/* ── Interactive Twinkling Cosmic Night Sky (Qissa Style) ── */}
      <StarryBackground />

      {/* ── Toast ── */}
      {toast && (
        <div className="fixed top-20 right-5 z-50 flex items-center gap-2.5 px-4 py-2.5 bg-[#161412] border border-amber-500/35 text-stone-100 text-xs rounded-xs shadow-2xl animate-in fade-in">
          <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
            <Check className="w-2.5 h-2.5 text-black stroke-[3]" />
          </span>
          {toast}
        </div>
      )}

      {/* ── Navbar (fixed, transparent over hero) ── */}
      <Navbar
        cartCount={totalCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* ── 1. Hero  (full-screen video) ── */}
      <Hero
        onOpenReservation={() => setIsReservationOpen(true)}
        onExploreMenu={scrollToMenu}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* ── 2. Story & Philosophy ── */}
      <StoryPhilosophy />

      {/* ── 3. Dish auto-scroll carousel ── */}
      <DishCarousel />

      {/* ── 4. Golden ticker banner ── */}
      <GoldenTicker />

      {/* ── 5. Interactive Menu ── */}
      <RevealSection>
        <InteractiveMenu
          onAddToCart={addToCart}
          onSelectDish={setSelectedDish}
        />
      </RevealSection>

      {/* ── 6. Rooftop ── */}
      <RevealSection>
        <RooftopExperience onOpenReservation={() => setIsReservationOpen(true)} />
      </RevealSection>

      {/* ── 7. Events ── */}
      <RevealSection>
        <EventsCatering />
      </RevealSection>

      {/* ── 8. Reviews ── */}
      <RevealSection>
        <ReviewsSection />
      </RevealSection>

      {/* ── 9. Location ── */}
      <RevealSection>
        <LocationHours />
      </RevealSection>

      {/* ── 10. Footer ── */}
      <Footer
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* ── Modals ── */}
      <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />
      <OnlineOrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={updateQty}
        onRemoveItem={removeItem}
        onClearCart={() => setCart([])}
      />
      <DishDetailModal
        dish={selectedDish}
        onClose={() => setSelectedDish(null)}
        onAddToCart={addToCart}
      />

      {/* ── Floating action buttons ── */}
      <div className="fixed bottom-6 right-5 z-30 flex flex-col gap-2.5">
        <a
          href="https://wa.me/917006812345"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-105"
          title="WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
        </a>
        {totalCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative w-12 h-12 bg-gold-gradient text-stone-950 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-all"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-stone-950 text-amber-300 text-[10px] font-bold rounded-full flex items-center justify-center border border-amber-400">
              {totalCount}
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
