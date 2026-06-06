"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";


export function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "₹9,999+",
      target: "For businesses ready to go online.",
      features: [
        "Professional single-page website",
        "Mobile responsive design",
        "WhatsApp integration",
        "Contact form",
        "Basic SEO setup",
        "Google Maps integration",
        "1 month support"
      ],
      cta: "Get Started",
      style: "border-white/[0.07] bg-white/[0.025]"
    },
    {
      name: "Growth",
      price: "₹19,999+",
      target: "For businesses focused on leads and conversions.",
      badge: "Most Popular",
      features: [
        "Multi-page website (up to 6 pages)",
        "Lead capture system",
        "SEO foundation + sitemap",
        "Analytics setup (GA4)",
        "WhatsApp automation",
        "Social media setup",
        "2 months support"
      ],
      cta: "Book a Call",
      style: "border-[#ff4d00]/35 bg-[#ff4d00]/[0.03]"
    },
    {
      name: "Custom Solutions",
      price: "Let's Talk",
      target: "For complex digital projects.",
      badge: "Enterprise",
      badgeStyle: "bg-white/10 text-white",
      features: [
        "SaaS & web applications",
        "AI agents & automations",
        "Custom business platforms",
        "Branding & identity systems",
        "Ongoing retainer partnerships"
      ],
      cta: "Request Proposal",
      style: "border-white/[0.07] bg-white/[0.025]"
    }
  ];

  return (
    <section id="pricing" className="py-28 relative">
      <div className="cx">
        <div className="text-center mb-16">
          <h2 className="heading-primary text-4xl md:text-[3.5rem] leading-[1.1] mb-4">
            Simple, honest pricing.
          </h2>
          <p className="text-[#888888] text-lg max-w-2xl mx-auto">
            No hidden fees. No lock-in contracts. Just great work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-[16px] border ${tier.style} p-8 flex flex-col transition-all duration-300 hover:-translate-y-1`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide ${tier.badgeStyle || 'bg-[#ff4d00] text-white'}`}>
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="mb-6 mt-2">
                <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-white mb-2">{tier.price}</div>
                <p className="text-[13px] text-[#ff4d00] font-medium">{tier.target}</p>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {tier.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check size={18} className="text-[#ff4d00] shrink-0 mt-0.5" />
                    <span className="text-[14px] text-[#888888]">{f}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#contact" 
                className={`w-full text-center py-3.5 px-4 rounded-full text-[14px] font-semibold transition-colors ${
                  tier.name === "Growth" 
                    ? "bg-[#ff4d00] text-white hover:bg-[#e04400]" 
                    : "border border-white/20 text-white hover:border-white/50"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-[12px] text-[#555555] leading-[1.6]">
            + All prices exclude GST. Ad budgets are paid directly to platforms (Meta, Google). Custom project pricing on consultation.
          </p>
        </div>
      </div>
    </section>
  );
}
