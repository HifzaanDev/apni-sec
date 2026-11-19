"use client";

import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  { id: "edge", x: 40, y: 120, label: "edge" },
  { id: "iam", x: 160, y: 48, label: "iam" },
  { id: "api", x: 160, y: 180, label: "api" },
  { id: "data", x: 300, y: 100, label: "data" },
  { id: "ci", x: 300, y: 200, label: "ci" },
];

const edges = [
  ["edge", "iam"],
  ["edge", "api"],
  ["iam", "data"],
  ["api", "data"],
  ["api", "ci"],
] as const;

export function AttackGraph() {
  const reduce = useReducedMotion();
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.07) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 30%, rgba(46,230,166,0.12), transparent 55%)",
        }}
      />
      <svg
        viewBox="0 0 360 240"
        className="relative z-[1] h-auto w-full"
        role="img"
        aria-label="Animated attack-path graph visualization"
      >
        {edges.map(([a, b], i) => {
          const from = byId[a];
          const to = byId[b];
          return (
            <motion.line
              key={`${a}-${b}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke="rgba(46,230,166,0.35)"
              strokeWidth="1.5"
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            />
          );
        })}
        {nodes.map((n, i) => (
          <g key={n.id}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r="14"
              fill="#12151a"
              stroke="rgba(46,230,166,0.7)"
              strokeWidth="1.5"
              initial={reduce ? false : { scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
            />
            {!reduce ? (
              <motion.circle
                cx={n.x}
                cy={n.y}
                r="14"
                fill="none"
                stroke="rgba(46,230,166,0.45)"
                strokeWidth="1"
                animate={{ r: [14, 22, 14], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.35 }}
              />
            ) : null}
            <text
              x={n.x}
              y={n.y + 32}
              textAnchor="middle"
              className="fill-muted"
              style={{ fontSize: 10, fontFamily: "var(--font-geist-mono)" }}
            >
              {n.label}
            </text>
          </g>
        ))}
        <motion.circle
          cx="300"
          cy="100"
          r="4"
          fill="#2EE6A6"
          animate={reduce ? undefined : { opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
      </svg>
      <div className="relative z-[1] border-t border-border px-4 py-3 font-mono text-[11px] text-muted">
        attack_path · privilege chain · live model
      </div>
    </div>
  );
}
