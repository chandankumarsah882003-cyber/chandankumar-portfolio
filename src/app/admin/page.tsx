"use client";

import { useEffect, useState } from "react";
import { SiteContent } from "@/types/site-content";

export default function AdminPage() {
  const [content, setContent] = useState<SiteContent | null>(null);
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

        const data = (await response.json()) as SiteContent;
        setContent(data);
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
    if (!content) return;
    setStatus("Saving...");

    try {
      const response = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content)
      });

      if (!response.ok) {
        setStatus("Save failed.");
        return;
      }

      setStatus("Saved successfully. Refresh the website to see updates.");
    } catch {
      setStatus("Save failed.");
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }

  function updateField(section: keyof SiteContent, field: string, value: string) {
    if (!content) return;
    setContent({
      ...content,
      [section]: {
        ...(content[section] as Record<string, unknown>),
        [field]: value
      }
    });
  }

  function updateHighlight(index: number, field: "title" | "description", value: string) {
    if (!content) return;
    const next = [...content.home.highlights];
    next[index] = { ...next[index], [field]: value };
    setContent({ ...content, home: { ...content.home, highlights: next } });
  }

  function addHighlight() {
    if (!content) return;
    setContent({
      ...content,
      home: {
        ...content.home,
        highlights: [...content.home.highlights, { title: "", description: "" }]
      }
    });
  }

  function removeHighlight(index: number) {
    if (!content) return;
    setContent({
      ...content,
      home: { ...content.home, highlights: content.home.highlights.filter((_, i) => i !== index) }
    });
  }

  function updateProject(index: number, field: "title" | "problem" | "workDone" | "outcome", value: string) {
    if (!content) return;
    const next = [...content.projects.items];
    next[index] = { ...next[index], [field]: value };
    setContent({ ...content, projects: { ...content.projects, items: next } });
  }

  function addProject() {
    if (!content) return;
    setContent({
      ...content,
      projects: {
        ...content.projects,
        items: [...content.projects.items, { title: "", problem: "", workDone: "", outcome: "" }]
      }
    });
  }

  function removeProject(index: number) {
    if (!content) return;
    setContent({
      ...content,
      projects: { ...content.projects, items: content.projects.items.filter((_, i) => i !== index) }
    });
  }

  function TextInput(props: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    textarea?: boolean;
  }) {
    return (
      <label className="block">
        <span className="mb-1 block text-sm font-medium text-slate-700">{props.label}</span>
        {props.textarea ? (
          <textarea
            value={props.value}
            onChange={(event) => props.onChange(event.target.value)}
            className="min-h-[88px] w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-accent/40 focus:ring"
          />
        ) : (
          <input
            value={props.value}
            onChange={(event) => props.onChange(event.target.value)}
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-accent/40 focus:ring"
          />
        )}
      </label>
    );
  }

  return (
    <div className="section-shell py-10">
      <div className="mx-auto max-w-5xl space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Admin Content Editor</h1>
            <p className="mt-1 text-sm text-slate-600">
              Update text, images, videos, highlights, and projects without touching code.
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

        {content ? (
          <div className="space-y-8">
            <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-xl font-semibold text-slate-900">Branding</h2>
              <TextInput
                label="Site title (navbar)"
                value={content.branding.siteTitle}
                onChange={(value) => updateField("branding", "siteTitle", value)}
              />
            </section>

            <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-xl font-semibold text-slate-900">Home Page</h2>
              <TextInput label="Badge" value={content.home.badge} onChange={(v) => updateField("home", "badge", v)} />
              <TextInput label="Main title" value={content.home.title} onChange={(v) => updateField("home", "title", v)} />
              <TextInput
                label="Subtitle"
                value={content.home.subtitle}
                onChange={(v) => updateField("home", "subtitle", v)}
                textarea
              />
              <TextInput
                label="Quick intro title"
                value={content.home.quickIntroTitle}
                onChange={(v) => updateField("home", "quickIntroTitle", v)}
              />
              <TextInput
                label="Quick intro text"
                value={content.home.quickIntroText}
                onChange={(v) => updateField("home", "quickIntroText", v)}
                textarea
              />
              <TextInput
                label="Home image URL"
                value={content.home.heroImageUrl}
                onChange={(v) => updateField("home", "heroImageUrl", v)}
              />
              <TextInput
                label="Home video URL"
                value={content.home.heroVideoUrl}
                onChange={(v) => updateField("home", "heroVideoUrl", v)}
              />
            </section>

            <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-900">Highlights</h2>
                <button type="button" onClick={addHighlight} className="rounded-xl border border-slate-300 px-3 py-2 text-sm">
                  Add highlight
                </button>
              </div>
              {content.home.highlights.map((item, index) => (
                <div key={`${index}-${item.title}`} className="space-y-2 rounded-xl border border-slate-200 p-3">
                  <TextInput label={`Highlight ${index + 1} title`} value={item.title} onChange={(v) => updateHighlight(index, "title", v)} />
                  <TextInput
                    label="Description"
                    value={item.description}
                    onChange={(v) => updateHighlight(index, "description", v)}
                    textarea
                  />
                  <button type="button" onClick={() => removeHighlight(index)} className="text-sm text-red-600">
                    Remove highlight
                  </button>
                </div>
              ))}
            </section>

            <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5">
              <h2 className="text-xl font-semibold text-slate-900">About Page</h2>
              <TextInput label="Page title" value={content.about.pageTitle} onChange={(v) => updateField("about", "pageTitle", v)} />
              <TextInput label="Page subtitle" value={content.about.pageSubtitle} onChange={(v) => updateField("about", "pageSubtitle", v)} />
              <TextInput
                label="Personal story title"
                value={content.about.personalStoryTitle}
                onChange={(v) => updateField("about", "personalStoryTitle", v)}
              />
              <TextInput
                label="Personal story text"
                value={content.about.personalStoryText}
                onChange={(v) => updateField("about", "personalStoryText", v)}
                textarea
              />
              <TextInput label="About image URL" value={content.about.imageUrl} onChange={(v) => updateField("about", "imageUrl", v)} />
              <TextInput label="About video URL" value={content.about.videoUrl} onChange={(v) => updateField("about", "videoUrl", v)} />
            </section>

            <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-900">Projects</h2>
                <button type="button" onClick={addProject} className="rounded-xl border border-slate-300 px-3 py-2 text-sm">
                  Add project
                </button>
              </div>
              {content.projects.items.map((item, index) => (
                <div key={`${index}-${item.title}`} className="space-y-2 rounded-xl border border-slate-200 p-3">
                  <TextInput label={`Project ${index + 1} title`} value={item.title} onChange={(v) => updateProject(index, "title", v)} />
                  <TextInput label="Problem" value={item.problem} onChange={(v) => updateProject(index, "problem", v)} textarea />
                  <TextInput label="Work done" value={item.workDone} onChange={(v) => updateProject(index, "workDone", v)} textarea />
                  <TextInput label="Outcome" value={item.outcome} onChange={(v) => updateProject(index, "outcome", v)} textarea />
                  <button type="button" onClick={() => removeProject(index)} className="text-sm text-red-600">
                    Remove project
                  </button>
                </div>
              ))}
            </section>
          </div>
        ) : null}
      </div>
    </div>
  );
}
