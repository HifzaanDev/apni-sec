import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms of use for ${site.name}.`,
};

export default function TermsPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight">Terms of use</h1>
        <p className="mt-4 text-sm text-muted">Last updated: March 19, 2026.</p>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted md:text-base">
          <p>
            The materials on this website are for general information about Mitiga and our services.
            They do not constitute a binding offer or a guarantee of outcomes for any engagement.
          </p>
          <p>
            Engagements are governed by a separate statement of work or master services agreement.
            Framework references (OWASP, MITRE ATT&CK, NIST CSF, CIS Benchmarks, ISO 27001) describe
            how we align our methods, unless a certification claim is stated in writing.
          </p>
          <p>Content may change without notice.</p>
          <p>
            Contact:{" "}
            <a className="text-accent hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
