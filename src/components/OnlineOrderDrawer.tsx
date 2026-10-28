import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Trash2, 
  MessageSquare, 
  Sparkles, 
  Car, 
  Bike, 
  Store 
} from 'lucide-react';
import { CartItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface OnlineOrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (dishId: string, quantity: number) => void;
  onRemoveItem: (dishId: string) => void;
  onClearCart: () => void;
}

export const OnlineOrderDrawer: React.FC<OnlineOrderDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [orderType, setOrderType] = useState<'takeaway' | 'car-halt' | 'delivery'>('takeaway');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [addressOrVehicle, setAddressOrVehicle] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.dish.price * item.quantity, 0);
  const packagingFee = items.length > 0 ? 30 : 0;
  const grandTotal = subtotal + packagingFee;

  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    const itemsSummary = items
      .map(
        (item, index) =>
          `${index + 1}. *${item.dish.name}* x ${item.quantity} = ₹${item.dish.price * item.quantity}`
      )
      .join('\n');

    const message = encodeURIComponent(
      `*🍽️ NEW FOOD ORDER — LUQMA-E-BARKAH*\n` +
      `*Order Type:* ${
        orderType === 'takeaway' 
          ? 'Takeaway Pickup' 
          : orderType === 'car-halt' 
          ? 'Highway Car Halt Pickup' 
          : 'Local Delivery (Hadipora / Rafiabad)'
      }\n` +
      `*Customer:* ${customerName || 'Guest'}\n` +
      `*Phone:* ${customerPhone || 'Not provided'}\n` +
      (addressOrVehicle ? `*Address / Vehicle:* ${addressOrVehicle}\n` : '') +
      (orderNotes ? `*Special Notes:* ${orderNotes}\n` : '') +
      `\n*ITEMS ORDERED:*\n` +
      `${itemsSummary}\n\n` +
      `*Subtotal:* ₹${subtotal}\n` +
      `*Packaging:* ₹${packagingFee}\n` +
      `*GRAND TOTAL:* ₹${grandTotal}\n\n` +
      `Please confirm preparation time. Thank you!`
    );

    window.open(`https://wa.me/917006812345?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0f0e0c] border-l border-amber-500/30 flex flex-col shadow-2xl">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-stone-800 bg-stone-950/70 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-stone-900 border border-amber-500/40 flex items-center justify-center text-[#d4af37]">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-cinzel text-lg font-bold text-[#f3e5ab]">
                  Your Food Order
                </h3>
                <p className="text-[10px] text-stone-400 uppercase tracking-wider">
                  Luqma-e-Barkah Takeaway
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white rounded-full hover:bg-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-5">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <ShoppingBag className="w-12 h-12 text-stone-600 mx-auto" />
                <p className="font-serif text-lg text-stone-300">Your bag is empty</p>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Explore our authentic Kashmiri Wazwan, charcoal grills, or burgers and add them to your order.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-5 py-2 text-xs uppercase tracking-wider bg-gold-gradient text-stone-950 font-semibold rounded-xs"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                {/* Order Type Toggle */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-2">
                    Service Type
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setOrderType('takeaway')}
                      className={`p-2 rounded-xs border text-center transition-all ${
                        orderType === 'takeaway'
                          ? 'border-amber-400 bg-amber-950/40 text-amber-200'
                          : 'border-stone-800 bg-stone-950 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      <Store className="w-4 h-4 mx-auto mb-1 text-[#d4af37]" />
                      <span className="text-[10px] font-medium block">Counter Pickup</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setOrderType('car-halt')}
                      className={`p-2 rounded-xs border text-center transition-all ${
                        orderType === 'car-halt'
                          ? 'border-amber-400 bg-amber-950/40 text-amber-200'
                          : 'border-stone-800 bg-stone-950 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      <Car className="w-4 h-4 mx-auto mb-1 text-[#d4af37]" />
                      <span className="text-[10px] font-medium block">Highway Halt</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setOrderType('delivery')}
                      className={`p-2 rounded-xs border text-center transition-all ${
                        orderType === 'delivery'
                          ? 'border-amber-400 bg-amber-950/40 text-amber-200'
                          : 'border-stone-800 bg-stone-950 text-stone-400 hover:border-stone-700'
                      }`}
                    >
                      <Bike className="w-4 h-4 mx-auto mb-1 text-[#d4af37]" />
                      <span className="text-[10px] font-medium block">Local Delivery</span>
                    </button>
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-stone-400 pb-1 border-b border-stone-800">
                    <span>Items ({items.length})</span>
                    <button 
                      onClick={onClearCart} 
                      className="text-stone-500 hover:text-red-400 transition-colors text-[11px]"
                    >
                      Clear All
                    </button>
                  </div>

                  {items.map((item) => (
                    <div 
                      key={item.dish.id} 
                      className="flex items-center justify-between gap-3 p-3 rounded-xs bg-stone-900/60 border border-stone-800"
                    >
                      <img
                        src={item.dish.image}
                        alt={item.dish.name}
                        className="w-12 h-12 rounded-xs object-cover flex-shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-semibold text-stone-100 truncate">
                          {item.dish.name}
                        </h4>
                        <span className="text-xs text-amber-300 font-medium">
                          ₹{item.dish.price}
                        </span>
                      </div>

                      {/* Quantity Controller */}
                      <div className="flex items-center gap-2 bg-stone-950 border border-stone-700 rounded-xs px-1.5 py-1">
                        <button
                          onClick={() => onUpdateQuantity(item.dish.id, item.quantity - 1)}
                          className="text-stone-400 hover:text-white p-0.5"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-white px-1">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.dish.id, item.quantity + 1)}
                          className="text-stone-400 hover:text-white p-0.5"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.dish.id)}
                        className="text-stone-500 hover:text-red-400 p-1"
                        title="Remove dish"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Customer Details Form */}
                <form id="orderForm" onSubmit={handleSendWhatsAppOrder} className="space-y-3 pt-2">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Tariq Khan"
                      className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-xs text-xs text-stone-200 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="+91 7006X XXXXX"
                      className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-xs text-xs text-stone-200 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                      {orderType === 'car-halt' ? 'Car Model & Number' : orderType === 'delivery' ? 'Delivery Address (Hadipora / Nearby)' : 'Pickup Time (e.g. in 20 mins)'}
                    </label>
                    <input
                      type="text"
                      value={addressOrVehicle}
                      onChange={(e) => setAddressOrVehicle(e.target.value)}
                      placeholder={orderType === 'car-halt' ? 'e.g. White Creta JK05...' : 'e.g. Near Degree College Gate'}
                      className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-xs text-xs text-stone-200 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                      Kitchen Instructions (Optional)
                    </label>
                    <input
                      type="text"
                      value={orderNotes}
                      onChange={(e) => setOrderNotes(e.target.value)}
                      placeholder="e.g. Extra mint chutney, less spicy..."
                      className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-xs text-xs text-stone-200 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </form>
              </>
            )}
          </div>

          {/* Drawer Footer with Totals & Action */}
          {items.length > 0 && (
            <div className="p-5 border-t border-stone-800 bg-stone-950/95 space-y-3">
              <div className="space-y-1.5 text-xs text-stone-300">
                <div className="flex justify-between">
                  <span className="text-stone-400">Items Subtotal:</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Packaging & Container:</span>
                  <span>₹{packagingFee}</span>
                </div>
                <div className="flex justify-between font-bold text-sm text-white pt-1 border-t border-stone-800">
                  <span>Grand Total:</span>
                  <span className="text-gold-gradient font-cinzel text-base">₹{grandTotal}</span>
                </div>
              </div>

              <button
                type="submit"
                form="orderForm"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xs text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xl"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Place Order via WhatsApp</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
