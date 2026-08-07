import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";
import { skillGroups } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-shell scroll-mt-24 border-b border-border bg-surface py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="skills-heading"
            index="03 / SKILLS"
            title="How I build frontend products."
            description="Grouped by the work they help me do—not by a long list of logos."
          />
        </Reveal>

        <div className="mt-14 grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} className="h-full" delay={index * 0.035}>
              <article className="skill-card h-full border-b border-r border-border p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className={`skill-dot skill-dot-${group.tone}`} aria-hidden="true" />
                  <h3 className="text-base font-semibold tracking-tight">{group.title}</h3>
                </div>
                <p className="mt-4 min-h-12 text-sm leading-6 text-muted">{group.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-background/50 px-2.5 py-1.5 text-xs text-foreground/72"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
