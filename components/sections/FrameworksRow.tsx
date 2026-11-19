"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { frameworks } from "@/content/site";
import { fadeUp, stagger } from "@/lib/motion";

export function FrameworksRow() {
  const reduce = useReducedMotion();
  return (
    <section className="border-y border-border bg-surface/50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Standards"
          title="Aligned with frameworks your stakeholders already use."
          body="We map work to established frameworks. Alignment is not the same as certification—and we will not claim certifications we do not hold."
        />
        <motion.ul
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5"
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={reduce ? undefined : stagger}
        >
          {frameworks.map((fw) => (
            <motion.li
              key={fw.name}
              variants={reduce ? undefined : fadeUp}
              className="rounded-xl border border-border bg-background/60 px-4 py-5"
            >
              <p className="text-sm font-semibold tracking-tight">{fw.name}</p>
              <p className="mt-1 text-xs text-muted">{fw.note}</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-accent/80">
                Mapped to
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
