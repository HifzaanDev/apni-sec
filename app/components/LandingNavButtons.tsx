"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { isLoggedIn } from "../lib/authClient";

export default function LandingNavButtons() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLoggedIn(isLoggedIn());
  }, []);

  if (!mounted) return null;

  if (loggedIn) {
    return (
      <Link 
        href="/dashboard" 
        className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-semibold transition"
      >
        Dashboard
      </Link>
    );
  }

  return (
    <Link 
      href="/login" 
      className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-semibold transition"
    >
      Login
    </Link>
  );
}
