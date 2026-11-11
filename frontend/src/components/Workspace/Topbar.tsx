import WorkspaceLogo from "./WorkspaceLogo";
import {
  BellIcon,
  CrownIcon,
  HelpCircleIcon,
  MenuIcon,
  SearchIcon,
} from "./icons";

interface TopbarProps {
  onMenuClick: () => void;
  initials?: string;
}

const iconButton =
  "grid size-10 place-items-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-folio-soft";

export default function Topbar({ onMenuClick, initials = "HT" }: TopbarProps) {
  return (
    <header className="sticky top-0 z-20 flex h-[72px] shrink-0 items-center gap-3 bg-folio-dark px-4 text-white sm:gap-4 sm:px-6">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open menu"
        className={`${iconButton} rounded-lg lg:hidden`}
      >
        <MenuIcon className="size-6" />
      </button>

      <WorkspaceLogo />

      <button
        type="button"
        className="ml-2 hidden items-center gap-2 rounded-full bg-linear-to-b from-[#e4e1ee] to-[#9b97ae] px-5 py-2 text-sm font-medium text-folio-ink sm:inline-flex"
      >
        <CrownIcon className="size-4 text-[#e8a317]" />
        Upgrade
      </button>

      <div className="ml-auto flex items-center gap-2 sm:gap-4">
        <label className="relative hidden md:block">
          <span className="sr-only">Search projects and templates</span>
          <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-white/70" />
          <input
            type="search"
            placeholder="Search Projects, Templates..."
            className="h-10 w-72 rounded-md border border-white/40 bg-transparent pr-3 pl-10 text-sm text-white placeholder:text-white/60 focus:outline-2 focus:outline-folio-soft"
          />
        </label>

        <button type="button" aria-label="Notifications" className={iconButton}>
          <BellIcon className="size-5" />
        </button>
        <button type="button" aria-label="Help" className={iconButton}>
          <HelpCircleIcon className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Account menu"
          className="grid size-11 place-items-center rounded-full border-2 border-white/50 text-sm font-medium transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-folio-soft"
        >
          {initials}
        </button>
      </div>
    </header>
  );
}
