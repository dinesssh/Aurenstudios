"use client";

import { motion } from "framer-motion";

const heroLine = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 + i * 0.1, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#080808] pt-32 pb-20">
      <div className="cx relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="mb-8 inline-block"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 text-sm text-white/60">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff4d00]"></span>
                </span>
                Open for New Projects
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-[2.5rem] lg:text-[4rem] font-[800] tracking-[-0.03em] leading-[1.1] mb-6">
              <motion.span className="block text-[#ffffff]" custom={0} initial="hidden" animate="visible" variants={heroLine}>
                We Build Digital Products
              </motion.span>
              <motion.span className="block text-[#ff4d00]" custom={1} initial="hidden" animate="visible" variants={heroLine}>
                That Grow Businesses.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-[#888888] text-[18px] leading-[1.75] max-w-[480px] mb-10"
            >
              A founder-led digital agency based in Madurai. We design and build premium websites, run performance marketing, and create AI-powered systems for ambitious businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-6"
            >
              <a 
                href="#contact" 
                className="w-full sm:w-auto text-center bg-[#ff4d00] text-white rounded-full px-8 py-4 font-semibold hover:bg-[#e04400] transition-colors min-h-[48px] flex items-center justify-center"
              >
                Book a Free Strategy Call →
              </a>
              <a 
                href="#portfolio" 
                className="w-full sm:w-auto text-center border border-white/20 text-white rounded-full px-8 py-4 hover:border-white/50 transition-colors min-h-[48px] flex items-center justify-center"
              >
                View Our Work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 mt-6 text-[13px] text-[#555555]"
            >
              <span className="flex items-center gap-1.5">✦ Direct collaboration</span>
              <span className="flex items-center gap-1.5">✦ No lock-in contracts</span>
              <span className="flex items-center gap-1.5">✦ Fast turnaround</span>
            </motion.div>
          </div>

          {/* Right Side: CSS Mockup Showcase */}
          <div className="relative w-full h-[420px] flex-col justify-center items-center flex md:hidden lg:flex">
            
            {/* Frame 1 (Back) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute w-[80%] h-[280px] rounded-[12px] bg-[#111111] border border-white/[0.08] overflow-hidden rotate-[-3deg] z-0 left-[5%] bottom-[10%]"
            >
              <div className="h-7 w-full border-b border-white/[0.05] bg-[#1a1a1a] flex items-center px-3 gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/80"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/80"></div>
              </div>
              <div className="w-full h-full bg-[#ff4d00]/10 flex justify-center pt-8">
                <div className="px-4 py-1.5 rounded-full bg-black/40 text-[10px] text-white/40 border border-white/5">
                  aurenstudios.vercel.app
                </div>
              </div>
              <div 
                className="absolute inset-0 z-0 opacity-20 pointer-events-none mt-7"
                style={{
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px',
                }}
              />
            </motion.div>

            {/* Frame 2 (Middle) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute w-[85%] h-[320px] rounded-[12px] bg-[#0d0d0d] border border-white/[0.08] overflow-hidden rotate-[-1deg] z-10 right-[5%] bottom-[5%]"
            >
              <div className="h-7 w-full border-b border-white/[0.05] bg-[#151515] flex items-center px-3 gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/80"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/80"></div>
                <div className="ml-4 px-2 py-0.5 rounded bg-[#111111] text-[9px] text-white/30 border border-white/5">
                  client-portal.app
                </div>
              </div>
              <div className="p-5 flex flex-col gap-4">
                <div className="w-full h-20 bg-white/[0.02] rounded-lg"></div>
                <div className="flex gap-4">
                  <div className="w-[60%] h-24 bg-white/[0.03] rounded-lg"></div>
                  <div className="w-[40%] h-24 bg-white/[0.01] rounded-lg"></div>
                </div>
              </div>
            </motion.div>

            {/* Frame 3 (Front) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute w-[90%] h-[360px] rounded-[12px] bg-[#0a0a0a] border border-white/[0.1] overflow-hidden z-20 shadow-[0_20px_80px_rgba(255,77,0,0.12)] left-[5%] bottom-0"
            >
              <div className="h-7 w-full border-b border-white/[0.05] bg-[#111111] flex items-center px-3 gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/90"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/90"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/90"></div>
                <div className="ml-4 px-3 py-0.5 rounded-sm bg-[#000000] text-[9px] text-white/50 border border-white/[0.05]">
                  your-business.com
                </div>
              </div>
              {/* Mini dark website layout */}
              <div className="w-full h-full flex flex-col bg-[#050505]">
                <div className="w-full h-4 bg-[#ff4d00]/20 border-b border-[#ff4d00]/30 flex items-center px-4">
                  <div className="w-12 h-1 bg-[#ff4d00]/50 rounded-full"></div>
                </div>
                <div className="p-8 flex flex-col items-center text-center mt-4">
                  <div className="w-12 h-12 bg-white/5 rounded-lg mb-6"></div>
                  <div className="w-[60%] h-4 bg-white/10 rounded-full mb-3"></div>
                  <div className="w-[40%] h-3 bg-white/5 rounded-full mb-8"></div>
                  <div className="px-6 py-2 bg-[#ff4d00] rounded-full w-24 h-6"></div>
                </div>
              </div>
            </motion.div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
