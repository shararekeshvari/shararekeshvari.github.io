import { Languages, MapPin } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { languageItems } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-shell scroll-mt-24 border-b border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            id="about-heading"
            index="01 / ABOUT"
            title="How I got into frontend."
          />
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-[0.8fr_1.4fr] md:gap-16">
          <Reveal>
            <div className="space-y-4 text-sm text-muted">
              <div className="flex items-center gap-3">
                <MapPin aria-hidden="true" size={16} />
                <span>Iran · Open to remote opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <Languages aria-hidden="true" size={16} />
                <span>Persian · English · German</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="max-w-3xl space-y-6 text-lg leading-8 text-foreground/84 sm:text-xl sm:leading-9">
              <p>
                I’m a Frontend Developer and Information Technology student. I started
                with a frontend internship at Rekar and joined its software development
                team after approximately four months.
              </p>
              <p className="text-muted">
                Most of my experience has come from ongoing product work rather than
                isolated demos. I’ve worked on accounting, language-learning, and clinic
                software, including Persian RTL interfaces and reusable React components.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              Languages
            </p>
            <ul className="grid border-l border-t border-border sm:grid-cols-3">
              {languageItems.map((item) => (
                <li key={item.language} className="border-b border-r border-border p-5">
                  <p className="font-medium">{item.language}</p>
                  <p className="mt-2 text-sm text-muted">{item.level}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
