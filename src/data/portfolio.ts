export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
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
  { language: "English", level: "Intermediate · Preparing for IELTS" },
  { language: "German", level: "A2.1" },
  { language: "French", level: "Future learning goal" },
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
  startDate: "2025/14/2",
  endDate: "End date to be added",
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
    institution: "University name to be added",
    date: "Expected graduation: 2027/1/9",
  },
  {
    degree: "Associate Degree in Software Engineering",
    status: "Previous degree",
    institution: "Institution name to be added",
    date: "Graduation date to be added",
  },
] as const;

export const projects = [
  {
    slot: "01",
    category: "Business platform",
    title: "Rekar",
    description:
      "A Persian RTL interface for a multi-tenant accounting and business management platform. It includes workflows for accounting, sales, inventory, treasury, payroll, and related operations.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Multi-tenant application structure",
      "RTL interface and role-based access flows",
    ],
    image: "/images/projects/rekar.png",
    imageAlt: "Rekar Persian accounting platform landing page",
  },
  {
    slot: "02",
    category: "Learning platform",
    title: "Leksuu",
    description:
      "A multilingual language-learning interface with localized RTL and LTR experiences, interactive lessons, practice flows, tutoring, gamification, and content administration.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "next-intl"],
    highlights: [
      "Persian, Kurdish, and English locales",
      "Interactive learning and admin workflows",
    ],
    image: "/images/projects/leksuu.png",
    imageAlt: "Leksuu Persian language-learning platform landing page",
  },
  {
    slot: "03",
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
  { label: "LinkedIn", value: "Profile link to be added", href: "" },
  { label: "GitHub", value: "Profile link to be added", href: "" },
] as const;
