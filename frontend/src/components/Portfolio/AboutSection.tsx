import { SparklesIcon } from "../Landing/icons";
import { UserIcon } from "../Workspace/icons";
import { TextAreaField } from "./fields";
import { SUMMARY_MAX_LENGTH } from "./portfolioData";
import SectionCard from "./SectionCard";
import type { AboutInfo, FormErrors } from "./types";

interface AboutSectionProps {
  values: AboutInfo;
  errors: FormErrors;
  onChange: (patch: Partial<AboutInfo>) => void;
  /** Called when the user clicks "Generate with AI" (wired to the AI feature later). */
  onGenerate?: () => void;
}

export default function AboutSection({
  values,
  errors,
  onChange,
  onGenerate,
}: AboutSectionProps) {
  return (
    <SectionCard
      id="about-me"
      icon={<UserIcon className="size-6" />}
      title="About Me"
      description="Craft a narrative that differentiates your engineering philosophy."
      aside={
        <button
          type="button"
          onClick={onGenerate}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-folio-soft px-3 py-2 text-xs font-medium text-folio-purple transition hover:bg-folio-purple/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-folio-purple"
        >
          <SparklesIcon className="size-3.5" />
          Generate with AI
        </button>
      }
    >
      <div className="flex flex-col gap-8">
        <TextAreaField
          label="Professional Summary"
          required
          maxLength={SUMMARY_MAX_LENGTH}
          placeholder="Write a compelling summary introducing your engineering background, core expertise, and passion..."
          hint={`${values.summary.length} / ${SUMMARY_MAX_LENGTH} characters`}
          value={values.summary}
          error={errors.summary}
          onChange={(e) => onChange({ summary: e.target.value })}
        />
        <TextAreaField
          label="Career Objective (Optional)"
          hint="Optional"
          placeholder="State what roles or challenges you are looking for next..."
          value={values.objective}
          onChange={(e) => onChange({ objective: e.target.value })}
        />
      </div>
    </SectionCard>
  );
}
