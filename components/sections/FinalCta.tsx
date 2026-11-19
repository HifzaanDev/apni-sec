import { MagneticButton } from "@/components/ui/MagneticButton";
import { IconArrow } from "@/components/icons";
import { site } from "@/content/site";

export function FinalCta() {
  return (
    <section className="border-y border-border bg-surface/60 py-16 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
            Next step
          </p>
          <h2 className="mt-3 text-balance text-[clamp(1.6rem,3vw,2.4rem)] font-semibold tracking-[-0.03em]">
            Request a briefing. We will tell you if we are the right fit.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <MagneticButton href="/contact">
            Request a briefing
            <IconArrow />
          </MagneticButton>
          <MagneticButton href={site.scheduleUrl} variant="secondary" external>
            Schedule a call
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
