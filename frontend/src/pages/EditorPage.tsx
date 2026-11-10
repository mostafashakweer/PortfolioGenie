import React, { useState, useRef } from "react";
import Sidebar from "../components/layout/Sidebar";

export default function PortfolioEditorPage() {
    const [skillInput, setSkillInput] = useState("");
    const [skills, setSkills] = useState<string[]>([]);
    const [activeTab, setActiveTab] = useState("Programming Languages");

    const [avatar, setAvatar] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState({
        fullName: "",
        title: "",
        email: "",
        phone: "",
        city: "",
        country: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddSkill = () => {
        if (skillInput.trim() && !skills.includes(skillInput.trim())) {
            setSkills([...skills, skillInput.trim()]);
            setSkillInput("");
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setAvatar(imageUrl);
        }
    };

    const handleRemoveImage = () => {
        setAvatar(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
        setFormData({
            fullName: "",
            title: "",
            email: "",
            phone: "",
            city: "",
            country: "",
        });
    };

    return (
        <div className="flex min-h-screen w-full bg-[#F8F9FC] font-sans antialiased text-[#19182A]">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto px-8 py-8 lg:px-10 flex flex-col justify-between w-full">
                <div>
                    {/* Upper Header Bar */}
                    <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between w-full">
                        <div>
                            <h1 className="text-3xl font-extrabold tracking-tight text-[#19182A]">
                                My Portfolio
                            </h1>
                            <p className="mt-1 text-sm font-normal text-gray-500">
                                Fill in your information to build your professional portfolio.
                            </p>
                        </div>

                        {/* Top Profile Completion Card */}
                        <div className="w-full max-w-md rounded-2xl border border-indigo-200/60 bg-white p-5 shadow-sm">
                            <div className="flex items-center justify-between">
                                <h3 className="text-sm font-bold text-[#19182A]">
                                    Profile Completion: 0%
                                </h3>
                                <span className="rounded-xl bg-indigo-50 px-3 py-1 text-xs font-semibold text-[#6753DB]">
                                    0 of 7 Sections
                                </span>
                            </div>

                            <div className="mt-3">
                                <div className="h-2 w-full overflow-hidden rounded-full bg-indigo-50">
                                    <div className="h-full w-0 rounded-full bg-[#6753DB] transition-all duration-300" />
                                </div>
                            </div>

                            <div className="mt-3 flex items-center justify-between text-[11px] text-gray-400">
                                <div className="flex items-center gap-1">
                                    <svg className="h-3.5 w-3.5 text-[#6753DB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>All fields are editable anytime</span>
                                </div>
                                <span className="font-medium text-gray-500">Draft</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 w-full">

                        {/* SECTION 1: Personal Information */}
                        <section className="w-full rounded-2xl border border-gray-200/70 bg-white p-6 shadow-sm sm:p-8">
                            <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-[#6753DB]">
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-base font-bold text-[#19182A]">Personal Information</h2>
                                        <p className="text-xs text-gray-400">Provide your basic contact and identity details.</p>
                                    </div>
                                </div>
                                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
                                    Step 01
                                </span>
                            </div>

                            {/* Avatar Upload */}
                            <div className="mb-6 flex items-center gap-4">
                                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-gray-400 border border-gray-200">
                                    {avatar ? (
                                        <img src={avatar} alt="Avatar" className="h-full w-full object-cover" />
                                    ) : (
                                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    )}
                                </div>

                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleImageChange}
                                    accept="image/png, image/jpeg"
                                    className="hidden"
                                />

                                <div>
                                    <div className="flex items-center gap-3">
                                        <button
                                            type="button"
                                            onClick={() => fileInputRef.current?.click()}
                                            className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition shadow-xs cursor-pointer"
                                        >
                                            Upload Image
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleRemoveImage}
                                            className="text-xs font-medium text-red-500 hover:underline cursor-pointer"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                    <p className="mt-1.5 text-[11px] text-gray-400">
                                        Recommended: Square 400x400px, PNG or JPG up to 2MB.
                                    </p>
                                </div>
                            </div>

                            {/* Input Grid */}
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                <div>
                                    <label className="mb-1.5 block text-xs font-semibold text-gray-700">Full Name *</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="e.g., John Doe"
                                        className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm placeholder:text-gray-400 focus:border-[#6753DB] focus:outline-none focus:ring-1 focus:ring-[#6753DB]"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1.5 block text-xs font-semibold text-gray-700">Professional Title *</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        placeholder="e.g., Full Stack Web Developer"
                                        className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm placeholder:text-gray-400 focus:border-[#6753DB] focus:outline-none focus:ring-1 focus:ring-[#6753DB]"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1.5 block text-xs font-semibold text-gray-700">Work Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="e.g., john@example.com"
                                        className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm placeholder:text-gray-400 focus:border-[#6753DB] focus:outline-none focus:ring-1 focus:ring-[#6753DB]"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1.5 block text-xs font-semibold text-gray-700">Phone Number</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="e.g., +20 123 456 7890"
                                        className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm placeholder:text-gray-400 focus:border-[#6753DB] focus:outline-none focus:ring-1 focus:ring-[#6753DB]"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1.5 block text-xs font-semibold text-gray-700">Location (City)</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        placeholder="e.g., Cairo"
                                        className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm placeholder:text-gray-400 focus:border-[#6753DB] focus:outline-none focus:ring-1 focus:ring-[#6753DB]"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1.5 block text-xs font-semibold text-gray-700">Country</label>
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm text-gray-600 focus:border-[#6753DB] focus:outline-none focus:ring-1 focus:ring-[#6753DB]"
                                    >
                                        <option value="">Select a country...</option>
                                        <option value="EG">Egypt</option>
                                        <option value="SA">Saudi Arabia</option>
                                        <option value="AE">UAE</option>
                                        <option value="US">United States</option>
                                    </select>
                                </div>
                            </div>
                        </section>

                        {/* SECTION 2: About Me */}
                        <section className="w-full rounded-2xl border border-gray-200/70 bg-white p-6 shadow-sm sm:p-8">
                            <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-[#6753DB]">
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-base font-bold text-[#19182A]">About Me</h2>
                                        <p className="text-xs text-gray-400">Add a summary that represents your journey and career philosophy.</p>
                                    </div>
                                </div>

                                <button className="flex items-center gap-1.5 rounded-xl border border-violet-200 bg-violet-50 px-3.5 py-1.5 text-xs font-bold text-[#6753DB] hover:bg-violet-100 transition cursor-pointer">
                                    <span>🪄</span> AI Generate
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="mb-1.5 flex items-center justify-between">
                                        <label className="text-xs font-semibold text-gray-700">Professional Summary *</label>
                                        <span className="text-[11px] text-gray-400">0 / 500 words</span>
                                    </div>
                                    <textarea
                                        rows={4}
                                        placeholder="A short summary about your background, passions, and core developer strengths..."
                                        className="w-full rounded-xl border border-gray-200 bg-white p-3.5 text-sm placeholder:text-gray-400 focus:border-[#6753DB] focus:outline-none focus:ring-1 focus:ring-[#6753DB]"
                                    />
                                </div>

                                <div>
                                    <div className="mb-1.5 flex items-center justify-between">
                                        <label className="text-xs font-semibold text-gray-700">Senior Project / Highlight (Optional)</label>
                                        <span className="text-[11px] text-gray-400">Optional</span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Briefly state your main achievement or current focus area..."
                                        className="w-full rounded-xl border border-gray-200 bg-white p-3 text-sm placeholder:text-gray-400 focus:border-[#6753DB] focus:outline-none focus:ring-1 focus:ring-[#6753DB]"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* SECTION 3: Skills & Technologies */}
                        <section className="w-full rounded-2xl border border-gray-200/70 bg-white p-6 shadow-sm sm:p-8">
                            <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-[#6753DB]">
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className="text-base font-bold text-[#19182A]">Skills & Technologies</h2>
                                        <p className="text-xs text-gray-400">Categorize and showcase your tech stack and competencies.</p>
                                    </div>
                                </div>
                                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
                                    Step 03
                                </span>
                            </div>

                            {/* Tabs */}
                            <div className="mb-5 flex items-center gap-2 overflow-x-auto pb-1">
                                {[
                                    "Programming Languages",
                                    "Frameworks & Libraries",
                                    "Tools & Technologies",
                                    "Soft Skills",
                                ].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`whitespace-nowrap rounded-xl px-4 py-2 text-xs font-semibold transition cursor-pointer ${activeTab === tab
                                                ? "bg-[#19182A] text-white shadow-xs"
                                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>

                            {/* Input & Add */}
                            <div className="mb-6 flex gap-2">
                                <input
                                    type="text"
                                    value={skillInput}
                                    onChange={(e) => setSkillInput(e.target.value)}
                                    placeholder={`Enter a ${activeTab.toLowerCase().slice(0, -1)} (e.g. React)...`}
                                    className="flex-1 rounded-xl border border-gray-200 bg-white p-3 text-sm placeholder:text-gray-400 focus:border-[#6753DB] focus:outline-none focus:ring-1 focus:ring-[#6753DB]"
                                />
                                <button
                                    onClick={handleAddSkill}
                                    className="flex items-center gap-1.5 rounded-xl bg-[#19182A] px-5 py-3 text-xs font-bold text-white transition hover:bg-black cursor-pointer"
                                >
                                    + Add Skill
                                </button>
                            </div>

                            {/* Empty State Banner */}
                            {skills.length === 0 ? (
                                <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-indigo-200 bg-white p-12 text-center shadow-xs">
                                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-[#6753DB]">
                                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-sm font-bold text-[#19182A]">No skills added yet</h3>
                                    <p className="mt-1 text-xs text-gray-400">
                                        Select a category above and add your skills to organize your stack.
                                    </p>
                                </div>
                            ) : (
                                <div className="flex flex-wrap gap-2.5">
                                    {skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="flex items-center gap-2 rounded-xl border border-violet-200 bg-violet-50 px-3.5 py-1.5 text-xs font-semibold text-[#6753DB]"
                                        >
                                            {skill}
                                            <button
                                                onClick={() => setSkills(skills.filter((_, i) => i !== index))}
                                                className="text-violet-400 hover:text-red-500 cursor-pointer"
                                            >
                                                ×
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            )}
                        </section>
                    </div>
                </div>

                {/* Bottom Actions Bar (Full width) */}
                <div className="mt-12 -mx-8 -mb-8 lg:-mx-10 flex items-center justify-between border-t border-gray-800 bg-[#19182A] px-8 py-5 text-white shadow-xl">
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        Changes are automatically saved as draft • Last saved: Never
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="rounded-xl border border-gray-700 bg-transparent px-4 py-2.5 text-xs font-semibold text-white hover:bg-white/10 transition cursor-pointer flex items-center gap-2">
                            <span>👁️</span> Preview Portfolio
                        </button>
                        <button className="rounded-xl bg-[#6753DB] px-6 py-2.5 text-xs font-bold text-white hover:bg-violet-700 transition cursor-pointer flex items-center gap-2 shadow-sm">
                            <span>✓</span> Save Changes
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}