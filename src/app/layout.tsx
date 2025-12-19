import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cardiac First Responder Course | For Life First Aid",
  description: "PHECC Certified Cardiac First Responder Course in Dublin. Learn CPR, AED use, and life-saving skills. €85, valid for 2 years. Book your course in Dundrum or at your premises.",
  keywords: ["Cardiac First Responder", "CPR course Dublin", "AED training", "First Aid Course Ireland", "PHECC Certified", "Dundrum", "Dublin", "CPR certification", "First Responder training", "Emergency response course"],
  authors: [{ name: "For Life First Aid" }],
  creator: "For Life First Aid",
  publisher: "For Life First Aid",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Cardiac First Responder Course | For Life First Aid",
    description: "PHECC Certified Cardiac First Responder Course in Dublin. Learn CPR, AED use, and life-saving skills. €85, valid for 2 years.",
    type: "website",
    locale: "en_IE",
    siteName: "For Life First Aid",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cardiac First Responder Course | For Life First Aid",
    description: "PHECC Certified Cardiac First Responder Course in Dublin. Learn CPR, AED use, and life-saving skills.",
  },
  verification: {
    google: "google-site-verification-code-here",
  },
  alternates: {
    canonical: "https://www.cardiacfirstrespondercourse.ie",
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
