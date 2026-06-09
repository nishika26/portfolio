"use client";
import { useEffect, useRef } from "react";

export default function SkillTree() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    import("d3").then((d3) => {
      const W = ref.current!.clientWidth || 800;
      const H = 900;
      ref.current!.innerHTML = "";

      const colorMap: Record<string, { fill: string; stroke: string; text: string }> = {
        root:     { fill: "#1a1a1a", stroke: "#1a1a1a", text: "#F5F0E0" },
        category: { fill: "#2E5E4E", stroke: "#2E5E4E", text: "#F5F0E0" },
        ai:       { fill: "#EDE7CE", stroke: "#8B1A1A", text: "#8B1A1A" },
        backend:  { fill: "#EDE7CE", stroke: "#2E5E4E", text: "#2E5E4E" },
        ml:       { fill: "#EDE7CE", stroke: "#1A5E5E", text: "#1A5E5E" },
        cloud:    { fill: "#EDE7CE", stroke: "#444", text: "#444" },
        frontend: { fill: "#EDE7CE", stroke: "#8B1A1A", text: "#8B1A1A" },
        lang:     { fill: "#EDE7CE", stroke: "#888", text: "#555" },
      };

      const tooltip = d3.select(ref.current)
        .append("div")
        .style("position", "absolute")
        .style("background", "#1a1a1a")
        .style("color", "#F5F0E0")
        .style("border", "1px solid #C8A96E")
        .style("padding", "4px 10px")
        .style("font-family", "'Courier Prime', monospace")
        .style("font-size", "12px")
        .style("pointer-events", "none")
        .style("opacity", "0")
        .style("transition", "opacity 0.15s")
        .style("z-index", "10")
        .style("white-space", "nowrap");

      const nodes: any[] = [
        { id: "Nishika", group: "root", r: 53 },
        { id: "AI / LLM", group: "category", r: 39 },
        { id: "Backend", group: "category", r: 39 },
        { id: "ML / Data", group: "category", r: 39 },
        { id: "Cloud & Infra", group: "category", r: 39 },
        { id: "Frontend", group: "category", r: 39 },
        { id: "Languages", group: "category", r: 39 },
        { id: "Fine-tuning", group: "ai", r: 25 }, { id: "RAG", group: "ai", r: 25 },
        { id: "LangChain", group: "ai", r: 22 }, { id: "LlamaIndex", group: "ai", r: 22 },
        { id: "LangGraph", group: "ai", r: 22 }, { id: "Agentic AI", group: "ai", r: 25 },
        { id: "MCP Servers", group: "ai", r: 22 }, { id: "Guardrails AI", group: "ai", r: 22 },
        { id: "Transformers", group: "ai", r: 22 }, { id: "RLHF", group: "ai", r: 22 },
        { id: "OpenAI API", group: "ai", r: 22 }, { id: "Anthropic", group: "ai", r: 22 },
        { id: "Bedrock", group: "ai", r: 22 }, { id: "Gemini", group: "ai", r: 22 },
        { id: "Ollama", group: "ai", r: 22 }, { id: "HuggingFace", group: "ai", r: 22 },
        { id: "Langfuse", group: "ai", r: 22 },
        { id: "FastAPI", group: "backend", r: 27 }, { id: "PostgreSQL", group: "backend", r: 25 },
        { id: "Redis", group: "backend", r: 25 }, { id: "Celery", group: "backend", r: 22 },
        { id: "SQLModel", group: "backend", r: 22 }, { id: "Pydantic", group: "backend", r: 22 },
        { id: "Async", group: "backend", r: 22 }, { id: "REST APIs", group: "backend", r: 22 },
        { id: "Webhooks", group: "backend", r: 22 }, { id: "Pytest", group: "backend", r: 22 },
        { id: "Alembic", group: "backend", r: 21 },
        { id: "PyTorch", group: "ml", r: 25 }, { id: "TensorFlow", group: "ml", r: 25 },
        { id: "Scikit learn", group: "ml", r: 22 }, { id: "Pandas", group: "ml", r: 24 },
        { id: "NumPy", group: "ml", r: 22 }, { id: "CNNs", group: "ml", r: 22 },
        { id: "RNNs", group: "ml", r: 22 }, { id: "DBT", group: "ml", r: 22 },
        { id: "Tableau", group: "ml", r: 22 }, { id: "Superset", group: "ml", r: 21 },
        { id: "AWS", group: "cloud", r: 27 }, { id: "Docker", group: "cloud", r: 25 },
        { id: "GitHub", group: "cloud", r: 22 }, { id: "Vercel", group: "cloud", r: 22 },
        { id: "OpenSearch", group: "cloud", r: 22 }, { id: "S3", group: "cloud", r: 22 },
        { id: "Next.js", group: "frontend", r: 25 }, { id: "React", group: "frontend", r: 25 },
        { id: "TypeScript", group: "frontend", r: 24 },
        { id: "Python", group: "lang", r: 27 }, { id: "SQL", group: "lang", r: 24 },
        { id: "C++", group: "lang", r: 22 }, { id: "Git", group: "lang", r: 22 },
        { id: "Neo4j", group: "lang", r: 21 },
      ];

      const links: any[] = [
        { source: "Nishika", target: "AI / LLM" }, { source: "Nishika", target: "Backend" },
        { source: "Nishika", target: "ML / Data" }, { source: "Nishika", target: "Cloud & Infra" },
        { source: "Nishika", target: "Frontend" }, { source: "Nishika", target: "Languages" },
        ...["Fine-tuning","RAG","LangChain","LlamaIndex","LangGraph","Agentic AI","MCP Servers","Guardrails AI","Transformers","RLHF","OpenAI API","Anthropic","Bedrock","Gemini","Ollama","HuggingFace","Langfuse"].map(t => ({ source: "AI / LLM", target: t })),
        ...["FastAPI","PostgreSQL","Redis","Celery","SQLModel","Pydantic","Async","REST APIs","Webhooks","Pytest","Alembic"].map(t => ({ source: "Backend", target: t })),
        ...["PyTorch","TensorFlow","Scikit learn","Pandas","NumPy","CNNs","RNNs","DBT","Tableau","Superset"].map(t => ({ source: "ML / Data", target: t })),
        ...["AWS","Docker","GitHub","Vercel","OpenSearch","S3"].map(t => ({ source: "Cloud & Infra", target: t })),
        ...["Next.js","React","TypeScript"].map(t => ({ source: "Frontend", target: t })),
        ...["Python","SQL","C++","Git","Neo4j"].map(t => ({ source: "Languages", target: t })),
        { source: "RAG", target: "OpenSearch" }, { source: "RAG", target: "HuggingFace" },
        { source: "RAG", target: "Bedrock" }, { source: "Fine-tuning", target: "PyTorch" },
        { source: "Fine-tuning", target: "HuggingFace" }, { source: "Fine-tuning", target: "Transformers" },
        { source: "LangChain", target: "Agentic AI" }, { source: "LangGraph", target: "Agentic AI" },
        { source: "FastAPI", target: "REST APIs" }, { source: "FastAPI", target: "Async" },
        { source: "Celery", target: "Redis" }, { source: "Python", target: "FastAPI" },
        { source: "Python", target: "PyTorch" }, { source: "Python", target: "Pandas" },
        { source: "SQL", target: "PostgreSQL" }, { source: "TypeScript", target: "Next.js" },
        { source: "TypeScript", target: "React" }, { source: "AWS", target: "S3" },
        { source: "AWS", target: "OpenSearch" }, { source: "AWS", target: "Bedrock" },
        { source: "DBT", target: "SQL" }, { source: "Langfuse", target: "Agentic AI" },
        { source: "Guardrails AI", target: "Agentic AI" }, { source: "MCP Servers", target: "Agentic AI" },
        { source: "GitHub", target: "Docker" }, { source: "Vercel", target: "Next.js" },
      ];

      const svg = d3.select(ref.current).append("svg")
        .attr("viewBox", `0 0 ${W} ${H}`)
        .attr("width", "100%")
        .attr("height", H)
        .style("display", "block")
        .style("cursor", "grab");

      const g = svg.append("g");

      const zoom = d3.zoom<SVGSVGElement, unknown>()
        .scaleExtent([0.3, 3])
        .on("zoom", (e) => { g.attr("transform", e.transform); });
      svg.call(zoom);
      svg.on("dblclick.zoom", () => svg.transition().duration(500).call(zoom.transform, d3.zoomIdentity));

      const linkEl = g.append("g").selectAll("line")
        .data(links).join("line")
        .attr("stroke", "rgba(255,255,255,0.6)")
        .attr("stroke-width", (d: any) => d.source === "Nishika" ? 2 : 1);

      const node = g.append("g").selectAll("g")
        .data(nodes).join("g")
        .style("cursor", "pointer")
        .call((d3.drag() as any)
          .on("start", (e: any, d: any) => { if (!e.active) sim.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
          .on("drag", (e: any, d: any) => { d.fx = e.x; d.fy = e.y; })
          .on("end", (e: any, d: any) => { if (!e.active) sim.alphaTarget(0); d.fx = null; d.fy = null; })
        )
        .on("mouseover", (e: any, d: any) => { tooltip.style("opacity", "1").text(d.id); })
        .on("mousemove", (e: any) => {
          const rect = ref.current!.getBoundingClientRect();
          tooltip.style("left", (e.clientX - rect.left + 12) + "px").style("top", (e.clientY - rect.top - 28) + "px");
        })
        .on("mouseleave", () => { tooltip.style("opacity", "0"); });

      node.append("circle")
        .attr("r", (d: any) => d.r)
        .attr("fill", (d: any) => colorMap[d.group].fill)
        .attr("stroke", (d: any) => colorMap[d.group].stroke)
        .attr("stroke-width", (d: any) => d.group === "root" ? 0 : 1.5)
        .on("mouseover", function() { d3.select(this).transition().duration(150).attr("r", (d: any) => d.r * 1.15); })
        .on("mouseleave", function() { d3.select(this).transition().duration(150).attr("r", (d: any) => d.r); });

      node.each(function(d: any) {
  const el = d3.select(this);
  
  // Custom two-line labels
  const twoLine: Record<string, [string, string]> = {
    "Cloud & Infra": ["Cloud &", "Infra"],
    "AI / LLM": ["AI /", "LLM"],
    "ML / Data": ["ML /", "Data"],
    "Agentic AI": ["Agentic", "AI"],
    "Guardrails AI": ["Guardrails", "AI"],
    "MCP Servers": ["MCP", "Servers"],
    "GitHub Actions": ["GitHub", "Actions"],
    "OpenAI API": ["OpenAI", "API"],
    "Async Python": ["Async", "Python"],
    "REST APIs": ["REST", "APIs"],
    "Fine-tuning": ["Fine-", "tuning"],
    "HuggingFace": ["Hugging", "Face"],
    "Scikit learn": ["Scikit", "learn"],
    "TensorFlow": ["Tensor", "Flow"],
  };

  const fontSize = d.group === "root" ? 11 : d.r > 17 ? 10 : 9;
  const fontWeight = d.group === "root" || d.group === "category" ? "700" : "400";
  const fill = (colorMap as any)[d.group].text;

  if (twoLine[d.id]) {
    const [line1, line2] = twoLine[d.id];
    [line1, line2].forEach((word, i) => {
      el.append("text")
        .text(word)
        .attr("text-anchor", "middle")
        .attr("y", i === 0 ? -6 : 7)
        .attr("font-size", fontSize)
        .attr("font-family", "'Courier Prime', monospace")
        .attr("font-weight", fontWeight)
        .attr("fill", fill)
        .style("pointer-events", "none")
        .style("user-select", "none");
    });
  } else {
    el.append("text")
      .text(d.id)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "central")
      .attr("y", 0)
      .attr("font-size", fontSize)
      .attr("font-family", "'Courier Prime', monospace")
      .attr("font-weight", fontWeight)
      .attr("fill", fill)
      .style("pointer-events", "none")
      .style("user-select", "none");
  }
});

      const sim = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id((d: any) => d.id).distance((d: any) => {
          if (d.source.group === "root") return 150;
          if (d.source.group === "category") return 80;
          return 50;
        }).strength(0.8))
        .force("charge", d3.forceManyBody().strength((d: any) => d.group === "root" ? -800 : d.group === "category" ? -300 : -70))
        .force("center", d3.forceCenter(W / 2, H / 2))
        .force("collision", d3.forceCollide().radius((d: any) => d.r + 6).strength(0.9))
        .force("x", d3.forceX(W / 2).strength(0.03))
        .force("y", d3.forceY(H / 2).strength(0.03))
        .on("tick", () => {
          linkEl.attr("x1", (d: any) => d.source.x).attr("y1", (d: any) => d.source.y)
            .attr("x2", (d: any) => d.target.x).attr("y2", (d: any) => d.target.y);
          node.attr("transform", (d: any) =>
            `translate(${Math.max(d.r, Math.min(W - d.r, d.x))},${Math.max(d.r, Math.min(H - d.r, d.y))})`);
        });
    });

    return () => { if (ref.current) ref.current.innerHTML = ""; };
  }, []);

  return (
    <section id="skills" style={{ borderBottom: "1px solid var(--rule)" }}>
      <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--rule)", display: "flex", alignItems: "baseline", gap: 16 }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 700,  }}>
          Skills
        </h2>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-light)", marginLeft: "auto" }}>
          scroll to zoom · drag to pan · double-click to reset
        </span>
      </div>
      <div ref={ref} style={{
  width: "100%",
  height: 900,
  position: "relative",
  overflow: "hidden",
  border: "1px solid rgba(255,255,255,0.35)",
  borderRadius: 8,
  background: "var(--surface)",
}} />
    </section>
  );
}