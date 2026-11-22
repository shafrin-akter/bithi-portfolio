"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Linkedin, Github, Twitter } from "lucide-react";
import { OrcidIcon, WhatsAppIcon } from "./BrandIcons";
import { handleNavClick } from "./scroll";
import { profile, hero, socials } from "@/data/profile";

function Typewriter({ strings, typeSpeed = 50, backSpeed = 30, backDelay = 1500, className = "" }) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!strings || strings.length === 0) return;
    const current = strings[index];
    let t;
    if (deleting) {
      if (length > 0) t = setTimeout(() => setLength((l) => l - 1), backSpeed);
      else {
        setDeleting(false);
        setIndex((i) => (i + 1) % strings.length);
      }
    } else if (length < current.length) {
      t = setTimeout(() => setLength((l) => l + 1), typeSpeed);
    } else {
      t = setTimeout(() => setDeleting(true), backDelay);
    }
    return () => clearTimeout(t);
  }, [length, deleting, index, strings, typeSpeed, backSpeed, backDelay]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{(strings[index] || "").substring(0, length)}</span>
      <span className="ml-1 w-0.5 h-6 bg-blue-500 animate-pulse" />
    </span>
  );
}

const iconBtn =
  "w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 border border-white/10 text-slate-400 flex items-center justify-center hover:text-white transition-all hover:-translate-y-1 hover:shadow-lg touch-manipulation";

export default function Hero() {
  const links = [
    { name: "LinkedIn", url: socials.linkedin, icon: <Linkedin size={18} className="sm:w-5 sm:h-5" />, hover: "hover:bg-blue-600 hover:border-blue-600 hover:shadow-blue-500/30" },
    { name: "GitHub", url: socials.github, icon: <Github size={18} className="sm:w-5 sm:h-5" />, hover: "hover:bg-blue-600 hover:border-blue-600 hover:shadow-blue-500/30" },
    { name: "Twitter", url: socials.twitter, icon: <Twitter size={18} className="sm:w-5 sm:h-5" />, hover: "hover:bg-blue-600 hover:border-blue-600 hover:shadow-blue-500/30" },
    { name: "ORCID", title: "ORCID", url: socials.orcid, icon: <OrcidIcon size={18} className="sm:w-5 sm:h-5" />, hover: "hover:bg-[#a6ce39] hover:border-[#a6ce39] hover:shadow-[#a6ce39]/30" },
    { name: "WhatsApp", title: socials.whatsappLabel, url: socials.whatsapp, icon: <WhatsAppIcon size={18} className="sm:w-5 sm:h-5" />, hover: "hover:bg-[#25D366] hover:border-[#25D366] hover:shadow-[#25D366]/30" },
  ].filter((s) => s.url);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-[radial-gradient(circle_at_10%_20%,#111827_0%,#0f172a_100%)] overflow-hidden text-white scroll-mt-24"
    >
      <div className="absolute -top-[10%] -left-[5%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-float-bg pointer-events-none" />
      <div className="absolute -bottom-[10%] -right-[5%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-slate-800/40 rounded-full blur-[120px] animate-float-bg pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none z-0" />

      <div className="relative z-10 container w-[90%] sm:w-[95%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
              <span className="text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-widest">{hero.statusBadge}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              {hero.greeting} <br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">{hero.name}</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 font-normal mb-8 border-l-4 border-blue-500 pl-4 py-1">
              {hero.expertiseLabel} <Typewriter strings={hero.typingTexts} className="text-white font-bold" />
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-10">
              <a
                href={hero.primaryButton.href}
                onClick={(e) => handleNavClick(e, hero.primaryButton.href)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-semibold text-base rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 touch-manipulation"
              >
                {hero.primaryButton.label} <ChevronRight size={18} />
              </a>
              <a
                href={hero.secondaryButton.href}
                onClick={(e) => handleNavClick(e, hero.secondaryButton.href)}
                className="px-6 py-4 text-slate-300 hover:text-blue-400 font-medium text-base transition-colors touch-manipulation"
              >
                {hero.secondaryButton.label}
              </a>
            </div>

            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold sm:text-xs">Connect:</span>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                {links.map((s) => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} title={s.title} className={`${iconBtn} ${s.hover}`}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0"
          >
            <div className="absolute w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-blue-500/20 rounded-full blur-[60px] z-0 pointer-events-none" />
            <div className="relative z-10 w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full overflow-hidden border-8 border-white/10 shadow-2xl shadow-black/60">
              <Image src={hero.image} alt={profile.name} fill priority className="object-cover object-top hover:scale-105 transition-transform duration-500" unoptimized />
            </div>

            {hero.bottomBadge && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-4 left-0 sm:left-[5%] bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 shadow-xl z-20"
              >
                <p className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">{hero.bottomBadge.title}</p>
                <p className="text-xs sm:text-sm font-bold text-white">{hero.bottomBadge.subtitle}</p>
              </motion.div>
            )}

            {hero.topBadge && (
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-4 right-0 sm:right-[5%] bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 shadow-xl z-20 max-w-[210px]"
              >
                <p className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">{hero.topBadge.title}</p>
                <p className="text-xs sm:text-sm font-bold text-white">{hero.topBadge.subtitle}</p>
                {hero.topBadge.extra && <p className="text-[10px] text-slate-400 font-normal leading-tight mt-0.5">{hero.topBadge.extra}</p>}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
