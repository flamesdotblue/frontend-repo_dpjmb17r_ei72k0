export default function Footer() {
  return (
    <footer id="about" className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            © {new Date().getFullYear()} Misinformation Shield. Built for early detection and response.
          </p>
          <div className="text-xs text-neutral-500 dark:text-neutral-400">
            Privacy-first • Auditable • Human-in-the-loop
          </div>
        </div>
      </div>
    </footer>
  );
}
