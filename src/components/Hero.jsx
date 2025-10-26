import { Rocket, ShieldCheck, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50/60 dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-blue-900/40 dark:bg-blue-900/20 dark:text-blue-300">
              <ShieldCheck className="h-3.5 w-3.5" />
              Early access: Real-time misinformation defense
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Stop misinformation before it spreads
            </h1>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
              A coordinated agent layer that scans, verifies, contextualizes, and escalates high-risk narratives across social and web in real time.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#agents" className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2.5 text-sm font-semibold shadow hover:opacity-95 transition">
                Explore agents
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#pipeline" className="inline-flex items-center gap-2 rounded-lg bg-white text-neutral-900 dark:bg-neutral-800 dark:text-white px-4 py-2.5 text-sm font-semibold border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition">
                See pipeline
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-300">
              <div className="inline-flex items-center gap-1.5"><Rocket className="h-4 w-4 text-blue-600"/> Fast deployment</div>
              <div className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-emerald-600"/> Auditable evidence</div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-neutral-800 dark:to-neutral-700 p-6 shadow-sm">
              <div className="grid h-full grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/80 dark:bg-white/5 backdrop-blur p-4 border border-neutral-200/70 dark:border-neutral-700">
                  <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2">Scanner</p>
                  <p className="text-sm text-neutral-800 dark:text-neutral-200">Feeds → Normalize → Dedupe</p>
                </div>
                <div className="rounded-xl bg-white/80 dark:bg-white/5 backdrop-blur p-4 border border-neutral-200/70 dark:border-neutral-700">
                  <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2">Verifier</p>
                  <p className="text-sm text-neutral-800 dark:text-neutral-200">Evidence → Compare → Score</p>
                </div>
                <div className="rounded-xl bg-white/80 dark:bg-white/5 backdrop-blur p-4 border border-neutral-200/70 dark:border-neutral-700">
                  <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2">Context</p>
                  <p className="text-sm text-neutral-800 dark:text-neutral-200">Translate → Summarize → Frame</p>
                </div>
                <div className="rounded-xl bg-white/80 dark:bg-white/5 backdrop-blur p-4 border border-neutral-200/70 dark:border-neutral-700">
                  <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-2">Crisis</p>
                  <p className="text-sm text-neutral-800 dark:text-neutral-200">Velocity → Alert → Route</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-blue-100/60 to-transparent dark:from-neutral-800/40" />
    </section>
  );
}
