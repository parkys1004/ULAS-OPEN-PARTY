import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-10">
      {/* Background Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent opacity-50 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 max-w-5xl mx-auto"
      >
        <h1 className="font-display text-6xl md:text-9xl mb-2 bg-clip-text text-transparent bg-gradient-to-br from-white via-pink-200 to-purple-400 drop-shadow-2xl">
          ULAS
        </h1>
        <h2 className="font-display text-4xl md:text-6xl mb-12 text-white/80 tracking-widest">
          OPEN PARTY
        </h2>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center text-base md:text-xl font-light text-gray-200 mb-12"
        >
          <div className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors group cursor-default">
            <Calendar className="text-pink-500 group-hover:scale-110 transition-transform" size={20} />
            <span className="font-bold">3월 14일 (토) 9 PM</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors group cursor-default">
            <MapPin className="text-purple-500 group-hover:scale-110 transition-transform" size={20} />
            <span className="font-bold">BAR DEL LUNA</span>
          </div>
        </motion.div>

        {/* Intro Text Block Moved Here */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="space-y-4"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 backdrop-blur-sm mb-2">
            <span className="text-pink-300 font-bold tracking-widest text-sm">2026. 03. 14</span>
          </div>
          
          <h3 className="text-lg md:text-2xl text-white/90 leading-relaxed font-light">
            라틴인들의 뜨거운 열정으로 넘칠 <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">'울라스'</span> 오픈파티가<br className="hidden md:block" />
            <span className="inline-block mt-1">드디어 시작합니다!! 🥳🎉🧧</span>
          </h3>
          
          <p className="text-gray-400 text-sm md:text-lg font-light tracking-wide">
            울산에서 새롭게 태어나는 라틴 커뮤니티,<br className="md:hidden"/> 그리고 그 첫 번째 밤
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-12 bg-gradient-to-b from-pink-500/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;