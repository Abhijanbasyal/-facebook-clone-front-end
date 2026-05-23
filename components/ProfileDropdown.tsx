"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfileDropdown() {
  const [open, setOpen]   = useState(false);
  const [dark, setDark]   = useState(false);
  const ref               = useRef<HTMLDivElement>(null);
  const router            = useRouter();

  // Read saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const handleLogout = () => {
    // clear auth tokens here later
    router.push("/login");
  };

  return (
    <div ref={ref} className="relative flex-shrink-0">

      {/* Avatar button */}
      <button
        aria-label="Profile menu"
        onClick={() => setOpen((o) => !o)}
        className="w-9 h-9 rounded-full bg-white/30 border-2 border-white/50
                   flex items-center justify-center text-white text-sm font-bold
                   hover:bg-white/40 transition-colors"
      >
        A
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-11 w-[300px] bg-bg-primary rounded-xl
                        border border-border-default shadow-lg z-50 p-2">

          {/* Profile row */}
          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 p-2 rounded-lg
                       hover:bg-bg-secondary transition-colors"
          >
            <div className="w-14 h-14 rounded-full bg-primary-light text-primary
                            flex items-center justify-center text-xl font-semibold flex-shrink-0">
              A
            </div>
            <div>
              <p className="font-semibold text-text-primary text-[15px]">Abhijan</p>
              <p className="text-primary text-xs mt-0.5">See your profile</p>
            </div>
          </Link>

          <hr className="my-2 border-border-default" />

          {/* Settings & Privacy */}
          <button className="flex items-center gap-3 w-full p-2 rounded-lg
                             hover:bg-bg-secondary transition-colors text-left group">
            <span className="w-9 h-9 rounded-full bg-bg-tertiary flex items-center
                             justify-center text-lg flex-shrink-0">
              ⚙️
            </span>
            <div className="flex-1">
              <p className="text-sm font-medium text-text-primary">Settings &amp; privacy</p>
              <p className="text-xs text-text-secondary">Account, security, ads</p>
            </div>
            <span className="text-text-tertiary text-lg">›</span>
          </button>

          {/* Dark mode toggle */}
          <div className="flex items-center gap-3 w-full p-2 rounded-lg
                          hover:bg-bg-secondary transition-colors cursor-pointer"
               onClick={toggleTheme}>
            <span className="w-9 h-9 rounded-full bg-bg-tertiary flex items-center
                             justify-center text-lg flex-shrink-0">
              {dark ? "☀️" : "🌙"}
            </span>
            <div className="flex-1">
              <p className="text-sm font-medium text-text-primary">Dark mode</p>
              <p className="text-xs text-text-secondary">Adjust the appearance</p>
            </div>
            {/* Toggle switch */}
            <div className={`w-11 h-6 rounded-full transition-colors relative flex-shrink-0
                            ${dark ? "bg-primary" : "bg-bg-tertiary"}`}>
              <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white
                               transition-all duration-200
                               ${dark ? "left-[22px]" : "left-0.5"}`} />
            </div>
          </div>

          {/* Help & Support */}
          <button className="flex items-center gap-3 w-full p-2 rounded-lg
                             hover:bg-bg-secondary transition-colors text-left">
            <span className="w-9 h-9 rounded-full bg-bg-tertiary flex items-center
                             justify-center text-lg flex-shrink-0">
              ❓
            </span>
            <div className="flex-1">
              <p className="text-sm font-medium text-text-primary">Help &amp; support</p>
              <p className="text-xs text-text-secondary">Help center, report a problem</p>
            </div>
            <span className="text-text-tertiary text-lg">›</span>
          </button>

          <hr className="my-2 border-border-default" />

          {/* Log out */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full p-2 rounded-lg
                       hover:bg-bg-secondary transition-colors text-left"
          >
            <span className="w-9 h-9 rounded-full bg-red-50 flex items-center
                             justify-center text-lg flex-shrink-0">
              🚪
            </span>
            <p className="text-sm font-medium text-error">Log out</p>
          </button>

        </div>
      )}
    </div>
  );
}