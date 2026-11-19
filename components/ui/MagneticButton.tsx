"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  onClick?: () => void;
  external?: boolean;
};

export function MagneticButton({
  children,
  href,
  className,
  variant = "primary",
  type,
  onClick,
  external,
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 280, damping: 20, mass: 0.4 });

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.18);
    y.set(dy * 0.18);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={reduce ? undefined : { x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("inline-flex will-change-transform", className)}
    >
      {href ? (
        <Button href={href} variant={variant} external={external}>
          {children}
        </Button>
      ) : (
        <Button type={type} variant={variant} onClick={onClick}>
          {children}
        </Button>
      )}
    </motion.div>
  );
}
