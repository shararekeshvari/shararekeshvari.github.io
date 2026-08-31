"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";
import Image from "next/image";

import type { ProjectCardLabels } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const toneClassByTitle: Record<string, string> = {
  Rekar: "project-showcase-rekar",
  Leksuu: "project-showcase-leksuu",
  Nerkhin: "project-showcase-nerkhin",
  Dentia: "project-showcase-dentia",
};

export function ProjectCard({
  slot,
  category,
  title,
  description,
  tech,
  highlights,
  image,
  imageAlt,
  liveUrl,
  index = 0,
  labels,
}: {
  slot: string;
  category: string;
  title: string;
  description: string;
  tech: readonly string[];
  highlights: readonly string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
  index?: number;
  labels: ProjectCardLabels;
}) {
  const reduceMotion = useReducedMotion();
  const reversed = index % 2 === 1;
  const isVectorPreview = image.endsWith(".svg");

  return (
    <motion.article
      initial={false}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "project-showcase relative overflow-hidden rounded-lg border p-4 sm:p-6 lg:p-8",
        toneClassByTitle[title],
      )}
    >
      <div
        className="pointer-events-none absolute right-5 top-3 font-display text-8xl leading-none text-foreground/[0.04] sm:text-9xl lg:text-[11rem]"
        aria-hidden="true"
      >
        {slot}
      </div>

      <div
        className={cn(
          "relative grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-center lg:gap-12",
          reversed && "lg:grid-cols-[1.26fr_0.74fr]",
        )}
      >
        <div className={cn("relative z-10", reversed && "lg:order-2")}>
          <div className="mb-7 flex items-center gap-3">
            <span
              className="h-px w-10 bg-[var(--project-accent)]"
              aria-hidden="true"
            />
            <p className="font-mono text-[11px] uppercase text-[color:var(--project-accent)]">
              {labels.project} {slot} / {category}
            </p>
          </div>

          <h3 className="font-display text-6xl leading-none text-balance sm:text-7xl lg:text-8xl">
            {title}
          </h3>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {description}
          </p>

          <ul className="mt-7 grid gap-3">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-sm leading-6 text-foreground/82"
              >
                <Check
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-[color:var(--project-accent)]"
                  size={15}
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded border border-border bg-background/45 px-2.5 py-1.5 font-mono text-[11px] text-muted"
              >
                {item}
              </span>
            ))}
          </div>

          {liveUrl ? (
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-5 text-xs text-muted">
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded border border-[color:var(--project-accent)] bg-[var(--project-accent)] px-3 text-sm font-medium text-ink transition-colors hover:bg-[var(--project-accent-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <ExternalLink aria-hidden="true" size={15} />
                {labels.visitLiveSite}
              </a>
            </div>
          ) : null}
        </div>

        <div className={cn("depth-perspective relative min-w-0", reversed && "lg:order-1")}>
          <div className="project-media-shell overflow-hidden rounded-lg border border-border bg-surface-raised transition-transform duration-500">
            <div className="flex h-9 items-center justify-between border-b border-border bg-background/80 px-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-signal-coral" />
                <span className="size-2.5 rounded-full bg-signal-amber" />
                <span className="size-2.5 rounded-full bg-signal-mint" />
              </div>
              <p className="font-mono text-[10px] uppercase text-muted">
                {title.toLowerCase()}.{labels.interfaceLabel}
              </p>
            </div>
            <div className="relative aspect-[16/10] bg-project sm:aspect-[16/9]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 56vw, 100vw"
                quality={80}
                className={cn(isVectorPreview ? "object-contain p-3 sm:p-7" : "object-cover")}
              />
            </div>
          </div>

          <div
            className={cn(
              "pointer-events-none absolute hidden rounded border border-[color:var(--project-accent)] bg-background/78 px-3 py-2 font-mono text-[10px] uppercase text-muted opacity-90 shadow-lg backdrop-blur-md sm:block",
              reversed ? "left-4 top-5" : "right-4 top-5",
            )}
            aria-hidden="true"
          >
            {labels.responsiveSurface}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
