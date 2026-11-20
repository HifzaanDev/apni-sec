"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { researchArticles } from "@/content/research";
import { fadeUp, stagger } from "@/lib/motion";
import { IconArrow } from "@/components/icons";

export function ResearchCards() {
  const reduce = useReducedMotion();
  return (
    <section id="research" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Research"
            title="Insights written to be useful."
            body="Short pieces on cloud risk, AI in red teaming, and API security."
          />
          <Link
            href="/research"
            className="inline-flex shrink-0 items-center gap-2 text-sm text-accent hover:underline"
          >
            All research
            <IconArrow />
          </Link>
        </div>
        <motion.div
          className="mt-12 grid gap-4 md:grid-cols-3"
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={reduce ? undefined : stagger}
        >
          {researchArticles.map((article) => (
            <motion.article
              key={article.slug}
              variants={reduce ? undefined : fadeUp}
              className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/35"
            >
              <p className="font-mono text-[11px] text-muted">
                {article.date} · {article.readMinutes} min
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">
                <Link href={`/research/${article.slug}`} className="hover:text-accent">
                  {article.title}
                </Link>
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {article.description}
              </p>
              <Link
                href={`/research/${article.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm text-accent"
              >
                Read
                <IconArrow />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
