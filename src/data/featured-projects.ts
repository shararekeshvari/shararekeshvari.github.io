import type { Locale, ProjectItem } from "@/data/portfolio";

const projects = [
  { title: "Rekar", image: "/images/projects/rekar-live.jpg", siteUrl: "rekar.ir", liveUrl: "https://rekar.ir/", tech: [] },
  { title: "Selin Gallery", image: "/images/projects/selin-planned.jpg", siteUrl: "sellingallery.ir", liveUrl: "https://sellingallery.ir/", tech: [] },
  { title: "Di Studio", image: "/images/projects/distudio-planned.jpg", siteUrl: "distudio.ir", liveUrl: "https://distudio.ir/", tech: [] },
  { title: "Dentia", image: "/images/projects/dentia-planned.jpg", siteUrl: "drsalamrahimi.ir", liveUrl: "https://drsalamrahimi.ir/", tech: [] },
  { title: "Ajil Moloudi", image: "/images/projects/ajil-planned.jpg", siteUrl: "ajilmoloudi.ir", liveUrl: "https://ajilmoloudi.ir/", tech: [] },
] as const;

type Copy = {
  section: string;
  categories: readonly [string, string, string, string, string];
  descriptions: readonly [string, string, string, string, string];
  planned: string;
  pending: string;
};

