import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rangga Dwi Mahendra - Portfolio | Backend & ML Developer",
  description:
    "Portfolio Rangga Dwi Mahendra - Informatika graduate specializing in Backend Development & Machine Learning. Explore my projects and experience.",
  keywords: ["portfolio", "backend developer", "machine learning", "informatika", "rangga dwi mahendra"],
  generator: "v0.app",
  metadataBase: new URL("https://ranggadwimah.vercel.app/"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://ranggadwimah.vercel.app/",
    siteName: "Rangga Dwi Mahendra Portfolio",
    title: "Rangga Dwi Mahendra - Backend & ML Developer",
    description:
      "Informatika graduate specializing in Backend Development & Machine Learning. View my projects and professional experience.",
    images: [
      {
        url: "https://ranggadwimah.vercel.app//og-image.jpg", // Add your OG image
        width: 1200,
        height: 630,
        alt: "Rangga Dwi Mahendra Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rangga Dwi Mahendra - Backend & ML Developer",
    description: "Informatika graduate specializing in Backend Development & Machine Learning.",
    images: ["https://ranggadwimah.vercel.app//og-image.jpg"], // Add your Twitter image
    creator: "@ranggadwi", // Update with your Twitter handle
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  formatDetection: {
    email: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${geistSans.style.fontFamily};
  --font-sans: ${geistSans.variable};
  --font-mono: ${geistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
