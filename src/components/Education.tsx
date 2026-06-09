"use client";

export default function Education() {
  return (
    <section id="education" style={{ padding: "80px 48px", borderBottom: "1px solid var(--border)" }}>

      {/* 05 - Education */}
      <div style={{ marginBottom: 64 }}>
        <p style={{ color: "var(--accent)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>
        Education
        </p>
        <div style={{
          borderTop: "1px solid var(--border)",
          paddingTop: 32,
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: 48,
        }}>
          <div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 16, marginBottom: 6 }}>
              MITS Gwalior
            </p>
            <p style={{ color: "var(--muted)", fontSize: 12 }}>2020 – 2024</p>
          </div>
          <div>
            <p style={{ fontSize: 15, marginBottom: 6 }}>B.Tech, Electrical Engineering</p>
            <p style={{ color: "var(--muted)", fontSize: 13 }}>
              Madhav Institute of Technology & Science, Gwalior
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div style={{
          marginTop: 24,
          paddingTop: 24,
          borderTop: "1px solid var(--border)",
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: 48,
        }}>
          <div>
            <p style={{ color: "var(--muted)", fontSize: 12 }}>Certifications</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              "PEDP Data Science for Social Impact — Ashoka University (2025–26)",
              "Neo4j & LLM Fundamentals — Neo4j (2024)",
              "Summer Analytics 2023 — Consulting & Analytics Club, IIT Guwahati",
            ].map((c, i) => (
              <p key={i} style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.6 }}>
                — {c}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* 06 - Volunteering */}
      <div>
        <p style={{ color: "var(--accent)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>
          Volunteering
        </p>
        {[
          { org: "Save Mumbai Mangrove", role: "Tech Volunteer", period: "April 2026 – Present" },
          { org: "People+AI", role: "Volunteer", period: "March 2024 – Aug 2024" },
        ].map((v, i) => (
          <div key={i} style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 24,
            paddingBottom: 24,
            display: "grid",
            gridTemplateColumns: "280px 1fr",
            gap: 48,
          }}>
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: 15, marginBottom: 4 }}>{v.org}</p>
              <p style={{ color: "var(--muted)", fontSize: 12 }}>{v.period}</p>
            </div>
            <p style={{ color: "var(--muted)", fontSize: 14, paddingTop: 2 }}>{v.role}</p>
          </div>
        ))}
      </div>

    </section>
  );
}