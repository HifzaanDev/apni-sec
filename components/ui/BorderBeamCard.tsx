import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
};

export function BorderBeamCard({ children, className, as: Tag = "div" }: Props) {
  return (
    <Tag
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-surface p-6 transition-colors duration-300",
        "hover:border-accent/35",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(120deg, transparent 30%, rgba(46,230,166,0.12) 50%, transparent 70%)",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(46,230,166,0.45), transparent 40%, transparent 60%, rgba(46,230,166,0.25))",
          mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
      <div className="relative z-[1]">{children}</div>
    </Tag>
  );
}
