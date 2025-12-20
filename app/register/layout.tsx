import type { Metadata } from "next";
import RedirectIfLoggedIn from "../components/RedirectIfLoggedIn";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Create your ApniSec account to access enterprise cybersecurity solutions.",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RedirectIfLoggedIn>{children}</RedirectIfLoggedIn>;
}
