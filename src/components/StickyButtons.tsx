"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { MagneticButton } from "@/components/Animations";

export function StickyButtons() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-7 right-7 z-40 flex flex-col gap-3"
    >
      <MagneticButton
        href="https://wa.me/919677329969"
        aria-label="WhatsApp Manager"
        className="w-[52px] h-[52px] bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.1)] text-white"
        strength={0.4}
      >
        <MessageCircle className="w-6 h-6" />
      </MagneticButton>
      <MagneticButton
        href="https://instagram.com/aurenstudio"
        aria-label="Instagram"
        className="w-[52px] h-[52px] bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.1)] text-white"
        strength={0.4}
      >
        <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg>
      </MagneticButton>
    </motion.div>
  );
}
