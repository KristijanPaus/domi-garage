import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import FloatingSocialTool from "@/components/FloatingSocialTool";
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
  title: "DOMI Garage & Service",
  description: "Autoservis, dijagnostika i održavanje vozila u Zagrebu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <CookieBanner />
        <FloatingSocialTool />
      </body>
    </html>
  );
}
