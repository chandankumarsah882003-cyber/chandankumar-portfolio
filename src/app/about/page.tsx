import NewsletterForm from "@/components/newsletter-form";

export default function AboutPage() {
  return (
    <div className="section-shell py-14 sm:py-20">
      <div className="mx-auto max-w-4xl space-y-8">
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">About Me</h1>
          <p className="mt-3 text-slate-600">
            This page shares the story, values, and direction behind the work.
          </p>
        </header>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Personal Story</h2>
          <p className="mt-3 text-slate-700">
            This section will highlight my journey and experiences. It will explain what inspired me to start building
            projects and sharing what I learn with others.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Journey / Background</h2>
          <p className="mt-3 text-slate-700">
            The background details will be expanded soon, including key milestones, lessons from challenges, and how
            each phase shaped my current approach to growth and execution.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Values / Interests</h2>
          <p className="mt-3 text-slate-700">
            I value clarity, consistency, and real-world impact. My interests include learning systems, writing, and
            creating practical resources that help people move forward with confidence.
          </p>
        </section>

        <NewsletterForm
          title="Stay updated with weekly ideas and experiences"
          description="Newsletter launching soon. Stay tuned."
          buttonText="Subscribe now"
        />
      </div>
    </div>
  );
}
