import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="px-5 pt-20 pb-10 sm:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05]">
        <div className="relative p-6 sm:p-10 lg:p-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(139,92,246,0.2),transparent_34%),radial-gradient(circle_at_80%_100%,rgba(79,70,229,0.18),transparent_30%)]" />
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-violet-200">
                Contact
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Interested in AI workflows or modern web platforms?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
                I am open to projects where thoughtful software, automation, and
                AI can make complex work feel simpler.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-zinc-500">Phone</p>
              <a
                href={`tel:${profile.cellphone}`}
                className="mt-2 block break-words text-lg font-medium text-white transition hover:text-violet-100"
              >
                {profile.cellphone}
              </a>
              <p className="text-sm text-zinc-500">Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-2 block break-words text-lg font-medium text-white transition hover:text-violet-100"
              >
                {profile.email}
              </a>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-zinc-950 transition hover:bg-violet-100"
                >
                  Start a conversation
                </a>
                <a
                  href="#top"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                >
                  Back to top
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
