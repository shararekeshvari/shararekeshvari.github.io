import type { Locale } from "@/data/portfolio";

type EditorialCopy = {
  role: string;
  title: string;
  description: string;
  location: string;
  heroSummary: string;
  aboutStatement: string;
  aboutParagraphs: readonly [string, string, string];
  projectsTitle: string;
  skillsTitle: string;
  skillsDescription: string;
  experienceTitle: string;
  experienceDescription: string;
  educationTitle: string;
  completedDegree: string;
  contactDescription: string;
  headings: {
    hero: readonly [string, string];
    projects: readonly [string, string];
    about: readonly [string, string];
    skills: readonly [string, string];
    experience: readonly [string, string];
    contact: readonly [string, string];
    location: string;
    languages: string;
    backToTop: string;
    carouselHint: string;
    allProjects: string;
  };
};

export const editorialCopy: Record<Locale, EditorialCopy> = {
  en: {
    role: "Frontend Developer",
    title: "Sharare Keshvari | Frontend Developer",
    description: "Sharare Keshvari builds responsive web experiences with React, Next.js and TypeScript. Explore selected projects and get in touch.",
    location: "Based in Iran · Available for remote work",
    heroSummary: "I build clear, responsive web experiences with React, Next.js and TypeScript. From first sketch to final detail, I care about how each interface feels to use.",
    aboutStatement: "Good interfaces make the next step feel natural.",
    aboutParagraphs: [
      "I’m a frontend developer who turns ideas and designs into polished websites and applications.",
      "I work with React, Next.js and TypeScript to build reusable components, accessible layouts and smooth experiences across screen sizes.",
      "I enjoy working with designers and developers to bring useful products to life. I’m available for remote projects and collaborations.",
    ],
    projectsTitle: "Selected projects, built for real use.",
    skillsTitle: "Tools I use to build for the web.",
    skillsDescription: "The technologies I use to develop interfaces, connect data and bring designs to life.",
    experienceTitle: "Frontend experience in a remote team.",
    experienceDescription: "Building responsive interfaces and reusable React components with a remote development team.",
    educationTitle: "Background",
    completedDegree: "Associate Degree in Software Engineering",
    contactDescription: "Have a project in mind or a frontend role to discuss? Send me an email and let’s talk.",
    headings: { hero: ["FRONTEND", "DEVELOPER"], projects: ["SELECTED", "WORK."], about: ["ABOUT", "ME."], skills: ["MY", "TOOLKIT."], experience: ["WORK", "& BACKGROUND."], contact: ["LET’S", "TALK."], location: "LOCATION", languages: "LANGUAGES", backToTop: "BACK TO TOP ↑", carouselHint: "DRAG / USE ARROW KEYS", allProjects: "All projects" },
  },
  de: {
    role: "Frontend-Entwicklerin",
    title: "Sharare Keshvari | Frontend-Entwicklerin",
    description: "Sharare Keshvari entwickelt responsive Websites und Anwendungen mit React, Next.js und TypeScript. Projekte ansehen und Kontakt aufnehmen.",
    location: "Im Iran · Offen für Remote-Arbeit",
    heroSummary: "Ich entwickle klare, responsive Weboberflächen mit React, Next.js und TypeScript. Dabei achte ich auf die Details, die eine Website angenehm und einfach bedienbar machen.",
    aboutStatement: "Gute Oberflächen machen den nächsten Schritt einfach.",
    aboutParagraphs: [
      "Ich bin Frontend-Entwicklerin und setze Ideen und Designs in durchdachte Websites und Anwendungen um.",
      "Mit React, Next.js und TypeScript entwickle ich wiederverwendbare Komponenten, zugängliche Layouts und Oberflächen, die auf jedem Bildschirm funktionieren.",
      "Ich arbeite gern mit Design- und Entwicklungsteams zusammen. Für Remote-Projekte und Kooperationen bin ich offen.",
    ],
    projectsTitle: "Ausgewählte Projekte für den echten Einsatz.",
    skillsTitle: "Meine Werkzeuge für das Web.",
    skillsDescription: "Technologien, mit denen ich Oberflächen entwickle, Daten anbinde und Designs umsetze.",
    experienceTitle: "Frontend-Erfahrung im Remote-Team.",
    experienceDescription: "Responsive Oberflächen und wiederverwendbare React-Komponenten in einem verteilten Entwicklungsteam.",
    educationTitle: "Werdegang",
    completedDegree: "Abschluss in Softwareentwicklung (Associate Degree)",
    contactDescription: "Du hast ein Projekt oder eine Frontend-Stelle im Blick? Schreib mir eine E-Mail – ich freue mich auf den Austausch.",
    headings: { hero: ["FRONTEND", "ENTWICKLUNG"], projects: ["AUSGEWÄHLTE", "PROJEKTE."], about: ["ÜBER", "MICH."], skills: ["MEINE", "WERKZEUGE."], experience: ["ARBEIT", "& WERDEGANG."], contact: ["LASS UNS", "REDEN."], location: "STANDORT", languages: "SPRACHEN", backToTop: "NACH OBEN ↑", carouselHint: "ZIEHEN / PFEILTASTEN NUTZEN", allProjects: "Alle Projekte" },
  },
  fr: {
    role: "Développeuse frontend",
    title: "Sharare Keshvari | Développeuse frontend",
    description: "Sharare Keshvari crée des sites et applications adaptables avec React, Next.js et TypeScript. Découvrez ses projets et contactez-la.",
    location: "Basée en Iran · Disponible à distance",
    heroSummary: "Je crée des expériences web claires et adaptées à tous les écrans avec React, Next.js et TypeScript. Je soigne autant la réalisation que le confort d’utilisation.",
    aboutStatement: "Une bonne interface rend chaque étape plus simple.",
    aboutParagraphs: [
      "Je suis développeuse frontend et je transforme des idées et des maquettes en sites et applications aboutis.",
      "Avec React, Next.js et TypeScript, je construis des composants réutilisables, des mises en page accessibles et des interfaces agréables sur tous les écrans.",
      "J’aime travailler avec les designers et les développeurs pour donner vie à des produits utiles. Je suis disponible pour des projets à distance et des collaborations.",
    ],
    projectsTitle: "Des projets pensés pour un usage réel.",
    skillsTitle: "Mes outils pour créer sur le web.",
    skillsDescription: "Les technologies que j’utilise pour créer des interfaces, relier les données et concrétiser les designs.",
    experienceTitle: "Expérience frontend en équipe à distance.",
    experienceDescription: "Création d’interfaces adaptables et de composants React réutilisables au sein d’une équipe à distance.",
    educationTitle: "Parcours",
    completedDegree: "Diplôme en génie logiciel (Associate Degree)",
    contactDescription: "Vous avez un projet ou un poste frontend à proposer ? Écrivez-moi, je serai ravie d’en discuter.",
    headings: { hero: ["DÉVELOPPEUSE", "FRONTEND"], projects: ["PROJETS", "CHOISIS."], about: ["À PROPOS", "DE MOI."], skills: ["MES", "OUTILS."], experience: ["EXPÉRIENCE", "& PARCOURS."], contact: ["PARLONS", "EN."], location: "LOCALISATION", languages: "LANGUES", backToTop: "RETOUR EN HAUT ↑", carouselHint: "FAIRE GLISSER / UTILISER LES FLÈCHES", allProjects: "Tous les projets" },
  },
  tr: {
    role: "Frontend Geliştirici",
    title: "Sharare Keshvari | Frontend Geliştirici",
    description: "Sharare Keshvari, React, Next.js ve TypeScript ile farklı ekranlara uyumlu web siteleri ve uygulamalar geliştiriyor. Projelerini inceleyin.",
    location: "İran’da · Uzaktan çalışmaya açık",
    heroSummary: "React, Next.js ve TypeScript ile anlaşılır, her ekrana uyum sağlayan web deneyimleri geliştiriyorum. Tasarımdan son ayrıntıya kadar kullanım kolaylığını önemsiyorum.",
    aboutStatement: "İyi bir arayüz, bir sonraki adımı kolaylaştırır.",
    aboutParagraphs: [
      "Fikirleri ve tasarımları özenli web sitelerine ve uygulamalara dönüştüren bir frontend geliştiriciyim.",
      "React, Next.js ve TypeScript ile yeniden kullanılabilir bileşenler, erişilebilir düzenler ve farklı ekranlarda iyi çalışan arayüzler geliştiriyorum.",
      "Tasarımcılar ve geliştiricilerle birlikte faydalı ürünler üretmeyi seviyorum. Uzaktan projelere ve iş birliklerine açığım.",
    ],
    projectsTitle: "Gerçek ihtiyaçlar için geliştirdiğim projeler.",
    skillsTitle: "Web geliştirmede kullandığım araçlar.",
    skillsDescription: "Arayüz geliştirmek, veriyi bağlamak ve tasarımları hayata geçirmek için kullandığım teknolojiler.",
    experienceTitle: "Uzaktan bir ekipte frontend deneyimi.",
    experienceDescription: "Uzaktan çalışan bir geliştirme ekibinde uyumlu arayüzler ve yeniden kullanılabilir React bileşenleri geliştirdim.",
    educationTitle: "Geçmişim",
    completedDegree: "Yazılım Mühendisliği Ön Lisans Derecesi",
    contactDescription: "Bir projeniz veya frontend pozisyonunuz mu var? Bana e-posta gönderin, konuşalım.",
    headings: { hero: ["FRONTEND", "GELİŞTİRİCİ"], projects: ["SEÇİLİ", "PROJELER."], about: ["HAKKIMDA", ""], skills: ["KULLANDIĞIM", "ARAÇLAR."], experience: ["DENEYİM", "& GEÇMİŞ."], contact: ["İLETİŞİME", "GEÇELİM."], location: "KONUM", languages: "DİLLER", backToTop: "YUKARI DÖN ↑", carouselHint: "SÜRÜKLEYİN / OK TUŞLARINI KULLANIN", allProjects: "Tüm projeler" },
  },
  fa: {
    role: "توسعه‌دهنده فرانت‌اند",
    title: "شراره کشوری | توسعه‌دهنده فرانت‌اند",
    description: "شراره کشوری با React، Next.js و TypeScript وب‌سایت‌ها و اپلیکیشن‌های واکنش‌گرا می‌سازد. نمونه‌کارها را ببینید و در تماس باشید.",
    location: "ساکن ایران · آماده همکاری دورکار",
    heroSummary: "با React، Next.js و TypeScript تجربه‌های وبی می‌سازم که در هر اندازه صفحه، روشن و خوش‌دست باشند. از ایده تا جزئیات نهایی، به راحتی استفاده اهمیت می‌دهم.",
    aboutStatement: "رابط خوب، قدم بعدی را برای کاربر ساده می‌کند.",
    aboutParagraphs: [
      "توسعه‌دهنده فرانت‌اند هستم و ایده‌ها و طرح‌ها را به وب‌سایت‌ها و اپلیکیشن‌های دقیق و کاربردی تبدیل می‌کنم.",
      "با React، Next.js و TypeScript کامپوننت‌های بازاستفاده‌پذیر، چیدمان‌های دسترس‌پذیر و رابط‌هایی می‌سازم که در موبایل و دسکتاپ خوب کار کنند.",
      "از همکاری با طراحان و توسعه‌دهندگان برای ساخت محصولات مفید لذت می‌برم و برای پروژه‌ها و همکاری‌های دورکار آماده‌ام.",
    ],
    projectsTitle: "نمونه‌کارهایی برای نیازهای واقعی.",
    skillsTitle: "ابزارهایی که با آن‌ها وب می‌سازم.",
    skillsDescription: "فناوری‌هایی که برای ساخت رابط کاربری، کار با داده و اجرای طرح‌ها به کار می‌برم.",
    experienceTitle: "تجربه فرانت‌اند در تیم دورکار.",
    experienceDescription: "ساخت رابط‌های واکنش‌گرا و کامپوننت‌های بازاستفاده‌پذیر React در کنار یک تیم توسعه دورکار.",
    educationTitle: "پیشینه",
    completedDegree: "کاردانی مهندسی نرم‌افزار",
    contactDescription: "برای همکاری روی یک پروژه یا گفت‌وگو درباره موقعیت فرانت‌اند، به من ایمیل بزنید.",
    headings: { hero: ["توسعه‌دهنده", "فرانت‌اند"], projects: ["نمونه‌کارهای", "منتخب"], about: ["درباره", "من"], skills: ["ابزارهای", "من"], experience: ["تجربه", "و پیشینه"], contact: ["با هم", "صحبت کنیم"], location: "موقعیت", languages: "زبان‌ها", backToTop: "بازگشت به بالا ↑", carouselHint: "بکشید یا از کلیدهای جهت‌دار استفاده کنید", allProjects: "همه پروژه‌ها" },
  },
  ku: {
    role: "پەرەپێدەری فرۆنت‌ئێند",
    title: "شارارە کەشوەری | پەرەپێدەری فرۆنت‌ئێند",
    description: "شارارە کەشوەری بە React و Next.js و TypeScript ماڵپەڕ و ئەپی وێبی گونجاو بۆ هەموو شاشەکان دروست دەکات. پڕۆژەکانی ببینە.",
    location: "لە ئێران · ئامادەی هاوکاری لە دوورەوە",
    heroSummary: "بە React و Next.js و TypeScript ئەزموونی وێبی ڕوون و گونجاو بۆ هەموو شاشەکان دروست دەکەم. لە بیرۆکەوە تا وردەکاریی کۆتایی، ئاسانیی بەکارهێنان بۆم گرنگە.",
    aboutStatement: "ڕووکاری باش هەنگاوی داهاتوو بۆ بەکارهێنەر ئاسان دەکات.",
    aboutParagraphs: [
      "پەرەپێدەری فرۆنت‌ئێندم و بیرۆکە و دیزاینەکان دەگۆڕم بۆ ماڵپەڕ و ئەپی وێبی بەسوود.",
      "بە React و Next.js و TypeScript پێکهاتەی دووبارەبەکارهێنراو و ڕووکاری گونجاو بۆ مۆبایل و کۆمپیوتەر دروست دەکەم.",
      "حەز دەکەم لەگەڵ دیزاینەر و پەرەپێدەرەکان کار بکەم بۆ دروستکردنی بەرهەمی بەسوود. بۆ پڕۆژە و هاوکاریی دوورەوە ئامادەم.",
    ],
    projectsTitle: "پڕۆژەکانم بۆ پێداویستیی ڕاستەقینە.",
    skillsTitle: "ئەو ئامرازانەی بۆ وێب بەکاریان دەهێنم.",
    skillsDescription: "تەکنەلۆژیاکانم بۆ دروستکردنی ڕووکار، پەیوەستکردنی داتا و جێبەجێکردنی دیزاین.",
    experienceTitle: "ئەزموونی فرۆنت‌ئێند لە تیمێکی دوورەوە.",
    experienceDescription: "دروستکردنی ڕووکاری گونجاو بۆ هەموو شاشەکان و پێکهاتەی React لەگەڵ تیمێکی پەرەپێدانی دوورەوە.",
    educationTitle: "پاشخان",
    completedDegree: "بڕوانامەی کاردانی لە ئەندازیاریی نەرمەکاڵا",
    contactDescription: "پڕۆژەیەکت هەیە یان دەتەوێت لەسەر کارێکی فرۆنت‌ئێند قسە بکەین؟ ئیمەیڵم بۆ بنێرە.",
    headings: { hero: ["پەرەپێدەری", "فرۆنت‌ئێند"], projects: ["پڕۆژە", "هەڵبژێردراوەکان"], about: ["دەربارەی", "من"], skills: ["ئامرازەکانی", "من"], experience: ["ئەزموون", "و پاشخان"], contact: ["با", "قسە بکەین"], location: "شوێن", languages: "زمانەکان", backToTop: "گەڕانەوە بۆ سەرەوە ↑", carouselHint: "ڕابکێشە یان کلیلی ئاراستەکان بەکاربهێنە", allProjects: "هەموو پڕۆژەکان" },
  },
  ar: {
    role: "مطورة واجهات أمامية",
    title: "شراره كشوري | مطورة واجهات أمامية",
    description: "تطوّر شراره كشوري مواقع وتطبيقات متجاوبة باستخدام React وNext.js وTypeScript. تصفّح أعمالها وتواصل معها.",
    location: "مقيمة في إيران · متاحة للعمل عن بُعد",
    heroSummary: "أطوّر تجارب ويب واضحة ومتجاوبة باستخدام React وNext.js وTypeScript. أهتم بسهولة الاستخدام في كل مرحلة، من الفكرة الأولى حتى أدق التفاصيل.",
    aboutStatement: "الواجهة الجيدة تجعل الخطوة التالية أسهل.",
    aboutParagraphs: [
      "أنا مطورة واجهات أمامية أحوّل الأفكار والتصاميم إلى مواقع وتطبيقات متقنة وسهلة الاستخدام.",
      "أستخدم React وNext.js وTypeScript لبناء مكوّنات قابلة لإعادة الاستخدام وواجهات تعمل بسلاسة على الهاتف والحاسوب.",
      "أستمتع بالتعاون مع المصممين والمطورين لصنع منتجات مفيدة، وأنا متاحة للمشاريع وفرص العمل عن بُعد.",
    ],
    projectsTitle: "مشاريع صُممت لتُستخدم فعلاً.",
    skillsTitle: "الأدوات التي أستخدمها لبناء الويب.",
    skillsDescription: "التقنيات التي أعتمد عليها لتطوير الواجهات وربط البيانات وتحويل التصاميم إلى مواقع حقيقية.",
    experienceTitle: "خبرة في تطوير الواجهات ضمن فريق يعمل عن بُعد.",
    experienceDescription: "تطوير واجهات متجاوبة ومكوّنات React قابلة لإعادة الاستخدام ضمن فريق تطوير يعمل عن بُعد.",
    educationTitle: "الخلفية المهنية",
    completedDegree: "دبلوم مشارك في هندسة البرمجيات",
    contactDescription: "هل لديك مشروع أو فرصة عمل في تطوير الواجهات؟ راسلني عبر البريد الإلكتروني لنتحدث.",
    headings: { hero: ["مطورة", "واجهات أمامية"], projects: ["أعمال", "مختارة"], about: ["نبذة", "عني"], skills: ["أدوات", "عملي"], experience: ["الخبرة", "والخلفية"], contact: ["لنتحدث", "معاً"], location: "الموقع", languages: "اللغات", backToTop: "العودة إلى الأعلى ↑", carouselHint: "اسحب أو استخدم مفاتيح الأسهم", allProjects: "جميع المشاريع" },
  },
};

