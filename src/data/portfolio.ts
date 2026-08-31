import { GITHUB_URL, PERSON_EMAIL } from "@/lib/site";

export const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const skillGroups = [
  {
    title: "Languages & foundations",
    capability: "The browser fundamentals I rely on before reaching for a library.",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
    tone: "blue",
  },
  {
    title: "React applications",
    capability: "Reusable components and practical state handling for maintainable product UI.",
    skills: ["React", "Next.js", "React Query", "Reusable Components"],
    tone: "mint",
  },
  {
    title: "Interface engineering",
    capability: "Responsive UI and component primitives that work across RTL and LTR layouts.",
    skills: ["Tailwind CSS", "Responsive Design", "Radix UI", "Shadcn UI", "RTL/LTR Interfaces"],
    tone: "amber",
  },
  {
    title: "Data & integration",
    capability: "Connecting screens to APIs, live updates, validation, and offline-aware data.",
    skills: ["REST APIs", "Axios", "WebSocket", "Zod", "Dexie"],
    tone: "coral",
  },
  {
    title: "Services & localization",
    capability: "Authentication, backend services, and locale-aware routing in product interfaces.",
    skills: ["Clerk", "Convex", "next-intl"],
    tone: "violet",
  },
  {
    title: "Design & collaboration",
    capability: "The tools I use to move from design context to reviewed, maintainable code.",
    skills: ["Figma", "Git", "GitHub"],
    tone: "blue",
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
    period: "2022 — Present",
    startDate: "2022",
    description:
      "I joined Rekar as a Frontend Development Intern and moved into its software development team after about four months.",
    responsibilities: [
      "Built and maintained frontend features for Rekar’s accounting application.",
      "Supported an accounting product that began as a desktop, offline application.",
      "Collaborated with the development team across product development, maintenance, and support.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Leksuu",
    employmentType: "Part-time",
    period: "2026 — Present",
    startDate: "2026",
    description: "I contribute to Leksuu as an active member of its core development team.",
    responsibilities: [
      "Built and refined the product’s frontend.",
      "Maintained existing interface work while supporting the product’s continued expansion.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Dental Clinic Management System",
    employmentType: "Project-based",
    period: "2025 — 2026 · 8 months",
    startDate: "2025",
    description:
      "I worked on the frontend of a dental clinic management system during an eight-month engagement.",
    responsibilities: [
      "Implemented assigned frontend work throughout the engagement.",
      "Collaborated with the Rekar development team across the project.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Narkhin",
    employmentType: "Part-time",
    period: "2024 — 2025 · 1 year",
    startDate: "2024",
    description: "I worked on Narkhin’s frontend in a part-time role for one year.",
    responsibilities: [
      "Maintained frontend areas of the product throughout the engagement.",
      "Worked with members of the Rekar development team during the engagement.",
    ],
  },
] as const;

export interface PortfolioProject {
  readonly id: string;
  readonly slot: string;
  readonly category: string;
  readonly title: string;
  readonly summary: string;
  readonly overview: string;
  readonly problem: string;
  readonly solution: string;
  readonly responsibilities: readonly string[];
  readonly features: readonly string[];
  readonly architecture: readonly string[];
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
    overview:
      "Rekar brings accounting and day-to-day business operations into one Persian, multi-tenant product. Its frontend spans many modules, roles, and permission levels.",
    problem:
      "Business users need one coherent interface for financial and operational work across companies, roles, and Persian-language workflows.",
    solution:
      "A tenant-aware frontend with permission checks, server-side session handling, and reusable modules for connected business workflows.",
    responsibilities: [
      "Frontend development for the accounting application",
      "Ongoing maintenance and product support",
      "Collaboration with the Rekar development team",
    ],
    features: [
      "Accounting, sales, purchasing, inventory, treasury, payroll, and manufacturing workflows",
      "Multi-tenant navigation with role- and permission-aware access",
      "Persian RTL reports, imports, and print views",
      "Offline-aware customer and field-visit workflows with queued synchronization",
    ],
    architecture: [
      "Tenant- and permission-aware frontend structure",
      "Reusable modules across connected business workflows",
      "Persian RTL reporting and print interfaces",
      "Queued offline synchronization with Dexie",
    ],
    challenge:
      "Keeping navigation and workflows understandable across many business modules, tenants, roles, and permissions.",
    lesson:
      "Complex operational products benefit from reusable, permission-aware interface patterns and consistent navigation.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zod", "Dexie"],
    image: "/images/projects/rekar.png",
    imageAlt: "Rekar Persian accounting platform landing page",
    liveUrl: "https://rekar.ir",
    liveLabel: "Visit Rekar",
    sourceNote: "Source code is not public",
  },
  {
    id: "leksuu",
    slot: "02",
    category: "Learning platform",
    title: "Leksuu",
    summary:
      "A multilingual language-learning interface for Persian, Kurdish Sorani, and English experiences.",
    overview:
      "Leksuu supports Persian and Kurdish learners studying English. The interface has to work naturally across Persian, Kurdish Sorani, and English in both RTL and LTR layouts.",
    problem:
      "Persian and Kurdish learners need localized, direction-aware learning flows while studying English across different devices.",
    solution:
      "A frontend that centralizes locale routing, translations, design tokens, and reusable learning components across RTL and LTR layouts.",
    responsibilities: [
      "Frontend development as part of the core team",
      "Refinement of existing product experiences",
      "Support for continued product improvement and expansion",
    ],
    features: [
      "Persian, Kurdish Sorani, and English locale routing",
      "Interactive lessons, exercises, spaced review, and gamification",
      "Tutoring, group classes, homework, and learner progress flows",
      "Content administration and an installable PWA shell with an offline fallback",
    ],
    architecture: [
      "Locale-based routing for three languages",
      "Shared interface patterns across RTL and LTR layouts",
      "Translation handling with next-intl",
      "Installable PWA shell with an offline fallback",
    ],
    challenge:
      "Supporting Persian and Kurdish RTL experiences alongside English LTR flows without fragmenting the interface.",
    lesson:
      "Localization is more reliable when locale, text direction, and shared design tokens are architectural concerns.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "next-intl"],
    image: "/images/projects/leksuu.png",
    imageAlt: "Leksuu English language-learning platform landing page",
    liveUrl: "https://leksuu.ir/en",
    liveLabel: "Visit Leksuu",
    sourceNote: "Source code is not public",
  },
  {
    id: "nerkhin",
    slot: "03",
    category: "Market platform",
    title: "Nerkhin",
    summary:
      "A Persian RTL marketplace and price-discovery platform for the home-appliance trade.",
    overview:
      "Nerkhin connects wholesalers and retailers with product search, comparison, offers, account flows, and admin operations in a Persian RTL interface.",
    problem:
      "Appliance-market users need a clearer way to discover prices, compare products, and manage trade workflows without jumping between fragmented tools.",
    solution:
      "A marketplace frontend that brings product discovery, comparison, account flows, chat, notifications, and admin tools into one RTL product experience.",
    responsibilities: [
      "Part-time frontend development",
      "Maintenance of existing product interface areas",
      "Collaboration with members of the Rekar development team",
    ],
    features: [
      "Wholesale and retail marketplace flows",
      "Product search, filtering, comparison, and offer discovery",
      "Account, chat, notification, and administrative workflows",
      "Persian RTL layouts for mobile and desktop users",
    ],
    architecture: [
      "Next.js frontend structure",
      "Reusable marketplace UI patterns",
      "Persian RTL layout system",
      "Authentication-aware account flows",
    ],
    challenge:
      "Keeping search, comparison, communication, and admin tasks understandable inside one marketplace surface.",
    lesson:
      "Marketplace interfaces need tight information hierarchy so users can compare, decide, and act without losing context.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "NextAuth"],
    image: "/images/projects/nerkhin.svg",
    imageAlt: "Nerkhin mobile marketplace interface preview",
    liveNote: "No public demo",
    sourceNote: "Source code is not public",
  },
  {
    id: "dentia",
    slot: "04",
    category: "Clinic operations",
    title: "Dentia",
    summary:
      "A Persian RTL dental-clinic interface connecting public booking, patient services, and staff operations.",
    overview:
      "Dentia connects a public clinic website and patient portal with the daily workflows used by clinic staff, from booking through treatment and billing.",
    problem:
      "Clinic staff and patients need connected workflows from public appointment requests through clinical care, billing, and follow-up.",
    solution:
      "A Next.js interface combining a public clinic site and patient portal with a role-aware staff application backed by typed API clients.",
    responsibilities: [
      "Frontend delivery throughout the eight-month engagement",
      "Collaboration with the Rekar development team",
    ],
    features: [
      "Public clinic content, appointment requests, and online booking",
      "Patient records, appointments, treatment workflows, and portal access",
      "Live clinic queue updates through a reconnecting WebSocket flow",
      "Billing, inventory, laboratory, reporting, and Persian date and currency handling",
    ],
    architecture: [
      "Typed API client layer",
      "Role-aware staff workflows",
      "Reconnecting WebSocket updates for the clinic queue",
      "Persian date and currency handling",
    ],
    challenge:
      "Connecting booking, patient, clinical, billing, and live queue flows while preserving clear state and context.",
    lesson:
      "Real-time operational interfaces need explicit connection behavior, predictable recovery, and clear status feedback.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WebSocket"],
    image: "/images/projects/dentia.webp",
    imageAlt: "Dentia Persian dental clinic platform landing page",
    liveNote: "No public demo",
    sourceNote: "Source code is not public",
  },
] as const satisfies readonly PortfolioProject[];

export const contactItems = [
  {
    label: "Email",
    value: PERSON_EMAIL,
    href: `mailto:${PERSON_EMAIL}`,
  },
  {
    label: "GitHub",
    value: "github.com/shararekeshvari",
    href: GITHUB_URL,
  },
] as const;
