"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Animations";

const faqs = [
  { q: "What services do you offer?", a: "We offer web development (Next.js), social media management, Instagram/Facebook ad campaigns, SEO optimisation, and complete digital marketing packages." },
  { q: "How long does a website take?", a: "A single-page website takes 3–5 days. A multi-page website takes 1–2 weeks depending on complexity." },
  { q: "Do you manage Instagram accounts?", a: "Yes! We handle everything — posting, stories, reels, hashtags, DM replies, comment management, and monthly reports." },
  { q: "How do Instagram ads work?", a: "We create targeted ad campaigns shown to your ideal audience. You pay the ad budget directly to Meta — we handle the strategy, creatives, and optimisation." },
  { q: "Can I see results before committing?", a: "Absolutely. We offer monthly plans with no lock-in contracts. You'll see performance reports and can decide each month." },
  { q: "Why not use Wix or Squarespace?", a: "Page builders are limited. Our custom-coded websites are faster, rank better on Google, and give you unlimited customisation — no templates." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="w-full py-28 bg-[#080808]">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <Reveal><p className="text-[#ff4d00] text-[12px] font-[500] text-center mb-3 uppercase tracking-[0.15em]">FAQ</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-center font-[800] tracking-[-2px] leading-[1.05] mb-16 text-[#ffffff]" style={{ fontSize: "clamp(32px,4.5vw,56px)" }}>
            Got <span className="gradient-text">questions?</span>
          </h2>
        </Reveal>

        <StaggerContainer className="flex flex-col gap-3" stagger={0.06}>
          {faqs.map((f, i) => (
            <StaggerItem key={i}>
              <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl overflow-hidden hover:border-[rgba(255,255,255,0.15)] transition-colors">
                <button
                  suppressHydrationWarning={true}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-[600] text-[15px] pr-4 text-[#ffffff]">{f.q}</span>
                  <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-[18px] h-[18px] text-[#888888] flex-shrink-0" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-[#888888] text-sm leading-[1.7] border-t border-[rgba(255,255,255,0.08)] pt-4 mx-6 mb-0">
                    {f.a}
                  </p>
                </motion.div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
