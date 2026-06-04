"use client";
import React, { useState } from "react";

const skillCategories = [
  { name: "Languages", skills: [
    { name: "C", level: 85, color: "#00599C" },
    { name: "C++", level: 80, color: "#004482" },
    { name: "Java", level: 75, color: "#f89820" },
    { name: "Python", level: 90, color: "#3776ab" },
    { name: "JavaScript", level: 85, color: "#f7df1e" },
    { name: "TypeScript", level: 70, color: "#3178c6" },
  ]},
  { name: "Frontend", skills: [
    { name: "React", level: 85, color: "#61dafb" },
    { name: "Next.js", level: 80, color: "#ffffff" },
    { name: "HTML/CSS", level: 90, color: "#e34c26" },
    { name: "Tailwind", level: 80, color: "#06b6d4" },
  ]},
  { name: "Backend & ML", skills: [
    { name: "Node.js", level: 80, color: "#339933" },
    { name: "Express", level: 75, color: "#ffffff" },
    { name: "MongoDB", level: 70, color: "#47a248" },
    { name: "Machine Learning", level: 65, color: "#ff6f61" },
    { name: "TensorFlow", level: 60, color: "#ff6f00" },
  ]},
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <p style={{ color: "var(--accent)", fontSize: "0.9rem", fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: 2 }}>My Skills</p>
          <h2 className="section-title gradient-text" style={{ display: "inline-block" }}>Tech Stack</h2>
          <p className="section-subtitle" style={{ margin: "16px auto 0" }}>Technologies I work with to bring ideas to life.</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 48, flexWrap: "wrap" }}>
          {skillCategories.map((cat, i) => (
            <button key={cat.name} onClick={() => setActiveTab(i)}
              style={{ padding: "10px 24px", borderRadius: 50, border: "1px solid", borderColor: activeTab === i ? "var(--accent)" : "var(--border)", background: activeTab === i ? "rgba(108,99,255,0.15)" : "transparent", color: activeTab === i ? "#8b83ff" : "var(--text-secondary)", cursor: "pointer", fontSize: "0.9rem", fontWeight: 500, transition: "all 0.3s ease" }}>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skill Bars */}
        <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
          {skillCategories[activeTab].skills.map((skill) => (
            <div key={skill.name}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontWeight: 500, fontSize: "0.95rem" }}>{skill.name}</span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{skill.level}%</span>
              </div>
              <div style={{ height: 8, borderRadius: 4, background: "var(--bg-card)", overflow: "hidden" }}>
                <div style={{ width: `${skill.level}%`, height: "100%", borderRadius: 4, background: `linear-gradient(90deg, ${skill.color}, var(--accent))`, transition: "width 0.8s ease", boxShadow: `0 0 12px ${skill.color}40` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
