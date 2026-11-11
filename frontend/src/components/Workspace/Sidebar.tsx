import type { ComponentType, SVGProps } from "react";
import { NavLink } from "react-router-dom";
import { SparklesIcon } from "../Landing/icons";
import {
  ContactIcon,
  FolderIcon,
  HomeIcon,
  LifeBuoyIcon,
  LogOutIcon,
  SlidersIcon,
} from "./icons";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  onLogout?: () => void;
}

interface NavItem {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** Items without a route are not clickable yet. Add `to` when the page exists. */
  to?: string;
}

const mainItems: NavItem[] = [
  { label: "Home", icon: HomeIcon, to: "/" },
  { label: "My Portfolio", icon: ContactIcon, to: "/my-portfolio" },
  { label: "My Projects", icon: FolderIcon },
  { label: "Folio AI", icon: SparklesIcon },
  { label: "Settings", icon: SlidersIcon },
];

const supportItem: NavItem = { label: "Help & Support", icon: LifeBuoyIcon };

const itemBase =
  "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-folio-soft";
const itemIdle = "text-folio-muted hover:bg-white/5 hover:text-white";
const itemActive = "bg-white/10 text-folio-soft";

function SidebarItem({ item, onClick }: { item: NavItem; onClick: () => void }) {
  const Icon = item.icon;

  if (item.to) {
    return (
      <NavLink
        to={item.to}
        end
        onClick={onClick}
        className={({ isActive }) =>
          `${itemBase} ${isActive ? itemActive : itemIdle}`
        }
      >
        <Icon className="size-[18px]" />
        {item.label}
      </NavLink>
    );
  }

  return (
    <button type="button" className={`${itemBase} ${itemIdle}`}>
      <Icon className="size-[18px]" />
      {item.label}
    </button>
  );
}

export default function Sidebar({ open, onClose, onLogout }: SidebarProps) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 shrink-0 flex-col bg-folio-dark px-5 pt-6 pb-6 transition-transform lg:sticky lg:top-[72px] lg:z-auto lg:h-[calc(100vh_-_72px)] lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav aria-label="Workspace">
          <p className="mb-4 px-3 text-xs font-medium tracking-widest text-folio-muted">
            WORKSPACE
          </p>
          <ul className="flex flex-col gap-1">
            {mainItems.map((item) => (
              <li key={item.label}>
                <SidebarItem item={item} onClick={onClose} />
              </li>
            ))}
          </ul>

          <hr className="my-4 border-white/15" />

          <SidebarItem item={supportItem} onClick={onClose} />
        </nav>

        <button
          type="button"
          onClick={onLogout}
          className={`${itemBase} ${itemIdle} mt-auto`}
        >
          <LogOutIcon className="size-[18px]" />
          Log Out
        </button>
      </aside>
    </>
  );
}
