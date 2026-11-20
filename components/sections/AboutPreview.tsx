"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/content/site";
import { fadeUp, stagger } from "@/lib/motion";
import { IconArrow } from "@/components/icons";

export function AboutPreview() {
  const reduce = useReducedMotion();
  return (
    <section id="company" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Company"
          title="Security work that holds up under scrutiny."
          body={about.mission}
        />
        <motion.div
          className="mt-12 grid gap-4 md:grid-cols-3"
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={reduce ? undefined : stagger}
        >
          {about.principles.map((p) => (
            <motion.div
              key={p.title}
              variants={reduce ? undefined : fadeUp}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-10">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
          >
            More about Mitiga
            <IconArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
