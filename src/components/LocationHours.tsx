import React from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageSquare, 
  Navigation, 
  Car, 
  Wifi, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { InstagramIcon } from './Icons';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationHours: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-[#07090e]/75 backdrop-blur-xs relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#d4af37] font-medium mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us on the Highway</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-white mb-4">
            Find <span className="font-serif italic font-normal text-gold-gradient">Luqma-e-Barkah</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-4" />
          <p className="text-stone-300 text-sm sm:text-base font-light">
            Conveniently situated on the Baramulla–Handwara National Highway, right beside Government Degree College Hadipora.
          </p>
        </div>

        {/* 2-Column Layout: Details & Embedded Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Card */}
            <div className="p-6 rounded-sm bg-stone-900/60 border border-amber-500/20">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-full bg-stone-950 border border-amber-500/40 text-[#d4af37] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white mb-1">
                    Hadipora, Rafiabad
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed font-light mb-3">
                    Near Government Degree College (GDC) Hadipora,<br />
                    Baramulla–Handwara National Highway,<br />
                    Rafiabad, Jammu & Kashmir 193301
                  </p>
                  <a
                    href={RESTAURANT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] hover:text-amber-300 font-semibold uppercase tracking-wider transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Timings Card */}
            <div className="p-6 rounded-sm bg-stone-900/60 border border-stone-800">
              <div className="flex items-start gap-3.5 mb-4">
                <div className="p-2.5 rounded-full bg-stone-950 border border-stone-700 text-[#d4af37] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    Opening Hours
                  </h3>
                  <p className="text-xs text-stone-400">Serving lunch, tea, dinner & rooftop late night</p>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                {RESTAURANT_INFO.hours.map((schedule, i) => (
                  <div key={i} className="flex justify-between py-1.5 border-b border-stone-800/80 last:border-0">
                    <span className="text-stone-300 font-medium">{schedule.days}</span>
                    <span className="text-amber-300 font-mono">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="p-3.5 rounded-sm bg-stone-900 border border-stone-800 hover:border-amber-500/40 text-stone-200 hover:text-white transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-medium"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call Host</span>
              </a>

              <a
                href={`https://wa.me/917006812345?text=${encodeURIComponent('Assalamu Alaikum Luqma-e-Barkah, I would like to inquire about dining / table availability.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-sm bg-emerald-950/60 border border-emerald-600/60 hover:bg-emerald-900/60 text-emerald-300 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-medium"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Amenities Highlights */}
            <div className="p-4 rounded-sm bg-stone-950 border border-stone-800/80 grid grid-cols-3 gap-2 text-center text-[10px] text-stone-400 uppercase tracking-wider">
              <div className="flex flex-col items-center gap-1">
                <Car className="w-4 h-4 text-[#d4af37]" />
                <span>Highway Parking</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Sparkles className="w-4 h-4 text-[#d4af37]" />
                <span>Rooftop Sky</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Wifi className="w-4 h-4 text-[#d4af37]" />
                <span>Guest Wi-Fi</span>
              </div>
            </div>

          </div>

          {/* Right Interactive Map Column */}
          <div className="lg:col-span-7 rounded-sm overflow-hidden border border-amber-500/20 shadow-2xl relative min-h-[420px] bg-stone-950 flex flex-col">
            {/* Live OpenStreetMap / Google Map iframe embed centered on 34.3049919, 74.3798655 */}
            <iframe
              title="Luqma-e-Barkah Location Map"
              width="100%"
              height="100%"
              className="flex-1 w-full min-h-[380px] border-0 filter brightness-90 contrast-110"
              loading="lazy"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=74.365%2C34.295%2C74.395%2C34.315&amp;layer=mapnik&amp;marker=34.3049919%2C74.3798655`}
            />

            {/* Bottom floating highway navigation banner */}
            <div className="bg-[#110f0d] p-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-xs font-semibold text-white">Baramulla–Handwara Highway Marker</span>
                </div>
                <p className="text-[11px] text-stone-400">GPS: 34.3049919° N, 74.3798655° E • Beside GDC Hadipora</p>
              </div>

              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xs bg-gold-gradient text-stone-950 font-bold uppercase tracking-wider text-xs shadow-lg hover:shadow-amber-500/20 transition-all flex items-center gap-2"
              >
                <span>Navigate Directly</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
