'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { getWhatsAppUrl } from '@/data/config';
import { ClipboardCheck, SearchCheck, MessageCircle } from 'lucide-react';

export default function Pricing() {
  const { ref, isVisible } = useScrollAnimation();
  const whatsappUrl = getWhatsAppUrl('Hola Electro RB, vi la página web y quisiera consultar por un trabajo eléctrico.');

  return (
    <section id="presupuestos" className="py-20 bg-white" aria-labelledby="pricing-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 id="pricing-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Presupuestos y visitas
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Cada trabajo necesita una evaluación diferente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Block 1 */}
          <div 
            className={`bg-white border border-gray-100 rounded-xl p-8 shadow-sm border-t-4 border-t-gray-200 hover:border-t-[#FFED00] transition-all duration-700 delay-100 transform flex flex-col h-full ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gray-50 rounded-lg mr-4">
                <ClipboardCheck className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Presupuesto sin cargo</h3>
            </div>
            <p className="text-gray-600 text-lg flex-grow">
              Para trabajos donde es posible realizar un relevamiento visual, tomar medidas y preparar una cotización sin intervenir en la instalación.
            </p>
          </div>

          {/* Block 2 */}
          <div 
            className={`bg-gray-50 rounded-xl p-8 shadow-md border-t-4 border-t-[#FFED00] transition-all duration-700 delay-300 transform flex flex-col h-full ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-white rounded-lg mr-4 shadow-sm">
                <SearchCheck className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Visita técnica y diagnóstico</h3>
            </div>
            <p className="text-gray-600 text-lg mb-4">
              Cuando existe una falla o problema que requiere intervenir en la instalación para encontrar su origen, se realiza una visita técnica de diagnóstico.
            </p>
            <p className="text-gray-600 mb-6 flex-grow">
              La visita incluye la revisión e intervención necesaria para determinar el problema y proponer una solución.
            </p>
            <div className="mt-auto bg-[#FFED00]/10 border border-[#FFED00]/20 rounded-lg p-4">
              <p className="text-sm font-medium text-gray-900">
                <span className="font-bold text-[#b3a600]">Nota:</span> Si aceptás realizar el trabajo, el valor de la visita técnica puede descontarse del presupuesto final.
              </p>
            </div>
          </div>
        </div>

        <div 
          className={`flex justify-center transition-all duration-700 delay-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 bg-[#FFED00] hover:bg-[#e6d500] rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFED00]"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Consultar por mi trabajo
          </a>
        </div>
      </div>
    </section>
  );
}
