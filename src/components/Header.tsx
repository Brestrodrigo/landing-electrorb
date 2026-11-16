"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, Menu, X } from "lucide-react";
import { getWhatsAppUrl } from "@/data/config";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Trabajos", href: "#trabajos" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-4" : "bg-white/95 backdrop-blur-sm py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#inicio" 
          onClick={(e) => handleSmoothScroll(e, "#inicio")}
          className="flex items-center z-50"
          aria-label="Electro RB Inicio"
        >
          <Image
            src="/images/logo-horizontal.png"
            alt="Electro RB - Servicios Eléctricos"
            width={180}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#FFED00] text-black font-semibold py-2 px-4 rounded-md hover:bg-[#e6d500] transition-colors"
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle size={18} />
            <span>Consultar</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2 text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation overlay */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
        <nav
          className={`fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white z-40 p-6 flex flex-col pt-24 transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-lg font-medium text-gray-800 block"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto pb-8">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#FFED00] text-black font-semibold py-3 px-4 rounded-md w-full hover:bg-[#e6d500] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Contactar por WhatsApp"
            >
              <MessageCircle size={20} />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
