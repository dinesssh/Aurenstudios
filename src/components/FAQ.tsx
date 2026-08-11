"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Are you a large agency or a small team?",
      a: "We're a small, focused team — and that's intentional. You work directly with the people building your project, not through layers of account managers. This means faster decisions, clearer communication, and better outcomes."
    },
    {
      q: "Do you work with businesses outside Madurai?",
      a: "Yes. While we're based in Madurai, we work with clients across Tamil Nadu, South India, and remotely with businesses anywhere in India."
    },
    {
      q: "How long does it take to build a website?",
      a: "Most premium single-page or simple multi-page websites are completed within 7 to 14 days. Complex applications or e-commerce platforms typically take 4 to 8 weeks depending on the requirements."
    },
    {
      q: "Do you offer ongoing support after launch?",
      a: "Yes, all our plans include an initial support period. After that, we offer affordable retainer packages for maintenance, content updates, and continued performance marketing."
    },
    {
      q: "What makes your websites different from cheap templates?",
      a: "We custom-code our sites using Next.js and React — the same technology used by companies like Netflix and Notion. This means they are incredibly fast, highly secure, and optimized for both search engines and user conversions."
    }
  ];

  return (
    <section id="faq" className="py-28 relative">
      <div className="cx max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="heading-primary text-4xl md:text-[3.5rem] leading-[1.1] mb-4">
            Common questions.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="premium-card overflow-hidden"
            >
              <button
                suppressHydrationWarning
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-[16px] font-semibold text-white pr-8">{faq.q}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-[#888888] transition-transform duration-300 shrink-0 ${openIndex === i ? "rotate-180 text-[#ff4d00]" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 text-[#888888] text-[15px] leading-[1.7]">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
