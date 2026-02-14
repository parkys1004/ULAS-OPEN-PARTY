import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket, Copy, CheckCircle, CreditCard, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const TicketSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("657201-04-106062");
    setCopied(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ticket" className="py-20 bg-gradient-to-t from-[#0f0c29] to-[#24243e] relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl text-white mb-4">TICKETS</h2>
          <p className="text-gray-400">망설이는 순간 매진! 지금 바로 신청하세요.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Price Cards */}
          <div className="space-y-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass p-8 rounded-3xl border-l-4 border-pink-500 flex justify-between items-center"
            >
              <div>
                <h3 className="text-pink-400 font-bold text-lg mb-1">PRE-SALE</h3>
                <p className="text-gray-300 text-sm">사전 예매 할인</p>
              </div>
              <div className="text-right">
                <span className="text-4xl font-display font-bold text-white">15,000</span>
                <span className="text-gray-400 ml-1">KRW</span>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass p-8 rounded-3xl border-l-4 border-gray-500 flex justify-between items-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
            >
              <div>
                <h3 className="text-gray-300 font-bold text-lg mb-1">AT DOOR</h3>
                <p className="text-gray-400 text-sm">현장 구매</p>
              </div>
              <div className="text-right">
                <span className="text-4xl font-display font-bold text-white">20,000</span>
                <span className="text-gray-400 ml-1">KRW</span>
              </div>
            </motion.div>

            {/* Bank Info */}
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 mt-8">
              <h4 className="text-gray-400 text-sm font-bold uppercase mb-4 flex items-center gap-2">
                <CreditCard size={16} /> 입금 계좌
              </h4>
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <p className="text-xl font-bold text-white">국민은행 657201-04-106062</p>
                  <p className="text-sm text-gray-400">예금주: 전형욱</p>
                </div>
                <button 
                  onClick={handleCopy}
                  className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${copied ? 'bg-green-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'}`}
                >
                  {copied ? <CheckCircle size={18} /> : <Copy size={18} />}
                  {copied ? '복사완료!' : '계좌복사'}
                </button>
              </div>
            </div>
          </div>

          {/* Application */}
          <div className="glass p-10 rounded-3xl flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[400px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500 blur-[60px] opacity-40 rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500 blur-[60px] opacity-40 rounded-full"></div>

            <h3 className="text-3xl font-bold mb-8">신청 방법</h3>
            
            <div className="space-y-4 w-full">
              <a 
                href="https://band.us/n/a0a5b4YfId7dy" 
                target="_blank" 
                rel="noreferrer"
                className="block w-full bg-[#00c300] hover:bg-[#00e000] text-white py-5 rounded-xl font-bold shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-3 text-lg"
              >
                <span className="font-display font-black">N</span> 네이버 밴드 '울라스' 가입하기
              </a>
              <div className="w-full bg-[#FEE500] text-black py-5 rounded-xl font-bold shadow-lg flex items-center justify-center gap-3 text-lg">
                <MessageCircle size={24} /> 카카오톡 ID: 84marco
              </div>
            </div>
            <p className="mt-8 text-sm text-gray-400">* 카카오페이 결제 가능</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketSection;