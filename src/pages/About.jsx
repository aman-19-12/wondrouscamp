import React from 'react';
import { motion } from 'framer-motion';

const aboutImg = new URL('./assets/2.webp', import.meta.url).href;

const About = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="pt-28 md:pt-40 pb-16 md:pb-24 px-4 md:px-6 max-w-7xl mx-auto text-white"
  >
    {/* Section 1: The Vision */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center mb-16 md:mb-32">
      <motion.div initial={{ x: -50 }} animate={{ x: 0 }}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-amber-400 mb-6 md:mb-8 leading-tight">
          A Legacy of Himalayan Hospitality
        </h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
          Wondrous Camp is not just a destination; it is a transformative experience where the majesty of the Himalayas meets the refined comfort of luxury living. Located in the serene Kathiaa Village of Shivpuri, we provide a sanctuary for those looking to reconnect with nature, the community, and themselves.
        </p>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Our resort specializes in creating a "home away from home" atmosphere amidst the rugged terrain of Uttarakhand. Whether you are here for the adrenaline of the Ganges or the peace of a mountain sunrise, our mission is to ensure every guest leaves rejuvenated.
        </p>
      </motion.div>
      <div className="h-[300px] md:h-[400px] lg:h-[500px] bg-white/5 rounded-2xl md:rounded-[3rem] border border-white/10 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 to-transparent z-10" />
        <img 
          src={aboutImg} 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
          alt="About Us" 
        />
      </div>
    </div>

    {/* Section 2: Detailed Inventory */}
    <div className="bg-white/5 p-8 md:p-16 rounded-2xl md:rounded-[4rem] border border-amber-400/10 mb-16 md:mb-32">
      <div className="text-center mb-10 md:mb-16">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-white mb-3 md:mb-4">Our Accommodations</h3>
        <p className="text-amber-400 uppercase tracking-widest text-xs md:text-sm">35 Premium Units Designed for Comfort</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-4 md:space-y-6">
          <h4 className="text-xl md:text-2xl font-playfair font-bold text-amber-400">22 Cooler Cottages</h4>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Our luxury cooler cottages offer a robust, stone-and-wood aesthetic that keeps the interiors naturally cool during the day while providing king-size warmth at night. Each unit features attached modern bathrooms and premium bedding.
          </p>
        </div>
        <div className="space-y-4 md:space-y-6">
          <h4 className="text-xl md:text-2xl font-playfair font-bold text-white">13 Traditional Swiss Camps</h4>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            For those seeking the authentic "glamping" experience, our 13 Swiss tents provide the perfect balance of canvas-shelter adventure and hotel-grade luxury, complete with private sit-out areas overlooking the valley.
          </p>
        </div>
      </div>
    </div>

    {/* Section 3: The Location Philosophy */}
    <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-amber-400 mb-6 md:mb-8">The Convenient Campsite</h3>
      <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 md:mb-12">
        Positioned near the Shivpuri Petrol Pump, we are just a short drive from the main rafting hubs while remaining secluded enough to offer total silence. Our facility is one of the few in the region with a dedicated 25-car parking space and a pristine swimming pool, making us the top choice for families and corporate groups alike.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
        <a href="#/gallery" className="text-amber-400 font-bold border-b border-amber-400 pb-1 hover:text-white hover:border-white transition-all">VIEW GALLERY</a>
        <a href="#/contact" className="text-amber-400 font-bold border-b border-amber-400 pb-1 hover:text-white hover:border-white transition-all">BOOK NOW</a>
      </div>
    </div>
  </motion.div>
);

export default About;
