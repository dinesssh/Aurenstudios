import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Madurai | Instagram Ads, Websites & SEO — AurenStudio",
  description: "AurenStudio helps local businesses in Madurai grow with targeted Instagram ad campaigns, custom-coded websites, social media management & local SEO. Real results in 7 days. Call +91 73057 57075.",
  keywords: "digital marketing madurai, instagram ads madurai, web development madurai, social media management madurai, SEO madurai, bridal studio marketing, salon digital marketing madurai",
  openGraph: {
    title: "AurenStudio — Premium Digital Marketing & Web Development",
    description: "Transforming businesses into brands. Premium web development, Instagram ads, and branding services based in Madurai.",
    url: "https://dinesssh.github.io/Aurenstudios",
    siteName: "AurenStudio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "AurenStudio Digital Marketing Agency",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AurenStudio — Digital Marketing Agency, Madurai",
    description: "Instagram ads, websites & SEO for local businesses. Starting ₹8,000/month.",
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"]
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${space.variable}`}>
      <head>
        <link rel="canonical" href="https://dinesssh.github.io/Aurenstudios" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Madurai" />
        <meta name="geo.position" content="9.9252;78.1198" />
        <meta name="ICBM" content="9.9252, 78.1198" />
      </head>
      <body className="font-sans bg-[#080808] text-white overflow-x-hidden w-full max-w-full">{children}</body>
    </html>
  );
}
