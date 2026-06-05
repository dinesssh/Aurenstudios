"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import { Reveal, MagneticButton } from "@/components/Animations";

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      const res = await fetch("https://formspree.io/f/xpwzabcd", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("idle");
        alert("Oops! There was a problem submitting your form");
      }
    } catch {
      setStatus("idle");
      alert("Oops! There was a problem submitting your form");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-10 text-center flex flex-col items-center justify-center mb-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] h-[400px]">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="w-16 h-16 bg-[#ff4d00] rounded-full flex items-center justify-center text-white mb-6"
        >
          <CheckCircle2 className="w-8 h-8" />
        </motion.div>
        <h3 className="font-display text-[24px] font-[700] mb-2 text-[#ffffff]">Message received!</h3>
        <p className="text-[#888888] text-[15px] mb-8">
          We&apos;ll send your free strategy within 1 hour. Check WhatsApp or email.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="text-[#ff4d00] font-semibold text-[14px] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 text-left mb-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] relative z-10">
      <div className="grid md:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-[13px] font-semibold mb-2 text-[#ffffff]">Full Name</label>
          <input suppressHydrationWarning={true} type="text" name="name" placeholder="Your name" required className="w-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3.5 text-[15px] text-[#ffffff] outline-none focus:border-[#ff4d00] transition-colors" />
        </div>
        <div>
          <label className="block text-[13px] font-semibold mb-2 text-[#ffffff]">Phone Number</label>
          <input suppressHydrationWarning={true} type="tel" name="phone" placeholder="+91 98765 43210" required className="w-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3.5 text-[15px] text-[#ffffff] outline-none focus:border-[#ff4d00] transition-colors" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mb-5">
        <div>
          <label className="block text-[13px] font-semibold mb-2 text-[#ffffff]">Business Type</label>
          <select suppressHydrationWarning={true} name="businessType" defaultValue="" required className="w-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3.5 text-[14px] text-[#ffffff] outline-none focus:border-[#ff4d00] transition-colors appearance-none">
            <option value="" disabled className="text-[#888888]">Select your business</option>
            <option>Bridal Studio</option>
            <option>Salon & Spa</option>
            <option>Gym & Fitness</option>
            <option>Restaurant & Cafe</option>
            <option>Boutique & Fashion</option>
            <option>Coaching Centre</option>
            <option>Clinic & Hospital</option>
            <option>Real Estate</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-[13px] font-semibold mb-2 text-[#ffffff]">Service Needed</label>
          <select suppressHydrationWarning={true} name="service" defaultValue="" required className="w-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3.5 text-[14px] text-[#ffffff] outline-none focus:border-[#ff4d00] transition-colors appearance-none">
            <option value="" disabled className="text-[#888888]">What do you need?</option>
            <option>Social Media Management</option>
            <option>Instagram Ad Campaign</option>
            <option>Website Development</option>
            <option>Complete Digital Package</option>
            <option>Not Sure — Advise Me</option>
          </select>
        </div>
        <div>
          <label className="block text-[13px] font-semibold mb-2 text-[#ffffff]">Monthly Budget</label>
          <select suppressHydrationWarning={true} name="budget" defaultValue="" required className="w-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3.5 text-[14px] text-[#ffffff] outline-none focus:border-[#ff4d00] transition-colors appearance-none">
            <option value="" disabled className="text-[#888888]">Your budget range</option>
            <option>Below ₹5,000</option>
            <option>₹5,000–₹10,000</option>
            <option>₹10,000–₹25,000</option>
            <option>₹25,000+</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-[13px] font-semibold mb-2 text-[#ffffff]">Message</label>
        <textarea suppressHydrationWarning={true} name="message" rows={3} placeholder="Tell us about your business (optional)" className="w-full bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] rounded-xl px-4 py-3.5 text-[15px] text-[#ffffff] outline-none focus:border-[#ff4d00] transition-colors resize-none"></textarea>
      </div>

      <button suppressHydrationWarning={true} disabled={status === "submitting"} type="submit" className="w-full bg-[#ff4d00] hover:bg-[#e04400] text-white font-bold py-4 rounded-xl text-[15px] transition-colors flex items-center justify-center gap-2">
        {status === "submitting" ? "Sending..." : "Send Enquiry — We'll Reply in 1 Hour →"}
      </button>
    </form>
  );
}

export function Contact() {
  return (
    <section id="contact" className="w-full py-28 bg-[#080808]">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <Reveal>
          <div className="max-w-[800px] mx-auto bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)] rounded-[28px] p-8 md:p-16 text-center relative shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,77,0,0.04)_0%,transparent_70%)] pointer-events-none" />

            <div className="inline-flex items-center gap-2 bg-[rgba(255,77,0,0.06)] rounded-full px-5 py-2 text-[13px] text-[#ff4d00] font-bold mb-7 relative z-10">
              <MessageCircle className="w-3.5 h-3.5" /> Let&apos;s Talk
            </div>

            <h2 className="font-display font-[800] tracking-[-1.5px] mb-4 relative z-10 text-[#ffffff]" style={{ fontSize: "clamp(28px,4vw,48px)" }}>
              Let&apos;s grow <span className="gradient-text">your business.</span>
            </h2>
            <p className="text-[#888888] text-[16px] max-w-[420px] mx-auto mb-10 relative z-10 leading-[1.6]">
              Tell us about your business and we&apos;ll send you a free growth strategy within 24 hours. No commitment needed.
            </p>

            <ContactForm />

            <div className="flex justify-center gap-4 flex-wrap mb-10 relative z-10">
              <MagneticButton
                href="https://wa.me/917305757075?text=Hi%2C%20I%20found%20AurenStudio%20online%20and%20I%27m%20interested%20in%20your%20services."
                className="bg-[#25D366] text-white font-bold px-9 py-4 rounded-full text-[15px] inline-flex items-center gap-2 hover:bg-[#20bd5a] hover:shadow-[0_8px_24px_rgba(37,211,102,0.2)] transition-all duration-300"
              >
                <MessageCircle className="w-[18px] h-[18px]" /> WhatsApp Us
              </MagneticButton>
              <MagneticButton
                href="mailto:hello@aurenstudio.com?subject=Project%20Enquiry%20%E2%80%94%20AurenStudio"
                className="bg-[rgba(255,255,255,0.06)] text-[#ffffff] font-bold px-9 py-4 rounded-full text-[15px] inline-flex items-center gap-2 border border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300"
              >
                <Mail className="w-[18px] h-[18px]" /> Send Email
              </MagneticButton>
            </div>

            <div className="flex justify-center gap-7 flex-wrap text-[#888888] text-[13px] relative z-10">
              <div className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-[#ff4d00]" /> +91 73057 57075</div>
              <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#ff4d00]" /> Madurai, India</div>
              <div className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-[#ff4d00]" /> hello@aurenstudio.com</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
