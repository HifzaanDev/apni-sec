"use client";

import { useState, useEffect, FormEvent } from "react";
import { apiFetch } from "../lib/api";

type IssueType = "CLOUD_SECURITY" | "REDTEAM_ASSESSMENT" | "VAPT";

interface Issue {
  id: string;
  title: string;
  description: string;
  type: IssueType;
  priority?: string;
  status?: string;
  createdAt: string;
}

interface UserProfile {
  id: string;
  email: string;
}

export default function DashboardPage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [filteredIssues, setFilteredIssues] = useState<Issue[]>([]);
  const [filterType, setFilterType] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  // Form state
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "CLOUD_SECURITY" as IssueType,
    priority: "",
    status: "",
  });
  const [submitting, setSubmitting] = useState(false);

  // Fetch user profile and issues
  useEffect(() => {
    fetchUserAndIssues();
  }, []);

  // Filter issues when filterType changes
  useEffect(() => {
    if (filterType === "") {
      setFilteredIssues(issues);
    } else {
      setFilteredIssues(issues.filter(issue => issue.type === filterType));
    }
  }, [filterType, issues]);

  const fetchUserAndIssues = async () => {
    try {
      setLoading(true);
      setError("");

      // Fetch user profile
      const profileData = await apiFetch("/api/users/profile");
      setUser(profileData);

      // Fetch issues
      const issuesData = await apiFetch("/api/issues");
      
      // Ensure issuesData is an array
      if (Array.isArray(issuesData)) {
        setIssues(issuesData);
        setFilteredIssues(issuesData);
      } else {
        console.error("API did not return an array of issues:", issuesData);
        setIssues([]);
        setFilteredIssues([]);
        if (issuesData.message) {
          throw new Error(issuesData.message);
        }
      }
    } catch (err: any) {
      console.error("Dashboard fetch error:", err);
      setError(err.message || "Failed to load data");
      // Ensure state is safe even on error
      setIssues([]);
      setFilteredIssues([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateIssue = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const newIssue = await apiFetch("/api/issues", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      setIssues([newIssue, ...issues]);
      setFormData({
        title: "",
        description: "",
        type: "CLOUD_SECURITY",
        priority: "",
        status: "",
      });
      setShowCreateForm(false);
    } catch (err: any) {
      setError(err.message || "Failed to create issue");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteIssue = async (id: string) => {
    if (!confirm("Are you sure you want to delete this issue?")) return;

    try {
      await apiFetch(`/api/issues/${id}`, { method: "DELETE" });
      setIssues(issues.filter(issue => issue.id !== id));
    } catch (err: any) {
      setError(err.message || "Failed to delete issue");
    }
  };

  const getIssueTypeLabel = (type: IssueType) => {
    switch (type) {
      case "CLOUD_SECURITY": return "Cloud Security";
      case "REDTEAM_ASSESSMENT": return "Red Team Assessment";
      case "VAPT": return "VAPT";
      default: return type;
    }
  };

  const getTypeColor = (type: IssueType) => {
    switch (type) {
      case "CLOUD_SECURITY": return "bg-blue-500";
      case "REDTEAM_ASSESSMENT": return "bg-red-500";
      case "VAPT": return "bg-purple-500";
      default: return "bg-gray-500";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-800">
        <h1 className="text-3xl font-bold text-white">Welcome back!</h1>
        <p className="text-gray-400 mt-2">{user?.email}</p>
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Issue Management Section */}
      <div className="bg-gray-900 rounded-lg shadow-sm border border-gray-800">
        <div className="p-6 border-b border-gray-800">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Issue Management</h2>
            <button
              onClick={() => setShowCreateForm(!showCreateForm)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition"
            >
              {showCreateForm ? "Cancel" : "+ Create Issue"}
            </button>
          </div>
        </div>

        {/* Create Issue Form */}
        {showCreateForm && (
          <div className="p-6 bg-gray-900 border-b border-gray-800">
            <form onSubmit={handleCreateIssue} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white placeholder-gray-500"
                    placeholder="Issue title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Type *
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value as IssueType })}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white"
                  >
                    <option value="CLOUD_SECURITY">Cloud Security</option>
                    <option value="REDTEAM_ASSESSMENT">Red Team Assessment</option>
                    <option value="VAPT">VAPT</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Description *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white placeholder-gray-500"
                  placeholder="Describe the issue..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Priority (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white placeholder-gray-500"
                    placeholder="e.g., High, Medium, Low"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Status (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white placeholder-gray-500"
                    placeholder="e.g., Open, In Progress, Closed"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="bg-green-600 hover:bg-green-700 disabled:bg-green-800 text-white px-6 py-2 rounded-lg font-semibold transition"
              >
                {submitting ? "Creating..." : "Create Issue"}
              </button>
            </form>
          </div>
        )}

        {/* Filter */}
        <div className="p-6 border-b border-gray-800">
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Filter by Type
          </label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 text-white"
          >
            <option value="">All Issues</option>
            <option value="CLOUD_SECURITY">Cloud Security</option>
            <option value="REDTEAM_ASSESSMENT">Red Team Assessment</option>
            <option value="VAPT">VAPT</option>
          </select>
        </div>

        {/* Issues List */}
        <div className="p-6">
          {filteredIssues.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">No issues found</p>
              <p className="text-sm mt-2">Create your first issue to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredIssues.map((issue) => (
                <div
                  key={issue.id}
                  className="bg-gray-800/50 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`${getTypeColor(issue.type)} text-white text-xs px-2 py-1 rounded`}>
                          {getIssueTypeLabel(issue.type)}
                        </span>
                        {issue.priority && (
                          <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                            {issue.priority}
                          </span>
                        )}
                        {issue.status && (
                          <span className="bg-green-900/50 text-green-400 text-xs px-2 py-1 rounded">
                            {issue.status}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-white">{issue.title}</h3>
                      <p className="text-gray-400 mt-1">{issue.description}</p>
                      <p className="text-xs text-gray-500 mt-2">
                        Created: {new Date(issue.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteIssue(issue.id)}
                      className="ml-4 text-red-500 hover:text-red-400 font-medium text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
