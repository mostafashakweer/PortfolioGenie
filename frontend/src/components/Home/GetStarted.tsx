import { useState } from "react";
import type { ReactNode, SVGProps } from "react";

/* ------------------------------------------------------------------ */
/* Types                                                              */
/* ------------------------------------------------------------------ */
type ArtVariant = "templates" | "repository" | "studio";
type MetricTone = "success" | "accent" | "info";

interface Step {
  id: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  art: ArtVariant;
  /** Optional real image; falls back to the generated artwork. */
  image?: string;
}

interface Metric {
  label: string;
  value: string;
  progress: number; // 0 - 100
  tone: MetricTone;
}

/* ------------------------------------------------------------------ */
/* Icons                                                              */
/* ------------------------------------------------------------------ */
const createIcon = (children: ReactNode) =>
  function Icon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}>
        {children}
      </svg>
    );
  };

const ArrowRightIcon = createIcon(<path d="M5 12h14M13 6l6 6-6 6" />);
const CheckIcon = createIcon(<path d="M5 12.5l4.5 4.5L19 7.5" />);

/* ------------------------------------------------------------------ */
/* Data                                                               */
/* ------------------------------------------------------------------ */
const STEPS: Step[] = [
  {
    id: "template",
    title: "Choose a Template",
    description:
      "Find a design that matches your aesthetic, from minimal engineering sheets to interactive canvas folios.",
    cta: "Browse templates",
    href: "/templates",
    art: "templates",
  },
  {
    id: "projects",
    title: "Add Your Projects",
    description:
      "Showcase your best repositories, open-source work, and key milestones with automatic commit parsing.",
    cta: "Import Code",
    href: "/projects/import",
    art: "repository",
  },
  {
    id: "customize",
    title: "Customize Your Portfolio",
    description:
      "Tailor typography tokens, themes, dynamic custom domains, and personal brand voice without touching markup.",
    cta: "Open studio",
    href: "/studio",
    art: "studio",
  },
];

const FEATURES = [
  "Automated GitHub Sync",
  "Performance Benchmarks",
  "Interactive Code Playgrounds",
  "Custom SEO Meta Generation",
];

const TABS = ["HyperStream", "NeuralMesh", "ChronosDB"];

const METRICS: Metric[] = [
  { label: "Reliability", value: "99.98%", progress: 99, tone: "success" },
  { label: "Latency", value: "~48ms", progress: 70, tone: "accent" },
  { label: "Throughput", value: "128TB", progress: 85, tone: "info" },
];

const NARRATIVE =
  "Engineered a distributed telemetry ingest pipeline utilizing Go goroutines and Kafka partitioning, reducing cloud footprint by 32% while streaming real-time metrics.";

const ART_STYLES: Record<ArtVariant, { glow: string; tile: string }> = {
  templates: {
    glow: "from-violet-500/40",
    tile: "border-violet-300/30 bg-violet-400/10",
  },
  repository: {
    glow: "from-cyan-400/40",
    tile: "border-cyan-300/30 bg-cyan-400/10",
  },
  studio: {
    glow: "from-fuchsia-500/40",
    tile: "border-fuchsia-300/30 bg-fuchsia-400/10",
  },
};

const BAR_TONE: Record<MetricTone, string> = {
  success: "bg-emerald-400",
  accent: "bg-violet-400",
  info: "bg-cyan-400",
};

/* ------------------------------------------------------------------ */
/* Components                                                         */
/* ------------------------------------------------------------------ */
function CardArt({
  variant,
  image,
  alt,
}: {
  variant: ArtVariant;
  image?: string;
  alt: string;
}) {
  if (image) {
    return (
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="h-32 w-full object-cover"
      />
    );
  }

  const { glow, tile } = ART_STYLES[variant];

  return (
    <div
      aria-hidden="true"
      className="relative h-32 overflow-hidden bg-[#150f24]">
      <div
        className={`absolute inset-0 bg-gradient-to-tr ${glow} to-transparent`}
      />
      <div className="absolute -inset-6 grid -rotate-6 grid-cols-4 gap-2 p-4">
        {Array.from({ length: 12 }, (_, index) => (
          <span key={index} className={`h-9 rounded-md border ${tile}`} />
        ))}
      </div>
    </div>
  );
}

