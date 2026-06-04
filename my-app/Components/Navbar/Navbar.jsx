"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleClick = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "12px 24px" : "20px 24px",
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(10, 10, 15, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(108, 99, 255, 0.1)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick("home");
          }}
          style={{
            fontSize: "1.5rem",
            fontWeight: 800,
            textDecoration: "none",
            background: "linear-gradient(135deg, #6c63ff, #00d4ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.02em",
          }}
        >
          &lt;SR /&gt;
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
          className="nav-desktop"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.id);
              }}
              style={{
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: activeSection === link.id ? "#6c63ff" : "#a0a0b8",
                transition: "color 0.3s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#6c63ff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color =
                  activeSection === link.id ? "#6c63ff" : "#a0a0b8")
              }
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" style={{ padding: "10px 24px", fontSize: "0.85rem", borderRadius: 10 }}
            onClick={(e) => { e.preventDefault(); handleClick("contact"); }}>
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="nav-hamburger"
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <span style={{
            width: 24, height: 2, background: "#f0f0f5", borderRadius: 2,
            transition: "all 0.3s ease",
            transform: mobileOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
          }} />
          <span style={{
            width: 24, height: 2, background: "#f0f0f5", borderRadius: 2,
            transition: "all 0.3s ease",
            opacity: mobileOpen ? 0 : 1,
          }} />
          <span style={{
            width: 24, height: 2, background: "#f0f0f5", borderRadius: 2,
            transition: "all 0.3s ease",
            transform: mobileOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
          }} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className="nav-mobile-menu"
        style={{
          display: mobileOpen ? "flex" : "none",
          flexDirection: "column",
          gap: 16,
          padding: "24px 0",
          alignItems: "center",
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => { e.preventDefault(); handleClick(link.id); }}
            style={{
              textDecoration: "none",
              fontSize: "1.1rem",
              fontWeight: 500,
              color: activeSection === link.id ? "#6c63ff" : "#a0a0b8",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;