"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Results } from "@/components/Results";
import { FAQ } from "@/components/FAQ";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { StickyButtons } from "@/components/StickyButtons";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Results />
      <FAQ />
      <About />
      <Contact />
      <StickyButtons />
      <Footer />
    </>
  );
}


