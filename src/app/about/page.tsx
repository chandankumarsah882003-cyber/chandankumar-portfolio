import NewsletterForm from "@/components/newsletter-form";
import { getSiteContent } from "@/lib/content-store";

export default async function AboutPage() {
  const content = await getSiteContent();
  const about = content.about;
  const newsletter = content.newsletter;

  return (
    <div className="section-shell py-14 sm:py-20">
      <div className="mx-auto max-w-4xl space-y-8">
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{about.pageTitle}</h1>
          <p className="mt-3 text-slate-600">{about.pageSubtitle}</p>
        </header>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">{about.personalStoryTitle}</h2>
          <p className="mt-3 text-slate-700">{about.personalStoryText}</p>
          {about.imageUrl ? (
            <img src={about.imageUrl} alt="About section visual" className="mt-5 w-full rounded-xl object-cover" />
          ) : null}
          {about.videoUrl ? <video src={about.videoUrl} controls className="mt-5 w-full rounded-xl" /> : null}
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">{about.journeyTitle}</h2>
          <p className="mt-3 text-slate-700">{about.journeyText}</p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">{about.valuesTitle}</h2>
          <p className="mt-3 text-slate-700">{about.valuesText}</p>
        </section>

        <NewsletterForm
          title={newsletter.aboutTitle}
          description={newsletter.aboutDescription}
          buttonText={newsletter.aboutButtonText}
        />
      </div>
    </div>
  );
}
