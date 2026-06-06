"use client";

import { motion } from "framer-motion";
import { 
  Code, 
  Megaphone, 
  Target, 
  Smartphone, 
  Zap, 
  Cpu, 
  LineChart, 
  Layers, 
  PenTool 
} from "lucide-react";

export function Services() {
  const servicesList = [
    {
      title: "Premium Websites",
      icon: <Code size={28} className="text-[#ff4d00]" />,
      outcome: "Fast, beautiful, built to convert",
      desc: "Custom-coded websites using Next.js and React. Mobile-first, SEO-ready, and designed to turn visitors into customers."
    },
    {
      title: "Digital Marketing",
      icon: <Megaphone size={28} className="text-[#ff4d00]" />,
      outcome: "More visibility, more enquiries",
      desc: "End-to-end digital marketing — strategy, execution, and optimisation across all channels that matter."
    },
    {
      title: "Meta Ads",
      icon: <Target size={28} className="text-[#ff4d00]" />,
      outcome: "Every rupee working harder",
      desc: "Targeted Facebook and Instagram ad campaigns built for real business outcomes — leads, bookings, and sales."
    },
    {
      title: "Social Media Management",
      icon: <Smartphone size={28} className="text-[#ff4d00]" />,
      outcome: "Consistent presence, real growth",
      desc: "Content creation, posting schedules, community management, and monthly performance reporting."
    },
    {
      title: "AI Automations",
      icon: <Zap size={28} className="text-[#ff4d00]" />,
      outcome: "Save hours. Scale faster.",
      desc: "Automate lead capture, follow-ups, WhatsApp responses, and business workflows using modern AI tools."
    },
    {
      title: "AI Agents",
      icon: <Cpu size={28} className="text-[#ff4d00]" />,
      outcome: "Your business, working 24/7",
      desc: "Custom AI agents that handle customer queries, qualify leads, and book appointments automatically."
    },
    {
      title: "Business Strategy",
      icon: <LineChart size={28} className="text-[#ff4d00]" />,
      outcome: "Clarity on what to build next",
      desc: "One-on-one strategy sessions to identify digital opportunities, prioritise investments, and plan your growth roadmap."
    },
    {
      title: "SaaS & Web Applications",
      icon: <Layers size={28} className="text-[#ff4d00]" />,
      outcome: "Your idea, production-ready",
      desc: "Full-stack web application and SaaS development — from MVP to launch-ready product."
    },
    {
      title: "Branding & Identity",
      icon: <PenTool size={28} className="text-[#ff4d00]" />,
      outcome: "A brand that commands attention",
      desc: "Logo design, visual identity, brand guidelines, and marketing collateral for a consistent look."
    }
  ];

  return (
    <section id="services" className="py-28 relative">
      <div className="cx">
        <div className="text-center mb-16">
          <h2 className="heading-primary text-4xl md:text-[3.5rem] leading-[1.1] mb-4">
            Everything your business needs online.
          </h2>
          <p className="text-[#888888] text-lg max-w-2xl mx-auto">
            From your first website to full AI-powered growth systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="premium-card p-8 group flex flex-col"
            >
              <div className="mb-4">
                {s.icon}
              </div>
              <h3 className="text-[18px] font-semibold text-white mt-4">{s.title}</h3>
              <p className="text-[13px] font-medium text-[#ff4d00] mt-1">{s.outcome}</p>
              <p className="text-[#888888] text-[14px] leading-[1.7] mt-3 flex-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
