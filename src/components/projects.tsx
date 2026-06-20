import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-violet-200">
              Projects
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
              Selected systems across web platforms, automation, and applied AI.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-zinc-400">
            Each project is designed around useful workflows, maintainable
            systems, and measurable product value.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-violet-200/30 hover:bg-white/[0.065]"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent}`}
              />
              <div className="absolute -right-16 -top-16 size-40 rounded-full bg-violet-400/10 blur-2xl transition group-hover:bg-violet-300/20" />
              <h3 className="relative text-xl font-semibold text-white">
                {project.name}
              </h3>
              <p className="relative mt-4 min-h-32 text-sm leading-7 text-zinc-300">
                {project.description}
              </p>
              <div className="relative mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
