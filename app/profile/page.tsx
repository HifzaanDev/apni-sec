"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "../lib/authClient";
import { apiFetch } from "../lib/api";

interface UserProfile {
  id: string;
  email: string;
  createdAt: string;
}

export default function ProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  // Password Change State
  const [passwordData, setPasswordData] = useState({ currentPassword: "", newPassword: "" });
  const [pwMessage, setPwMessage] = useState("");
  const [pwError, setPwError] = useState("");
  const [pwLoading, setPwLoading] = useState(false);

  useEffect(() => {
    if (!isLoggedIn()) {
      router.replace("/login");
      return;
    }
    fetchProfile();
  }, [router]);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const data = await apiFetch("/api/users/profile");
      setProfile(data);
    } catch (err: any) {
      setError(err.message || "Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwMessage("");
    setPwError("");
    setPwLoading(true);

    try {
      const res = await apiFetch("/api/users/change-password", {
        method: "PUT",
        body: JSON.stringify(passwordData),
      });

      setPwMessage("Password updated successfully!");
      setPasswordData({ currentPassword: "", newPassword: "" });
    } catch (err: any) {
      setPwError(err.message || "Failed to update password");
    } finally {
      setPwLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="bg-red-500/10 border border-red-500 text-red-500 px-6 py-4 rounded-lg">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gray-900 rounded-lg shadow-sm border border-gray-800 p-8">
        <h1 className="text-3xl font-bold text-white mb-6">Profile</h1>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              User ID
            </label>
            <div className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white font-mono text-sm">
              {profile?.id}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email Address
            </label>
            <div className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white">
              {profile?.email}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Account Created
            </label>
            <div className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white">
              {profile?.createdAt ? new Date(profile.createdAt).toLocaleString() : "N/A"}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800">
          <h2 className="text-xl font-semibold text-white mb-4">Change Password</h2>
          <form onSubmit={handleChangePassword} className="space-y-4 max-w-md">
            {pwError && (
              <div className="text-red-500 text-sm bg-red-500/10 p-3 rounded border border-red-500/20">
                {pwError}
              </div>
            )}
            {pwMessage && (
              <div className="text-green-500 text-sm bg-green-500/10 p-3 rounded border border-green-500/20">
                {pwMessage}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Current Password
              </label>
              <input
                type="password"
                required
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                New Password
              </label>
              <input
                type="password"
                required
                minLength={6}
                value={passwordData.newPassword}
                onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white"
              />
            </div>

            <button
              type="submit"
              disabled={pwLoading}
              className="bg-green-600 hover:bg-green-700 disabled:bg-green-800 text-white px-4 py-2 rounded-lg font-semibold transition"
            >
              {pwLoading ? "Updating..." : "Update Password"}
            </button>
          </form>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800">
          <h2 className="text-xl font-semibold text-white mb-4">Account Information</h2>
          <p className="text-gray-400">
            Your account is protected with JWT authentication. All your issues and data are securely stored and accessible only to you.
          </p>
        </div>
      </div>
    </div>
  );
}
