import { ArrowRight, Link, BookOpen, Bell, Layers } from "lucide-react";

function Step({ title, caption, icon, color = "blue" }) {
  const border = {
    blue: "border-blue-300/60",
    emerald: "border-emerald-300/60",
    indigo: "border-indigo-300/60",
    amber: "border-amber-300/60",
  }[color];

  return (
    <div className={`rounded-xl border ${border} bg-white/70 dark:bg-white/5 backdrop-blur p-4 shadow-sm`}> 
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-200/70 dark:border-neutral-700">
          {icon}
        </div>
        <div>
          <p className="font-semibold text-neutral-900 dark:text-white">{title}</p>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">{caption}</p>
        </div>
      </div>
    </div>
  );
}

export default function Pipeline() {
  return (
    <section id="pipeline" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Agent Pipeline</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">From chaotic feeds to actionable truth signals, the pipeline keeps humans-in-the-loop with transparent evidence.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-4 items-center">
          <Step
            title="Ingest & Dedupe"
            caption="Social feeds, chats, and web sources are normalized and deduplicated."
            color="blue"
            icon={<Link className="h-5 w-5 text-blue-600" />}
          />
          <ArrowRight className="hidden lg:block h-6 w-6 text-neutral-400 mx-auto" />
          <Step
            title="Verify & Cite"
            caption="Claims are checked against trusted evidence with confidence scores."
            color="emerald"
            icon={<BookOpen className="h-5 w-5 text-emerald-600" />}
          />
          <ArrowRight className="hidden lg:block h-6 w-6 text-neutral-400 mx-auto" />
          <Step
            title="Contextualize"
            caption="Translations, summaries, and audience-specific framing reduce ambiguity."
            color="indigo"
            icon={<Layers className="h-5 w-5 text-indigo-600" />}
          />
          <ArrowRight className="hidden lg:block h-6 w-6 text-neutral-400 mx-auto" />
          <Step
            title="Escalate"
            caption="Velocity models trigger alerts and route incidents to responders."
            color="amber"
            icon={<Bell className="h-5 w-5 text-amber-600" />}
          />
        </div>
      </div>
    </section>
  );
}
