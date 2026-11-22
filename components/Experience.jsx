"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { timeline, work, extracurricular, certifications } from "@/data/experience";

function TimelineLink({ link }) {
  const sec = link.secondary;
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        flex: "1 1 140px",
        minWidth: 0,
        maxWidth: "100%",
        padding: "12px",
        background: sec ? "transparent" : "#003366",
        color: sec ? "#003366" : "white",
        textDecoration: "none",
        border: sec ? "2px solid #003366" : "none",
        borderRadius: "10px",
        fontWeight: 700,
        fontSize: "0.85em",
        textAlign: "center",
        lineHeight: 1.3,
        whiteSpace: "normal",
        transition: "all 0.4s ease",
      }}
      onMouseOver={(e) => {
        if (sec) {
          e.currentTarget.style.background = "#003366";
          e.currentTarget.style.color = "white";
        } else {
          e.currentTarget.style.background = "#002244";
          e.currentTarget.style.transform = "translateY(-2px)";
        }
      }}
      onMouseOut={(e) => {
        if (sec) {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "#003366";
        } else {
          e.currentTarget.style.background = "#003366";
          e.currentTarget.style.transform = "translateY(0)";
        }
      }}
    >
      {link.label}
    </a>
  );
}

function TimelineItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 * index }}
      className={`container ${item.side}`}
    >
      <div
        className="cert-box"
        style={{
          border: "1px solid #d1d5db",
          padding: "30px",
          borderRadius: "20px",
          background: "linear-gradient(135deg, #ffffff 0%, #eef2f7 100%)",
          boxShadow: "0 15px 35px rgba(0, 51, 102, 0.1)",
        }}
      >
        <div
          className="tag"
          style={{
            display: "inline-block",
            padding: "6px 15px",
            background: item.tagBg,
            color: item.tagColor,
            borderRadius: "50px",
            fontWeight: 800,
            fontSize: "0.75em",
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: "15px",
            boxShadow: "0 4px 10px rgba(0, 51, 102, 0.2)",
          }}
        >
          {item.tag}
        </div>
        <div className="desc">
          <h3 style={{ margin: "0 0 10px", color: "#1a1a1a", fontSize: "1.5em", fontWeight: 800 }}>{item.company}</h3>
          <h4 style={{ margin: "0 0 15px", color: item.tagBg, fontSize: "0.95em", fontWeight: 700 }}>
            {item.role} | {item.period}
          </h4>
          <p style={{ fontSize: "0.95em", color: "#444", lineHeight: 1.7, marginBottom: "25px" }}>{item.description}</p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {item.links.map((link, i) => (
              <TimelineLink key={`${link.label}-${i}`} link={link} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CertCard({ item }) {
  return (
    <div
      className="cert-box"
      style={{
        border: "1px solid #e2e8f0",
        padding: "20px",
        borderRadius: "16px",
        textAlign: "center",
        width: "100%",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <div
          style={{
            overflow: "hidden",
            borderRadius: "10px",
            border: "1px solid #f1f5f9",
            marginBottom: "16px",
            aspectRatio: "4 / 3",
            width: "100%",
            background: "#f8fafc",
            flexShrink: 0,
          }}
        >
          <img
            src={item.image}
            alt={item.alt}
            style={{ width: "100%", height: "100%", aspectRatio: "4 / 3", objectFit: "contain", objectPosition: "center", display: "block" }}
          />
        </div>
        <h3 style={{ margin: "0 0 4px", color: item.accent, fontSize: "1.35em", fontWeight: 800 }}>{item.title}</h3>
        <h4 style={{ margin: "0 0 8px", color: "#1e293b", fontSize: "1.05em" }}>{item.subtitle}</h4>
        <p style={{ margin: "0 0 12px", fontSize: "0.88em", color: "#475569", lineHeight: 1.5 }}>{item.description}</p>
      </div>
      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "8px" }}>
        {item.links.map((link, i) => (
          <a
            key={`${item.id}-${link.label}-${i}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              padding: "11px",
              background: item.accent,
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "0.85em",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

const tabs = [
  { key: "all", icon: "fas fa-th-large", label: "All Experience" },
  { key: "work", icon: "fas fa-briefcase", label: "Work" },
  { key: "extracurricular", icon: "fas fa-hands-helping", label: "Extracurricular" },
  { key: "certification", icon: "fas fa-certificate", label: "Course Certification" },
];

export default function Experience() {
  const [tab, setTab] = useState("all");
  const allCards = [...extracurricular, ...certifications];

  return (
    <section id="experience" className="experience-section">
      <h2 className="heading">
        <i className="fas fa-briefcase" /> Experience
      </h2>

      <div className="experience-buttons">
        {tabs.map((t) => (
          <button key={t.key} className={`exp-btn ${tab === t.key ? "active" : ""}`} onClick={() => setTab(t.key)}>
            <i className={t.icon} /> {t.label}
          </button>
        ))}
      </div>

      {tab === "all" && (
        <div className="experience-container active" id="all">
          <div className="timeline">
            {timeline.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <h3 style={{ margin: "0 0 1.25rem", color: "#003366", fontSize: "2rem", fontWeight: 800, textAlign: "center" }}>All Certificates</h3>
            <div className="cert-row">
              {allCards.map((item) => (
                <CertCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === "work" && (
        <div className="experience-container active" id="work">
          <div className="timeline">
            {work.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      )}

      {tab === "extracurricular" && (
        <div className="experience-container active" id="extracurricular">
          <div className="cert-row">
            {extracurricular.map((item) => (
              <CertCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}

      {tab === "certification" && (
        <div className="experience-container active" id="certification">
          <div className="cert-row">
            {certifications.map((item) => (
              <CertCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
