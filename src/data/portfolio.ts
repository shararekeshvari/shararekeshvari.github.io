export const locales = ["en", "de", "fr", "tr", "fa", "ku", "ar"] as const;

export type Locale = (typeof locales)[number];
export type TextDirection = "ltr" | "rtl";

export const defaultLocale: Locale = "en";

export type LocaleOption = {
  locale: Locale;
  label: string;
  nativeLabel: string;
  shortLabel: string;
  htmlLang: string;
  direction: TextDirection;
  href: string;
};

export const localeConfig = {
  en: {
    locale: "en",
    label: "English",
    nativeLabel: "English",
    shortLabel: "EN",
    htmlLang: "en",
    direction: "ltr",
    href: "/",
  },
  de: {
    locale: "de",
    label: "German",
    nativeLabel: "Deutsch",
    shortLabel: "DE",
    htmlLang: "de",
    direction: "ltr",
    href: "/de/",
  },
  fr: {
    locale: "fr",
    label: "French",
    nativeLabel: "Français",
    shortLabel: "FR",
    htmlLang: "fr",
    direction: "ltr",
    href: "/fr/",
  },
  tr: {
    locale: "tr",
    label: "Turkish",
    nativeLabel: "Türkçe",
    shortLabel: "TR",
    htmlLang: "tr",
    direction: "ltr",
    href: "/tr/",
  },
  fa: {
    locale: "fa",
    label: "Persian",
    nativeLabel: "فارسی",
    shortLabel: "FA",
    htmlLang: "fa",
    direction: "rtl",
    href: "/fa/",
  },
  ku: {
    locale: "ku",
    label: "Kurdish",
    nativeLabel: "کوردی",
    shortLabel: "KU",
    htmlLang: "ku",
    direction: "rtl",
    href: "/ku/",
  },
  ar: {
    locale: "ar",
    label: "Arabic",
    nativeLabel: "العربية",
    shortLabel: "AR",
    htmlLang: "ar",
    direction: "rtl",
    href: "/ar/",
  },
} as const satisfies Record<Locale, LocaleOption>;

export const localeOptions = locales.map((locale) => localeConfig[locale]);

export const languageAlternates = {
  "x-default": "/",
  en: "/",
  de: "/de/",
  fr: "/fr/",
  tr: "/tr/",
  fa: "/fa/",
  ku: "/ku/",
  ar: "/ar/",
} as const;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getLocalePath(locale: Locale) {
  return localeConfig[locale].href;
}

export type SectionHref = "#projects" | "#about" | "#skills" | "#experience" | "#contact";

export type NavigationItem = {
  label: string;
  href: SectionHref;
};

type Tone = "blue" | "mint" | "amber" | "coral" | "violet";

export type SkillGroup = {
  title: string;
  skills: readonly string[];
  tone: Tone;
  featured?: boolean;
  tall?: boolean;
};

export type ProjectItem = {
  slot: string;
  category: string;
  title: string;
  description: string;
  tech: readonly string[];
  highlights: readonly string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
};

export type CommandMenuLabels = {
  trigger: string;
  shortcut: string;
  title: string;
  description: string;
  placeholder: string;
  close: string;
  empty: string;
  group: string;
};

export type NavbarLabels = {
  brandAria: string;
  brandName: string;
  roleLine: string;
  openNavigation: string;
  closeNavigation: string;
  language: string;
  command: CommandMenuLabels;
};

export type ProjectCardLabels = {
  project: string;
  visitLiveSite: string;
  responsiveSurface: string;
  interfaceLabel: string;
};

export type PortfolioContent = {
  locale: Locale;
  metadata: {
    title: string;
    description: string;
    ogLocale: string;
    imageAlt: string;
  };
  structuredData: {
    jobTitle: string;
    addressCountry: string;
    knowsLanguage: readonly string[];
  };
  ui: {
    skipToContent: string;
    loadingPortfolio: string;
  };
  navbar: NavbarLabels;
  navigation: readonly NavigationItem[];
  hero: {
    eyebrow: string;
    nameLines: readonly string[];
    summary: string;
    primaryAction: string;
    secondaryAction: string;
    githubAction: string;
    stackLabel: string;
    stackItems: readonly string[];
    meta: readonly string[];
  };
  projectsSection: {
    index: string;
    title: string;
    description: string;
    cardLabels: ProjectCardLabels;
  };
  about: {
    index: string;
    title: string;
    statement: string;
    facts: {
      location: string;
      languages: string;
    };
    paragraphs: readonly string[];
  };
  skills: {
    index: string;
    title: string;
    description: string;
  };
  experience: {
    index: string;
    title: string;
    description: string;
    role: string;
    company: string;
    employmentType: string;
    startedLabel: string;
    startDate: string;
    responsibilities: readonly string[];
    tech: readonly string[];
    watermark: string;
  };
  education: {
    label: string;
    title: string;
    items: readonly {
      degree: string;
      status: string;
      date?: string;
    }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    emailAction: string;
  };
  footer: {
    identity: string;
    stack: string;
  };
  skillGroups: readonly SkillGroup[];
  languageItems: readonly {
    language: string;
    level: string;
  }[];
  careerGoals: readonly string[];
  projects: readonly ProjectItem[];
  contactItems: readonly ContactItem[];
};

const commonProjects = {
  rekar: {
    slot: "1",
    title: "Rekar",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/rekar.png",
    liveUrl: "https://rekar.ir/",
  },
  leksuu: {
    slot: "2",
    title: "Leksuu",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "next-intl"],
    image: "/images/projects/leksuu.png",
    liveUrl: "https://leksuu.ir/en",
  },
  nerkhin: {
    slot: "3",
    title: "Nerkhin",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "NextAuth"],
    image: "/images/projects/nerkhin.svg",
  },
  dentia: {
    slot: "4",
    title: "Dentia",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WebSocket"],
    image: "/images/projects/dentia.png",
  },
} as const;

const contactValues = {
  email: "shararekeshvari77@gmail.com",
  website: "shararekeshvari.ir",
  github: "github.com/shararekeshvari",
} as const;

const contactHrefs = {
  email: "mailto:shararekeshvari77@gmail.com",
  website: "https://shararekeshvari.ir",
  github: "https://github.com/shararekeshvari",
} as const;

