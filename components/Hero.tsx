import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent opacity-50 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10"
      >
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-pink-400 font-bold tracking-[0.2em] mb-4 text-sm md:text-lg uppercase"
        >
          Ulsan Latin Spirit New Community
        </motion.p>
        
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-2 bg-clip-text text-transparent bg-gradient-to-br from-white via-pink-200 to-purple-400 drop-shadow-2xl">
          ULAS
        </h1>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-8 text-white/90">
          OPEN PARTY
        </h2>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center text-lg md:text-xl font-light text-gray-200"
        >
          <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
            <Calendar className="text-pink-500" />
            <span className="font-bold">2026. 03. 14 (SAT)</span>
            <span className="text-sm ml-1 text-gray-300">9 PM</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
            <MapPin className="text-purple-500" />
            <span className="font-bold">BAR DEL LUNA</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs tracking-widest uppercase">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-12 bg-gradient-to-b from-pink-500 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
};

export default Hero;