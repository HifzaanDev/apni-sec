"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "../lib/authClient";

export default function RedirectIfLoggedIn({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn()) {
      router.replace("/dashboard");
    }
  }, [router]);

  return <>{children}</>;
}
