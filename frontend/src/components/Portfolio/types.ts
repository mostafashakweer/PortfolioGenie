export type SkillCategoryId = "languages" | "frameworks" | "tools" | "soft";

export interface SkillCategory {
  id: SkillCategoryId;
  label: string;
}

export interface PersonalInfo {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  country: string;
}

export interface AboutInfo {
  summary: string;
  objective: string;
}

export type Skills = Record<SkillCategoryId, string[]>;

export interface PortfolioDraft {
  personal: PersonalInfo;
  about: AboutInfo;
  skills: Skills;
}

export type FormErrors = Partial<
  Record<"fullName" | "title" | "email" | "summary", string>
>;
