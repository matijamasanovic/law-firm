import React from "react";
import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import DemoNotice from "@/components/DemoNotice";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Advokatska kancelarija | Advokati",
  description:
    "Stručne pravne usluge u međunarodnom trgovinskom pravu i antimonopolskoj regulativi. Besplatna konsultacija dostupna 24/7.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-Latn-ME">
      <body
        className={`${inter.variable} ${dmSerifDisplay.variable} font-sans antialiased`}
      >
        <DemoNotice />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
