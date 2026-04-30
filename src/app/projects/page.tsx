import ProjectCard from "@/components/project-card";

const projects = [
  {
    title: "Newsletter Growth Dashboard",
    problem: "Tracking subscriber trends manually consumed too much time.",
    workDone: "Built a clean dashboard prototype to visualize growth metrics weekly.",
    outcome: "Faster decisions and better clarity on content performance."
  },
  {
    title: "Learning Library System",
    problem: "Useful lessons from books and projects were scattered across notes.",
    workDone: "Created a structured personal knowledge workflow with reusable templates.",
    outcome: "Improved recall and easier publishing of practical insights."
  },
  {
    title: "Creator Workflow Optimization",
    problem: "Content creation lacked consistency and clear publishing rhythm.",
    workDone: "Designed a repeatable weekly process for planning, writing, and review.",
    outcome: "More consistent output and less decision fatigue."
  },
  {
    title: "Community Feedback Loop",
    problem: "Audience questions were not feeding back into future content.",
    workDone: "Set up a lightweight feedback collection and prioritization process.",
    outcome: "Better topic relevance and stronger trust with readers."
  }
];

export default function ProjectsPage() {
  return (
    <div className="section-shell py-14 sm:py-20">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Projects</h1>
        <p className="mt-4 text-slate-600">Details about these projects will be expanded soon with deeper case studies.</p>
      </header>

      <section className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
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
