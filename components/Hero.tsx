import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-16 md:pt-10">
      {/* Background Radial Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent opacity-50 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 max-w-5xl mx-auto"
      >
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-2 bg-clip-text text-transparent bg-gradient-to-br from-white via-pink-200 to-purple-400 drop-shadow-2xl">
          ULAS
        </h1>
        <h2 className="font-display text-3xl sm:text-4xl md:text-6xl mb-8 md:mb-12 text-white/80 tracking-widest">
          OPEN PARTY
        </h2>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center items-center text-sm md:text-xl font-light text-gray-200 mb-8 md:mb-12 w-full px-4 md:px-0"
        >
          <div className="flex items-center justify-center gap-2 bg-white/5 px-5 py-3 md:px-6 rounded-full backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors group cursor-default w-full sm:w-auto">
            <Calendar className="text-pink-500 group-hover:scale-110 transition-transform w-4 h-4 md:w-5 md:h-5" />
            <span className="font-bold whitespace-nowrap">3월 14일 (토) 9 PM</span>
          </div>
          <div className="flex items-center justify-center gap-2 bg-white/5 px-5 py-3 md:px-6 rounded-full backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors group cursor-default w-full sm:w-auto">
            <MapPin className="text-purple-500 group-hover:scale-110 transition-transform w-4 h-4 md:w-5 md:h-5" />
            <span className="font-bold whitespace-nowrap">BAR DEL LUNA</span>
          </div>
        </motion.div>

        {/* Intro Text Block Moved Here */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="space-y-3 md:space-y-4 px-2"
        >
          <div className="inline-block px-3 py-1 md:px-4 rounded-full border border-pink-500/30 bg-pink-500/10 backdrop-blur-sm mb-2">
            <span className="text-pink-300 font-bold tracking-widest text-xs md:text-sm">2026. 03. 14</span>
          </div>
          
          <h3 className="text-lg md:text-2xl text-white/90 leading-relaxed font-light break-keep">
            라틴인들의 뜨거운 열정으로 넘칠 <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">'울라스'</span> 오픈파티가<br className="hidden md:block" />
            <span className="inline-block mt-1">드디어 시작합니다!! 🥳🎉🧧</span>
          </h3>
          
          <p className="text-gray-400 text-sm md:text-lg font-light tracking-wide break-keep">
            울산에서 새롭게 태어나는 라틴 커뮤니티,<br className="md:hidden"/> 그리고 그 첫 번째 밤
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-pink-500/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;