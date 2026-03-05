"use client";

import { useReveal } from "@/app/lib/Usereveal ";

const TOOLS = [
  {
    icon: "💻",
    title: "AI Code Generator",
    desc: "Describe what you want to build and get clean, working code in any language. Includes explanations, tests, and refactoring suggestions.",
  },
  {
    icon: "📄",
    title: "PDF Generator",
    desc: "Automate document creation and content extraction. Turn conversations into polished, branded PDFs in seconds.",
  },
  {
    icon: "🎨",
    title: "Image Generation",
    desc: "Create production-ready visuals from plain text using DALL·E 3, Stable Diffusion, and Midjourney-compatible engines.",
  },
  {
    icon: "📊",
    title: "AI Analytics",
    desc: "Surface patterns in your data, draft executive summaries, and generate charts with natural-language queries — no SQL needed.",
  },
  {
    icon: "🎵",
    title: "Music Generator",
    desc: "Compose original tracks across genres with a single prompt. Export stems, choose BPM, pick instrumentation — the AI handles the rest.",
  },
  {
    icon: "🎬",
    title: "Video Generator",
    desc: "Turn scripts, slides, or text prompts into engaging short-form videos. Perfect for content creators, marketers, and educators.",
  },
];

export default function Tools() {
  const ref = useReveal();

  return (
    <section className="py-24 px-4 bg-zinc-50 dark:bg-zinc-950" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Sticky label */}
          <div className="lg:w-64 shrink-0">
            <div className="lg:sticky lg:top-32">
              <p className="text-indigo-500 font-semibold text-sm uppercase tracking-widest mb-3 reveal">Pre-built Tools</p>
              <h2 className="font-display font-bold text-3xl text-zinc-900 dark:text-white mb-6 reveal delay-1">
                Everything your team needs, ready out of the box
              </h2>
              <a
                href="#"
                className="reveal delay-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-500 text-white text-sm font-semibold hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-500/25"
              >
                Explore all tools
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
              </a>
            </div>
          </div>

          {/* Tool cards */}
          <div className="flex-1 space-y-3">
            {TOOLS.map((tool, i) => (
              <a
                key={tool.title}
                href="#"
                className={`reveal delay-${(i % 5) + 1} group flex items-start gap-5 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300`}
              >
                <div className="text-2xl mt-0.5 group-hover:scale-110 transition-transform">{tool.icon}</div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-base text-zinc-900 dark:text-white mb-1 group-hover:text-indigo-500 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{tool.desc}</p>
                </div>
                <svg className="w-4 h-4 text-zinc-300 dark:text-zinc-600 group-hover:text-indigo-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}