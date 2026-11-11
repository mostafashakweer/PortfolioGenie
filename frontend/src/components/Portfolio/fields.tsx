import { useId } from "react";
import type {
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from "react";

const controlBase =
  "w-full rounded-xl border bg-white px-5 text-base text-folio-ink placeholder:text-folio-muted/70 focus:outline-2 focus:outline-offset-2 focus:outline-folio-purple";

interface FieldShellProps {
  id: string;
  label: string;
  required?: boolean;
  hint?: ReactNode;
  error?: string;
  children: ReactNode;
}

function FieldShell({ id, label, required, hint, error, children }: FieldShellProps) {
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-[0.9375rem] font-semibold text-folio-ink">
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </label>
        {hint && <span className="text-xs text-folio-muted">{hint}</span>}
      </div>

      {children}

      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: ReactNode;
  error?: string;
}

export function TextField({
  label,
  hint,
  error,
  required,
  className = "",
  ...props
}: TextFieldProps) {
  const id = useId();

  return (
    <FieldShell id={id} label={label} required={required} hint={hint} error={error}>
      <input
        {...props}
        id={id}
        aria-required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${controlBase} h-14 ${
          error ? "border-red-500" : "border-folio-soft/70"
        } ${className}`}
      />
    </FieldShell>
  );
}

interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  hint?: ReactNode;
  error?: string;
}

export function TextAreaField({
  label,
  hint,
  error,
  required,
  className = "",
  ...props
}: TextAreaFieldProps) {
  const id = useId();

  return (
    <FieldShell id={id} label={label} required={required} hint={hint} error={error}>
      <textarea
        {...props}
        id={id}
        aria-required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${controlBase} min-h-[140px] resize-y py-4 ${
          error ? "border-red-500" : "border-folio-soft/70"
        } ${className}`}
      />
    </FieldShell>
  );
}
