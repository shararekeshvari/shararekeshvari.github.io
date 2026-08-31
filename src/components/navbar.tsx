"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { CommandMenu } from "@/components/command-menu";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import type { Locale, LocaleOption, NavbarLabels, NavigationItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar({
  currentLocale,
  labels,
  localeOptions,
  navigation,
}: {
  currentLocale: Locale;
  labels: NavbarLabels;
  localeOptions: readonly LocaleOption[];
  navigation: readonly NavigationItem[];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: "-18% 0px -58% 0px",
        threshold: [0.08, 0.2, 0.38],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navigation]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6 sm:pt-4"
    >
      <nav
        aria-label="Main navigation"
        className={`mx-auto flex h-14 max-w-7xl items-center justify-between rounded-lg border px-2.5 transition-all duration-300 sm:px-3.5 ${
          scrolled
            ? "border-border bg-background/84 shadow-[0_1rem_3rem_color-mix(in_srgb,var(--ink)_18%,transparent)] backdrop-blur-xl"
            : "border-white/12 bg-ink/32 text-white backdrop-blur-xl"
        }`}
      >
        <Link
          href="#top"
          className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={labels.brandAria}
        >
          <span className="grid size-9 place-items-center rounded-md border border-current/20 bg-current/[0.08] font-mono text-xs font-semibold">
            SK
          </span>
          <span className="hidden text-sm font-semibold sm:inline">{labels.brandName}</span>
        </Link>

        <div className="hidden items-center gap-0.5 rounded-md border border-current/[0.1] bg-current/5 p-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={activeHref === item.href ? "page" : undefined}
              className={cn(
                "rounded px-3 py-1.5 text-sm text-current/65 transition-[background-color,color] duration-200 hover:bg-current/[0.08] hover:text-current focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                activeHref === item.href && "bg-current/[0.12] text-current",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <CommandMenu labels={labels.command} navigation={navigation} />
          <LanguageSwitcher
            currentLocale={currentLocale}
            label={labels.language}
            options={localeOptions}
          />
          <ThemeToggle />
          <Button
            variant="icon"
            className="md:hidden"
            aria-label={menuOpen ? labels.closeNavigation : labels.openNavigation}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-lg border border-border bg-background/96 p-2 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="border-b border-border px-3 py-3">
              <p className="font-display text-3xl leading-none">{labels.brandName}</p>
              <p className="mt-1 font-mono text-[11px] uppercase text-muted">
                {labels.roleLine}
              </p>
            </div>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                aria-current={activeHref === item.href ? "page" : undefined}
                className={cn(
                  "flex min-h-12 items-center justify-between rounded-md px-4 py-3 text-sm text-muted transition-colors hover:bg-surface-raised hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  activeHref === item.href && "bg-surface-raised text-foreground",
                )}
              >
                <span>{item.label}</span>
                <span className="font-mono text-[11px] text-muted/70">
                  {item.href.replace("#", "")}
                </span>
              </Link>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
