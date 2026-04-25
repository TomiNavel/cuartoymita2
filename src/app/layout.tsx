import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookiesBanner from "@/components/layout/CookiesBanner";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const SITE_DESCRIPTION =
  "Cafetería y tienda en el centro de Oviedo. Cafés de origen, dulces caseros, embutidos ibéricos, quesos artesanos y vinos seleccionados.";

const OG_IMAGES = [
  {
    url: "/intro.webp",
    width: 1200,
    height: 630,
    alt: "Interior de Cuarto y Mitá",
  },
];

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Café en Oviedo`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME} | Café en Oviedo`,
    description: SITE_DESCRIPTION,
    images: OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Café en Oviedo`,
    description: SITE_DESCRIPTION,
    images: OG_IMAGES.map((img) => img.url),
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookiesBanner />
      </body>
    </html>
  );
}
