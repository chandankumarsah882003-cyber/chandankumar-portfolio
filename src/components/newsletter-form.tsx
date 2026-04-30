type NewsletterFormProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  compact?: boolean;
};

export default function NewsletterForm({
  title = "Newsletter launching soon. Stay tuned.",
  description = "Get weekly insights on growth, learning, and real experiences.",
  buttonText = "Subscribe",
  compact = false
}: NewsletterFormProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white ${
        compact ? "p-5" : "p-6 sm:p-8"
      }`}
    >
      <h3 className={`${compact ? "text-lg" : "text-2xl"} font-semibold text-slate-900`}>
        {title}
      </h3>
      <p className="mt-2 text-sm text-slate-600 sm:text-base">{description}</p>

      <form
        action="https://example.com/subscribe"
        method="post"
        className="mt-5 flex flex-col gap-3 sm:flex-row"
      >
        <label htmlFor={compact ? "email-compact" : "email"} className="sr-only">
          Email address
        </label>
        <input
          id={compact ? "email-compact" : "email"}
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="h-11 w-full rounded-lg border border-slate-300 px-4 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-indigo-100"
        />
        <button
          type="submit"
          className="h-11 rounded-lg bg-accent px-5 text-sm font-medium text-white transition hover:bg-accent-hover"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}
