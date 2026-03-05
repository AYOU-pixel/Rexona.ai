"use client";

import { useReveal } from "@/app/lib/Usereveal ";

export default function ApiSection() {
  const ref = useReveal();

  return (
    <section className="py-24 px-4 bg-zinc-50 dark:bg-zinc-950" ref={ref}>
      <div className="max-w-5xl mx-auto text-center relative">
        <div className="glow-blob absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] pointer-events-none -z-10" />

        <p className="reveal text-indigo-500 font-semibold text-sm uppercase tracking-widest mb-4">
          For Developers
        </p>
        <h2 className="reveal delay-1 font-display font-bold text-4xl lg:text-5xl text-zinc-900 dark:text-white mb-6">
          Build on the{" "}
          <span className="font-serif italic gradient-text">Pixa API</span>
        </h2>
        <p className="reveal delay-2 text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto mb-10">
          Our production-grade LLM endpoints power everything from enterprise
          automation to consumer apps. Structured outputs, streaming, tool
          calling — all in one clean API.
        </p>

        {/* Code block */}
        <div className="reveal delay-3 text-left max-w-2xl mx-auto rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl">
          {/* Titlebar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <span className="ml-2 text-xs text-zinc-400 font-mono">pixa-api.ts</span>
          </div>

          {/* Code */}
          <pre className="bg-zinc-950 p-6 font-mono text-xs leading-7 overflow-x-auto text-left">
            <code>
              <span className="text-zinc-500">{"// Initialize the Pixa client"}</span>{"\n"}
              <span className="text-purple-400">const</span>
              {" "}
              <span className="text-blue-300">pixa</span>
              {" = "}
              <span className="text-yellow-300">new</span>
              {" "}
              <span className="text-green-300">PixaClient</span>
              {"({"}
              {"\n"}
              {"  "}
              <span className="text-blue-300">apiKey</span>
              {": "}
              <span className="text-orange-300">process.env.PIXA_API_KEY</span>
              {"\n"}{"}});"}
              {"\n\n"}
              <span className="text-zinc-500">{"// Chat with any model"}</span>
              {"\n"}
              <span className="text-purple-400">const</span>
              {" "}
              <span className="text-blue-300">response</span>
              {" = "}
              <span className="text-purple-400">await</span>
              {" "}
              <span className="text-blue-300">pixa</span>
              {"."}
              <span className="text-green-300">chat</span>
              {"({"}
              {"\n"}
              {"  "}
              <span className="text-blue-300">model</span>
              {": "}
              <span className="text-orange-300">"gpt-4o"</span>
              {",\n"}
              {"  "}
              <span className="text-blue-300">messages</span>
              {": [{ "}
              <span className="text-blue-300">role</span>
              {": "}
              <span className="text-orange-300">"user"</span>
              {", "}
              <span className="text-blue-300">content</span>
              {": prompt }],"}
              {"\n"}
              {"  "}
              <span className="text-blue-300">stream</span>
              {": "}
              <span className="text-yellow-300">true</span>
              {",\n"}{"}});"}
              {"\n\n"}
              <span className="text-zinc-500">{"// Switch models instantly — no config changes"}</span>
              {"\n"}
              <span className="text-purple-400">const</span>
              {" "}
              <span className="text-blue-300">alt</span>
              {" = "}
              <span className="text-purple-400">await</span>
              {" "}
              <span className="text-blue-300">pixa</span>
              {"."}
              <span className="text-green-300">chat</span>
              {"({ "}
              <span className="text-blue-300">model</span>
              {": "}
              <span className="text-orange-300">"claude-3-5-sonnet"</span>
              {", ...rest });"}
            </code>
          </pre>
        </div>

        {/* CTA */}
        <div className="reveal delay-4 mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:border-indigo-500 hover:text-indigo-500 transition-all"
          >
            View API documentation
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}