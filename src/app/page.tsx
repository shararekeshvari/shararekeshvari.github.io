import { Portfolio } from "@/components/portfolio";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sharare Keshvari",
  jobTitle: "Frontend Developer and Information Technology Student",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  email: "mailto:shararekeshvari77@gmail.com",
  sameAs: ["https://github.com/shararekeshvari"],
  worksFor: {
    "@type": "Organization",
    name: "Rekar",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "Iran",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Git",
    "Responsive Design",
    "REST APIs",
    "Figma",
  ],
  knowsLanguage: ["Persian", "English", "German"],
  mainEntityOfPage: SITE_URL,
};

export default function Home() {
  const safeStructuredData = JSON.stringify(structuredData).replace(/</g, "\\u003c");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeStructuredData }}
      />
      <Portfolio />
    </>
  );
}
