"use client";

import { useState } from "react";
import Image from "next/image";

const MODELS = [
  { id: "gpt4o",      label: "GPT-4o",      logo: "/chatgpt.png" },
  { id: "claude",     label: "Claude 3.5",  logo: "/claude.png" },
  { id: "gemini",     label: "Gemini 1.5",  logo: "/google-gemini.png" },
  { id: "perplexity", label: "Perplexity",  logo: "/perplexity.png" },
];

const SIDEBAR_TOOLS = [
  { label: "Nano Banana 2",  logo: "/banana.png" },
  { label: "PDF Generator",  logo: "/pdf.png" },
  { label: "Code Generator", logo: "/vscode.png" },
  { label: "Music Generator",logo: "/music.png" },
  { label: "Video Generator",logo: "/google-gemini.png" },
];

const SAMPLE_RESPONSES: Record<string, string> = {
  gpt4o:      "Sure! Here's a clean, production-ready Next.js setup with App Router, TypeScript, Tailwind CSS, and proper folder structure. I'll include authentication, API routes, and database integration…",
  claude:     "I'd be happy to help you build that. Let me walk you through an architecture that scales well. We'll start with the core data models, then define API contracts before any implementation…",
  gemini:     "Great idea! For a modern SaaS, I recommend starting with: 1) Next.js 14 App Router for the frontend, 2) Supabase for auth + database, 3) Stripe for payments. Here's how to tie it all together…",
  perplexity: "Here's my approach: First, let's define the business logic layer separately from the UI. This gives you flexibility to swap frameworks later. The core structure should look like this…",
};

interface Props {
  typedText: string;
}

export default function PlaygroundPreview({ typedText }: Props) {
  const [selectedModel, setSelectedModel] = useState("gpt4o");
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  const activeModel = MODELS.find((m) => m.id === selectedModel)!;

  const handleSubmit = () => {
    if (!input.trim() || count >= 3) return;
    const userMsg = input.trim();
    setMessages((prev) => [
      ...prev,
      { role: "user", text: userMsg },
      { role: "ai",   text: SAMPLE_RESPONSES[selectedModel] },
    ]);
    setInput("");
    setCount((c) => c + 1);
  };

  return (
    <div
      className="relative animated-border rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden dashboard-perspective"
      id="dashboard"
    >
      <div className="relative z-10 flex bg-white dark:bg-zinc-950 h-[520px] lg:h-[600px]">

        {/* ── Sidebar ── */}
        <aside className="hidden lg:flex w-[220px] shrink-0 flex-col bg-zinc-50 dark:bg-zinc-900 border-r border-zinc-100 dark:border-zinc-800 p-3 gap-2">
          {/* Logo */}
          <div className="flex items-center gap-2 px-2 py-1 mb-2">
            <div className="w-5 h-5 rounded bg-indigo-500 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">P</span>
            </div>
            <span className="font-display font-bold text-sm uppercase tracking-wide">Pixa</span>
          </div>

          {/* Tool list */}
          <div className="flex flex-col gap-1">
            {SIDEBAR_TOOLS.map((item) => (
              <button
                key={item.label}
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-all text-left"
              >
                <div className="w-4 h-4 relative shrink-0">
                  <Image
                    src={item.logo}
                    alt={item.label}
                    fill
                    className="object-contain"
                  />
                </div>
                {item.label}
              </button>
            ))}

            <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all text-left mt-1">
              Show all →
            </button>
          </div>

          {/* Sign up */}
          <div className="mt-auto px-2">
            <button className="w-full py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:border-indigo-500 hover:text-indigo-500 transition-all">
              Sign up free
            </button>
          </div>
        </aside>

        {/* ── Main chat area ── */}
        <div className="flex flex-col flex-1 min-w-0">

          {/* Model selector bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-x-auto">
            {MODELS.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedModel(m.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  selectedModel === m.id
                    ? "bg-indigo-500 text-white shadow-md shadow-indigo-500/30"
                    : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                <div className="w-3.5 h-3.5 relative shrink-0">
                  <Image
                    src={m.logo}
                    alt={m.label}
                    fill
                    className={`object-contain ${selectedModel === m.id ? "brightness-0 invert" : ""}`}
                  />
                </div>
                {m.label}
              </button>
            ))}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 relative">
            {messages.length === 0 && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-3 pointer-events-none">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center">
                  <div className="w-6 h-6 relative">
                    <Image
                      src={activeModel.logo}
                      alt={activeModel.label}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    Ask {activeModel.label} anything
                  </p>
                  <p className="text-xs text-zinc-400 mt-1 max-w-[200px]">
                    Type a message below or try a prompt suggestion
                  </p>
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "ai" && (
                  <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center mr-2 mt-1 shrink-0">
                    <div className="w-3.5 h-3.5 relative">
                      <Image
                        src={activeModel.logo}
                        alt={activeModel.label}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-xs leading-relaxed ${
                    msg.role === "user"
                      ? "bg-indigo-500 text-white rounded-br-sm"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {count >= 3 && (
              <div className="flex items-center justify-center">
                <div className="px-4 py-3 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-center">
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                    Sign up to continue chatting →
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-zinc-100 dark:border-zinc-800">
            <div className="flex items-center gap-2 bg-zinc-50 dark:bg-zinc-900 rounded-xl px-3 py-2 border border-zinc-200 dark:border-zinc-700 focus-within:border-indigo-400 transition-colors">
              <input
                type="text"
                value={input || (messages.length === 0 ? typedText : input)}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="Ask anything…"
                disabled={count >= 3}
                className="flex-1 bg-transparent text-xs text-zinc-700 dark:text-zinc-300 placeholder:text-zinc-400 outline-none min-w-0"
              />
              <button
                onClick={handleSubmit}
                disabled={count >= 3}
                className="w-7 h-7 rounded-lg bg-indigo-500 text-white flex items-center justify-center hover:bg-indigo-600 transition-colors disabled:opacity-40 shrink-0"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}