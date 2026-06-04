"use client";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const roles = ["Full Stack Developer", "Python Enthusiast", "ML Explorer", "Problem Solver"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        if (text === current) setTimeout(() => setIsDeleting(true), 1500);
      } else {
        setText(current.substring(0, text.length - 1));
        if (text === "") { setIsDeleting(false); setRoleIndex((i) => (i + 1) % roles.length); }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", padding: "120px 24px 80px" }}>
      {/* Background orbs */}
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(108,99,255,0.15), transparent 70%)", top: "10%", left: "-10%", animation: "float 6s ease-in-out infinite" }} />
      <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,212,255,0.1), transparent 70%)", bottom: "10%", right: "-5%", animation: "float 8s ease-in-out infinite 2s" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
        {/* Left */}
        <div className="animate-fade-up">
          <div style={{ display: "inline-block", padding: "8px 20px", borderRadius: 50, background: "rgba(108,99,255,0.1)", border: "1px solid rgba(108,99,255,0.2)", marginBottom: 24, fontSize: "0.85rem", color: "#8b83ff" }}>
            👋 Welcome to my portfolio
          </div>
          <h1 style={{ fontSize: "3.5rem", fontWeight: 800, lineHeight: 1.1, marginBottom: 16, letterSpacing: "-0.03em" }}>
            Hi, I&apos;m<br />
            <span className="gradient-text">Sandeep Roy</span>
          </h1>
          <div style={{ fontSize: "1.4rem", fontWeight: 500, color: "var(--text-secondary)", marginBottom: 24, minHeight: 40 }}>
            {text}<span style={{ borderRight: "2px solid var(--accent)", marginLeft: 2, animation: "blink-caret 0.75s step-end infinite" }}>&nbsp;</span>
          </div>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 36, maxWidth: 480, fontSize: "1.05rem" }}>
            I build modern, scalable web apps and explore the frontiers of Machine Learning. Passionate about clean code and elegant solutions.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
          </div>
          {/* Stats */}
          <div style={{ display: "flex", gap: 40, marginTop: 48 }}>
            {[["10+", "Projects"], ["5+", "Languages"], ["2+", "Years Exp"]].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontSize: "1.8rem", fontWeight: 700 }} className="gradient-text">{num}</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Avatar area */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="animate-fade-up">
          <div style={{ position: "relative", width: 350, height: 350 }}>
            <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "linear-gradient(135deg, rgba(108,99,255,0.2), rgba(0,212,255,0.1))", border: "2px solid rgba(108,99,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", animation: "pulse-glow 4s ease-in-out infinite" }}>
              <div style={{ fontSize: "6rem", fontWeight: 800, background: "linear-gradient(135deg, #6c63ff, #00d4ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>SR</div>
            </div>
            {/* Orbiting badges */}
            {["⚛️", "🐍", "☕", "🤖"].map((emoji, i) => (
              <div key={i} style={{ position: "absolute", top: "50%", left: "50%", width: 44, height: 44, marginTop: -22, marginLeft: -22, animation: `orbit ${8 + i * 2}s linear infinite`, animationDelay: `${i * -2}s` }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }} className="glass-strong">{emoji}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`@media(max-width:768px){#home>div>div:first-child{grid-column:1/-1}#home>div{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
};

export default Hero;
