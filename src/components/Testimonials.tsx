"use client";

import { Reveal, StaggerContainer, StaggerItem } from "@/components/Animations";

const testimonials = [
  {
    quote: "Dinessh got us 12 WhatsApp enquiries in the first week. Our bookings increased immediately. Best investment we made.",
    name: "Priya Lakshmi",
    biz: "Bridal MUA, Madurai",
  },
  {
    quote: "Our Instagram went from 400 to 800 followers in one month. The reels he creates look completely professional.",
    name: "Kavitha R.",
    biz: "Salon Owner, Madurai",
  },
  {
    quote: "Finally a website that actually looks premium. My clients always compliment it and it loads super fast.",
    name: "Arjun S.",
    biz: "Gym Owner, Madurai",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-28 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal><p className="text-[#ff4d00] text-[12px] font-[500] text-center mb-3 tracking-[0.15em] uppercase">Testimonials</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-center font-[800] tracking-[-2px] leading-[1.05] mb-16 text-[#ffffff]" style={{ fontSize: "clamp(32px,4.5vw,56px)" }}>
            Don&apos;t just <span className="gradient-text">take our word.</span>
          </h2>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.1}>
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-[20px] px-8 py-10 h-full flex flex-col">
                <div className="text-[#ff4d00] text-[16px] mb-4 tracking-[2px]">★★★★★</div>
                <div className="text-[48px] text-[rgba(255,77,0,0.3)] font-serif leading-none mb-[-10px] mt-[-10px]">“</div>
                <p className="text-[15px] leading-[1.7] text-[#d0d0d0] italic flex-1">{t.quote}</p>
                <div className="mt-5">
                  <div className="font-semibold text-white text-[14px]">{t.name}</div>
                  <div className="text-[12px] text-[#666666] mt-1">{t.biz}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        <Reveal delay={0.2}>
          <p className="text-center text-[#666666] text-[11px] mt-12">
            * Results shown are from real campaign data. Names used with permission.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
