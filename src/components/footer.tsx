import Link from "next/link";
import NewsletterForm from "@/components/newsletter-form";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-14">
      <div className="section-shell space-y-10">
        <NewsletterForm
          compact
          title="Join the weekly newsletter"
          description="Practical notes on building, learning, and growing each week."
          buttonText="Join now"
        />

        <div className="flex flex-col gap-6 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-slate-900">Chandankumar</p>
            <p className="text-sm text-slate-600">Professional, approachable, and focused on impact.</p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-700">
            <Link href="/about" className="transition hover:text-accent">
              About
            </Link>
            <Link href="/projects" className="transition hover:text-accent">
              Projects
            </Link>
            <a href="#" className="transition hover:text-accent">
              LinkedIn
            </a>
            <a href="#" className="transition hover:text-accent">
              GitHub
            </a>
            <a href="#" className="transition hover:text-accent">
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