function StepCard({ title, description, cta, href, art, image }: Step) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#3a3251] shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      <CardArt variant={art} image={image} alt={title} />

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#8b84a7]">
          {description}
        </p>

        <a
          href={href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#a08cf5] transition-colors hover:text-white">
          {cta}
          <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}

function MetricCard({ label, value, progress, tone }: Metric) {
  return (
    <div className="rounded-lg bg-white/[0.07] p-3">
      <p className="text-[10px] font-medium uppercase tracking-wider text-[#8b84a7]">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold">{value}</p>

      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full rounded-full ${BAR_TONE[tone]}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

function EngineMockup() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <div className="rounded-xl border border-white/5 bg-[#241d38] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      <div className="flex items-center gap-3 border-b border-white/5 pb-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
        </div>
        <span className="text-[11px] text-[#8b84a7]">
          portfolio-engine.config
        </span>
        <span className="ml-auto rounded-md border border-[#7c5cff]/60 px-3 py-1 text-[10px] text-[#a08cf5]">
          Active Branch
        </span>
      </div>

      <div
        role="tablist"
        aria-label="Data sources"
        className="mt-4 flex flex-wrap gap-2">
        {TABS.map((tab) => {
          const isActive = tab === activeTab;

          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-3 py-1 text-[11px] font-medium transition-colors ${
                isActive
                  ? "bg-[#7c5cff] text-white"
                  : "bg-white/10 text-[#8b84a7] hover:text-white"
              }`}>
              {tab}
            </button>
          );
        })}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {METRICS.map((metric) => (
          <MetricCard key={metric.label} {...metric} />
        ))}
      </div>

      <div className="mt-4 rounded-lg bg-black/20 p-4">
        <div className="flex items-center justify-between gap-2 text-[11px]">
          <span className="font-medium text-[#a08cf5]">
            architectural-narrative.md
          </span>
          <span className="text-[#8b84a7]">AI Synthesized in 1.4s</span>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-[#8b84a7]">
          &ldquo;{NARRATIVE}&rdquo;
        </p>
      </div>
    </div>
  );
}

function FeaturePanel() {
  return (
    <div className="mt-14 grid items-center gap-10 rounded-3xl bg-[#3a3251] p-8 lg:grid-cols-2 lg:p-10">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-[#7c5cff]/60 px-4 py-1.5 text-xs text-[#a08cf5]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#7c5cff]" />
          Adaptive Synthesis
        </span>

        <h3 className="mt-6 text-3xl font-bold leading-tight">
          Make Your Portfolio Stand Out
        </h3>

        <p className="mt-4 leading-relaxed text-[#b7afd2]">
          Use intelligent developer-first synthesis to transform raw commits
          into compelling case studies, showcase your tech stack with
          interactive depth, and present your engineering story with authority.
        </p>

        <ul className="mt-8 grid gap-x-6 gap-y-3 text-xs sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <CheckIcon className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <EngineMockup />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                               */
/* ------------------------------------------------------------------ */
export default function GetStartedPage() {
  return (
      <div className="min-h-screen bg-[#2a2341] font-['Inter',sans-serif] text-white antialiased">
        <div className="flex min-h-screen flex-col">
        <section
          aria-labelledby="get-started-title"
          className="mx-auto w-full max-w-5xl px-6 py-12">
          <h2
            id="get-started-title"
            className="text-3xl font-bold [text-shadow:0_0_22px_rgba(124,92,255,0.9)]">
            Get Started
          </h2>
          <p className="mt-2 text-lg text-[#8b84a7]">
            Essential steps to take your developer narrative live.
          </p>

          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((step) => (
              <li key={step.id}>
                <StepCard {...step} />
              </li>
            ))}
          </ul>

          <FeaturePanel />
        </section>
      </div>
    </div>
  );
}
