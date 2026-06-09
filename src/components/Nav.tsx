"use client";
import { useState, useEffect } from "react";
 
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
 
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
 
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: "20px 48px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      transition: "all 0.3s ease",
      fontFamily: "var(--font-display)",
    }}>
      <span style={{ color: "var(--accent)", fontWeight: 500, fontSize: 13, letterSpacing: "0.05em" }}>
        NY
      </span>
      <div style={{ display: "flex", gap: 32 }}>
        {["work", "skills", "contact"].map(item => (
          <a
            key={item}
            href={`#${item}`}
            style={{
              color: "var(--muted)",
              fontSize: 12,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}