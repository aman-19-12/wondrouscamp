import React from 'react';
import { motion } from 'framer-motion';

const Packages = () => {
  const packages = [
    { title: "Couple Camping Package", img: "src/pages/assets/1.webp", price: "2,499" },
    { title: "Family Camping Package", img: "src/pages/assets/2.webp", price: "5,999" },
    { title: "1 Night 2 Days Camping Package", img: "src/pages/assets/3.webp", price: "1,999" },
    { title: "2 Night 3 Days Camping Package", img: "src/pages/assets/4.webp", price: "3,499" }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-16 text-white uppercase tracking-tighter">Our Camping Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {packages.map(p => (
          <div key={p.title} className="bg-white/5 rounded-3xl border border-white/10 hover:border-amber-500 transition-all text-center overflow-hidden flex flex-col group">
            <div className="h-48 overflow-hidden">
               <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400'; }} />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-xl md:text-2xl font-playfair font-bold text-amber-500 mb-4 uppercase tracking-tighter">{p.title}</h3>
              <p className="text-gray-400 mb-6 text-sm flex-grow">Experience the ultimate Himalayan getaway with our specially curated plans.</p>
              <div className="text-3xl font-bold text-white mb-6">₹{p.price}<span className="text-sm font-normal text-gray-500"> /person</span></div>
              <a href="#/contact" className="inline-block bg-amber-500 text-emerald-950 px-6 py-3 rounded-full font-bold hover:bg-amber-400 w-full transition-colors">Select Package</a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Packages;