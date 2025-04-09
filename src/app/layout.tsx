import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pharmart - Complete Pharmacy Management Solution",
    template: "%s | Pharmart",
  },
  description:
    "Pharmart is an all-in-one platform that combines eCommerce, POS, and management systems designed specifically for modern pharmacies.",
  keywords: [
    "pharmacy management",
    "pharmacy POS",
    "pharmacy eCommerce",
    "prescription management",
    "pharmacy software",
  ],
  authors: [{ name: "Pharmart Team" }],
  creator: "Pharmart Inc.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pharmart.com",
    title: "Pharmart - Complete Pharmacy Management Solution",
    description:
      "Pharmart is an all-in-one platform that combines eCommerce, POS, and management systems designed specifically for modern pharmacies.",
    siteName: "Pharmart",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharmart - Complete Pharmacy Management Solution",
    description:
      "Pharmart is an all-in-one platform that combines eCommerce, POS, and management systems designed specifically for modern pharmacies.",
    creator: "@pharmartapp",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "https://pharmart.com/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
