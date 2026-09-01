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
  defaultLocale,
  getPortfolioContent,
  localeConfig,
  localeOptions,
  type Locale,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";

const contactIcons = [Mail, Globe2, GitBranch];

export function Portfolio({ locale = defaultLocale }: { locale?: Locale }) {
  const content = getPortfolioContent(locale);
  const currentLocale = localeConfig[locale];
  const leksuuProject =
    content.projects.find((project) => project.title === "Leksuu") ?? content.projects[0];
  const rekarProject =
    content.projects.find((project) => project.title === "Rekar") ?? content.projects[1];

  return (
    <div lang={currentLocale.htmlLang} dir={currentLocale.direction}>
      <a className="skip-link" href="#main-content">
        {content.ui.skipToContent}
      </a>
      <InitialLoader label={content.ui.loadingPortfolio} />
      <Navbar
        currentLocale={locale}
        labels={content.navbar}
        localeOptions={localeOptions}
        navigation={content.navigation}
      />
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
                    {content.hero.eyebrow}
                  </p>
                  <h1
                    id="hero-heading"
                    className="hero-title text-edge font-display text-7xl leading-[0.84] text-balance sm:text-8xl lg:text-[10rem] xl:text-[11.5rem]"
                  >
                    {content.hero.nameLines[0]}
                    <br />
                    {content.hero.nameLines[1]}
                  </h1>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="mt-7 max-w-2xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                    {content.hero.summary}
                  </p>
                </Reveal>

                <Reveal delay={0.18} className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="#projects"
                    className={cn(buttonVariants({ variant: "primary" }), "border-accent bg-accent text-ink")}
                  >
                    {content.hero.primaryAction}
                    <ArrowDown aria-hidden="true" size={16} />
                  </Link>
                  <Link
                    href="#contact"
                    className={cn(
                      buttonVariants({ variant: "secondary" }),
                      "border-white/18 bg-white/8 text-white hover:border-white/38 hover:bg-white/12",
                    )}
                  >
                    {content.hero.secondaryAction}
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
                    {content.hero.githubAction}
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
                      src="/images/hero-structure.png"
                      alt=""
                      fill
                      loading="eager"
                      sizes="(min-width: 1024px) 28vw, 62vw"
                      className="object-cover object-[34%_center] opacity-[0.42] mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,15,0.12),rgba(8,10,15,0.72)),linear-gradient(180deg,transparent,rgba(8,10,15,0.82))]" />
                  </div>

                  <div className="hero-fragment hero-proof-panel absolute right-0 top-9 w-[82%] max-w-[36rem] overflow-hidden rounded-lg border border-white/16 bg-white/[0.08] shadow-[0_2rem_6rem_rgba(0,0,0,0.52)] backdrop-blur-md sm:w-[78%] lg:top-10">
                    <div className="flex h-9 items-center justify-between border-b border-white/12 px-3">
                      <span className="font-mono text-[10px] uppercase text-white/60">
                        {leksuuProject.title.toLowerCase()}.live
                      </span>
                      <MonitorSmartphone aria-hidden="true" size={14} className="text-accent" />
                    </div>
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={leksuuProject.image}
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
                        src={rekarProject.image}
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
                    <p className="font-mono text-[10px] uppercase text-accent">
                      {content.hero.stackLabel}
                    </p>
                    <div className="mt-4 grid gap-2">
                      {content.hero.stackItems.map((item) => (
                        <span
                          key={item}
                          className="flex items-center justify-between gap-4 border-t border-white/10 pt-2"
                        >
                          {item}
                          <span className="size-1.5 rounded-full bg-accent" />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="mt-10 grid gap-3 border-t border-white/14 pt-4 font-mono text-[11px] uppercase text-white/48 sm:grid-cols-3">
              <span>{content.hero.meta[0]}</span>
              <span className="sm:text-center">{content.hero.meta[1]}</span>
              <span className="sm:text-right">{content.hero.meta[2]}</span>
            </div>
          </div>
        </section>

        <section id="projects" className="section-pad scroll-mt-24 border-y border-border">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Reveal>
              <SectionHeading
                index={content.projectsSection.index}
                title={content.projectsSection.title}
                description={content.projectsSection.description}
              />
            </Reveal>

            <div className="mt-14 grid gap-7 lg:gap-10">
              {content.projects.map((project, index) => (
                <Reveal key={project.title} delay={index * 0.06}>
                  <ProjectCard
                    {...project}
                    index={index}
                    labels={content.projectsSection.cardLabels}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-pad scroll-mt-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <Reveal>
              <SectionHeading
                index={content.about.index}
                title={content.about.title}
                align="wide"
              />
            </Reveal>

            <div className="mt-14 grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
              <Reveal>
                <aside
                  className={cn(
                    "border-accent",
                    currentLocale.direction === "rtl" ? "border-r pr-5" : "border-l pl-5",
                  )}
                >
                  <div
                    className="relative mb-8 aspect-[4/5] max-w-[18rem] overflow-hidden rounded-lg border border-border bg-surface-raised shadow-[0_1.25rem_4rem_rgba(0,0,0,0.16)] dark:shadow-[0_1.25rem_4rem_rgba(0,0,0,0.38)]"
                    aria-hidden="true"
                  >
                    <Image
                      src="/images/sharare-fragment.jpeg"
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 18rem, 72vw"
                      className="object-cover object-[42%_center] opacity-70 grayscale mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(3,5,10,0.26)_76%,rgba(3,5,10,0.5)_100%)]" />
                  </div>
                  <p className="profile-statement font-display text-4xl leading-tight text-balance sm:text-5xl">
                    {content.about.statement}
                  </p>
                  <div className="mt-8 grid gap-4 text-sm text-muted">
                    <div className="flex items-center gap-3">
                      <MapPin aria-hidden="true" size={16} className="text-accent" />
                      <span>{content.about.facts.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Languages aria-hidden="true" size={16} className="text-accent" />
                      <span>{content.about.facts.languages}</span>
                    </div>
                  </div>
                </aside>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="max-w-3xl space-y-6 text-lg leading-8 text-foreground/85 sm:text-xl sm:leading-9">
                  {content.about.paragraphs.map((paragraph, index) => (
                    <p key={paragraph} className={index === 0 ? undefined : "text-muted"}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
              <Reveal>
                <div className="grid gap-3">
                  {content.languageItems.map((item) => (
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
                  {content.careerGoals.map((goal) => (
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
                index={content.skills.index}
                title={content.skills.title}
                description={content.skills.description}
              />
            </Reveal>

            <div className="mt-14 grid auto-rows-fr gap-4 md:grid-cols-4">
              {content.skillGroups.map((group, index) => {
                return (
                  <Reveal key={group.title} delay={index * 0.035}>
                    <div
                      className={cn(
                        "skill-module h-full rounded-lg border border-border p-5 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-accent/45",
                        group.featured && "md:col-span-2",
                        group.tall && "md:row-span-2",
                      )}
                    >
                      <div className="mb-8 flex items-start justify-between gap-4">
                        <div>
                          <p className="mb-2 font-mono text-[11px] uppercase text-accent">
                            {group.title}
                          </p>
                          <h3
                            className={cn(
                              "skill-title font-display leading-none",
                              group.featured ? "text-5xl sm:text-6xl" : "text-3xl",
                            )}
                          >
                            {group.skills[0]}
                          </h3>
                        </div>
                        {group.featured ? (
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
                index={content.experience.index}
                title={content.experience.title}
                description={content.experience.description}
              />
            </Reveal>

            <Reveal className="mt-14">
              <article className="relative overflow-hidden rounded-lg border border-border bg-surface-raised p-5 sm:p-8 lg:p-10">
                <div className="absolute right-8 top-8 hidden font-display text-9xl leading-none text-foreground/[0.04] lg:block">
                  {content.experience.watermark}
                </div>
                <div className="relative grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
                  <div>
                    <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase text-accent">
                      <BriefcaseBusiness aria-hidden="true" size={16} />
                      {content.experience.employmentType}
                    </div>
                    <h3 className="experience-title font-display text-5xl leading-none sm:text-6xl">
                      {content.experience.role}
                    </h3>
                    <p className="mt-4 text-lg font-medium">{content.experience.company}</p>
                    <p className="mt-6 flex items-center gap-2 text-sm text-muted">
                      <CalendarDays aria-hidden="true" size={15} />
                      {content.experience.startedLabel} {content.experience.startDate}
                    </p>
                  </div>

                  <div>
                    <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                      {content.experience.description}
                    </p>
                    <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                      {content.experience.responsibilities.map((responsibility) => (
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
                      {content.experience.tech.map((item) => (
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
                  <p className="font-mono text-[11px] uppercase text-muted">
                    {content.education.label}
                  </p>
                </div>
                <h2 className="education-title font-display text-5xl leading-none sm:text-6xl">
                  {content.education.title}
                </h2>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {content.education.items.map((item) => (
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
                {content.contact.eyebrow}
              </p>
              <div className="grid gap-10 lg:grid-cols-[1.22fr_0.78fr] lg:gap-16">
                <div>
                  <h2 className="contact-statement font-display text-6xl leading-[0.9] sm:text-8xl lg:text-[9.5rem]">
                    {content.contact.title}
                  </h2>
                  <p className="mt-8 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                    {content.contact.description}
                  </p>
                  <Link
                    href="mailto:shararekeshvari77@gmail.com"
                    className={cn(buttonVariants({ variant: "primary" }), "mt-8")}
                  >
                    {content.contact.emailAction}
                    <Mail aria-hidden="true" size={16} />
                  </Link>
                </div>

                <div className="self-end border-t border-border">
                  {content.contactItems.map((item, index) => {
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
                          <p className="contact-value mt-1 break-words text-sm font-medium">
                            {item.value}
                          </p>
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
          <p>{content.footer.identity}</p>
          <p>{content.footer.stack}</p>
        </div>
      </footer>
    </div>
  );
}
