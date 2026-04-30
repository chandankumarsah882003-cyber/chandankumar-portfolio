import ProjectCard from "@/components/project-card";
import { getSiteContent } from "@/lib/content-store";

export default async function ProjectsPage() {
  const content = await getSiteContent();
  const projects = content.projects;

  return (
    <div className="section-shell py-14 sm:py-20">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{projects.pageTitle}</h1>
        <p className="mt-4 text-slate-600">{projects.pageSubtitle}</p>
      </header>

      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.items.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            problem={project.problem}
            workDone={project.workDone}
            outcome={project.outcome}
          />
        ))}
      </section>
    </div>
  );
}
