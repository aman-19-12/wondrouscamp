import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const amenities = [
    { name: "24 Hrs Customer Care", i: "📞" },
    { name: "Pick Up & Drop", i: "🚗" },
    { name: "25 Car Parking Space", i: "🅿️" },
    { name: "Room Service", i: "🛎️" },
    { name: "Swimming Pool", i: "🏊" },
    { name: "WIFI Connectivity", i: "📶" },
    { name: "Buffet Meals", i: "🍽️" }
  ];

  const activities = [
    "Brahmpuri River Rafting", "Bungee Jumping in Rishikesh", "Camping in Rishikesh", 
    "Flying Fox in Rishikesh", "Marine Drive River Rafting", "Rishikesh Camping Shipuri", 
    "River Rafting in Rishikesh", "Shivpuri River Rafting", "Zipline Activity"
  ];

  const packages = [
    "Couple Camping Package", "Family Camping Package", "1 Night 2 Days Camping Package", 
    "2 Night 3 Days Camping Package"
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Hero */}
      <section className="h-screen flex items-center justify-center text-center px-6 bg-[url('src/pages/assets/1.webp')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-emerald-950/70" />
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-playfair font-bold text-white mb-6">WONDROUS CAMP</h1>
          <p className="text-2xl text-amber-500 uppercase tracking-widest mb-10">Discover the joy of your own home</p>
          <a href="#/about" className="bg-amber-500 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform inline-block">DISCOVER MORE</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-playfair font-bold text-amber-500 mb-10 leading-tight">Comfort in the Heart of Wilderness</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Located in the tranquil Kathiaa Village of Shivpuri, Wondrous Camp stands as a beacon of luxury amidst the rugged beauty of the Himalayas. 
              We offer an impressive inventory of 35 meticulously crafted accommodations, including 22 modern cooler cottages and 13 traditional Swiss camps.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Our resort is more than just a place to stay; it is a commitment to sustainable "Responsible Tourism". 
              Every room features king-size comfort and attached bathrooms, providing a sanctuary of peace overlooking the holy Ganges.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-amber-500/10">
                <h4 className="text-amber-500 font-bold mb-2 uppercase text-xs tracking-widest">Sustainability</h4>
                <p className="text-sm text-gray-400">Zero-waste practices and eco-conscious management.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-amber-500/10">
                <h4 className="text-amber-500 font-bold mb-2 uppercase text-xs tracking-widest">Hospitality</h4>
                <p className="text-sm text-gray-400">Pristine service with a dedicated 24/7 adventure team.</p>
              </div>
            </div>
          </div>
          <div className="h-[600px] bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
            <img src="src/pages/assets/44.webp" className="w-full h-full object-cover opacity-50" alt="Resort" />
          </div>
        </div>
      </section>

      {/* Services & Amenities Section */}
      <section className="py-24 bg-white text-emerald-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-amber-600 font-bold uppercase text-xs mb-2">Services & Amenities</p>
          <h2 className="text-5xl font-playfair font-bold mb-16">Our Services & Amenities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {amenities.map(item => (
              <div key={item.name} className="p-8 border border-gray-100 rounded-3xl hover:shadow-xl transition-all group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.i}</div>
                <h4 className="font-bold text-sm uppercase text-gray-800">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Team Building Section */}
      <section className="py-24 bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-playfair font-bold text-amber-500 mb-6">Corporate Team Building</h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Wondrous Camp Rishikesh specializes in team-building corporate initiatives, fostering collaboration and leadership in an inspiring natural setting that invigorates mind, body, and corporate spirit alike.
            </p>
            <a href="#/contact" className="border-2 border-amber-500 text-amber-500 px-8 py-3 rounded-full font-bold hover:bg-amber-500 hover:text-white transition-all">READ MORE</a>
          </div>
          <div className="h-96 bg-white/5 rounded-3xl border border-white/10 overflow-hidden">
            <img src="src/pages/assets/25.webp" className="w-full h-full object-cover opacity-60" alt="Team Building" />
          </div>
        </div>
      </section>

      {/* Activities / Adventures Section */}
      <section id="adventures" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <h2 className="text-5xl font-playfair font-bold text-center mb-16 text-white uppercase">Adventure Activities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {activities.map(item => (
            <div key={item} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-amber-500 transition-colors group">
              <h3 className="text-lg font-bold text-gray-300 group-hover:text-amber-500 transition-colors uppercase tracking-widest">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
        <h2 className="text-5xl font-playfair font-bold text-center mb-16 text-white uppercase tracking-tighter">Our Camping Packages</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {packages.map(p => (
            <div key={p} className="bg-white/5 p-12 rounded-3xl border border-white/10 hover:border-amber-500 transition-all text-center">
              <h3 className="text-3xl font-playfair font-bold text-amber-500 mb-6 uppercase tracking-tighter">{p}</h3>
              <a href="#/contact" className="inline-block bg-amber-500 text-white px-10 py-3 rounded-full font-bold hover:bg-amber-600">Select Package</a>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
export default Home;