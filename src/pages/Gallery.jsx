import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  // Hardcoded IDs to ensure 0 broken images (Excluding 21, 35, 39, 43)
  const validIds = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38,
    40, 41, 42, 44, 45
  ];

  const images = validIds.map(id => ({
    id,
    url: new URL(`./assets/${id}.webp`, import.meta.url).href,
    title: `Adventure Moment ${id}`
  }));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-20 px-6 bg-emerald-950 min-h-screen">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-playfair font-bold text-amber-400 mb-4 uppercase tracking-tighter">
          Experience Gallery
        </h2>
        <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full" />
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            className="relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group"
            style={{ perspective: "1000px" }}
            
            // Floating animation
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              duration: 3 + (index % 2), // Varying speed for organic feel
              repeat: Infinity, 
              ease: "easeInOut" 
            }}

            // 3D Tilt on Hover
            whileHover={{ 
              rotateY: 8, 
              rotateX: -8, 
              scale: 1.05,
              z: 50 
            }}
            onClick={() => setSelectedImg(img)}
          >
            <img
              src={img.url}
              alt={img.title}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-amber-400 text-3xl font-light">VIEW</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              src={selectedImg.url}
              className="max-w-full max-h-full rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Gallery;