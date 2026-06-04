"use client";
import React, { useState } from "react";

const projects = [
  { title: "E-Commerce Platform", desc: "Full-stack e-commerce app with cart, payments, and admin dashboard.", tags: ["React", "Node.js", "MongoDB"], color: "#6c63ff", emoji: "🛒" },
  { title: "ML Image Classifier", desc: "Deep learning model for image classification with 95% accuracy.", tags: ["Python", "TensorFlow", "Flask"], color: "#00d4ff", emoji: "🤖" },
  { title: "Task Manager Pro", desc: "Real-time task management app with drag-and-drop and team features.", tags: ["Next.js", "TypeScript", "Prisma"], color: "#e040fb", emoji: "📋" },
  { title: "Chat Application", desc: "Real-time messaging app with WebSockets and end-to-end encryption.", tags: ["React", "Socket.io", "Express"], color: "#ff6f61", emoji: "💬" },
  { title: "Portfolio Website", desc: "This very portfolio — built with Next.js and modern animations.", tags: ["Next.js", "CSS", "React"], color: "#47a248", emoji: "🌐" },
  { title: "Data Visualizer", desc: "Interactive dashboard for visualizing complex datasets in real time.", tags: ["Python", "D3.js", "Pandas"], color: "#f7df1e", emoji: "📊" },
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container">
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <p style={{ color: "var(--accent)", fontSize: "0.9rem", fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: 2 }}>My Work</p>
          <h2 className="section-title gradient-text" style={{ display: "inline-block" }}>Projects</h2>
          <p className="section-subtitle" style={{ margin: "16px auto 0" }}>A selection of projects I&apos;ve built and am proud of.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 24 }}>
          {projects.map((project, i) => (
            <div key={project.title}
              className="glow-border"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderRadius: 20, background: "var(--bg-card)", overflow: "hidden", transition: "all 0.4s ease",
                transform: hovered === i ? "translateY(-8px)" : "translateY(0)",
              }}>
              {/* Card Header */}
              <div style={{ height: 140, background: `linear-gradient(135deg, ${project.color}20, ${project.color}05)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ fontSize: "3.5rem", transition: "transform 0.4s ease", transform: hovered === i ? "scale(1.2) rotate(5deg)" : "scale(1)" }}>{project.emoji}</div>
                <div style={{ position: "absolute", top: 12, right: 12, width: 8, height: 8, borderRadius: "50%", background: project.color, boxShadow: `0 0 12px ${project.color}` }} />
              </div>
              {/* Card Body */}
              <div style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: 8 }}>{project.title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: 16 }}>{project.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{ padding: "4px 12px", borderRadius: 50, background: `${project.color}15`, color: project.color, fontSize: "0.75rem", fontWeight: 500, border: `1px solid ${project.color}30` }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
