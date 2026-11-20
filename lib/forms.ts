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

/** Opens a structured mailto. Easy to swap for Formspree/Resend later. */
export function submitContactMailto(data: ContactPayload) {
  const subject = encodeURIComponent(`Briefing request - ${data.name}`);
  const body = encodeURIComponent(
    [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company?.trim() || "-"}`,
      "",
      data.message.trim(),
    ].join("\n"),
  );
  window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
}

/** Newsletter signup via mailto. Easy to swap for a provider later. */
export function submitNewsletterMailto(data: NewsletterPayload) {
  const subject = encodeURIComponent("Newsletter signup");
  const body = encodeURIComponent(`Please add ${data.email.trim()} to the Mitiga updates list.`);
  window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
}
