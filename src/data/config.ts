// ============================================
// CONFIGURACIÓN CENTRAL DE ELECTRO RB
// Modificar estos valores para actualizar toda la página
// ============================================

export const CONFIG = {
  brand: {
    name: "Electro RB",
    subtitle: "Electricidad domiciliaria y comercial",
    tagline: "Tu instalación en buenas manos.",
  },
  contact: {
    whatsappNumber: "541131942345",
    whatsappMessage:
      "Hola Electro RB, vi la página web y quisiera consultar por un trabajo eléctrico.",
    // TODO: Reemplazar con la URL real de Instagram
    instagramUrl: "[INSTAGRAM_URL]",
  },
  location: {
    primary: "Monte Grande y alrededores",
    region: "Zona Sur AMBA",
    areas: [
      "Monte Grande",
      "Luis Guillón",
      "El Jagüel",
      "Canning",
      "Ezeiza",
      "Lomas de Zamora",
      "Temperley",
      "Adrogué",
      "Burzaco",
    ],
    cabaNote:
      "También evaluamos trabajos en CABA según disponibilidad y características del servicio.",
  },
  seo: {
    title:
      "Electro RB · Electricista en Monte Grande y Zona Sur | Instalaciones y reparaciones eléctricas",
    description:
      "Electricista en Monte Grande y Zona Sur. Instalaciones eléctricas, reparaciones, tableros, puesta a tierra y reacondicionamiento para viviendas y comercios. Consultá por WhatsApp.",
    keywords: [
      "electricista Monte Grande",
      "electricista zona sur",
      "electricista Ezeiza",
      "electricista Canning",
      "electricista Lomas de Zamora",
      "electricidad domiciliaria",
      "electricidad comercial",
      "reparación eléctrica",
      "instalación eléctrica",
      "tablero eléctrico",
      "puesta a tierra",
    ],
    ogImage: "/og-image.jpg",
    url: "https://electrorb.com.ar",
  },
} as const;

export function getWhatsAppUrl(customMessage?: string): string {
  const message = encodeURIComponent(
    customMessage || CONFIG.contact.whatsappMessage
  );
  return `https://wa.me/${CONFIG.contact.whatsappNumber}?text=${message}`;
}

export function getWhatsAppUrlForService(service: string): string {
  const message = encodeURIComponent(
    `Hola Electro RB, vi la página web y quisiera consultar por: ${service}.`
  );
  return `https://wa.me/${CONFIG.contact.whatsappNumber}?text=${message}`;
}
