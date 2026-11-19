"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { detectionFeedLines } from "@/content/site";

export function DetectionFeed({ compact }: { compact?: boolean }) {
  const reduce = useReducedMotion();
  const [count, setCount] = useState(reduce ? detectionFeedLines.length : 1);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setCount((c) => (c >= detectionFeedLines.length ? 1 : c + 1));
    }, 1600);
    return () => window.clearInterval(id);
  }, [reduce]);

  const visible = detectionFeedLines.slice(0, count);

  return (
    <div
      className={
        compact
          ? "rounded-xl border border-border bg-[#0a0c0f] p-4 font-mono text-[11px] leading-relaxed"
          : "rounded-xl border border-border bg-[#0a0c0f] p-5 font-mono text-xs leading-relaxed"
      }
      aria-live="polite"
      aria-label="Detection feed simulation"
    >
      <div className="mb-3 flex items-center gap-2 text-muted">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
        detection.feed
      </div>
      <ul className="space-y-2 text-muted">
        {visible.map((line) => (
          <li key={line} className="truncate text-foreground/80">
            <span className="text-accent">›</span> {line}
          </li>
        ))}
      </ul>
    </div>
  );
}
