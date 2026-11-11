import type { ReactNode } from "react";

interface SectionCardProps {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  aside?: ReactNode;
  children: ReactNode;
}

export function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span className="shrink-0 rounded-md bg-[#efeef3] px-3 py-1.5 text-xs font-semibold tracking-wide text-folio-muted">
      {children}
    </span>
  );
}

export default function SectionCard({
  id,
  icon,
  title,
  description,
  aside,
  children,
}: SectionCardProps) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className="rounded-[1.75rem] border-2 border-folio-soft bg-white p-6 sm:p-8"
    >
      <header className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#ebe8fa] text-folio-purple">
            {icon}
          </span>
          <div>
            <h2 id={titleId} className="text-xl font-bold text-folio-ink">
              {title}
            </h2>
            <p className="mt-1 text-sm text-folio-muted">{description}</p>
          </div>
        </div>
        {aside}
      </header>

      <div className="mt-8">{children}</div>
    </section>
  );
}
