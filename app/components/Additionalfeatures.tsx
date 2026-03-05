"use client";

import { useReveal } from "@/app/lib/Usereveal ";

const EXTRA = [
  {
    icon: "📚",
    title: "Prompt Library",
    desc: "300+ expert-crafted templates for marketing, engineering, legal, and creative work. Skip the blank page — just pick and customize.",
  },
  {
    icon: "🌐",
    title: "Real-time Web Search",
    desc: "Ground every answer in live data. Our search-augmented models browse the web so you never get stale, hallucinated responses.",
  },
  {
    icon: "🖼️",
    title: "Image Generation",
    desc: "Access multiple image models — DALL·E 3, Stable Diffusion, and more — from a single interface. Compare results in seconds.",
  },
  {
    icon: "🕰️",
    title: "Conversation History",
    desc: "Every chat is saved, searchable, and resumable. Pick up exactly where you left off, across any device.",
  },
  {
    icon: "📂",
    title: "Import & Analyze",
    desc: "Drop in PDFs, images, spreadsheets, or docs. Ask questions, extract data, and get AI-powered summaries instantly.",
  },
  {
    icon: "🌍",
    title: "Multilingual",
    desc: "Work fluently across 100+ languages. Translate, draft, and respond in the language that fits your audience.",
  },
];

export default function AdditionalFeatures() {
  const ref = useReveal();

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 reveal">
          <p className="text-indigo-500 font-semibold text-sm uppercase tracking-widest mb-3">
            More Features
          </p>
          <h2 className="font-display font-bold text-4xl text-zinc-900 dark:text-white">
            Built for how you actually work
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
            Every detail designed to remove friction between you and the work
            that matters.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXTRA.map((item, i) => (
            <div
              key={item.title}
              className={`reveal delay-${(i % 5) + 1} group flex flex-col gap-4 p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300`}
            >
              <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h3 className="font-display font-semibold text-base text-zinc-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}