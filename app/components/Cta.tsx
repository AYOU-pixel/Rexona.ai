"use client";

import Link from "next/link";
import { useReveal } from "@/app/lib/Usereveal ";

export default function Cta() {
  const ref = useReveal();

  return (
    <section className="py-16 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="reveal relative overflow-hidden rounded-3xl bg-indigo-500 p-12 lg:p-16 text-center">
          {/* Decorative radial gradients */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 85%, rgba(255,255,255,0.18) 0%, transparent 50%), radial-gradient(circle at 85% 15%, rgba(165,180,252,0.25) 0%, transparent 50%)",
            }}
          />

          {/* Floating dots decoration */}
          <div className="absolute top-6 left-8 w-2 h-2 rounded-full bg-white/20" />
          <div className="absolute top-10 left-16 w-1 h-1 rounded-full bg-white/30" />
          <div className="absolute bottom-8 right-12 w-2 h-2 rounded-full bg-white/20" />
          <div className="absolute bottom-14 right-24 w-1.5 h-1.5 rounded-full bg-white/25" />
          <div className="absolute top-1/2 left-6 w-1 h-1 rounded-full bg-white/20" />
          <div className="absolute top-1/3 right-8 w-1 h-1 rounded-full bg-white/30" />

          {/* Content */}
          <div className="relative z-10">
            <p className="text-indigo-200 font-semibold text-sm uppercase tracking-widest mb-4">
              Get started today
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-4 leading-tight">
              Ready to work smarter
              <br />
              with AI?
            </h2>
            <p className="text-indigo-100 max-w-md mx-auto mb-10 text-lg leading-relaxed">
              Join thousands of builders, creators, and teams who ship faster
              with Pixa. Free to start. No credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="#"
                className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white text-indigo-600 font-semibold text-sm hover:bg-indigo-50 transition-colors shadow-xl shadow-indigo-700/30"
              >
                Launch Playground — it&apos;s free
                <svg
                  className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm border border-indigo-400/50 hover:bg-indigo-700 transition-colors"
              >
                View API docs
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-indigo-200">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Free plan available
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}