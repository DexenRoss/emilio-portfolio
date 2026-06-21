import { profile } from "@/data/portfolio";
import { TerminalCard } from "@/components/terminal-card";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden px-5 pt-32 pb-20 sm:px-8 lg:pt-40"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.24),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(79,70,229,0.18),transparent_28%),linear-gradient(180deg,#080914_0%,#0b0d19_48%,#090a12_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-violet-300/60 to-transparent" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-zinc-300 shadow-2xl shadow-violet-950/20">
            <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" />
            {profile.role}
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
            {profile.headline}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            {profile.summary}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-950 transition hover:bg-violet-100"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              Work together
            </a>
          </div>
        </div>

        <TerminalCard />
      </div>
    </section>
  );
}
