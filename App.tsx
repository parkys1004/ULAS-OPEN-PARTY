import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import LineupSection from './components/LineupSection';
import TicketSection from './components/TicketSection';
import ContactSection from './components/ContactSection';
import FloatingParticles from './components/FloatingParticles';
import { Music } from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white relative overflow-hidden selection:bg-pink-500 selection:text-white">
      <FloatingParticles />
      
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-display text-2xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 neon-text cursor-pointer">
            ULAS
          </div>
          <a href="#ticket" className="bg-pink-600 hover:bg-pink-500 text-white px-6 py-2 rounded-full font-bold transition-transform hover:scale-105 shadow-[0_0_15px_rgba(236,72,153,0.5)] text-sm flex items-center gap-2">
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
    </div>
  );
};

export default App;