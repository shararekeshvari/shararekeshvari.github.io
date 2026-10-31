"use client";

import { ArrowUpRight, Grid2X2, House, Mail, Menu, UserRound, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { interfaceLabels } from "@/data/editorial-copy";
import type { Locale, LocaleOption, NavbarLabels, NavigationItem } from "@/data/portfolio";

export function Navbar({ currentLocale, labels, localeOptions, navigation }: {
  currentLocale: Locale;
  labels: NavbarLabels;
  localeOptions: readonly LocaleOption[];
  navigation: readonly NavigationItem[];
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#top");
  const homeLabels: Record<Locale, string> = {
    en: "Home", de: "Start", fr: "Accueil", tr: "Ana sayfa",
    fa: "خانه", ku: "سەرەتا", ar: "الرئيسية",
  };
  const bottomItems = [
    { href: "#top", label: homeLabels[currentLocale], Icon: House },
    { href: "#projects", label: navigation.find(item => item.href === "#projects")?.label ?? "Projects", Icon: Grid2X2 },
    { href: "#about", label: navigation.find(item => item.href === "#about")?.label ?? "About", Icon: UserRound },
    { href: "#contact", label: navigation.find(item => item.href === "#contact")?.label ?? "Contact", Icon: Mail },
  ];

  useEffect(() => {
    const sections = ["top", "projects", "about", "skills", "experience", "contact"];
    const onScroll = () => {
      const current = sections.reduce((last, id) => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= window.innerHeight * 0.42 ? id : last;
      }, "top");
      setActiveSection(current === "skills" || current === "experience" ? "#about" : `#${current}`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <header className="site-header">
      <nav className="site-header-inner page-shell" aria-label={interfaceLabels[currentLocale].navigation}>
        <Link className="brand-mark" href="#top" aria-label={labels.brandAria}>
          <span className="brand-monogram">SK<span className="brand-dot">.</span></span>
          <span className="brand-caption">{labels.brandName}<small>{labels.roleLine}</small></span>
        </Link>
        <div className="desktop-navigation">
          {navigation.map(item => <Link key={item.href} href={item.href} className="nav-link">{item.label}</Link>)}
        </div>
        <div className="header-actions">
          <LanguageSwitcher currentLocale={currentLocale} label={labels.language} options={localeOptions} />
          <ThemeToggle locale={currentLocale} />
          <Link className="header-contact" href="#contact" aria-label={navigation.find(item => item.href === "#contact")?.label}><ArrowUpRight size={19} aria-hidden="true" /></Link>
          <button type="button" className="mobile-menu-button" onClick={() => setMenuOpen(open => !open)} aria-label={menuOpen ? labels.closeNavigation : labels.openNavigation} aria-expanded={menuOpen} aria-controls="mobile-navigation">
            {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
          </button>
        </div>
      </nav>
      <div id="mobile-navigation" className={`mobile-navigation ${menuOpen ? "is-open" : ""}`} hidden={!menuOpen}>
        {navigation.map(item => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ArrowUpRight size={18} aria-hidden="true" /></Link>)}
      </div>
    </header>
    <nav className="mobile-bottom-nav" aria-label={interfaceLabels[currentLocale].mobileNavigation}>
      {bottomItems.map(({ href, label, Icon }) => (
        <Link key={href} href={href} className={activeSection === href ? "is-active" : undefined} aria-current={activeSection === href ? "page" : undefined} onClick={() => { setActiveSection(href); setMenuOpen(false); }}>
          <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
          <span>{label}</span>
        </Link>
      ))}
    </nav>
    </>
  );
}
