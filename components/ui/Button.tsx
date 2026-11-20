import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-[#04110c] hover:brightness-110 shadow-[0_0_0_1px_rgba(46,230,166,0.25)]",
  secondary:
    "bg-transparent text-foreground border border-border-strong hover:border-accent/50 hover:bg-white/[0.03]",
  ghost: "bg-transparent text-accent hover:text-accent/80",
};

type Common = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsButton = Common &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = Common & { href: string; external?: boolean };

export function Button({
  children,
  className,
  variant = "primary",
  ...rest
}: ButtonAsButton | ButtonAsLink) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium tracking-tight transition-colors duration-200",
    variants[variant],
    className,
  );

  if ("href" in rest && rest.href) {
    const { href, external, ...linkRest } = rest as ButtonAsLink;
    // Hash / mailto / external: native <a> so same-page anchors actually scroll
    const useAnchor =
      external ||
      href.startsWith("mailto:") ||
      href.startsWith("http") ||
      href.startsWith("#") ||
      href.includes("#");
    if (useAnchor) {
      return (
        <a
          href={href}
          className={classes}
          {...(href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          {...linkRest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonRest } = rest as ButtonAsButton;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
