import {
  ArrowUpRight,
  Check,
  CircleSlash2,
  Code2,
  Lightbulb,
  Wrench,
} from "lucide-react";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";
import type { PortfolioProject } from "@/data/portfolio";
import { cn } from "@/lib/utils";

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
      className="project-card group overflow-hidden rounded-2xl border border-border bg-surface-raised shadow-[0_24px_80px_-58px_rgba(0,0,0,0.85)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-foreground/20 hover:shadow-[0_30px_90px_-56px_rgba(0,0,0,0.85)]"
    >
      <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
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
                Live product preview
              </span>
            </div>
            <div className="relative aspect-[8/5] overflow-hidden bg-white">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1280px) 540px, (min-width: 1024px) 44vw, calc(100vw - 3rem)"
                className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
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

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{project.summary}</p>

          <dl className="mt-7 grid gap-5 rounded-xl border border-border bg-background/45 p-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/60">
                My role
              </dt>
              <dd className="mt-2 text-sm leading-6 text-foreground/80">{project.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/60">
                Problem
              </dt>
              <dd className="mt-2 text-sm leading-6 text-muted">{project.problem}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/60">
                Solution
              </dt>
              <dd className="mt-2 text-sm leading-6 text-muted">{project.solution}</dd>
            </div>
          </dl>

          <section className="mt-7" aria-labelledby={`${project.id}-features`}>
            <h4
              id={`${project.id}-features`}
              className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/60"
            >
              Key features
            </h4>
            <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm leading-6 text-foreground/78"
                >
                  <Check aria-hidden="true" className="mt-1 shrink-0 text-accent" size={15} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-7 grid gap-4 border-y border-border py-6 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <Wrench aria-hidden="true" className="mt-0.5 shrink-0 text-accent" size={16} />
              <div>
                <h4 className="text-xs font-semibold">Engineering challenge</h4>
                <p className="mt-2 text-sm leading-6 text-muted">{project.challenge}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Lightbulb aria-hidden="true" className="mt-0.5 shrink-0 text-accent" size={16} />
              <div>
                <h4 className="text-xs font-semibold">Lesson learned</h4>
                <p className="mt-2 text-sm leading-6 text-muted">{project.lesson}</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/60">
              Technologies
            </p>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
              {project.tech.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-background/45 px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-6">
            {project.liveUrl && project.liveLabel ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "secondary" })}
              >
                {project.liveLabel}
                <ArrowUpRight aria-hidden="true" size={16} />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <span className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-4 text-sm text-muted">
                <CircleSlash2 aria-hidden="true" size={15} />
                {project.liveNote}
              </span>
            )}

            {project.sourceUrl ? (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: "ghost" })}
              >
                <Code2 aria-hidden="true" size={16} />
                View source
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 px-2 text-xs text-muted">
                <Code2 aria-hidden="true" size={15} />
                GitHub: {project.sourceNote}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
