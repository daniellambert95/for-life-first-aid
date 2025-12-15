import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cardiac First Responder Course | For Life First Aid",
  description: "PHECC Certified Cardiac First Responder Course. Learn CPR, AED use, and life-saving skills. €85, valid for 2 years. Locations in Dundrum or your premises.",
  keywords: ["Cardiac First Responder", "CPR", "AED", "Cardiopulmonary Resuscitation", "Automated External Defibrillator", "First Aid Course", "PHECC Certified", "Dundrum", "Dublin"],
  openGraph: {
    title: "Cardiac First Responder Course | For Life First Aid",
    description: "PHECC Certified Cardiac First Responder Course. Learn CPR, AED use, and life-saving skills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
