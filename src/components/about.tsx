import { profile } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-violet-200">
            About
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Engineering practical AI products with a product-first mindset.
          </h2>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <p className="text-lg leading-8 text-zinc-300">{profile.summary}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-zinc-500">Focus</p>
              <p className="mt-2 font-medium text-white">
                AI automation, full stack systems, research platforms
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-zinc-500">Location</p>
              <p className="mt-2 font-medium text-white">{profile.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
