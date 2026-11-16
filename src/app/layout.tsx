import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CONFIG } from "@/data/config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(CONFIG.seo.url),
  title: CONFIG.seo.title,
  description: CONFIG.seo.description,
  keywords: CONFIG.seo.keywords.join(", "),
  authors: [{ name: CONFIG.brand.name }],
  openGraph: {
    title: CONFIG.seo.title,
    description: CONFIG.seo.description,
    url: CONFIG.seo.url,
    siteName: CONFIG.brand.name,
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: CONFIG.seo.title,
    description: CONFIG.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "AR-B",
    "geo.placename": "Monte Grande",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo-square.png" />
        <meta name="theme-color" content="#FFED00" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
