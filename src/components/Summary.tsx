"use client";

export default function Summary() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "0 48px 80px",
      position: "relative",
      borderBottom: "1px solid var(--border)",
    }}>
      {/* top-right label */}
      <div style={{
        position: "absolute",
        top: 100,
        right: 48,
        color: "var(--muted)",
        fontSize: 11,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        writingMode: "vertical-rl",
      }}
        className="fade-up delay-6"
      >
        Mumbai, India — 2025
      </div>

      {/* status pill */}
      <div className="fade-up delay-1" style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 32,
        padding: "6px 14px",
        border: "1px solid var(--border)",
        borderRadius: 100,
        width: "fit-content",
        fontSize: 11,
        color: "var(--muted)",
        letterSpacing: "0.1em",
      }}>
        <span style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "var(--accent)",
          animation: "blink 2s infinite",
          display: "inline-block",
        }} />
        Available for opportunities
      </div>

      {/* name */}
      <h1 className="fade-up delay-2" style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(52px, 9vw, 120px)",
        fontWeight: 400,
        lineHeight: 1,
        marginBottom: 24,
        letterSpacing: "-0.02em",
      }}>
        Nishika<br />
        <em style={{ color: "var(--muted)", fontStyle: "italic" }}>Yadav</em>
      </h1>

      {/* tagline */}
      <p className="fade-up delay-3" style={{
        fontSize: 15,
        color: "var(--muted)",
        maxWidth: 560,
        marginBottom: 48,
        lineHeight: 1.8,
      }}>
        Backend & AI Engineer building production LLM platforms —
        multi-provider orchestration, RAG pipelines, vector stores,
        and fine-tuned models.
      </p>

      {/* links */}
      <div className="fade-up delay-4" style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
        {[
          { label: "GitHub", href: "https://github.com/nishika26" },
          { label: "LinkedIn", href: "https://linkedin.com/in/nishika-yadav" },
          { label: "HuggingFace", href: "https://huggingface.co/Nishika26" },
          { label: "nishikayadav26@gmail.com", href: "mailto:nishikayadav26@gmail.com" },
        ].map(link => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 12,
              color: "var(--muted)",
              borderBottom: "1px solid var(--border)",
              paddingBottom: 2,
              transition: "color 0.2s, border-color 0.2s",
              letterSpacing: "0.05em",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.borderColor = "var(--accent)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "var(--muted)";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </section>
  );
}