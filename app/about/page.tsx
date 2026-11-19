import type { Metadata } from "next";
import Link from "next/link";
import { about, site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description: `Mission, principles, and team for ${site.name}.`,
};

export default function AboutPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Company</p>
        <h1 className="mt-3 max-w-3xl text-balance text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-[-0.04em]">
          AI-native security with human accountability.
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted">
          {about.mission}
        </p>

        <section className="mt-16">
          <h2 className="text-xl font-semibold tracking-tight">Principles</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {about.principles.map((p) => (
              <li key={p.title} className="rounded-xl border border-border bg-surface p-6">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <h2 className="text-xl font-semibold tracking-tight">Team</h2>
          <p className="mt-2 text-sm text-muted">
            Placeholder profiles structured for real bios.{" "}
            <span className="font-mono text-[11px]">TODO: founders</span>
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {about.team.map((m) => (
              <li key={m.name} className="rounded-xl border border-border bg-surface p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border font-mono text-accent">
                  {m.initials}
                </div>
                <p className="mt-4 font-medium">{m.name}</p>
                <p className="text-sm text-muted">{m.role}</p>
                <p className="mt-2 text-sm text-muted">{m.bio}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 rounded-xl border border-border bg-surface/60 p-8">
          <h2 className="text-xl font-semibold tracking-tight">For grant reviewers</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
            Mitiga is building AI-assisted security workflows for cloud-native infrastructure.
            This site intentionally avoids fabricated logos, testimonials, and metrics. Capability
            claims are limited to what we can stand behind today: three service lines, framework
            alignment (not certifications), and design-partner onboarding.
          </p>
          <div className="mt-6">
            <Button href="/contact">
              Request a briefing
              <IconArrow />
            </Button>
          </div>
        </section>

        <p className="mt-10 text-sm text-muted">
          <Link href="/" className="text-accent hover:underline">
            ← Back home
          </Link>
        </p>
      </div>
    </main>
  );
}
