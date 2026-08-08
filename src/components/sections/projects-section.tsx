import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-shell border-b border-border py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="projects-heading"
            index="01 / FEATURED PROJECTS ★"
            title="Product work, with the details included."
            description="Three frontend projects across accounting, language learning, and clinic operations—what each product needed, what I worked on, and what I learned."
          />
        </Reveal>

        <div className="mt-14 space-y-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.08}>
              <ProjectCard project={project} reverse={index % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
