import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  href?: string;
};

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-8", className)}
      aria-hidden
    >
      <rect
        x="1.5"
        y="1.5"
        width="29"
        height="29"
        rx="7"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="1"
      />
      <path
        d="M8 22V10l8 8 8-8v12"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="18" r="1.6" fill="var(--accent)" />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  showWordmark = true,
  href = "/",
}: LogoProps) {
  const inner = (
    <span className={cn("inline-flex items-center gap-2.5 text-foreground", className)}>
      <LogoMark className={markClassName} />
      {showWordmark ? (
        <span className="text-[1.05rem] font-semibold tracking-tight">Mitiga</span>
      ) : null}
    </span>
  );

  if (!href) return inner;
  return (
    <Link href={href} className="rounded-sm focus-visible:outline-none">
      {inner}
    </Link>
  );
}
