'use client';
import { MapPin, MessageCircle } from 'lucide-react';
import { CONFIG, getWhatsAppUrl } from '@/data/config';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const LOCATIONS = [
  { name: 'Monte Grande', highlight: true },
  { name: 'Luis Guillón', highlight: false },
  { name: 'El Jagüel', highlight: false },
  { name: 'Canning', highlight: false },
  { name: 'Ezeiza', highlight: false },
  { name: 'Lomas de Zamora', highlight: false },
  { name: 'Temperley', highlight: false },
  { name: 'Adrogué', highlight: false },
  { name: 'Burzaco', highlight: false },
];

export default function Coverage() {
  const { ref, isVisible } = useScrollAnimation();
  const whatsappUrl = getWhatsAppUrl('Hola Electro RB, consulto por disponibilidad en mi zona.');

  return (
    <section id="cobertura" className="py-24 bg-brand-gray-50">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 md:px-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
            Zona de atención
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-xl md:text-2xl font-medium text-brand-gray-700 mb-8">
            <MapPin className="text-brand-yellow w-6 h-6 md:w-8 md:h-8" />
            <p>
              <span className="text-brand-black font-semibold text-2xl md:text-3xl block md:inline mb-1 md:mb-0">Monte Grande y alrededores</span>
              <span className="hidden md:inline"> · </span>
              <span className="block md:inline text-lg md:text-2xl">Zona Sur AMBA</span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto mb-12">
          {LOCATIONS.map((loc) => (
            <span
              key={loc.name}
              className={`px-4 py-2 rounded-full border text-sm md:text-base font-medium transition-colors cursor-default ${
                loc.highlight
                  ? 'bg-brand-yellow border-brand-yellow text-brand-black shadow-sm'
                  : 'bg-white border-brand-gray-200 text-brand-gray-700 hover:border-brand-gray-400 hover:text-brand-black'
              }`}
            >
              {loc.name}
            </span>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <p className="text-brand-gray-600 mb-8 text-sm md:text-base">
            También evaluamos trabajos en CABA según disponibilidad y características del servicio.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-brand-black font-semibold rounded-lg border-2 border-brand-black hover:bg-brand-gray-50 transition-colors focus:ring-4 focus:ring-brand-gray-200 focus:outline-none"
          >
            <MessageCircle className="w-5 h-5" />
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
}
