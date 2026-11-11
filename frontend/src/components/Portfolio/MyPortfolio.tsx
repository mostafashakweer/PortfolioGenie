import { useState } from "react";
import AboutSection from "./AboutSection";
import PersonalInfoSection from "./PersonalInfoSection";
import ProfileCompletion from "./ProfileCompletion";
import SaveBar from "./SaveBar";
import SkillsSection from "./SkillsSection";
import {
  TOTAL_SECTIONS,
  countCompletedSections,
  getErrors,
} from "./portfolioData";
import { usePortfolioDraft } from "./usePortfolioDraft";

export default function MyPortfolio() {
  const {
    draft,
    lastSaved,
    updatePersonal,
    updateAbout,
    addSkill,
    removeSkill,
    saveNow,
  } = usePortfolioDraft();
  const [showErrors, setShowErrors] = useState(false);

  // Required-field errors only appear after the first "Save Changes" click.
  const errors = showErrors ? getErrors(draft) : {};
  const completed = countCompletedSections(draft);

  const handleSave = () => {
    setShowErrors(true);
    saveNow();
  };

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1 px-4 pt-8 pb-12 sm:px-8 lg:px-10 xl:px-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-folio-ink lg:text-5xl">
              My Portfolio
            </h1>
            <p className="mt-3 text-sm text-folio-ink">
              Fill in your information to build your professional portfolio.
            </p>
          </div>
          <ProfileCompletion completed={completed} total={TOTAL_SECTIONS} />
        </div>

        <div className="mt-8 flex flex-col gap-8">
          <PersonalInfoSection
            values={draft.personal}
            errors={errors}
            onChange={updatePersonal}
          />
          <AboutSection
            values={draft.about}
            errors={errors}
            onChange={updateAbout}
          />
          <SkillsSection
            skills={draft.skills}
            onAdd={addSkill}
            onRemove={removeSkill}
          />
        </div>
      </div>

      <SaveBar lastSaved={lastSaved} onSave={handleSave} />
    </div>
  );
}
