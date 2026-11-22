"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Download } from "lucide-react";
import { profile, about } from "@/data/profile";

export default function About() {
  const [hovered, setHovered] = useState("resume");

  const btn = (key) =>
    `inline-flex items-center gap-3 px-7 py-3.5 sm:px-8 sm:py-4 border-2 border-slate-900 active:scale-95 font-bold text-sm sm:text-base rounded-2xl transition-all duration-300 hover:-translate-y-1 touch-manipulation ${
      hovered === key ? "bg-slate-900 text-white shadow-xl shadow-slate-900/15" : "bg-transparent text-slate-900"
    }`;

  return (
    <section id="about" className="relative py-[50px] md:py-[50px] lg:py-[100px] bg-[#fdfdfd] text-slate-900 overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-[radial-gradient(at_0%_0%,rgba(59,130,246,0.04)_0px,transparent_50%),radial-gradient(at_100%_100%,rgba(0,210,255,0.03)_0px,transparent_50%)] pointer-events-none" />
      <div className="relative z-10 container w-[90%] sm:w-[95%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-start"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] h-[460px] sm:h-[520px] rounded-[40px_90px_40px_90px] overflow-hidden shadow-2xl border-[10px] sm:border-[12px] border-white bg-white group">
              <Image src={about.image} alt={profile.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
              <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md p-4 rounded-2xl text-center shadow-lg border border-slate-100">
                <p className="text-base font-extrabold text-slate-900">{profile.name}</p>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mt-0.5">{profile.title}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <span className="inline-block text-blue-600 font-extrabold text-xs sm:text-sm uppercase tracking-[3px] border-b-2 border-blue-600 pb-1 mb-4">{about.tag}</span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] mb-6 tracking-tight">
              {about.heading} <span className="text-blue-600">{about.headingAccent}</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 text-justify">{about.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-10">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail size={22} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Email</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 truncate">{profile.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Location</p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">{profile.location}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4" onMouseLeave={() => setHovered("resume")}>
              {profile.resumeUrl && (
                <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHovered("resume")} className={btn("resume")}>
                  Download Resume <Download size={20} />
                </a>
              )}
              {profile.cvUrl && (
                <a href={profile.cvUrl} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHovered("cv")} className={btn("cv")}>
                  Download CV <Download size={20} />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
