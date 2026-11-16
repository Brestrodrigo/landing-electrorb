export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "viviendas-comercios",
    question: "¿Hacen trabajos en viviendas y comercios?",
    answer:
      "Sí. Realizamos trabajos eléctricos tanto domiciliarios como comerciales.",
  },
  {
    id: "presupuesto-whatsapp",
    question: "¿Puedo pedir un presupuesto por WhatsApp?",
    answer:
      "Sí. Podés enviarnos una descripción del trabajo, fotos o videos de la instalación y te indicaremos cómo avanzar.",
  },
  {
    id: "presupuestos-sin-cargo",
    question: "¿Todos los presupuestos son sin cargo?",
    answer:
      "Depende del tipo de trabajo. Cuando se puede presupuestar mediante un relevamiento visual, el presupuesto no tiene costo. Si es necesario intervenir la instalación para detectar una falla, corresponde una visita técnica de diagnóstico.",
  },
  {
    id: "falla-desconocida",
    question: "¿Qué pasa si tengo una falla y no sé cuál es el problema?",
    answer:
      "Podés solicitar una visita técnica. Evaluamos la instalación para identificar el origen de la falla y determinar qué solución necesita.",
  },
  {
    id: "fuera-monte-grande",
    question: "¿Trabajan fuera de Monte Grande?",
    answer:
      "Sí. Trabajamos en distintas localidades de Zona Sur y evaluamos trabajos en otras zonas según distancia y disponibilidad.",
  },
];
