import type { Metadata } from "next";
import RedirectIfLoggedIn from "../components/RedirectIfLoggedIn";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your ApniSec account to access your security dashboard.",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RedirectIfLoggedIn>{children}</RedirectIfLoggedIn>;
}
