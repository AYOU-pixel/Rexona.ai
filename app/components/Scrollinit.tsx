"use client";

import { useEffect } from "react";

export default function ScrollInit() {
  useEffect(() => {
    const dashboard = document.getElementById("dashboard");
    if (!dashboard) return;

    const handler = () => {
      const rect = dashboard.getBoundingClientRect();
      const windowH = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (windowH - rect.top) / windowH));
      if (progress > 0.3) {
        dashboard.classList.add("flat");
      } else {
        dashboard.classList.remove("flat");
      }
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return null;
}