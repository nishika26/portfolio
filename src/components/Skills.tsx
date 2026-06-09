"use client";

const skillGroups = [
  {
    category: "AI / LLM",
    skills: ["LLM Fine-tuning (SFT, ORPO, DPO, QLoRA)", "RAG", "Vector Stores", "Prompt Engineering", "LangChain", "LlamaIndex", "LangGraph", "Agentic AI", "MCP Servers", "Langfuse", "Transformers", "RLHF", "Guardrails AI"],
  },
  {
    category: "Backend",
    skills: ["FastAPI", "SQLModel", "SQLAlchemy", "Pydantic", "Alembic", "Celery", "Redis", "PostgreSQL", "RESTful APIs", "Webhooks", "Async Python", "Pytest"],
  },
  {
    category: "Frontend",
    skills: ["Next.js 16", "React 19", "TypeScript"],
  },
  {
    category: "Cloud & Infra",
    skills: ["AWS Bedrock", "S3", "IAM", "OpenSearch", "Docker", "GitHub Actions CI/CD"],
  },
  {
    category: "ML / Data",
    skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "CNNs", "RNNs", "OpenCV", "DBT", "Apache Superset", "Tableau"],
  },
  {
    category: "LLM Providers",
    skills: ["OpenAI", "Anthropic", "AWS Bedrock", "Gemini", "Ollama", "Hugging Face"],
  },
  {
    category: "Languages & Tools",
    skills: ["Python", "C++", "SQL", "Git", "DBeaver", "Jupyter", "Neo4j", "Cursor"],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: "100px 48px",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ marginBottom: 64 }}>
        <p style={{ color: "var(--accent)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>
          Skills
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(32px, 5vw, 56px)",
          fontWeight: 400,
          lineHeight: 1.1,
        }}>
          What I <em style={{ color: "var(--muted)" }}>know</em>
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {skillGroups.map((group, i) => (
          <div
            key={i}
            style={{
              borderTop: "1px solid var(--border)",
              padding: "28px 0",
              display: "grid",
              gridTemplateColumns: "280px 1fr",
              gap: 48,
              alignItems: "start",
            }}
          >
            <p style={{ color: "var(--muted)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", paddingTop: 4 }}>
              {group.category}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {group.skills.map((skill, j) => (
                <span
                  key={j}
                  style={{
                    padding: "4px 12px",
                    border: "1px solid var(--border)",
                    borderRadius: 100,
                    fontSize: 12,
                    color: "var(--text)",
                    transition: "border-color 0.2s, color 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.color = "var(--text)";
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}