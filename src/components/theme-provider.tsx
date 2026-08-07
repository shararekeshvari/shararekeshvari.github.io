"use client";

import { LazyMotion, MotionConfig } from "framer-motion";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const loadMotionFeatures = () =>
  import("@/components/motion-features").then((module) => module.default);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <MotionConfig reducedMotion="user">
        <LazyMotion features={loadMotionFeatures} strict>
          {children}
        </LazyMotion>
      </MotionConfig>
    </NextThemesProvider>
  );
}
