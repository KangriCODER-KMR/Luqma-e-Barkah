import React, { useState } from 'react';
import { Sparkles, PartyPopper, Users, UtensilsCrossed, Calendar, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import { CateringInquiry } from '../types';

export const EventsCatering: React.FC = () => {
  const [formData, setFormData] = useState<CateringInquiry>({
    fullName: '',
    phone: '',
    eventType: 'Birthday Party',
    guestCount: 25,
    eventDate: '',
    preferredCuisine: 'Authentic Kashmiri Wazwan & Grills',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `*🎉 EVENT & CATERING INQUIRY — LUQMA-E-BARKAH*\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Occasion:* ${formData.eventType}\n` +
      `*Guest Count:* ${formData.guestCount} People\n` +
      `*Date:* ${formData.eventDate || 'Flexible'}\n` +
      `*Cuisine Choice:* ${formData.preferredCuisine}\n` +
      (formData.notes ? `*Special Notes:* ${formData.notes}\n` : '') +
      `\nPlease let us know availability and packages for this function.`
    );
    window.open(`https://wa.me/917006812345?text=${text}`, '_blank');
  };

  return (
    <section id="events" className="py-24 bg-[#07090e]/75 backdrop-blur-xs relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium mb-3">
            <PartyPopper className="w-3.5 h-3.5" />
            <span>Celebrations & Grand Feasts</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-white mb-4">
            Private Events & <span className="font-serif italic font-normal text-gold-gradient">Catering</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-4" />
          <p className="text-stone-300 text-sm sm:text-base font-light">
            Host your birthdays, college reunions, family anniversaries, or traditional Wazwan feasts in our private terrace enclosures or grand hall.
          </p>
        </div>

        {/* 2-Column Split: Offerings Showcase & Instant Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Event Types */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-sm bg-stone-900/40 border border-stone-800/80 hover:border-amber-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <UtensilsCrossed className="w-5 h-5 text-[#d4af37]" />
                <h3 className="font-serif text-lg font-bold text-white">
                  Traditional Kashmiri Wazwan Feasts
                </h3>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                Complete ceremonial Trami setup served with authentic Wazwan dishes prepared by seasoned valley chefs. Available for on-site private banquets and bulk home catering.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-stone-900/40 border border-stone-800/80 hover:border-amber-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <PartyPopper className="w-5 h-5 text-[#d4af37]" />
                <h3 className="font-serif text-lg font-bold text-white">
                  Rooftop Terrace Birthday & Anniversary Parties
                </h3>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                Exclusive terrace booking decorated with ambient string lights, bespoke customized multi-course menus, music, and dedicated service staff.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-stone-900/40 border border-stone-800/80 hover:border-amber-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-[#d4af37]" />
                <h3 className="font-serif text-lg font-bold text-white">
                  GDC College & Corporate Gatherings
                </h3>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                Special party packages for students, faculty from nearby Government Degree College Hadipora, and corporate highway delegations.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Box */}
          <div className="lg:col-span-6 bg-gradient-to-b from-stone-900/90 to-stone-950 p-6 sm:p-8 rounded-sm border border-amber-500/30 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-white">Inquiry Received!</h3>
                <p className="text-xs text-stone-300 max-w-sm mx-auto">
                  Thank you, <strong className="text-amber-300">{formData.fullName}</strong>. Our events manager will review your date ({formData.eventDate || 'Upcoming'}) and contact you shortly.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleWhatsAppSend}
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider rounded-xs inline-flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp for Instant Response</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-stone-800 pb-3 mb-2">
                  <h3 className="font-cinzel text-lg font-bold text-[#f3e5ab]">
                    Event & Catering Inquiry
                  </h3>
                  <p className="text-[11px] text-stone-400">
                    Get custom packages and menu recommendations
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-xs text-xs text-stone-200 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-300 mb-1">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 7006X XXXXX"
                      className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-xs text-xs text-stone-200 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-300 mb-1">
                      Occasion
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value as any })}
                      className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-xs text-xs text-stone-200 focus:outline-none focus:border-amber-400"
                    >
                      <option value="Birthday Party">Birthday Party</option>
                      <option value="Wedding / Walima">Wedding / Walima</option>
                      <option value="Family Get-Together">Family Get-Together</option>
                      <option value="Corporate Gathering">Corporate Gathering</option>
                      <option value="Other">Other Celebration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-300 mb-1">
                      Approx Guests
                    </label>
                    <input
                      type="number"
                      min={5}
                      max={500}
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: parseInt(e.target.value) || 10 })}
                      className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-xs text-xs text-stone-200 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-300 mb-1">
                    Event Date
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-xs text-xs text-stone-200 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-300 mb-1">
                    Any Specific Requests
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Need Wazwan Trami for 40 people, cake cutting arrangement..."
                    className="w-full px-3 py-2 bg-stone-950 border border-stone-800 rounded-xs text-xs text-stone-200 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gold-gradient text-stone-950 font-bold uppercase tracking-wider text-xs rounded-xs shadow-lg hover:shadow-amber-500/20 transition-all"
                >
                  Submit Event Inquiry
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
