"use client";

export default function Contact() {
  return (
    <section id="contact" style={{
      padding: "100px 48px 80px",
    }}>
      <div style={{ marginBottom: 64 }}>
        <p style={{ color: "var(--accent)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>
          05 — Contact
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 48,
        alignItems: "end",
        borderTop: "1px solid var(--border)",
        paddingTop: 64,
      }}>
        <div>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(40px, 7vw, 88px)",
            fontWeight: 400,
            lineHeight: 1,
            marginBottom: 24,
          }}>
            Let's<br />
            <em style={{ fontStyle: "italic", color: "var(--muted)" }}>talk.</em>
          </h2>
          <p style={{ color: "var(--muted)", fontSize: 13, maxWidth: 380, lineHeight: 1.8 }}>
            Open to Backend & AI Engineering roles at AI-first companies.
            Also happy to talk about LLMs, RAG, fine-tuning, or anything in between.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { label: "Email", value: "nishikayadav26@gmail.com", href: "mailto:nishikayadav26@gmail.com" },
            { label: "LinkedIn", value: "linkedin.com/in/nishika-yadav", href: "https://linkedin.com/in/nishika-yadav" },
            { label: "GitHub", value: "github.com/nishika26", href: "https://github.com/nishika26" },
            { label: "HuggingFace", value: "huggingface.co/Nishika26", href: "https://huggingface.co/Nishika26" },
            { label: "Phone", value: "+91-8840139142", href: "tel:+918840139142" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith("mailto") || item.href.startsWith("tel") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 0",
                borderBottom: "1px solid var(--border)",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.paddingLeft = "8px";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.paddingLeft = "0";
                e.currentTarget.style.color = "var(--text)";
              }}
            >
              <span style={{ color: "var(--muted)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", minWidth: 100 }}>
                {item.label}
              </span>
              <span style={{ fontSize: 13 }}>{item.value} ↗</span>
            </a>
          ))}
        </div>
      </div>

      {/* footer */}
      <div style={{
        marginTop: 100,
        paddingTop: 24,
        borderTop: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        color: "var(--muted)",
        fontSize: 11,
        letterSpacing: "0.08em",
      }}>
        <span>© 2025 Nishika Yadav</span>
        <span>Built with Next.js · Deployed on Vercel</span>
      </div>
    </section>
  );
}