import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[94svh] items-end overflow-hidden bg-[#080808] text-white"
    >
      <Image
        src="/images/hero-frontend-workspace.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="object-cover object-[72%_center] opacity-60 sm:object-center sm:opacity-90"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.16)_0%,rgba(8,8,8,0.78)_55%,#080808_94%)] sm:bg-[linear-gradient(90deg,#080808_0%,rgba(8,8,8,0.96)_30%,rgba(8,8,8,0.48)_60%,rgba(8,8,8,0.08)_88%)]"
        aria-hidden="true"
      />
      <div className="hero-glow absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-10 pt-36 sm:px-8 sm:pb-12 lg:px-10 lg:pb-14">
        <div className="max-w-4xl">
          <Reveal>
            <p className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-white/65">
              <span className="h-px w-8 bg-[#86e4bf]" aria-hidden="true" />
              Frontend Developer · IT Student
            </p>
            <h1
              id="hero-heading"
              className="max-w-4xl text-[clamp(3.5rem,10vw,8rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-balance"
            >
              Hi, I’m Sharare.
              <br />
              I build frontend products.
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              I work with React, Next.js, and TypeScript on accounting,
              language-learning, and clinic products—including RTL interfaces for
              Persian users.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className={cn(
                buttonVariants({ variant: "primary" }),
                "border-white bg-white text-black hover:bg-white/88",
              )}
            >
              See what I’ve worked on
              <ArrowDown aria-hidden="true" size={16} />
            </Link>
            <Link
              href="#contact"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "border-white/20 bg-black/25 text-white hover:border-white/45 hover:bg-black/45",
              )}
            >
              Email me
              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.28} className="mt-14 sm:mt-20">
          <ul className="flex flex-col border-t border-white/14 text-xs text-white/70 sm:flex-row sm:divide-x sm:divide-white/14">
            <li className="border-b border-white/14 py-4 sm:flex-1 sm:px-5 sm:first:pl-0">
              React · Next.js · TypeScript
            </li>
            <li className="border-b border-white/14 py-4 sm:flex-1 sm:px-5">
              Responsive · RTL/LTR
            </li>
            <li className="border-b border-white/14 py-4 sm:flex-1 sm:px-5">
              Iran · Open to remote roles
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
