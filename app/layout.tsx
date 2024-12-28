import type { Metadata } from "next";
import "./globals.css";
import "leaflet/dist/leaflet.css";

import { Libre_Baskerville, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-baskerville",
});

export const metadata: Metadata = {
  title: {
    default:
      "Regro - Eat Healthy, Stay Healthy | Quality Food Products & Agriculture in Nepalgunj",
    template: "%s | Regro Nepal",
  },
  description:
    "Regro (Regmi Agro & Food Industries Pvt. Ltd.) offers quality, hygienic, and nutritious food products in Nepalgunj, Nepal. Our motto: Eat Healthy, Stay Healthy. We focus on sustainable practices, innovative solutions, and community well-being.",
  keywords: [
    "Regro",
    "Regro Nepal",
    "Regmi Agro & Food Industries",
    "Nepalgunj",
    "quality food",
    "agriculture",
    "healthy living",
    "sustainable practices",
    "community well-being",
    "hygienic food",
    "nutritious food",
    "affordable food",
    "Nepali food products",
    "Eat Healthy Stay Healthy",
    "Regro np",
  ],
  authors: [{ name: "Regro" }],
  creator: "Regro",
  publisher: "Regmi Agro & Food Industries Pvt. Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.regro.com.np/",
    siteName: "Regro Nepal",
    title:
      "Regro Nepal - Eat Healthy, Stay Healthy | Quality Food Products & Sustainable Agriculture",
    description:
      "Discover Regro in Nepalgunj: Your source for hygienic, nutritious, and affordable food products. We're dedicated to promoting healthy living and community well-being through sustainable practices and innovative solutions.",
    images: [
      {
        url: "https://www.regro.com.np/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Regro - Eat Healthy, Stay Healthy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regro Nepal - Eat Healthy, Stay Healthy",
    description:
      "Quality, hygienic, and nutritious food products from Nepalgunj, Nepal.",
    images: ["https://www.regro.com.np/twitter-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${inter.variable} ${playfair.variable} ${libreBaskerville.variable}`}
    >
      <head>
        <link rel="canonical" href="https://www.regro.com.np/" />
        <meta name="theme-color" content="#4CAF50" />
      </head>
      <body className={poppins.className}>
        <header>
          <h1 className="sr-only">Regro Nepal - Eat Healthy, Stay Healthy</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p className="sr-only">
            Regro (Regmi Agro & Food Industries Pvt. Ltd.) - Providing quality,
            hygienic, and nutritious food products in Nepalgunj, Nepal.
          </p>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
