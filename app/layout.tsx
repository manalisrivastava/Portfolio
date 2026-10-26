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
  title: "Manali Srivastava — Product Manager",
  description:
    "Product manager building at the intersection of payments, compliance, and AI. Co-founder turned PM with experience shipping AI-enabled and FCA-regulated products.",
  openGraph: {
    title: "Manali Srivastava — Product Manager",
    description: "Payments · Compliance · AI",
    images: ["/og-image.png"],
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
