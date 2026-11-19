import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: `Privacy policy for ${site.name}.`,
};

export default function PrivacyPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose-invert">
        <h1 className="text-3xl font-semibold tracking-tight">Privacy</h1>
        <p className="mt-4 text-sm text-muted">
          Last updated: March 19, 2026.{" "}
          <span className="font-mono text-[11px]">TODO: legal review</span>
        </p>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted md:text-base">
          <p>
            This site is a static marketing property. Contact and newsletter forms open your email
            client via mailto and do not transmit form fields to Mitiga servers from the browser
            beyond what your mail client sends.
          </p>
          <p>
            We do not embed third-party advertising or analytics trackers by default. If analytics
            are added later, they will be privacy-friendly and disclosed here.
          </p>
          <p>
            If you email us at {site.email}, we process the contents of that correspondence to
            respond to your inquiry. Do not send sensitive credentials or production secrets over
            email.
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
