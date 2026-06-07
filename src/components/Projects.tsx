"use client";

const projects = [
  {
    title: "Llama 2 Fine-Tuning (QLoRA)",
    description: "Fine-tuned Llama 2-7B on a free Colab T4 GPU using 4-bit QLoRA precision, reducing VRAM footprint by ~75% with no meaningful accuracy loss. Published multiple fine-tuned model variants on Hugging Face.",
    tags: ["PyTorch", "QLoRA", "Hugging Face", "Transformers", "4-bit Quantisation"],
    href: "https://github.com/nishika26/finetuning_llama2",
  },
  {
    title: "Multi-Provider LLM Gateway",
    description: "Provider-agnostic LLM abstraction layer supporting OpenAI, AWS Bedrock, and Gemini. Built with FastAPI + SQLModel, hardened with SlowAPI rate limiting and SSRF-protected webhook callbacks.",
    tags: ["FastAPI", "OpenAI", "AWS Bedrock", "Gemini", "Redis", "SlowAPI"],
    href: "#",
  },
  {
    title: "RAG Pipeline — Document Knowledge Base",
    description: "Production PDF→Markdown→vector store pipeline with chunking, embedding, and concurrent uploads via Celery + gevent. Provisioned on AWS Bedrock + OpenSearch + S3 for NGO clients.",
    tags: ["RAG", "Celery", "Redis", "OpenSearch", "S3", "AWS Bedrock"],
    href: "#",
  },
];

const blogs = [
  {
    title: "Kaapi Guardrails: A Tattle-Tech4Dev Collaboration for AI Safety",
    href: "https://projecttech4dev.org",
    source: "projecttech4dev.org",
  },
  {
    title: "AI Platform Building Steadily: Khopoli Sprint Reflections",
    href: "https://projecttech4dev.org",
    source: "projecttech4dev.org",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{
      padding: "100px 48px",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ marginBottom: 64 }}>
        <p style={{ color: "var(--accent)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>
          04 — Projects & Writing
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(32px, 5vw, 56px)",
          fontWeight: 400,
          lineHeight: 1.1,
        }}>
          Things I've <em style={{ fontStyle: "italic", color: "var(--muted)" }}>built</em>
        </h2>
      </div>

      {/* Projects grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: 1,
        border: "1px solid var(--border)",
        marginBottom: 80,
      }}>
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "36px",
              background: "var(--surface)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              transition: "background 0.2s",
              borderRight: "1px solid var(--border)",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#161616")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--surface)")}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: 20,
                fontWeight: 400,
                lineHeight: 1.3,
                maxWidth: "80%",
              }}>{p.title}</h3>
              <span style={{ color: "var(--muted)", fontSize: 16 }}>↗</span>
            </div>
            <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.75, flexGrow: 1 }}>{p.description}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {p.tags.map((tag, j) => (
                <span key={j} style={{
                  fontSize: 10,
                  color: "var(--muted)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  border: "1px solid var(--border)",
                  padding: "2px 8px",
                  borderRadius: 100,
                }}>{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>

      {/* Blogs */}
      <div>
        <p style={{ color: "var(--muted)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 24 }}>Writing</p>
        {blogs.map((b, i) => (
          <a
            key={i}
            href={b.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px 0",
              borderTop: "1px solid var(--border)",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text)")}
          >
            <span style={{ fontFamily: "var(--font-display)", fontSize: 18 }}>{b.title}</span>
            <span style={{ color: "var(--muted)", fontSize: 11, whiteSpace: "nowrap", marginLeft: 24 }}>{b.source} ↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}