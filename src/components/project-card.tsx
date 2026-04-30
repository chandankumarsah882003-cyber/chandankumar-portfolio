type ProjectCardProps = {
  title: string;
  problem: string;
  workDone: string;
  outcome: string;
};

export default function ProjectCard({ title, problem, workDone, outcome }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <dl className="mt-4 space-y-3 text-sm text-slate-700">
        <div>
          <dt className="font-medium text-slate-900">Problem</dt>
          <dd>{problem}</dd>
        </div>
        <div>
          <dt className="font-medium text-slate-900">What was done</dt>
          <dd>{workDone}</dd>
        </div>
        <div>
          <dt className="font-medium text-slate-900">Outcome</dt>
          <dd>{outcome}</dd>
        </div>
      </dl>
    </article>
  );
}
