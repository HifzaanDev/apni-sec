import { Button } from "@/components/ui/Button";
import { IconArrow } from "@/components/icons";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 pt-28 pb-20">
      <div className="max-w-lg text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          This path is not on the map.
        </h1>
        <p className="mt-4 text-muted">
          The page you requested does not exist—or moved. Head home or request a briefing.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/">
            Back home
            <IconArrow />
          </Button>
          <Button href="/contact" variant="secondary">
            Contact
          </Button>
        </div>
      </div>
    </main>
  );
}
