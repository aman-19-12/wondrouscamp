import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Pointing to your existing asset path
  const heroImage = new URL('./assets/1.webp', import.meta.url).href;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pt-40 pb-24 px-6 max-w-7xl mx-auto text-white"
    >
      <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
        <motion.div initial={{ x: -50 }} animate={{ x: 0 }}>
          <h2 className="text-6xl font-playfair font-bold text-amber-400 mb-8 leading-tight">
            Comfort in the Heart of Wilderness
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Located in the tranquil Kathiaa Village of Shivpuri, Wondrous Camp stands as a beacon of luxury amidst the rugged beauty of the Himalayas. We offer an impressive inventory of 35 meticulously crafted accommodations, including 22 modern cooler cottages and 13 traditional Swiss camps.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            Our resort is more than just a place to stay; it is a commitment to sustainable "Responsible Tourism". Every room features king-size comfort and attached bathrooms, providing a sanctuary of peace overlooking the holy Ganges.
          </p>
          
          {/* Status Boxes */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-emerald-900/50 p-6 rounded-2xl border border-amber-400/10">
              <h4 className="text-amber-400 font-bold mb-2 uppercase text-xs tracking-widest">Sustainability</h4>
              <p className="text-sm text-gray-400">Zero-waste practices and eco-conscious management.</p>
            </div>
            <div className="bg-emerald-900/50 p-6 rounded-2xl border border-amber-400/10">
              <h4 className="text-amber-400 font-bold mb-2 uppercase text-xs tracking-widest">Hospitality</h4>
              <p className="text-sm text-gray-400">Pristine service with a dedicated 24/7 adventure team.</p>
            </div>
          </div>
        </motion.div>

        {/* HIGH-INTENSITY GLOW IMAGE */}
        <motion.div 
          className="h-[600px] bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden relative cursor-pointer"
          whileHover={{ 
            // Intense Golden Glow
            boxShadow: "0px 0px 60px 20px rgba(212, 175, 55, 0.8)",
            transition: { duration: 0.3 }
          }}
        >
          <motion.img 
            src={heroImage}
            alt="Campfire at Wondrous Camp"
            className="w-full h-full object-cover grayscale transition-all duration-500"
            whileHover={{ 
              scale: 1.03,
              grayscale: 0, // Turn to full color
              filter: "brightness(1.3) contrast(1.1)" // Amp up the brightness
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
