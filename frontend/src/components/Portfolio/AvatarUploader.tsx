import { useEffect, useRef, useState } from "react";
import type { ChangeEvent } from "react";
import { UploadCloudIcon, UserIcon } from "../Workspace/icons";

const MAX_BYTES = 5 * 1024 * 1024;
const ACCEPTED_TYPES = ["image/jpeg", "image/png"];

export default function AvatarUploader() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState("");

  // Free the old preview URL when it changes or the component unmounts.
  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    if (!ACCEPTED_TYPES.includes(file.type)) {
      setError("Please choose a JPG or PNG image.");
      return;
    }
    if (file.size > MAX_BYTES) {
      setError("The image must be 5MB or smaller.");
      return;
    }

    setError("");
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleRemove = () => {
    setPreviewUrl(null);
    setError("");
  };

  return (
    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
      <div className="grid size-24 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-dashed border-folio-soft bg-[#f3f1fc]">
        {previewUrl ? (
          <img src={previewUrl} alt="Profile preview" className="size-full object-cover" />
        ) : (
          <UserIcon className="size-12 text-folio-muted" />
        )}
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-5">
          <input
            ref={inputRef}
            type="file"
            accept="image/png,image/jpeg"
            onChange={handleChange}
            className="sr-only"
            tabIndex={-1}
            aria-label="Upload profile image"
          />
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="inline-flex items-center gap-2 rounded-lg border border-folio-purple px-4 py-2.5 text-sm font-medium text-folio-purple transition hover:bg-folio-purple/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-folio-purple"
          >
            <UploadCloudIcon className="size-4" />
            Upload Image
          </button>
          <button
            type="button"
            onClick={handleRemove}
            className="rounded-md text-sm font-medium text-red-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Remove
          </button>
        </div>

        <p className="mt-3 text-xs text-folio-ink">
          Recommended: JPG or PNG, min 400×400px. Max 5MB. Clear background works
          best for dark/light themes.
        </p>
        {error && (
          <p role="alert" className="mt-2 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
