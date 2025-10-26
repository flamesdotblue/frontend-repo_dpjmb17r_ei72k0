import { Sparkles } from "lucide-react";

export default function AgentCard({ icon, name, subtitle, description, highlights = [], color = "blue" }) {
  const colorMap = {
    blue: "from-blue-500/10 to-blue-500/5 border-blue-200/50",
    emerald: "from-emerald-500/10 to-emerald-500/5 border-emerald-200/50",
    indigo: "from-indigo-500/10 to-indigo-500/5 border-indigo-200/50",
    amber: "from-amber-500/10 to-amber-500/5 border-amber-200/50",
  };

  return (
    <div className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-b ${colorMap[color] ?? colorMap.blue} p-5 shadow-sm hover:shadow-md transition-shadow`}> 
      <div className="flex items-start gap-4">
        <div className="h-11 w-11 shrink-0 rounded-xl bg-white/70 dark:bg-white/10 backdrop-blur flex items-center justify-center shadow-inner">
          {icon}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-neutral-900 dark:text-white">{name}</h3>
            {subtitle && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-neutral-600 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-800">
                {subtitle}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{description}</p>
          {highlights?.length > 0 && (
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {highlights.map((h, i) => (
                <li key={i} className="inline-flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300">
                  <Sparkles className="h-3.5 w-3.5 text-neutral-400" />
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-white/60 to-transparent blur-2xl opacity-60" />
    </div>
  );
}
