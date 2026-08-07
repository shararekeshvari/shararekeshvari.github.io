import { Languages, MapPin } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";
import { languageItems } from "@/data/portfolio";

const workingNotes = [
  {
    title: "Start with the task",
    description:
      "I look at what someone is trying to finish, the steps involved, and the states that could interrupt them before I think about components.",
  },
  {
    title: "Build for change",
    description:
      "I use reusable patterns to keep a product consistent as features grow, then test the details across screen sizes and text directions.",
  },
  {
    title: "Work in context",
    description:
      "I value the context that comes from working with a development team across delivery, maintenance, and product support.",
  },
  {
    title: "Why frontend",
    description:
      "I enjoy the point where structure becomes something useful: clear feedback, predictable behavior, and an interface people can rely on.",
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
            title="How I think about the work."
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
                I’m a Frontend Developer and Information Technology student. I started
                at Rekar as an intern and moved into the software development team,
                where most of my learning has happened inside products people use for
                day-to-day work.
              </p>
              <p className="text-muted">
                I tend to start with the workflow, not the component. I look at what the
                user is trying to finish, what can go wrong along the way, and what must
                stay clear when the screen gets smaller or the interface changes
                direction.
              </p>
              <p className="text-muted">
                I’m looking for a product team where I can contribute to real work,
                learn from experienced engineers, and keep building stronger frontend
                judgment.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
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