const copy: Record<Locale, Copy> = {
  en: {
    section: "Selected work across business software, online retail, creative services, and dental care. Planned designs and previews awaiting publication are clearly labeled.",
    categories: ["Business platform", "Online gallery", "Creative studio", "Dental clinic", "Nut store"],
    descriptions: [
      "A Persian cloud accounting platform connecting invoicing, inventory, and day-to-day business operations.",
      "An online gallery project. The site preview will be added when its design is available.",
      "A creative studio built by two collaborators, presenting identity, content, websites, and digital work. A new visual direction is on the way.",
      "A dental clinic website with a planned emerald-green design, service previews, and online appointment booking.",
      "A nut and dried-fruit store with a warm, product-led shopping experience. The preview reflects its planned visual direction.",
    ],
    planned: "Upcoming design preview — the live site may differ",
    pending: "Site preview coming soon",
  },
  de: {
    section: "Ausgewählte Arbeiten zu Business-Software, Onlinehandel, Kreativleistungen und Zahnmedizin. Geplante Designs sind gekennzeichnet.",
    categories: ["Business-Plattform", "Online-Galerie", "Kreativstudio", "Zahnklinik", "Nuss-Shop"],
    descriptions: [
      "Eine persische Cloud-Buchhaltungsplattform für Rechnungen, Lager und tägliche Geschäftsabläufe.",
      "Ein Online-Galerieprojekt. Eine Vorschau folgt, sobald das Design verfügbar ist.",
      "Ein Kreativstudio von zwei Partnern für Identität, Inhalte, Websites und digitale Erlebnisse. Ein neues Design ist in Arbeit.",
      "Eine Zahnklinik-Website mit geplantem smaragdgrünem Design, Leistungen und Online-Terminbuchung.",
      "Ein Shop für Nüsse und Trockenfrüchte mit einem warmen Einkaufserlebnis. Die Vorschau zeigt die geplante Gestaltung.",
    ],
    planned: "Geplantes Design — die Live-Seite kann abweichen",
    pending: "Website-Vorschau folgt",
  },
  fr: {
    section: "Une sélection de projets en logiciels métiers, commerce, création et soins dentaires. Les designs à venir sont indiqués.",
    categories: ["Plateforme métier", "Galerie en ligne", "Studio créatif", "Clinique dentaire", "Boutique de fruits secs"],
    descriptions: [
      "Une plateforme persane de comptabilité cloud pour les factures, les stocks et les opérations quotidiennes.",
      "Un projet de galerie en ligne. Son aperçu sera ajouté lorsque le design sera disponible.",
      "Un studio créatif de deux collaborateurs dédié à l'identité, au contenu, aux sites web et au numérique. Un nouveau design arrive.",
      "Un site de clinique dentaire avec un design vert émeraude prévu, des services et la prise de rendez-vous en ligne.",
      "Une boutique de noix et fruits secs à l'expérience chaleureuse. L'aperçu présente le design prévu.",
    ],
    planned: "Design à venir — le site actuel peut différer",
    pending: "Aperçu du site à venir",
  },
  tr: {
    section: "İş yazılımı, çevrimiçi mağazalar, yaratıcı hizmetler ve diş bakımı alanlarından seçili işler. Yaklaşan tasarımlar işaretlidir.",
    categories: ["İş platformu", "Çevrimiçi galeri", "Yaratıcı stüdyo", "Diş kliniği", "Kuruyemiş mağazası"],
    descriptions: [
      "Fatura, stok ve günlük iş süreçlerini birleştiren Farsça bulut muhasebe platformu.",
      "Bir çevrimiçi galeri projesi. Tasarım hazır olduğunda önizleme eklenecek.",
      "Kimlik, içerik, web sitesi ve dijital işler üreten iki kişilik yaratıcı stüdyo. Yeni görsel tasarım yolda.",
      "Zümrüt yeşili tasarımı, hizmetleri ve çevrimiçi randevusu planlanan diş kliniği sitesi.",
      "Sıcak ve ürün odaklı alışveriş deneyimine sahip kuruyemiş mağazası. Önizleme planlanan tasarımı gösterir.",
    ],
    planned: "Yaklaşan tasarım — canlı site farklı olabilir",
    pending: "Site önizlemesi yakında",
  },
  fa: {
    section: "گزیده‌ای از پروژه‌ها در نرم‌افزار کسب‌وکار، فروش آنلاین، خدمات خلاقانه و دندان‌پزشکی. طرح‌های در دست انتشار مشخص شده‌اند.",
    categories: ["پلتفرم کسب‌وکار", "گالری آنلاین", "استودیوی خلاق", "کلینیک دندان‌پزشکی", "فروشگاه آجیل"],
    descriptions: [
      "پلتفرم حسابداری ابری فارسی برای اتصال فاکتور، انبار و عملیات روزمرهٔ کسب‌وکار.",
      "پروژهٔ گالری آنلاین؛ پیش‌نمایش سایت پس از آماده‌شدن طرح اضافه می‌شود.",
      "استودیوی خلاقِ دونفره برای هویت بصری، محتوا، وب‌سایت و تجربه‌های دیجیتال؛ طراحی تازه در راه است.",
      "وب‌سایت کلینیک دندان‌پزشکی با طرح سبز زمردی، معرفی خدمات و نوبت‌دهی آنلاین.",
      "فروشگاه آجیل و خشکبار با تجربهٔ خرید گرم و محصول‌محور؛ پیش‌نمایش، مسیر طراحی برنامه‌ریزی‌شده را نشان می‌دهد.",
    ],
    planned: "پیش‌نمایش طرح جدید؛ سایت فعلی ممکن است متفاوت باشد",
    pending: "پیش‌نمایش سایت به‌زودی",
  },
  ku: {
    section: "هەڵبژاردەیەک لە پڕۆژەکانی نەرمەکاڵای بازرگانی، فرۆشتنی ئۆنلاین، خزمەتگوزاری داهێنەرانە و ددانپزیشکی. دیزاینە داهاتووەکان دیاریکراون.",
    categories: ["پلاتفۆرمی بازرگانی", "گەلەری ئۆنلاین", "ستودیۆی داهێنەرانە", "کلینیکی ددان", "فرۆشگای چەرەز"],
    descriptions: [
      "پلاتفۆرمی ژمێریاری هەوری بە زمانی فارسی بۆ فاکتور، کۆگا و کارە ڕۆژانەکانی بازرگانی.",
      "پڕۆژەی گەلەری ئۆنلاین؛ پێشبینینەکە کاتێک دیزاینەکە ئامادە بوو زیاد دەکرێت.",
      "ستودیۆیەکی داهێنەرانەی دوو کەسی بۆ ناسنامە، ناوەڕۆک، وێبسایت و ئەزموونی دیجیتاڵ. دیزاینی نوێ لە ڕێگادایە.",
      "وێبسایتی کلینیکی ددان بە دیزاینی سەوزی پلانکراو و وەرگرتنی کاتی سەردان بە ئۆنلاین.",
      "فرۆشگای چەرەز و میوەی وشک بە ئەزموونی کڕینی گەرم؛ پێشبینینەکە دیزاینی پلانکراو پیشان دەدات.",
    ],
    planned: "پێشبینینەی دیزاینی نوێ؛ وێبسایتی ئێستا لەوانەیە جیاواز بێت",
    pending: "پێشبینینەی وێبسایت بەزوویی دێت",
  },
  ar: {
    section: "أعمال مختارة في برمجيات الأعمال والتجارة الإلكترونية والخدمات الإبداعية وطب الأسنان. التصاميم المرتقبة موضحة.",
    categories: ["منصة أعمال", "معرض إلكتروني", "استوديو إبداعي", "عيادة أسنان", "متجر مكسرات"],
    descriptions: [
      "منصة محاسبة سحابية بالفارسية تربط الفواتير والمخزون والعمليات اليومية للأعمال.",
      "مشروع معرض إلكتروني؛ ستُضاف معاينة الموقع عند توفر التصميم.",
      "استوديو إبداعي يديره شريكان للهوية والمحتوى والمواقع والتجارب الرقمية. تصميم جديد قادم.",
      "موقع لعيادة أسنان بتصميم أخضر زمردي مرتقب، وعرض للخدمات وحجز المواعيد عبر الإنترنت.",
      "متجر للمكسرات والفواكه المجففة بتجربة تسوق دافئة تبرز المنتجات. تعرض المعاينة التصميم المخطط له.",
    ],
    planned: "معاينة للتصميم القادم؛ قد يختلف الموقع الحالي",
    pending: "معاينة الموقع قريبًا",
  },
};

