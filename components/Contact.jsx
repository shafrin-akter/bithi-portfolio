"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Twitter, CircleCheck, RotateCcw, CircleAlert, LoaderCircle, Send } from "lucide-react";
import { OrcidIcon, WhatsAppIcon } from "./BrandIcons";
import { profile, socials, contactSection } from "@/data/profile";

const emptyForm = { name: "", email: "", subject: "New Inquiry from Portfolio", message: "" };
const inputCls =
  "w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm outline-none focus:border-blue-500 focus:bg-white transition-all touch-manipulation";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState(emptyForm);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.contactFormEmail}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio Message from ${form.name}`,
          message: form.message,
          _subject: `Portfolio Contact Notification: ${form.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json();
      if (res.ok && (data.success === "true" || data.success === true || data.message)) {
        setStatus("success");
        setForm(emptyForm);
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Failed to send email notification. You can email directly using the button below.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network connection issue. Please check your internet connection or email directly.");
    }
  };

  const iconCls =
    "w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-slate-400 flex items-center justify-center hover:text-white transition-all hover:-translate-y-1 touch-manipulation";
  const links = [
    { name: "LinkedIn", url: socials.linkedin, icon: <Linkedin size={20} />, hover: "hover:bg-blue-600" },
    { name: "GitHub", url: socials.github, icon: <Github size={20} />, hover: "hover:bg-blue-600" },
    { name: "Twitter", url: socials.twitter, icon: <Twitter size={20} />, hover: "hover:bg-blue-600" },
    { name: "ORCID", title: "ORCID", url: socials.orcid, icon: <OrcidIcon size={20} />, hover: "hover:bg-[#a6ce39] hover:border-[#a6ce39]" },
    { name: "WhatsApp", title: socials.whatsappLabel, url: socials.whatsapp, icon: <WhatsAppIcon size={20} />, hover: "hover:bg-[#25D366] hover:border-[#25D366]" },
  ].filter((s) => s.url);

  return (
    <section id="contact" className="relative py-[50px] md:py-[50px] lg:py-[100px] bg-[#080a0f] text-white overflow-hidden scroll-mt-24">
      <div className="absolute -top-[100px] -right-[50px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(37,99,235,0.1)_0%,transparent_70%)] pointer-events-none rounded-full" />
      <div className="absolute -bottom-[50px] -left-[50px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(124,58,237,0.08)_0%,transparent_70%)] pointer-events-none rounded-full" />

      <div className="relative z-10 container w-[90%] sm:w-[95%] mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
            {contactSection.heading} <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">{contactSection.headingAccent}</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-medium">{contactSection.subheading}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[32px] sm:rounded-[40px] shadow-2xl overflow-hidden border border-white/10 grid grid-cols-1 lg:grid-cols-12"
        >
          <div className="lg:col-span-5 bg-slate-900 p-8 sm:p-12 text-white flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5">
            <div>
              <h3 className="text-2xl font-bold tracking-tight mb-10 text-slate-100">Contact Info</h3>
              <div className="space-y-8">
                <a href={`mailto:${profile.email}`} className="flex items-start gap-4 group p-2 -m-2 rounded-2xl hover:bg-slate-800/60 transition-colors touch-manipulation">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Email Address</p>
                    <p className="text-sm font-semibold text-slate-200 group-hover:text-blue-400 transition-colors break-all">{profile.email}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 p-2 -m-2">
                  <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Location</p>
                    <p className="text-sm font-semibold text-slate-200">{profile.location}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-12">
              {links.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} title={s.title} className={`${iconCls} ${s.hover}`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 p-8 sm:p-12 bg-white text-slate-900">
            {status === "success" ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-8 sm:p-10 text-center bg-emerald-50/80 border border-emerald-200 rounded-3xl space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                  <CircleCheck size={36} />
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Email Notification Sent!</h4>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                    Your message has been delivered to <span className="font-semibold text-emerald-700">{profile.email}</span>. I have received an instant alert and will respond
                    to your inquiry shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setForm(emptyForm);
                    setStatus("idle");
                    setErrorMsg("");
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-emerald-600 active:scale-95 text-white font-bold text-sm rounded-xl transition-all shadow-md touch-manipulation"
                >
                  <RotateCcw size={16} /> Send Another Message
                </button>
              </motion.div>
            ) : (
              <form id="contact-form" onSubmit={onSubmit} className="space-y-6">
                {status === "error" && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
                    <CircleAlert size={20} className="shrink-0 text-rose-500 mt-0.5" />
                    <div className="space-y-2">
                      <p>{errorMsg}</p>
                      <a href={`mailto:${profile.email}?subject=Portfolio%20Inquiry`} className="inline-block text-xs font-bold text-blue-600 underline hover:text-blue-800">
                        Click here to email directly via your mail client →
                      </a>
                    </div>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">Full Name *</label>
                    <input type="text" name="name" value={form.name} onChange={onChange} placeholder={contactSection.namePlaceholder} required className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={onChange} placeholder={contactSection.emailPlaceholder} required className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">Subject / Topic</label>
                  <input type="text" name="subject" value={form.subject} onChange={onChange} placeholder="Project Inquiry, Collaboration, Research..." className={inputCls} />
                </div>
                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={onChange}
                    placeholder="Let's talk about your vision, research project, or engineering challenge..."
                    required
                    className={`${inputCls} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full py-4 px-8 font-bold text-base rounded-2xl transition-all duration-300 shadow-xl flex items-center justify-center gap-3 touch-manipulation active:scale-[0.99] ${
                    status === "loading"
                      ? "bg-blue-500 text-white cursor-not-allowed opacity-90"
                      : "bg-slate-900 hover:bg-blue-600 text-white shadow-slate-900/10 hover:shadow-blue-600/20 hover:-translate-y-0.5"
                  }`}
                >
                  {status === "loading" ? (
                    <>
                      <LoaderCircle size={18} className="animate-spin" />
                      Sending Notification...
                    </>
                  ) : (
                    <>
                      Send Message &amp; Notify <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
