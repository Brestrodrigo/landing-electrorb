"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { projects } from "@/data/projects";
import { Camera } from "lucide-react";

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="trabajos" className="bg-black py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Trabajos realizados</h2>
          <p className="text-xl text-[#FFED00] mb-4">Trabajo real. Resultado real.</p>
          <p className="text-gray-400 max-w-2xl text-lg">
            Cada instalación tiene sus particularidades. Por eso mostramos algunos de los trabajos realizados por Electro RB.
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project: any, index: number) => {
            const isFeatured = index === 0;
            return (
              <div 
                key={index}
                className={`bg-gray-900 rounded-xl overflow-hidden transition-all duration-700 border border-gray-800 ${
                  isFeatured ? "md:col-span-2 lg:col-span-2" : ""
                } ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-full h-64 bg-gray-800 flex items-center justify-center border-b border-dashed border-gray-700">
                  <div className="text-center text-gray-500 flex flex-col items-center">
                    <Camera size={32} className="mb-2" />
                    <span>[PROJECT_IMAGE_0{index + 1}]</span>
                  </div>
                </div>
                
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">{project.title}</h3>
                  
                  {project.situation && (
                    <div className="space-y-5">
                      <div>
                        <span className="inline-block bg-[#FFED00] text-black text-xs font-bold px-2 py-1 rounded uppercase tracking-wider mb-2">Situación</span>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">{project.situation}</p>
                      </div>
                      
                      {project.work && (
                        <div>
                          <span className="inline-block bg-[#FFED00] text-black text-xs font-bold px-2 py-1 rounded uppercase tracking-wider mb-2">Trabajo</span>
                          <p className="text-gray-300 text-sm md:text-base leading-relaxed">{project.work}</p>
                        </div>
                      )}
                      
                      {project.result && (
                        <div>
                          <span className="inline-block bg-[#FFED00] text-black text-xs font-bold px-2 py-1 rounded uppercase tracking-wider mb-2">Resultado</span>
                          <p className="text-gray-300 text-sm md:text-base leading-relaxed">{project.result}</p>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {!project.situation && project.description && (
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
