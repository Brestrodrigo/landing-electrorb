"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Cable, Wrench, RefreshCw, LayoutGrid, Anchor, Lightbulb, Search } from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, any> = { Cable, Wrench, RefreshCw, LayoutGrid, Anchor, Lightbulb, Search };

export default function Services() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicios" className="bg-white py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros servicios</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones eléctricas para viviendas, comercios y pequeñas instalaciones.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service: any, index: number) => {
            const IconComponent = iconMap[service.icon] || Lightbulb;
            return (
              <div 
                key={index}
                className={`bg-white border border-gray-100 rounded-xl p-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-xl hover:border-t-4 hover:border-t-[#FFED00] group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-5 text-[#FFED00]">
                  <IconComponent size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
