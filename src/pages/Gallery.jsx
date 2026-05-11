import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  // Generate array of 45 image paths
  // Note: This assumes images are in src/pages/assets/ and named 1.webp to 45.webp
  const images = Array.from({ length: 45 }, (_, i) => ({
    id: i + 1,
    url: new URL(`./assets/${i + 1}.webp`, import.meta.url).href,
    title: `Adventure Moment ${i + 1}`
  }));

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="pt-32 pb-20 px-6 bg-emerald-950 min-h-screen"
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-playfair font-bold text-amber-400 mb-4 uppercase tracking-tighter">
          Capturing the Essence of Shivpuri
        </h2>
        <div className="h-1 w-24 bg-amber-400 mx-auto rounded-full" />
      </div>

      {/* 3D Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
        {images.map((img) => (
          <motion.div
            key={img.id}
            className="relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group"
            style={{ perspective: "1000px" }}
            whileHover={{ 
              rotateY: 5, 
              rotateX: -5, 
              scale: 1.02,
              z: 50
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => setSelectedImg(img)}
          >
            <img
              src={img.url}
              alt={img.title}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => { e.target.src = 'src/pages/assets/1.webp'; }}
            />
            
            {/* Hover Overlay matching official site style */}
            <div className="absolute inset-0 bg-emerald-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-amber-400/20 backdrop-blur-sm p-4 rounded-full border border-amber-400/50 text-amber-400 text-3xl">
                +
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
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