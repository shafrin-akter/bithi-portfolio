"use client";

import { motion } from "framer-motion";
import { Code, Brain, Network, ChartPie, Rocket, UserCheck } from "lucide-react";
import { skills, skillsSection } from "@/data/skills";

const icons = {
  code: <Code size={32} className="text-blue-500" />,
  brain: <Brain size={32} className="text-emerald-500" />,
  network: <Network size={32} className="text-purple-500" />,
  "pie-chart": <ChartPie size={32} className="text-amber-500" />,
  rocket: <Rocket size={32} className="text-cyan-500" />,
  "user-check": <UserCheck size={32} className="text-rose-500" />,
};

const highlights = {
  "highlight-blue": "group-hover:bg-blue-600 group-hover:border-blue-600",
  "highlight-green": "group-hover:bg-emerald-600 group-hover:border-emerald-600",
  "highlight-purple": "group-hover:bg-purple-600 group-hover:border-purple-600",
  "highlight-orange": "group-hover:bg-amber-600 group-hover:border-amber-600",
  "highlight-cyan": "group-hover:bg-cyan-600 group-hover:border-cyan-600",
  "highlight-red": "group-hover:bg-rose-600 group-hover:border-rose-600",
};

export default function Skills() {
  return (
    <section id="skills" className="py-[50px] md:py-[50px] lg:py-[100px] bg-[#0b0f1a] text-white overflow-hidden scroll-mt-24">
      <div className="container w-[90%] sm:w-[95%] mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-5">
            {skillsSection.heading} <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">{skillsSection.headingAccent}</span>
          </h2>
          <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">{skillsSection.subheading}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group bg-[#161b2b] hover:bg-[#1c233a] border border-white/10 hover:border-blue-500/80 p-8 sm:p-10 rounded-3xl transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  {icons[group.icon]}
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">{group.title}</h3>
                </div>
                {group.subtitle && <p className="text-slate-400 text-xs uppercase tracking-widest font-extrabold mb-5">{group.subtitle}</p>}
                <div className="flex flex-wrap gap-2.5">
                  {group.tags.map((tag) => (
                    <span key={tag} className={`px-4 py-2 rounded-xl text-sm font-bold bg-white/10 text-white border border-white/15 transition-all duration-300 ${highlights[group.highlightClass] || ""}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
