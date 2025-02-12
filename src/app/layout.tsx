import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";
import { ThunderFont } from "../../public/fonts/fonts";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-interTight",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naveen",
  description: "Naveen Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} ${ThunderFont.variable} ${geistMono.variable} ${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
