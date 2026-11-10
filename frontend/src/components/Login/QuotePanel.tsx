export default function QuotePanel() {
  return (
    <aside className="relative hidden overflow-hidden bg-folio-dark font-grotesk lg:flex lg:items-center">
      {/* decorative ring */}
      <div
        aria-hidden="true"
        className="absolute -top-[139px] -right-[362px] size-[694px] rounded-full border-[92px] border-white/[0.045]"
      />

      <figure className="relative max-w-[420px] pl-16 lg:translate-y-9">
        <span
          aria-hidden="true"
          className="block h-12 font-serif text-[5rem] leading-none font-bold text-folio-purple"
        >
          “
        </span>

        <blockquote className="mt-3 text-[2rem] leading-[1.28] font-light text-white">
          Your portfolio should tell the story behind the code—not just list
          the tools you used.
        </blockquote>

        <figcaption className="mt-5 text-xs text-folio-muted">
          Built for developers finding their next opportunity.
        </figcaption>
      </figure>
    </aside>
  );
}
