import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-playfair font-bold text-white mb-4 uppercase">Contact Our Team</h2>
      <p className="text-gray-400 tracking-[0.2em] uppercase text-xs">Your Journey to Shivpuri Starts Here</p>
    </div>

    <div className="grid lg:grid-cols-2 gap-16">
      <div className="space-y-6">
        <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
          <h4 className="text-amber-400 font-bold uppercase tracking-widest mb-4">Location</h4>
          <p className="text-white text-lg">Kathiaa Village, Shivpuri</p>
          <p className="text-gray-400">Near Shivpuri Petrol Pump 4 km Leftside road from Hotel Grand Tapovan Kathiaa Village Road, Rishikesh, Uttarakhand 249192</p>
        </div>
        <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
          <h4 className="text-amber-400 font-bold uppercase tracking-widest mb-4">Reservations</h4>
          <p className="text-white text-lg">+91 - 7065477546</p>
          <p className="text-gray-400">[EMAIL_ADDRESS]</p>
        </div>
      </div>

      <form className="bg-white/10 p-12 rounded-3xl border border-amber-400/20 space-y-6">
        <input className="w-full bg-emerald-950 p-5 rounded-2xl border border-white/10 text-white outline-none focus:border-amber-400 transition-all" placeholder="Guest Name" />
        <input className="w-full bg-emerald-950 p-5 rounded-2xl border border-white/10 text-white outline-none focus:border-amber-400 transition-all" placeholder="Email ID" />
        <textarea className="w-full bg-emerald-950 p-5 rounded-2xl border border-white/10 text-white outline-none focus:border-amber-400 transition-all h-32" placeholder="Tell us about your group size and arrival date..."></textarea>
        <button className="w-full bg-amber-400 text-emerald-950 font-bold py-5 rounded-full hover:bg-amber-500 shadow-xl shadow-amber-400/20">
          Send Reservation Request
        </button>
      </form>
    </div>
  </motion.div>
);

export default Contact;