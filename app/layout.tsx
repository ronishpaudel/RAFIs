import type { Metadata } from "next";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    default: "Regro's - Quality Food Products & Agriculture in Nepalgunj",
    template: "%s | RAFIs",
  },
  description:
    "Regro's offers quality food products and agricultural services in Nepalgunj, Nepal. We focus on healthy living, community well-being, and sustainable practices.",
  keywords: [
    "RAFIs",
    "Regro",
    "Nepalgunj",
    "quality food",
    "agriculture",
    "healthy living",
    "sustainable practices",
    "community well-being",
  ],
  authors: [{ name: "RAFIs" }],
  creator: "RAFIs",
  publisher: "RAFIs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rafis.com/",
    siteName: "RAFIs",
    title: "RAFIs - Quality Food Products & Sustainable Agriculture",
    description:
      "Discover RAFIs (Regro) in Nepalgunj: Your source for quality food products and agricultural services. Join us in promoting healthy living and community well-being.",
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
    <html lang="en" suppressHydrationWarning className={`${poppins.variable}`}>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