export const portfolioContent = {
  en: {
    locale: "en",
    metadata: {
      title: "Sharare Keshvari - Frontend Developer & IT Student",
      description:
        "Frontend Developer and Information Technology student focused on responsive web interfaces built with React, Next.js, and TypeScript.",
      ogLocale: "en_US",
      imageAlt: "Dimensional structure used in Sharare Keshvari's frontend portfolio",
    },
    structuredData: {
      jobTitle: "Frontend Developer and Information Technology Student",
      addressCountry: "Iran",
      knowsLanguage: ["Persian", "English", "German"],
    },
    ui: {
      skipToContent: "Skip to content",
      loadingPortfolio: "Loading portfolio",
    },
    navbar: {
      brandAria: "SK, Sharare Keshvari, back to top",
      brandName: "Sharare Keshvari",
      roleLine: "Frontend Developer - IT Student",
      openNavigation: "Open navigation",
      closeNavigation: "Close navigation",
      language: "Language",
      command: {
        trigger: "Navigate",
        shortcut: "Ctrl K",
        title: "Navigate this portfolio",
        description: "Choose a section to navigate to.",
        placeholder: "Go to a section...",
        close: "Close command menu",
        empty: "No section found.",
        group: "Sections",
      },
    },
    navigation: [
      { label: "Projects", href: "#projects" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      eyebrow: "Frontend Developer - IT Student",
      nameLines: ["Sharare", "Keshvari"],
      summary:
        "I build responsive, user-friendly web interfaces with React, Next.js, and TypeScript, with a focus on clean implementation and thoughtful user experience.",
      primaryAction: "View projects",
      secondaryAction: "Contact me",
      githubAction: "GitHub",
      stackLabel: "frontend stack",
      stackItems: ["React interfaces", "Next.js delivery", "TypeScript components"],
      meta: [
        "Iran - Open to remote junior roles",
        "Persian - English - German",
        "Selected work below",
      ],
    },
    projectsSection: {
      index: "WORK / PROJECTS",
      title: "Interfaces with real product weight.",
      description:
        "Selected frontend projects across business operations, language learning, market discovery, and clinic management, with concise scope and verified screenshots where live pages are available.",
      cardLabels: {
        project: "Project",
        visitLiveSite: "Visit live site",
        responsiveSurface: "responsive surface",
        interfaceLabel: "interface",
      },
    },
    about: {
      index: "ABOUT / PROFILE",
      title: "Clear interfaces, built with care.",
      statement: "I care about the moment where an interface starts to feel obvious.",
      facts: {
        location: "Iran - Open to internships and junior roles",
        languages: "Persian - English - German",
      },
      paragraphs: [
        "I am a Frontend Developer and Information Technology student focused on building modern, responsive, and user-friendly web applications.",
        "I work primarily with React, Next.js, TypeScript, and modern UI tools. I value clear code, reusable components, thoughtful user experience, and interfaces that adapt across screen sizes.",
        "I am seeking remote internships and junior frontend roles where I can contribute to real-world products, continue developing my skills, and collaborate with international teams.",
      ],
    },
    skills: {
      index: "SKILLS / TOOLKIT",
      title: "A practical frontend toolkit.",
      description:
        "A scannable map of the tools I currently use across interface development, data handling, design systems, and AI-assisted workflows.",
    },
    experience: {
      index: "EXPERIENCE / REMOTE",
      title: "Professional practice in React teams.",
      description:
        "Remote frontend work focused on responsive interfaces, reusable React components, and TypeScript implementation.",
      role: "Junior Frontend Developer",
      company: "pt-ecommerce",
      employmentType: "Remote",
      startedLabel: "Started",
      startDate: "2025",
      responsibilities: [
        "Building responsive interfaces",
        "Developing reusable React components",
        "Using TypeScript in frontend implementation",
        "Implementing UI designs",
        "Collaborating with a remote development team",
      ],
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      watermark: "Work",
    },
    education: {
      label: "Education",
      title: "Learning path",
      items: [
        {
          degree: "Bachelor of Information Technology Engineering",
          status: "In progress",
          date: "Expected graduation: 2027",
        },
        {
          degree: "Associate Degree in Software Engineering",
          status: "Previous degree",
        },
      ],
    },
    contact: {
      eyebrow: "Contact / Next step",
      title: "Let's build something clear and useful.",
      description:
        "I am open to remote internships, junior frontend roles, and opportunities to collaborate with international teams. Email is the best way to reach me.",
      emailAction: "Email Sharare",
    },
    footer: {
      identity: "Sharare Keshvari - Frontend Developer - Information Technology Student",
      stack: "React - Next.js - TypeScript",
    },
    skillGroups: [
      {
        title: "Frontend Fundamentals",
        skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
        tone: "blue",
        featured: true,
        tall: true,
      },
      {
        title: "Frameworks",
        skills: ["React", "Next.js"],
        tone: "mint",
        featured: true,
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
        featured: true,
      },
      {
        title: "AI Workflows",
        skills: ["AI design tools", "Image generation tools", "AI-assisted workflows"],
        tone: "amber",
      },
    ],
    languageItems: [
      { language: "Persian", level: "Native" },
      { language: "English", level: "Intermediate - Preparing for IELTS" },
      { language: "German", level: "A2.1" },
    ],
    careerGoals: [
      "Strengthen my frontend engineering skills",
      "Contribute to international remote teams",
      "Build reliable, high-quality web applications",
      "Gain experience in global technology environments",
      "Continue learning modern web and AI-assisted workflows",
    ],
    projects: [
      {
        ...commonProjects.rekar,
        category: "Business platform",
        description:
          "A Persian RTL interface for cloud accounting and business management, with workflows for accounting, sales, inventory, treasury, payroll, reports, and team access.",
        highlights: [
          "Multi-tenant application structure",
          "RTL interface with multi-company and role-based access flows",
        ],
        imageAlt: "Rekar Persian accounting platform landing page",
      },
      {
        ...commonProjects.leksuu,
        category: "Learning platform",
        description:
          "A language-learning interface for Persian and Kurdish speakers, built around short stories, speaking practice, adaptive lessons, pronunciation feedback, and guided review.",
        highlights: [
          "Persian, Kurdish, and English language experience",
          "Interactive learning, pronunciation, and review workflows",
        ],
        imageAlt: "Leksuu English language-learning platform landing page",
      },
      {
        ...commonProjects.nerkhin,
        category: "Market platform",
        description:
          "A Persian RTL marketplace and price-discovery platform for the home-appliance trade, connecting wholesalers and retailers with product search, comparison, offers, account flows, and admin operations.",
        highlights: [
          "Wholesale and retail marketplace flows",
          "Search, product comparison, chat, notifications, and admin tooling",
        ],
        imageAlt: "Nerkhin mobile marketplace interface preview",
      },
      {
        ...commonProjects.dentia,
        category: "Clinic operations",
        description:
          "A Persian RTL dental clinic interface combining public appointment booking with staff workflows for patients, billing, inventory, and a live clinic queue.",
        highlights: [
          "Public clinic site and online booking",
          "Role-aware dashboard and live queue updates",
        ],
        imageAlt: "Dentia Persian dental clinic platform landing page",
      },
    ],
    contactItems: [
      { label: "Email", value: contactValues.email, href: contactHrefs.email },
      { label: "Website", value: contactValues.website, href: contactHrefs.website },
      { label: "GitHub", value: contactValues.github, href: contactHrefs.github },
    ],
  },
  de: {
    locale: "de",
    metadata: {
      title: "Sharare Keshvari - Frontend-Entwicklerin & IT-Studentin",
      description:
        "Frontend-Entwicklerin und IT-Studentin mit Fokus auf responsive Weboberflächen mit React, Next.js und TypeScript.",
      ogLocale: "de_DE",
      imageAlt: "Räumliche Struktur im Frontend-Portfolio von Sharare Keshvari",
    },
    structuredData: {
      jobTitle: "Frontend-Entwicklerin und IT-Studentin",
      addressCountry: "Iran",
      knowsLanguage: ["Persisch", "Englisch", "Deutsch"],
    },
    ui: {
      skipToContent: "Zum Inhalt springen",
      loadingPortfolio: "Portfolio wird geladen",
    },
    navbar: {
      brandAria: "SK, Sharare Keshvari, zurück nach oben",
      brandName: "Sharare Keshvari",
      roleLine: "Frontend-Entwicklerin - IT-Studentin",
      openNavigation: "Navigation öffnen",
      closeNavigation: "Navigation schließen",
      language: "Sprache",
      command: {
        trigger: "Navigieren",
        shortcut: "Ctrl K",
        title: "Durch dieses Portfolio navigieren",
        description: "Wähle einen Abschnitt aus.",
        placeholder: "Zu einem Abschnitt...",
        close: "Befehlsmenü schließen",
        empty: "Kein Abschnitt gefunden.",
        group: "Abschnitte",
      },
    },
    navigation: [
      { label: "Projekte", href: "#projects" },
      { label: "Über mich", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Erfahrung", href: "#experience" },
      { label: "Kontakt", href: "#contact" },
    ],
    hero: {
      eyebrow: "Frontend-Entwicklerin - IT-Studentin",
      nameLines: ["Sharare", "Keshvari"],
      summary:
        "Ich entwickle responsive, nutzerfreundliche Weboberflächen mit React, Next.js und TypeScript, mit Fokus auf saubere Umsetzung und durchdachte Nutzererfahrung.",
      primaryAction: "Projekte ansehen",
      secondaryAction: "Kontakt",
      githubAction: "GitHub",
      stackLabel: "Frontend-Stack",
      stackItems: ["React-Oberflächen", "Next.js-Auslieferung", "TypeScript-Komponenten"],
      meta: [
        "Iran - offen für Remote-Junior-Rollen",
        "Persisch - Englisch - Deutsch",
        "Ausgewählte Arbeiten unten",
      ],
    },
    projectsSection: {
      index: "ARBEIT / PROJEKTE",
      title: "Interfaces mit echtem Produktgewicht.",
      description:
        "Ausgewählte Frontend-Projekte in Business Operations, Sprachlernen, Marktsuche und Klinikmanagement, mit klarem Umfang und verifizierten Screenshots, wo Live-Seiten verfügbar sind.",
      cardLabels: {
        project: "Projekt",
        visitLiveSite: "Live-Seite besuchen",
        responsiveSurface: "responsive Oberfläche",
        interfaceLabel: "interface",
      },
    },
    about: {
      index: "ÜBER MICH / PROFIL",
      title: "Klare Interfaces, sorgfältig gebaut.",
      statement: "Mir ist der Moment wichtig, in dem ein Interface selbstverständlich wirkt.",
      facts: {
        location: "Iran - offen für Praktika und Junior-Rollen",
        languages: "Persisch - Englisch - Deutsch",
      },
      paragraphs: [
        "Ich bin Frontend-Entwicklerin und IT-Studentin mit Fokus auf moderne, responsive und nutzerfreundliche Webanwendungen.",
        "Ich arbeite vor allem mit React, Next.js, TypeScript und modernen UI-Tools. Wichtig sind mir klarer Code, wiederverwendbare Komponenten, gute Nutzererfahrung und Interfaces, die auf verschiedenen Bildschirmgrößen funktionieren.",
        "Ich suche Remote-Praktika und Junior-Frontend-Rollen, in denen ich zu realen Produkten beitragen, meine Fähigkeiten weiterentwickeln und mit internationalen Teams zusammenarbeiten kann.",
      ],
    },
    skills: {
      index: "SKILLS / TOOLKIT",
      title: "Ein praktisches Frontend-Toolkit.",
      description:
        "Ein übersichtlicher Blick auf die Tools, die ich für Interface-Entwicklung, Datenhandling, Designsysteme und KI-gestützte Workflows nutze.",
    },
    experience: {
      index: "ERFAHRUNG / REMOTE",
      title: "Praxis in React-Teams.",
      description:
        "Remote-Frontend-Arbeit mit Fokus auf responsive Interfaces, wiederverwendbare React-Komponenten und TypeScript-Umsetzung.",
      role: "Junior Frontend Developer",
      company: "pt-ecommerce",
      employmentType: "Remote",
      startedLabel: "Begonnen",
      startDate: "2025",
      responsibilities: [
        "Responsive Interfaces bauen",
        "Wiederverwendbare React-Komponenten entwickeln",
        "TypeScript in der Frontend-Umsetzung nutzen",
        "UI-Designs implementieren",
        "Mit einem Remote-Entwicklungsteam zusammenarbeiten",
      ],
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      watermark: "Work",
    },
    education: {
      label: "Ausbildung",
      title: "Lernweg",
      items: [
        {
          degree: "Bachelor in Information Technology Engineering",
          status: "In Arbeit",
          date: "Voraussichtlicher Abschluss: 2027",
        },
        {
          degree: "Associate Degree in Software Engineering",
          status: "Vorheriger Abschluss",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt / Nächster Schritt",
      title: "Lass uns etwas Klares und Nützliches bauen.",
      description:
        "Ich bin offen für Remote-Praktika, Junior-Frontend-Rollen und Möglichkeiten zur Zusammenarbeit mit internationalen Teams. Per E-Mail bin ich am besten erreichbar.",
      emailAction: "E-Mail an Sharare",
    },
    footer: {
      identity: "Sharare Keshvari - Frontend-Entwicklerin - IT-Studentin",
      stack: "React - Next.js - TypeScript",
    },
    skillGroups: [
      {
        title: "Frontend-Grundlagen",
        skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
        tone: "blue",
        featured: true,
        tall: true,
      },
      {
        title: "Frameworks",
        skills: ["React", "Next.js"],
        tone: "mint",
        featured: true,
      },
      {
        title: "Styling",
        skills: ["Tailwind CSS", "Responsive Design"],
        tone: "amber",
      },
      {
        title: "Daten & APIs",
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
        skills: ["Figma", "Shadcn UI", "Radix UI", "UI/UX-Prinzipien"],
        tone: "mint",
        featured: true,
      },
      {
        title: "KI-Workflows",
        skills: ["KI-Design-Tools", "Bildgenerierungs-Tools", "KI-gestützte Workflows"],
        tone: "amber",
      },
    ],
    languageItems: [
      { language: "Persisch", level: "Muttersprache" },
      { language: "Englisch", level: "Mittelstufe - Vorbereitung auf IELTS" },
      { language: "Deutsch", level: "A2.1" },
    ],
    careerGoals: [
      "Meine Frontend-Fähigkeiten weiter stärken",
      "Zu internationalen Remote-Teams beitragen",
      "Zuverlässige, hochwertige Webanwendungen bauen",
      "Erfahrung in globalen Technologieumgebungen sammeln",
      "Moderne Web- und KI-gestützte Workflows weiter lernen",
    ],
    projects: [
      {
        ...commonProjects.rekar,
        category: "Business-Plattform",
        description:
          "Eine persische RTL-Oberfläche für Cloud-Buchhaltung und Business Management mit Workflows für Buchhaltung, Verkauf, Lager, Treasury, Payroll, Reports und Teamzugriff.",
        highlights: [
          "Multi-Tenant-Anwendungsstruktur",
          "RTL-Oberfläche mit Multi-Company- und rollenbasierten Zugriffen",
        ],
        imageAlt: "Rekar Landingpage für eine persische Buchhaltungsplattform",
      },
      {
        ...commonProjects.leksuu,
        category: "Lernplattform",
        description:
          "Eine Sprachlernoberfläche für persische und kurdische Sprecher, aufgebaut um kurze Geschichten, Sprechübungen, adaptive Lektionen, Aussprachefeedback und geführte Wiederholung.",
        highlights: [
          "Spracherfahrung für Persisch, Kurdisch und Englisch",
          "Interaktives Lernen, Aussprache und Wiederholungs-Workflows",
        ],
        imageAlt: "Englische Leksuu Landingpage für eine Sprachlernplattform",
      },
      {
        ...commonProjects.nerkhin,
        category: "Marktplattform",
        description:
          "Ein persischer RTL-Marktplatz und eine Preisfindungsplattform für den Haushaltsgerätehandel, die Großhändler und Händler mit Suche, Vergleich, Angeboten, Account-Flows und Admin-Operationen verbindet.",
        highlights: [
          "Marketplace-Flows für Großhandel und Handel",
          "Suche, Produktvergleich, Chat, Benachrichtigungen und Admin-Tools",
        ],
        imageAlt: "Nerkhin mobile Marketplace Interface Preview",
      },
      {
        ...commonProjects.dentia,
        category: "Klinikbetrieb",
        description:
          "Eine persische RTL-Oberfläche für Zahnkliniken, die öffentliche Terminbuchung mit Staff-Workflows für Patienten, Abrechnung, Inventar und eine Live-Warteschlange verbindet.",
        highlights: [
          "Öffentliche Klinikseite und Online-Buchung",
          "Rollenbasiertes Dashboard und Live-Queue-Updates",
        ],
        imageAlt: "Dentia Landingpage für eine persische Zahnklinik-Plattform",
      },
    ],
    contactItems: [
      { label: "E-Mail", value: contactValues.email, href: contactHrefs.email },
      { label: "Website", value: contactValues.website, href: contactHrefs.website },
      { label: "GitHub", value: contactValues.github, href: contactHrefs.github },
    ],
  },
  fr: {
    locale: "fr",
    metadata: {
      title: "Sharare Keshvari - Développeuse frontend & étudiante en IT",
      description:
        "Développeuse frontend et étudiante en technologie de l'information, spécialisée dans les interfaces web responsives avec React, Next.js et TypeScript.",
      ogLocale: "fr_FR",
      imageAlt: "Structure visuelle utilisée dans le portfolio frontend de Sharare Keshvari",
    },
    structuredData: {
      jobTitle: "Développeuse frontend et étudiante en technologie de l'information",
      addressCountry: "Iran",
      knowsLanguage: ["persan", "anglais", "allemand"],
    },
    ui: {
      skipToContent: "Aller au contenu",
      loadingPortfolio: "Chargement du portfolio",
    },
    navbar: {
      brandAria: "SK, Sharare Keshvari, retour en haut",
      brandName: "Sharare Keshvari",
      roleLine: "Développeuse frontend - étudiante en IT",
      openNavigation: "Ouvrir la navigation",
      closeNavigation: "Fermer la navigation",
      language: "Langue",
      command: {
        trigger: "Naviguer",
        shortcut: "Ctrl K",
        title: "Naviguer dans ce portfolio",
        description: "Choisissez une section.",
        placeholder: "Aller à une section...",
        close: "Fermer le menu",
        empty: "Aucune section trouvée.",
        group: "Sections",
      },
    },
    navigation: [
      { label: "Projets", href: "#projects" },
      { label: "À propos", href: "#about" },
      { label: "Compétences", href: "#skills" },
      { label: "Expérience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      eyebrow: "Développeuse frontend - étudiante en IT",
      nameLines: ["Sharare", "Keshvari"],
      summary:
        "Je crée des interfaces web responsives et faciles à utiliser avec React, Next.js et TypeScript, avec une attention particulière à une implémentation propre et à une expérience utilisateur réfléchie.",
      primaryAction: "Voir les projets",
      secondaryAction: "Me contacter",
      githubAction: "GitHub",
      stackLabel: "stack frontend",
      stackItems: ["Interfaces React", "Livraison Next.js", "Composants TypeScript"],
      meta: [
        "Iran - ouverte aux postes junior à distance",
        "Persan - anglais - allemand",
        "Travaux sélectionnés ci-dessous",
      ],
    },
    projectsSection: {
      index: "TRAVAUX / PROJETS",
      title: "Des interfaces avec le poids d'un vrai produit.",
      description:
        "Projets frontend sélectionnés autour des opérations métier, de l'apprentissage des langues, de la découverte de marché et de la gestion de clinique, avec un périmètre clair et des captures vérifiées lorsque les pages en ligne sont disponibles.",
      cardLabels: {
        project: "Projet",
        visitLiveSite: "Voir le site",
        responsiveSurface: "surface responsive",
        interfaceLabel: "interface",
      },
    },
    about: {
      index: "À PROPOS / PROFIL",
      title: "Des interfaces claires, construites avec soin.",
      statement: "J'aime le moment où une interface devient évidente pour la personne qui l'utilise.",
      facts: {
        location: "Iran - ouverte aux stages et postes junior",
        languages: "Persan - anglais - allemand",
      },
      paragraphs: [
        "Je suis développeuse frontend et étudiante en technologie de l'information, avec un focus sur des applications web modernes, responsives et faciles à utiliser.",
        "Je travaille surtout avec React, Next.js, TypeScript et des outils UI modernes. J'accorde de l'importance au code clair, aux composants réutilisables, à l'expérience utilisateur et aux interfaces qui s'adaptent aux différents écrans.",
        "Je recherche des stages à distance et des postes junior frontend où je peux contribuer à de vrais produits, développer mes compétences et collaborer avec des équipes internationales.",
      ],
    },
    skills: {
      index: "COMPÉTENCES / OUTILS",
      title: "Une boîte à outils frontend pratique.",
      description:
        "Une vue claire des outils que j'utilise aujourd'hui pour le développement d'interfaces, la gestion de données, les systèmes de design et les workflows assistés par l'IA.",
    },
    experience: {
      index: "EXPÉRIENCE / DISTANCE",
      title: "Pratique professionnelle dans des équipes React.",
      description:
        "Travail frontend à distance autour d'interfaces responsives, de composants React réutilisables et d'implémentations TypeScript.",
      role: "Junior Frontend Developer",
      company: "pt-ecommerce",
      employmentType: "Remote",
      startedLabel: "Début",
      startDate: "2025",
      responsibilities: [
        "Construire des interfaces responsives",
        "Développer des composants React réutilisables",
        "Utiliser TypeScript dans l'implémentation frontend",
        "Implémenter des designs UI",
        "Collaborer avec une équipe de développement à distance",
      ],
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      watermark: "Travail",
    },
    education: {
      label: "Formation",
      title: "Parcours d'apprentissage",
      items: [
        {
          degree: "Bachelor en ingénierie des technologies de l'information",
          status: "En cours",
          date: "Diplôme prévu : 2027",
        },
        {
          degree: "Associate Degree en génie logiciel",
          status: "Diplôme précédent",
        },
      ],
    },
    contact: {
      eyebrow: "Contact / Prochaine étape",
      title: "Construisons quelque chose de clair et utile.",
      description:
        "Je suis ouverte aux stages à distance, aux postes junior frontend et aux collaborations avec des équipes internationales. Le meilleur moyen de me contacter est l'e-mail.",
      emailAction: "Écrire à Sharare",
    },
    footer: {
      identity: "Sharare Keshvari - Développeuse frontend - étudiante en IT",
      stack: "React - Next.js - TypeScript",
    },
    skillGroups: [
      {
        title: "Fondamentaux frontend",
        skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
        tone: "blue",
        featured: true,
        tall: true,
      },
      {
        title: "Frameworks",
        skills: ["React", "Next.js"],
        tone: "mint",
        featured: true,
      },
      {
        title: "Style",
        skills: ["Tailwind CSS", "Responsive Design"],
        tone: "amber",
      },
      {
        title: "Données & API",
        skills: ["React Query", "Axios", "REST APIs"],
        tone: "coral",
      },
      {
        title: "Bases backend & authentification",
        skills: ["Clerk", "Convex"],
        tone: "violet",
      },
      {
        title: "Outils",
        skills: ["Git"],
        tone: "blue",
      },
      {
        title: "UI & design",
        skills: ["Figma", "Shadcn UI", "Radix UI", "Principes UI/UX"],
        tone: "mint",
        featured: true,
      },
      {
        title: "Workflows IA",
        skills: ["Outils de design IA", "Outils de génération d'images", "Workflows assistés par l'IA"],
        tone: "amber",
      },
    ],
    languageItems: [
      { language: "Persan", level: "Langue maternelle" },
      { language: "Anglais", level: "Intermédiaire - préparation à l'IELTS" },
      { language: "Allemand", level: "A2.1" },
    ],
    careerGoals: [
      "Renforcer mes compétences en ingénierie frontend",
      "Contribuer à des équipes internationales à distance",
      "Construire des applications web fiables et de qualité",
      "Acquérir de l'expérience dans des environnements tech mondiaux",
      "Continuer à apprendre les workflows web modernes et assistés par l'IA",
    ],
    projects: [
      {
        ...commonProjects.rekar,
        category: "Plateforme business",
        description:
          "Une interface RTL persane pour la comptabilité cloud et la gestion d'entreprise, avec des workflows pour la comptabilité, les ventes, l'inventaire, la trésorerie, la paie, les rapports et l'accès équipe.",
        highlights: [
          "Structure d'application multi-tenant",
          "Interface RTL avec parcours multi-entreprise et accès selon les rôles",
        ],
        imageAlt: "Page d'accueil Rekar pour une plateforme de comptabilité persane",
      },
      {
        ...commonProjects.leksuu,
        category: "Plateforme d'apprentissage",
        description:
          "Une interface d'apprentissage des langues pour les locuteurs persans et kurdes, construite autour de courtes histoires, de pratique orale, de leçons adaptatives, de feedback de prononciation et de révision guidée.",
        highlights: [
          "Expérience en persan, kurde et anglais",
          "Workflows d'apprentissage interactif, de prononciation et de révision",
        ],
        imageAlt: "Page d'accueil Leksuu pour une plateforme d'apprentissage de l'anglais",
      },
      {
        ...commonProjects.nerkhin,
        category: "Plateforme de marché",
        description:
          "Une marketplace RTL persane et une plateforme de découverte de prix pour le commerce d'électroménager, reliant grossistes et détaillants avec recherche, comparaison, offres, parcours de compte et opérations admin.",
        highlights: [
          "Parcours marketplace pour grossistes et détaillants",
          "Recherche, comparaison de produits, chat, notifications et outils admin",
        ],
        imageAlt: "Aperçu mobile de l'interface marketplace Nerkhin",
      },
      {
        ...commonProjects.dentia,
        category: "Gestion de clinique",
        description:
          "Une interface RTL persane pour cabinet dentaire, combinant prise de rendez-vous publique et workflows internes pour patients, facturation, inventaire et file d'attente en direct.",
        highlights: [
          "Site public de clinique et réservation en ligne",
          "Dashboard selon les rôles et mises à jour de file en direct",
        ],
        imageAlt: "Page d'accueil Dentia pour une plateforme de clinique dentaire persane",
      },
    ],
    contactItems: [
      { label: "E-mail", value: contactValues.email, href: contactHrefs.email },
      { label: "Site web", value: contactValues.website, href: contactHrefs.website },
      { label: "GitHub", value: contactValues.github, href: contactHrefs.github },
    ],
  },
  tr: {
    locale: "tr",
    metadata: {
      title: "Sharare Keshvari - Frontend Geliştirici & IT Öğrencisi",
      description:
        "React, Next.js ve TypeScript ile responsive web arayüzleri geliştiren frontend geliştirici ve bilgi teknolojileri öğrencisi.",
      ogLocale: "tr_TR",
      imageAlt: "Sharare Keshvari'nin frontend portfolyosunda kullanılan görsel yapı",
    },
    structuredData: {
      jobTitle: "Frontend geliştirici ve bilgi teknolojileri öğrencisi",
      addressCountry: "İran",
      knowsLanguage: ["Farsça", "İngilizce", "Almanca"],
    },
    ui: {
      skipToContent: "İçeriğe geç",
      loadingPortfolio: "Portfolyo yükleniyor",
    },
    navbar: {
      brandAria: "SK, Sharare Keshvari, başa dön",
      brandName: "Sharare Keshvari",
      roleLine: "Frontend Geliştirici - IT Öğrencisi",
      openNavigation: "Navigasyonu aç",
      closeNavigation: "Navigasyonu kapat",
      language: "Dil",
      command: {
        trigger: "Gezin",
        shortcut: "Ctrl K",
        title: "Bu portfolyoda gezin",
        description: "Gitmek için bir bölüm seçin.",
        placeholder: "Bir bölüme git...",
        close: "Komut menüsünü kapat",
        empty: "Bölüm bulunamadı.",
        group: "Bölümler",
      },
    },
    navigation: [
      { label: "Projeler", href: "#projects" },
      { label: "Hakkımda", href: "#about" },
      { label: "Yetenekler", href: "#skills" },
      { label: "Deneyim", href: "#experience" },
      { label: "İletişim", href: "#contact" },
    ],
    hero: {
      eyebrow: "Frontend Geliştirici - IT Öğrencisi",
      nameLines: ["Sharare", "Keshvari"],
      summary:
        "React, Next.js ve TypeScript ile responsive, kullanıcı dostu web arayüzleri geliştiriyorum; temiz uygulama ve düşünülmüş kullanıcı deneyimine odaklanıyorum.",
      primaryAction: "Projeleri gör",
      secondaryAction: "İletişime geç",
      githubAction: "GitHub",
      stackLabel: "frontend stack",
      stackItems: ["React arayüzleri", "Next.js teslimi", "TypeScript bileşenleri"],
      meta: [
        "İran - remote junior rollere açık",
        "Farsça - İngilizce - Almanca",
        "Seçili işler aşağıda",
      ],
    },
    projectsSection: {
      index: "İŞLER / PROJELER",
      title: "Gerçek ürün hissi taşıyan arayüzler.",
      description:
        "İş operasyonları, dil öğrenimi, pazar keşfi ve klinik yönetimi alanlarında seçilmiş frontend projeleri; net kapsam ve canlı sayfalar mevcut olduğunda doğrulanmış ekran görüntüleriyle.",
      cardLabels: {
        project: "Proje",
        visitLiveSite: "Canlı siteyi aç",
        responsiveSurface: "responsive yüzey",
        interfaceLabel: "arayüz",
      },
    },
    about: {
      index: "HAKKIMDA / PROFİL",
      title: "Özenle geliştirilmiş net arayüzler.",
      statement: "Bir arayüzün kullanıcı için kendiliğinden anlaşılır hale geldiği anı önemserim.",
      facts: {
        location: "İran - stajlara ve junior rollere açık",
        languages: "Farsça - İngilizce - Almanca",
      },
      paragraphs: [
        "Modern, responsive ve kullanıcı dostu web uygulamaları geliştirmeye odaklanan bir frontend geliştirici ve bilgi teknolojileri öğrencisiyim.",
        "Çoğunlukla React, Next.js, TypeScript ve modern UI araçlarıyla çalışıyorum. Net kodu, yeniden kullanılabilir bileşenleri, düşünülmüş kullanıcı deneyimini ve farklı ekran boyutlarına uyum sağlayan arayüzleri önemsiyorum.",
        "Gerçek ürünlere katkı verebileceğim, yeteneklerimi geliştirebileceğim ve uluslararası ekiplerle çalışabileceğim remote stajlar ve junior frontend rolleri arıyorum.",
      ],
    },
    skills: {
      index: "YETENEKLER / ARAÇLAR",
      title: "Pratik bir frontend araç seti.",
      description:
        "Arayüz geliştirme, veri kullanımı, tasarım sistemleri ve AI destekli iş akışlarında şu anda kullandığım araçların okunabilir bir haritası.",
    },
    experience: {
      index: "DENEYİM / REMOTE",
      title: "React ekiplerinde profesyonel pratik.",
      description:
        "Responsive arayüzler, yeniden kullanılabilir React bileşenleri ve TypeScript uygulaması odaklı remote frontend çalışması.",
      role: "Junior Frontend Developer",
      company: "pt-ecommerce",
      employmentType: "Remote",
      startedLabel: "Başlangıç",
      startDate: "2025",
      responsibilities: [
        "Responsive arayüzler geliştirmek",
        "Yeniden kullanılabilir React bileşenleri oluşturmak",
        "Frontend uygulamasında TypeScript kullanmak",
        "UI tasarımlarını uygulamak",
        "Remote geliştirme ekibiyle iş birliği yapmak",
      ],
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      watermark: "İş",
    },
    education: {
      label: "Eğitim",
      title: "Öğrenme yolu",
      items: [
        {
          degree: "Bilgi Teknolojileri Mühendisliği Lisans Programı",
          status: "Devam ediyor",
          date: "Beklenen mezuniyet: 2027",
        },
        {
          degree: "Yazılım Mühendisliği Ön Lisans Programı",
          status: "Önceki derece",
        },
      ],
    },
    contact: {
      eyebrow: "İletişim / Sonraki adım",
      title: "Net ve kullanışlı bir şey inşa edelim.",
      description:
        "Remote stajlara, junior frontend rollerine ve uluslararası ekiplerle iş birliği fırsatlarına açığım. Bana ulaşmanın en iyi yolu e-posta.",
      emailAction: "Sharare'ye e-posta gönder",
    },
    footer: {
      identity: "Sharare Keshvari - Frontend Geliştirici - IT Öğrencisi",
      stack: "React - Next.js - TypeScript",
    },
    skillGroups: [
      {
        title: "Frontend temelleri",
        skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
        tone: "blue",
        featured: true,
        tall: true,
      },
      {
        title: "Frameworkler",
        skills: ["React", "Next.js"],
        tone: "mint",
        featured: true,
      },
      {
        title: "Stil",
        skills: ["Tailwind CSS", "Responsive Design"],
        tone: "amber",
      },
      {
        title: "Veri & API",
        skills: ["React Query", "Axios", "REST APIs"],
        tone: "coral",
      },
      {
        title: "Backend & auth temelleri",
        skills: ["Clerk", "Convex"],
        tone: "violet",
      },
      {
        title: "Araçlar",
        skills: ["Git"],
        tone: "blue",
      },
      {
        title: "UI & tasarım",
        skills: ["Figma", "Shadcn UI", "Radix UI", "UI/UX ilkeleri"],
        tone: "mint",
        featured: true,
      },
      {
        title: "AI iş akışları",
        skills: ["AI tasarım araçları", "Görsel üretim araçları", "AI destekli iş akışları"],
        tone: "amber",
      },
    ],
    languageItems: [
      { language: "Farsça", level: "Ana dil" },
      { language: "İngilizce", level: "Orta seviye - IELTS hazırlığı" },
      { language: "Almanca", level: "A2.1" },
    ],
    careerGoals: [
      "Frontend mühendisliği becerilerimi güçlendirmek",
      "Uluslararası remote ekiplere katkı sağlamak",
      "Güvenilir ve kaliteli web uygulamaları geliştirmek",
      "Global teknoloji ortamlarında deneyim kazanmak",
      "Modern web ve AI destekli iş akışlarını öğrenmeye devam etmek",
    ],
    projects: [
      {
        ...commonProjects.rekar,
        category: "İş platformu",
        description:
          "Bulut muhasebe ve işletme yönetimi için Farsça RTL arayüz; muhasebe, satış, stok, hazine, bordro, raporlar ve ekip erişimi iş akışlarıyla.",
        highlights: [
          "Çok kiracılı uygulama yapısı",
          "Çok şirketli ve rol tabanlı erişim akışlarına sahip RTL arayüz",
        ],
        imageAlt: "Farsça muhasebe platformu Rekar ana sayfası",
      },
      {
        ...commonProjects.leksuu,
        category: "Öğrenme platformu",
        description:
          "Farsça ve Kürtçe konuşanlar için kısa hikayeler, konuşma pratiği, uyarlanabilir dersler, telaffuz geri bildirimi ve yönlendirilmiş tekrar üzerine kurulu bir dil öğrenme arayüzü.",
        highlights: [
          "Farsça, Kürtçe ve İngilizce dil deneyimi",
          "Etkileşimli öğrenme, telaffuz ve tekrar iş akışları",
        ],
        imageAlt: "İngilizce öğrenme platformu Leksuu ana sayfası",
      },
      {
        ...commonProjects.nerkhin,
        category: "Pazar platformu",
        description:
          "Ev aletleri ticareti için Farsça RTL marketplace ve fiyat keşif platformu; toptancıları ve perakendecileri arama, karşılaştırma, teklifler, hesap akışları ve admin operasyonlarıyla bağlar.",
        highlights: [
          "Toptan ve perakende marketplace akışları",
          "Arama, ürün karşılaştırma, sohbet, bildirimler ve admin araçları",
        ],
        imageAlt: "Nerkhin mobil marketplace arayüz önizlemesi",
      },
      {
        ...commonProjects.dentia,
        category: "Klinik operasyonları",
        description:
          "Herkese açık randevu alma deneyimini hasta, faturalandırma, envanter ve canlı klinik sırası için personel iş akışlarıyla birleştiren Farsça RTL diş kliniği arayüzü.",
        highlights: [
          "Herkese açık klinik sitesi ve online randevu",
          "Rol bazlı dashboard ve canlı sıra güncellemeleri",
        ],
        imageAlt: "Farsça diş kliniği platformu Dentia ana sayfası",
      },
    ],
    contactItems: [
      { label: "E-posta", value: contactValues.email, href: contactHrefs.email },
      { label: "Web sitesi", value: contactValues.website, href: contactHrefs.website },
      { label: "GitHub", value: contactValues.github, href: contactHrefs.github },
    ],
  },
  fa: {
    locale: "fa",
    metadata: {
      title: "شراره کشوری - توسعه‌دهنده فرانت‌اند و دانشجوی IT",
      description:
        "توسعه‌دهنده فرانت‌اند و دانشجوی فناوری اطلاعات با تمرکز بر رابط‌های وب ریسپانسیو با React، Next.js و TypeScript.",
      ogLocale: "fa_IR",
      imageAlt: "ساختار تصویری استفاده‌شده در پورتفولیوی فرانت‌اند شراره کشوری",
    },
    structuredData: {
      jobTitle: "توسعه‌دهنده فرانت‌اند و دانشجوی فناوری اطلاعات",
      addressCountry: "ایران",
      knowsLanguage: ["فارسی", "انگلیسی", "آلمانی"],
    },
    ui: {
      skipToContent: "رفتن به محتوا",
      loadingPortfolio: "در حال بارگذاری پورتفولیو",
    },
    navbar: {
      brandAria: "شراره کشوری، بازگشت به ابتدای صفحه",
      brandName: "شراره کشوری",
      roleLine: "توسعه‌دهنده فرانت‌اند - دانشجوی IT",
      openNavigation: "باز کردن منو",
      closeNavigation: "بستن منو",
      language: "زبان",
      command: {
        trigger: "ناوبری",
        shortcut: "Ctrl K",
        title: "ناوبری در پورتفولیو",
        description: "یک بخش را برای رفتن انتخاب کنید.",
        placeholder: "رفتن به بخش...",
        close: "بستن منوی ناوبری",
        empty: "بخشی پیدا نشد.",
        group: "بخش‌ها",
      },
    },
    navigation: [
      { label: "پروژه‌ها", href: "#projects" },
      { label: "درباره من", href: "#about" },
      { label: "مهارت‌ها", href: "#skills" },
      { label: "تجربه", href: "#experience" },
      { label: "تماس", href: "#contact" },
    ],
    hero: {
      eyebrow: "توسعه‌دهنده فرانت‌اند - دانشجوی IT",
      nameLines: ["شراره", "کشوری"],
      summary:
        "رابط‌های وب ریسپانسیو و کاربرپسند با React، Next.js و TypeScript می‌سازم؛ با تمرکز بر پیاده‌سازی تمیز و تجربه کاربری فکرشده.",
      primaryAction: "مشاهده پروژه‌ها",
      secondaryAction: "تماس با من",
      githubAction: "GitHub",
      stackLabel: "استک فرانت‌اند",
      stackItems: ["رابط‌های React", "تحویل با Next.js", "کامپوننت‌های TypeScript"],
      meta: [
        "ایران - آماده همکاری ریموت در نقش‌های جونیور",
        "فارسی - انگلیسی - آلمانی",
        "نمونه‌کارها در ادامه",
      ],
    },
    projectsSection: {
      index: "کار / پروژه‌ها",
      title: "رابط‌هایی با وزن واقعی محصول.",
      description:
        "پروژه‌های منتخب فرانت‌اند در حوزه عملیات کسب‌وکار، یادگیری زبان، کشف بازار و مدیریت کلینیک؛ با محدوده روشن و اسکرین‌شات‌های تاییدشده برای صفحات در دسترس.",
      cardLabels: {
        project: "پروژه",
        visitLiveSite: "مشاهده سایت",
        responsiveSurface: "نمای ریسپانسیو",
        interfaceLabel: "رابط",
      },
    },
    about: {
      index: "درباره / پروفایل",
      title: "رابط‌های روشن، ساخته‌شده با دقت.",
      statement: "برای من مهم است که یک رابط در لحظه استفاده، واضح و بدیهی حس شود.",
      facts: {
        location: "ایران - آماده برای کارآموزی و نقش‌های جونیور",
        languages: "فارسی - انگلیسی - آلمانی",
      },
      paragraphs: [
        "من توسعه‌دهنده فرانت‌اند و دانشجوی فناوری اطلاعات هستم و روی ساخت وب‌اپلیکیشن‌های مدرن، ریسپانسیو و کاربرپسند تمرکز دارم.",
        "بیشتر با React، Next.js، TypeScript و ابزارهای مدرن UI کار می‌کنم. کد روشن، کامپوننت‌های قابل استفاده مجدد، تجربه کاربری فکرشده و رابط‌هایی که در اندازه‌های مختلف صفحه درست کار کنند برایم مهم است.",
        "به دنبال کارآموزی‌های ریموت و نقش‌های جونیور فرانت‌اند هستم تا در محصولات واقعی مشارکت کنم، مهارت‌هایم را توسعه بدهم و با تیم‌های بین‌المللی همکاری داشته باشم.",
      ],
    },
    skills: {
      index: "مهارت‌ها / ابزارها",
      title: "یک ابزارخانه کاربردی فرانت‌اند.",
      description:
        "نمایی سریع از ابزارهایی که برای توسعه رابط، کار با داده، دیزاین سیستم و جریان‌های کاری همراه با AI استفاده می‌کنم.",
    },
    experience: {
      index: "تجربه / ریموت",
      title: "تمرین حرفه‌ای در تیم‌های React.",
      description:
        "کار فرانت‌اند ریموت با تمرکز بر رابط‌های ریسپانسیو، کامپوننت‌های React قابل استفاده مجدد و پیاده‌سازی با TypeScript.",
      role: "Junior Frontend Developer",
      company: "pt-ecommerce",
      employmentType: "Remote",
      startedLabel: "شروع",
      startDate: "2025",
      responsibilities: [
        "ساخت رابط‌های ریسپانسیو",
        "توسعه کامپوننت‌های React قابل استفاده مجدد",
        "استفاده از TypeScript در پیاده‌سازی فرانت‌اند",
        "پیاده‌سازی طراحی‌های UI",
        "همکاری با تیم توسعه ریموت",
      ],
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      watermark: "کار",
    },
    education: {
      label: "تحصیلات",
      title: "مسیر یادگیری",
      items: [
        {
          degree: "کارشناسی مهندسی فناوری اطلاعات",
          status: "در حال تحصیل",
          date: "زمان مورد انتظار فارغ‌التحصیلی: 2027",
        },
        {
          degree: "کاردانی مهندسی نرم‌افزار",
          status: "مدرک قبلی",
        },
      ],
    },
    contact: {
      eyebrow: "تماس / قدم بعدی",
      title: "بیایید چیزی روشن و کاربردی بسازیم.",
      description:
        "برای کارآموزی‌های ریموت، نقش‌های جونیور فرانت‌اند و همکاری با تیم‌های بین‌المللی آماده‌ام. بهترین راه ارتباط با من ایمیل است.",
      emailAction: "ایمیل به شراره",
    },
    footer: {
      identity: "شراره کشوری - توسعه‌دهنده فرانت‌اند - دانشجوی فناوری اطلاعات",
      stack: "React - Next.js - TypeScript",
    },
    skillGroups: [
      {
        title: "مبانی فرانت‌اند",
        skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
        tone: "blue",
        featured: true,
        tall: true,
      },
      {
        title: "فریم‌ورک‌ها",
        skills: ["React", "Next.js"],
        tone: "mint",
        featured: true,
      },
      {
        title: "استایلینگ",
        skills: ["Tailwind CSS", "Responsive Design"],
        tone: "amber",
      },
      {
        title: "داده و API",
        skills: ["React Query", "Axios", "REST APIs"],
        tone: "coral",
      },
      {
        title: "بک‌اند و Auth پایه",
        skills: ["Clerk", "Convex"],
        tone: "violet",
      },
      {
        title: "ابزارها",
        skills: ["Git"],
        tone: "blue",
      },
      {
        title: "UI و طراحی",
        skills: ["Figma", "Shadcn UI", "Radix UI", "اصول UI/UX"],
        tone: "mint",
        featured: true,
      },
      {
        title: "جریان‌های کاری AI",
        skills: ["ابزارهای طراحی AI", "ابزارهای تولید تصویر", "کار با کمک AI"],
        tone: "amber",
      },
    ],
    languageItems: [
      { language: "فارسی", level: "زبان مادری" },
      { language: "انگلیسی", level: "متوسط - در حال آماده‌سازی برای IELTS" },
      { language: "آلمانی", level: "A2.1" },
    ],
    careerGoals: [
      "تقویت مهارت‌های مهندسی فرانت‌اند",
      "مشارکت در تیم‌های ریموت بین‌المللی",
      "ساخت وب‌اپلیکیشن‌های قابل اعتماد و باکیفیت",
      "کسب تجربه در محیط‌های فناوری جهانی",
      "ادامه یادگیری وب مدرن و جریان‌های کاری همراه با AI",
    ],
    projects: [
      {
        ...commonProjects.rekar,
        category: "پلتفرم کسب‌وکار",
        description:
          "یک رابط فارسی راست‌به‌چپ برای حسابداری ابری و مدیریت کسب‌وکار، با جریان‌های کاری حسابداری، فروش، انبار، خزانه، حقوق و دستمزد، گزارش‌ها و دسترسی تیمی.",
        highlights: [
          "ساختار اپلیکیشن چندمستاجری",
          "رابط راست‌به‌چپ با جریان‌های چندشرکتی و دسترسی نقش‌محور",
        ],
        imageAlt: "صفحه فرود پلتفرم حسابداری فارسی Rekar",
      },
      {
        ...commonProjects.leksuu,
        category: "پلتفرم یادگیری",
        description:
          "رابط یادگیری زبان برای فارسی‌زبانان و کردی‌زبانان، بر پایه داستان‌های کوتاه، تمرین مکالمه، درس‌های تطبیقی، بازخورد تلفظ و مرور هدایت‌شده.",
        highlights: [
          "تجربه زبانی فارسی، کردی و انگلیسی",
          "جریان‌های یادگیری تعاملی، تلفظ و مرور",
        ],
        imageAlt: "صفحه فرود انگلیسی پلتفرم یادگیری زبان Leksuu",
      },
      {
        ...commonProjects.nerkhin,
        category: "پلتفرم بازار",
        description:
          "یک بازار و پلتفرم کشف قیمت فارسی راست‌به‌چپ برای تجارت لوازم خانگی، با اتصال عمده‌فروشان و خرده‌فروشان از طریق جستجو، مقایسه، پیشنهادها، حساب کاربری و عملیات ادمین.",
        highlights: [
          "جریان‌های بازار عمده‌فروشی و خرده‌فروشی",
          "جستجو، مقایسه محصول، چت، اعلان‌ها و ابزارهای ادمین",
        ],
        imageAlt: "نمای موبایل رابط بازار Nerkhin",
      },
      {
        ...commonProjects.dentia,
        category: "عملیات کلینیک",
        description:
          "یک رابط فارسی راست‌به‌چپ برای کلینیک دندان‌پزشکی که رزرو عمومی وقت را با جریان‌های کاری کارکنان برای بیماران، پرداخت، انبار و صف زنده کلینیک ترکیب می‌کند.",
        highlights: [
          "سایت عمومی کلینیک و رزرو آنلاین",
          "داشبورد نقش‌محور و به‌روزرسانی صف زنده",
        ],
        imageAlt: "صفحه فرود پلتفرم فارسی کلینیک دندان‌پزشکی Dentia",
      },
    ],
    contactItems: [
      { label: "ایمیل", value: contactValues.email, href: contactHrefs.email },
      { label: "وب‌سایت", value: contactValues.website, href: contactHrefs.website },
      { label: "GitHub", value: contactValues.github, href: contactHrefs.github },
    ],
  },
  ku: {
    locale: "ku",
    metadata: {
      title: "شارارە کەشوەری - پەرەپێدەری فرۆنت‌ئێند و خوێندکاری IT",
      description:
        "پەرەپێدەری فرۆنت‌ئێند و خوێندکاری تەکنەلۆژیای زانیاری، بە تیشک خستنەسەر ڕووکاری وێبی وەڵامدەرەوە بە React، Next.js و TypeScript.",
      ogLocale: "ku",
      imageAlt: "پێکهاتەی وێنەیی لە پۆرتفۆلیۆی فرۆنت‌ئێندی شارارە کەشوەری",
    },
    structuredData: {
      jobTitle: "پەرەپێدەری فرۆنت‌ئێند و خوێندکاری تەکنەلۆژیای زانیاری",
      addressCountry: "ئێران",
      knowsLanguage: ["فارسی", "ئینگلیزی", "ئەڵمانی"],
    },
    ui: {
      skipToContent: "بڕۆ بۆ ناوەڕۆک",
      loadingPortfolio: "پۆرتفۆلیۆ بار دەکرێت",
    },
    navbar: {
      brandAria: "شارارە کەشوەری، گەڕانەوە بۆ سەرەتا",
      brandName: "شارارە کەشوەری",
      roleLine: "پەرەپێدەری فرۆنت‌ئێند - خوێندکاری IT",
      openNavigation: "کردنەوەی ناوبەری",
      closeNavigation: "داخستنی ناوبەری",
      language: "زمان",
      command: {
        trigger: "ناوبەری",
        shortcut: "Ctrl K",
        title: "ناوبەری لەم پۆرتفۆلیۆیەدا",
        description: "بەشێک هەڵبژێرە بۆ گواستنەوە.",
        placeholder: "بڕۆ بۆ بەش...",
        close: "داخستنی مێنیوی ناوبەری",
        empty: "هیچ بەشێک نەدۆزرایەوە.",
        group: "بەشەکان",
      },
    },
    navigation: [
      { label: "پرۆژەکان", href: "#projects" },
      { label: "دەربارەی من", href: "#about" },
      { label: "کارامەییەکان", href: "#skills" },
      { label: "ئەزموون", href: "#experience" },
      { label: "پەیوەندی", href: "#contact" },
    ],
    hero: {
      eyebrow: "پەرەپێدەری فرۆنت‌ئێند - خوێندکاری IT",
      nameLines: ["شارارە", "کەشوەری"],
      summary:
        "ڕووکاری وێبی وەڵامدەرەوە و بەکارهێنەردۆست بە React، Next.js و TypeScript دروست دەکەم؛ بە تیشک خستنەسەر جێبەجێکردنی پاک و ئەزموونی بەکارهێنەری بیرکراو.",
      primaryAction: "بینینی پرۆژەکان",
      secondaryAction: "پەیوەندی بکە",
      githubAction: "GitHub",
      stackLabel: "ستاکی فرۆنت‌ئێند",
      stackItems: ["ڕووکاری React", "گەیاندنی Next.js", "کۆمپیۆنێنتی TypeScript"],
      meta: [
        "ئێران - ئامادەم بۆ ڕۆڵی جونیۆری ڕیمۆت",
        "فارسی - ئینگلیزی - ئەڵمانی",
        "کارە هەڵبژێردراوەکان لە خوارەوە",
      ],
    },
    projectsSection: {
      index: "کار / پرۆژەکان",
      title: "ڕووکارەکان بە قورسایی ڕاستەقینەی بەرهەم.",
      description:
        "پرۆژە هەڵبژێردراوەکانی فرۆنت‌ئێند لە بواری کاری بازرگانی، فێربوونی زمان، دۆزینەوەی بازاڕ و بەڕێوەبردنی کلینیک، بە سنووری ڕوون و وێنەی پشتڕاستکراوەوە کاتێک پەڕەی زیندوو هەیە.",
      cardLabels: {
        project: "پرۆژە",
        visitLiveSite: "بینینی سایتی زیندوو",
        responsiveSurface: "ڕووکاری وەڵامدەرەوە",
        interfaceLabel: "ڕووکار",
      },
    },
    about: {
      index: "دەربارە / پرۆفایل",
      title: "ڕووکارێکی ڕوون، بە وردی دروستکراو.",
      statement: "گرنگی دەدەم بەو ساتەی ڕووکارێک بۆ بەکارهێنەر ئاشکرا و سروشتی دەبێت.",
      facts: {
        location: "ئێران - ئامادەم بۆ ستاژ و ڕۆڵی جونیۆر",
        languages: "فارسی - ئینگلیزی - ئەڵمانی",
      },
      paragraphs: [
        "من پەرەپێدەری فرۆنت‌ئێند و خوێندکاری تەکنەلۆژیای زانیاریم و سەرنج دەدەمە دروستکردنی وێب ئەپلیکەیشنی مۆدێرن، وەڵامدەرەوە و بەکارهێنەردۆست.",
        "زۆرجار بە React، Next.js، TypeScript و ئامرازە مۆدێرنەکانی UI کار دەکەم. کۆدی ڕوون، کۆمپیۆنێنتی دووبارەبەکارهێنراو، ئەزموونی بەکارهێنەری بیرکراو و ڕووکارێک کە لە قەبارە جیاوازەکانی شاشەدا باش کار بکات بۆم گرنگە.",
        "بەدوای ستاژی ڕیمۆت و ڕۆڵی جونیۆری فرۆنت‌ئێنددا دەگەڕێم کە بتوانم بەشداری بەرهەمی ڕاستەقینە بکەم، کارامەییەکانم پەرە پێبدەم و لەگەڵ تیمی نێودەوڵەتی کار بکەم.",
      ],
    },
    skills: {
      index: "کارامەیی / ئامرازەکان",
      title: "ئامرازخانەیەکی کرداری بۆ فرۆنت‌ئێند.",
      description:
        "نەخشەیەکی خێرا لەو ئامرازانەی ئێستا بۆ پەرەپێدانی ڕووکار، مامەڵەکردن لەگەڵ داتا، دیزاین سیستەم و ڕێکاری یارمەتی‌دراوی AI بەکاریان دەهێنم.",
    },
    experience: {
      index: "ئەزموون / ڕیمۆت",
      title: "ئەزموونی پیشەیی لە تیمەکانی React.",
      description:
        "کاری فرۆنت‌ئێندی ڕیمۆت بە تیشک خستنەسەر ڕووکاری وەڵامدەرەوە، کۆمپیۆنێنتی Reactی دووبارەبەکارهێنراو و جێبەجێکردنی TypeScript.",
      role: "Junior Frontend Developer",
      company: "pt-ecommerce",
      employmentType: "Remote",
      startedLabel: "دەستپێکردن",
      startDate: "2025",
      responsibilities: [
        "دروستکردنی ڕووکاری وەڵامدەرەوە",
        "پەرەپێدانی کۆمپیۆنێنتی Reactی دووبارەبەکارهێنراو",
        "بەکارهێنانی TypeScript لە جێبەجێکردنی فرۆنت‌ئێند",
        "جێبەجێکردنی دیزاینی UI",
        "هاوکاری لەگەڵ تیمی پەرەپێدانی ڕیمۆت",
      ],
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      watermark: "کار",
    },
    education: {
      label: "خوێندن",
      title: "ڕێڕەوی فێربوون",
      items: [
        {
          degree: "بەکالۆریۆس لە ئەندازیاری تەکنەلۆژیای زانیاری",
          status: "لە بەردەوامیدایە",
          date: "چاوەڕوانکراوی دەرچوون: 2027",
        },
        {
          degree: "دیپلۆمی هاوتا لە ئەندازیاری نەرمەکاڵا",
          status: "بڕوانامەی پێشوو",
        },
      ],
    },
    contact: {
      eyebrow: "پەیوەندی / هەنگاوی داهاتوو",
      title: "با شتێکی ڕوون و بەسوود دروست بکەین.",
      description:
        "ئامادەم بۆ ستاژی ڕیمۆت، ڕۆڵی جونیۆری فرۆنت‌ئێند و هەلی هاوکاری لەگەڵ تیمە نێودەوڵەتییەکان. باشترین ڕێگای پەیوەندی ئیمەیڵە.",
      emailAction: "ئیمەیڵ بۆ شارارە",
    },
    footer: {
      identity: "شارارە کەشوەری - پەرەپێدەری فرۆنت‌ئێند - خوێندکاری IT",
      stack: "React - Next.js - TypeScript",
    },
    skillGroups: [
      {
        title: "بنەماکانی فرۆنت‌ئێند",
        skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
        tone: "blue",
        featured: true,
        tall: true,
      },
      {
        title: "فریم‌وۆرکەکان",
        skills: ["React", "Next.js"],
        tone: "mint",
        featured: true,
      },
      {
        title: "ستایلینگ",
        skills: ["Tailwind CSS", "Responsive Design"],
        tone: "amber",
      },
      {
        title: "داتا و API",
        skills: ["React Query", "Axios", "REST APIs"],
        tone: "coral",
      },
      {
        title: "باکئێند و Authی بنەڕەتی",
        skills: ["Clerk", "Convex"],
        tone: "violet",
      },
      {
        title: "ئامرازەکان",
        skills: ["Git"],
        tone: "blue",
      },
      {
        title: "UI و دیزاین",
        skills: ["Figma", "Shadcn UI", "Radix UI", "بنەماکانی UI/UX"],
        tone: "mint",
        featured: true,
      },
      {
        title: "ڕێکارەکانی AI",
        skills: ["ئامرازی دیزاینی AI", "ئامرازی دروستکردنی وێنە", "کاری یارمەتی‌دراوی AI"],
        tone: "amber",
      },
    ],
    languageItems: [
      { language: "فارسی", level: "زمانی دایک" },
      { language: "ئینگلیزی", level: "مامناوەند - ئامادەکاری بۆ IELTS" },
      { language: "ئەڵمانی", level: "A2.1" },
    ],
    careerGoals: [
      "بەهێزکردنی کارامەییەکانی ئەندازیاری فرۆنت‌ئێند",
      "بەشداری لە تیمە ڕیمۆتە نێودەوڵەتییەکان",
      "دروستکردنی وێب ئەپلیکەیشنی باوەڕپێکراو و کوالیتی بەرز",
      "وەرگرتنی ئەزموون لە ژینگەی تەکنەلۆژیای جیهانی",
      "بەردەوامبوون لە فێربوونی وێبی مۆدێرن و ڕێکاری یارمەتی‌دراوی AI",
    ],
    projects: [
      {
        ...commonProjects.rekar,
        category: "پلاتفۆڕمی بازرگانی",
        description:
          "ڕووکاری فارسیی راست‌ بۆ چەپ بۆ ژمێریاری هەوری و بەڕێوەبردنی کار، لەگەڵ ڕێکارەکانی ژمێریاری، فرۆشتن، کۆگا، خەزێنە، مووچە، ڕاپۆرت و دەستگەیشتنی تیم.",
        highlights: [
          "پێکهاتەی ئەپلیکەیشنی فرە-کرێچی",
          "ڕووکاری RTL لەگەڵ ڕێکارەکانی فرە-کۆمپانیا و دەستگەیشتنی ڕۆڵ-بنەما",
        ],
        imageAlt: "پەڕەی سەرەکی Rekar بۆ پلاتفۆڕمی ژمێریاری فارسی",
      },
      {
        ...commonProjects.leksuu,
        category: "پلاتفۆڕمی فێربوون",
        description:
          "ڕووکاری فێربوونی زمان بۆ قسەکەرانی فارسی و کوردی، لەسەر بنەمای چیرۆکی کورت، مەشقی قسەکردن، وانەی گونجاو، فیدباکی دەنگدان و پێداچوونەوەی ڕێنیشاندراو.",
        highlights: [
          "ئەزموونی زمانی فارسی، کوردی و ئینگلیزی",
          "فێربوونی کارلێک، دەنگدان و ڕێکارەکانی پێداچوونەوە",
        ],
        imageAlt: "پەڕەی ئینگلیزی Leksuu بۆ پلاتفۆڕمی فێربوونی زمان",
      },
      {
        ...commonProjects.nerkhin,
        category: "پلاتفۆڕمی بازاڕ",
        description:
          "بازاڕ و پلاتفۆڕمی دۆزینەوەی نرخ بە فارسی RTL بۆ بازرگانی ئامێری ماڵ، کە فرۆشیاری کۆ و تاکەفرۆش بە گەڕان، بەراورد، پێشنیار، هەژمار و کاری ئەدمین پەیوەست دەکات.",
        highlights: [
          "ڕێکارەکانی بازاڕی کۆفرۆشی و تاکەفرۆشی",
          "گەڕان، بەراوردی بەرهەم، چات، ئاگادارکردنەوە و ئامرازی ئەدمین",
        ],
        imageAlt: "پێشبینی ڕووکاری مۆبایلی بازاڕی Nerkhin",
      },
      {
        ...commonProjects.dentia,
        category: "کاری کلینیک",
        description:
          "ڕووکاری فارسیی راست‌ بۆ چەپ بۆ کلینیکی ددان، کە حجزکردنی گشتی کات لەگەڵ ڕێکارەکانی ستاف بۆ نەخۆش، پارەدان، کۆگا و ڕیزی زیندووی کلینیک یەکدەخات.",
        highlights: [
          "سایتی گشتی کلینیک و حجزکردنی ئۆنلاین",
          "داشبۆردی ڕۆڵ-بنەما و نوێبوونەوەی ڕیزی زیندوو",
        ],
        imageAlt: "پەڕەی سەرەکی Dentia بۆ پلاتفۆڕمی فارسیی کلینیکی ددان",
      },
    ],
    contactItems: [
      { label: "ئیمەیڵ", value: contactValues.email, href: contactHrefs.email },
      { label: "وێبسایت", value: contactValues.website, href: contactHrefs.website },
      { label: "GitHub", value: contactValues.github, href: contactHrefs.github },
    ],
  },
  ar: {
    locale: "ar",
    metadata: {
      title: "شراره كشوري - مطورة واجهات أمامية وطالبة تقنية معلومات",
      description:
        "مطورة واجهات أمامية وطالبة تقنية معلومات تركز على واجهات ويب متجاوبة مبنية باستخدام React وNext.js وTypeScript.",
      ogLocale: "ar",
      imageAlt: "بنية بصرية مستخدمة في معرض أعمال شراره كشوري للواجهات الأمامية",
    },
    structuredData: {
      jobTitle: "مطورة واجهات أمامية وطالبة تقنية معلومات",
      addressCountry: "إيران",
      knowsLanguage: ["الفارسية", "الإنجليزية", "الألمانية"],
    },
    ui: {
      skipToContent: "تخطي إلى المحتوى",
      loadingPortfolio: "جار تحميل معرض الأعمال",
    },
    navbar: {
      brandAria: "شراره كشوري، العودة إلى أعلى الصفحة",
      brandName: "شراره كشوري",
      roleLine: "مطورة واجهات أمامية - طالبة IT",
      openNavigation: "فتح التنقل",
      closeNavigation: "إغلاق التنقل",
      language: "اللغة",
      command: {
        trigger: "تنقل",
        shortcut: "Ctrl K",
        title: "التنقل في معرض الأعمال",
        description: "اختر قسما للانتقال إليه.",
        placeholder: "انتقل إلى قسم...",
        close: "إغلاق قائمة التنقل",
        empty: "لم يتم العثور على قسم.",
        group: "الأقسام",
      },
    },
    navigation: [
      { label: "المشاريع", href: "#projects" },
      { label: "نبذة", href: "#about" },
      { label: "المهارات", href: "#skills" },
      { label: "الخبرة", href: "#experience" },
      { label: "التواصل", href: "#contact" },
    ],
    hero: {
      eyebrow: "مطورة واجهات أمامية - طالبة IT",
      nameLines: ["شراره", "كشوري"],
      summary:
        "أبني واجهات ويب متجاوبة وسهلة الاستخدام باستخدام React وNext.js وTypeScript، مع التركيز على التنفيذ النظيف وتجربة المستخدم المدروسة.",
      primaryAction: "عرض المشاريع",
      secondaryAction: "تواصل معي",
      githubAction: "GitHub",
      stackLabel: "تقنيات الواجهة",
      stackItems: ["واجهات React", "تسليم Next.js", "مكونات TypeScript"],
      meta: [
        "إيران - منفتحة على أدوار جونيور عن بعد",
        "الفارسية - الإنجليزية - الألمانية",
        "الأعمال المختارة أدناه",
      ],
    },
    projectsSection: {
      index: "الأعمال / المشاريع",
      title: "واجهات لها وزن منتج حقيقي.",
      description:
        "مشاريع واجهات أمامية مختارة في عمليات الأعمال، وتعلم اللغة، واكتشاف السوق، وإدارة العيادات، مع نطاق واضح ولقطات شاشة موثقة عندما تكون الصفحات الحية متاحة.",
      cardLabels: {
        project: "مشروع",
        visitLiveSite: "زيارة الموقع",
        responsiveSurface: "واجهة متجاوبة",
        interfaceLabel: "واجهة",
      },
    },
    about: {
      index: "نبذة / الملف الشخصي",
      title: "واجهات واضحة مبنية بعناية.",
      statement: "أهتم باللحظة التي تصبح فيها الواجهة واضحة وبديهية للمستخدم.",
      facts: {
        location: "إيران - منفتحة على التدريب وأدوار الجونيور",
        languages: "الفارسية - الإنجليزية - الألمانية",
      },
      paragraphs: [
        "أنا مطورة واجهات أمامية وطالبة تقنية معلومات أركز على بناء تطبيقات ويب حديثة ومتجاوبة وسهلة الاستخدام.",
        "أعمل أساسا مع React وNext.js وTypeScript وأدوات UI الحديثة. أهتم بالكود الواضح، والمكونات القابلة لإعادة الاستخدام، وتجربة المستخدم المدروسة، والواجهات التي تتكيف مع أحجام الشاشات المختلفة.",
        "أبحث عن تدريب عن بعد وأدوار جونيور في الواجهات الأمامية حيث يمكنني المساهمة في منتجات حقيقية، وتطوير مهاراتي، والتعاون مع فرق دولية.",
      ],
    },
    skills: {
      index: "المهارات / الأدوات",
      title: "مجموعة أدوات عملية للواجهة الأمامية.",
      description:
        "خريطة سريعة للأدوات التي أستخدمها حاليا في تطوير الواجهات، ومعالجة البيانات، وأنظمة التصميم، وسير العمل المدعوم بالذكاء الاصطناعي.",
    },
    experience: {
      index: "الخبرة / عن بعد",
      title: "ممارسة مهنية داخل فرق React.",
      description:
        "عمل واجهات أمامية عن بعد يركز على الواجهات المتجاوبة، ومكونات React القابلة لإعادة الاستخدام، والتنفيذ باستخدام TypeScript.",
      role: "Junior Frontend Developer",
      company: "pt-ecommerce",
      employmentType: "Remote",
      startedLabel: "بدأت",
      startDate: "2025",
      responsibilities: [
        "بناء واجهات متجاوبة",
        "تطوير مكونات React قابلة لإعادة الاستخدام",
        "استخدام TypeScript في تنفيذ الواجهة الأمامية",
        "تنفيذ تصاميم UI",
        "التعاون مع فريق تطوير عن بعد",
      ],
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      watermark: "عمل",
    },
    education: {
      label: "التعليم",
      title: "مسار التعلم",
      items: [
        {
          degree: "بكالوريوس هندسة تقنية المعلومات",
          status: "قيد الدراسة",
          date: "التخرج المتوقع: 2027",
        },
        {
          degree: "دبلوم مشارك في هندسة البرمجيات",
          status: "درجة سابقة",
        },
      ],
    },
    contact: {
      eyebrow: "التواصل / الخطوة التالية",
      title: "لنبن شيئا واضحا ومفيدا.",
      description:
        "أنا منفتحة على التدريب عن بعد، وأدوار الجونيور في الواجهات الأمامية، وفرص التعاون مع فرق دولية. البريد الإلكتروني هو أفضل طريقة للتواصل معي.",
      emailAction: "راسل شراره",
    },
    footer: {
      identity: "شراره كشوري - مطورة واجهات أمامية - طالبة تقنية معلومات",
      stack: "React - Next.js - TypeScript",
    },
    skillGroups: [
      {
        title: "أساسيات الواجهة الأمامية",
        skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
        tone: "blue",
        featured: true,
        tall: true,
      },
      {
        title: "أطر العمل",
        skills: ["React", "Next.js"],
        tone: "mint",
        featured: true,
      },
      {
        title: "التنسيق",
        skills: ["Tailwind CSS", "Responsive Design"],
        tone: "amber",
      },
      {
        title: "البيانات وAPI",
        skills: ["React Query", "Axios", "REST APIs"],
        tone: "coral",
      },
      {
        title: "الخلفية وAuth الأساسي",
        skills: ["Clerk", "Convex"],
        tone: "violet",
      },
      {
        title: "الأدوات",
        skills: ["Git"],
        tone: "blue",
      },
      {
        title: "UI والتصميم",
        skills: ["Figma", "Shadcn UI", "Radix UI", "مبادئ UI/UX"],
        tone: "mint",
        featured: true,
      },
      {
        title: "سير عمل AI",
        skills: ["أدوات تصميم AI", "أدوات توليد الصور", "سير عمل بمساعدة AI"],
        tone: "amber",
      },
    ],
    languageItems: [
      { language: "الفارسية", level: "اللغة الأم" },
      { language: "الإنجليزية", level: "متوسط - التحضير لاختبار IELTS" },
      { language: "الألمانية", level: "A2.1" },
    ],
    careerGoals: [
      "تعزيز مهاراتي في هندسة الواجهة الأمامية",
      "المساهمة في فرق دولية تعمل عن بعد",
      "بناء تطبيقات ويب موثوقة وعالية الجودة",
      "اكتساب خبرة في بيئات تقنية عالمية",
      "مواصلة تعلم الويب الحديث وسير العمل المدعوم بالذكاء الاصطناعي",
    ],
    projects: [
      {
        ...commonProjects.rekar,
        category: "منصة أعمال",
        description:
          "واجهة فارسية من اليمين إلى اليسار للمحاسبة السحابية وإدارة الأعمال، مع مسارات للمحاسبة والمبيعات والمخزون والخزينة والرواتب والتقارير ووصول الفريق.",
        highlights: [
          "بنية تطبيق متعددة المستأجرين",
          "واجهة RTL مع مسارات وصول متعددة الشركات وقائمة على الأدوار",
        ],
        imageAlt: "صفحة هبوط Rekar لمنصة محاسبة فارسية",
      },
      {
        ...commonProjects.leksuu,
        category: "منصة تعليم",
        description:
          "واجهة لتعلم اللغة للمتحدثين بالفارسية والكردية، مبنية حول القصص القصيرة، وتمارين التحدث، والدروس المتكيفة، وملاحظات النطق، والمراجعة الموجهة.",
        highlights: [
          "تجربة لغوية بالفارسية والكردية والإنجليزية",
          "مسارات تعلم تفاعلية للنطق والمراجعة",
        ],
        imageAlt: "صفحة هبوط Leksuu الإنجليزية لمنصة تعلم اللغة",
      },
      {
        ...commonProjects.nerkhin,
        category: "منصة سوق",
        description:
          "سوق فارسي RTL ومنصة لاكتشاف الأسعار في تجارة الأجهزة المنزلية، تربط تجار الجملة والتجزئة بالبحث والمقارنة والعروض والحسابات وعمليات الإدارة.",
        highlights: [
          "مسارات سوق للجملة والتجزئة",
          "بحث ومقارنة منتجات ومحادثة وإشعارات وأدوات إدارة",
        ],
        imageAlt: "معاينة واجهة سوق Nerkhin على الهاتف",
      },
      {
        ...commonProjects.dentia,
        category: "عمليات العيادة",
        description:
          "واجهة فارسية RTL لعيادة أسنان تجمع حجز المواعيد العام مع مسارات عمل الموظفين للمرضى والفوترة والمخزون وقائمة انتظار العيادة المباشرة.",
        highlights: [
          "موقع عيادة عام وحجز عبر الإنترنت",
          "لوحة تحكم قائمة على الأدوار وتحديثات قائمة انتظار مباشرة",
        ],
        imageAlt: "صفحة هبوط Dentia لمنصة عيادة أسنان فارسية",
      },
    ],
    contactItems: [
      { label: "البريد", value: contactValues.email, href: contactHrefs.email },
      { label: "الموقع", value: contactValues.website, href: contactHrefs.website },
      { label: "GitHub", value: contactValues.github, href: contactHrefs.github },
    ],
  },
} as const satisfies Record<Locale, PortfolioContent>;

export function getPortfolioContent(locale: Locale): PortfolioContent {
  return portfolioContent[locale];
}

export const navigation = portfolioContent.en.navigation;
export const skillGroups = portfolioContent.en.skillGroups;
export const languageItems = portfolioContent.en.languageItems;
export const careerGoals = portfolioContent.en.careerGoals;
export const experience = portfolioContent.en.experience;
export const educationItems = portfolioContent.en.education.items;
export const projects = portfolioContent.en.projects;
export const contactItems = portfolioContent.en.contactItems;
