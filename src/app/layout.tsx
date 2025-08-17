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
  title: "Rangga Dwi Mahendra - Portfolio",
  description:
    "Portfolio Rangga Dwi Mahendra - lulusan Informatika | Backend & Machine Learning enthusiast",
  generator: "v0.app",
};

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
