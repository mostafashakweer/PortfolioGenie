import type {
  FormErrors,
  PortfolioDraft,
  SkillCategory,
} from "./types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  { id: "languages", label: "Programming Languages" },
  { id: "frameworks", label: "Frameworks & Libraries" },
  { id: "tools", label: "Tools & Technologies" },
  { id: "soft", label: "Soft Skills" },
];

export const SUMMARY_MAX_LENGTH = 600;

/** Total number of sections in the portfolio form (only the first 3 are built so far). */
export const TOTAL_SECTIONS = 7;

export const COUNTRIES = [
  "Egypt",
  "Saudi Arabia",
  "United Arab Emirates",
  "Kuwait",
  "Qatar",
  "Jordan",
  "Morocco",
  "United States",
  "United Kingdom",
  "Canada",
  "Germany",
];

export const emptyDraft: PortfolioDraft = {
  personal: {
    fullName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    country: "",
  },
  about: { summary: "", objective: "" },
  skills: { languages: [], frameworks: [], tools: [], soft: [] },
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function getErrors(draft: PortfolioDraft): FormErrors {
  const errors: FormErrors = {};

  if (!draft.personal.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }
  if (!draft.personal.title.trim()) {
    errors.title = "Professional title is required.";
  }

  const email = draft.personal.email.trim();
  if (!email) {
    errors.email = "Email address is required.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!draft.about.summary.trim()) {
    errors.summary = "Professional summary is required.";
  }

  return errors;
}

export function countCompletedSections(draft: PortfolioDraft): number {
  const errors = getErrors(draft);

  const personalDone = !errors.fullName && !errors.title && !errors.email;
  const aboutDone = !errors.summary;
  const skillsDone = Object.values(draft.skills).some((list) => list.length > 0);

  return [personalDone, aboutDone, skillsDone].filter(Boolean).length;
}
