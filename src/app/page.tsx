import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080914] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Experience />
        <Contact />
      </main>
      <footer className="px-5 pb-8 text-center text-sm text-zinc-500 sm:px-8">
        <p>© 2026 Emilio Caballero. Built with Next.js and Tailwind CSS.</p>
      </footer>
    </div>
  );
}
