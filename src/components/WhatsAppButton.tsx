'use client';
import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/data/config';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappUrl = getWhatsAppUrl('Hola Electro RB, vi la página web y quisiera consultar por un trabajo eléctrico.');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        title="Consultá por WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-brand-yellow text-brand-black rounded-full shadow-lg hover:bg-[#FFE000] hover:scale-110 transition-all focus:outline-none focus:ring-4 focus:ring-brand-yellow/50"
      >
        <MessageCircle className="w-7 h-7 relative z-10" />
        
        {/* Pulsing ring animation */}
        <span className="absolute inset-0 rounded-full bg-brand-yellow opacity-75 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
        
        {/* Tooltip for desktop */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-brand-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md hidden md:block">
          Consultá por WhatsApp
          <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-brand-gray-900"></span>
        </span>
      </a>
    </div>
  );
}
