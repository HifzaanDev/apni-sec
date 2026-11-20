"use client";

import { useState } from "react";
import {
  submitContactMailto,
  validateContact,
  type ContactPayload,
} from "@/lib/forms";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const empty: ContactPayload = { name: "", email: "", company: "", message: "" };

export function ContactForm({ className }: { className?: string }) {
  const [data, setData] = useState<ContactPayload>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactPayload, string>>>({});
  const [success, setSuccess] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const next = validateContact(data);
    setErrors(next);
    if (Object.keys(next).length) return;

    // Explicit frontend-only transport (mailto). Swap in Formspree/Resend in lib/forms.ts.
    submitContactMailto(data);
    setSuccess(true);
  }

  if (success) {
    return (
      <div
        className={cn(
          "rounded-xl border border-accent/30 bg-accent/5 p-6 text-sm leading-relaxed text-foreground",
          className,
        )}
        role="status"
      >
        <p className="font-medium text-accent">Ready to send</p>
        <p className="mt-2 text-muted">
          Your mail client should open with a structured briefing request. If it did not, email{" "}
          <a
            className="text-accent underline-offset-2 hover:underline"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>{" "}
          directly.
        </p>
        <button
          type="button"
          className="mt-4 text-sm text-accent hover:underline"
          onClick={() => {
            setSuccess(false);
            setData(empty);
          }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-4", className)} noValidate>
      <Field
        label="Name"
        name="name"
        value={data.name}
        error={errors.name}
        onChange={(v) => setData((d) => ({ ...d, name: v }))}
        autoComplete="name"
      />
      <Field
        label="Work email"
        name="email"
        type="email"
        value={data.email}
        error={errors.email}
        onChange={(v) => setData((d) => ({ ...d, email: v }))}
        autoComplete="email"
      />
      <Field
        label="Company"
        name="company"
        value={data.company ?? ""}
        error={errors.company}
        onChange={(v) => setData((d) => ({ ...d, company: v }))}
        autoComplete="organization"
        optional
      />
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={data.message}
          onChange={(e) => setData((d) => ({ ...d, message: e.target.value }))}
          className="w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent/50"
          placeholder="Environment, objectives, timeline…"
        />
        {errors.message ? (
          <p className="mt-1.5 text-xs text-red-400" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>
      <Button type="submit" className="w-full sm:w-auto">
        Request a briefing
      </Button>
      <p className="text-xs text-muted">
        Submits via your email client (mailto). No data is stored on this site.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  optional,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm text-muted">
        {label}
        {optional ? <span className="text-muted/60"> (optional)</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
      />
      {error ? (
        <p className="mt-1.5 text-xs text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
