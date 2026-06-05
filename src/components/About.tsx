"use client";

import { Reveal } from "@/components/Animations";

export function About() {
  return (
    <section id="about" className="w-full py-28 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <Reveal><p className="text-[#ff4d00] text-[12px] font-[500] text-center mb-3 tracking-[0.15em] uppercase">About</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-center font-[800] tracking-[-2px] leading-[1.05] mb-16 text-[#ffffff]" style={{ fontSize: "clamp(32px,4.5vw,56px)" }}>
            The team behind <span className="gradient-text">AurenStudio.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="max-w-[600px] mx-auto text-center">
            <div className="w-[72px] h-[72px] rounded-full mx-auto mb-6 flex items-center justify-center relative shadow-[0_0_20px_rgba(192,192,192,0.1)]" style={{ background: "linear-gradient(135deg, #1a1a1a, #2a2a2a)", border: "1px solid rgba(192,192,192,0.2)" }}>
              <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4L4 36H11L20 18L29 36H36L20 4Z" fill="#c0c0c0"/>
                <path d="M20 12L13 26H27L20 12Z" fill="#c0c0c0"/>
              </svg>
            </div>
            <p className="text-[12px] text-[#ff4d00] font-[500] tracking-[1px] uppercase mb-2">Digital Marketing & Web Development</p>
            <h3 className="font-display text-[30px] font-[600] tracking-[-0.5px] mb-1 text-[#ffffff]">AurenStudio Team</h3>
            <p className="text-[#888888] text-sm mb-6">Madurai, Tamil Nadu 🇮🇳</p>
            <p className="text-[#888888] text-[15px] leading-[1.8] mb-7">
              We&apos;re a digital marketing and web development team based in Madurai. AurenStudio was built to help local businesses — bridal studios, salons, gyms, restaurants — compete online without overpaying big agencies. We handle every campaign, every post, every website — end to end. When you work with us, you get a dedicated team that treats your business like our own. No fluff, just results.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              {["Web Development","Social Media","Ad Campaigns","SEO"].map((s) => (
                <span
                  key={s}
                  className="text-[13px] text-[#aaaaaa] bg-[rgba(255,255,255,0.06)] px-5 py-2 rounded-[6px] font-medium hover:text-[#ff4d00] transition-all duration-300 cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
