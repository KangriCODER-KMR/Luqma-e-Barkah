import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  MapPin, 
  Phone,
  MessageSquare
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationData } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationData>({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    guests: 4,
    seatingPreference: 'rooftop',
    specialRequests: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'LB-' + Math.floor(1000 + Math.random() * 9000);
    setConfirmationCode(code);
    setIsSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `*🌟 NEW TABLE RESERVATION [${confirmationCode}]*\n` +
      `*Restaurant:* Luqma-e-Barkah, Hadipora\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Date:* ${formData.date}\n` +
      `*Time:* ${formData.time}\n` +
      `*Guests:* ${formData.guests} Persons\n` +
      `*Seating:* ${
        formData.seatingPreference === 'rooftop' 
          ? 'Open-Air Rooftop Terrace' 
          : formData.seatingPreference === 'family-enclosure' 
          ? 'Private Family Enclosure' 
          : 'Grand Indoor Dining Hall'
      }\n` +
      (formData.specialRequests ? `*Notes:* ${formData.specialRequests}\n` : '') +
      `\nPlease confirm our table reservation. Thank you!`
    );

    window.open(`https://wa.me/917006812345?text=${text}`, '_blank');
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-[#0f0e0c] border border-amber-500/30 rounded-sm shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-stone-800 bg-stone-950/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-amber-500/40 bg-stone-900 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-[#d4af37]" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#f3e5ab]">
                Table Reservation
              </h3>
              <p className="text-[11px] tracking-wider text-stone-400 uppercase">
                LUQMA-E-BARKAH • HADIPORA, RAFIABAD
              </p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-full hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 bg-emerald-950/60 border border-emerald-500/60 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                  Reservation Received
                </span>
                <h4 className="font-serif text-2xl font-bold text-white mt-1">
                  Thank You, {formData.name}!
                </h4>
                <p className="text-xs text-stone-400 mt-2">
                  Booking Reference: <strong className="text-amber-300">{confirmationCode}</strong>
                </p>
              </div>

              {/* Summary Box */}
              <div className="p-4 rounded-sm bg-stone-900/80 border border-stone-800 text-left text-xs space-y-2 text-stone-300">
                <div className="flex justify-between">
                  <span className="text-stone-400">Date & Time:</span>
                  <span className="font-medium text-white">{formData.date} at {formData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Party Size:</span>
                  <span className="font-medium text-white">{formData.guests} Guests</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Seating Preference:</span>
                  <span className="font-medium text-amber-300 capitalize">
                    {formData.seatingPreference.replace('-', ' ')}
                  </span>
                </div>
              </div>

              <p className="text-xs text-stone-400">
                Our host team at Hadipora has received your request. You can also send this instantly to our WhatsApp desk for VIP seating.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={handleSendWhatsApp}
                  className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xs text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send to Restaurant WhatsApp</span>
                </button>
                <button
                  onClick={resetAndClose}
                  className="py-3 px-6 border border-stone-700 text-stone-300 hover:text-white rounded-xs text-xs uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Zubair Lone"
                    className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-xs text-xs text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-400/80"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 7006X XXXXX"
                    className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-xs text-xs text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-400/80"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-xs text-xs text-stone-200 focus:outline-none focus:border-amber-400/80"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                    Preferred Time *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-xs text-xs text-stone-200 focus:outline-none focus:border-amber-400/80"
                  >
                    <option value="12:30">12:30 PM (Lunch)</option>
                    <option value="13:30">01:30 PM (Lunch)</option>
                    <option value="16:00">04:00 PM (Afternoon Tea & Snacks)</option>
                    <option value="18:30">06:30 PM (Twilight Sunset)</option>
                    <option value="19:30">07:30 PM (Dinner)</option>
                    <option value="20:30">08:30 PM (Dinner & Grills)</option>
                    <option value="21:30">09:30 PM (Late Dinner)</option>
                  </select>
                </div>
              </div>

              {/* Guests & Seating Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                    Number of Guests *
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={40}
                    required
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) || 1 })}
                    className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-xs text-xs text-stone-200 focus:outline-none focus:border-amber-400/80"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                    Seating Experience
                  </label>
                  <select
                    value={formData.seatingPreference}
                    onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-xs text-xs text-stone-200 focus:outline-none focus:border-amber-400/80"
                  >
                    <option value="rooftop">Open-Air Rooftop Terrace ⭐</option>
                    <option value="family-enclosure">Private Family Cabin</option>
                    <option value="indoor">Grand Indoor Dining Hall</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-300 mb-1.5">
                  Special Notes / Occasion (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="e.g. Birthday celebration, Wazwan Trami pre-order, quiet table..."
                  className="w-full px-3.5 py-2.5 bg-stone-950 border border-stone-800 rounded-xs text-xs text-stone-200 placeholder-stone-600 focus:outline-none focus:border-amber-400/80"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-gold-gradient text-stone-950 font-bold tracking-widest text-xs uppercase rounded-xs shadow-xl hover:shadow-amber-500/20 transition-all"
                >
                  Confirm Table Reservation
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
