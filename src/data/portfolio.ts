export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
    tone: "blue",
  },
  {
    title: "Frontend",
    skills: ["React", "Responsive Design", "Reusable Components"],
    tone: "mint",
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Next.js", "React Query", "Zod"],
    tone: "violet",
  },
  {
    title: "Styling & UI",
    skills: ["Tailwind CSS", "Radix UI", "Shadcn UI"],
    tone: "amber",
  },
  {
    title: "Data & APIs",
    skills: ["REST APIs", "Axios", "WebSocket"],
    tone: "coral",
  },
  {
    title: "Services & Auth",
    skills: ["Clerk", "Convex"],
    tone: "blue",
  },
  {
    title: "Localization",
    skills: ["next-intl", "RTL/LTR Interfaces"],
    tone: "mint",
  },
  {
    title: "Design & Tools",
    skills: ["Figma", "Git", "GitHub", "AI-assisted Workflows"],
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
  readonly problem: string;
  readonly solution: string;
  readonly role: string;
  readonly features: readonly string[];
  readonly challenge: string;
  readonly lesson: string;
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
    problem:
      "Business users need one coherent interface for financial and operational work across companies, roles, and Persian-language workflows.",
    solution:
      "A tenant-aware frontend with permission checks, server-side session handling, and reusable modules for connected business workflows.",
    role: "Frontend development and ongoing maintenance with the Rekar development team.",
    features: [
      "Accounting, sales, purchasing, inventory, treasury, payroll, and manufacturing workflows",
      "Multi-tenant navigation with role- and permission-aware access",
      "Persian RTL reports, imports, and print views",
      "Offline-aware customer and field-visit workflows with queued synchronization",
    ],
    challenge:
      "Keeping navigation and workflows understandable across many business modules, tenants, roles, and permissions.",
    lesson:
      "Complex operational products benefit from reusable, permission-aware interface patterns and consistent navigation.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zod", "Dexie"],
    image: "/images/projects/rekar.webp",
    imageAlt: "Rekar Persian accounting platform landing page",
    liveUrl: "https://rekar.ir",
    liveLabel: "View live site",
    sourceNote: "Public repository unavailable",
  },
  {
    id: "leksuu",
    slot: "02",
    category: "Learning platform",
    title: "Leksuu",
    summary:
      "A multilingual language-learning interface for Persian, Kurdish Sorani, and English experiences.",
    problem:
      "Persian and Kurdish learners need localized, direction-aware learning flows while studying English across different devices.",
    solution:
      "A frontend that centralizes locale routing, translations, design tokens, and reusable learning components across RTL and LTR layouts.",
    role: "Frontend development as an active member of the core development team.",
    features: [
      "Persian, Kurdish Sorani, and English locale routing",
      "Interactive lessons, exercises, spaced review, and gamification",
      "Tutoring, group classes, homework, and learner progress flows",
      "Content administration and an installable PWA shell with an offline fallback",
    ],
    challenge:
      "Supporting Persian and Kurdish RTL experiences alongside English LTR flows without fragmenting the interface.",
    lesson:
      "Localization is more reliable when locale, text direction, and shared design tokens are architectural concerns.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "next-intl"],
    image: "/images/projects/leksuu.webp",
    imageAlt: "Leksuu Persian language-learning platform landing page",
    liveUrl: "https://leksuu.ir",
    liveLabel: "View live site",
    sourceNote: "Public repository unavailable",
  },
  {
    id: "dentia",
    slot: "03",
    category: "Clinic operations",
    title: "Dentia",
    summary:
      "A Persian RTL dental-clinic interface connecting public booking, patient services, and staff operations.",
    problem:
      "Clinic staff and patients need connected workflows from public appointment requests through clinical care, billing, and follow-up.",
    solution:
      "A Next.js interface combining a public clinic site and patient portal with a role-aware staff application backed by typed API clients.",
    role: "Frontend development during an eight-month project with the Rekar development team.",
    features: [
      "Public clinic content, appointment requests, and online booking",
      "Patient records, appointments, treatment workflows, and portal access",
      "Live clinic queue updates through a reconnecting WebSocket flow",
      "Billing, inventory, laboratory, reporting, and Persian date and currency handling",
    ],
    challenge:
      "Connecting booking, patient, clinical, billing, and live queue flows while preserving clear state and context.",
    lesson:
      "Real-time operational interfaces need explicit connection behavior, predictable recovery, and clear status feedback.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WebSocket"],
    image: "/images/projects/dentia.webp",
    imageAlt: "Dentia Persian dental clinic platform landing page",
    liveNote: "Public demo unavailable",
    sourceNote: "Public repository unavailable",
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
