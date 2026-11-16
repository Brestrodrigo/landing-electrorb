'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { aboutValues } from '@/data/content';

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="nosotros" className="py-20 bg-white" aria-labelledby="about-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué Electro RB?
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Porque una instalación eléctrica no admite improvisaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aboutValues.map((value: { title: string; description: string }, index: number) => (
            <div 
              key={index}
              className={`p-6 rounded-lg bg-gray-50 border-l-4 border-[#FFED00] transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div 
          className={`text-center max-w-2xl mx-auto transition-all duration-700 delay-500 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-md md:text-lg italic text-gray-500">
            &quot;Reparar sin saber qué está pasando no es reparar: es cruzar los dedos.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
