import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Code2,
  GitBranch,
  GraduationCap,
  Globe2,
  Languages,
  Layers3,
  Mail,
  MapPin,
  MonitorSmartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { InitialLoader } from "@/components/initial-loader";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionHeading } from "@/components/section-heading";
import { buttonVariants } from "@/components/ui/button";
import {
  careerGoals,
  contactItems,
  educationItems,
  experience,
  languageItems,
  projects,
  skillGroups,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

const contactIcons = [Mail, Globe2, GitBranch];
const heroProjects = ["Leksuu", "Rekar"]
  .map((title) => projects.find((project) => project.title === title))
  .filter((project): project is (typeof projects)[number] => Boolean(project));

export function Portfolio() {
  return (
    <>
      <InitialLoader />
      <Navbar />
      <ScrollProgress />

      <main id="main-content">
        <section
          id="top"
          aria-labelledby="hero-heading"
          className="relative isolate min-h-dvh overflow-hidden bg-ink text-white"
        >
          <Image
            src="/images/hero-structure.png"
            alt=""
            fill
            loading="eager"
            quality={80}
            sizes="100vw"
            className="hero-atmosphere object-cover object-[68%_center] opacity-45"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_74%_22%,rgba(106,176,255,0.24),transparent_32rem),linear-gradient(180deg,rgba(3,5,10,0.58),rgba(3,5,10,0.92)_72%,#080a0f)]"
            aria-hidden="true"
          />
          <div className="grid-field absolute inset-0 opacity-35" aria-hidden="true" />

          <div className="relative mx-auto flex min-h-dvh w-full max-w-7xl flex-col px-5 pb-8 pt-28 sm:px-8 sm:pt-32 lg:px-10">
            <div className="grid flex-1 gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div className="relative z-10 max-w-5xl">
                <Reveal>
                  <p className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase text-white/68">
                    <span className="h-px w-10 bg-accent" aria-hidden="true" />
                    Frontend Developer - IT Student
                  </p>
                  <h1
                    id="hero-heading"
                    className="text-edge font-display text-7xl leading-[0.84] text-balance sm:text-8xl lg:text-[10rem] xl:text-[11.5rem]"
                  >
                    Sharare
                    <br />
                    Keshvari
                  </h1>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="mt-7 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                    I build responsive, user-friendly web interfaces with React, Next.js, and
                    TypeScript, with a focus on clean implementation and thoughtful user
                    experience.
                  </p>
                </Reveal>

                <Reveal delay={0.18} className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="#projects"
                    className={cn(buttonVariants({ variant: "primary" }), "border-accent bg-accent text-ink")}
                  >
                    View projects
                    <ArrowDown aria-hidden="true" size={16} />
                  </Link>
                  <Link
                    href="#contact"
                    className={cn(
                      buttonVariants({ variant: "secondary" }),
                      "border-white/18 bg-white/8 text-white hover:border-white/38 hover:bg-white/12",
                    )}
                  >
                    Contact me
                    <ArrowUpRight aria-hidden="true" size={16} />
                  </Link>
                  <a
                    href="https://github.com/shararekeshvari"
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      buttonVariants({ variant: "secondary" }),
                      "border-white/18 bg-white/8 text-white hover:border-white/38 hover:bg-white/12",
                    )}
                  >
                    GitHub
                    <GitBranch aria-hidden="true" size={16} />
                  </a>
                </Reveal>
              </div>

              <Reveal delay={0.16} className="relative z-0 min-h-[33rem] sm:min-h-[37rem] lg:min-h-[42rem]">
                <div className="hero-composition depth-perspective relative h-full min-h-[33rem] sm:min-h-[37rem] lg:min-h-[42rem]">
                  <div
                    className="hero-identity-plane absolute left-0 top-0 h-[86%] w-[62%] overflow-hidden rounded-lg border border-white/12 bg-white/[0.06] shadow-[0_2rem_6rem_rgba(0,0,0,0.42)]"
                    aria-hidden="true"
                  >
                    <Image
                      src="/images/sharare-fragment.jpeg"
                      alt=""
                      fill
                      loading="eager"
                      sizes="(min-width: 1024px) 28vw, 62vw"
                      className="object-cover object-[42%_center] opacity-45 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,15,0.12),rgba(8,10,15,0.72)),linear-gradient(180deg,transparent,rgba(8,10,15,0.82))]" />
                  </div>

                  <div className="hero-fragment hero-proof-panel absolute right-0 top-9 w-[82%] max-w-[36rem] overflow-hidden rounded-lg border border-white/16 bg-white/[0.08] shadow-[0_2rem_6rem_rgba(0,0,0,0.52)] backdrop-blur-md sm:w-[78%] lg:top-10">
                    <div className="flex h-9 items-center justify-between border-b border-white/12 px-3">
                      <span className="font-mono text-[10px] uppercase text-white/60">
                        {heroProjects[0].title.toLowerCase()}.live
                      </span>
                      <MonitorSmartphone aria-hidden="true" size={14} className="text-accent" />
                    </div>
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={heroProjects[0].image}
                        alt=""
                        fill
                        loading="eager"
                        fetchPriority="high"
                        sizes="(min-width: 1024px) 38vw, 82vw"
                        className="object-cover opacity-95"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="hero-fragment absolute bottom-12 right-4 hidden w-[48%] max-w-[20rem] overflow-hidden rounded-lg border border-white/14 bg-white/[0.08] shadow-[0_1.5rem_4rem_rgba(0,0,0,0.42)] backdrop-blur-md sm:block lg:right-8">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={heroProjects[1].image}
                        alt=""
                        fill
                        loading="eager"
                        sizes="(min-width: 1024px) 20vw, 42vw"
                        className="object-cover opacity-90"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div
                    className="hero-stack-panel absolute bottom-0 left-0 w-[72%] max-w-[24rem] rounded-lg border border-white/12 bg-ink/76 p-4 text-xs leading-5 text-white/72 shadow-[0_1.25rem_4rem_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-5"
                    aria-hidden="true"
                  >
                    <p className="font-mono text-[10px] uppercase text-accent">frontend stack</p>
                    <div className="mt-4 grid gap-2">
                      {["React interfaces", "Next.js delivery", "TypeScript components"].map(
                        (item) => (
                          <span
                            key={item}
                            className="flex items-center justify-between gap-4 border-t border-white/10 pt-2"
                          >
                            {item}
                            <span className="size-1.5 rounded-full bg-accent" />
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="mt-10 grid gap-3 border-t border-white/14 pt-4 font-mono text-[11px] uppercase text-white/48 sm:grid-cols-3">
              <span>Iran - Open to remote junior roles</span>
              <span className="sm:text-center">Persian - English - German</span>
              <span className="sm:text-right">Selected work below</span>
            </div>
          </div>
        </section>

        <section id="projects" className="section-pad scroll-mt-24 border-y border-border">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Reveal>
              <SectionHeading
                index="WORK / PROJECTS"
                title="Interfaces with real product weight."
                description="Selected frontend projects across business operations, language learning, market discovery, and clinic management, with concise scope and verified screenshots where live pages are available."
              />
            </Reveal>

            <div className="mt-14 grid gap-7 lg:gap-10">
              {projects.map((project, index) => (
                <Reveal key={project.title} delay={index * 0.06}>
                  <ProjectCard {...project} index={index} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-pad scroll-mt-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Reveal>
              <SectionHeading
                index="ABOUT / PROFILE"
                title="Clear interfaces, built with care."
                align="wide"
              />
            </Reveal>

            <div className="mt-14 grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
              <Reveal>
                <aside className="border-l border-accent pl-5">
                  <p className="font-display text-4xl leading-tight text-balance sm:text-5xl">
                    I care about the moment where an interface starts to feel obvious.
                  </p>
                  <div className="mt-8 grid gap-4 text-sm text-muted">
                    <div className="flex items-center gap-3">
                      <MapPin aria-hidden="true" size={16} className="text-accent" />
                      <span>Iran - Open to internships and junior roles</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Languages aria-hidden="true" size={16} className="text-accent" />
                      <span>Persian - English - German</span>
                    </div>
                  </div>
                </aside>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="max-w-3xl space-y-6 text-lg leading-8 text-foreground/85 sm:text-xl sm:leading-9">
                  <p>
                    I am a Frontend Developer and Information Technology student focused on
                    building modern, responsive, and user-friendly web applications.
                  </p>
                  <p className="text-muted">
                    I work primarily with React, Next.js, TypeScript, and modern UI tools. I
                    value clear code, reusable components, thoughtful user experience, and
                    interfaces that adapt across screen sizes.
                  </p>
                  <p className="text-muted">
                    I am seeking remote internships and junior frontend roles where I can
                    contribute to real-world products, continue developing my skills, and
                    collaborate with international teams.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
              <Reveal>
                <div className="grid gap-3">
                  {languageItems.map((item) => (
                    <div
                      key={item.language}
                      className="flex items-baseline justify-between gap-5 border-b border-border py-3"
                    >
                      <p className="font-medium">{item.language}</p>
                      <p className="text-right text-sm text-muted">{item.level}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="grid gap-4 sm:grid-cols-2">
                  {careerGoals.map((goal) => (
                    <div
                      key={goal}
                      className="flex items-start gap-3 border-t border-border pt-4 text-sm leading-6 text-muted"
                    >
                      <Check aria-hidden="true" className="mt-1 shrink-0 text-accent" size={15} />
                      {goal}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="skills" className="section-pad scroll-mt-24 bg-surface">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Reveal>
              <SectionHeading
                index="SKILLS / TOOLKIT"
                title="A practical frontend toolkit."
                description="A scannable map of the tools I currently use across interface development, data handling, design systems, and AI-assisted workflows."
              />
            </Reveal>

            <div className="mt-14 grid auto-rows-fr gap-4 md:grid-cols-4">
              {skillGroups.map((group, index) => {
                const featured = index === 0 || index === 1 || group.title === "UI & Design";

                return (
                  <Reveal key={group.title} delay={index * 0.035}>
                    <div
                      className={cn(
                        "skill-module h-full rounded-lg border border-border p-5 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-accent/45",
                        featured && "md:col-span-2",
                        group.title === "Frontend Fundamentals" && "md:row-span-2",
                      )}
                    >
                      <div className="mb-8 flex items-start justify-between gap-4">
                        <div>
                          <p className="mb-2 font-mono text-[11px] uppercase text-accent">
                            {group.title}
                          </p>
                          <h3
                            className={cn(
                              "font-display leading-none",
                              featured ? "text-5xl sm:text-6xl" : "text-3xl",
                            )}
                          >
                            {group.skills[0]}
                          </h3>
                        </div>
                        {featured ? (
                          <Layers3 aria-hidden="true" className="text-accent" size={22} />
                        ) : (
                          <Code2 aria-hidden="true" className="text-muted" size={18} />
                        )}
                      </div>
                      <ul className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => (
                          <li
                            key={skill}
                            className="rounded border border-border bg-background/42 px-2.5 py-1.5 text-sm text-muted"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="section-pad scroll-mt-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Reveal>
              <SectionHeading
                index="EXPERIENCE / REMOTE"
                title="Professional practice in React teams."
                description="Remote frontend work focused on responsive interfaces, reusable React components, and TypeScript implementation."
              />
            </Reveal>

            <Reveal className="mt-14">
              <article className="relative overflow-hidden rounded-lg border border-border bg-surface-raised p-5 sm:p-8 lg:p-10">
                <div className="absolute right-8 top-8 hidden font-display text-9xl leading-none text-foreground/[0.04] lg:block">
                  Work
                </div>
                <div className="relative grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
                  <div>
                    <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase text-accent">
                      <BriefcaseBusiness aria-hidden="true" size={16} />
                      {experience.employmentType}
                    </div>
                    <h3 className="font-display text-5xl leading-none sm:text-6xl">
                      {experience.role}
                    </h3>
                    <p className="mt-4 text-lg font-medium">{experience.company}</p>
                    <p className="mt-6 flex items-center gap-2 text-sm text-muted">
                      <CalendarDays aria-hidden="true" size={15} />
                      Started {experience.startDate}
                    </p>
                  </div>

                  <div>
                    <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                      {experience.description}
                    </p>
                    <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {experience.responsibilities.map((responsibility) => (
                        <li
                          key={responsibility}
                          className="flex items-start gap-3 text-sm leading-6 text-foreground/82"
                        >
                          <Check
                            aria-hidden="true"
                            className="mt-1 shrink-0 text-accent"
                            size={14}
                          />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-5">
                      {experience.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded border border-border bg-background/45 px-2.5 py-1.5 font-mono text-[11px] text-muted"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="section-pad border-y border-border bg-surface">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Reveal>
              <div id="education" className="scroll-mt-24">
                <div className="mb-8 flex items-center gap-3">
                  <GraduationCap aria-hidden="true" className="text-accent" size={20} />
                  <p className="font-mono text-[11px] uppercase text-muted">Education</p>
                </div>
                <h2 className="font-display text-5xl leading-none sm:text-6xl">Learning path</h2>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {educationItems.map((item) => (
                    <article
                      key={item.degree}
                      className="rounded-lg border border-border bg-background/55 p-5"
                    >
                      <p className="mb-3 font-mono text-[11px] uppercase text-accent">
                        {item.status}
                      </p>
                      <h3 className="text-lg font-semibold leading-6">{item.degree}</h3>
                      {"date" in item ? (
                        <p className="mt-3 text-sm text-muted">{item.date}</p>
                      ) : null}
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="section-pad scroll-mt-24 overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Reveal>
              <p className="mb-6 font-mono text-[11px] uppercase text-accent">
                Contact / Next step
              </p>
              <div className="grid gap-10 lg:grid-cols-[1.22fr_0.78fr] lg:gap-16">
                <div>
                  <h2 className="contact-statement font-display text-6xl leading-[0.9] sm:text-8xl lg:text-[9.5rem]">
                    Let&apos;s build something clear and useful.
                  </h2>
                  <p className="mt-8 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                    I am open to remote internships, junior frontend roles, and opportunities
                    to collaborate with international teams. Email is the best way to reach me.
                  </p>
                  <Link
                    href="mailto:shararekeshvari77@gmail.com"
                    className={cn(buttonVariants({ variant: "primary" }), "mt-8")}
                  >
                    Email Sharare
                    <Mail aria-hidden="true" size={16} />
                  </Link>
                </div>

                <div className="self-end border-t border-border">
                  {contactItems.map((item, index) => {
                    const Icon = contactIcons[index];

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="flex min-h-16 items-center gap-4 border-b border-border py-5 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <Icon aria-hidden="true" className="text-accent" size={18} />
                        <div className="min-w-0 flex-1">
                          <p className="text-xs text-muted">{item.label}</p>
                          <p className="mt-1 break-words text-sm font-medium">{item.value}</p>
                        </div>
                        <ArrowUpRight aria-hidden="true" className="text-muted/60" size={17} />
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
          <p>Sharare Keshvari - Frontend Developer - Information Technology Student</p>
          <p>React - Next.js - TypeScript</p>
        </div>
      </footer>
    </>
  );
}
