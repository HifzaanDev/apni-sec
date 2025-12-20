"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "../lib/authClient";
import DashboardNavbar from "../components/DashboardNavbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-black text-white">
      <DashboardNavbar />
      <main className="max-w-7xl mx-auto p-6">{children}</main>
    </div>
  );
}
