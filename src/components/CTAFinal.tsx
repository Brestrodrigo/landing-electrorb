'use client';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/data/config';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function CTAFinal() {
  const { ref, isVisible } = useScrollAnimation();
  const whatsappUrl = getWhatsAppUrl('Hola Electro RB, tengo un trabajo eléctrico pendiente y quiero consultar.');

  return (
    <section id="contacto" className="relative py-24 bg-brand-black overflow-hidden border-t-4 border-brand-yellow">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          ¿Tenés un trabajo eléctrico pendiente?
        </h2>
        <p className="text-lg md:text-xl text-brand-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Contame qué necesitás hacer y vemos cuál es la mejor manera de resolverlo.
        </p>

        <div className="flex flex-col items-center gap-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-yellow text-brand-black text-lg font-bold rounded-lg hover:bg-[#FFE000] hover:scale-105 transition-all focus:ring-4 focus:ring-brand-yellow/50 focus:outline-none shadow-lg shadow-brand-yellow/20"
          >
            <MessageCircle className="w-6 h-6" />
            Hablemos por WhatsApp
          </a>

          <p className="text-sm md:text-base text-brand-gray-500 max-w-lg">
            También podés enviarnos fotos o videos para que podamos entender mejor el trabajo antes de coordinar.
          </p>
        </div>
      </div>
    </section>
  );
}
