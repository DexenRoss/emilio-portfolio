import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-violet-200">
          Experience
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
          A growing engineering practice grounded in real workflows.
        </h2>

        <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04]">
          {experience.map((item, index) => (
            <div
              key={item.title}
              className="grid gap-4 border-white/10 p-6 sm:grid-cols-[0.7fr_1.3fr] sm:p-8 [&:not(:last-child)]:border-b"
            >
              <div>
                <p className="text-sm text-zinc-500">0{index + 1}</p>
                <p className="mt-3 text-sm font-medium text-violet-100">
                  {item.period}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
