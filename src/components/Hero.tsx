"use client";

import { useEffect, useState } from "react";
import { MapPin, MessageCircle, ArrowDown } from "lucide-react";
import { getWhatsAppUrl, CONFIG } from "@/data/config";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref } = useScrollAnimation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-[calc(100vh-80px)] pt-28 pb-16 md:pt-32 md:pb-24 flex items-center bg-white overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={ref}>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Content (60%) */}
          <div className={`w-full lg:w-3/5 space-y-8 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-sm font-medium text-gray-700">
              <MapPin size={16} className="text-[#FFED00] fill-black" />
              <span>Monte Grande y alrededores · Zona Sur AMBA</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Soluciones eléctricas <span className="text-[#FFED00]">seguras</span>, <span className="text-[#FFED00]">prolijas</span> y pensadas para cada instalación.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
              Realizamos instalaciones, reparaciones, reacondicionamientos y mantenimiento eléctrico para viviendas, comercios e industrias.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FFED00] hover:bg-[#e6d500] text-black font-semibold py-3.5 px-6 rounded-md transition-all shadow-sm hover:shadow-md"
              >
                <MessageCircle size={20} />
                <span>Consultar por WhatsApp</span>
              </a>
              <a
                href="#servicios"
                onClick={(e) => handleSmoothScroll(e, "#servicios")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-gray-200 hover:border-gray-900 text-gray-900 font-semibold py-3 px-6 rounded-md transition-all"
              >
                <span>Ver servicios</span>
                <ArrowDown size={18} />
              </a>
            </div>
          </div>
          
          {/* Right Visual (40%) */}
          <div className={`w-full lg:w-2/5 relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="relative aspect-square md:aspect-[4/5] w-full rounded-2xl bg-zinc-900 overflow-hidden shadow-2xl flex items-center justify-center p-8 text-center border-4 border-white">
              {/* Subtle grid pattern inside placeholder */}
              <div className="absolute inset-0 opacity-20 pointer-events-none" 
                   style={{ backgroundImage: 'linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              
              <p className="text-zinc-400 font-medium z-10">
                [Fotografía profesional — Electricista trabajando en tablero eléctrico]
              </p>
            </div>
            
            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFED00] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Tu instalación</p>
                <p className="text-xs font-medium text-gray-500">en buenas manos.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
