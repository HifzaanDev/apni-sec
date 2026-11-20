"use client";

import { useState } from "react";
import {
  submitNewsletterMailto,
  validateNewsletter,
} from "@/lib/forms";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errors = validateNewsletter({ email });
    if (errors.email) {
      setError(errors.email);
      return;
    }
    setError(undefined);
    submitNewsletterMailto({ email });
    setSuccess(true);
  }

  if (success) {
    return (
      <p className="text-sm text-accent" role="status">
        Mail client opened for newsletter signup confirmation.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row" noValidate>
      <div className="flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          Email for updates
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent/50"
        />
        {error ? (
          <p className="mt-1 text-xs text-red-400" role="alert">
            {error}
          </p>
        ) : null}
      </div>
      <Button type="submit" variant="secondary" className="shrink-0">
        Subscribe
      </Button>
    </form>
  );
}
