export interface Project {
  id: string;
  title: string;
  situation?: string;
  work?: string;
  result?: string;
  description?: string;
  image: string; // Placeholder path
  beforeImage?: string;
  afterImage?: string;
}

export const projects: Project[] = [
  {
    id: "reemplazo-alimentacion",
    title: "Reemplazo de alimentación principal",
    situation:
      "La vivienda contaba con una alimentación de 4 mm² que no resultaba adecuada para las necesidades de la instalación.",
    work:
      "Se reemplazó la alimentación por conductores de 10 mm², adecuando la sección del cableado a los requerimientos de la instalación.",
    result:
      "Una alimentación correctamente dimensionada y preparada para las demandas de la vivienda.",
    image: "[PROJECT_IMAGE_01]",
  },
  {
    id: "actualizacion-tablero",
    title: "Actualización de tablero eléctrico",
    description:
      "Revisión y reorganización del tablero, incorporando las protecciones necesarias y mejorando la distribución de los circuitos.",
    image: "[PROJECT_IMAGE_02]",
  },
  {
    id: "renovacion-mecanismos",
    title: "Renovación de mecanismos eléctricos",
    description:
      "Reemplazo de módulos, tomacorrientes e interruptores deteriorados o desactualizados, mejorando tanto la funcionalidad como la terminación de la instalación.",
    image: "[PROJECT_IMAGE_03]",
  },
];
