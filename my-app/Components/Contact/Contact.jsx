"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const contactInfo = [
    { icon: "📧", label: "Email", value: "sandeep@example.com" },
    { icon: "📍", label: "Location", value: "India" },
    { icon: "💼", label: "Status", value: "Open to opportunities" },
  ];

  const inputStyle = (field) => ({
    width: "100%", padding: "14px 18px", borderRadius: 12, border: "1px solid", fontSize: "0.95rem",
    borderColor: focused === field ? "var(--accent)" : "var(--border)",
    background: "var(--bg-primary)", color: "var(--text-primary)", outline: "none",
    transition: "all 0.3s ease",
    boxShadow: focused === field ? "0 0 20px var(--accent-glow)" : "none",
  });

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <p style={{ color: "var(--accent)", fontSize: "0.9rem", fontWeight: 600, marginBottom: 8, textTransform: "uppercase", letterSpacing: 2 }}>Get in Touch</p>
          <h2 className="section-title gradient-text" style={{ display: "inline-block" }}>Contact Me</h2>
          <p className="section-subtitle" style={{ margin: "16px auto 0" }}>Have a project in mind? Let&apos;s work together!</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 48, maxWidth: 900, margin: "0 auto" }}>
          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {contactInfo.map((item) => (
              <div key={item.label} className="glow-border" style={{ display: "flex", alignItems: "center", gap: 16, padding: 20, borderRadius: 16, background: "var(--bg-card)" }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", background: "rgba(108,99,255,0.1)" }}>{item.icon}</div>
                <div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontWeight: 500, fontSize: "0.95rem" }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange}
              onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} style={inputStyle("name")} />
            <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange}
              onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} style={inputStyle("email")} />
            <textarea name="message" placeholder="Your Message" rows={5} value={formData.message} onChange={handleChange}
              onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
              style={{ ...inputStyle("message"), resize: "vertical", fontFamily: "inherit" }} />
            <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
              Send Message ✉️
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
