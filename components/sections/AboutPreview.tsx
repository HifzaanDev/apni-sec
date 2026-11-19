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
          title="Built for grant-ready credibility, not marketing theater."
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
        <div className="mt-14">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h3 className="text-lg font-semibold tracking-tight">Team</h3>
            <Link href="/about" className="inline-flex items-center gap-2 text-sm text-accent hover:underline">
              Full company page
              <IconArrow />
            </Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3">
            {about.team.map((member) => (
              <li
                key={member.name}
                className="rounded-xl border border-border bg-background/40 p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface font-mono text-sm text-accent">
                  {member.initials}
                </div>
                <p className="mt-4 font-medium">{member.name}</p>
                <p className="text-sm text-muted">{member.role}</p>
                <p className="mt-2 text-xs text-muted/80">{member.bio}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-mono text-[11px] text-muted">
            TODO: replace placeholder profiles with real bios.
          </p>
        </div>
        <div className="mt-12 rounded-xl border border-dashed border-accent/30 bg-accent/5 px-6 py-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
            Design partners
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            Onboarding now. We work with a small number of cloud-native teams to refine
            detection workflows and assessment deliverables. Reach out if that is you.
          </p>
        </div>
      </div>
    </section>
  );
}
