"use client";

import { CheckCircle2 } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem, PremiumCard, MagneticButton } from "@/components/Animations";

const plans = [
  { name: "Starter", price: "₹8,000", per: "/mo", desc: "Perfect for small businesses starting their digital journey.", pop: false, bestValue: false, feats: ["Single-page website","Social media management","3–4 posts per week","Instagram ad campaign setup","Monthly performance report","WhatsApp & email support"] },
  { name: "Premium", price: "₹15,000", per: "/mo", desc: "For businesses serious about growth & online dominance.", pop: true, bestValue: false, feats: ["Multi-page website + SEO","Social media management","5–6 posts per week + daily stories","Advanced ad campaigns","Weekly performance reports","Competitor analysis","Google My Business setup","Priority support"] },
  { name: "Website Only", price: "₹8,000", per: "", desc: "One-time website development. Clean, fast & mobile-ready.", pop: false, bestValue: true, feats: ["Custom designed website","Mobile responsive","Contact form + WhatsApp button","Basic SEO setup","Google Maps integration","1 month free support"] },
];

export function Pricing() {
  return (
    <section id="pricing" className="w-full py-28 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal><p className="text-[#ff4d00] text-[12px] font-[500] text-center mb-3 tracking-[0.15em] uppercase">Pricing</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-center font-[800] tracking-[-2px] leading-[1.05] mb-4 text-[#ffffff]" style={{ fontSize: "clamp(32px,4.5vw,56px)" }}>
            Transparent <span className="gradient-text">pricing.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}><p className="text-[#888888] text-[17px] text-center max-w-[500px] mx-auto mb-16">No hidden fees. No surprises. Pick what works for you.</p></Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch" stagger={0.12}>
          {plans.map((p) => (
            <StaggerItem key={p.name}>
              <PremiumCard
                className={`border rounded-[20px] p-10 flex flex-col relative ${
                  p.pop
                    ? "bg-[rgba(255,77,0,0.05)] border-[rgba(255,77,0,0.25)]"
                    : "bg-[rgba(255,255,255,0.03)] border-[rgba(255,255,255,0.08)]"
                }`}
              >
                {p.pop && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ff4d00] text-white text-[11px] font-extrabold px-5 py-1 rounded-full">
                    Popular
                  </span>
                )}
                {p.bestValue && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#111] text-white text-[11px] font-extrabold px-5 py-1 rounded-full whitespace-nowrap">
                    Best Value
                  </span>
                )}
                <h3 className="font-display text-xl font-[700] mb-1 text-[#ffffff]">{p.name}</h3>
                <p className="text-[#888888] text-sm mb-7">{p.desc}</p>
                <div className="font-display text-[52px] font-[700] tracking-[-3px] mb-1 text-[#ffffff]">{p.price}</div>
                <p className="text-[#666666] text-sm mb-8">{p.per ? "per month" : "one-time payment"}</p>
                <div className="flex flex-col gap-3.5 mb-9 flex-1">
                  {p.feats.map((f) => (
                    <div key={f} className="flex items-center gap-3 text-sm text-[#aaaaaa] font-medium">
                      <CheckCircle2 className="w-[18px] h-[18px] text-[#ff4d00] flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
                <MagneticButton
                  href="#contact"
                  className={`block text-center font-bold text-[15px] py-4 rounded-full transition-all duration-300 ${
                    p.pop
                      ? "bg-[#ff4d00] text-[#ffffff] hover:bg-[#e64500]"
                      : "bg-[rgba(255,255,255,0.06)] text-[#ffffff] border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.1)]"
                  }`}
                >
                  Get Started
                </MagneticButton>
              </PremiumCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
