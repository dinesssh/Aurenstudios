"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { MagneticButton } from "@/components/Animations";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(8,8,8,0.92)] backdrop-blur-[24px] backdrop-saturate-[180%] border-b border-white/[0.08]"
          : "bg-[rgba(8,8,8,0.6)] backdrop-blur-[20px] border-b border-white/[0.05]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between w-full h-16">
        <a href="#" className="flex items-center gap-[10px] group" aria-label="Home">
          <motion.svg 
            width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <path d="M20 4L4 36H11L20 18L29 36H36L20 4Z" fill="#c0c0c0"/>
            <path d="M20 12L13 26H27L20 12Z" fill="#c0c0c0"/>
          </motion.svg>
          <div className="flex flex-col justify-center">
            <span className="text-[13px] font-[300] tracking-[0.2em] text-[#ffffff] uppercase leading-none">AUREN</span>
            <span className="text-[8px] font-normal tracking-[0.35em] text-[#666666] mt-[1px] leading-none block">— STUDIO —</span>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-9 text-[14px] text-[#aaaaaa] font-medium">
          {["Services", "Portfolio", "Pricing", "Results", "About"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="hover:text-[#ffffff] transition-colors duration-200"
            >
              {l}
            </a>
          ))}
          <MagneticButton
            href="#contact"
            className="bg-[#ffffff] text-[#000000] font-bold px-6 py-2.5 rounded-full text-[13px] inline-block hover:bg-[#ff4d00] hover:text-[#ffffff] transition-colors"
          >
            Book a Call
          </MagneticButton>
        </div>
      </div>
    </nav>
  );
}
