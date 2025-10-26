import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Send, ShieldAlert, Sparkles } from "lucide-react";

const steps = [
  {
    key: "ingest",
    title: "Scanner",
    subtitle: "Ingest + Dedupe",
    color: "blue",
    blurb:
      "We normalize the claim, extract entities, and remove near-duplicates across sources.",
  },
  {
    key: "verify",
    title: "Verifier",
    subtitle: "Evidence + Scoring",
    color: "emerald",
    blurb:
      "We retrieve evidence, compare against the claim, and compute a veracity score with citations.",
  },
  {
    key: "context",
    title: "Context",
    subtitle: "LLM + Translation",
    color: "indigo",
    blurb:
      "We translate and summarize for the target audience, highlighting potential biases and frames.",
  },
  {
    key: "crisis",
    title: "Crisis",
    subtitle: "Velocity + Alerts",
    color: "amber",
    blurb:
      "We model spread velocity and trigger alerts with mitigation playbooks if risk is high.",
  },
];

export default function PipelineDemo() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(-1);

  const riskScore = useMemo(() => {
    if (!input) return null;
    // Lightweight heuristic purely for demo UI purposes
    const len = Math.min(input.length, 280);
    const sensationalWords = ["shocking", "secret", "exposed", "scandal", "cure", "miracle", "instant", "free", "urgent"];
    const sensationalCount = sensationalWords.reduce(
      (acc, w) => acc + (input.toLowerCase().includes(w) ? 1 : 0),
      0
    );
    const exclam = (input.match(/!/g) || []).length;
    const base = Math.round((len / 280) * 40 + sensationalCount * 12 + exclam * 6);
    return Math.max(5, Math.min(100, base));
  }, [input]);

  const handleRun = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setActive(-1);

    for (let i = 0; i < steps.length; i++) {
      // Simulate staged processing
      await new Promise((r) => setTimeout(r, 550));
      setActive(i);
    }

    setLoading(false);
  };

  return (
    <section id="pipeline" className="py-12 sm:py-16 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900 border-y border-neutral-200/60 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Try the pipeline</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">Paste a claim to see how the agents would process it end-to-end. This is a local demo without external calls.</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4">
          <div className="rounded-2xl border border-neutral-200/60 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 sm:p-5 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste a suspicious claim or headline to analyze..."
                className="min-h-[96px] flex-1 resize-y rounded-xl border border-neutral-200/60 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
              <button
                onClick={handleRun}
                disabled={loading || !input.trim()}
                className="self-start inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-3 text-sm font-medium shadow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {loading ? "Processing" : "Run pipeline"}
              </button>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3">
              {steps.map((s, i) => (
                <div
                  key={s.key}
                  className={`rounded-xl border p-3 sm:p-4 ${
                    i <= active
                      ? "bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950/20 dark:to-neutral-900 border-emerald-200/60 dark:border-emerald-900"
                      : "bg-neutral-50 dark:bg-neutral-950/40 border-neutral-200/60 dark:border-neutral-800"
                  }`}
                >
                  <div className="text-sm font-semibold text-neutral-900 dark:text-white">{s.title}
                    <span className="ml-2 text-xs text-neutral-500">{s.subtitle}</span>
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">{s.blurb}</p>
                </div>
              ))}
            </div>

            <AnimatePresence>
              {riskScore !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="mt-4 rounded-xl border border-neutral-200/60 dark:border-neutral-800 bg-gradient-to-br from-amber-50 to-white dark:from-amber-950/20 dark:to-neutral-900 p-4"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="h-4 w-4 text-amber-600" />
                      <p className="text-sm font-medium text-neutral-900 dark:text-white">Estimated misinformation risk</p>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-lg bg-white/70 dark:bg-white/10 px-3 py-1.5 text-sm font-semibold text-neutral-900 dark:text-white">
                      <Sparkles className="h-4 w-4 text-amber-600" /> {riskScore}%
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-300">This is a heuristic visualization for the demo. A production system would use retrieval, model ensembles, and human-in-the-loop review.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
