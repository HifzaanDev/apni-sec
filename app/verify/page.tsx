"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

function VerifyContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");
  
  const [status, setStatus] = useState<"verifying" | "success" | "error">("verifying");
  const [message, setMessage] = useState("Verifying your email...");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("No verification token provided.");
      return;
    }

    verifyToken(token);
  }, [token]);

  const verifyToken = async (token: string) => {
    try {
      const res = await fetch("/api/auth/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("Email verified successfully! You can now login.");
        setTimeout(() => router.push("/login"), 3000);
      } else {
        setStatus("error");
        setMessage(data.message || "Verification failed.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center max-w-md w-full">
      {status === "verifying" && (
        <div>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold mb-2">Verifying...</h2>
          <p className="text-gray-400">{message}</p>
        </div>
      )}

      {status === "success" && (
        <div>
          <div className="text-green-500 text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-bold mb-2 text-green-500">Verified!</h2>
          <p className="text-gray-300 mb-6">{message}</p>
          <p className="text-sm text-gray-500">Redirecting to login...</p>
          <Link 
            href="/login" 
            className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Go to Login
          </Link>
        </div>
      )}

      {status === "error" && (
        <div>
          <div className="text-red-500 text-5xl mb-4">❌</div>
          <h2 className="text-2xl font-bold mb-2 text-red-500">Verification Failed</h2>
          <p className="text-gray-300 mb-6">{message}</p>
          <Link 
            href="/register" 
            className="text-green-500 hover:text-green-400 underline"
          >
            Register again
          </Link>
        </div>
      )}
    </div>
  );
}

export default function VerifyPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <Suspense fallback={<div>Loading...</div>}>
        <VerifyContent />
      </Suspense>
    </div>
  );
}
