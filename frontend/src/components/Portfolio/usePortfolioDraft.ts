import { useCallback, useEffect, useRef, useState } from "react";
import { emptyDraft } from "./portfolioData";
import type {
  AboutInfo,
  PersonalInfo,
  PortfolioDraft,
  SkillCategoryId,
} from "./types";

const STORAGE_KEY = "folio:portfolio-draft";
const AUTOSAVE_DELAY_MS = 800;

interface StoredDraft {
  draft: PortfolioDraft;
  savedAt: string;
}

function readStoredDraft(): StoredDraft | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as StoredDraft;
    return {
      savedAt: parsed.savedAt,
      draft: {
        personal: { ...emptyDraft.personal, ...parsed.draft.personal },
        about: { ...emptyDraft.about, ...parsed.draft.about },
        skills: { ...emptyDraft.skills, ...parsed.draft.skills },
      },
    };
  } catch {
    return null;
  }
}

/**
 * Holds the portfolio form data, autosaves it to localStorage as a draft
 * and exposes helpers to update each part of the form.
 */
export function usePortfolioDraft() {
  const [stored] = useState(readStoredDraft);
  const [draft, setDraft] = useState<PortfolioDraft>(
    () => stored?.draft ?? emptyDraft,
  );
  const [lastSaved, setLastSaved] = useState<Date | null>(() =>
    stored ? new Date(stored.savedAt) : null,
  );
  const initialDraft = useRef(draft);

  const persist = useCallback((value: PortfolioDraft) => {
    const savedAt = new Date();
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ draft: value, savedAt: savedAt.toISOString() }),
      );
    } catch {
      return;
    }
    setLastSaved(savedAt);
  }, []);

  // Autosave shortly after the user stops typing (skip the untouched draft).
  useEffect(() => {
    if (draft === initialDraft.current) return;

    const timer = window.setTimeout(() => persist(draft), AUTOSAVE_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [draft, persist]);

  const updatePersonal = useCallback((patch: Partial<PersonalInfo>) => {
    setDraft((prev) => ({ ...prev, personal: { ...prev.personal, ...patch } }));
  }, []);

  const updateAbout = useCallback((patch: Partial<AboutInfo>) => {
    setDraft((prev) => ({ ...prev, about: { ...prev.about, ...patch } }));
  }, []);

  const addSkill = useCallback((category: SkillCategoryId, skill: string) => {
    setDraft((prev) => {
      const list = prev.skills[category];
      if (list.some((s) => s.toLowerCase() === skill.toLowerCase())) return prev;
      return { ...prev, skills: { ...prev.skills, [category]: [...list, skill] } };
    });
  }, []);

  const removeSkill = useCallback((category: SkillCategoryId, skill: string) => {
    setDraft((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: prev.skills[category].filter((s) => s !== skill),
      },
    }));
  }, []);

  const saveNow = useCallback(() => persist(draft), [draft, persist]);

  return {
    draft,
    lastSaved,
    updatePersonal,
    updateAbout,
    addSkill,
    removeSkill,
    saveNow,
  };
}
