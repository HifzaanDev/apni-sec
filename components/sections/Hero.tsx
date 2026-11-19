"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { IconArrow } from "@/components/icons";
import { AttackGraph } from "./AttackGraph";
import { DetectionFeed } from "./DetectionFeed";
import { credibilityCues, site } from "@/content/site";
import { fadeUp, stagger } from "@/lib/motion";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.045) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black 20%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(46,230,166,0.18), transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
        <motion.div
          initial={reduce ? false : "hidden"}
          animate="show"
          variants={reduce ? undefined : stagger}
        >
          <motion.p
            variants={reduce ? undefined : fadeUp}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            AI-native security
          </motion.p>
          <motion.h1
            variants={reduce ? undefined : fadeUp}
            className="max-w-xl text-balance text-[clamp(2.4rem,6vw,4.25rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-foreground"
          >
            {site.tagline}
          </motion.h1>
          <motion.p
            variants={reduce ? undefined : fadeUp}
            className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted md:text-lg"
          >
            Detection, triage, and attack-path analysis for cloud-native teams—grounded in
            frameworks you already map to, without theater.
          </motion.p>
          <motion.div
            variants={reduce ? undefined : fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="/contact">
              Request a briefing
              <IconArrow />
            </MagneticButton>
            <MagneticButton href="/#platform" variant="secondary">
              Explore the platform
            </MagneticButton>
          </motion.div>
          <motion.ul
            variants={reduce ? undefined : fadeUp}
            className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8"
          >
            {credibilityCues.map((cue) => (
              <li key={cue.label}>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {cue.label}
                </p>
                <p className="mt-1 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  {cue.value}
                </p>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <div className="space-y-4">
          <AttackGraph />
          <DetectionFeed compact />
        </div>
      </div>
    </section>
  );
}
