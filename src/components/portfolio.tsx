import { ArrowDown, ArrowUpRight, BriefcaseBusiness, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Navbar } from "@/components/navbar";
import { ProjectCarousel } from "@/components/project-carousel";
import { Reveal } from "@/components/reveal";
import { editorialCopy, interfaceLabels } from "@/data/editorial-copy";
import { defaultLocale, getPortfolioContent, localeConfig, localeOptions, type Locale } from "@/data/portfolio";

export function Portfolio({ locale = defaultLocale }: { locale?: Locale }) {
  const content = getPortfolioContent(locale);
  const currentLocale = localeConfig[locale];
  const headings = editorialCopy[locale].headings;
  const displayDirection = currentLocale.direction;

  return (
    <div className="portfolio-page" lang={currentLocale.htmlLang} dir={currentLocale.direction}>
      <a className="skip-link" href="#main-content">{content.ui.skipToContent}</a>
      <Navbar currentLocale={locale} labels={content.navbar} localeOptions={localeOptions} navigation={content.navigation} />
      <main id="main-content">
        <section id="top" className="hero-section page-shell" aria-labelledby="hero-heading">
          <div className="hero-topline"><span>{content.hero.eyebrow}</span><span className="hero-topline-right">© 2026 / {content.hero.meta[0]}</span></div>
          <div className="hero-wordmark">
            <p className="hero-kicker">{content.navbar.brandName} <span className="star-glyph" aria-hidden="true">✳</span> {interfaceLabels[locale].portfolio}</p>
            <h1 id="hero-heading" className="hero-title" dir={displayDirection}><span>{headings.hero[0]}</span><span className="outline-text">{headings.hero[1]}</span></h1>
            <div className="hero-title-footer"><span className="hero-cross" aria-hidden="true">✳</span><span>{content.hero.meta[2]}</span></div>
          </div>
          <div className="hero-intro">
            <div className="hero-portrait-wrap"><div className="hero-portrait"><Image src="/images/sharare-portrait.png" alt={content.navbar.brandName} fill priority sizes="(max-width: 700px) 45vw, 230px" className="object-cover" /></div></div>
            <div className="hero-intro-copy"><span className="eyebrow">{content.about.index}</span><h2>{content.hero.nameLines.join(" ")}</h2><p>{content.hero.summary}</p><div className="hero-links"><Link href="#projects" className="text-link">{content.hero.primaryAction}<ArrowDown size={17} aria-hidden="true" /></Link><Link href="#contact" className="text-link">{content.hero.secondaryAction}<ArrowUpRight size={17} aria-hidden="true" /></Link></div></div>
            <div className="hero-side-note">{content.hero.meta[1]}</div>
          </div>
        </section>

        <div className="work-marquee" aria-hidden="true"><div>{Array.from({ length: 8 }, (_, i) => <span key={i}>{headings.projects.join(" ")} <b>✳</b></span>)}</div></div>

        <section id="projects" className="section-block page-shell" aria-labelledby="projects-heading">
          <Reveal><div className="section-head"><span className="eyebrow">{content.projectsSection.index}</span><h2 id="projects-heading" className="display-heading" dir={displayDirection}>{headings.projects[0]} <span className="outline-text">{headings.projects[1]}</span></h2><p>{content.projectsSection.description}</p></div></Reveal>
          <ProjectCarousel projects={content.projects} labels={content.projectsSection.cardLabels} headings={headings} />
        </section>

        <section id="about" className="section-block about-section" aria-labelledby="about-heading"><div className="page-shell">
          <Reveal><div className="section-head split-head"><span className="eyebrow">{content.about.index}</span><h2 id="about-heading" className="display-heading" dir={displayDirection}>{headings.about[0]} <span className="outline-text">{headings.about[1]}</span></h2><p>{content.about.statement}</p></div></Reveal>
          <div className="about-grid"><Reveal className="about-lead"><span className="asterisk-mark" aria-hidden="true">✳</span><p>{content.about.paragraphs[0]}</p></Reveal><Reveal className="about-details">{content.about.paragraphs.slice(1).map(paragraph => <p key={paragraph}>{paragraph}</p>)}<div className="facts-list"><div><span>{headings.location}</span><strong>{content.about.facts.location}</strong></div><div><span>{headings.languages}</span><strong>{content.about.facts.languages}</strong></div></div></Reveal></div>
        </div></section>

        <section id="skills" className="section-block page-shell" aria-labelledby="skills-heading">
          <Reveal><div className="section-head split-head"><span className="eyebrow">{content.skills.index}</span><h2 id="skills-heading" className="display-heading" dir={displayDirection}>{headings.skills[0]} <span className="outline-text">{headings.skills[1]}</span></h2><p>{content.skills.description}</p></div></Reveal>
          <div className="skills-list">{content.skillGroups.map(group => <Reveal key={group.title}><div className="skill-row"><h3>{group.title}</h3><div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div><span className="row-plus" aria-hidden="true">+</span></div></Reveal>)}</div>
        </section>

        <section id="experience" className="section-block career-section" aria-labelledby="experience-heading"><div className="page-shell">
          <Reveal><div className="section-head split-head"><span className="eyebrow">{content.experience.index}</span><h2 id="experience-heading" className="display-heading" dir={displayDirection}>{headings.experience[0]} <span className="outline-text">{headings.experience[1]}</span></h2><p>{content.experience.description}</p></div></Reveal>
          <div className="career-grid"><Reveal><article className="career-card"><div className="career-card-top"><BriefcaseBusiness size={21} aria-hidden="true" /><span>{content.experience.employmentType} / {content.experience.startDate}</span></div><h3>{content.experience.role}</h3><p className="career-org">{content.experience.company}</p><ul>{content.experience.responsibilities.map(item => <li key={item}>{item}</li>)}</ul><div className="career-tech">{content.experience.tech.map(item => <span key={item}>{item}</span>)}</div></article></Reveal><Reveal><article className="career-card education-card"><div className="career-card-top"><GraduationCap size={22} aria-hidden="true" /><span>{content.education.label}</span></div><h3>{content.education.title}</h3><div className="education-items">{content.education.items.map(item => <div key={item.degree}><span>{item.status}</span><h4>{item.degree}</h4>{item.date && <p>{item.date}</p>}</div>)}</div><div className="language-summary">{content.languageItems.map(item => <span key={item.language}>{item.language} <small>{item.level}</small></span>)}</div></article></Reveal></div>
        </div></section>

        <section id="contact" className="section-block contact-section page-shell" aria-labelledby="contact-heading">
          <Reveal><div className="contact-topline"><span className="eyebrow">{content.contact.eyebrow}</span><span className="star-glyph" aria-hidden="true">✳</span></div><h2 id="contact-heading" className="contact-heading" dir={displayDirection}>{headings.contact[0]} <span className="outline-text">{headings.contact[1]}</span></h2><div className="contact-bottom"><p>{content.contact.description}</p><a className="contact-cta" href="mailto:shararekeshvari77@gmail.com">{content.contact.emailAction}<ArrowUpRight size={24} aria-hidden="true" /></a></div></Reveal>
          <div className="contact-links">{content.contactItems.map(item => <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined}><span>{item.label}</span><strong>{item.value}</strong><ArrowUpRight size={16} aria-hidden="true" /></a>)}</div>
        </section>
      </main>
      <footer className="site-footer"><div className="page-shell"><span>{content.footer.identity}</span><span>{content.footer.stack}</span><a href="#top">{headings.backToTop}</a></div></footer>
    </div>
  );
}
