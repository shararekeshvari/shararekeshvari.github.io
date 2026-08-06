import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Check,
  CodeXml,
  Languages,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import {
  contactItems,
  experience,
  languageItems,
  projects,
  skillGroups,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

const contactIcons = {
  Email: Mail,
  GitHub: CodeXml,
} as const;

export function Portfolio() {
  return (
    <>
      <Navbar />
      <ScrollProgress />

      <main id="main-content">
        <section
          id="top"
          aria-labelledby="hero-heading"
          className="relative flex min-h-[92svh] items-end overflow-hidden bg-[#080808] text-white"
        >
          <Image
            src="/images/hero-frontend-workspace.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            aria-hidden="true"
            className="object-cover object-[74%_center] opacity-65 sm:object-center sm:opacity-90"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.22)_0%,rgba(8,8,8,0.74)_52%,#080808_92%)] sm:bg-[linear-gradient(90deg,#080808_0%,rgba(8,8,8,0.94)_31%,rgba(8,8,8,0.45)_58%,rgba(8,8,8,0.08)_86%)]"
            aria-hidden="true"
          />

          <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
            <div className="max-w-3xl">
              <Reveal>
                <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase text-white/65">
                  <span className="h-px w-8 bg-accent" aria-hidden="true" />
                  Sharare Keshvari · IT Student
                </p>
                <h1
                  id="hero-heading"
                  className="max-w-4xl text-[clamp(3.1rem,12vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.055em] text-balance"
                >
                  Frontend
                  <br />
                  Developer.
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-7 max-w-xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
                  I build responsive, accessible web interfaces with React, Next.js, and
                  TypeScript, with an emphasis on reusable components and clear user
                  experiences.
                </p>
              </Reveal>

              <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#projects"
                  className={cn(buttonVariants({ variant: "primary" }), "border-white bg-white text-black hover:bg-white/85")}
                >
                  View projects
                  <ArrowDown aria-hidden="true" size={16} />
                </Link>
                <Link
                  href="#contact"
                  className={cn(buttonVariants({ variant: "secondary" }), "border-white/20 bg-black/25 text-white hover:border-white/45 hover:bg-black/45")}
                >
                  Contact me
                  <ArrowUpRight aria-hidden="true" size={16} />
                </Link>
              </Reveal>
            </div>

            <div className="mt-14 flex items-center justify-between border-t border-white/14 pt-4 text-[11px] uppercase text-white/45 sm:mt-20">
              <span>Iran · Open to remote junior roles</span>
              <span className="hidden sm:inline">Persian · English · German</span>
              <span>Scroll to explore</span>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 border-b border-border py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Reveal>
              <SectionHeading index="01 / ABOUT" title="Frontend work grounded in clarity." />
            </Reveal>

            <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
              <Reveal>
                <div className="space-y-4 text-sm text-muted">
                  <div className="flex items-center gap-3">
                    <MapPin aria-hidden="true" size={16} />
                    <span>Iran · Open to internships and junior roles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Languages aria-hidden="true" size={16} />
                    <span>Persian · English · German</span>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="max-w-2xl space-y-6 text-lg leading-8 text-foreground/82 sm:text-xl sm:leading-9">
                  <p>
                    I am a Frontend Developer and Information Technology student building
                    responsive interfaces for business, learning, and service products.
                  </p>
                  <p className="text-muted">
                    My work centers on React, Next.js, TypeScript, reusable component systems,
                    and interfaces that support both RTL and LTR experiences. I am open to
                    remote internships and junior frontend roles.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal className="mt-16">
              <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
                {languageItems.map((item) => (
                  <div key={item.language} className="border-b border-r border-border p-5">
                    <p className="font-medium">{item.language}</p>
                    <p className="mt-2 text-sm text-muted">{item.level}</p>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </section>

        <section id="skills" className="scroll-mt-24 bg-surface py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Reveal>
              <SectionHeading
                index="02 / SKILLS"
                title="Tools I work with."
                description="My current frontend toolkit, covering interface development, data handling, design systems, and development workflows."
              />
            </Reveal>

            <div className="mt-14 grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group, index) => (
                <Reveal key={group.title} className="h-full" delay={index * 0.04}>
                  <div className="h-full min-h-52 border-b border-r border-border p-5 sm:p-6">
                    <div className="mb-8 flex items-center gap-3">
                      <span className={`skill-dot skill-dot-${group.tone}`} aria-hidden="true" />
                      <h3 className="text-sm font-semibold">{group.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {group.skills.map((skill) => (
                        <li key={skill} className="text-sm text-muted">
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 border-y border-border py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Reveal>
              <SectionHeading
                index="03 / PROJECTS"
                title="Selected frontend work."
                description="Frontend projects across business operations, language learning, and clinic management, described using features and technologies verified in their source code."
              />
            </Reveal>

            <div className="mt-14 space-y-6">
              {projects.map((project, index) => (
                <Reveal key={project.slot} delay={index * 0.08}>
                  <ProjectCard project={project} reverse={index % 2 === 1} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Reveal>
              <SectionHeading
                index="04 / EXPERIENCE"
                title="Professional experience."
                description="Remote frontend work focused on responsive interfaces, reusable React components, and TypeScript implementation."
              />
            </Reveal>

            <Reveal className="mt-14">
              <div className="grid gap-5 border-t border-border py-8 md:grid-cols-[1fr_1.4fr] md:gap-12 md:py-10">
                <div className="flex gap-4">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-accent ring-4 ring-accent/12" aria-hidden="true" />
                  <div>
                    <p className="mb-2 font-mono text-[11px] uppercase text-accent">{experience.employmentType}</p>
                    <h3 className="text-xl font-semibold">{experience.role}</h3>
                    <p className="mt-1 text-sm text-muted">{experience.company}</p>
                  </div>
                </div>
                <div>
                  <p className="mb-5 flex items-center gap-2 font-mono text-xs text-muted">
                    <CalendarDays aria-hidden="true" size={14} />
                    <time dateTime={experience.period}>{experience.period}</time>
                  </p>
                  <p className="max-w-2xl text-base leading-7 text-muted">
                    {experience.description}
                  </p>
                  <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {experience.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex items-start gap-2 text-sm leading-6 text-foreground/78">
                        <Check aria-hidden="true" className="mt-1 shrink-0 text-accent" size={14} />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.tech.map((item) => (
                      <span key={item} className="rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-muted">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="border-t border-border" />
            </Reveal>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Reveal>
              <p className="mb-6 font-mono text-xs text-accent">05 / CONTACT</p>
              <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
                <div>
                  <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-balance sm:text-6xl">
                    Let&apos;s build something clear and useful.
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
                    I am open to remote internships, junior frontend roles, and opportunities
                    to collaborate with international teams. Email is the best way to reach me.
                  </p>
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
                        aria-label={external ? `${item.label}: ${item.value} (opens in a new tab)` : `${item.label}: ${item.value}`}
                        className="flex items-center gap-4 border-b border-border py-5 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                      >
                        <Icon aria-hidden="true" className="text-muted" size={18} />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs text-muted">{item.label}</p>
                          <p className="mt-1 break-words text-sm font-medium">{item.value}</p>
                        </div>
                        <ArrowUpRight aria-hidden="true" className="text-muted/50" size={17} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-7">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>Sharare Keshvari · Frontend Developer · Information Technology Student</p>
          <p>React · Next.js · TypeScript</p>
        </div>
      </footer>
    </>
  );
}
