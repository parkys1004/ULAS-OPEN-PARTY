import React from 'react';
import { Phone, Music } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-display text-4xl text-white mb-2 tracking-widest">ULAS</h2>
            <p className="text-gray-500 text-sm">ULSAN LATIN SPIRIT</p>
            <p className="text-gray-600 mt-4 text-xs max-w-xs">
              춤과 열정이 있는 곳, 울라스에서 새로운 에너지를 느껴보세요.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-pink-500 font-bold uppercase tracking-wider text-sm mb-4">Contact US</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:010-9282-1879" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-pink-500 transition-colors">
                  <Phone size={18} />
                </span>
                <div className="flex flex-col items-start">
                  <span className="text-xs text-gray-500">시샵</span>
                  <span className="font-bold">상원: 010-9282-1879</span>
                </div>
              </a>
              <a href="tel:010-9938-2848" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-yellow-500 transition-colors">
                  <Phone size={18} />
                </span>
                <div className="flex flex-col items-start">
                  <span className="text-xs text-gray-500">대표</span>
                  <span className="font-bold">마르코: 010-9938-2848</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2026 ULSAN LATIN SPIRIT. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Music size={12} />
            <span>Dance with Passion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;