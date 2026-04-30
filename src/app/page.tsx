import Link from "next/link";
import NewsletterForm from "@/components/newsletter-form";
import { getSiteContent } from "@/lib/content-store";

export default async function HomePage() {
  const content = await getSiteContent();
  const home = content.home;
  const newsletter = content.newsletter;

  return (
    <div className="py-14 sm:py-20">
      <section className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-accent">{home.badge}</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {home.title}
          </h1>
          <p className="mt-6 text-base text-slate-600 sm:text-lg">{home.subtitle}</p>
          <div className="mt-8">
            <NewsletterForm
              compact
              title={newsletter.compactTitle}
              description={newsletter.compactDescription}
              buttonText={newsletter.compactButtonText}
            />
          </div>
        </div>
      </section>

      <section className="section-shell mt-16 sm:mt-24">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{home.quickIntroTitle}</h2>
          <p className="mt-4 text-slate-700">{home.quickIntroText}</p>
          {home.heroImageUrl ? (
            <img src={home.heroImageUrl} alt="Home section visual" className="mt-5 w-full rounded-xl object-cover" />
          ) : null}
          {home.heroVideoUrl ? (
            <video src={home.heroVideoUrl} controls className="mt-5 w-full rounded-xl" />
          ) : null}
        </div>
      </section>

      <section className="section-shell mt-16 sm:mt-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {home.highlightsTitle}
            </h2>
            <p className="mt-2 text-slate-600">{home.highlightsSubtitle}</p>
          </div>
          <Link href="/projects" className="hidden text-sm font-medium text-accent hover:text-accent-hover sm:block">
            View all projects
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {home.highlights.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell mt-16 sm:mt-24">
        <NewsletterForm
          title={newsletter.homeTitle}
          description={newsletter.homeDescription}
          buttonText={newsletter.homeButtonText}
        />
      </section>
    </div>
  );
}
