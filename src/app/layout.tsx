import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AurenStudio — Digital Agency in Madurai | Websites, Marketing & AI Automations",
  description: "AurenStudio is a digital agency based in Madurai offering custom websites, digital marketing, Meta ads, social media management, and AI automations for growing businesses.",
  keywords: "premium web development, AI automation agency, growth marketing, SaaS development, business automation, high-converting websites",
  openGraph: {
    title: "AurenStudio — Digital Agency in Madurai | Websites, Marketing & AI Automations",
    description: "AurenStudio is a digital agency based in Madurai offering custom websites, digital marketing, Meta ads, social media management, and AI automations for growing businesses.",
    url: "https://aurenstudios.vercel.app",
    siteName: "AurenStudio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "AurenStudio Premium Digital Growth Agency",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AurenStudio — Digital Agency in Madurai | Websites, Marketing & AI Automations",
    description: "AurenStudio is a digital agency based in Madurai offering custom websites, digital marketing, Meta ads, social media management, and AI automations for growing businesses.",
    images: ["https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80"]
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`dark ${inter.variable}`}>
      <head>
        <link rel="canonical" href="https://aurenstudios.vercel.app" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Madurai" />
        <meta name="geo.position" content="9.9252;78.1198" />
        <meta name="ICBM" content="9.9252, 78.1198" />
      </head>
      <body suppressHydrationWarning className="font-sans bg-[#080808] text-white overflow-x-hidden w-full max-w-full">{children}</body>
    </html>
  );
}
