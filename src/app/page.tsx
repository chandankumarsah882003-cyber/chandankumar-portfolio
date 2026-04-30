import Link from "next/link";
import NewsletterForm from "@/components/newsletter-form";

const highlights = [
  {
    title: "Audience Growth Playbook",
    description: "A practical framework for turning content into consistent subscriber growth."
  },
  {
    title: "Learning Sprint Journal",
    description: "Weekly notes that document experiments, lessons, and measurable progress."
  },
  {
    title: "Creator Systems Setup",
    description: "A simple operating system for publishing quality work without burnout."
  }
];

export default function HomePage() {
  return (
    <div className="py-14 sm:py-20">
      <section className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-accent">Personal Portfolio</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Chandankumar shares practical insights for growth and meaningful work.
          </h1>
          <p className="mt-6 text-base text-slate-600 sm:text-lg">
            Helping people learn faster, build better habits, and turn experience into repeatable progress.
          </p>
          <div className="mt-8">
            <NewsletterForm
              compact
              title="Subscribe to the weekly newsletter"
              description="Short, actionable notes delivered every week."
              buttonText="Subscribe weekly"
            />
          </div>
        </div>
      </section>

      <section className="section-shell mt-16 sm:mt-24">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Quick Introduction</h2>
          <p className="mt-4 text-slate-700">
            Chandankumar is a builder and lifelong learner focused on sharing practical lessons from real projects.
            This section will highlight his journey and experiences.
          </p>
        </div>
      </section>

      <section className="section-shell mt-16 sm:mt-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Highlights / Work Preview
            </h2>
            <p className="mt-2 text-slate-600">A quick look at current focus areas and ongoing work.</p>
          </div>
          <Link href="/projects" className="hidden text-sm font-medium text-accent hover:text-accent-hover sm:block">
            View all projects
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell mt-16 sm:mt-24">
        <NewsletterForm
          title="Get weekly insights on growth, learning, and real experiences"
          description="Each email includes honest lessons, useful frameworks, and practical next steps."
          buttonText="Join the newsletter"
        />
      </section>
    </div>
  );
}
