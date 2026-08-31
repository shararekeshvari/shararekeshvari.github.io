import { ArrowDown, ArrowUpRight, GitBranch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GITHUB_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const professionalSummary = [
  { label: "Experience", value: "4+ Years" },
  { label: "Projects", value: "4" },
  { label: "Stack", value: "React / Next.js" },
  { label: "Current", value: "Building Leksuu" },
] as const;

export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="hero-grid relative isolate flex min-h-svh overflow-hidden bg-[#080908] text-white"
    >
      <div
        className="absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_50%_100%,rgba(134,228,191,0.1),transparent_62%)]"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-14 pb-16 pt-32 lg:pb-20 lg:pt-36 xl:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.65fr)] xl:gap-16">
        <div className="max-w-3xl">
          <Reveal initiallyVisible>
            <p className="mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-white/62">
              <span
                className="size-1.5 rounded-full bg-[#86e4bf] shadow-[0_0_0_4px_rgba(134,228,191,0.1)]"
                aria-hidden="true"
              />
              Sharare Keshvari <span aria-hidden="true">/</span> Frontend Developer
            </p>
            <h1
              id="hero-heading"
              className="max-w-4xl text-[clamp(3.25rem,5.7vw,4.1rem)] font-semibold leading-[0.94] tracking-[-0.058em] text-balance"
            >
              I build product interfaces
              <span className="block text-white/68">for everyday work.</span>
            </h1>
          </Reveal>

          <Reveal initiallyVisible>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
              Frontend Developer specializing in React, Next.js, and TypeScript.
            </p>
          </Reveal>

          <Reveal initiallyVisible className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className={cn(
                buttonVariants({ variant: "primary" }),
                "border-white bg-white text-black hover:bg-white/88",
              )}
            >
              View Projects
              <ArrowDown aria-hidden="true" size={16} />
            </Link>
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "border-white/20 bg-white/[0.04] text-white hover:border-white/40 hover:bg-white/[0.08]",
              )}
            >
              Contact Me
              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "border-white/20 bg-white/[0.04] text-white hover:border-white/40 hover:bg-white/[0.08]",
              )}
            >
              GitHub
              <GitBranch aria-hidden="true" size={16} />
            </a>
          </Reveal>
        </div>

        <Reveal initiallyVisible className="relative w-full max-w-xl xl:justify-self-end">
          <aside
            aria-label="Professional summary"
            className="hero-summary-card relative overflow-hidden rounded-2xl border border-white/14 bg-white/[0.045] p-5 shadow-[0_40px_120px_-55px_rgba(0,0,0,0.95)] backdrop-blur-sm sm:p-7"
          >
            <Image
              src="/images/sharare-fragment.jpeg"
              alt=""
              fill
              sizes="(min-width: 1280px) 28rem, 100vw"
              className="object-cover object-[44%_38%] opacity-[0.16] grayscale contrast-125 mix-blend-luminosity"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,9,8,0.9),rgba(8,9,8,0.5)_54%,rgba(8,9,8,0.86))]"
              aria-hidden="true"
            />

            <div className="relative">
              <div className="border-b border-white/12 pb-5">
                <p className="text-sm font-medium tracking-[-0.01em] text-white">
                  Available for Remote Work
                </p>
              </div>

              <dl className="divide-y divide-white/10">
                {professionalSummary.map((item) => (
                  <div
                    key={item.label}
                    className="hero-summary-row grid grid-cols-[minmax(6rem,0.72fr)_minmax(0,1fr)] items-baseline gap-4 py-4"
                  >
                    <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/46">
                      {item.label}
                    </dt>
                    <dd className="text-right text-sm font-medium text-white/84">{item.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="flex items-center justify-between gap-4 border-t border-white/12 pt-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/46">
                  Status
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-white">
                  <span
                    className="size-2 rounded-full bg-[#86e4bf] shadow-[0_0_0_4px_rgba(134,228,191,0.1)]"
                    aria-hidden="true"
                  />
                  Open to Work
                </span>
              </div>
            </div>
          </aside>
        </Reveal>
      </Container>
    </section>
  );
}
