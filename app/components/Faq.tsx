"use client";

import { useState } from "react";
import { useReveal } from "@/app/lib/Usereveal ";
const FAQS = [
  {
    q: "What is Pixa Playground?",
    a: "Pixa Playground is a unified AI workspace that lets you chat with GPT-4o, Claude, Gemini, Llama, and more — all from one interface. It also includes tools for image generation, code writing, PDF creation, music composition, and video generation.",
  },
  {
    q: "What are LLMs and why do they matter?",
    a: "LLM stands for Large Language Model — the AI technology behind ChatGPT, Claude, and Gemini. These models can write, reason, code, translate, summarize, and more. Pixa gives you access to the best LLMs in the world without managing separate accounts and API keys for each one.",
  },
  {
    q: "Can I use Pixa to build my own AI-powered products?",
    a: "Absolutely. Pixa exposes a clean REST API with support for streaming, structured outputs, tool calling, and multimodal inputs. You can build customer support bots, content pipelines, analytics dashboards, and much more on top of Pixa's infrastructure.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes! You can start using Pixa's Playground for free with a limited message quota. Upgrade to a paid plan to unlock higher limits, premium models, image generation, and full API access.",
  },
  {
    q: "How is Pixa different from ChatGPT or Claude.ai?",
    a: "Those are single-model products. Pixa is model-agnostic: you get every frontier model in one place, switch between them mid-conversation, and complement AI chat with tools like image generation, PDF export, and web search — all under one subscription.",
  },
  {
    q: "Is my data private?",
    a: "Your conversations are encrypted in transit and at rest. We never train our models on your data. You can delete your history at any time from your account settings.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useReveal();

  return (
    <section className="py-24 px-4" ref={ref}>
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 reveal">
          <p className="text-indigo-500 font-semibold text-sm uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="font-display font-bold text-4xl text-zinc-900 dark:text-white">
            Common questions
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400">
            Can&apos;t find the answer you&apos;re looking for?{" "}
            <a href="#" className="text-indigo-500 hover:underline">
              Reach out to our team.
            </a>
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col divide-y divide-zinc-100 dark:divide-zinc-800">
          {FAQS.map((faq, i) => (
            <div key={i} className="reveal">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                aria-expanded={open === i}
              >
                <span className="font-semibold text-sm text-zinc-800 dark:text-zinc-200 group-hover:text-indigo-500 transition-colors">
                  {faq.q}
                </span>
                <span
                  className={`shrink-0 w-6 h-6 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-400 transition-all duration-300 ${
                    open === i
                      ? "rotate-45 border-indigo-500 text-indigo-500 bg-indigo-50 dark:bg-indigo-500/10"
                      : ""
                  }`}
                >
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>

              <div className={`faq-content ${open === i ? "open" : ""}`}>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed pb-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}