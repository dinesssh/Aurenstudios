"use client";

import { Globe, Users, Zap, Search } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem, PremiumCard } from "@/components/Animations";

const services = [
  { icon: <Globe className="w-6 h-6" />, title: "Web Development", desc: "Custom websites built with Next.js — fast, responsive & designed to convert visitors into customers.", tags: ["Next.js","React","Tailwind"] },
  { icon: <Users className="w-6 h-6" />, title: "Social Media Management", desc: "We handle your entire Instagram — posts, stories, reels, DMs & engagement so you can focus on your business.", tags: ["Content","Strategy","Growth"] },
  { icon: <Zap className="w-6 h-6" />, title: "Instagram Ad Campaigns", desc: "Targeted ad campaigns that bring real enquiries & bookings — not just likes. Every rupee optimised for ROI.", tags: ["Meta Ads","Targeting","WhatsApp CTA"] },
  { icon: <Search className="w-6 h-6" />, title: "SEO Optimisation", desc: "Rank on Google when customers search for your services. On-page SEO, local SEO & content strategy included.", tags: ["Google","Local SEO","Keywords"] },
];

export function Services() {
  return (
    <section id="services" className="w-full py-28 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal><p className="text-[#ff4d00] text-[12px] font-[500] text-center mb-3 tracking-[0.15em] uppercase">Services</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-center font-[800] tracking-[-2px] leading-[1.05] mb-16 text-[#ffffff]" style={{ fontSize: "clamp(32px,4.5vw,56px)" }}>
            Four ways we <span className="gradient-text">grow your business.</span>
          </h2>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.12}>
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <PremiumCard className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[20px] p-10 relative overflow-hidden group cursor-default">
                <div className="absolute top-0 left-0 right-0 h-0 bg-gradient-to-b from-[rgba(255,77,0,0.04)] to-transparent group-hover:h-32 transition-all duration-500 pointer-events-none" />
                <div className="w-[52px] h-[52px] bg-[rgba(255,77,0,0.06)] rounded-2xl flex items-center justify-center mb-6 text-[#ff4d00] relative">
                  {s.icon}
                </div>
                <h3 className="font-display text-[22px] font-[600] text-[#ffffff] tracking-[-0.5px] mb-2">{s.title}</h3>
                <p className="text-[#888888] text-[15px] leading-[1.7] mb-5">{s.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[11px] text-[#aaaaaa] bg-[rgba(255,255,255,0.06)] px-[10px] py-[3px] rounded-[6px]">{t}</span>
                  ))}
                </div>
              </PremiumCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
