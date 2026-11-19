"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  className,
  id,
}: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      id={id}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={reduce ? undefined : stagger}
    >
      {eyebrow ? (
        <motion.p
          variants={reduce ? undefined : fadeUp}
          className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-accent"
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        variants={reduce ? undefined : fadeUp}
        className="text-balance text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-[-0.03em] text-foreground"
      >
        {title}
      </motion.h2>
      {body ? (
        <motion.p
          variants={reduce ? undefined : fadeUp}
          className="mt-4 text-pretty text-base leading-relaxed text-muted md:text-lg"
        >
          {body}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
