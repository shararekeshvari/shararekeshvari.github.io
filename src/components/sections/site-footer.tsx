import { ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-7">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p>Sharare Keshvari · Frontend Developer · Information Technology Student</p>
        <a
          href="#top"
          className="inline-flex w-fit items-center gap-2 rounded-sm font-medium text-foreground/70 transition-colors hover:text-accent"
        >
          Back to top
          <ArrowUpRight aria-hidden="true" size={14} />
        </a>
      </div>
    </footer>
  );
}
