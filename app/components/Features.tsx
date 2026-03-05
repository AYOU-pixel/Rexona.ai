"use client";

import { useReveal } from "@/app/lib/Usereveal ";

const CARDS = [
  {
    icon: "⚡",
    title: "Unified Interface",
    desc: "One sleek dashboard to access GPT-4o, Claude, Gemini, Llama, and every model that matters. No tab switching. No context switching. Just pure flow.",
    tag: "Core",
  },
  {
    icon: "🔌",
    title: "Developer API",
    desc: "Production-grade REST API with JSON, Markdown, and streaming support. Integrate advanced summarization, text generation, and Q&A into any product in minutes.",
    tag: "API",
  },
  {
    icon: "🧩",
    title: "Pre-built Tools",
    desc: "Plug-and-play integrations for image generation, PDF creation, video synthesis, music composition, and code generation — no boilerplate required.",
    tag: "Tools",
  },
];

const WIDE_CARD = {
  icon: "🤖",
  title: "Frontier Model Access",
  desc: "Pixa keeps pace with the AI frontier. Every major model release is available on day one — from GPT-4o to Claude 3.5 Sonnet to Gemini 1.5 Pro. Switch models mid-conversation. Compare outputs side-by-side. Find the right tool for every task.",
};

export default function Features() {
  const ref = useReveal();

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto" ref={ref}>
      <div className="text-center mb-16 reveal">
        <p className="text-indigo-500 font-semibold text-sm uppercase tracking-widest mb-3">Platform</p>
        <h2 className="font-display font-bold text-4xl lg:text-5xl text-zinc-900 dark:text-white">
          Everything you need to
          <br />
          <span className="font-serif font-normal italic gradient-text">work with AI</span>
        </h2>
        <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
          Not just a chat wrapper. A complete AI workspace with the tools, models, and API to build anything.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {CARDS.map((card, i) => (
          <div
            key={card.title}
            className={`reveal delay-${i + 1} group relative overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-8 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 cursor-pointer`}
          >
            <div className="absolute top-0 right-0 px-3 py-1 m-3 rounded-full bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
              {card.tag}
            </div>
            <div className="text-3xl mb-5">{card.icon}</div>
            <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-3 group-hover:text-indigo-500 transition-colors">
              {card.title}
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{card.desc}</p>
            <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-zinc-400 group-hover:text-indigo-500 transition-colors">
              Learn more
              <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </div>
          </div>
        ))}
      </div>

      {/* Wide card */}
      <div className="reveal delay-4 group relative overflow-hidden rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-8 lg:p-10 flex flex-col lg:flex-row gap-8 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 cursor-pointer">
        <div className="glow-blob absolute top-0 right-0 w-[300px] h-[300px] opacity-10 pointer-events-none" />
        <div className="lg:w-1/2 shrink-0">
          <div className="text-4xl mb-5">{WIDE_CARD.icon}</div>
          <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white mb-4 group-hover:text-indigo-500 transition-colors">
            {WIDE_CARD.title}
          </h3>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-400 group-hover:text-indigo-500 transition-colors mt-4">
            Explore models
            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </div>
        </div>
        <div className="lg:w-1/2">
          <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">{WIDE_CARD.desc}</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {["GPT-4o", "Claude 3.5", "Gemini 1.5", "Llama 3", "Mistral", "DALL·E 3"].map((m) => (
              <div key={m} className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                {m}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}