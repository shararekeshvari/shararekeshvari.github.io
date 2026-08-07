import { Languages, MapPin } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { languageItems } from "@/data/portfolio";

const principles = [
  {
    index: "01",
    title: "Think in systems",
    description:
      "Build reusable components and consistent patterns that make product interfaces easier to extend.",
  },
  {
    index: "02",
    title: "Design for context",
    description:
      "Account for responsive behavior, RTL and LTR layouts, permissions, and the task a user needs to finish.",
  },
  {
    index: "03",
    title: "Keep improving",
    description:
      "Strengthen frontend fundamentals through product work, focused study, and continuous iteration.",
  },
] as const;

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
            title="Engineering with the user in view."
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
                I’m a Frontend Developer and Information Technology student. I entered
                the field through a frontend internship at Rekar and moved into its
                software development team after approximately four months.
              </p>
              <p className="text-muted">
                I focus on turning multi-step product requirements into maintainable
                interfaces. My work includes reusable React components, Next.js
                applications, RTL and LTR experiences, and frontend flows shaped around
                real operational tasks.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid border-l border-t border-border md:grid-cols-3">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} className="h-full" delay={index * 0.06}>
              <article className="h-full border-b border-r border-border p-6 sm:p-7">
                <p className="font-mono text-[10px] text-accent">{principle.index}</p>
                <h3 className="mt-8 text-lg font-semibold">{principle.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{principle.description}</p>
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
      </div>
    </section>
  );
}
