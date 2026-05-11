import React from 'react';
import { motion } from 'framer-motion';

// Proper Vite imports for package images
const pkg1 = new URL('./assets/5.webp', import.meta.url).href;
const pkg2 = new URL('./assets/10.webp', import.meta.url).href;
const pkg3 = new URL('./assets/15.webp', import.meta.url).href;
const pkg4 = new URL('./assets/20.webp', import.meta.url).href;

const Packages = () => {
  const packages = [
    { title: "Couple Camping Package", img: pkg1, price: "2,499" },
    { title: "Family Camping Package", img: pkg2, price: "5,999" },
    { title: "1 Night 2 Days Camping Package", img: pkg3, price: "1,999" },
    { title: "2 Night 3 Days Camping Package", img: pkg4, price: "3,499" }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-28 md:pt-40 pb-16 md:pb-24 px-4 md:px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-center mb-10 md:mb-16 text-white uppercase tracking-tighter">Our Camping Packages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {packages.map(p => (
          <div key={p.title} className="bg-white/5 rounded-2xl md:rounded-3xl border border-white/10 hover:border-amber-500 transition-all text-center overflow-hidden flex flex-col group">
            <div className="h-40 md:h-48 overflow-hidden">
               <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="text-lg sm:text-xl md:text-2xl font-playfair font-bold text-amber-500 mb-3 md:mb-4 uppercase tracking-tighter">{p.title}</h3>
              <p className="text-gray-400 mb-4 md:mb-6 text-xs md:text-sm flex-grow">Experience the ultimate Himalayan getaway with our specially curated plans.</p>
              <div className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">₹{p.price}<span className="text-xs md:text-sm font-normal text-gray-500"> /person</span></div>
              <a href="#/contact" className="inline-block bg-amber-500 text-emerald-950 px-6 py-3 rounded-full font-bold hover:bg-amber-400 w-full transition-colors text-sm md:text-base">Select Package</a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Packages;