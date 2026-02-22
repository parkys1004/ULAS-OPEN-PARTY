import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Map, Navigation } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {/* Time Card */}
          <div className="glass p-6 md:p-8 rounded-3xl relative overflow-hidden group hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-500">
            <div className="absolute top-0 right-0 p-6 md:p-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <Clock className="w-24 h-24 md:w-32 md:h-32 lg:w-[150px] lg:h-[150px]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center gap-3 text-pink-300">
              <Clock className="animate-pulse w-6 h-6 md:w-8 md:h-8" /> TIME TABLE
            </h3>
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-lg md:text-xl font-light">DATE</span>
                <span className="text-xl md:text-2xl font-bold text-white">2026. 03. 14 <span className="text-pink-500 text-base md:text-lg">(토)</span></span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-lg md:text-xl font-light">OPEN</span>
                <span className="text-xl md:text-2xl font-bold text-white">21:00 PM</span>
              </div>
              <div className="mt-6 pt-2 md:pt-4">
                 <p className="text-gray-300 leading-relaxed text-sm md:text-base break-keep">
                   울산 라틴 스피릿의 화려한 시작을 알리는 밤!<br/>
                   뜨거운 열정과 음악이 함께하는 특별한 파티에 여러분을 초대합니다.
                 </p>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="glass p-6 md:p-8 rounded-3xl relative overflow-hidden group hover:shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all duration-500">
             <div className="absolute top-0 right-0 p-6 md:p-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <Map className="w-24 h-24 md:w-32 md:h-32 lg:w-[150px] lg:h-[150px]" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center gap-3 text-yellow-300">
              <Navigation className="animate-bounce w-6 h-6 md:w-8 md:h-8" /> LOCATION
            </h3>
            <div className="space-y-4 relative z-10">
              <div className="flex flex-col gap-2 border-b border-white/10 pb-4">
                <span className="text-lg md:text-xl font-bold text-white">BAR DEL LUNA</span>
                <span className="text-base md:text-lg text-gray-300">바 델 루나 6층</span>
              </div>
              <div className="flex flex-col gap-1 border-b border-white/10 pb-4">
                <span className="text-gray-400 text-sm md:text-base">ADDRESS</span>
                <span className="text-base md:text-lg break-keep">울산 남구 달동 왕생로45번길 8</span>
              </div>
              <div className="pt-2 md:pt-4 flex flex-col sm:flex-row gap-3 md:gap-4">
                <a 
                  href="https://map.naver.com/v5/search/울산%20남구%20달동%20왕생로45번길%208" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white py-3 rounded-xl font-bold text-center transition-transform active:scale-95 shadow-lg flex justify-center items-center gap-2 text-sm md:text-base"
                >
                  네이버 지도
                </a>
                <a 
                   href="https://map.kakao.com/link/search/울산%20남구%20달동%20왕생로45번길%208"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black py-3 rounded-xl font-bold text-center transition-transform active:scale-95 shadow-lg flex justify-center items-center gap-2 text-sm md:text-base"
                >
                  카카오 맵
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoSection;