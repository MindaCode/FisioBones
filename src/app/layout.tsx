import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, VT323 } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FisioBones — Fisioterapia y Masajes en Lima | Evaluación Gratuita",
  description:
    "¡Muévete sin dolor, vive mejor! Fisioterapia pediátrica, neurológica y traumatológica, masajes terapéuticos y más en Lima. Agenda tu evaluación gratuita por WhatsApp.",
};

export const viewport: Viewport = {
  themeColor: "#241d15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${hanken.variable} ${vt323.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        {/* Marca el documento como "con JS" antes del primer paint para que
            los reveals de scroll no oculten contenido si JS está desactivado */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        {children}
      </body>
    </html>
  );
}
