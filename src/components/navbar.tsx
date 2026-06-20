import { navItems, profile } from "@/data/portfolio";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080914]/75 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Main navigation"
      >
        <a href="#top" className="group flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-violet-400 to-indigo-400 transition-transform group-hover:rotate-12" />
          <span className="hidden text-sm font-medium text-white sm:block">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-violet-300/30 bg-violet-400/10 px-4 py-2 text-sm font-medium text-violet-100 transition hover:border-violet-200/60 hover:bg-violet-300/20"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
