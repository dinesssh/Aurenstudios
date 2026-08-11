"use client";

import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="cx">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[24px] overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/[0.08] p-10 md:p-20 text-center"
        >
          {/* Subtle bg glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] bg-[radial-gradient(circle,rgba(255,77,0,0.08)_0%,transparent_60%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="heading-primary text-4xl md:text-5xl leading-[1.1] mb-6">
              Ready to build something real?
            </h2>
            <p className="text-[#888888] text-lg leading-[1.6] mb-10">
              Book a free 30-minute strategy call. We&apos;ll listen to your goals and give you an honest recommendation — no sales pressure.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8">
              <a 
                href="#contact" 
                className="w-full sm:w-auto bg-[#ff4d00] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#e04400] transition-colors flex items-center justify-center gap-2"
              >
                Book a Free Call
                <MoveRight size={18} />
              </a>
              <a 
                href="https://wa.me/919677329969" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/5 transition-colors flex items-center justify-center"
              >
                WhatsApp Manager
              </a>
            </div>
            
            <p className="text-[14px] text-[#555555]">
              Honest advice. No commitment required.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
