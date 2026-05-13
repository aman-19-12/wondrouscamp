import React from 'react';
import { motion } from 'framer-motion';

const Packages = () => {
  const cottageTypes = [
    { 
      title: "Deluxe Cottage (Cooler)", 
      price: "2,000", 
      id: "cooler", 
      tags: ["Weekend Surge", "50% Deposit", "Group Discount"] 
    },
    { 
      title: "Deluxe Cottage (AC)", 
      price: "2,500", 
      id: "ac", 
      tags: ["Climate Control", "WiFi Enabled", "Flexible Booking"] 
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-28 md:pt-40 pb-16 md:pb-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4 tracking-tighter">OUR CAMPING PACKAGES</h2>
        <div className="h-1 w-24 bg-amber-400 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {cottageTypes.map(c => (
          <motion.div 
            key={c.id}
            whileHover={{ y: -10, boxShadow: "0px 0px 50px 10px rgba(212, 175, 55, 0.2)" }}
            className="bg-emerald-900/30 p-8 md:p-12 rounded-2xl md:rounded-[4rem] border border-white/10 backdrop-blur-md relative overflow-hidden"
          >
            <div className="flex flex-wrap gap-2 mb-6 md:absolute md:top-0 md:right-0 md:p-8 md:flex-col md:mb-0">
              {c.tags.map(t => (
                <span key={t} className="text-[10px] font-bold uppercase tracking-widest bg-amber-400/10 text-amber-400 px-3 py-1 rounded-full border border-amber-400/20">
                  {t}
                </span>
              ))}
            </div>

            <h3 className="text-2xl md:text-4xl font-playfair font-bold text-amber-400 mb-2 uppercase">{c.title}</h3>
            <div className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-10 tracking-tighter">₹{c.price} <span className="text-xs md:text-sm font-normal opacity-40">/ NIGHT</span></div>
            
            <a 
              href={`#/service_details?type=${c.id}`} 
              className="bg-amber-400 text-emerald-950 px-8 md:px-12 py-4 md:py-5 rounded-full font-bold hover:bg-white hover:scale-105 transition-all inline-block shadow-xl shadow-amber-400/20 text-sm md:text-base"
            >
              BOOK NOW
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Packages;
