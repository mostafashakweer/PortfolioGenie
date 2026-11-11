import { InfoIcon } from "../Workspace/icons";

interface ProfileCompletionProps {
  completed: number;
  total: number;
}

export default function ProfileCompletion({ completed, total }: ProfileCompletionProps) {
  const percent = Math.round((completed / total) * 100);

  return (
    <aside
      aria-label="Profile completion"
      className="w-full rounded-2xl border-2 border-folio-soft bg-white p-4 sm:w-[390px] sm:shrink-0"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold whitespace-nowrap text-folio-ink">
          Profile Completion: {percent}%
        </p>
        <span className="rounded-full bg-[#ebe8fa] px-3 py-1 text-xs font-medium whitespace-nowrap text-folio-purple">
          {completed} of {total} Sections
        </span>
      </div>

      <div
        role="progressbar"
        aria-label="Profile completion"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-3 h-2 overflow-hidden rounded-full bg-[#ebe8fa]"
      >
        <div
          className="h-full rounded-full bg-folio-purple transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-folio-muted">
        <span className="inline-flex items-center gap-1.5">
          <InfoIcon className="size-3.5 text-folio-purple" />
          All fields are editable anytime
        </span>
        <span>Draft</span>
      </div>
    </aside>
  );
}
