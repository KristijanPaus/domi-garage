import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CookieBanner from "@/components/CookieBanner";
import FloatingSocialTool from "@/components/FloatingSocialTool";
import "./globals.css";

const BASE_URL = "https://garagedomi.com";
const BUSINESS_NAME = "DOMI Garage & Service";
const DESCRIPTION = "Autoservis, dijagnostika i održavanje vozila u Zagrebu.";
const OG_IMAGE = "/opengraph-image.png";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: BUSINESS_NAME,
  image: `${BASE_URL}${OG_IMAGE}`,
  url: BASE_URL,
  telephone: "+385917912760",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Purgarija odv. I 38",
    postalCode: "10431",
    addressLocality: "Kerestinec",
    addressCountry: "HR",
  },
  areaServed: {
    "@type": "City",
    name: "Zagreb",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "16:00",
    },
  ],
};

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
  description: DESCRIPTION,
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: BUSINESS_NAME,
    title: BUSINESS_NAME,
    description: DESCRIPTION,
    locale: "hr_HR",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "DOMI Garage & Service autoservis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BUSINESS_NAME,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {children}
        <CookieBanner />
        <FloatingSocialTool />
      </body>
    </html>
  );
}
