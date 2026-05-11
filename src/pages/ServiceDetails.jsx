import React from 'react';
import { motion } from 'framer-motion';

// Proper Vite image imports
const coolerImg = new URL('./assets/1.webp', import.meta.url).href;
const acImg = new URL('./assets/48.webp', import.meta.url).href;

const ServiceDetails = () => {
  const isAC = window.location.hash.includes('ac');
  
  // Dynamic pricing logic
  const basePrice = isAC ? 2500 : 2000;
  const weekendPrice = 2500;
  const longStayPrice = 1600;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-28 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 max-w-7xl mx-auto text-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        
        {/* Left Column: Content & Pricing */}
        <div className="lg:col-span-2 space-y-8 md:space-y-12">
          <motion.div whileHover={{ scale: 1.01 }} className="rounded-2xl md:rounded-[3rem] overflow-hidden border border-amber-400/20 shadow-2xl h-[250px] md:h-[500px]">
            <img src={isAC ? acImg : coolerImg} className="w-full h-full object-cover" alt="Luxury Interior" />
          </motion.div>

          {/* Dynamic Pricing Table */}
          <div className="bg-white/5 p-6 md:p-10 rounded-2xl md:rounded-[3rem] border border-white/10">
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-amber-400 mb-4 md:mb-6 uppercase">Pricing Dynamics</h3>
            <div className="grid grid-cols-4 md:grid-cols-4 gap-2 md:gap-4 text-center">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                <div key={day} className={`p-2 md:p-4 rounded-xl md:rounded-2xl border ${i >= 5 ? 'border-amber-400 bg-amber-400/10' : 'border-white/10'}`}>
                  <p className="text-[10px] md:text-xs uppercase text-gray-400">{day}</p>
                  <p className="font-bold text-sm md:text-base">₹{i >= 5 ? weekendPrice : basePrice}</p>
                </div>
              ))}
              <div className="p-3 md:p-4 rounded-xl md:rounded-2xl border border-emerald-400 bg-emerald-400/10 col-span-4 md:col-span-1">
                <p className="text-[10px] md:text-xs uppercase text-emerald-400 font-bold">Long Stay</p>
                <p className="text-lg md:text-xl font-bold">₹{longStayPrice}<span className="text-[10px] text-gray-400">/night</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Booking Widget */}
        <div className="space-y-6">
          <div className="lg:sticky lg:top-32 bg-white/10 backdrop-blur-2xl p-6 md:p-10 rounded-2xl md:rounded-[3rem] border border-amber-400/30 shadow-2xl">
            <h3 className="text-xl md:text-2xl font-playfair font-bold text-white mb-4 md:mb-6">Request Booking</h3>
            
            <form className="space-y-3 md:space-y-4">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="text-[10px] uppercase text-amber-400 font-bold ml-2">Check In</label>
                  <input type="date" className="w-full bg-emerald-950/50 p-2.5 md:p-3 rounded-xl border border-white/10 text-xs text-white" />
                </div>
                <div>
                  <label className="text-[10px] uppercase text-amber-400 font-bold ml-2">Check Out</label>
                  <input type="date" className="w-full bg-emerald-950/50 p-2.5 md:p-3 rounded-xl border border-white/10 text-xs text-white" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <select className="w-full bg-emerald-950/50 p-2.5 md:p-3 rounded-xl border border-white/10 text-xs text-white">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>4 Guests</option>
                </select>
                <select className="w-full bg-emerald-950/50 p-2.5 md:p-3 rounded-xl border border-white/10 text-xs text-white">
                  <option>WiFi Included</option>
                  <option>No Service</option>
                </select>
              </div>

              {/* Deposit Toggle */}
              <div className="bg-emerald-950/50 p-3 md:p-4 rounded-xl md:rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border border-white/5">
                <p className="text-xs text-gray-300">Deposit: 50%</p>
                <div className="flex gap-2">
                  <button type="button" className="text-[10px] bg-amber-400 text-emerald-950 px-3 py-1 rounded-full font-bold">Pay Deposit</button>
                  <button type="button" className="text-[10px] border border-white/20 px-3 py-1 rounded-full font-bold text-white">Full Pay</button>
                </div>
              </div>

              <button className="w-full bg-amber-400 text-emerald-950 font-bold py-3 md:py-4 rounded-full shadow-lg shadow-amber-400/30 hover:scale-[1.02] transition-all text-sm md:text-base">
                BOOK NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetails;
