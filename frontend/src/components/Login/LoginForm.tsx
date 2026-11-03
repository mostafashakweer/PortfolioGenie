import { useId, useRef, useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon, GitHubIcon, SparklesIcon } from "../Landing/icons";

export interface LoginFormProps {
  onGithubLogin?: () => void;
  onEmailSubmit?: (email: string) => void;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(value: string): string {
  if (!value.trim()) return "Please enter your email address.";
  if (!EMAIL_PATTERN.test(value.trim()))
    return "Please enter a valid email address.";
  return "";
}

export default function LoginForm({
  onGithubLogin,
  onEmailSubmit,
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();
  const errorId = useId();
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = validateEmail(email);
    setError(message);

    if (message) {
      inputRef.current?.focus();
      return;
    }

    onEmailSubmit?.(email.trim());
    navigate("/home");
  };

  return (
    <div className="w-full max-w-[488px] text-center font-grotesk">
      <span className="mx-auto grid size-[69px] place-items-center rounded-[1.25rem] bg-folio-purple text-white">
        <SparklesIcon className="size-8" />
      </span>

      <p className="mt-7 text-[0.8125rem] font-medium text-folio-ink">
        Don&apos;t have an account?{" "}
        <a
          href="#signup"
          className="text-folio-purple hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-folio-purple">
          Sign UP
        </a>
      </p>

      <h1 className="mt-2 text-[2.75rem] leading-tight font-bold text-folio-ink">
        Welcome to Folio.
      </h1>

      <p className="mt-9 text-[0.8125rem] font-medium text-folio-muted">
        Connect your GitHub and turn your work into a portfolio worth sharing.
      </p>

      <button
        type="button"
        onClick={onGithubLogin}
        className="mt-6 flex h-[59px] w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-folio-ink text-[0.9375rem] font-medium text-white transition hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-folio-ink">
        <GitHubIcon className="size-6" />
        Continue with GitHub
      </button>

      <div className="my-7 flex items-center gap-4 text-sm font-medium text-folio-muted">
        <span className="h-px flex-1 bg-gray-300" aria-hidden="true" />
        or
        <span className="h-px flex-1 bg-gray-300" aria-hidden="true" />
      </div>

      <form onSubmit={handleSubmit} noValidate className="text-left">
        <label
          htmlFor={inputId}
          className="mb-4 block pl-2 text-[0.9375rem] font-medium text-folio-ink">
          Email address
        </label>

        <input
          ref={inputRef}
          id={inputId}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={`h-[59px] w-full rounded-xl border bg-white px-5 text-[0.9375rem] text-folio-ink placeholder:text-folio-muted/70 focus:outline-2 focus:outline-offset-2 focus:outline-folio-purple ${
            error ? "border-red-500" : "border-gray-200"
          }`}
        />

        <p
          id={errorId}
          role="alert"
          className="mt-2 min-h-5 pl-2 text-sm text-red-600">
          {error}
        </p>

        <button
          type="submit"
          className="mt-2 flex h-[59px] w-full cursor-pointer items-center justify-center gap-3 rounded-xl bg-folio-purple text-[0.9375rem] font-medium text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-folio-purple">
          Continue with email
          <ArrowRightIcon className="size-[18px]" />
        </button>
      </form>

      <p className="mt-10 text-[0.6875rem] text-folio-muted">
        By continuing, you agree to Folio&apos;s Terms and Privacy Policy.
      </p>
    </div>
  );
}
