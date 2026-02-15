import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { StickyButtons } from "@/components/sticky-buttons";
import { Analytics } from "@vercel/analytics/next"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "MVSR Tax | Expert Tax & Accounting Services",
  description: "Professional tax solutions for individuals and businesses across the United States",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <StickyButtons />
        <Analytics />
      </body>
    </html>
  );
}
