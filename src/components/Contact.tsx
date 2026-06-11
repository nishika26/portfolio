"use client";
export default function Contact() {
  return (
    <section id="contact" style={{ borderBottom: "1px solid var(--rule)" }}>
      <div style={{
        padding: "16px 24px",
        borderBottom: "1px solid var(--rule)",
        display: "flex",
        alignItems: "baseline",
        gap: 16,
      }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 700,  }}>
          Contact
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {/* left */}
        <div style={{ padding: "40px 24px", borderRight: "1px solid var(--rule)" }}>
          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(24px, 3vw, 40px)",
            fontWeight: 900,
            lineHeight: 1,
            marginBottom: 20,
          }}>
          </p>
        </div>

        {/* right */}
        <div style={{ padding: "40px 28px" }}>
          {[
            { label: "Email", value: "nishikayadav26@gmail.com", href: "mailto:nishikayadav26@gmail.com" },
            { label: "LinkedIn", value: "linkedin.com/in/nishika-yadav", href: "https://www.linkedin.com/in/nishika-yadav-9b15111b9/" },
            { label: "GitHub", value: "github.com/nishika26", href: "https://github.com/nishika26" },
            { label: "Phone", value: "+91-8840139142", href: "tel:+918840139142" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "14px 0",
                borderBottom: "1px solid var(--rule)",
                fontFamily: "var(--font-body)",
                fontSize: 15,
                color: "var(--ink)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--green)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--ink)")}
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-light)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {item.label}
              </span>
              <span>{item.value} ↗</span>
            </a>
          ))}
        </div>
      </div>

      {/* footer */}
      <div style={{
        padding: "16px 24px",
        borderTop: "1px solid var(--rule)",
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        color: "var(--ink-light)",
      }}>
        <span>© 2026 Nishika Yadav</span>
        <span>Built with Next.js · Deployed on Vercel</span>
      </div>
    </section>
  );
}