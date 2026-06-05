"use client";

import { Reveal, StaggerContainer, StaggerItem } from "@/components/Animations";

const industries = [
  { icon: "💍", label: "Bridal Studios" },
  { icon: "💇", label: "Salons & Spas" },
  { icon: "🏋️", label: "Gyms & Fitness" },
  { icon: "🍽️", label: "Restaurants & Cafes" },
  { icon: "👗", label: "Boutiques & Fashion" },
  { icon: "🎓", label: "Coaching Centres" },
  { icon: "🏥", label: "Clinics & Doctors" },
  { icon: "🏠", label: "Real Estate" },
];

export function Industries() {
  return (
    <section id="industries" className="w-full py-28 bg-[#080808] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal><p className="text-[#ff4d00] text-[12px] font-[500] text-center mb-3 uppercase tracking-[0.15em]">Industries</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-center font-[800] tracking-[-2px] leading-[1.05] mb-4 text-[#ffffff]" style={{ fontSize: "clamp(32px,4.5vw,56px)" }}>
            We know your industry.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-[#888888] text-[17px] text-center max-w-[500px] mx-auto mb-16">
            We&apos;ve built growth strategies for businesses across Madurai and South Tamil Nadu.
          </p>
        </Reveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" stagger={0.07}>
          {industries.map((ind) => (
            <StaggerItem key={ind.label}>
              <div
                className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] rounded-[16px] px-6 py-8 text-center transition-all duration-300 hover:scale-[1.04] hover:border-[rgba(255,77,0,0.4)] hover:shadow-[0_8px_32px_rgba(255,77,0,0.08)] cursor-default"
                style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}
              >
                <div className="text-[32px] mb-3">{ind.icon}</div>
                <div className="text-[13px] font-medium text-[#e0e0e0] mt-[12px] tracking-[0.05em]">
                  {ind.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
