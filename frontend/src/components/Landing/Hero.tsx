function Hero() {
  return (
    <section className="relative min-h-[800px] overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div aria-hidden="true"
            className="pointer-events-none absolute -right-48 inset-y-10 h-[600px] w-[600px] rounded-full bg-[#E4E0F8] opacity-50"
        >
        </div>
      <div className="relative mx-auto flex max-w-7xl flex-col items-center text-center">
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center text-[#8A7DDD]">
            <svg
              viewBox="0 0 40 40"
              className="h-8 w-8"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M20 5 L21.8 10.5 L26 12 L21.8 13.5 L20 19 L18.2 13.5 L14 12 L18.2 10.5 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
              <path d="M10 21 L11.5 25 L15 26.5 L11.5 28 L10 32 L8.5 28 L5 26.5 L8.5 25 Z" />
              <path d="M28 21 L29.5 25 L33 26.5 L29.5 28 L28 32 L26.5 28 L23 26.5 L26.5 25 Z" />
            </svg>
          </span>

          <span className="text-sm font-semibold tracking-wide text-[#8A7DDD]">
            The smarter portfolio builder
          </span>
        </div>
        <h1 className="text-4xl font-bold text-[#19182A] sm:text-6xl">
          Your code tells a story.
          <span className="mt-6 block text-[#745DDF] ">
            Make it unforgettable.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Folio turns your GitHub activity into a polished developer
          portfolio—with AI-powered writing, guided project curation, and zero
          design stress.
        </p>
        <div className="mt-8 flex flex-wrap items-start justify-center gap-4">
          <div className="flex flex-col items-end gap-4">
            <a
              href="#build"
              className="rounded-xl bg-[#6753DB] px-6 py-4 font-semibold text-white transition hover:bg-[#11101D]"
            >
              Build my portfolio →
            </a>
            <div className="flex flex-col items-start gap-3">
              <div className="flex gap-1 text-[#8A7DDD]" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    viewBox="0 0 24 24"
                    className="h-3 w-3"
                    fill="currentColor"
                  >
                    <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3.1-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9z" />
                  </svg>
                ))}
              </div>
              <p className="w-0 overflow-visible whitespace-nowrap text-left text-sm font-medium text-[#949198]">
                Loved by developers building their next chapter
              </p>
            </div>
          </div>
          <a
            href="#showcase"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold text-[#19182A] transition hover:text-[#6753DB]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E1E1E4]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            </span>
            See a live example
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
