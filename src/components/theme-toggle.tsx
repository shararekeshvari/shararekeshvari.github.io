"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { interfaceLabels } from "@/data/editorial-copy";
import type { Locale } from "@/data/portfolio";

export function ThemeToggle({ locale }: { locale: Locale }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted ? resolvedTheme === "dark" : false;
  const labels = interfaceLabels[locale];

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <Button
      type="button"
      variant="icon"
      aria-label={
        mounted ? (isDark ? labels.lightTheme : labels.darkTheme) : labels.toggleTheme
      }
      title={
        mounted ? (isDark ? labels.lightTheme : labels.darkTheme) : labels.toggleTheme
      }
      onClick={() => setTheme(isDark ? "light" : "dark")}
      disabled={!mounted}
    >
      {isDark ? <Sun aria-hidden="true" size={17} /> : <Moon aria-hidden="true" size={17} />}
    </Button>
  );
}
