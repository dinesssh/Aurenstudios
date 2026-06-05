"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.05)] py-12 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-row flex-wrap items-center justify-between gap-8">
        <a href="#" className="flex items-center gap-[10px] group" aria-label="AurenStudio Home">
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
        
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-6">
            <a href="https://instagram.com/aurenstudio" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#ffffff] transition-colors" aria-label="Instagram">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
            </a>
            <a href="https://linkedin.com/company/aurenstudio" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#ffffff] transition-colors" aria-label="LinkedIn">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://github.com/dinesssh" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#ffffff] transition-colors" aria-label="GitHub">
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-8 flex flex-wrap items-center justify-between gap-4 text-[13px] text-[#555555]">
        <p className="text-[#444444]">© {new Date().getFullYear()} AurenStudio · Madurai, Tamil Nadu 🇮🇳</p>
      </div>
    </footer>
  );
}
