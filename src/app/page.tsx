import { Portfolio } from "@/components/portfolio";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sharare Keshvari",
  jobTitle: "Frontend Developer and Information Technology Student",
  url: "https://shararekeshvari.ir",
  email: "mailto:shararekeshvari77@gmail.com",
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
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Portfolio />
    </>
  );
}
