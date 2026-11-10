import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col justify-between border-r border-[#26243D] bg-[#19182A] text-white overflow-y-auto">
            <div>
                {/* Logo Section */}
                <div className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6753DB] text-white shadow-sm">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-white">
                            Folio<span className="text-[#6753DB]">.</span>
                        </span>
                    </div>
                    <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#25233B] text-gray-400 hover:text-white cursor-pointer">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </div>

                {/* Workspace Nav */}
                <div className="px-4 py-2">
                    <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-wider text-gray-400">
                        WORKSPACE
                    </p>

                    <nav className="space-y-1">
                        <Link
                            to="/home"
                            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${isActive("/home") ? "bg-[#6753DB] text-white" : "text-gray-400 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Home
                        </Link>

                        <Link
                            to="/editor"
                            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${isActive("/editor") ? "bg-[#25233B] text-[#816FE8]" : "text-gray-400 hover:bg-white/5 hover:text-white"
                                }`}
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                            My Portfolio
                        </Link>

                        <a
                            href="#projects"
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                            My Projects
                        </a>

                        <a
                            href="#ai"
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            Folio AI
                        </a>

                        <a
                            href="#settings"
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Settings
                        </a>

                        <a
                            href="#help"
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            Help & Support
                        </a>
                    </nav>
                </div>
            </div>

            {/* Bottom Log Out */}
            <div className="p-4 border-t border-[#26243D]">
                <button
                    onClick={() => { }}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition cursor-pointer"
                >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Log Out
                </button>
            </div>
        </aside>
    );
}