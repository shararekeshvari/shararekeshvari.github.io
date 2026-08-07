import { Languages, MapPin } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";
import { languageItems } from "@/data/portfolio";

const workingNotes = [
  {
    title: "The work I’m drawn to",
    description:
      "Products people return to often, especially when a clearer interface can make a complicated task easier to follow.",
  },
  {
    title: "How I approach it",
    description:
      "I break a workflow into states and reusable patterns, then check the details across screen sizes and text directions.",
  },
  {
    title: "The team I’m looking for",
    description:
      "A product team where I can contribute to real work, learn from experienced engineers, and keep strengthening my frontend fundamentals.",
  },
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-shell scroll-mt-24 border-b border-border py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="about-heading"
            index="04 / ABOUT"
            title="A little more about how I work."
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
          <Reveal delay={0.06}>
            <div className="max-w-3xl space-y-6 text-lg leading-8 text-foreground/84 sm:text-xl sm:leading-9">
              <p>
                I’m a Frontend Developer and Information Technology student. I learned
                the work inside a product team: first as an intern at Rekar, then as a
                member of its software development team.
              </p>
              <p className="text-muted">
                Most of my experience has been with products that have a lot of moving
                parts—roles, permissions, multi-step flows, and both RTL and LTR layouts.
                I like finding a structure that makes those interfaces easier to use and
                easier to maintain.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid border-l border-t border-border md:grid-cols-3">
          {workingNotes.map((note, index) => (
            <Reveal key={note.title} className="h-full" delay={index * 0.05}>
              <article className="h-full border-b border-r border-border p-6 sm:p-7">
                <p className="font-mono text-[10px] text-accent">0{index + 1}</p>
                <h3 className="mt-7 text-lg font-semibold">{note.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{note.description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
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
      </Container>
    </section>
  );
}
