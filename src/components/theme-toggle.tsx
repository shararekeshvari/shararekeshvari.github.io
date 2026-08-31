"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted ? resolvedTheme !== "light" : true;

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <Button
      type="button"
      variant="icon"
      aria-label={
        mounted ? (isDark ? "Switch to light theme" : "Switch to dark theme") : "Toggle theme"
      }
      title={
        mounted ? (isDark ? "Switch to light theme" : "Switch to dark theme") : "Toggle theme"
      }
      onClick={() => setTheme(isDark ? "light" : "dark")}
      disabled={!mounted}
    >
      {isDark ? <Sun aria-hidden="true" size={17} /> : <Moon aria-hidden="true" size={17} />}
    </Button>
  );
}