export const interfaceLabels: Record<Locale, {
  portfolio: string;
  navigation: string;
  mobileNavigation: string;
  lightTheme: string;
  darkTheme: string;
  toggleTheme: string;
}> = {
  en: { portfolio: "PORTFOLIO", navigation: "Main navigation", mobileNavigation: "Mobile navigation", lightTheme: "Switch to light theme", darkTheme: "Switch to dark theme", toggleTheme: "Toggle theme" },
  de: { portfolio: "PORTFOLIO", navigation: "Hauptnavigation", mobileNavigation: "Mobile Navigation", lightTheme: "Helles Design aktivieren", darkTheme: "Dunkles Design aktivieren", toggleTheme: "Design wechseln" },
  fr: { portfolio: "PORTFOLIO", navigation: "Navigation principale", mobileNavigation: "Navigation mobile", lightTheme: "Activer le thème clair", darkTheme: "Activer le thème sombre", toggleTheme: "Changer de thème" },
  tr: { portfolio: "PORTFOLYO", navigation: "Ana menü", mobileNavigation: "Mobil menü", lightTheme: "Açık temaya geç", darkTheme: "Koyu temaya geç", toggleTheme: "Temayı değiştir" },
  fa: { portfolio: "نمونه‌کارها", navigation: "ناوبری اصلی", mobileNavigation: "ناوبری موبایل", lightTheme: "تغییر به زمینه روشن", darkTheme: "تغییر به زمینه تیره", toggleTheme: "تغییر زمینه" },
  ku: { portfolio: "پڕۆژەکان", navigation: "ڕێنیشاندەری سەرەکی", mobileNavigation: "ڕێنیشاندەری مۆبایل", lightTheme: "گۆڕین بۆ ڕەنگی ڕووناک", darkTheme: "گۆڕین بۆ ڕەنگی تاریک", toggleTheme: "گۆڕینی ڕەنگ" },
  ar: { portfolio: "أعمالي", navigation: "التنقل الرئيسي", mobileNavigation: "التنقل عبر الهاتف", lightTheme: "التبديل إلى المظهر الفاتح", darkTheme: "التبديل إلى المظهر الداكن", toggleTheme: "تبديل المظهر" },
};
