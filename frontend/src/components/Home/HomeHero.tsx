import { useState } from "react";
import type { FormEvent, ReactNode, SVGProps } from "react";
import GetStarted from "./GetStarted";

/* ------------------------------------------------------------------ */
/* Types                                                              */
/* ------------------------------------------------------------------ */
type IconProps = SVGProps<SVGSVGElement>;
type IconComponent = (props: IconProps) => ReactNode;

interface NavItem {
  label: string;
  href: string;
  icon: IconComponent;
}

interface QuickAction {
  label: string;
  prompt: string;
  icon: IconComponent;
}

/* ------------------------------------------------------------------ */
/* Icons                                                              */
/* ------------------------------------------------------------------ */
const createIcon = (children: ReactNode): IconComponent =>
  function Icon(props: IconProps) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}>
        {children}
      </svg>
    );
  };

const SparklesIcon = createIcon(
  <>
    <path d="M11 3l2 5.5L18.5 10.5 13 12.5 11 18l-2-5.5L3.5 10.5 9 8.5 11 3z" />
    <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
  </>,
);
const HomeIcon = createIcon(<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10" />);
const BookIcon = createIcon(
  <>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M9 4v16" />
  </>,
);
const FolderIcon = createIcon(
  <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />,
);
const WandIcon = createIcon(
  <path d="M5 19L17 7M15 5l4 4M6 4v3M4.5 5.5h3M19 15v3M17.5 16.5h3" />,
);
const SlidersIcon = createIcon(
  <>
    <path d="M4 7h10M18 7h2M4 17h2M10 17h10" />
    <circle cx="16" cy="7" r="2" />
    <circle cx="8" cy="17" r="2" />
  </>,
);
const LifebuoyIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3.5" />
    <path d="M5.6 5.6l3.5 3.5M14.9 14.9l3.5 3.5M18.4 5.6l-3.5 3.5M9.1 14.9l-3.5 3.5" />
  </>,
);
const CrownIcon = createIcon(
  <path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5L3 8z" fill="currentColor" />,
);
const SearchIcon = createIcon(
  <>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </>,
);
const BellIcon = createIcon(
  <path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4l2-2zM10 21h4" />,
);
const HelpIcon = createIcon(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7M12 17h.01" />
  </>,
);
const ArrowUpIcon = createIcon(<path d="M12 19V5M5 12l7-7 7 7" />);
const BoltIcon = createIcon(<path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z" />);
const DatabaseIcon = createIcon(
  <>
    <ellipse cx="12" cy="6" rx="7" ry="3" />
    <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
  </>,
);
const PenIcon = createIcon(
  <path d="M4 20l4-1 11-11-3-3L5 16l-1 4zM14 7l3 3" />,
);

/* ------------------------------------------------------------------ */
/* Data                                                               */
/* ------------------------------------------------------------------ */
const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", icon: HomeIcon },
  { label: "My Portfolio", href: "/portfolio", icon: BookIcon },
  { label: "My Projects", href: "/projects", icon: FolderIcon },
  { label: "Folio AI", href: "/ai", icon: WandIcon },
  { label: "Settings", href: "/settings", icon: SlidersIcon },
];

const QUICK_ACTIONS: QuickAction[] = [
  {
    label: "Create my portfolio",
    prompt: "Create my portfolio from my GitHub projects",
    icon: BoltIcon,
  },
  {
    label: "Improve my About Me",
    prompt: "Improve my About Me section",
    icon: DatabaseIcon,
  },
  {
    label: "Enhance my project descriptions",
    prompt: "Enhance my project descriptions",
    icon: PenIcon,
  },
];

/* ------------------------------------------------------------------ */
/* Components                                                         */
/* ------------------------------------------------------------------ */
function Logo() {
  return (
    <a href="/" className="flex items-center gap-2" aria-label="Folio home">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#7c5cff]">
        <SparklesIcon className="h-5 w-5" />
      </span>
      <span className="text-2xl font-semibold tracking-tight">
        Folio<span className="text-[#7c5cff]">.</span>
      </span>
    </a>
  );
}

function IconButton({
  label,
  icon: Icon,
}: {
  label: string;
  icon: IconComponent;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="text-[#8b84a7] transition-colors hover:text-white">
      <Icon className="h-6 w-6" />
    </button>
  );
}

