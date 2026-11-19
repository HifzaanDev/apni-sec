import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/icons";
import { services } from "@/content/site";

type Service = (typeof services)[number];

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Services</p>
        <h1 className="mt-3 max-w-3xl text-balance text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-[-0.04em]">
          {service.title}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg text-muted">{service.short}</p>
        <div className="mt-8">
          <Button href="/contact">
            Request a briefing
            <IconArrow />
          </Button>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <Section title="Scope" items={service.scope} />
          <Section title="Methodology" items={service.methodology} />
          <Section title="Deliverables" items={service.deliverables} />
        </div>

        <div className="mt-14 flex flex-wrap gap-4 text-sm">
          {services
            .filter((s) => s.slug !== service.slug)
            .map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="text-accent hover:underline"
              >
                {s.title} →
              </Link>
            ))}
        </div>
      </div>
    </main>
  );
}

function Section({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <section className="rounded-xl border border-border bg-surface p-6">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm text-muted">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
