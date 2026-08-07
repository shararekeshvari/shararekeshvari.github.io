import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const featuredProject = projects[0];

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

      <Container className="relative grid items-center gap-14 pb-16 pt-32 lg:grid-cols-[minmax(0,1.02fr)_minmax(28rem,0.98fr)] lg:gap-16 lg:pb-20 lg:pt-36">
        <div className="max-w-3xl">
          <Reveal initiallyVisible>
            <p className="mb-7 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-white/62">
              <span className="size-1.5 rounded-full bg-[#86e4bf] shadow-[0_0_0_4px_rgba(134,228,191,0.1)]" aria-hidden="true" />
              Sharare Keshvari · Frontend Developer
            </p>
            <h1
              id="hero-heading"
              className="max-w-3xl text-[clamp(3.35rem,7.2vw,6.8rem)] font-semibold leading-[0.94] tracking-[-0.058em] text-balance"
            >
              I build product interfaces for everyday work.
            </h1>
          </Reveal>

          <Reveal initiallyVisible>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
              I work with React, Next.js, and TypeScript on accounting,
              language-learning, and clinic software. Much of that work involves
              multi-step flows and Persian RTL interfaces.
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
              View featured projects
              <ArrowDown aria-hidden="true" size={16} />
            </Link>
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "border-white/20 bg-white/[0.04] text-white hover:border-white/40 hover:bg-white/[0.08]",
              )}
            >
              Get in touch
              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </Reveal>

          <Reveal initiallyVisible className="mt-12">
            <ul className="grid max-w-2xl grid-cols-2 border-l border-t border-white/12 text-xs text-white/58 sm:grid-cols-3">
              <li className="border-b border-r border-white/12 px-4 py-3.5">React · Next.js</li>
              <li className="border-b border-r border-white/12 px-4 py-3.5">TypeScript</li>
              <li className="col-span-2 border-b border-r border-white/12 px-4 py-3.5 sm:col-span-1">
                Responsive · RTL/LTR
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal initiallyVisible className="relative lg:justify-self-end">
          <div className="hero-product-frame relative mx-auto max-w-xl rounded-2xl border border-white/12 bg-white/[0.045] p-3 shadow-[0_40px_120px_-55px_rgba(0,0,0,0.95)] backdrop-blur-sm sm:p-4">
            <div className="mb-3 flex items-center justify-between px-1">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#86e4bf]">
                  Selected work
                </p>
                <p className="mt-1 text-xs text-white/62">{featuredProject.title} · {featuredProject.category}</p>
              </div>
              <span className="rounded-full border border-white/12 px-2.5 py-1 font-mono text-[9px] text-white/48">
                RTL
              </span>
            </div>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white">
              <div className="flex h-9 items-center gap-1.5 border-b border-black/10 bg-neutral-100 px-3">
                <span className="size-2 rounded-full bg-[#ff6b64]" aria-hidden="true" />
                <span className="size-2 rounded-full bg-[#f6bd4f]" aria-hidden="true" />
                <span className="size-2 rounded-full bg-[#62c554]" aria-hidden="true" />
                <span className="ml-2 h-1.5 w-24 rounded-full bg-black/8" aria-hidden="true" />
              </div>
              <div className="relative aspect-[8/5] overflow-hidden bg-white">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.imageAlt}
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(min-width: 1280px) 520px, (min-width: 1024px) 42vw, calc(100vw - 3.5rem)"
                  className="object-contain"
                />
              </div>
            </div>
            <p className="px-1 pt-3 text-xs leading-5 text-white/48">
              Rekar’s public product site—one part of a wider accounting platform.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
