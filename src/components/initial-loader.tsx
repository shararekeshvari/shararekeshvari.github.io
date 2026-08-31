"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function InitialLoader({ label = "Loading portfolio" }: { label?: string }) {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), reduceMotion ? 80 : 800);
    return () => window.clearTimeout(timeout);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#080808] text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.1 : 0.4 }}
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              className="grid size-12 place-items-center rounded-lg border border-white/20 font-mono text-sm font-semibold"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
            >
              SK
            </motion.div>
            <div className="h-px w-24 overflow-hidden bg-white/15">
              <motion.div
                className="h-full bg-white"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: reduceMotion ? 0.05 : 0.65, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <span className="sr-only">{label}</span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
