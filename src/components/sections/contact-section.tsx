import { ArrowUpRight, CodeXml, Mail, MoveRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { contactItems } from "@/data/portfolio";
import { PERSON_EMAIL } from "@/lib/site";
import { cn } from "@/lib/utils";

const contactIcons = {
  Email: Mail,
  GitHub: CodeXml,
} as const;

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="contact-section border-t border-border py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <p className="mb-6 font-mono text-xs text-accent">05 / CONTACT</p>
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
            <div>
              <h2
                id="contact-heading"
                className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-balance sm:text-6xl"
              >
                Let’s talk about the work.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
                I’m interested in frontend roles and remote product teams where I can
                contribute, learn from experienced engineers, and keep improving the
                work. If my background seems useful to your team, send me an email.
              </p>
              <a
                href={`mailto:${PERSON_EMAIL}`}
                className={cn(buttonVariants({ variant: "primary" }), "mt-8")}
              >
                Send an email
                <MoveRight aria-hidden="true" size={16} />
              </a>
            </div>

            <div className="border-t border-border">
              {contactItems.map((item) => {
                const Icon = contactIcons[item.label];
                const external = item.href.startsWith("https://");

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="contact-link group/link flex items-center gap-4 border-b border-border py-5"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-background/60 text-muted transition-colors group-hover/link:border-accent/40 group-hover/link:text-accent">
                      <Icon aria-hidden="true" size={17} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-muted">{item.label}</span>
                      <span className="mt-1 block break-words text-sm font-medium">
                        {item.value}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="text-muted/50 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      size={17}
                    />
                    {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
