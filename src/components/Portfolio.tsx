"use client";

import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Reveal, StaggerContainer, StaggerItem, PremiumCard, ParallaxImage } from "@/components/Animations";

const projects = [
  { title: "IronForge Gym", cat: "Web Development", desc: "Premium fitness studio website — programs, trainers, schedule & booking system.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", link: "/demos/ironforge/index.html" },
  { title: "Aura Interiors", cat: "Web Dev + Branding", desc: "Luxury interior design studio — portfolio gallery, services & client testimonials.", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80", link: "/demos/aura/index.html" },
  { title: "Bridal Studio", cat: "Web Dev + SMM + Ads", desc: "Premium bridal MUA portfolio — gallery, booking calendar & WhatsApp integration.", img: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80", link: "/demos/bridal/index.html" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-28 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Reveal><p className="text-[#ff4d00] text-[12px] font-[500] text-center mb-3 tracking-[0.15em] uppercase">Portfolio</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-center font-[800] tracking-[-2px] leading-[1.05] mb-16 text-[#ffffff]" style={{ fontSize: "clamp(32px,4.5vw,56px)" }}>
            Work we&apos;re <span className="gradient-text">proud of.</span>
          </h2>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.15}>
          {projects.map((p) => (
            <StaggerItem key={p.title}>
              <Link href={p.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${p.title} Demo`}>
                <PremiumCard className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-3xl overflow-hidden cursor-pointer group">
                  <div className="h-[220px] relative">
                    <ParallaxImage src={p.img} alt={p.title} className="h-full" speed={0.08} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                      <span className="bg-white text-[#111] font-bold text-sm px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex items-center gap-2 shadow-lg">
                        <ExternalLink className="w-4 h-4" /> View Live Demo
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <span className="text-[11px] text-[#ff4d00] font-bold tracking-[1px] uppercase">{p.cat}</span>
                    <h3 className="font-display text-xl font-bold tracking-[-0.3px] mt-1.5 mb-1.5 text-[#ffffff]">{p.title}</h3>
                    <p className="text-[#888888] text-sm leading-[1.6]">{p.desc}</p>
                  </div>
                </PremiumCard>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
