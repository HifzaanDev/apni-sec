import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Security",
  description: `Responsible disclosure policy for ${site.name}.`,
};

export default function SecurityPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight">Responsible disclosure</h1>
        <p className="mt-4 text-pretty text-muted">
          We appreciate researchers who report security issues in Mitiga-operated properties in good
          faith.
        </p>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted md:text-base">
          <p>
            Email reports to{" "}
            <a
              className="text-accent hover:underline"
              href={`mailto:${site.email}?subject=Security%20disclosure`}
            >
              {site.email}
            </a>{" "}
            with a clear description, impact assessment, and steps to reproduce. Encrypt sensitive
            details when possible.
          </p>
          <p>
            Please avoid privacy violations, destruction of data, and disruption of production
            services. We will acknowledge receipt and work toward a timely remediation plan.
          </p>
          <p>
            This page describes process intent; it is not a bug bounty with guaranteed rewards unless
            separately published.
          </p>
        </div>
      </div>
    </main>
  );
}
