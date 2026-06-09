"use client";

export default function Masthead() {
  return (
    <header style={{ borderBottom: "3px double var(--rule)", padding: "0 24px" }}>

      {/* top strip */}
      <div style={{
        borderBottom: "1px solid var(--rule)",
        padding: "6px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: "var(--ink-light)",
      }}>
        <span>Mumbai, India</span>
        <span>Backend & AI Engineer</span>
      </div>

      {/* masthead name */}
      <div style={{ padding: "16px 0 12px", textAlign: "center", borderBottom: "1px solid var(--rule)" }}>
        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(20px, 3vw, 40px)",
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: "-0.02em",
          color: "var(--ink)",
        }}>
          NISHIKA YADAV
        </h1>
      </div>

      {/* nav links */}
      <nav style={{
        padding: "8px 0",
        display: "flex",
        gap: 0,
        flexWrap: "wrap",
        fontFamily: "var(--font-mono)",
        fontSize: 12,
      }}>
        {[
          { label: "About", href: "#about", color: "var(--ink)" },
          { label: "Experience", href: "#experience", color: "var(--green)" },
          { label: "Skills", href: "#skills", color: "var(--red)" },
          { label: "Projects", href: "#projects", color: "var(--teal)" },
          { label: "Contact", href: "#contact", color: "var(--ink)" },
          { label: "Education", href: "#education", color: "var(--ink)" },
          { label: "Resume ↓", href: "/Nishika_Resume.pdf", color: "var(--green)" },
          { label: "GitHub ↗", href: "https://github.com/nishika26", color: "var(--ink-light)" },
          { label: "LinkedIn ↗", href: "https://linkedin.com/in/nishika-yadav", color: "var(--ink-light)" },
          { label: "HuggingFace ↗", href: "https://huggingface.co/Nishika26", color: "var(--ink-light)" },
          { label: "Leetcode ↗", href: "https://leetcode.com/u/nishikayadav26/", color: "var(--ink-light)" },
        ].map((item, i, arr) => (
          <span key={item.label} style={{ display: "flex", alignItems: "center" }}>
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              style={{ color: item.color, padding: "0 10px" }}
            >
              {item.label}
            </a>
            {i < arr.length - 1 && <span style={{ color: "var(--rule)" }}>|</span>}
          </span>
        ))}
      </nav>
    </header>
  );
}