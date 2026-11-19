import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getArticle, researchArticles } from "@/content/research";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const article = getArticle(slug);
    if (!article) return { title: "Not found" };
    return {
      title: article.title,
      description: article.description,
    };
  });
}

export default async function ResearchArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const others = researchArticles.filter((a) => a.slug !== slug);

  return (
    <main className="pt-28 pb-20">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] text-muted">
          {article.date} · {article.readMinutes} min read
        </p>
        <h1 className="mt-3 text-balance text-[clamp(1.85rem,4vw,2.75rem)] font-semibold tracking-[-0.035em]">
          {article.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{article.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/90">
          {article.body.map((para) => (
            <p key={para.slice(0, 32)}>{para}</p>
          ))}
        </div>
        <div className="mt-14 border-t border-border pt-8">
          <p className="text-sm font-medium">More research</p>
          <ul className="mt-3 space-y-2">
            {others.map((a) => (
              <li key={a.slug}>
                <Link href={`/research/${a.slug}`} className="text-sm text-accent hover:underline">
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/research" className="mt-6 inline-block text-sm text-muted hover:text-accent">
            ← All research
          </Link>
        </div>
      </article>
    </main>
  );
}
