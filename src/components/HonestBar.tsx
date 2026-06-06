import { Zap, Target, Handshake, Shield } from "lucide-react";

export function HonestBar() {
  const values = [
    { text: "Fast Delivery", icon: <Zap size={16} className="text-[#ff4d00]" /> },
    { text: "ROI-Focused", icon: <Target size={16} className="text-[#ff4d00]" /> },
    { text: "Direct Communication", icon: <Handshake size={16} className="text-[#ff4d00]" /> },
    { text: "No Lock-In Contracts", icon: <Shield size={16} className="text-[#ff4d00]" /> },
  ];

  return (
    <div className="w-full bg-[#0d0d0d] border-y border-white/[0.06] py-5 mt-16 md:mt-24">
      <div className="cx flex justify-center gap-8 flex-wrap">
        {values.map((v, i) => (
          <div key={i} className="flex items-center gap-2 text-[14px] text-[#888888] font-medium">
            {v.icon}
            {v.text}
          </div>
        ))}
      </div>
    </div>
  );
}
