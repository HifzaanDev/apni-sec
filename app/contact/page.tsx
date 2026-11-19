import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Request a briefing from ${site.name}.`,
};

export default function ContactPage() {
  return (
    <main className="pt-28 pb-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Contact</p>
          <h1 className="mt-3 text-balance text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.04em]">
            Request a briefing
          </h1>
          <p className="mt-4 text-pretty text-muted">
            Share your environment and objectives. We respond with a clear scope recommendation—or
            an honest no if we are not the right partner.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-muted">
            <li>
              Email:{" "}
              <a className="text-accent hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              Schedule:{" "}
              <a className="text-accent hover:underline" href={site.scheduleUrl}>
                Open mailto scheduling request
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <Button href={site.scheduleUrl} variant="secondary" external>
              Schedule a call
            </Button>
          </div>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}