function Topbar({ userInitials }: { userInitials: string }) {
  return (
    <header className="flex items-center gap-4 px-6 py-4 lg:px-8">
      <Logo />

      <button
        type="button"
        className="flex items-center gap-2 rounded-full bg-gradient-to-b from-[#dcdce2] to-[#45454d] px-5 py-2.5 text-sm font-semibold shadow-lg ring-1 ring-white/20 transition hover:brightness-110">
        <CrownIcon className="h-4 w-4 text-yellow-300" />
        Upgrade
      </button>

      <div className="ml-auto flex items-center gap-4 sm:gap-6">
        <label className="relative hidden w-72 md:block">
          <span className="sr-only">Search projects and templates</span>
          <SearchIcon className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2" />
          <input
            type="search"
            placeholder="Search Projects, Templates..."
            className="w-full rounded-md border border-white/80 bg-transparent py-1.5 pl-9 pr-3 text-xs text-white placeholder:text-white/80 focus:border-[#7c5cff] focus:outline-none"
          />
        </label>

        <IconButton label="Notifications" icon={BellIcon} />
        <IconButton label="Help" icon={HelpIcon} />

        <button
          type="button"
          aria-label="Account menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#7c5cff] text-sm font-medium transition-colors hover:bg-[#7c5cff]/20">
          {userInitials}
        </button>
      </div>
    </header>
  );
}

function Sidebar({
  items,
  activeHref,
}: {
  items: NavItem[];
  activeHref: string;
}) {
  return (
    <aside className="hidden w-60 shrink-0 border-r border-white/5 px-5 pt-8 lg:block">
      <p className="px-3 text-xs font-medium uppercase tracking-wider text-[#8b84a7]">
        Workspace
      </p>

      <nav aria-label="Workspace" className="mt-6 flex flex-col gap-1">
        {items.map(({ label, href, icon: Icon }) => {
          const isActive = href === activeHref;

          return (
            <a
              key={href}
              href={href}
              aria-current={isActive ? "page" : undefined}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                isActive
                  ? "font-medium text-[#7c5cff]"
                  : "text-[#8b84a7] hover:text-white"
              }`}>
              <Icon className="h-4 w-4" />
              {label}
            </a>
          );
        })}
      </nav>

      <hr className="mx-3 my-8 border-white/15" />

      <a
        href="/support"
        className="flex items-center gap-3 px-3 py-2.5 text-sm text-[#8b84a7] transition-colors hover:text-white">
        <LifebuoyIcon className="h-4 w-4" />
        Help &amp; Support
      </a>
    </aside>
  );
}

interface PromptBoxProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
}

function PromptBox({ value, onChange, onSubmit }: PromptBoxProps) {
  const trimmed = value.trim();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (trimmed) onSubmit(trimmed);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-[0_0_24px_rgba(124,92,255,0.55)] focus-within:ring-2 focus-within:ring-[#7c5cff]/70">
      <SparklesIcon className="h-8 w-8 shrink-0 text-[#7c5cff]" />

      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Ask AI to build or improve your portfolio"
        placeholder="Ask AI to build or improve your portfolio..."
        className="min-w-0 flex-1 bg-transparent text-base text-slate-700 outline-none placeholder:text-slate-500"
      />

      <button
        type="submit"
        disabled={!trimmed}
        aria-label="Send"
        className="text-[#7c5cff] transition hover:scale-110 disabled:opacity-40 disabled:hover:scale-100">
        <ArrowUpIcon className="h-7 w-7" />
      </button>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                               */
/* ------------------------------------------------------------------ */
export default function HomePage() {
  const [prompt, setPrompt] = useState("");

  const handleAskAi = (value: string) => {
    // TODO: send `value` to your AI service
    console.log("Prompt:", value);
  };

  return (
    <>
      <div className="min-h-screen bg-[#2a2341] font-['Inter',sans-serif] text-white antialiased">
        <div className="flex min-h-screen flex-col">
          <Topbar userInitials="HT" />
          <div className="flex flex-1 border-t border-white/5">
            <Sidebar items={NAV_ITEMS} activeHref="/" />

            <main className="flex flex-1 flex-col items-center px-6 pb-16 pt-14 text-center lg:pt-20">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-1 text-xs font-semibold text-[#7c5cff] shadow-[0_0_24px_rgba(124,92,255,0.55)]">
                <SparklesIcon className="h-3.5 w-3.5" />
                AI Portfolio Architect
              </span>

              <h1 className="mt-10 text-4xl font-extrabold tracking-tight [text-shadow:0_0_22px_rgba(124,92,255,0.9)] sm:text-5xl">
                Let&apos;s Build Your Portfolio
              </h1>

              <p className="mt-6 max-w-md text-lg leading-relaxed text-[#8b84a7]">
                Your AI-powered assistant is here to help you create a standout
                developer portfolio in minutes.
              </p>

              <div className="mt-12 w-full max-w-xl">
                <PromptBox
                  value={prompt}
                  onChange={setPrompt}
                  onSubmit={handleAskAi}
                />

                <ul className="mt-5 flex flex-wrap justify-center gap-3">
                  {QUICK_ACTIONS.map(({ label, prompt: text, icon: Icon }) => (
                    <li key={label}>
                      <button
                        type="button"
                        onClick={() => setPrompt(text)}
                        className="flex items-center gap-2 rounded-lg bg-black/20 px-4 py-2 text-xs text-white/90 transition-colors hover:bg-black/35">
                        <Icon className="h-3.5 w-3.5" />
                        {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </main>
          </div>
        </div>
      </div>
      <GetStarted />
    </>
  );
}
