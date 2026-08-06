import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  title,
  description,
  className,
}: {
  index: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-5 md:grid-cols-[1fr_1.4fr] md:gap-12", className)}>
      <div>
        <p className="mb-3 font-mono text-xs text-accent">{index}</p>
        <h2 className="text-3xl font-semibold text-balance sm:text-4xl">{title}</h2>
      </div>
      {description ? (
        <p className="max-w-2xl self-end text-base leading-7 text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
