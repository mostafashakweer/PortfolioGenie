interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "GitHub", label: "your repos, imported automatically" },
  { value: "SEO", label: "descriptions written to be found" },
  { value: "Responsive", label: "looks great on every screen" },
];

export default function WhySection() {
  return (
    <section
      aria-labelledby='why-title'
      className='w-full bg-white px-6 pt-14 text-center font-grotesk md:px-12 xl:px-20 xl:pt-24'
    >
      <p className='mb-6 text-xs font-medium tracking-widest text-folio-purple'>
        WHY FOLIO
      </p>

      <h2
        id='why-title'
        className='mx-auto mb-7 max-w-[900px] text-balance text-4xl leading-tight font-bold text-folio-ink md:text-[2.75rem] xl:text-6xl'
      >
        A great developer deserves more than a list of repositories.
      </h2>

      <p className='mx-auto mb-16 max-w-[560px] text-[1.0625rem] leading-relaxed font-medium text-folio-muted xl:mb-20 xl:max-w-[760px] xl:text-xl'>
        Your portfolio should make the value behind your code clear. Folio helps
        you find the signal, shape the story, and share work you are proud of.
      </p>

      <dl className='grid w-full grid-cols-1 border-t-[6px] border-[#f1f1f4] pt-7 pb-10 sm:grid-cols-3 xl:pt-10 xl:pb-16'>
        {stats.map((stat) => (
          <div
            key={stat.label}
            className='flex flex-col-reverse gap-2 border-[#e3e3e8] px-4 py-2 not-first:max-sm:mt-4 not-first:max-sm:border-t not-first:max-sm:pt-6 not-first:sm:border-l'
          >
            <dt className='text-[0.8125rem] font-medium text-folio-muted xl:text-base'>
              {stat.label}
            </dt>
            <dd className='text-[1.75rem] font-semibold text-folio-purple xl:text-5xl'>
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
