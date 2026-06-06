"use client";

import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";

export function Portfolio() {
  const projects = [
    {
      id: "ironforge",
      title: "IronForge Gym",
      industry: "Fitness & Wellness",
      desc: "A premium fitness studio website featuring program listings, trainer profiles, and an integrated booking system.",
      tags: "Next.js · React · Tailwind",
      demoUrl: "/demos/gym/index.html",
      badgeText: "Demo Project",
      badgeStyle: "bg-white/[0.06] text-[#888888]",
      bgStyle: "bg-gradient-to-br from-[#111111] to-[#1a1a1a]",
    },
    {
      id: "aura",
      title: "Aura Interiors",
      industry: "Interior Design",
      desc: "A luxury interior design portfolio with masonry gallery, service pages, and client testimonial sections.",
      tags: "Next.js · Framer Motion · Tailwind",
      demoUrl: "/demos/interior/index.html",
      badgeText: "Demo Project",
      badgeStyle: "bg-white/[0.06] text-[#888888]",
      bgStyle: "bg-gradient-to-br from-[#0f0f0f] to-[#181210]",
    },
    {
      id: "bridal",
      title: "Bridal Makeup Studio",
      industry: "Beauty & Bridal",
      desc: "A bridal MUA portfolio site with photo gallery, service packages, and direct WhatsApp booking integration.",
      tags: "Next.js · React · WhatsApp API",
      demoUrl: "/demos/bridal/index.html",
      badgeText: "Client Project",
      badgeStyle: "bg-[#ff4d00]/10 text-[#ff4d00]",
      bgStyle: "bg-gradient-to-br from-[#120a0a] to-[#1a0f0f]",
    },
  ];

  return (
    <section id="portfolio" className="py-28 relative">
      <div className="cx">
        <div className="text-center mb-16">
          <span className="label-small mb-4 block">Our Work</span>
          <h2 className="heading-primary text-4xl md:text-[3.5rem] leading-[1.1] mb-6">
            Real projects.<br />Honest presentation.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="premium-card overflow-hidden flex flex-col bg-[#0d0d0d]"
            >
              {/* CSS Mockup Area */}
              <div className={`h-[280px] w-full relative ${project.bgStyle} p-6 flex flex-col justify-end border-b border-white/[0.05]`}>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase ${project.badgeStyle}`}>
                    {project.badgeText}
                  </span>
                </div>
                
                {/* Mini CSS Layout Preview */}
                <div className="w-full bg-[#151515] rounded-t-lg border border-white/[0.05] border-b-0 h-[80%] flex flex-col overflow-hidden shadow-2xl">
                  {/* Header Bar */}
                  <div className="h-6 w-full border-b border-white/[0.05] bg-[#1a1a1a] flex items-center px-3 gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/10"></div>
                    <div className="w-2 h-2 rounded-full bg-white/10"></div>
                    <div className="w-2 h-2 rounded-full bg-white/10"></div>
                  </div>
                  {/* Live iframe preview scaled down as a thumbnail */}
                  <div className="relative flex-1 w-full bg-[#0a0a0a] overflow-hidden">
                    <div className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25]">
                      <iframe 
                        src={project.demoUrl} 
                        className="w-full h-full border-none pointer-events-none"
                        tabIndex={-1}
                        title={`${project.title} Preview`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="text-[13px] text-[#ff4d00] font-medium mb-2">{project.industry}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-[#888888] text-[15px] mb-6 flex-1">{project.desc}</p>
                <div className="text-[13px] text-white/40 mb-6">{project.tags}</div>
                
                <div className="flex items-center gap-4 mt-auto">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3 px-4 border border-[#ff4d00] text-[#ff4d00] hover:bg-[#ff4d00] hover:text-white transition-colors rounded-full text-sm font-semibold flex items-center justify-center gap-2 group"
                  >
                    Live Demo
                    <MoveUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                  <a 
                    href="#contact"
                    className="flex-1 text-center py-3 px-4 text-white/70 hover:text-white transition-colors rounded-full text-sm font-semibold"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
