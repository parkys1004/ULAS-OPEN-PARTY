import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Disc, Video, Users, Sparkles } from 'lucide-react';

const LineupSection: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  };

  const performers = [
    { 
      name: "HEMAS", 
      krName: "헤마스",
      desc: "부산.울산 살사 퍼포먼스 팀 시즌6 초연", 
      gradient: "from-pink-500 via-rose-500 to-yellow-500" 
    },
    { 
      name: "FEEL DANCE", 
      krName: "필댄스팀",
      desc: "삘생삘사 바차타 공연", 
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500" 
    },
    { 
      name: "DENIS & ELLADA", 
      krName: "데니스 & 엘라다",
      desc: "해외 바차타 댄서 부트캠프팀 공연", 
      gradient: "from-cyan-500 via-blue-500 to-indigo-500" 
    },
  ];

  return (
    <section className="py-20 relative bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="font-display text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 neon-text"
          >
            LINE UP
          </motion.h2>
          <p className="text-gray-400">최고의 아티스트들과 함께하는 뜨거운 밤</p>
        </div>

        {/* Special Guests - Text & Icon Version */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {/* MC */}
          <motion.div variants={item} className="glass relative p-8 rounded-[2rem] flex flex-col items-center justify-center text-center group overflow-hidden border border-white/5 hover:border-pink-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-pink-500/5 group-hover:bg-pink-500/10 transition-colors duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-pink-600 to-purple-600 flex items-center justify-center mb-6 shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform duration-300">
                <Mic className="text-white w-10 h-10" />
              </div>
              <h3 className="text-pink-400 font-bold tracking-[0.2em] text-xs mb-2 uppercase">Master of Ceremony</h3>
              <h2 className="text-4xl font-display text-white mb-1">LION GAK</h2>
              <p className="text-white/50 text-sm">라이온 각</p>
            </div>
          </motion.div>

          {/* DJ */}
          <motion.div variants={item} className="glass relative p-10 rounded-[2rem] flex flex-col items-center justify-center text-center group overflow-hidden border border-white/5 hover:border-yellow-500/30 transition-all duration-500 md:-translate-y-4 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-yellow-500/5 group-hover:bg-yellow-500/10 transition-colors duration-500"></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/20 blur-3xl rounded-full pointer-events-none"></div>
            <div className="relative z-10">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-yellow-500 to-orange-500 flex items-center justify-center mb-6 shadow-lg shadow-yellow-500/20 group-hover:rotate-180 transition-transform duration-700 ease-in-out">
                <Disc className="text-white w-12 h-12" />
              </div>
              <h3 className="text-yellow-400 font-bold tracking-[0.2em] text-xs mb-2 uppercase">Main DJ</h3>
              <h2 className="text-5xl font-display text-white mb-1 gold-text">DOBERMAN</h2>
              <p className="text-white/50 text-sm">도베르만</p>
            </div>
          </motion.div>

          {/* Video */}
          <motion.div variants={item} className="glass relative p-8 rounded-[2rem] flex flex-col items-center justify-center text-center group overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors duration-500"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform duration-300">
                <Video className="text-white w-10 h-10" />
              </div>
              <h3 className="text-cyan-400 font-bold tracking-[0.2em] text-xs mb-2 uppercase">Videography</h3>
              <h2 className="text-3xl font-display text-white mb-1">PURNI & SUJI</h2>
              <p className="text-white/50 text-sm">푸르니 & 수지</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Performers - Updated Version */}
        <h3 className="text-center text-3xl font-bold mb-12 flex items-center justify-center gap-3">
          <Users className="text-purple-400" /> PERFORMANCES
        </h3>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {performers.map((p, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              whileHover={{ y: -10 }}
              className="relative group cursor-default"
            >
              {/* Blur Glow Background */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${p.gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}></div>
              
              {/* Card Content */}
              <div className="relative h-full bg-[#13111C] border border-white/10 p-8 rounded-2xl flex flex-col items-center justify-center text-center overflow-hidden">
                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
                
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <Sparkles className="text-white/40" size={24} />
                </div>

                <span className="text-xs md:text-sm font-bold text-gray-400 mb-4 block break-keep leading-relaxed">
                   💙 {p.desc}
                </span>
                
                <h4 className={`text-3xl md:text-4xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r ${p.gradient} drop-shadow-sm mb-1`}>
                    {p.name}
                </h4>

                <p className="text-white/50 text-sm">{p.krName}</p>
                
                <div className={`mt-6 w-12 h-1 rounded-full bg-gradient-to-r ${p.gradient} opacity-50 group-hover:w-full transition-all duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LineupSection;