export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const skillGroups = [
  {
    title: "Core Frontend",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
    tone: "blue",
  },
  {
    title: "React Ecosystem",
    skills: ["React", "Next.js", "React Query"],
    tone: "mint",
  },
  {
    title: "UI Engineering",
    skills: ["Tailwind CSS", "Responsive Design", "Radix UI", "Shadcn UI"],
    tone: "amber",
  },
  {
    title: "Data & APIs",
    skills: ["REST APIs", "Axios", "WebSocket"],
    tone: "coral",
  },
  {
    title: "Localization & Services",
    skills: ["next-intl", "RTL/LTR interfaces", "Clerk", "Convex"],
    tone: "violet",
  },
  {
    title: "Tools & Design",
    skills: ["Git", "GitHub", "Figma", "AI-assisted workflows"],
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
    period: "Approx. 2022 — Present",
    startDate: "2022",
    description:
      "Joined Rekar as a Frontend Development Intern and transitioned into the software development team after approximately four months.",
    responsibilities: [
      "Contribute to the frontend development and ongoing maintenance of Rekar, the company's accounting application",
      "Support an accounting product originally developed as a desktop and offline application",
      "Collaborate with the development team on software maintenance, development, and product support",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Leksuu",
    employmentType: "Part-time",
    period: "Approx. 2026 — Present",
    startDate: "2026",
    description:
      "Currently contributing to Leksuu as an active member of the core development team.",
    responsibilities: [
      "Contribute to the product's ongoing frontend development",
      "Support the continued improvement and expansion of the product",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Dental Clinic Management System",
    employmentType: "Project-based",
    period: "Approx. 2025 — 2026 · 8 months",
    startDate: "2025",
    description:
      "Participated in the frontend development of a dental clinic management system for approximately eight months.",
    responsibilities: [
      "Worked with the Rekar development team throughout the project",
      "Contributed to frontend tasks for the duration of the engagement",
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
      "Contributed to the frontend development of the product",
      "Collaborated with members of the Rekar development team throughout the engagement",
    ],
  },
] as const;

export const projects = [
  {
    slot: "01",
    category: "Business platform",
    title: "Rekar",
    summary:
      "A Persian RTL frontend for a multi-tenant accounting and business operations platform.",
    problem:
      "Business users need one coherent interface for financial and operational work across companies, roles, and Persian-language workflows.",
    solution:
      "The frontend uses tenant-aware navigation, permission checks, server-side session handling, and reusable modules for connected business workflows.",
    features: [
      "Accounting, sales, purchasing, inventory, treasury, payroll, and manufacturing workflows",
      "Multi-tenant navigation with role- and permission-aware access",
      "Persian RTL interfaces, reports, imports, and print views",
      "Offline-aware customer and field-visit workflows with queued synchronization",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zod", "Dexie"],
    image: "/images/projects/rekar.webp",
    imageAlt: "Rekar Persian accounting platform landing page",
    liveUrl: "https://rekar.ir",
    liveLabel: "Visit rekar.ir",
  },
  {
    slot: "02",
    category: "Learning platform",
    title: "Leksuu",
    summary:
      "A multilingual language-learning interface designed for Persian, Kurdish Sorani, and English experiences.",
    problem:
      "Persian and Kurdish learners need localized, direction-aware learning flows while studying English across different devices.",
    solution:
      "The frontend centralizes locale routing, translations, design tokens, and reusable learning components across RTL and LTR layouts.",
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
    liveLabel: "Visit leksuu.ir",
  },
  {
    slot: "03",
    category: "Clinic operations",
    title: "Dentia",
    summary:
      "A Persian RTL dental-clinic interface connecting public booking, patient services, and staff operations.",
    problem:
      "Clinic staff and patients need connected workflows from public appointment requests through clinical care, billing, and follow-up.",
    solution:
      "The Next.js interface combines a public clinic site and patient portal with a role-aware staff application backed by typed API clients.",
    features: [
      "Public clinic content, appointment requests, and online booking",
      "Patient records, appointments, treatment workflows, and portal access",
      "Live clinic queue updates through a reconnecting WebSocket flow",
      "Billing, inventory, laboratory, reporting, and Persian date and currency handling",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WebSocket"],
    image: "/images/projects/dentia.webp",
    imageAlt: "Dentia Persian dental clinic platform landing page",
  },
] as const;

export type PortfolioProject = (typeof projects)[number];

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
