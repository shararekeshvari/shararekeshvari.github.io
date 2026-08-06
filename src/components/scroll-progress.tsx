"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="fixed right-4 top-1/2 z-40 hidden h-24 w-px -translate-y-1/2 overflow-hidden bg-border lg:block"
    >
      <motion.div
        className="h-full w-full origin-top bg-accent"
        style={{ scaleY }}
      />
    </div>
  );
}
