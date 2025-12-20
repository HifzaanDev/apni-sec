"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { isLoggedIn } from "../lib/authClient";

export default function LandingButtons() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLoggedIn(isLoggedIn());
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  if (loggedIn) {
    return (
      <div className="flex gap-4 justify-center flex-wrap">
        <Link 
          href="/dashboard" 
          className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold text-lg transition"
        >
          Go to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="flex gap-4 justify-center flex-wrap">
      <Link 
        href="/register" 
        className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold text-lg transition"
      >
        Get Started
      </Link>
      <Link 
        href="#clients" 
        className="border border-gray-700 hover:border-gray-500 px-8 py-3 rounded-lg font-semibold text-lg transition"
      >
        Learn More
      </Link>
    </div>
  );
}
