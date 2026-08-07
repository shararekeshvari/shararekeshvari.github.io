import { Portfolio } from "@/components/portfolio";
import {
  GITHUB_URL,
  PERSON_EMAIL,
  PERSON_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: PERSON_NAME,
      jobTitle: "Frontend Developer",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      email: PERSON_EMAIL,
      sameAs: [GITHUB_URL],
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
        "Responsive Design",
        "RTL and LTR Interfaces",
        "REST APIs",
        "WebSocket",
        "Figma",
      ],
      knowsLanguage: ["Persian", "English", "German"],
      mainEntityOfPage: {
        "@id": `${SITE_URL}/#website`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      author: {
        "@id": `${SITE_URL}/#person`,
      },
    },
  ],
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
