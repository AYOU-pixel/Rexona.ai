"use client";

import { useReveal } from "@/app/lib/Usereveal ";

const TESTIMONIALS = [
  {
    name: "Mante K.",
    role: "CTO at Glu",
    avatar: "MK",
    color: "bg-violet-500",
    text: "Pixa replaced four separate AI subscriptions for our team. The unified interface means our engineers stop context-switching and start building. ROI was visible in the first week.",
  },
  {
    name: "Trich B.",
    role: "CEO at AMI",
    avatar: "TB",
    color: "bg-rose-500",
    text: "The API is genuinely production-grade. We integrated it in a weekend and it's been rock-solid ever since. The streaming support is exactly what we needed for our real-time features.",
  },
  {
    name: "John B.",
    role: "CEO at Benz",
    avatar: "JB",
    color: "bg-amber-500",
    text: "I used to spend an hour every morning copying outputs between AI tools. With Pixa, that entire workflow takes ten minutes. The prompt library alone is worth the subscription price.",
  },
  {
    name: "Ben A.",
    role: "CTO at XZ Tech",
    avatar: "BA",
    color: "bg-emerald-500",
    text: "Our content team was skeptical about switching tools. Two weeks in, they refuse to go back. The image generation quality and the model variety hit differently when it's all in one place.",
  },
  {
    name: "Rachel T.",
    role: "CTO at Gem",
    avatar: "RT",
    color: "bg-blue-500",
    text: "Finally, a product that doesn't dumb down AI for business users. Pixa treats us like grown-ups — full model access, raw API, proper history. This is what we wanted all along.",
  },
  {
    name: "Jamie O.",
    role: "CEO at SnapFist.ai",
    avatar: "JO",
    color: "bg-indigo-500",
    text: "We built our entire AI feature set on top of Pixa's API. The developer experience is miles ahead of going directly to each provider. Single key, one SDK, zero drama.",
  },
];

export default function Testimonials() {
  const ref = useReveal();

  return (
    <section className="py-24 px-4 bg-zinc-50 dark:bg-zinc-950" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14 reveal">
          <p className="text-indigo-500 font-semibold text-sm uppercase tracking-widest mb-3">
            Social Proof
          </p>
          <h2 className="font-display font-bold text-4xl text-zinc-900 dark:text-white">
            Loved by builders worldwide
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
            Join thousands of engineers, designers, and founders who ship faster
            with Pixa.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 xl:columns-3 gap-4 space-y-4">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`reveal delay-${(i % 5) + 1} break-inside-avoid rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-6 flex flex-col gap-5`}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                <div
                  className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-zinc-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}