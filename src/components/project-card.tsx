import { ArrowUpRight, Check } from "lucide-react";
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
  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-surface-raised shadow-[0_18px_60px_-44px_rgba(0,0,0,0.7)] transition-[border-color,box-shadow] duration-300 hover:border-foreground/25 hover:shadow-[0_24px_70px_-42px_rgba(0,0,0,0.75)]">
      <div className="grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div
          className={cn(
            "relative min-h-64 overflow-hidden border-b border-border bg-project sm:min-h-80 lg:min-h-full lg:border-b-0 lg:border-r",
            reverse && "lg:order-2 lg:border-l lg:border-r-0",
          )}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 44vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
          />
        </div>

        <div className="flex flex-col p-6 sm:p-8 lg:p-10">
          <header className="flex items-start justify-between gap-5">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
                {project.category}
              </p>
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">{project.title}</h3>
            </div>
            <span className="font-mono text-xs text-muted" aria-label={`Project ${project.slot}`}>
              {project.slot}
            </span>
          </header>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{project.summary}</p>

          <div className="mt-8 grid gap-6 border-y border-border py-7 sm:grid-cols-2">
            <section aria-labelledby={`${project.title.toLowerCase()}-problem`}>
              <h4
                id={`${project.title.toLowerCase()}-problem`}
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground/65"
              >
                Problem
              </h4>
              <p className="mt-3 text-sm leading-6 text-muted">{project.problem}</p>
            </section>
            <section aria-labelledby={`${project.title.toLowerCase()}-solution`}>
              <h4
                id={`${project.title.toLowerCase()}-solution`}
                className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground/65"
              >
                Solution
              </h4>
              <p className="mt-3 text-sm leading-6 text-muted">{project.solution}</p>
            </section>
          </div>

          <section className="mt-7" aria-labelledby={`${project.title.toLowerCase()}-features`}>
            <h4
              id={`${project.title.toLowerCase()}-features`}
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-foreground/65"
            >
              Implemented features
            </h4>
            <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm leading-6 text-foreground/78">
                  <Check aria-hidden="true" className="mt-1 shrink-0 text-accent" size={15} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-7 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-md border border-border bg-background/45 px-2.5 py-1 font-mono text-[11px] text-muted"
              >
                {item}
              </span>
            ))}
          </div>

          {"liveUrl" in project ? (
            <div className="mt-8">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.liveLabel} (opens in a new tab)`}
                className={buttonVariants({ variant: "secondary" })}
              >
                {project.liveLabel}
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
