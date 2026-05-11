import React from 'react';
import { motion } from 'framer-motion';

const Adventures = () => {
  const activities = [
    "Brahmpuri River Rafting", "Bungee Jumping in Rishikesh", "Camping in Rishikesh", 
    "Flying Fox in Rishikesh", "Marine Drive River Rafting", "Rishikesh Camping Shipuri", 
    "River Rafting in Rishikesh", "Shivpuri River Rafting", "Zipline Activity"
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-40 pb-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-playfair font-bold text-center mb-16 text-white uppercase">Adventure Activities</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {activities.map(item => (
          <div key={item} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-amber-500 transition-colors group">
            <h3 className="text-lg font-bold text-gray-300 group-hover:text-amber-500 transition-colors uppercase tracking-widest">{item}</h3>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
export default Adventures;
