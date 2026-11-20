import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `Privacy policy for ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold tracking-tight">Privacy</h1>
        <p className="mt-4 text-sm text-muted">Last updated: March 19, 2026.</p>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted md:text-base">
          <p>
            This site is a marketing site for Mitiga. Contact and newsletter forms open your email
            client via mailto and do not store form fields on our servers from the browser beyond
            what your mail client sends.
          </p>
          <p>
            We do not embed third-party advertising trackers by default. If we add analytics later,
            we will disclose that here.
          </p>
          <p>
            If you email us at {site.email}, we use that correspondence to respond to your inquiry.
            Do not send production secrets or credentials over email.
          </p>
          <p>
            Office: {site.address}
          </p>
          <p>
            Questions:{" "}
            <a className="text-accent hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
