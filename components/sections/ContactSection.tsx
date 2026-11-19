import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Tell us about your environment and objectives."
            body="Use the form to open a structured email, or write us directly. No phone number—email is the fastest path."
          />
          <div className="mt-8 space-y-3 text-sm text-muted">
            <p>
              Email:{" "}
              <a href={`mailto:${site.email}`} className="text-accent hover:underline">
                {site.email}
              </a>
            </p>
            <p>
              Schedule:{" "}
              <a href={site.scheduleUrl} className="text-accent hover:underline">
                mailto briefing request
              </a>{" "}
              <span className="text-muted/70">(TODO: Cal.com URL)</span>
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
