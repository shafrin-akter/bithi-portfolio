"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "./scroll";
import { profile } from "@/data/profile";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const pos = window.scrollY + 200;
      for (const link of navLinks) {
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToSection(href, 75, 650);
    if (window.history.pushState) window.history.pushState(null, "", href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-1 border-b border-slate-200/80"
          : "bg-white/90 backdrop-blur-sm py-1 border-b border-slate-100"
      }`}
    >
      <div className="container w-[90%] sm:w-[95%] mx-auto flex items-center justify-between">
        <a href="#home" onClick={(e) => go(e, "#home")} className="group flex items-center gap-3 py-1.5 rounded-full transition-all hover:-translate-y-0.5">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-200 overflow-hidden group-hover:border-sky-400 group-hover:shadow-md transition-all">
            <Image src={profile.logo} alt={profile.name} fill className="object-cover transition-transform duration-300 group-hover:scale-110" unoptimized />
          </div>
          <div className="flex flex-col">
            <span className="text-slate-900 font-extrabold text-base sm:text-lg tracking-tight group-hover:text-sky-500 transition-colors">{profile.name}</span>
            <span className="text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest -mt-0.5">{profile.tagline}</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = active === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => go(e, link.href)}
                className={`relative px-3.5 py-1 text-[16px] font-semibold rounded-lg transition-all duration-200 ${
                  isActive ? "text-blue-600 font-bold bg-blue-50/80" : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-600 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2.5 text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-xl transition-colors touch-manipulation"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-lg overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = active === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => go(e, link.href)}
                    className={`block px-4 py-3.5 rounded-xl text-base font-semibold transition-all touch-manipulation active:scale-[0.98] ${
                      isActive ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 font-bold" : "text-slate-700 hover:bg-slate-100 active:bg-slate-100"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
