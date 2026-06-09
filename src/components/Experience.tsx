"use client";

const jobs = [
  {
    company: "Tech4Dev — Kaapi",
    role: "Backend & AI Engineer",
    period: "Dec 2024 – Present",
    bullets: [
      <>
        Architected a <strong>Python</strong>-based multi-provider LLM gateway (
        <strong>OpenAI, AWS Bedrock, Gemini</strong>) with a provider-agnostic
        abstraction layer in <strong>FastAPI + SQLModel</strong>
      </>,

      <>
        Built a production document upload to optional document transformation
        to vector store pipeline with asynchronous support via{" "}
        <strong>Celery + Redis + gevent</strong>
      </>,

      <>
        Contributed to a guardrails microservice with autodiscovery, A/B
        testing, and service-to-service auth — validators added without
        modifying core platform code.
      </>,

      <>
        Delivered features on a production LLMOps frontend (
        <strong>Next.js 16, React 19, TypeScript</strong>): guardrails config
        UI, document management, knowledge base creation, speech-to-text
        evaluation.
      </>,

      <>
        Engineered complete pipeline for fine-tuning LLM Models and evaluating
        those models with <strong>OpenAI</strong> — stratified data splits,
        background job tracking, <strong>JSONL</strong> preprocessing.
      </>,

      <>
        Experimented with multiple file search setups including{" "}
        <strong>AWS Bedrock + OpenSearch + S3</strong> and{" "}
        <strong>Google Gemini File Search</strong> to evaluate best-fit RAG
        setups for NGO clients.
      </>,

      <>
        Owned the full prompt engineering and evaluation workflow for a public
        policy chatbot serving government stakeholders, continuously optimizing
        prompt templates and <strong>RAG</strong> configurations using
        structured evaluations and real-world user feedback.
      </>,
    ],
  },

  {
    company: "Dalgo (via Tech4Dev)",
    role: "Data Engineer",
    period: "Sept 2024 – Dec 2024",
    bullets: [
      <>
        Built <strong>DBT</strong> transformation pipelines converting raw NGO
        field data into analytics-ready models powering Jal Jeevan Mission
        dashboards.
      </>,

      <>
        Delivered <strong>Apache Superset</strong> dashboards tracking key
        mission metrics, replacing manual reporting workflows.
      </>,
    ],
  },

  {
    company: "Calfus Inc.",
    role: "AI Engineering Intern",
    period: "Feb 2024 – Aug 2024",
    bullets: [
      <>
        Delivered a production chatbot (
        <strong>Ollama + LlamaIndex + LangChain</strong>) letting customers
        query their cash flow database in natural language, replacing a 3-step
        manual workflow.
      </>,

      <>
        Fine-tuned <strong>Llama 2</strong> and <strong>CodeLlama</strong> for
        Text-to-SQL using{" "}
        <strong>SFTTrainer, ORPOTrainer, DPOTrainer</strong>; explored{" "}
        <strong>QLoRA</strong> 4-bit quantisation to run 7B models on
        constrained hardware.
      </>,
    ],
  },

  {
    company: "PACTA",
    role: "Research & Data Analyst Intern",
    period: "Dec 2023 – Feb 2024",
    bullets: [
      <>
        Produced daily analysis reports in <strong>Python</strong> and{" "}
        <strong>Tableau</strong>, surfacing trends in Tamil Nadu's disability
        data for the research team.
      </>,
    ],
  },

  {
    company: "IIIT — ML Research Intern",
    role: "ML Research Intern",
    period: "May 2023 – Jun 2023",
    bullets: [
      <>
        Trained <strong>UX-Net</strong>, a modified U-Net architecture
        combining convolutional and recurrent processing for low-latency speech
        separation, and applied it to speech separation and acoustic echo
        cancellation tasks in <strong>PyTorch</strong>.
      </>,
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{
      padding: "100px 48px",
      borderBottom: "1px solid var(--border)",
    }}>
      <div style={{ marginBottom: 64 }}>
        <p style={{ color: "var(--accent)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12 }}>
          Experience and Skills
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(24px, 3.5vw, 40px)",
          fontWeight: 400,
          lineHeight: 1.1,
        }}>
          Where I've <em style={{ color: "var(--text)" }}>worked</em>
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
              <p style={{ color: "var(--accent)", fontSize: 11, letterSpacing: "0.08em", marginBottom: 4 }}>{job.role}</p>
              <p style={{ color: "var(--muted)", fontSize: 11 }}>{job.period}</p>
            </div>

            {/* right */}
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {job.bullets.map((b, j) => (
                <li key={j} style={{
                  color: "var(--text)",
                  fontSize: 13,
                  lineHeight: 1.75,
                  paddingLeft: 28,
                  position: "relative",
                }}>
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      color: "var(--accent)",
                      fontFamily: "var(--font-mono)",
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    -&gt;
                  </span>
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