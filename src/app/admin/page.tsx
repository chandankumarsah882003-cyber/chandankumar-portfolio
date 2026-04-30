"use client";

import { useEffect, useState } from "react";
import { SiteContent } from "@/types/site-content";

function toPrettyJson(value: unknown) {
  return JSON.stringify(value, null, 2);
}

export default function AdminPage() {
  const [rawContent, setRawContent] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch("/api/admin/content");
        if (!response.ok) {
          setStatus("Unable to load content.");
          return;
        }

        const content = (await response.json()) as SiteContent;
        setRawContent(toPrettyJson(content));
        setStatus("Loaded.");
      } catch {
        setStatus("Unable to load content.");
      } finally {
        setLoading(false);
      }
    }

    void load();
  }, []);

  async function handleSave() {
    setStatus("Saving...");

    try {
      const parsed = JSON.parse(rawContent) as SiteContent;
      const response = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed)
      });

      if (!response.ok) {
        setStatus("Save failed.");
        return;
      }

      setStatus("Saved successfully. Refresh the website to see updates.");
    } catch {
      setStatus("Invalid JSON. Please fix formatting before saving.");
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  return (
    <div className="section-shell py-10">
      <div className="mx-auto max-w-5xl space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Admin Content Editor</h1>
            <p className="mt-1 text-sm text-slate-600">
              Edit website text, image URLs, video URLs, and project entries from this JSON.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={handleSave}
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Save changes
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Logout
            </button>
          </div>
        </div>

        <p className="text-sm text-slate-600">{loading ? "Loading..." : status}</p>

        <textarea
          value={rawContent}
          onChange={(event) => setRawContent(event.target.value)}
          className="min-h-[70vh] w-full rounded-2xl border border-slate-200 bg-white p-4 font-mono text-sm text-slate-800 outline-none ring-accent/40 focus:ring"
          spellCheck={false}
        />
      </div>
    </div>
  );
}
