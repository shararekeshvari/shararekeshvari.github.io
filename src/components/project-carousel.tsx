"use client";

import { ArrowUpRight, MoveHorizontal } from "lucide-react";
import { useRef, useState } from "react";

import CircularCarousel from "@/components/reactbits/circular-carousel";
import type { editorialCopy } from "@/data/editorial-copy";
import type { ProjectCardLabels, ProjectItem } from "@/data/portfolio";

type CarouselHeadings = (typeof editorialCopy)[keyof typeof editorialCopy]["headings"];

export function ProjectCarousel({ projects, labels, headings }: { projects: readonly ProjectItem[]; labels: ProjectCardLabels; headings: CarouselHeadings }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [focusRequest, setFocusRequest] = useState<{ index: number } | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const active = projects[activeIndex] ?? projects[0];
  const items = projects.map(project => ({ src: project.image, alt: project.imageAlt, title: project.title, subtitle: project.category }));

  const selectProject = (index: number) => {
    setFocusRequest({ index });
    const stage = stageRef.current;
    if (!stage) return;
    const bounds = stage.getBoundingClientRect();
    if (bounds.top < 0 || bounds.bottom > window.innerHeight) {
      stage.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="projects-showcase">
      <div className="carousel-stage" ref={stageRef}>
        <div className="carousel-stage-top"><span><MoveHorizontal size={17} aria-hidden="true" /> {headings.carouselHint}</span></div>
        <CircularCarousel items={items} preset="cylinder" intro="rise" cardWidth={420} aspectRatio={1.55} gap={38} tilt={-10} autoplay="off" draggable snap focusOnClick pauseOnHover parallax={0.08} stretch={0.12} depthFade={0.35} fadeColor="var(--carousel-fade)" cornerRadius={0} focusRequest={focusRequest} onChange={setActiveIndex} className="project-ring" />
        <span className="stage-corner stage-corner-left" aria-hidden="true">✳</span><span className="stage-corner stage-corner-right" aria-hidden="true">✳</span>
      </div>
      <div className="active-project" aria-live="polite">
        <div className="active-project-title"><span className="eyebrow">{labels.project}</span><h3>{active.title}</h3><span className="project-category">{active.category}</span></div>
        <div className="active-project-details">{active.previewNote && <span className="project-preview-note">{active.previewNote}</span>}<p>{active.description}</p>{active.highlights.length > 0 && <div className="project-highlights">{active.highlights.map(item => <span key={item}>{item}</span>)}</div>}{active.tech.length > 0 && <div className="project-tech">{active.tech.map(item => <span key={item}>{item}</span>)}</div>}</div>
        <div className="project-action">{active.liveUrl ? <a href={active.liveUrl} target="_blank" rel="noreferrer">{labels.visitLiveSite}<ArrowUpRight size={19} aria-hidden="true" /></a> : <span>{active.siteUrl}</span>}</div>
      </div>
      <div className="project-index" aria-label={headings.allProjects}>{projects.map((project, index) => <button key={project.title} type="button" className={index === activeIndex ? "is-active" : undefined} aria-pressed={index === activeIndex} onClick={() => selectProject(index)}><strong>{project.title}</strong><small>{project.category}</small></button>)}</div>
    </div>
  );
}
