import { useId } from "react";
import { ContactIcon } from "../Workspace/icons";
import AvatarUploader from "./AvatarUploader";
import { TextField } from "./fields";
import { COUNTRIES } from "./portfolioData";
import SectionCard, { SectionBadge } from "./SectionCard";
import type { FormErrors, PersonalInfo } from "./types";

interface PersonalInfoSectionProps {
  values: PersonalInfo;
  errors: FormErrors;
  onChange: (patch: Partial<PersonalInfo>) => void;
}

export default function PersonalInfoSection({
  values,
  errors,
  onChange,
}: PersonalInfoSectionProps) {
  const countryListId = useId();

  return (
    <SectionCard
      id="personal-info"
      icon={<ContactIcon className="size-6" />}
      title="Personal Information"
      description="Provide your basic contact and professional identity."
      aside={<SectionBadge>SEC. 01</SectionBadge>}
    >
      <AvatarUploader />

      <div className="mt-8 grid gap-x-8 gap-y-6 md:grid-cols-2">
        <TextField
          label="Full Name"
          required
          autoComplete="name"
          placeholder="e.g. Hind Tamer"
          value={values.fullName}
          error={errors.fullName}
          onChange={(e) => onChange({ fullName: e.target.value })}
        />
        <TextField
          label="Professional Title"
          required
          placeholder="e.g. Senior Full-Stack Engineer"
          value={values.title}
          error={errors.title}
          onChange={(e) => onChange({ title: e.target.value })}
        />
        <TextField
          label="Email Address"
          required
          type="email"
          autoComplete="email"
          placeholder="e.g. hind.tamer@example.com"
          value={values.email}
          error={errors.email}
          onChange={(e) => onChange({ email: e.target.value })}
        />
        <TextField
          label="Phone Number"
          type="tel"
          autoComplete="tel"
          placeholder="e.g. +20 (100) 000-0000"
          value={values.phone}
          onChange={(e) => onChange({ phone: e.target.value })}
        />
        <TextField
          label="Location / City"
          autoComplete="address-level2"
          placeholder="e.g. Cairo, CA"
          value={values.location}
          onChange={(e) => onChange({ location: e.target.value })}
        />
        <TextField
          label="Country"
          list={countryListId}
          autoComplete="country-name"
          placeholder="Select or enter country"
          value={values.country}
          onChange={(e) => onChange({ country: e.target.value })}
        />
        <datalist id={countryListId}>
          {COUNTRIES.map((country) => (
            <option key={country} value={country} />
          ))}
        </datalist>
      </div>
    </SectionCard>
  );
}
