import { useEffect, useRef } from "react";
import { trackLead, trackCustomEvent, trackViewContent } from "@/lib/pixel";

/**
 * Tracks scroll depth milestones and section visibility.
 * Each event fires only once per session.
 */
export function usePixelScrollTracking() {
  const fired = useRef<Set<string>>(new Set());

  const fire = (key: string, fn: () => void) => {
    if (!fired.current.has(key)) {
      fired.current.add(key);
      fn();
    }
  };

  // Scroll depth
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const pct = (scrolled / total) * 100;

      if (pct >= 25) fire("scroll_25", () => trackCustomEvent("ScrollDepth25"));
      if (pct >= 50) fire("scroll_50", () => trackLead());
      if (pct >= 75) fire("scroll_75", () => trackCustomEvent("ScrollDepth75"));
      if (pct >= 90) fire("scroll_90", () => trackCustomEvent("ScrollDepth90"));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Section visibility via IntersectionObserver
  useEffect(() => {
    const sectionEvents: Record<string, string> = {
      pricing: "ViewPricing",
      proof: "ViewProof",
      "para-quem": "ViewParaQuem",
      faq: "ViewFAQ",
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = (entry.target as HTMLElement).id;
            const eventName = sectionEvents[id];
            if (eventName) {
              fire(`section_${id}`, () => {
                trackCustomEvent(eventName);
                // pricing section = highest purchase intent signal
                if (id === "pricing") trackViewContent();
              });
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.keys(sectionEvents).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
