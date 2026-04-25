import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookiesBanner from "@/components/layout/CookiesBanner";
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

export const metadata: Metadata = {
  title: {
    default: "Cuarto y Mitá | Café en Oviedo",
    template: "%s | Cuarto y Mitá",
  },
  description:
    "Cafetería y tienda en el centro de Oviedo. Cafés de origen, dulces caseros, embutidos ibéricos, quesos artesanos y vinos seleccionados.",
  metadataBase: new URL("https://cuartoymita.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Cuarto y Mitá",
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
