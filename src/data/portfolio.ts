export const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export const skillGroups = [
  {
    title: "Frontend Fundamentals",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
    tone: "blue",
  },
  {
    title: "Frameworks",
    skills: ["React", "Next.js"],
    tone: "mint",
  },
  {
    title: "Styling",
    skills: ["Tailwind CSS", "Responsive Design"],
    tone: "amber",
  },
  {
    title: "Data & APIs",
    skills: ["React Query", "Axios", "REST APIs"],
    tone: "coral",
  },
  {
    title: "Backend & Auth Basics",
    skills: ["Clerk", "Convex"],
    tone: "violet",
  },
  {
    title: "Tools",
    skills: ["Git"],
    tone: "blue",
  },
  {
    title: "UI & Design",
    skills: ["Figma", "Shadcn UI", "Radix UI", "UI/UX principles"],
    tone: "mint",
  },
  {
    title: "AI Workflows",
    skills: ["AI design tools", "Image generation tools", "AI-assisted workflows"],
    tone: "amber",
  },
] as const;

export const languageItems = [
  { language: "Persian", level: "Native" },
  { language: "English", level: "Intermediate - Preparing for IELTS" },
  { language: "German", level: "A2.1" },
] as const;

export const careerGoals = [
  "Strengthen my frontend engineering skills",
  "Contribute to international remote teams",
  "Build reliable, high-quality web applications",
  "Gain experience in global technology environments",
  "Continue learning modern web and AI-assisted workflows",
] as const;

export const experience = {
  role: "Junior Frontend Developer",
  company: "pt-ecommerce",
  employmentType: "Remote",
  startDate: "2025",
  description:
    "Contributed to frontend development work for pt-ecommerce using React-based technologies, with a focus on responsive interfaces, reusable components, and TypeScript.",
  responsibilities: [
    "Building responsive interfaces",
    "Developing reusable React components",
    "Using TypeScript in frontend implementation",
    "Implementing UI designs",
    "Collaborating with a remote development team",
  ],
  tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
} as const;

export const educationItems = [
  {
    degree: "Bachelor of Information Technology Engineering",
    status: "In progress",
    date: "Expected graduation: 2027",
  },
  {
    degree: "Associate Degree in Software Engineering",
    status: "Previous degree",
  },
] as const;

export const projects = [
  {
    slot: "1",
    category: "Business platform",
    title: "Rekar",
    description:
      "A Persian RTL interface for cloud accounting and business management, with workflows for accounting, sales, inventory, treasury, payroll, reports, and team access.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Multi-tenant application structure",
      "RTL interface with multi-company and role-based access flows",
    ],
    image: "/images/projects/rekar.png",
    imageAlt: "Rekar Persian accounting platform landing page",
    liveUrl: "https://rekar.ir/",
  },
  {
    slot: "2",
    category: "Learning platform",
    title: "Leksuu",
    description:
      "A language-learning interface for Persian and Kurdish speakers, built around short stories, speaking practice, adaptive lessons, pronunciation feedback, and guided review.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "next-intl"],
    highlights: [
      "Persian, Kurdish, and English language experience",
      "Interactive learning, pronunciation, and review workflows",
    ],
    image: "/images/projects/leksuu.png",
    imageAlt: "Leksuu English language-learning platform landing page",
    liveUrl: "https://leksuu.ir/en",
  },
  {
    slot: "3",
    category: "Market platform",
    title: "Nerkhin",
    description:
      "A Persian RTL marketplace and price-discovery platform for the home-appliance trade, connecting wholesalers and retailers with product search, comparison, offers, account flows, and admin operations.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "NextAuth"],
    highlights: [
      "Wholesale and retail marketplace flows",
      "Search, product comparison, chat, notifications, and admin tooling",
    ],
    image: "/images/projects/nerkhin.svg",
    imageAlt: "Nerkhin mobile marketplace interface preview",
  },
  {
    slot: "4",
    category: "Clinic operations",
    title: "Dentia",
    description:
      "A Persian RTL dental clinic interface combining public appointment booking with staff workflows for patients, billing, inventory, and a live clinic queue.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WebSocket"],
    highlights: [
      "Public clinic site and online booking",
      "Role-aware dashboard and live queue updates",
    ],
    image: "/images/projects/dentia.png",
    imageAlt: "Dentia Persian dental clinic platform landing page",
  },
] as const;

export const contactItems = [
  {
    label: "Email",
    value: "shararekeshvari77@gmail.com",
    href: "mailto:shararekeshvari77@gmail.com",
  },
  {
    label: "Website",
    value: "shararekeshvari.ir",
    href: "https://shararekeshvari.ir",
  },
  {
    label: "GitHub",
    value: "github.com/shararekeshvari",
    href: "https://github.com/shararekeshvari",
  },
] as const;
