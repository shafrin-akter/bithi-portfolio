"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Github, Twitter, X, Share2 } from "lucide-react";
import { OrcidIcon, WhatsAppIcon } from "./BrandIcons";
import { socials } from "@/data/profile";

// Floating "Connect with me" button (bottom-right)
export default function SocialFab() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("touchstart", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("touchstart", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const items = [
    { name: "LinkedIn", url: socials.linkedin, icon: <Linkedin size={19} />, hoverBg: "hover:bg-[#0A66C2] hover:border-[#0A66C2]" },
    { name: "GitHub", url: socials.github, icon: <Github size={19} />, hoverBg: "hover:bg-slate-700 hover:border-slate-600" },
    { name: "Twitter", url: socials.twitter, icon: <Twitter size={19} />, hoverBg: "hover:bg-[#1DA1F2] hover:border-[#1DA1F2]" },
    { name: "ORCID", url: socials.orcid, icon: <OrcidIcon size={19} />, hoverBg: "hover:bg-[#a6ce39] hover:border-[#a6ce39]" },
    { name: "WhatsApp", url: socials.whatsapp, icon: <WhatsAppIcon size={19} />, hoverBg: "hover:bg-[#25D366] hover:border-[#25D366]" },
  ].filter((s) => s.url);

  return (
    <div ref={ref} className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex flex-col-reverse items-center gap-3 select-none">
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Close socials menu" : "Connect with me"}
        title={open ? "Close" : "Connect with me"}
        className={`relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-2xl touch-manipulation ${
          open
            ? "bg-slate-800 text-slate-200 border border-slate-700 shadow-black/50 rotate-90"
            : "bg-blue-600 text-white border border-blue-400/40 shadow-blue-600/50 hover:bg-blue-500"
        }`}
      >
        {open ? <X size={22} /> : <Share2 size={22} />}
        {!open && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" />
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col items-center gap-2 p-2 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/70"
          >
            {items.map((s, i) => (
              <motion.div key={s.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 * i }} className="relative group">
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/5 text-slate-300 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${s.hoverBg} hover:text-white touch-manipulation`}
                >
                  {s.icon}
                </a>
                <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-2.5 py-1 bg-slate-900/95 text-white text-xs font-semibold rounded-lg shadow-xl border border-white/10 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-200 z-50">
                  {s.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
