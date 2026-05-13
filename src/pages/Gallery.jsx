import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const validIds = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38,
    40, 41, 42, 44, 45
  ];

  const images = validIds.map(id => ({
    id,
    url: new URL(`./assets/${id}.webp`, import.meta.url).href,
    title: `Moment ${id}`
  }));

  // Custom tilt with "oppose" logic for specific IDs
  const getRotation = (id) => {
    const tilts = [-3, -2, 2, 3, -1, 1];
    let baseRotation = tilts[id % tilts.length];
    if ([12, 13, 14, 36, 37, 38].includes(id)) {
      return baseRotation * -1; 
    }
    return baseRotation;
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-28 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 bg-emerald-950 min-h-screen">
      <div className="max-w-7xl mx-auto text-center mb-12 md:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-amber-400 mb-3 md:mb-4 tracking-tighter uppercase">
          The Wondrous Scrapbook
        </h2>
        <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full opacity-50" />
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-8 space-y-8 md:space-y-12 px-2 md:px-4 max-w-7xl mx-auto">
        {images.map((img) => (
          <motion.div
            key={img.id}
            initial={{ 
              opacity: 0, 
              y: 30, 
              rotate: getRotation(img.id)
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.08, 
              rotate: 0, 
              zIndex: 50,
              boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.7)" 
            }}
            className="relative break-inside-avoid bg-white p-2 md:p-3 pb-8 md:pb-10 shadow-2xl cursor-pointer transition-all duration-300 ring-1 ring-black/5"
            onClick={() => setSelectedImg(img)}
          >
            <div className="overflow-hidden bg-gray-100 aspect-[4/5]">
              <img
                src={img.url}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                onError={(e) => { e.target.closest('.relative').style.display = 'none'; }}
              />
            </div>
            <p className="mt-2 md:mt-4 text-center font-serif text-emerald-900 italic text-xs md:text-sm opacity-40">
              #{img.id} Expedition
            </p>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-emerald-950/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white text-3xl z-10"
              onClick={() => setSelectedImg(null)}
            >
              ✕
            </button>
            <motion.div 
              initial={{ scale: 0.9, rotate: -2 }} 
              animate={{ scale: 1, rotate: 0 }}
              className="bg-white p-2 md:p-4 pb-10 md:pb-16 shadow-2xl max-w-3xl border-4 md:border-8 border-white"
            >
              <img src={selectedImg.url} alt={selectedImg.title} className="max-h-[70vh] w-auto shadow-inner" />
              <p className="mt-3 text-center font-serif text-emerald-900 italic text-sm opacity-40">
                #{selectedImg.id} Expedition
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;