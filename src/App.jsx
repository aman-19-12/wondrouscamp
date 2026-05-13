import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Packages from './pages/Packages';
import ServiceDetails from './pages/ServiceDetails';

// Navbar logo
const logoImg = new URL('./pages/assets/50.png', import.meta.url).href;

const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');
  useEffect(() => {
    const handleHashChange = () => {
      let hash = window.location.hash.slice(1) || '/';
      // Strip leading slash for section matching: "/about" → "about"
      const sectionId = hash.startsWith('/') ? hash.slice(1) : hash;
      if (['about', 'adventures'].includes(sectionId)) {
        setCurrentPath('/');
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // Strip query string for route matching: "/service_details?type=ac" → "/service_details"
        const pathOnly = hash.split('?')[0];
        setCurrentPath(pathOnly);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  const childrenArray = React.Children.toArray(children);
  const currentChild = childrenArray.find(child => child.props.path === currentPath);
  return <AnimatePresence mode="wait">{currentChild || childrenArray[0]}</AnimatePresence>;
};

const Route = ({ children }) => children;

const DropdownLink = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 hover:text-amber-500 transition-colors uppercase font-bold text-xs tracking-widest focus:outline-none py-4">
        {title}
        <span className={`text-[10px] transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 bg-white shadow-xl rounded-xl py-2 min-w-[200px] border border-gray-100 flex flex-col z-50 text-left"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <motion.nav className={`fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-300 ${scrolled ? 'bg-white/95 text-emerald-950 shadow-xl py-3' : 'bg-white/95 text-emerald-950 shadow-md py-4'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#/" onClick={closeMenu} className="flex items-center gap-2 md:gap-3 text-2xl md:text-3xl font-playfair font-bold text-emerald-950 z-50">
          <img src={logoImg} alt="Wondrous Camp Logo" className="h-8 md:h-10 w-auto object-contain" />
          WONDROUS <span className="text-amber-500">CAMP</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center text-xs font-bold uppercase tracking-widest">
          <a href="#/" className="hover:text-amber-500 py-4">Home</a>
          <a href="#/about" className="hover:text-amber-500 py-4">About Us</a>
          
          <DropdownLink title="Packages">
            <a href="#/packages" className="px-4 py-2 hover:bg-emerald-50 hover:text-amber-500 text-gray-700 transition-colors block">Couple Camping</a>
            <a href="#/packages" className="px-4 py-2 hover:bg-emerald-50 hover:text-amber-500 text-gray-700 transition-colors block">Family Camping</a>
          </DropdownLink>

          <DropdownLink title="Activities">
            <a href="#/adventures" className="px-4 py-2 hover:bg-emerald-50 hover:text-amber-500 text-gray-700 transition-colors block">River Rafting</a>
            <a href="#/adventures" className="px-4 py-2 hover:bg-emerald-50 hover:text-amber-500 text-gray-700 transition-colors block">Bungee Jumping</a>
          </DropdownLink>

          <DropdownLink title="Events">
            <a href="#/events" className="px-4 py-2 hover:bg-emerald-50 hover:text-amber-500 text-gray-700 transition-colors block">Corporate Events</a>
            <a href="#/events" className="px-4 py-2 hover:bg-emerald-50 hover:text-amber-500 text-gray-700 transition-colors block">Wedding</a>
          </DropdownLink>

          <a href="#/gallery" className="hover:text-amber-500 py-4">Gallery</a>
          <a href="#/contact" className="hover:text-amber-500 py-4">Contact Us</a>
          <a href="#/contact" className="ml-4 bg-amber-500 text-white border-2 border-amber-500 px-6 py-2.5 rounded-full hover:bg-white hover:text-amber-500 transition-all font-bold">BOOK NOW</a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="lg:hidden text-3xl text-emerald-950 focus:outline-none z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-2xl p-6 flex flex-col gap-4 lg:hidden z-40 max-h-[80vh] overflow-y-auto"
            >
              <a href="#/" onClick={closeMenu} className="font-bold uppercase tracking-widest text-emerald-950 py-2 border-b border-gray-50">Home</a>
              <a href="#/about" onClick={closeMenu} className="font-bold uppercase tracking-widest text-emerald-950 py-2 border-b border-gray-50">About Us</a>
              
              <div className="py-2 border-b border-gray-50">
                <p className="font-bold uppercase tracking-widest text-amber-500 mb-2 text-xs">Packages</p>
                <div className="pl-4 flex flex-col gap-3">
                  <a href="#/packages" onClick={closeMenu} className="text-gray-600 uppercase text-xs font-bold">Couple Camping</a>
                  <a href="#/packages" onClick={closeMenu} className="text-gray-600 uppercase text-xs font-bold">Family Camping</a>
                </div>
              </div>

              <div className="py-2 border-b border-gray-50">
                <p className="font-bold uppercase tracking-widest text-amber-500 mb-2 text-xs">Activities</p>
                <div className="pl-4 flex flex-col gap-3">
                  <a href="#/adventures" onClick={closeMenu} className="text-gray-600 uppercase text-xs font-bold">River Rafting</a>
                  <a href="#/adventures" onClick={closeMenu} className="text-gray-600 uppercase text-xs font-bold">Bungee Jumping</a>
                </div>
              </div>

              <a href="#/gallery" onClick={closeMenu} className="font-bold uppercase tracking-widest text-emerald-950 py-2 border-b border-gray-50">Gallery</a>
              <a href="#/contact" onClick={closeMenu} className="font-bold uppercase tracking-widest text-emerald-950 py-2 border-b border-gray-50">Contact Us</a>
              
              <a href="#/contact" onClick={closeMenu} className="bg-amber-500 text-white text-center py-4 rounded-full font-bold uppercase tracking-widest mt-4">BOOK NOW</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-emerald-950 font-montserrat text-white">
      <Navbar />
      <Router>
        <Route path="/"><Home /></Route>
        <Route path="/packages"><Packages /></Route>
        <Route path="/service_details"><ServiceDetails /></Route>
        <Route path="/gallery"><Gallery /></Route>
        <Route path="/contact"><Contact /></Route>
      </Router>
      <footer className="bg-emerald-950 px-4 py-10 md:p-16 border-t border-amber-500/20 text-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left mb-8 md:mb-12">
          <div>
            <h3 className="text-amber-500 font-playfair text-lg md:text-xl font-bold mb-3 md:mb-4">WONDROUS CAMP</h3>
            <p className="text-xs md:text-sm opacity-80 leading-relaxed">Where adventure meets relaxation, creating memories and rejuvenating souls in the heart of nature.</p>
          </div>
          <div>
            <h4 className="font-bold mb-3 md:mb-4 uppercase text-xs">Address</h4>
            <p className="text-xs md:text-sm opacity-80">Near Shivpuri Petrol Pump 4 km Leftside road from Hotel Grand Tapovan Kathiaa Village Road, Rishikesh, Uttarakhand 249192</p>
          </div>
          <div>
            <h4 className="font-bold mb-3 md:mb-4 uppercase text-xs">Contact Us</h4>
            <p className="text-xs md:text-sm opacity-80">📞 +91 - 7065477546</p>
            <p className="text-xs md:text-sm opacity-80">✉️ wondrouscamp@gmail.com</p>
          </div>
        </div>
        <p className="text-xs opacity-50">&copy; 2024 All Rights Reserved. Developed by Wondrous Camp.</p>
      </footer>
    </div>
  );
}
export default App;