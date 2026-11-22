"use client";

import { ChevronRight, Phone, Mail, MapPin, Linkedin, Github, Twitter, Send, Heart } from "lucide-react";
import { OrcidIcon, WhatsAppIcon } from "./BrandIcons";
import { handleNavClick } from "./scroll";
import { profile, socials, footer } from "@/data/profile";

const quickLinks = ["home", "about", "skills", "education", "projects", "experience", "research", "contact"];

export default function Footer() {
  const iconCls = "w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center hover:text-white transition-all";
  const links = [
    { name: "LinkedIn", url: socials.linkedin, icon: <Linkedin size={18} />, hover: "hover:bg-blue-600", external: true },
    { name: "GitHub", url: socials.github, icon: <Github size={18} />, hover: "hover:bg-blue-600", external: true },
    { name: "Email", url: profile.email && `mailto:${profile.email}`, icon: <Mail size={18} />, hover: "hover:bg-blue-600" },
    { name: "Twitter", url: socials.twitter, icon: <Twitter size={18} />, hover: "hover:bg-blue-600", external: true },
    { name: "ORCID", title: "ORCID", url: socials.orcid, icon: <OrcidIcon size={18} />, hover: "hover:bg-[#a6ce39]", external: true },
    { name: "WhatsApp", title: socials.whatsappLabel, url: socials.whatsapp, icon: <WhatsAppIcon size={18} />, hover: "hover:bg-[#25D366]", external: true },
    { name: "Telegram", url: socials.telegram, icon: <Send size={18} />, hover: "hover:bg-blue-600", external: true },
  ].filter((s) => s.url);

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 pt-16 pb-12 relative overflow-hidden">
      <div className="container w-[90%] sm:w-[95%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-extrabold text-white mb-4 tracking-tight">{footer.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">{footer.text}</p>
            <p className="text-blue-400 font-bold text-sm">{footer.motto}</p>
          </div>

          <div>
            <h3 className="text-xl font-extrabold text-white mb-4 tracking-tight">Quick Links</h3>
            <ul className="space-y-2 text-sm font-semibold text-slate-400">
              {quickLinks.map((name) => (
                <li key={name}>
                  <a
                    href={`#${name}`}
                    onClick={(e) => handleNavClick(e, `#${name}`)}
                    className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 capitalize touch-manipulation"
                  >
                    <ChevronRight size={14} className="text-blue-500" />
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-extrabold text-white mb-4 tracking-tight">Contact Info</h3>
            <div className="space-y-3 text-sm text-slate-400 font-medium mb-6">
              <p className="flex items-center gap-2.5">
                <Phone size={16} className="text-blue-500 shrink-0" />
                {profile.phone}
              </p>
              <p className="flex items-center gap-2.5 break-all">
                <Mail size={16} className="text-blue-500 shrink-0" />
                {profile.email}
              </p>
              <p className="flex items-center gap-2.5">
                <MapPin size={16} className="text-blue-500 shrink-0" />
                {profile.location}
              </p>
            </div>
            <div className="flex items-center gap-3">
              {links.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  aria-label={s.name}
                  title={s.title}
                  className={`${iconCls} ${s.hover}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-center">
          <p className="text-slate-500 text-sm font-semibold inline-flex items-center gap-1.5">
            Designed with <Heart size={16} className="text-rose-500 fill-rose-500 animate-pulse" /> by{" "}
            <a href={footer.creditUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors font-bold">
              {footer.creditName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
