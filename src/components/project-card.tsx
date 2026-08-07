import { ArrowUpRight, Check, CircleSlash2, Code2 } from "lucide-react";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import type { PortfolioProject } from "@/data/portfolio";
import { cn } from "@/lib/utils";

function CaseStudySection({
  id,
  label,
  children,
  className,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section aria-labelledby={id} className={className}>
      <h4 id={id} className="case-study-label">
        {label}
      </h4>
      {children}
    </section>
  );
}

function DetailList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-foreground/78">
          <Check aria-hidden="true" className="mt-1 shrink-0 text-accent" size={14} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProjectCard({
  project,
  reverse = false,
}: {
  project: PortfolioProject;
  reverse?: boolean;
}) {
  const headingId = `${project.id}-heading`;

  return (
    <article
      aria-labelledby={headingId}
      className="project-card group overflow-hidden rounded-2xl border border-border bg-surface-raised shadow-[0_24px_80px_-58px_rgba(0,0,0,0.85)] transition-[border-color,box-shadow,transform] duration-300 motion-safe:hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_30px_90px_-56px_rgba(0,0,0,0.85)]"
    >
      <div className="grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div
          className={cn(
            "flex items-start border-b border-border bg-project p-4 sm:p-6 lg:border-b-0 lg:border-r lg:p-8",
            reverse && "lg:order-2 lg:border-l lg:border-r-0",
          )}
        >
          <div className="w-full overflow-hidden rounded-xl border border-black/10 bg-white shadow-[0_28px_75px_-42px_rgba(0,0,0,0.65)] dark:border-white/10 lg:sticky lg:top-24">
            <div className="flex h-9 items-center gap-1.5 border-b border-black/10 bg-neutral-100 px-3 dark:border-white/10 dark:bg-neutral-900">
              <span className="size-2 rounded-full bg-[#ff6b64]" aria-hidden="true" />
              <span className="size-2 rounded-full bg-[#f6bd4f]" aria-hidden="true" />
              <span className="size-2 rounded-full bg-[#62c554]" aria-hidden="true" />
              <span className="ml-2 font-mono text-[9px] uppercase tracking-[0.14em] text-neutral-600 dark:text-neutral-400">
                Product preview
              </span>
            </div>
            <div className="relative aspect-[8/5] overflow-hidden bg-white">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1280px) 540px, (min-width: 1024px) 44vw, calc(100vw - 3rem)"
                className="object-contain transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.012]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col p-6 sm:p-8 lg:p-10">
          <header className="flex items-start justify-between gap-5">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                {project.category}
              </p>
              <h3 id={headingId} className="text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                {project.title}
              </h3>
            </div>
            <span
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-muted"
              aria-label={`Project ${project.slot}`}
            >
              {project.slot}
            </span>
          </header>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-foreground/82">{project.summary}</p>

          <CaseStudySection id={`${project.id}-overview`} label="Overview" className="mt-8 border-t border-border pt-7">
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{project.overview}</p>
          </CaseStudySection>

          <div className="mt-7 grid gap-6 rounded-xl border border-border bg-background/42 p-5 sm:grid-cols-2 sm:p-6">
            <CaseStudySection id={`${project.id}-problem`} label="Problem">
              <p className="mt-3 text-sm leading-6 text-muted">{project.problem}</p>
            </CaseStudySection>
            <CaseStudySection id={`${project.id}-solution`} label="Solution">
              <p className="mt-3 text-sm leading-6 text-muted">{project.solution}</p>
            </CaseStudySection>
          </div>

          <CaseStudySection
            id={`${project.id}-responsibilities`}
            label="Responsibilities"
            className="mt-7 rounded-xl border border-accent/20 bg-accent/[0.04] p-5"
          >
            <DetailList items={project.responsibilities} />
          </CaseStudySection>
        </div>
      </div>

      <div className="border-t border-border p-6 sm:p-8 lg:p-10">
        <div className="grid gap-9 lg:grid-cols-2 lg:gap-14">
          <CaseStudySection id={`${project.id}-features`} label="Key features">
            <DetailList items={project.features} />
          </CaseStudySection>
          <CaseStudySection id={`${project.id}-technical-highlights`} label="Technical highlights">
            <DetailList items={project.technicalHighlights} />
          </CaseStudySection>
        </div>

        <div className="mt-9 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          <CaseStudySection
            id={`${project.id}-challenge`}
            label="Challenges"
            className="bg-surface-raised p-5 sm:p-6"
          >
            <p className="mt-3 text-sm leading-6 text-muted">{project.challenge}</p>
          </CaseStudySection>
          <CaseStudySection
            id={`${project.id}-lesson`}
            label="Lessons learned"
            className="bg-surface-raised p-5 sm:p-6"
          >
            <p className="mt-3 text-sm leading-6 text-muted">{project.lesson}</p>
          </CaseStudySection>
        </div>

        <div className="mt-8 flex flex-col gap-6 border-t border-border pt-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="case-study-label">Stack</p>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
              {project.tech.map((item) => (
                <li key={item} className="rounded-md border border-border bg-background/45 px-2.5 py-1 font-mono text-[11px] text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            {project.liveUrl && project.liveLabel ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "secondary" })}>
                {project.liveLabel}
                <ArrowUpRight aria-hidden="true" size={16} />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 text-xs text-muted">
                <CircleSlash2 aria-hidden="true" size={14} />
                {project.liveNote}
              </span>
            )}

            {project.sourceUrl ? (
              <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "ghost" })}>
                <Code2 aria-hidden="true" size={16} />
                View source
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 text-xs text-muted">
                <Code2 aria-hidden="true" size={14} />
                {project.sourceNote}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
