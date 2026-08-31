"use client";

import { useRouter } from "next/navigation";

import type { Locale, LocaleOption } from "@/data/portfolio";

export function LanguageSwitcher({
  currentLocale,
  label,
  options,
}: {
  currentLocale: Locale;
  label: string;
  options: readonly LocaleOption[];
}) {
  const router = useRouter();

  return (
    <select
      aria-label={label}
      value={currentLocale}
      dir="auto"
      onChange={(event) => {
        const selected = options.find((option) => option.locale === event.target.value);
        if (!selected) return;

        router.push(`${selected.href}${window.location.hash}`);
      }}
      className="h-11 min-w-[6.75rem] cursor-pointer rounded-md border border-border bg-surface-raised/72 px-3 text-sm font-medium text-foreground shadow-sm outline-none backdrop-blur-md transition-colors hover:border-accent/45 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {options.map((option) => (
        <option key={option.locale} value={option.locale}>
          {option.nativeLabel}
        </option>
      ))}
    </select>
  );
}
