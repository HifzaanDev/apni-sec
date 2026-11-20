"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { IconLinkedIn, IconX } from "@/components/icons";
import { footerColumns, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[#080a0c]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {site.tagline}. Practical assessments, AI-assisted analysis, and clear deliverables.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{site.address}</p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.social.linkedin}
                aria-label="Mitiga on LinkedIn"
                className="rounded-md border border-border p-2 text-muted transition-colors hover:border-accent/40 hover:text-accent"
                onClick={(e) => e.preventDefault()}
              >
                <IconLinkedIn />
              </a>
              <a
                href={site.social.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mitiga on X"
                className="rounded-md border border-border p-2 text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                <IconX />
              </a>
            </div>
            <div className="mt-8 max-w-sm">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                Updates
              </p>
              <NewsletterForm />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="mb-3 text-sm font-medium text-foreground">{col.title}</p>
                <ul className="space-y-2">
                  {col.links.map((link) => {
                    const isHash = link.href.includes("#");
                    const className =
                      "text-sm text-muted transition-colors hover:text-accent";
                    return (
                      <li key={link.label}>
                        {isHash ? (
                          <a href={link.href} className={className}>
                            {link.label}
                          </a>
                        ) : (
                          <Link href={link.href} className={className}>
                            {link.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.copyrightYear} {site.name}. All rights reserved.
          </p>
          <a href={`mailto:${site.email}`} className="hover:text-accent">
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
