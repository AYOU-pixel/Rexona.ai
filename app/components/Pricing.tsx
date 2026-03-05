"use client";

import { useState } from "react";
import { useReveal } from "@/app/lib/Usereveal ";

const PLANS = [
  {
    name: "Starter",
    monthly: 9,
    annual: 7,
    desc: "Essential AI tools for individuals and hobbyists.",
    features: [
      { text: "1,000 AI chat messages / mo", included: true },
      { text: "30 image generations", included: true },
      { text: "10 music generations", included: true },
      { text: "Access to all premium models", included: false },
      { text: "Early access to new features", included: false },
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    monthly: 17,
    annual: 13,
    desc: "Advanced features for serious creators and teams.",
    features: [
      { text: "5,000 AI chat messages / mo", included: true },
      { text: "100 image generations", included: true },
      { text: "40 music generations", included: true },
      { text: "Access to all premium models", included: true },
      { text: "Early access to new features", included: false },
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Scale",
    monthly: 29,
    annual: 22,
    desc: "Unlimited potential for power users and growing teams.",
    features: [
      { text: "10,000 AI chat messages / mo", included: true },
      { text: "300 image generations", included: true },
      { text: "100 music generations", included: true },
      { text: "Access to all premium models", included: true },
      { text: "Early access to new features", included: true },
    ],
    cta: "Get started",
    highlighted: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const ref = useReveal();

  return (
    <section className="py-24 px-4" id="pricing" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 reveal">
          <p className="text-indigo-500 font-semibold text-sm uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-zinc-900 dark:text-white mb-4">
            One subscription. <span className="font-serif italic gradient-text">All of AI.</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-md mx-auto mb-8">
            Why pay for five separate subscriptions? Pixa gives you every frontier model at a fraction of the cost.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 px-1 py-1 rounded-xl bg-zinc-100 dark:bg-zinc-800">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${!annual ? "bg-white dark:bg-zinc-700 shadow text-zinc-900 dark:text-white" : "text-zinc-500"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${annual ? "bg-white dark:bg-zinc-700 shadow text-zinc-900 dark:text-white" : "text-zinc-500"}`}
            >
              Annual
              <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 px-1.5 py-0.5 rounded-full">Save 25%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal delay-${i + 1} relative flex flex-col rounded-2xl p-8 border transition-all ${
                plan.highlighted
                  ? "border-indigo-500 bg-indigo-500 text-white shadow-2xl shadow-indigo-500/30 scale-[1.02]"
                  : "border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-zinc-900 text-white text-[11px] font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <p className={`text-sm font-semibold mb-1 ${plan.highlighted ? "text-indigo-200" : "text-zinc-400"}`}>{plan.name}</p>
                <div className="flex items-end gap-1">
                  <span className="text-5xl font-display font-bold">
                    ${annual ? plan.annual : plan.monthly}
                  </span>
                  <span className={`text-sm mb-2 ${plan.highlighted ? "text-indigo-200" : "text-zinc-400"}`}>/mo</span>
                </div>
                <p className={`text-sm mt-2 ${plan.highlighted ? "text-indigo-100" : "text-zinc-500 dark:text-zinc-400"}`}>{plan.desc}</p>
              </div>

              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f.text} className={`flex items-center gap-2.5 text-sm ${f.included ? "" : plan.highlighted ? "text-indigo-300 line-through opacity-60" : "text-zinc-300 dark:text-zinc-600 line-through"}`}>
                    <svg
                      className={`w-4 h-4 shrink-0 ${f.included ? plan.highlighted ? "text-white" : "text-indigo-500" : "text-zinc-300 dark:text-zinc-600"}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={f.included ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"} />
                    </svg>
                    {f.text}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-white text-indigo-600 hover:bg-indigo-50"
                    : "border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-indigo-500 hover:text-indigo-500"
                }`}
              >
                {plan.cta}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}