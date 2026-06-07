"use client";

const jobs = [
  {
    company: "Tech4Dev — Kaapi",
    role: "Backend & AI Engineer",
    period: "Dec 2024 – Present",
    bullets: [
      "Architected a multi-provider LLM gateway (OpenAI, AWS Bedrock, Gemini) with a provider-agnostic abstraction layer in FastAPI + SQLModel, cutting new model integration from days to under 2 hours.",
      "Built a production PDF→Markdown→vector store pipeline with chunking, embedding, and concurrent uploads via Celery + Redis + gevent; provisioned knowledge bases on AWS Bedrock + OpenSearch + S3.",
      "Contributed to a guardrails microservice with autodiscovery, A/B testing, and service-to-service auth — validators added without modifying core platform code.",
      "Delivered features on a production LLMOps frontend (Next.js 16, React 19, TypeScript): guardrails config UI, document management, knowledge base creation, speech-to-text evaluation.",
      "Engineered fine-tuning and evaluation APIs for OpenAI — stratified data splits, background job tracking, JSONL preprocessing — reducing manual evaluation effort by ~60%.",
    ],
  },
  {
    company: "Dalgo (via Tech4Dev)",
    role: "Data Engineer",
    period: "Sept 2024 – Dec 2024",
    bullets: [
      "Built DBT transformation pipelines converting raw NGO field data into analytics-ready models powering Jal Jeevan Mission dashboards.",
      "Delivered Apache Superset dashboards tracking key mission metrics, replacing manual reporting workflows.",
    ],
  },
  {
    company: "Calfus Inc.",
    role: "AI Engineering Intern",
    period: "Feb 2024 – Aug 2024",
    bullets: [
      "Delivered a production chatbot (Ollama + LlamaIndex + LangChain) letting customers query their cash flow database in natural language, replacing a 3-step manual workflow.",
      "Fine-tuned Llama 2 and CodeLlama for Text-to-SQL using SFTTrainer, ORPOTrainer, DPOTrainer; explored QLoRA 4-bit quantisation to run 7B models on constrained hardware.",
    ],
  },
  {
    company: "PACTA",
    role: "Research & Data Analyst Intern",
    period: "Dec 2023 – Feb 2024",
    bullets: [
      "Produced daily analysis reports in Python and Tableau, surfacing trends in climate financial risk data for the research team.",
    ],
  },
  {
    company: "IIIT — ML Research Intern",
    role: "ML Research Intern",
    period: "May 2023 – Jun 2023",
    bullets: [
      "Trained SOTA deep learning models (CNN + RNN in Keras/TensorFlow) for speech separation and echo cancellation.",
    ],
  },
];

export default function Work() {
  return (
    <section id="work" style={{
      padding: "100px 48px",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ marginBottom: 64 }}>
        <p style={{ color: "var(--accent)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>
          02 — Experience
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(32px, 5vw, 56px)",
          fontWeight: 400,
          lineHeight: 1.1,
        }}>
          Where I've <em style={{ fontStyle: "italic", color: "var(--muted)" }}>worked</em>
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {jobs.map((job, i) => (
          <div
            key={i}
            style={{
              borderTop: "1px solid var(--border)",
              padding: "40px 0",
              display: "grid",
              gridTemplateColumns: "280px 1fr",
              gap: 48,
            }}
          >
            {/* left */}
            <div>
              <p style={{ fontSize: 15, fontFamily: "var(--font-display)", marginBottom: 6 }}>{job.company}</p>
              <p style={{ color: "var(--accent2)", fontSize: 11, letterSpacing: "0.08em", marginBottom: 4 }}>{job.role}</p>
              <p style={{ color: "var(--muted)", fontSize: 11 }}>{job.period}</p>
            </div>

            {/* right */}
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {job.bullets.map((b, j) => (
                <li key={j} style={{
                  color: "var(--muted)",
                  fontSize: 13,
                  lineHeight: 1.75,
                  paddingLeft: 16,
                  position: "relative",
                }}>
                  <span style={{
                    position: "absolute",
                    left: 0,
                    top: "0.6em",
                    width: 4,
                    height: 1,
                    background: "var(--border)",
                    display: "inline-block",
                  }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}