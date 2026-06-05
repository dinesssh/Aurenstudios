"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/Animations";

const heroLine = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const techs = [
  "Next.js","React","Tailwind CSS","TypeScript","Meta Ads","Instagram","SEO",
  "Google Ads","Figma","Vercel","Supabase","Analytics",
];

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(255,77,0,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full text-center relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/70">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff4d00]"></span>
            </span>
            📍 Based in Madurai · Serving South Tamil Nadu
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-center">
            <motion.span className="block text-white" custom={0} initial="hidden" animate="visible" variants={heroLine}>
              Madurai businesses get more
            </motion.span>
            <motion.span className="block text-[#ff4d00]" custom={1} initial="hidden" animate="visible" variants={heroLine}>
              customers through Instagram.
            </motion.span>
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: "easeOut" }}
          className="text-[#999999] text-base md:text-lg leading-[1.7] max-w-xl mx-auto mt-6 mb-11"
        >
          We handle the ads, the posts, the website — and the results. No contracts. No fluff. Just growth. Starting ₹8,000/month.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95, ease: "easeOut" }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <MagneticButton
            href="#contact"
            className="bg-white text-black font-bold px-10 py-4 rounded-full text-[15px] inline-flex items-center gap-2 hover:bg-[#ff4d00] hover:text-white transition-colors duration-300"
          >
            Get a Free Strategy Call →
          </MagneticButton>
          <MagneticButton
            href="#results"
            className="text-white font-semibold px-10 py-4 rounded-full text-[15px] border border-white/20 hover:border-white/40 transition-colors duration-300 inline-block"
          >
            See Our Results ↓
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="absolute bottom-10 left-0 right-0 overflow-hidden"
      >
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="ticker-track flex">
          {[...techs, ...techs, ...techs].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-2 px-7 whitespace-nowrap text-[#666666] text-sm font-semibold hover:text-white transition-colors cursor-default"
            >
              <span className="w-1 h-1 bg-[#444444] rounded-full" />
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
