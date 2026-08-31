import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  title,
  description,
  className,
  align = "split",
}: {
  index: string;
  title: string;
  description?: string;
  className?: string;
  align?: "split" | "wide";
}) {
  return (
    <div
      className={cn(
        "relative grid gap-6 border-t border-border pt-6",
        align === "split" ? "md:grid-cols-[0.8fr_1.35fr] md:gap-12" : "max-w-5xl",
        className,
      )}
    >
      <div>
        <p className="mb-4 font-mono text-[11px] uppercase text-accent">{index}</p>
        <h2 className="font-display text-5xl leading-[0.95] text-balance sm:text-6xl lg:text-7xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-2xl self-end text-base leading-7 text-muted sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
