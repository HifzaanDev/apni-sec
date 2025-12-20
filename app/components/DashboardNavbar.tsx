"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { clearToken } from "../lib/authClient";

export default function DashboardNavbar() {
  const router = useRouter();

  const handleLogout = () => {
    clearToken();
    router.push("/");
  };

  return (
    <nav className="bg-black text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-green-500 hover:text-green-400 transition">
              ApniSec
            </Link>
            <div className="flex gap-4">
              <Link 
                href="/dashboard" 
                className="text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md transition"
              >
                Dashboard
              </Link>
              <Link 
                href="/profile" 
                className="text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md transition"
              >
                Profile
              </Link>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-semibold transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
