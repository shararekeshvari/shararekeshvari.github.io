import { CalendarDays, Check } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";
import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-shell scroll-mt-24 border-b border-border py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="experience-heading"
            index="02 / EXPERIENCE"
            title="The work behind the portfolio."
            description="My path from a frontend internship into ongoing product development, plus part-time and project-based work."
          />
        </Reveal>

        <div className="mt-14 border-t border-border">
          {experiences.map((item, index) => (
            <Reveal key={`${item.company}-${item.startDate}`} delay={index * 0.04}>
              <article className="experience-row grid gap-7 border-b border-border py-8 md:grid-cols-[0.8fr_1.4fr] md:gap-12 md:py-10">
                <div className="flex gap-4">
                  <span
                    className="mt-2 size-2 shrink-0 rounded-full bg-accent ring-4 ring-accent/12"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                      {item.employmentType}
                    </p>
                    <h3 className="text-xl font-semibold tracking-tight">{item.role}</h3>
                    <p className="mt-1 text-sm text-muted">{item.company}</p>
                  </div>
                </div>
                <div>
                  <p className="mb-5 flex items-center gap-2 font-mono text-xs text-muted">
                    <CalendarDays aria-hidden="true" size={14} />
                    <time dateTime={item.startDate}>{item.period}</time>
                  </p>
                  <p className="max-w-2xl text-base leading-7 text-muted">{item.description}</p>
                  <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {item.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex items-start gap-2.5 text-sm leading-6 text-foreground/78"
                      >
                        <Check aria-hidden="true" className="mt-1 shrink-0 text-accent" size={14} />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
