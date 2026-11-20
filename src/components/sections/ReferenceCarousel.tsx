import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FadeIn } from "../FadeIn";
import type { Reference } from "../../data/references";

interface ReferenceCarouselProps {
  references: Reference[];
  tone?: "white" | "grey";
  eyebrow?: string;
  /** Milliseconds each reference stays on screen before the next. */
  interval?: number;
}

/**
 * Rotating set of client references with arrows and dots. The first reference is shown first.
 * Autoplay pauses on hover and keyboard focus and is off for visitors who prefer reduced motion;
 * the arrows, dots, arrow keys and swipe always work. All slides share one grid cell so the
 * section never changes height as it rotates.
 */
export function ReferenceCarousel({ references, tone = "grey", eyebrow = "Client references", interval = 8000 }: ReferenceCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = references.length;

  const goBy = useCallback((delta: number) => setIndex((i) => (((i + delta) % count) + count) % count), [count]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (paused || reduced || count < 2) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % count), interval);
    return () => window.clearTimeout(t);
  }, [index, paused, reduced, count, interval]);

  const arrow =
    "w-12 h-12 flex items-center justify-center border border-[var(--color-border-strong)] bg-white text-[var(--color-dark-blue)] transition-colors duration-300 hover:bg-[var(--color-dark-blue)] hover:text-white hover:border-[var(--color-dark-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cyan)]";

  return (
    <section className={`py-20 lg:py-28 ${tone === "grey" ? "bg-[var(--color-light-grey)]" : "bg-white"}`}>
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <FadeIn>
          <span className="eyebrow mb-10">{eyebrow}</span>
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Client references"
            className="mt-10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") goBy(-1);
              if (e.key === "ArrowRight") goBy(1);
            }}
            onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              touchX.current = null;
              if (Math.abs(dx) > 50) goBy(dx < 0 ? 1 : -1);
            }}
          >
            <div className="grid" aria-live={paused || reduced ? "polite" : "off"}>
              {references.map((r, i) => {
                const active = i === index;
                return (
                  <figure
                    key={i}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${i + 1} of ${count}`}
                    aria-hidden={!active}
                    className={`[grid-area:1/1] max-w-4xl border-l-[3px] border-[var(--color-cyan)] pl-6 sm:pl-10 transition-all duration-700 ease-out ${
                      active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 invisible pointer-events-none"
                    }`}
                  >
                    <blockquote className="text-[22px] sm:text-[28px] lg:text-[36px] leading-[1.3] font-medium tracking-tight text-[var(--color-dark-blue)]">
                      &ldquo;{r.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-8 text-[12px] uppercase tracking-[0.16em] font-medium text-[var(--color-mid-blue)]">
                      {r.attribution}
                    </figcaption>
                  </figure>
                );
              })}
            </div>

            {count > 1 && (
              <div className="mt-10 flex items-center gap-6 pl-6 sm:pl-10">
                <button type="button" className={arrow} aria-label="Previous reference" onClick={() => goBy(-1)}>
                  <ArrowLeft className="w-5 h-5" strokeWidth={1.8} />
                </button>
                <div className="flex items-center gap-3" role="group" aria-label="Choose a reference">
                  {references.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Show reference ${i + 1} of ${count}`}
                      aria-current={i === index}
                      onClick={() => setIndex(i)}
                      className="p-1.5 -m-1.5 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-cyan)]"
                    >
                      <span
                        className={`block h-2.5 rounded-full transition-all duration-500 ${
                          i === index
                            ? "w-8 bg-[var(--color-dark-blue)]"
                            : "w-2.5 bg-[var(--color-mid-blue)]/50 group-hover:bg-[var(--color-dark-blue)]/60"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <button type="button" className={arrow} aria-label="Next reference" onClick={() => goBy(1)}>
                  <ArrowRight className="w-5 h-5" strokeWidth={1.8} />
                </button>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
