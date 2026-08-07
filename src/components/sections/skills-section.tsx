import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-shell scroll-mt-24 bg-surface py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            id="skills-heading"
            index="02 / SKILLS"
            title="A focused frontend toolkit."
            description="Technologies I use across interface development, data integration, localization, design, and day-to-day delivery."
          />
        </Reveal>

        <div className="mt-14 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} className="h-full" delay={index * 0.035}>
              <article className="skill-card h-full min-h-52 border-b border-r border-border p-5 sm:p-6">
                <div className="mb-8 flex items-center justify-between gap-3">
                  <span className={`skill-dot skill-dot-${group.tone}`} aria-hidden="true" />
                  <span className="font-mono text-[9px] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-sm font-semibold">{group.title}</h3>
                <ul className="mt-5 space-y-2.5">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-sm text-muted">
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
