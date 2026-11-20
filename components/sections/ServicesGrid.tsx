"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BorderBeamCard } from "@/components/ui/BorderBeamCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrow, IconCloud, IconScan, IconTarget } from "@/components/icons";
import { services } from "@/content/site";
import { fadeUp, stagger } from "@/lib/motion";

const icons = {
  "cloud-security": IconCloud,
  "red-team": IconTarget,
  vapt: IconScan,
};

export function ServicesGrid() {
  const reduce = useReducedMotion();

  return (
    <section id="services" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Three engagements. Clear scope. Actionable output."
          body="Cloud Security, Red Team Assessment, and VAPT. Each comes with a clear methodology and deliverables you can review before kickoff."
        />
        <motion.div
          className="mt-12 grid gap-4 md:grid-cols-3"
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={reduce ? undefined : stagger}
        >
          {services.map((svc) => {
            const Icon = icons[svc.slug];
            return (
              <motion.div key={svc.slug} variants={reduce ? undefined : fadeUp}>
                <BorderBeamCard className="h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-accent">
                    <Icon />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{svc.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{svc.short}</p>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                  >
                    Scope & deliverables
                    <IconArrow />
                  </Link>
                </BorderBeamCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
