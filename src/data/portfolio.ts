export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const skillGroups = [
  {
    title: "Core",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
    tone: "blue",
  },
  {
    title: "React",
    skills: ["React", "Next.js", "React Query", "Reusable Components"],
    tone: "mint",
  },
  {
    title: "Interface",
    skills: ["Tailwind CSS", "Responsive Design", "Radix UI", "Shadcn UI", "RTL/LTR Interfaces"],
    tone: "amber",
  },
  {
    title: "Data & Services",
    skills: ["REST APIs", "Axios", "WebSocket", "Zod", "Clerk", "Convex"],
    tone: "coral",
  },
  {
    title: "Workflow",
    skills: ["Git", "GitHub", "Figma", "next-intl"],
    tone: "violet",
  },
] as const;

export const languageItems = [
  { language: "Persian", level: "Native" },
  { language: "English", level: "Intermediate · Preparing for IELTS" },
  { language: "German", level: "A2.1" },
] as const;

export const experiences = [
  {
    role: "Frontend Developer",
    company: "Rekar",
    employmentType: "Internship → Development team",
    period: "Approx. 2022 — Present",
    startDate: "2022",
    description:
      "Joined Rekar as a Frontend Development Intern and moved into the software development team after approximately four months.",
    responsibilities: [
      "Develop and maintain frontend features for Rekar’s accounting application",
      "Support an accounting product that began as a desktop, offline application",
      "Collaborate with the development team on product development, maintenance, and support",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Leksuu",
    employmentType: "Part-time",
    period: "Approx. 2026 — Present",
    startDate: "2026",
    description:
      "Contribute to Leksuu as an active member of its core development team.",
    responsibilities: [
      "Develop and refine the product’s frontend",
      "Support the product’s continued improvement and expansion",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Dental Clinic Management System",
    employmentType: "Project-based",
    period: "Approx. 2025 — 2026 · 8 months",
    startDate: "2025",
    description:
      "Contributed to the frontend of a dental clinic management system for approximately eight months.",
    responsibilities: [
      "Delivered frontend tasks throughout the eight-month engagement",
      "Collaborated with the Rekar development team across the project",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Narkhin",
    employmentType: "Part-time",
    period: "Approx. 2024 — 2025 · 1 year",
    startDate: "2024",
    description:
      "Contributed to Narkhin as a part-time Frontend Developer for approximately one year.",
    responsibilities: [
      "Developed and maintained frontend parts of the product",
      "Collaborated with members of the Rekar development team during the engagement",
    ],
  },
] as const;

export interface PortfolioProject {
  readonly id: string;
  readonly slot: string;
  readonly category: string;
  readonly title: string;
  readonly summary: string;
  readonly context: string;
  readonly contribution: string;
  readonly features: readonly string[];
  readonly tech: readonly string[];
  readonly image: string;
  readonly imageAlt: string;
  readonly liveUrl?: string;
  readonly liveLabel?: string;
  readonly liveNote?: string;
  readonly sourceUrl?: string;
  readonly sourceNote: string;
}

export const projects = [
  {
    id: "rekar",
    slot: "01",
    category: "Business platform",
    title: "Rekar",
    summary:
      "A Persian RTL interface for a multi-tenant accounting and business operations platform.",
    context:
      "Rekar brings accounting and day-to-day business operations into one Persian, multi-tenant product. Its frontend spans many modules, roles, and permission levels.",
    contribution:
      "I contribute to frontend development and ongoing maintenance as part of the Rekar development team.",
    features: [
      "Accounting, sales, purchasing, inventory, treasury, payroll, and manufacturing workflows",
      "Multi-tenant navigation with role- and permission-aware access",
      "Persian RTL reports, imports, and print views",
      "Offline-aware customer and field-visit workflows with queued synchronization",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zod", "Dexie"],
    image: "/images/projects/rekar.webp",
    imageAlt: "Rekar Persian accounting platform landing page",
    liveUrl: "https://rekar.ir",
    liveLabel: "View live site",
    sourceNote: "Source code isn’t public",
  },
  {
    id: "leksuu",
    slot: "02",
    category: "Learning platform",
    title: "Leksuu",
    summary:
      "A multilingual language-learning interface for Persian, Kurdish Sorani, and English experiences.",
    context:
      "Leksuu supports Persian and Kurdish learners studying English. The interface has to work naturally across Persian, Kurdish Sorani, and English in both RTL and LTR layouts.",
    contribution:
      "I work on the frontend as an active member of the core development team.",
    features: [
      "Persian, Kurdish Sorani, and English locale routing",
      "Interactive lessons, exercises, spaced review, and gamification",
      "Tutoring, group classes, homework, and learner progress flows",
      "Content administration and an installable PWA shell with an offline fallback",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "next-intl"],
    image: "/images/projects/leksuu.webp",
    imageAlt: "Leksuu Persian language-learning platform landing page",
    liveUrl: "https://leksuu.ir",
    liveLabel: "View live site",
    sourceNote: "Source code isn’t public",
  },
  {
    id: "dentia",
    slot: "03",
    category: "Clinic operations",
    title: "Dentia",
    summary:
      "A Persian RTL dental-clinic interface connecting public booking, patient services, and staff operations.",
    context:
      "Dentia connects a public clinic website and patient portal with the daily workflows used by clinic staff, from booking through treatment and billing.",
    contribution:
      "I contributed to frontend development during an eight-month project with the Rekar development team.",
    features: [
      "Public clinic content, appointment requests, and online booking",
      "Patient records, appointments, treatment workflows, and portal access",
      "Live clinic queue updates through a reconnecting WebSocket flow",
      "Billing, inventory, laboratory, reporting, and Persian date and currency handling",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WebSocket"],
    image: "/images/projects/dentia.webp",
    imageAlt: "Dentia Persian dental clinic platform landing page",
    liveNote: "No public demo",
    sourceNote: "Source code isn’t public",
  },
] as const satisfies readonly PortfolioProject[];

export const contactItems = [
  {
    label: "Email",
    value: "shararekeshvari77@gmail.com",
    href: "mailto:shararekeshvari77@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/shararekeshvari",
    href: "https://github.com/shararekeshvari",
  },
] as const;
