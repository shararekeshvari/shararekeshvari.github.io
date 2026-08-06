import { Check, CodeXml, ExternalLink } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function ProjectCard({
  slot,
  category,
  title,
  description,
  tech,
  highlights,
  image,
  imageAlt,
}: {
  slot: string;
  category: string;
  title: string;
  description: string;
  tech: readonly string[];
  highlights: readonly string[];
  image: string;
  imageAlt: string;
}) {
  return (
    <article className="group overflow-hidden rounded-lg border border-border bg-surface transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-foreground/25">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-project">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 31vw, (min-width: 768px) 48vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.015]"
        />
      </div>

      <div className="flex min-h-[26rem] flex-col p-5 sm:p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 font-mono text-[11px] uppercase text-accent">{category}</p>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <span className="font-mono text-xs text-muted">{slot}</span>
        </div>

        <p className="mb-5 text-sm leading-6 text-muted">{description}</p>

        <ul className="mb-5 space-y-2">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2 text-xs leading-5 text-foreground/78">
              <Check aria-hidden="true" className="mt-0.5 shrink-0 text-accent" size={14} />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mb-6 flex flex-wrap gap-x-3 gap-y-2 border-l-2 border-accent pl-3 font-mono text-[11px] text-foreground/72">
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          <Button disabled variant="secondary" className="h-10 px-3" title="Add a GitHub URL to enable this button">
            <CodeXml aria-hidden="true" size={16} />
            GitHub
          </Button>
          <Button disabled variant="secondary" className="h-10 px-3" title="Add a live URL to enable this button">
            <ExternalLink aria-hidden="true" size={16} />
            Live demo
          </Button>
        </div>
      </div>
    </article>
  );
}
