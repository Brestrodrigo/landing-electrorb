export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
}

export const services: Service[] = [
  {
    id: "instalaciones",
    title: "Instalaciones eléctricas",
    description:
      "Instalaciones nuevas, ampliaciones y modificaciones para viviendas y comercios.",
    icon: "Cable",
  },
  {
    id: "reparaciones",
    title: "Reparaciones eléctricas",
    description:
      "Detección y solución de fallas, cortocircuitos, pérdidas de energía y problemas en circuitos eléctricos.",
    icon: "Wrench",
  },
  {
    id: "reacondicionamiento",
    title: "Reacondicionamiento",
    description:
      "Actualización y mejora de instalaciones existentes para adaptarlas a las necesidades actuales.",
    icon: "RefreshCw",
  },
  {
    id: "tableros",
    title: "Tableros y protecciones",
    description:
      "Armado, modificación y renovación de tableros eléctricos con sus correspondientes protecciones.",
    icon: "LayoutGrid",
  },
  {
    id: "puesta-a-tierra",
    title: "Puesta a tierra",
    description:
      "Instalación y mejora de sistemas de puesta a tierra para aumentar la seguridad de la instalación.",
    icon: "Anchor",
  },
  {
    id: "artefactos",
    title: "Instalación de artefactos",
    description:
      "Colocación y conexión de luminarias, ventiladores, extractores, tomacorrientes, interruptores y otros artefactos eléctricos.",
    icon: "Lightbulb",
  },
  {
    id: "diagnostico",
    title: "Diagnóstico de fallas",
    description:
      "Revisión técnica de instalaciones para identificar el origen de problemas eléctricos y determinar la solución adecuada.",
    icon: "Search",
  },
];
