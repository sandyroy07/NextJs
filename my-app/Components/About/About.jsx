"use client";
import React from "react";

const About = () => {
  const highlights = [
    { icon: "💻", title: "Full Stack", desc: "End-to-end web development with modern frameworks" },
    { icon: "🧠", title: "ML & AI", desc: "Exploring machine learning and intelligent systems" },
    { icon: "🚀", title: "Performance", desc: "Building fast, optimized, and scalable applications" },
    { icon: "🎨", title: "UI/UX", desc: "Crafting beautiful, intuitive user interfaces" },
  ];

  return (
    <section id="about" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container">
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <p style={{ color: "var(--accent)", fontSize: "0.9rem", fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: 2 }}>About Me</p>
          <h2 className="section-title gradient-text" style={{ display: "inline-block" }}>Who I Am</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, fontSize: "1.05rem", marginBottom: 20 }}>
              I&apos;m <strong style={{ color: "var(--text-primary)" }}>Sandeep Roy</strong>, a passionate Full Stack Developer who loves building modern web applications and diving deep into Machine Learning.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, fontSize: "1.05rem", marginBottom: 20 }}>
              With a strong foundation in languages like <span style={{ color: "#6c63ff" }}>C, C++, Java, and Python</span>, I bring both systems-level understanding and high-level development skills to every project.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, fontSize: "1.05rem" }}>
              I believe in writing clean, maintainable code and creating experiences that users love. Always learning, always building.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {highlights.map((item) => (
              <div key={item.title} className="glow-border" style={{ padding: 24, borderRadius: 16, background: "var(--bg-card)", textAlign: "center", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.background = "var(--bg-card-hover)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "var(--bg-card)"; }}>
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>{item.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
