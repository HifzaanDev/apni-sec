"use client";

import { motion, useReducedMotion } from "framer-motion";
import { problem } from "@/content/site";
import { fadeUp } from "@/lib/motion";

export function ProblemStrip() {
  const reduce = useReducedMotion();
  return (
    <section className="border-y border-border bg-surface/60 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={reduce ? undefined : fadeUp}
          className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            {problem.eyebrow}
          </p>
          <div>
            <h2 className="text-balance text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[-0.03em]">
              {problem.title}
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg">
              {problem.body}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
