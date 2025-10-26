import { Search, CheckCircle2, Languages, AlertTriangle } from "lucide-react";
import AgentCard from "./AgentCard";

export default function AgentsGrid() {
  return (
    <section id="agents" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Core Agents</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">A collaborative agent layer that scans, verifies, contextualizes, and escalates high-risk narratives in real time.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          <AgentCard
            color="blue"
            icon={<Search className="h-5 w-5 text-blue-600" />}
            name="Scanner Agent"
            subtitle="🔍 Ingest + Dedupe"
            description="Continuously ingests content from social feeds, chats, and web sources. Normalizes and deduplicates to remove noise while preserving signal."
            highlights={["Feed connectors (X, Reddit, Telegram, RSS)", "Fingerprinting + fuzzy matching", "Entity + claim extraction", "Priority triage queue"]}
          />

          <AgentCard
            color="emerald"
            icon={<CheckCircle2 className="h-5 w-5 text-emerald-600" />}
            name="Verifier Agent"
            subtitle="🔬 Evidence + Scoring"
            description="Retrieves trusted evidence, compares against claims, and assigns a veracity score with citations and counter-narratives."
            highlights={["Evidence retrieval from knowledge sources", "Cross-source agreement scoring", "Citation bundles for auditability", "Model ensemble confidence"]}
          />

          <AgentCard
            color="indigo"
            icon={<Languages className="h-5 w-5 text-indigo-600" />}
            name="Context Agent"
            subtitle="🌐 LLM + Translation"
            description="Translates, summarizes, and contextualizes claims for different regions and audiences, reducing ambiguity and polarization."
            highlights={["Auto translation to 100+ locales", "Style + audience conditioning", "Bias + framing detection", "Safety filtering"]}
          />

          <AgentCard
            color="amber"
            icon={<AlertTriangle className="h-5 w-5 text-amber-600" />}
            name="Crisis Agent"
            subtitle="⚡ Velocity + Alerts"
            description="Detects fast-spreading narratives and triggers alerts to responders with mitigation playbooks and blast radius estimates."
            highlights={["Velocity + virality modeling", "Tiered incident alerts", "Stakeholder routing", "Actionable playbooks"]}
          />
        </div>
      </div>
    </section>
  );
}
