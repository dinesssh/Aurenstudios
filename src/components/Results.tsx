"use client";

import { Smartphone, Zap, Search, TrendingUp, BarChart3, Rocket } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem, PremiumCard, CountUp } from "@/components/Animations";

const stats = [
  { num: 100, suffix: "%", prefix: "", label: "Client Satisfaction" },
  { num: 3, suffix: "x", prefix: "", label: "Avg. Engagement Growth" },
  { num: 1, suffix: "+", prefix: "", label: "Campaigns Managed" },
  { num: 1, suffix: "h", prefix: "<", label: "Response Time" },
];

const feats = [
  { icon: <Smartphone className="w-[18px] h-[18px]" />, title: "100% Responsive", desc: "Perfect on every device" },
  { icon: <Zap className="w-[18px] h-[18px]" />, title: "Lightning Fast", desc: "PageSpeed 95+" },
  { icon: <Search className="w-[18px] h-[18px]" />, title: "SEO Ready", desc: "Built to rank on Google" },
  { icon: <TrendingUp className="w-[18px] h-[18px]" />, title: "ROI Focused", desc: "Every rupee optimised" },
  { icon: <BarChart3 className="w-[18px] h-[18px]" />, title: "Analytics", desc: "Track everything" },
  { icon: <Rocket className="w-[18px] h-[18px]" />, title: "Full Service", desc: "A to Z managed for you" },
];

export function Results() {
  return (
    <section id="results" className="w-full py-28 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal><p className="text-[#ff4d00] text-[12px] font-[500] text-center mb-3 tracking-[0.15em] uppercase">Results</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-center font-[800] tracking-[-2px] leading-[1.05] mb-16 text-[#ffffff]" style={{ fontSize: "clamp(32px,4.5vw,56px)" }}>
            Numbers that <span className="gradient-text">speak for themselves.</span>
          </h2>
        </Reveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center" stagger={0.1}>
          {stats.map((s) => (
            <StaggerItem key={s.label}>
              <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 text-center">
                <div className="font-display font-[700] tracking-[-2px] text-[#ffffff] mb-1" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                  <CountUp target={s.num} suffix={s.suffix} prefix={s.prefix} />
                </div>
                <p className="text-[#666666] text-[13px] font-medium">{s.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4" stagger={0.08}>
          {feats.map((f) => (
            <StaggerItem key={f.title}>
              <PremiumCard className="flex items-start gap-4 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6">
                <div className="w-10 h-10 bg-[rgba(255,77,0,0.06)] rounded-xl flex items-center justify-center text-[#ff4d00] flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-[15px] font-[700] mb-0.5 text-[#ffffff]">{f.title}</h4>
                  <p className="text-[13px] text-[#888888]">{f.desc}</p>
                </div>
              </PremiumCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
