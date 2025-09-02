import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ceremonias de Rapé - Medicina Sagrada",
  description: "Descubre productos auténticos de rapé y únete a nuestras ceremonias sagradas. Medicina ancestral para tu bienestar espiritual.",
  manifest: "/manifest.json",
  themeColor: "#8B4513",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Ceremonias de Rapé",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Ceremonias de Rapé",
    title: "Ceremonias de Rapé - Medicina Sagrada",
    description: "Descubre productos auténticos de rapé y únete a nuestras ceremonias sagradas.",
  },
  twitter: {
    card: "summary",
    title: "Ceremonias de Rapé - Medicina Sagrada",
    description: "Descubre productos auténticos de rapé y únete a nuestras ceremonias sagradas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8B4513" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-amber-50`}>
        {children}
      </body>
    </html>
  );
}
