import { site } from "@/content/site";

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export type NewsletterPayload = {
  email: string;
};

const emailOk = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export function validateContact(data: ContactPayload) {
  const errors: Partial<Record<keyof ContactPayload, string>> = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) errors.email = "Email is required.";
  else if (!emailOk(data.email)) errors.email = "Enter a valid email.";
  if (!data.message.trim() || data.message.trim().length < 20) {
    errors.message = "Please share at least a short briefing request (20+ characters).";
  }
  return errors;
}

export function validateNewsletter(data: NewsletterPayload) {
  const errors: Partial<Record<keyof NewsletterPayload, string>> = {};
  if (!data.email.trim()) errors.email = "Email is required.";
  else if (!emailOk(data.email)) errors.email = "Enter a valid email.";
  return errors;
}

/**
 * Frontend-only submission handler.
 * Opens a structured mailto: as the default transport.
 *
 * TODO (swap): Replace the body of this function with a Formspree / Resend /
 * serverless POST. Keep the same validate* → success UI contract.
 */
export function submitContactMailto(data: ContactPayload) {
  const subject = encodeURIComponent(`Briefing request — ${data.name}`);
  const body = encodeURIComponent(
    [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company?.trim() || "—"}`,
      "",
      data.message.trim(),
    ].join("\n"),
  );
  window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
}

/**
 * Frontend-only newsletter handler (mailto fallback).
 * TODO (swap): POST to Formspree / newsletter provider.
 */
export function submitNewsletterMailto(data: NewsletterPayload) {
  const subject = encodeURIComponent("Newsletter signup");
  const body = encodeURIComponent(`Please add ${data.email.trim()} to the Mitiga updates list.`);
  window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
}
