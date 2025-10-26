import { ShieldCheck, Brain, Activity, Globe } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/60 border-b border-neutral-200/60 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-neutral-900 dark:text-white">Misinformation Shield</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">Detect • Verify • Contextualize • Alert</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
            <a href="#agents" className="hover:text-neutral-900 dark:hover:text-white transition">Agents</a>
            <a href="#pipeline" className="hover:text-neutral-900 dark:hover:text-white transition">Pipeline</a>
            <a href="#about" className="hover:text-neutral-900 dark:hover:text-white transition">About</a>
          </nav>
          <div className="hidden sm:flex gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium border border-blue-200">
              <Brain className="h-3.5 w-3.5" /> LLM-powered
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-xs font-medium border border-emerald-200">
              <Activity className="h-3.5 w-3.5" /> Real-time
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-medium border border-indigo-200">
              <Globe className="h-3.5 w-3.5" /> Multi-lingual
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
