import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Coverage from "@/components/Coverage";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CONFIG } from "@/data/config";

// JSON-LD structured data for local business SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: CONFIG.brand.name,
  description: CONFIG.seo.description,
  url: CONFIG.seo.url,
  telephone: CONFIG.contact.whatsappNumber,
  areaServed: CONFIG.location.areas.map((area) => ({
    "@type": "City",
    name: area,
  })),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Monte Grande",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.7818,
    longitude: -58.4628,
  },
  serviceType: [
    "Instalaciones eléctricas",
    "Reparaciones eléctricas",
    "Reacondicionamiento eléctrico",
    "Tableros y protecciones",
    "Puesta a tierra",
    "Instalación de artefactos",
    "Diagnóstico de fallas",
  ],
  priceRange: "$$",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <Services />
        <Projects />
        <About />
        <Process />
        <Pricing />
        <Coverage />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
