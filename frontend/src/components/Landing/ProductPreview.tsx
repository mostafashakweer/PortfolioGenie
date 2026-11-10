function ProductPreview() {
  const steps = ["Profile", "Projects", "About me", "Theme", "Review"];
  return (
    <section className="bg-white px-5 pb-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <a href="#" className="flex shrink-0 items-center gap-3">
          <span className="relative flex h-10 w-10 -rotate-6 items-center justify-center rounded-xl bg-[#6753DB] text-white shadow-sm">
            <svg
              viewBox="0 0 40 40"
              className="h-8 w-8 rotate-6"
              fill="white"
              aria-hidden="true"
            >
              <path
                d="M20 5 L21.8 10.5 L26 12 L21.8 13.5 L20 19 L18.2 13.5 L14 12 L18.2 10.5 Z"
                fill="none"
                stroke="white"
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
              <path d="M10 21 L11.5 25 L15 26.5 L11.5 28 L10 32 L8.5 28 L5 26.5 L8.5 25 Z" />
              <path d="M28 21 L29.5 25 L33 26.5 L29.5 28 L28 32 L26.5 28 L23 26.5 L26.5 25 Z" />
            </svg>
          </span>
          <span className="text-3xl font-bold leading-none tracking-tight text-[#19182A]">
            Folio<span className="text-[#6753DB]">.</span>
          </span>
        </a>
          <span className="flex items-center gap-2 text-sm text-gray-500">
            <span className="h-2 w-2 rounded-full bg-[#459D4F]"></span>
            Saved
          </span>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-500">Preview</span>
            <span className="rounded-full bg-[#745DDF] px-4 py-1.5 font-semibold text-white">
              Publish
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E4E2F3] text-xs font-semibold text-[#745DDF]">
              HT
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-[200px_1fr_1fr]">
          <aside className="hidden border-r border-gray-200 p-4 md:block">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              Build your portfolio
            </p>
            <ul className="space-y-1">
              {steps.map((step, i) => (
                <li
                  key={step}
                  className={`flex items-center gap-3 rounded-full px-3 py-2 text-sm ${
                    i === 1
                      ? "bg-[#EDEAFB] font-semibold text-[#19182A]"
                      : "text-gray-600"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                      i === 1
                        ? "bg-[#6753DB] text-white"
                        : "border border-gray-300"
                    }`}
                  >
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </aside>
          <div className="p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#6753DB]">
              Step 2 of 5
            </p>
            <h3 className="mt-3 text-2xl font-bold text-[#000000]">
              Choose your best work
            </h3>
            <p className="mt-3 max-w-xs text-sm text-gray-500">
              We found 12 public repositories. Pick the projects that best show
              what you can do.
            </p>
            <div className="mt-6 space-y-3">
              {[
                {
                  name: "Spendly",
                  desc: "A smart personal finance dashboard",
                  tag: "TypeScript",
                  stars: 128,
                },
                {
                  name: "Orbit UI",
                  desc: "An accessible React component library",
                  tag: "React",
                  stars: 64,
                },
              ].map((p) => (
                <div
                  key={p.name}
                  className="rounded-xl border border-gray-200 p-4 shadow-sm"
                >
                  <p className="text-sm font-semibold text-[#19182A]">
                    {p.name}
                  </p>
                  <p className="text-xs text-gray-500">{p.desc}</p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-gray-500">
                    <span className="rounded-full bg-[#EDEAFB] px-3 py-1 text-[#6753DB]">
                      {p.tag}
                    </span>
                    ★ {p.stars}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <span className="text-sm text-gray-600">← Back</span>
              <span className="rounded-full bg-[#6753DB] px-5 py-2 text-sm font-semibold text-white">
                Continue →
              </span>
            </div>
          </div>
          <div className="hidden bg-gray-50 p-6 md:block">
            <p className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
              <span className="h-2 w-2 rounded-full bg-[#459D4F]"></span>Live
              preview
            </p>
            <div className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="flex items-center justify-between px-4 py-2 text-xs">
                <span className="font-bold">Hind</span>
                <span className="text-gray-500">work · About · Contact</span>
              </div>
              <div className="bg-[#26233F] px-6 py-10 text-center text-white">
                <p className="text-[10px] text-[#8A7DDD]">
                  HELLO, I'M Hind Tamer
                </p>
                <p className="mt-3 text-2xl font-semibold leading-tight">
                  I design &amp; build
                  <span className="block text-[#8A7DDD]">digital things.</span>
                </p>
                <p className="mt-3 text-[10px] text-gray-300">
                  I build thoughtful experiences where clean code meets
                  purposeful design.
                </p>
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold">Spendly</p>
                <div className="mt-2 h-10 rounded bg-[#C0B8E8]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProductPreview;
