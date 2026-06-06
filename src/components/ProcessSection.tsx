"use client";

import { motion } from "framer-motion";

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Understand",
      time: "Day 1–2",
      desc: "We start with a detailed conversation about your business, your goals, and your audience — so we build the right thing."
    },
    {
      num: "02",
      title: "Plan",
      time: "Day 3–4",
      desc: "We map out the project scope, content structure, and technical approach before writing a single line of code."
    },
    {
      num: "03",
      title: "Build",
      time: "Day 5–14",
      desc: "Design and development happens in close collaboration with you — regular updates, fast revisions, and transparent communication."
    },
    {
      num: "04",
      title: "Launch & Support",
      time: "Day 15+",
      desc: "We go live, hand over all assets, and stay available for support, fixes, and future growth."
    }
  ];

  return (
    <section id="process" className="py-28 relative overflow-hidden">
      <div className="cx relative z-10">
        <div className="text-center mb-20">
          <span className="label-small mb-4 block">Our Process</span>
          <h2 className="heading-primary text-4xl md:text-[3.5rem] leading-[1.1]">
            How we work.
          </h2>
        </div>

        <div className="relative">
          {/* Dashed connector line for desktop */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] border-t border-dashed border-[#ff4d00]/25 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-start md:items-center text-left md:text-center group relative"
              >
                {/* Vertical line for mobile */}
                {i !== steps.length - 1 && (
                  <div className="md:hidden absolute left-[28px] top-[64px] bottom-[-24px] w-[1px] border-l border-dashed border-[#ff4d00]/25" />
                )}
                
                <div className="w-[56px] h-[56px] rounded-full bg-[#111111] border border-white/10 flex items-center justify-center text-xl font-bold text-white mb-6 group-hover:border-[#ff4d00]/50 group-hover:text-[#ff4d00] transition-colors relative z-10 shrink-0 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  {step.num}
                </div>
                
                <div className="ml-20 md:ml-0 mt-[-68px] md:mt-0">
                  <div className="text-[12px] font-semibold text-[#ff4d00] mb-2">{step.time}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-[#888888] text-[14px] leading-[1.7] max-w-[260px] mx-auto">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
