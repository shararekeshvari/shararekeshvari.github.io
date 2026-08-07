"use client";

import * as m from "framer-motion/m";

import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  initiallyVisible = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  initiallyVisible?: boolean;
}) {
  return (
    <m.div
      className={cn("reveal", className)}
      initial={initiallyVisible ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px 0px" }}
      transition={{
        duration: 0.48,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </m.div>
  );
}
