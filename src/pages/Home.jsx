import React from 'react';
import { motion } from 'framer-motion';
// Proper Vite imports so images are bundled correctly at build time
const heroImg = new URL('./assets/1.webp', import.meta.url).href;
const resortImg = new URL('./assets/44.webp', import.meta.url).href;
const teamImg = new URL('./assets/25.webp', import.meta.url).href;
// Asset helper for Signature Experiences
const getAsset = (id) => new URL(`./assets/${id}.webp`, import.meta.url).href;
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
      <section 
        className="h-screen flex items-center justify-center text-center px-4 md:px-6 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-emerald-950/70" />
        <div className="relative z-10 max-w-4xl w-full">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-4 md:mb-6">WONDROUS CAMP</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-amber-500 uppercase tracking-widest mb-8 md:mb-10">Discover the joy of your own home</p>
          <a href="#/about" className="bg-amber-500 text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-bold hover:scale-105 transition-transform inline-block text-sm md:text-base">DISCOVER MORE</a>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-amber-500 mb-6 md:mb-10 leading-tight">Comfort in the Heart of Wilderness</h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
              Located in the tranquil Kathiaa Village of Shivpuri, Wondrous Camp stands as a beacon of luxury amidst the rugged beauty of the Himalayas. 
              We offer an impressive inventory of 35 meticulously crafted accommodations, including 22 modern cooler cottages and 13 traditional Swiss camps.
            </p>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
              Our resort is more than just a place to stay; it is a commitment to sustainable "Responsible Tourism". 
              Every room features king-size comfort and attached bathrooms, providing a sanctuary of peace overlooking the holy Ganges.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white/5 p-4 md:p-6 rounded-2xl border border-amber-500/10">
                <h4 className="text-amber-500 font-bold mb-2 uppercase text-xs tracking-widest">Sustainability</h4>
                <p className="text-xs md:text-sm text-gray-400">Zero-waste practices and eco-conscious management.</p>
              </div>
              <div className="bg-white/5 p-4 md:p-6 rounded-2xl border border-amber-500/10">
                <h4 className="text-amber-500 font-bold mb-2 uppercase text-xs tracking-widest">Hospitality</h4>
                <p className="text-xs md:text-sm text-gray-400">Pristine service with a dedicated 24/7 adventure team.</p>
              </div>
            </div>
          </div>
          <div className="h-[300px] md:h-[500px] lg:h-[600px] bg-white/5 rounded-2xl md:rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
            <img src={resortImg} className="w-full h-full object-cover opacity-50" alt="Resort" />
          </div>
        </div>
      </section>
      {/* Services & Amenities Section */}
      <section className="py-16 md:py-24 bg-white text-emerald-950">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p className="text-amber-600 font-bold uppercase text-xs mb-2">Services & Amenities</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-10 md:mb-16">Our Services & Amenities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
            {amenities.map(item => (
              <div key={item.name} className="p-4 md:p-8 border border-gray-100 rounded-2xl md:rounded-3xl hover:shadow-xl transition-all group">
                <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform">{item.i}</div>
                <h4 className="font-bold text-xs md:text-sm uppercase text-gray-800">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Corporate Team Building Section */}
      <section className="py-16 md:py-24 bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-amber-500 mb-4 md:mb-6">Corporate Team Building</h2>
            <p className="text-gray-300 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              Wondrous Camp Rishikesh specializes in team-building corporate initiatives, fostering collaboration and leadership in an inspiring natural setting that invigorates mind, body, and corporate spirit alike.
            </p>
            <a href="#/contact" className="border-2 border-amber-500 text-amber-500 px-6 md:px-8 py-3 rounded-full font-bold hover:bg-amber-500 hover:text-white transition-all text-sm md:text-base">READ MORE</a>
          </div>
          <div className="h-64 md:h-96 bg-white/5 rounded-2xl md:rounded-3xl border border-white/10 overflow-hidden">
            <img src={teamImg} className="w-full h-full object-cover opacity-60" alt="Team Building" />
          </div>
        </div>
      </section>
      {/* Activities / Adventures Section */}
      <section id="adventures" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto border-t border-white/5">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-center mb-10 md:mb-16 text-white uppercase">Adventure Activities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {activities.map(item => (
            <div key={item} className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 hover:border-amber-500 transition-colors group">
              <h3 className="text-sm md:text-lg font-bold text-gray-300 group-hover:text-amber-500 transition-colors uppercase tracking-widest">{item}</h3>
            </div>
          ))}
        </div>
      </section>
      {/* Signature Experiences Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-emerald-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-amber-400 mb-4">Signature Experiences</h2>
            <p className="text-gray-400 uppercase tracking-widest text-xs md:text-sm">Where Luxury Meets the Wild</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { id: 46, title: "White Water Rafting", desc: "Conquer Grade II-IV rapids on the holy Ganges with professional gear." },
              { id: 47, title: "Himalayan Trekking", desc: "Explore hidden waterfall trails and breathtaking vistas of the Shivpuri valley." },
              { id: 48, title: "Luxury Pool Oasis", desc: "A pristine swimming pool surrounded by verdant forests for ultimate relaxation." },
              { id: 49, title: "Corporate Leadership", desc: "Specialized team-building initiatives designed to foster collaboration." }
            ].map((exp) => (
              <motion.div
                key={exp.id}
                className="relative h-[350px] md:h-[450px] rounded-2xl md:rounded-[2rem] overflow-hidden group cursor-pointer border border-white/10"
                style={{ perspective: "1000px" }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0px 0px 30px 5px rgba(212, 175, 55, 0.4)"
                }}
              >
                <motion.img 
                  src={getAsset(exp.id)} 
                  alt={exp.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  whileHover={{ scale: 1.1, rotateY: 5, rotateX: -5 }}
                />
                <div className="absolute inset-x-3 md:inset-x-4 bottom-3 md:bottom-4 bg-emerald-950/40 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-xl md:rounded-[1.5rem] transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <h4 className="text-lg md:text-xl font-playfair font-bold text-amber-400 mb-1 md:mb-2">{exp.title}</h4>
                  <p className="text-xs text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    {exp.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section — LAST on the page */}
      <section id="packages" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto border-t border-white/5">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-center mb-10 md:mb-16 text-white uppercase tracking-tighter">Our Camping Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {packages.map(p => (
            <div key={p} className="bg-white/5 p-8 md:p-12 rounded-2xl md:rounded-3xl border border-white/10 hover:border-amber-500 transition-all text-center">
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-amber-500 mb-4 md:mb-6 uppercase tracking-tighter">{p}</h3>
              <a href="#/contact" className="inline-block bg-amber-500 text-white px-8 md:px-10 py-3 rounded-full font-bold hover:bg-amber-600 text-sm md:text-base">Select Package</a>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};
export default Home;