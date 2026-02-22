import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import LineupSection from './components/LineupSection';
import TicketSection from './components/TicketSection';
import ContactSection from './components/ContactSection';
import FloatingParticles from './components/FloatingParticles';
import BackgroundMusic from './components/BackgroundMusic';
import { Music, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white relative overflow-hidden selection:bg-pink-500 selection:text-white">
      <FloatingParticles />
      <BackgroundMusic videoId="Df9GrBwgyjQ" />
      
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="font-display text-2xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 neon-text cursor-pointer"
            onClick={scrollToTop}
          >
            ULAS
          </div>
          <a 
            href="https://band.us/band/100749596/post/9" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-2 rounded-full font-bold transition-transform hover:scale-105 shadow-[0_0_15px_rgba(236,72,153,0.5)] text-sm flex items-center gap-2"
          >
            <Music size={16} />
            파티 신청하기
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <InfoSection />
        <LineupSection />
        <TicketSection />
      </main>

      <ContactSection />

      {/* Scroll To Top Button */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-white/10 hover:bg-pink-600 backdrop-blur-md border border-white/20 text-white p-3 rounded-full shadow-lg shadow-pink-500/30 transition-colors duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;