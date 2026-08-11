"use client";

import { motion } from "framer-motion";
import { Handshake, Puzzle, Zap, TrendingUp } from "lucide-react";

export function WhyAuren() {
  const cards = [
    {
      title: "Direct Collaboration",
      icon: <Handshake size={32} className="text-[#ff4d00]" />,
      desc: "Work directly with the people building your project — not account managers or outsourced teams."
    },
    {
      title: "Custom Solutions",
      icon: <Puzzle size={32} className="text-[#ff4d00]" />,
      desc: "Every project is built from scratch to match your specific business goals, not adapted from a template."
    },
    {
      title: "Fast Execution",
      icon: <Zap size={32} className="text-[#ff4d00]" />,
      desc: "Small, focused team means faster decisions, quicker delivery, and no bureaucratic delays."
    },
    {
      title: "Long-Term Partnership",
      icon: <TrendingUp size={32} className="text-[#ff4d00]" />,
      desc: "We're invested in your success beyond launch — available for support, updates, and growth."
    }
  ];

  return (
    <section id="about" className="py-28 relative bg-[#0a0a0a]">
      <div className="cx">
        <div className="text-center mb-16">
          <h2 className="heading-primary text-4xl md:text-[3.5rem] leading-[1.1] mb-4">
            Why businesses choose us.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="premium-card p-8 group flex flex-col"
            >
              <div className="mb-6">
                {card.icon}
              </div>
              <h3 className="text-[20px] font-semibold text-white mb-3">{card.title}</h3>
              <p className="text-[#888888] text-[15px] leading-[1.7]">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
