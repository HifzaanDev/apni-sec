import type { Metadata } from "next";
import Link from "next/link";
import { researchArticles } from "@/content/research";
import { IconArrow } from "@/components/icons";

export const metadata: Metadata = {
  title: "Research",
  description: "Insights on cloud risk, AI in red teaming, and API security from Mitiga.",
};

export default function ResearchIndexPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Research</p>
        <h1 className="mt-3 max-w-3xl text-balance text-[clamp(2rem,4vw,3.25rem)] font-semibold tracking-[-0.04em]">
          Insights written to be useful
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Short technical pieces. No agency cadence—publish when there is something worth saying.
        </p>
        <ul className="mt-12 space-y-4">
          {researchArticles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/research/${article.slug}`}
                className="group block rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/35"
              >
                <p className="font-mono text-[11px] text-muted">
                  {article.date} · {article.readMinutes} min · {article.tags.join(" · ")}
                </p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight group-hover:text-accent">
                  {article.title}
                </h2>
                <p className="mt-2 text-sm text-muted">{article.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-accent">
                  Read
                  <IconArrow />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
