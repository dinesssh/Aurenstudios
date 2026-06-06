"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HonestBar } from "@/components/HonestBar";
import { Services } from "@/components/Services";
import { WhyAuren } from "@/components/WhyAuren";
import { ProcessSection } from "@/components/ProcessSection";
import { Portfolio } from "@/components/Portfolio";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { FinalCTA } from "@/components/FinalCTA";
import { StickyButtons } from "@/components/StickyButtons";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HonestBar />
      <Services />
      <WhyAuren />
      <ProcessSection />
      <Portfolio />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Contact />
      <StickyButtons />
      <Footer />
    </>
  );
}
