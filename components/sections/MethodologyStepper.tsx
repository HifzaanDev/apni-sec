"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { methodologySteps } from "@/content/site";

export function MethodologyStepper() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.4"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="approach" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Approach"
          title="Discover → Model → Test → Remediate → Verify"
          body="A repeatable methodology. Depth changes with the engagement; the shape does not."
        />
        <div ref={ref} className="relative mt-14">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" />
          {!reduce ? (
            <motion.div
              className="absolute left-[15px] top-2 w-px origin-top bg-accent md:left-1/2 md:-translate-x-px"
              style={{ height: progress }}
            />
          ) : (
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-accent/40 md:left-1/2 md:-translate-x-px" />
          )}
          <ol className="space-y-10">
            {methodologySteps.map((step, i) => (
              <li
                key={step.id}
                className="relative grid gap-3 pl-12 md:grid-cols-2 md:gap-10 md:pl-0"
              >
                <div
                  className={
                    i % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:col-start-2 md:pl-12"
                  }
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                    Step {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                    {step.body}
                  </p>
                </div>
                <span
                  aria-hidden
                  className="absolute left-2 top-1.5 h-4 w-4 rounded-full border border-accent bg-[#0B0D10] md:left-1/2 md:-translate-x-1/2"
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
