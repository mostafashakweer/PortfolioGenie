import { CheckCircleIcon, EyeIcon } from "../Workspace/icons";

interface SaveBarProps {
  lastSaved: Date | null;
  onSave: () => void;
  onPreview?: () => void;
}

export default function SaveBar({ lastSaved, onSave, onPreview }: SaveBarProps) {
  const savedLabel = lastSaved
    ? lastSaved.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    : "Never";

  return (
    <div className="sticky bottom-0 z-10 flex flex-col gap-3 bg-folio-dark px-6 py-4 text-white sm:flex-row sm:items-center sm:justify-between sm:px-10">
      <p className="flex items-center gap-3 text-sm" role="status">
        <span className="size-3 shrink-0 rounded-full bg-[#38c7b5]" aria-hidden="true" />
        Changes are automatically saved as draft • Last saved: {savedLabel}
      </p>

      <div className="flex gap-3 [&>button]:flex-1 sm:[&>button]:flex-none">
        <button
          type="button"
          onClick={onPreview}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-3 py-3 text-xs whitespace-nowrap sm:px-5 sm:text-sm font-semibold text-folio-ink transition hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <EyeIcon className="size-4" />
          Preview Portfolio
        </button>
        <button
          type="button"
          onClick={onSave}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-folio-purple px-3 py-3 text-xs whitespace-nowrap sm:px-5 sm:text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-folio-soft"
        >
          <CheckCircleIcon className="size-4" />
          Save Changes
        </button>
      </div>
    </div>
  );
}
