"use client";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/sandeeproy",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sandeeproy",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://twitter.com/sandeeproy",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
    },
  ];

  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer
      id="footer"
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        padding: "60px 24px 30px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 40,
            marginBottom: 40,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                marginBottom: 12,
                background: "linear-gradient(135deg, #6c63ff, #00d4ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              &lt;SR /&gt;
            </div>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.9rem" }}>
              Full Stack Developer passionate about building beautiful, performant web applications
              and exploring Machine Learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                marginBottom: 16,
                color: "var(--text-primary)",
              }}
            >
              Quick Links
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {quickLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  style={{
                    textDecoration: "none",
                    color: "var(--text-secondary)",
                    fontSize: "0.9rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#6c63ff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                marginBottom: 16,
                color: "var(--text-primary)",
              }}
            >
              Connect
            </h4>
            <div style={{ display: "flex", gap: 12 }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--bg-card)",
                    color: "var(--text-secondary)",
                    transition: "all 0.3s ease",
                    border: "1px solid var(--border)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--accent)";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--bg-card)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "var(--border)", marginBottom: 24 }} />

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
            © {currentYear} Sandeep Roy. All rights reserved.
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
            Built with{" "}
            <span style={{ color: "#6c63ff" }}>Next.js</span> &{" "}
            <span style={{ color: "#00d4ff" }}>❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
