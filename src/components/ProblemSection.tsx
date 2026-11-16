"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ProblemSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="problema" className="bg-gray-50 py-24 px-4 md:px-8">
      <div 
        ref={ref}
        className={`max-w-3xl mx-auto text-center transition-all duration-1000 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          ¿Necesitás resolver un problema eléctrico?
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Una falla, una instalación que quedó chica, un tablero que necesita actualizarse o simplemente querés hacer una instalación nueva.
        </p>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          En Electro RB evaluamos cada trabajo para encontrar una solución segura, funcional y adecuada a las necesidades reales de la instalación.
        </p>
        <blockquote className="border-l-4 border-[#FFED00] pl-6 py-2 text-xl md:text-2xl italic text-gray-800 mx-auto w-fit">
          "No se trata solamente de conectar cables. Se trata de hacer el trabajo correctamente."
        </blockquote>
      </div>
    </section>
  );
}
