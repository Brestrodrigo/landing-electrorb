'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { processSteps } from '@/data/content';

export default function Process() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="proceso" className="py-20 bg-gray-50" aria-labelledby="process-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 id="process-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo trabajamos?
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Un proceso claro, simple y transparente.
          </p>
        </div>

        <div className="relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-gray-200" aria-hidden="true"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {processSteps.map((step: { title: string; description: string }, index: number) => (
              <div 
                key={index}
                className={`relative flex flex-col items-start lg:items-center text-left lg:text-center transition-all duration-700 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-gray-50 z-10 px-4 mb-4 lg:mb-6 flex items-center">
                  <span className="text-5xl lg:text-6xl font-bold text-[#FFED00]">
                    0{index + 1}
                  </span>
                  <span className="text-gray-300 mx-3 text-3xl lg:hidden font-light"> — </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
