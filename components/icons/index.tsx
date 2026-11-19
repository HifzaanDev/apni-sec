import { cn } from "@/lib/utils";

type IconProps = { className?: string };

const base = "h-5 w-5 shrink-0";

export function IconCloud({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn(base, className)} aria-hidden>
      <path
        d="M7.5 18h9.2a3.8 3.8 0 0 0 .4-7.58A5.5 5.5 0 0 0 7.2 9.3 3.7 3.7 0 0 0 7.5 18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconTarget({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn(base, className)} aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function IconScan({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn(base, className)} aria-hidden>
      <path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconRadar({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn(base, className)} aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 12 18 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function IconGraph({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn(base, className)} aria-hidden>
      <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 11.2 16 7.2M8 12.8 16 16.8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconLayers({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn(base, className)} aria-hidden>
      <path d="m12 4 8 4-8 4-8-4 8-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m4 12 8 4 8-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m4 16 8 4 8-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconDoc({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn(base, className)} aria-hidden>
      <path d="M7 3.5h7l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-9.5A1.5 1.5 0 0 1 5.5 20V5A1.5 1.5 0 0 1 7 3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 3.5V8h4.5M8.5 12h7M8.5 15.5h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn("h-4 w-4", className)} aria-hidden>
      <path d="M5 12h12M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconLinkedIn({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn(base, className)} aria-hidden>
      <path d="M6.5 9.5V17M6.5 7v.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10.5 17v-4.2a2.8 2.8 0 0 1 5.6 0V17M10.5 10.2V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconX({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn(base, className)} aria-hidden>
      <path d="M6 6 18 18M18 6 6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconGitHub({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={cn(base, className)} aria-hidden>
      <path
        d="M9.5 19c-3 1-3-1.5-4-2m9 4v-3.2a3 3 0 0 0-.8-2.3c2.6-.3 5.3-1.3 5.3-5.8a4.5 4.5 0 0 0-1.2-3.1 4.2 4.2 0 0 0-.1-3.1s-1-.3-3.2 1.2a11 11 0 0 0-5.6 0C7.5 3.1 6.5 3.4 6.5 3.4a4.2 4.2 0 0 0-.1 3.1 4.5 4.5 0 0 0-1.2 3.1c0 4.5 2.7 5.5 5.3 5.8a3 3 0 0 0-.8 2.3V21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
