export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Contacto",
    description:
      "Contanos qué necesitás, qué problema estás teniendo o qué instalación querés realizar.",
  },
  {
    number: "02",
    title: "Relevamiento",
    description:
      "Según el trabajo, realizamos una visita para evaluar la instalación, tomar medidas y determinar qué solución necesita.",
  },
  {
    number: "03",
    title: "Presupuesto",
    description:
      "Te presentamos el trabajo a realizar y los materiales necesarios, de forma clara y sin vueltas.",
  },
  {
    number: "04",
    title: "Ejecución",
    description:
      "Realizamos el trabajo acordado cuidando la seguridad, la funcionalidad y la terminación de la instalación.",
  },
];

export interface AboutValue {
  title: string;
  description: string;
}

export const aboutValues: AboutValue[] = [
  {
    title: "Trabajo profesional",
    description:
      "Cada trabajo se realiza buscando una solución adecuada a la instalación y a su uso.",
  },
  {
    title: "Criterio técnico",
    description:
      "La elección de conductores, protecciones y componentes debe responder a las necesidades reales del circuito.",
  },
  {
    title: "Prolijidad",
    description:
      "Cuidamos tanto el funcionamiento como la terminación del trabajo.",
  },
  {
    title: "Atención personalizada",
    description:
      "Te explicamos qué encontramos, qué solución proponemos y qué implica realizarla.",
  },
  {
    title: "Diagnóstico antes de intervenir",
    description: "Cuando existe una falla, primero buscamos su origen.",
  },
];
