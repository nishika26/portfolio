"use client";

import PhotoCard from "@/components/PhotoCard";

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 48px 64px",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) 340px",
          gap: 64,
          alignItems: "start",
        }}
      >
        {/* Left side */}
        <div>
          <p
            className="fade-up delay-3"
            style={{
              fontSize: 15,
              color: "var(--text)",
              maxWidth: 560,
              marginBottom: 16,
              lineHeight: 1.8,
            }}
          >
            Hi, I am a Backend & AI Engineer with 2+ years building
            production LLM platforms, multi-provider orchestration, RAG
            pipelines, vector stores, and fine-tuning models. Python is my
            primary language, and I bring experience in data science, machine
            learning, and core AI as well.
          </p>

          <p
            className="fade-up delay-4"
            style={{
              fontSize: 14,
              color: "var(--text)",
              maxWidth: 500,
              marginBottom: 40,
              lineHeight: 1.8,
              opacity: 0.7,
            }}
          >
            My interest lies with a plethora of things from geospatial,
            remote-sensing, and satellite data to responsible AI, AI
            Governance, and tech/public policy. I hope to get the chance to
            work on these fields in my near future or dwell into them as much
            as I can on my own in the meantime.
          </p>
        </div>

        {/* Right side */}
        <div
          className="fade-up delay-4"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PhotoCard />
        </div>
      </div>
    </section>
  );
}