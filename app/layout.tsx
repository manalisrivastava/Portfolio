import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manali Srivastava | Product & Project Manager, AI & Digital Transformation",
  description:
    "Product and project manager bridging business and technology. Former founder, now leading AI-enabled digital transformation. Based in Birmingham, UK.",
  openGraph: {
    title: "Manali Srivastava | Product & Project Manager, AI & Digital Transformation",
    description: "Product · Project · AI · Digital Transformation",
    images: ["/og-image.png"],
  },
  twitter: {
    title: "Manali Srivastava | Product & Project Manager, AI & Digital Transformation",
    description: "Product · Project · AI · Digital Transformation",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable}`}
      style={{ fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)" }}
    >
      <body>
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
