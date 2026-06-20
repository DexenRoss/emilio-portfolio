import { techStack } from "@/data/portfolio";

export function TechStack() {
  return (
    <section id="tech-stack" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-6 sm:p-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-violet-200">
              Tech stack
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Tools for building polished, intelligent software.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {techStack.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-white/10 bg-[#0b0d18]/70 p-5"
              >
                <h3 className="font-semibold text-white">{group.category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/[0.06] px-3 py-1 text-sm text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