const selinCopy: Record<Locale, { category: string; description: string; note: string }> = {
  en: { category: "Fashion storefront", description: "A Persian fashion storefront with a minimal editorial layout and an interactive clothing rack.", note: "Preview based on the supplied reference" },
  de: { category: "Modegeschäft", description: "Ein persischer Fashion-Shop mit minimalistischem Layout und interaktivem Kleiderständer.", note: "Vorschau nach der bereitgestellten Referenz" },
  fr: { category: "Boutique de mode", description: "Une boutique de mode persane au style éditorial minimal et avec un portant interactif.", note: "Aperçu basé sur la référence fournie" },
  tr: { category: "Moda mağazası", description: "Minimal editoryal tasarıma ve etkileşimli giysi askılığına sahip Farsça moda mağazası.", note: "Paylaşılan referansa dayalı önizleme" },
  fa: { category: "فروشگاه پوشاک", description: "فروشگاه پوشاک فارسی با چیدمان مینیمال و رگال تعاملی لباس‌ها.", note: "پیش‌نمایش بر اساس تصویر ارسالی" },
  ku: { category: "فرۆشگای جل و بەرگ", description: "فرۆشگای جل و بەرگی فارسی بە شێوازی سادە و رەگی جلەکان.", note: "پێشبینینە لەسەر بنەمای وێنەی نێردراو" },
  ar: { category: "متجر أزياء", description: "متجر أزياء فارسي بتصميم تحريري بسيط وعرض تفاعلي للملابس.", note: "معاينة مبنية على الصورة المقدمة" },
};

export const featuredProjectDescriptions: Record<Locale, string> = {
  en: copy.en.section, de: copy.de.section, fr: copy.fr.section, tr: copy.tr.section,
  fa: copy.fa.section, ku: copy.ku.section, ar: copy.ar.section,
};

function getProjects(locale: Locale): readonly ProjectItem[] {
  const value = copy[locale];
  return projects.map((project, index) => ({
      ...project,
      slot: String(index + 1),
      category: index === 1 ? selinCopy[locale].category : value.categories[index],
      description: index === 1 ? selinCopy[locale].description : value.descriptions[index],
      highlights: [],
      imageAlt: `${project.title} — ${index === 1 ? selinCopy[locale].category : value.categories[index]}`,
      previewNote: index === 1 ? selinCopy[locale].note : index > 1 ? value.planned : undefined,
  }));
}

export const featuredProjects: Record<Locale, readonly ProjectItem[]> = {
  en: getProjects("en"), de: getProjects("de"), fr: getProjects("fr"), tr: getProjects("tr"),
  fa: getProjects("fa"), ku: getProjects("ku"), ar: getProjects("ar"),
};
