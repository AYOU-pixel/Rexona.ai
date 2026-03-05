"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "API", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Pricing", href: "#pricing" },
];

const FEATURES = [
  { logo: "/library.png", title: "Prompt Library", desc: "Pre-made templates to supercharge your workflow" },
  { logo: "/settings.png", title: "Settings", desc: "All frontier models in one seamless platform" },
  { logo: "/search.png", title: "Realtime Web Search", desc: "Live internet access directly in your chat" },
  { logo: "/google-gemini.png", title: "Image Generation", desc: "Create stunning visuals from plain text" },
  { logo: "/history.png", title: "History", desc: "Pick up any conversation right where you left off" },
  { logo: "/community.png", title: "Multilingual", desc: "Communicate fluently in 100+ languages" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("color-mode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored === "dark" || (!stored && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("color-mode", next ? "dark" : "light");
  };

  return (
    <header
      className={`fixed top-0 lg:top-4 left-0 lg:left-1/2 lg:-translate-x-1/2 z-50 w-full lg:max-w-5xl lg:rounded-2xl h-[60px] flex items-center px-4 lg:px-6 gap-4 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl shadow-lg"
          : "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 shrink-0">
        <img src="/logo.png" alt="Rexona logo" className="w-7 h-7 rounded-lg object-cover" />
        <span className="font-display font-bold text-lg tracking-wide uppercase">Rexona</span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-1 mx-auto">
        {NAV_LINKS.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
          >
            {l.label}
          </Link>
        ))}

        {/* Features dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setFeaturesOpen(true)}
          onMouseLeave={() => setFeaturesOpen(false)}
        >
          <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all">
            Features
            <svg className={`w-3 h-3 transition-transform ${featuresOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[540px] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl shadow-2xl p-4 grid grid-cols-2 gap-2 transition-all duration-200 ${featuresOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}>
            {FEATURES.map((f) => (
              <Link
                key={f.title}
                href="#"
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors group"
              >
                <span className="text-xl mt-0.5">
                  <img src={f.logo} alt={f.title} className="w-6 h-6" />
                </span>
                <div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-indigo-500 transition-colors">{f.title}</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{f.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Right actions */}
      <div className="ml-auto flex items-center gap-3">
        <button
          onClick={toggleDark}
          aria-label="Toggle theme"
          className="w-8 h-8 flex items-center justify-center rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
        >
          {dark ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/></svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
          )}
        </button>
        <Link
          href="#"
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/25"
        >
          Try Playground
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-[60px] left-0 w-full bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800 p-6 flex flex-col gap-4 shadow-2xl">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-zinc-700 dark:text-zinc-300 hover:text-indigo-500 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <button
            className="text-left text-base font-medium text-zinc-700 dark:text-zinc-300"
            onClick={() => setFeaturesOpen(!featuresOpen)}
          >
            Features {featuresOpen ? "▲" : "▼"}
          </button>
          {featuresOpen && (
            <div className="grid grid-cols-1 gap-2 pl-2">
              {FEATURES.map((f) => (
                <Link key={f.title} href="#" onClick={() => setMobileOpen(false)} className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-indigo-500 transition-colors">
                  <img src={f.logo} alt={f.title} className="w-6 h-6 inline-block mr-2" />
                  {f.title}
                </Link>
              ))}
            </div>
          )}
          <Link
            href="#"
            onClick={() => setMobileOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition-colors"
          >
            Try Playground →
          </Link>
        </div>
      )}
    </header>
  );
}