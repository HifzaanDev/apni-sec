"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BorderBeamCard } from "@/components/ui/BorderBeamCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DetectionFeed } from "./DetectionFeed";
import { platformCapabilities } from "@/content/site";
import { fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

function MicroVisual({ kind }: { kind: (typeof platformCapabilities)[number]["visual"] }) {
  if (kind === "radar") {
    return (
      <div className="relative mt-6 h-24 overflow-hidden rounded-lg border border-border bg-[#0a0c0f]">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="absolute h-16 w-16 rounded-full border border-accent/20" />
          <span className="absolute h-10 w-10 rounded-full border border-accent/30" />
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="scan-line absolute inset-y-0 w-px bg-accent/50" />
        </div>
      </div>
    );
  }
  if (kind === "triage") {
    return (
      <div className="mt-6 space-y-2">
        {["critical", "high", "medium"].map((level, i) => (
          <div key={level} className="flex items-center gap-2">
            <div
              className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5"
            >
              <div
                className="h-full rounded-full bg-accent"
                style={{ width: `${88 - i * 22}%`, opacity: 1 - i * 0.2 }}
              />
            </div>
            <span className="w-14 font-mono text-[10px] uppercase text-muted">{level}</span>
          </div>
        ))}
      </div>
    );
  }
  if (kind === "graph") {
    return (
      <svg viewBox="0 0 200 80" className="mt-6 h-20 w-full" aria-hidden>
        <line x1="20" y1="40" x2="80" y2="20" stroke="rgba(46,230,166,0.4)" />
        <line x1="20" y1="40" x2="80" y2="60" stroke="rgba(46,230,166,0.4)" />
        <line x1="80" y1="20" x2="160" y2="40" stroke="rgba(46,230,166,0.4)" />
        <line x1="80" y1="60" x2="160" y2="40" stroke="rgba(46,230,166,0.4)" />
        {[
          [20, 40],
          [80, 20],
          [80, 60],
          [160, 40],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="5" fill="#12151a" stroke="#2EE6A6" />
        ))}
      </svg>
    );
  }
  if (kind === "posture") {
    return (
      <div className="mt-6 grid grid-cols-6 gap-1.5">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="h-3 rounded-sm"
            style={{
              background:
                i % 7 === 0
                  ? "rgba(46,230,166,0.7)"
                  : i % 5 === 0
                    ? "rgba(230,120,80,0.55)"
                    : "rgba(255,255,255,0.08)",
            }}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="mt-6 rounded-lg border border-border bg-[#0a0c0f] p-3 font-mono text-[10px] text-muted">
      <p className="text-accent">report.summary</p>
      <p className="mt-1">findings prioritized · exec + eng views</p>
      <div className="mt-2 h-1.5 w-2/3 rounded-full bg-accent/40" />
    </div>
  );
}

export function PlatformBento() {
  const reduce = useReducedMotion();

  return (
    <section id="platform" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Platform"
          title="Capabilities that help you find signal faster."
          body="Five capabilities that work together: detect, triage, map paths, watch posture, and report clearly."
        />
        <motion.div
          className="mt-12 grid gap-4 md:grid-cols-6"
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={reduce ? undefined : stagger}
        >
          {platformCapabilities.map((cap, i) => {
            const wide = i === 0 || i === 3;
            return (
              <motion.div
                key={cap.id}
                variants={reduce ? undefined : fadeUp}
                className={cn(wide ? "md:col-span-3" : "md:col-span-2")}
              >
                <BorderBeamCard className="h-full">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight">{cap.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{cap.body}</p>
                  {i === 0 ? (
                    <div className="mt-6">
                      <DetectionFeed compact />
                    </div>
                  ) : (
                    <MicroVisual kind={cap.visual} />
                  )}
                </BorderBeamCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
