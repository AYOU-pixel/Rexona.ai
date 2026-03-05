"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import PlaygroundPreview from "./Playgroundpreview ";

const TYPED_STRINGS = [
  "How do I build a SaaS app from scratch?",
  "Generate a logo for my startup",
  "Write unit tests for this React component",
  "Summarize this 40-page research paper",
];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [strIndex, setStrIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const current = TYPED_STRINGS[strIndex];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setTyped(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 2000);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setTyped(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setStrIndex((s) => (s + 1) % TYPED_STRINGS.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, strIndex]);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-start pt-28 lg:pt-36 overflow-hidden hero-grid">
      {/* Background blobs */}
      <div className="glow-blob absolute top-[-80px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none" />
      <div className="glow-blob absolute bottom-[200px] right-[-100px] w-[300px] h-[300px] pointer-events-none opacity-20" />

      {/* Headline */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse inline-block" />
          Now supporting GPT-4o, Claude 3.5, Gemini 1.5 & more
        </div>

        <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
          <span className="text-zinc-900 dark:text-white">Every AI model.</span>
          <br />
          <span className="font-serif font-normal italic gradient-text">One workspace.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
          Generate images, write code, draft documents, compose music — all through
          a single, beautiful interface powered by the world&apos;s most advanced AI models.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="#"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 text-white font-semibold text-sm hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105"
          >
            Start for free
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </Link>

          <button
            onClick={() => setVideoOpen(true)}
            className="group flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all"
          >
            <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg className="w-2.5 h-2.5 translate-x-px" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/></svg>
            </span>
            Watch demo
          </button>
        </div>

        <div className="mt-5 flex items-center gap-6 text-xs text-zinc-400 dark:text-zinc-500">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
            Free plan available
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
            Cancel anytime
          </span>
        </div>
      </div>

      {/* Playground preview */}
      <div className="relative z-10 w-full max-w-5xl mx-auto mt-14 px-4">
        <div className="glow-blob absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] pointer-events-none -z-10" />
        <PlaygroundPreview typedText={typed} />
      </div>

      {/* Video modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              ✕
            </button>
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/kT8JyzNE-dI?si=krS8zHVJy4JzSaEJ&controls=0&rel=0&showinfo=0"
                title="Pixa demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}