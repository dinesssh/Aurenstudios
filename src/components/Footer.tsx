"use client";



export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.05] pt-20 pb-10">
      <div className="cx">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-[10px] group mb-6 inline-flex">
              <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4L4 36H11L20 18L29 36H36L20 4Z" fill="#c0c0c0"/>
                <path d="M20 12L13 26H27L20 12Z" fill="#c0c0c0"/>
              </svg>
              <div className="flex flex-col justify-center">
                <span className="text-[13px] font-[300] tracking-[0.2em] text-[#ffffff] uppercase leading-none">AUREN</span>
                <span className="text-[8px] font-normal tracking-[0.35em] text-[#666666] mt-[1px] leading-none block">— STUDIO —</span>
              </div>
            </a>
            <p className="text-[#888888] text-[14px] leading-[1.7] mb-4">
              A digital agency based in Madurai helping businesses build and grow their online presence.
            </p>
            <div className="text-[12px] font-semibold tracking-widest text-[#ff4d00] uppercase">
              Design. Build. Grow.
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-[14px] text-[#888888]">
              <li><a href="#services" className="hover:text-[#ff4d00] transition-colors">Premium Websites</a></li>
              <li><a href="#services" className="hover:text-[#ff4d00] transition-colors">Digital Marketing</a></li>
              <li><a href="#services" className="hover:text-[#ff4d00] transition-colors">Meta Ads</a></li>
              <li><a href="#services" className="hover:text-[#ff4d00] transition-colors">Social Media</a></li>
              <li><a href="#services" className="hover:text-[#ff4d00] transition-colors">AI Automations</a></li>
              <li><a href="#services" className="hover:text-[#ff4d00] transition-colors">Branding & Identity</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-[14px] text-[#888888]">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-[14px] text-[#888888]">
              <li><a href="tel:+917305757075" className="hover:text-white transition-colors">+91 73057 57075</a></li>
              <li><a href="mailto:hello@aurenstudio.com" className="hover:text-white transition-colors">hello@aurenstudio.com</a></li>
              <li><a href="https://wa.me/917305757075" target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">WhatsApp Us</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-[#555555]">
            © 2026 AurenStudio · Built in Madurai, Tamil Nadu 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
