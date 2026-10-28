import React from 'react';
import { X, Flame, Star, Plus, Check, Sparkles, Utensils } from 'lucide-react';
import { MenuItem } from '../types';

interface DishDetailModalProps {
  dish: MenuItem | null;
  onClose: () => void;
  onAddToCart: (dish: MenuItem) => void;
}

export const DishDetailModal: React.FC<DishDetailModalProps> = ({ dish, onClose, onAddToCart }) => {
  const [added, setAdded] = React.useState(false);

  if (!dish) return null;

  const handleAdd = () => {
    onAddToCart(dish);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#0f0e0c] border border-amber-500/30 rounded-sm shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image header */}
        <div className="relative h-64 w-full bg-stone-950">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-black/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Price badge */}
          <div className="absolute bottom-4 right-4 px-3.5 py-1.5 bg-[#0b0a09]/90 border border-amber-500/40 rounded-xs">
            <span className="font-cinzel text-xl font-bold text-[#f3e5ab]">
              ₹{dish.price}
            </span>
          </div>

          {/* Halal / Veg badge */}
          <div className="absolute bottom-4 left-4 flex gap-2">
            {dish.isVegetarian ? (
              <span className="px-2.5 py-1 rounded-xs bg-emerald-950/90 border border-emerald-500/70 text-emerald-300 text-xs font-medium">
                Vegetarian
              </span>
            ) : (
              <span className="px-2.5 py-1 rounded-xs bg-stone-900/90 border border-stone-700 text-stone-300 text-xs font-medium">
                100% Halal
              </span>
            )}
            {dish.isChefSpecial && (
              <span className="px-2.5 py-1 rounded-xs bg-amber-500 text-black text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                <Star className="w-3 h-3 fill-current" />
                Chef's Signature
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold text-white">
                {dish.name}
              </h3>
              {dish.servingSize && (
                <span className="text-xs text-stone-400 mt-0.5 block">
                  Serving: {dish.servingSize}
                </span>
              )}
            </div>
            {dish.urduName && (
              <span className="font-arabic text-xl text-amber-400">
                {dish.urduName}
              </span>
            )}
          </div>

          <p className="text-stone-300 text-sm leading-relaxed font-light">
            {dish.description}
          </p>

          {/* Spice Level details */}
          {dish.spiceLevel > 0 && (
            <div className="flex items-center gap-2 text-xs text-stone-400 pt-1">
              <span>Heat Level:</span>
              <div className="flex items-center gap-0.5">
                {Array.from({ length: dish.spiceLevel }).map((_, i) => (
                  <Flame key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-amber-300 font-medium">
                {dish.spiceLevel === 1 ? 'Mild & Aromatic' : dish.spiceLevel === 2 ? 'Medium Valley Spice' : 'Fiery Kashmiri Chillies'}
              </span>
            </div>
          )}

          {/* Ingredients list */}
          {dish.ingredients && dish.ingredients.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wider text-stone-400 mb-2">
                Ingredients & Spices:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {dish.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="text-xs text-stone-300 bg-stone-900 border border-stone-800 px-2.5 py-1 rounded-xs"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action button */}
          <div className="pt-4 border-t border-stone-800 flex gap-3">
            <button
              onClick={handleAdd}
              className={`flex-1 py-3 px-4 rounded-xs text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                added 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-gold-gradient text-stone-950 hover:shadow-lg hover:shadow-amber-500/20'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Order</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add To Order (₹{dish.price})</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="py-3 px-5 border border-stone-700 text-stone-300 hover:text-white rounded-xs text-xs uppercase tracking-wider"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
