import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-7">
      <Container className="flex flex-col gap-3 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Sharare Keshvari · Frontend Developer · Information Technology Student</p>
        <a
          href="#top"
          className="inline-flex w-fit items-center gap-2 rounded-sm font-medium text-foreground/70 transition-colors hover:text-accent"
        >
          Back to top
          <ArrowUpRight aria-hidden="true" size={14} />
        </a>
      </Container>
    </footer>
  );
}
