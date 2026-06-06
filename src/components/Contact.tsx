"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 relative bg-[#0a0a0a]">
      <div className="cx max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 lg:gap-20">
          
          <div>
            <span className="label-small mb-4 block">Get In Touch</span>
            <h2 className="heading-primary text-4xl md:text-5xl leading-[1.1] mb-6">
              Start a conversation.
            </h2>
            <p className="text-[#888888] text-lg leading-[1.6] mb-10">
              Tell us about your project and we&apos;ll get back to you within a few hours.
            </p>

            <div className="space-y-6">
              <div>
                <div className="text-[12px] font-semibold text-[#555555] uppercase tracking-wider mb-1">Email Us</div>
                <a href="mailto:hello@aurenstudio.com" className="text-lg text-white hover:text-[#ff4d00] transition-colors">hello@aurenstudio.com</a>
              </div>
              <div>
                <div className="text-[12px] font-semibold text-[#555555] uppercase tracking-wider mb-1">Call / WhatsApp</div>
                <a href="https://wa.me/917305757075" target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-[#ff4d00] transition-colors">+91 73057 57075</a>
              </div>
              <div>
                <div className="text-[12px] font-semibold text-[#555555] uppercase tracking-wider mb-1">Location</div>
                <div className="text-lg text-white">Madurai, Tamil Nadu 🇮🇳</div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="premium-card p-8 md:p-10 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[13px] font-medium text-white">Name</label>
                  <input required type="text" id="name" className="bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff4d00] transition-colors" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[13px] font-medium text-white">Email</label>
                  <input required type="email" id="email" className="bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff4d00] transition-colors" placeholder="john@company.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-[13px] font-medium text-white">Service Needed</label>
                  <select required id="service" defaultValue="" className="bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff4d00] transition-colors appearance-none">
                    <option value="" disabled>Select a service</option>
                    <option value="Premium Website">Premium Website</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Meta Ads Management">Meta Ads Management</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="AI Automation">AI Automation</option>
                    <option value="AI Agent Development">AI Agent Development</option>
                    <option value="SaaS / Web Application">SaaS / Web Application</option>
                    <option value="Branding & Identity">Branding & Identity</option>
                    <option value="Business Strategy">Business Strategy</option>
                    <option value="Not Sure — Let&apos;s Talk">Not Sure — Let&apos;s Talk</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="budget" className="text-[13px] font-medium text-white">Estimated Budget</label>
                  <select required id="budget" defaultValue="" className="bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff4d00] transition-colors appearance-none">
                    <option value="" disabled>Select a budget</option>
                    <option value="Under ₹10,000">Under ₹10,000</option>
                    <option value="₹10,000 – ₹25,000">₹10,000 – ₹25,000</option>
                    <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                    <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                    <option value="₹1,00,000+">₹1,00,000+</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[13px] font-medium text-white">Project Details</label>
                <textarea required id="message" rows={4} className="bg-[#111111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#ff4d00] transition-colors resize-none" placeholder="Tell us a bit about what you want to build..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === "submitting" || status === "success"}
                className="mt-2 w-full bg-[#ff4d00] text-white font-semibold py-4 rounded-lg hover:bg-[#e04400] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "idle" && "Send Message"}
                {status === "submitting" && "Sending..."}
                {status === "success" && "Message Sent!"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
