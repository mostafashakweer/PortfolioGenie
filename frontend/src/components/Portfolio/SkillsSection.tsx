import { useId, useState } from "react";
import type { FormEvent } from "react";
import { CodeIcon, CloseIcon, DotsIcon, ImageIcon, PlusIcon } from "../Workspace/icons";
import { SKILL_CATEGORIES } from "./portfolioData";
import SectionCard, { SectionBadge } from "./SectionCard";
import type { SkillCategoryId, Skills } from "./types";

interface SkillsSectionProps {
  skills: Skills;
  onAdd: (category: SkillCategoryId, skill: string) => void;
  onRemove: (category: SkillCategoryId, skill: string) => void;
}

export default function SkillsSection({ skills, onAdd, onRemove }: SkillsSectionProps) {
  const [activeId, setActiveId] = useState<SkillCategoryId>("languages");
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const inputId = useId();

  const activeCategory = SKILL_CATEGORIES.find((c) => c.id === activeId)!;
  const activeSkills = skills[activeId];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = value.trim();

    if (!name) {
      setMessage("Type a skill first.");
      return;
    }
    if (activeSkills.some((s) => s.toLowerCase() === name.toLowerCase())) {
      setMessage(`"${name}" is already in this category.`);
      return;
    }

    onAdd(activeId, name);
    setValue("");
    setMessage("");
  };

  const selectCategory = (id: SkillCategoryId) => {
    setActiveId(id);
    setMessage("");
  };

  return (
    <SectionCard
      id="skills"
      icon={<CodeIcon className="size-6" />}
      title="Skills & Technologies"
      description="Categorize and showcase your tech stack hierarchy."
      aside={<SectionBadge>SEC. 03</SectionBadge>}
    >
      <div role="tablist" aria-label="Skill categories" className="flex flex-wrap gap-3">
        {SKILL_CATEGORIES.map((category) => {
          const selected = category.id === activeId;
          const count = skills[category.id].length;

          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              id={`skills-tab-${category.id}`}
              aria-selected={selected}
              aria-controls="skills-panel"
              onClick={() => selectCategory(category.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-folio-purple ${
                selected
                  ? "bg-folio-dark text-white"
                  : "bg-[#f0eff5] text-folio-muted hover:bg-[#e7e5f0]"
              }`}
            >
              {category.label}
              {count > 0 && <span className="opacity-70">{" "}({count})</span>}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="skills-panel"
        aria-labelledby={`skills-tab-${activeId}`}
        className="mt-5"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <label htmlFor={inputId} className="sr-only">
              Add a skill to {activeCategory.label}
            </label>
            <ImageIcon className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-folio-muted" />
            <input
              id={inputId}
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter a skill (e.g. TypeScript, React, Docker)..."
              className="h-14 w-full rounded-xl border border-folio-soft/70 bg-white pr-5 pl-12 text-base text-folio-ink placeholder:text-folio-muted/70 focus:outline-2 focus:outline-offset-2 focus:outline-folio-purple"
            />
          </div>
          <button
            type="submit"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-folio-dark px-6 text-base font-semibold text-white transition hover:bg-folio-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-folio-dark"
          >
            <PlusIcon className="size-4" />
            Add Skill
          </button>
        </form>

        {message && (
          <p role="status" className="mt-2 text-sm text-red-600">
            {message}
          </p>
        )}

        {activeSkills.length === 0 ? (
          <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-folio-soft bg-[#ddd9f3] px-6 py-12 text-center">
            <span className="grid size-12 place-items-center rounded-full bg-white text-folio-purple">
              <DotsIcon className="size-6" />
            </span>
            <p className="font-semibold text-folio-ink">No skills added yet.</p>
            <p className="text-folio-muted">
              Type a skill above and click Add Skill to organize your stack.
            </p>
          </div>
        ) : (
          <ul className="mt-6 flex flex-wrap gap-3">
            {activeSkills.map((skill) => (
              <li
                key={skill}
                className="inline-flex items-center gap-2 rounded-full bg-[#ebe8fa] py-2 pr-2 pl-4 text-sm font-medium text-folio-ink"
              >
                {skill}
                <button
                  type="button"
                  aria-label={`Remove ${skill}`}
                  onClick={() => onRemove(activeId, skill)}
                  className="grid size-6 place-items-center rounded-full text-folio-muted transition hover:bg-white hover:text-red-600 focus-visible:outline-2 focus-visible:outline-folio-purple"
                >
                  <CloseIcon className="size-3.5" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </SectionCard>
  );
}
