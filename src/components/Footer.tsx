import Image from 'next/image';
import { MessageCircle, Instagram, MapPin } from 'lucide-react';
import { CONFIG, getWhatsAppUrl } from '@/data/config';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = getWhatsAppUrl('Hola, los vi en la web y quiero hacer una consulta.');

  return (
    <footer className="bg-brand-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Image
              src="/images/logo-horizontal.png"
              alt="Electro RB - Servicios Eléctricos"
              width={200}
              height={56}
              className="h-12 w-auto mb-4"
            />
            <p className="text-brand-gray-400 mb-6 max-w-sm">
              Electricidad domiciliaria y comercial.
            </p>
            <div className="flex gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gray-400 hover:text-brand-yellow transition-colors"
                aria-label="Contactar por WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href={CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gray-400 hover:text-brand-yellow transition-colors"
                aria-label="Visitar Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Servicios</h4>
            <ul className="space-y-3 text-brand-gray-400">
              <li>Instalaciones</li>
              <li>Reparaciones</li>
              <li>Reacondicionamientos</li>
              <li>Tableros · Protecciones</li>
              <li>Puesta a tierra</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Atención</h4>
            <ul className="space-y-4 text-brand-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                <span>Monte Grande y Zona Sur AMBA</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                <span>WhatsApp: {CONFIG.contact.whatsappNumber}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-gray-500">
          <p>© {currentYear} Electro RB — Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="#cobertura" className="hover:text-white transition-colors">Zona de atención</Link>
            <Link href="#faq" className="hover:text-white transition-colors">Preguntas frecuentes</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
