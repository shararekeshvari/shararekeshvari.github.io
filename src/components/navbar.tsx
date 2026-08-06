"use client";

import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { lazy, Suspense, useEffect, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { navigation } from "@/data/portfolio";

const LazyCommandMenu = lazy(async () => ({
  default: (await import("@/components/command-menu")).CommandMenu,
}));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [commandMenuRequested, setCommandMenuRequested] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    if (commandMenuRequested) return;
    const loadCommandMenu = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandMenuRequested(true);
      }
    };
    document.addEventListener("keydown", loadCommandMenu);
    return () => document.removeEventListener("keydown", loadCommandMenu);
  }, [commandMenuRequested]);

  return (
    <header className="navbar-enter fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Main navigation"
        className={`mx-auto flex h-14 max-w-7xl items-center justify-between rounded-lg border px-3 transition-all duration-300 sm:px-4 ${
          scrolled
            ? "border-border bg-background/82 shadow-lg backdrop-blur-xl"
            : "border-white/10 bg-black/20 text-white backdrop-blur-md"
        }`}
      >
        <Link
          href="#top"
          className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="SK, Sharare Keshvari, back to top"
        >
          <span className="grid size-8 place-items-center rounded-md border border-current/20 bg-current/5 font-mono text-xs font-semibold">
            SK
          </span>
          <span className="hidden text-sm font-semibold sm:inline">Sharare Keshvari</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-current/65 transition-colors hover:bg-current/5 hover:text-current focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {commandMenuRequested ? (
            <Suspense fallback={<span className="hidden h-10 min-w-36 lg:block" aria-hidden="true" />}>
              <LazyCommandMenu defaultOpen />
            </Suspense>
          ) : (
            <Button
              variant="secondary"
              className="hidden h-10 min-w-36 justify-between px-3 text-muted lg:inline-flex"
              aria-label="Open command menu"
              onClick={() => setCommandMenuRequested(true)}
            >
              <span className="flex items-center gap-2">
                <Search aria-hidden="true" size={15} />
                Navigate
              </span>
              <kbd className="font-mono text-[11px] text-muted">Ctrl K</kbd>
            </Button>
          )}
          <ThemeToggle />
          <Button
            variant="icon"
            className="md:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
          </Button>
        </div>
      </nav>

      {menuOpen ? (
          <div
            id="mobile-navigation"
            className="mobile-menu-enter mx-auto mt-2 max-w-7xl overflow-hidden rounded-lg border border-border bg-background p-2 shadow-xl md:hidden"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-4 py-3 text-sm text-muted transition-colors hover:bg-surface-raised hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        ) : null}
    </header>
  );
}
