import { useEffect, useState } from "react";
import { CONSENT_OPEN_EVENT, getConsent, setConsent } from "../utils/consent";
import { withBase } from "../utils/paths";
import { initAnalytics } from "../utils/analytics";

type View = "closed" | "banner" | "manage";

export function CookieConsent() {
  const [view, setView] = useState<View>("closed");
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    initAnalytics();
    const existing = getConsent();
    if (!existing) setView("banner");
    else setAnalytics(existing.analytics);

    const reopen = () => {
      setAnalytics(getConsent()?.analytics ?? false);
      setView("manage");
    };
    window.addEventListener(CONSENT_OPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, reopen);
  }, []);

  if (view === "closed") return null;

  const choose = (value: boolean) => {
    setConsent({ analytics: value });
    setAnalytics(value);
    setView("closed");
  };

  const btn =
    "px-5 py-3 text-[12px] uppercase tracking-[0.14em] font-semibold transition-colors duration-300";

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed bottom-0 left-0 right-0 z-[70] p-4 sm:p-6 pointer-events-none"
    >
      <div className="pointer-events-auto max-w-[720px] mx-auto bg-[var(--color-dark-blue)] text-white border border-white/15 shadow-2xl p-6 sm:p-8">
        <h2 className="text-white text-[18px] font-semibold mb-3">Your privacy</h2>
        <p className="text-[14px] leading-relaxed text-white/80">
          We use essential storage to keep the site and our forms working and secure. With your permission we'd also use
          analytics to see how the site is used so we can improve it. Read our{" "}
          <a href={withBase("/cookies")} className="underline underline-offset-2 decoration-[var(--color-cyan)] hover:text-[var(--color-cyan)]">
            Cookie Policy
          </a>{" "}
          and{" "}
          <a href={withBase("/privacy")} className="underline underline-offset-2 decoration-[var(--color-cyan)] hover:text-[var(--color-cyan)]">
            Privacy Policy
          </a>
          .
        </p>

        {view === "manage" && (
          <div className="mt-6 flex flex-col gap-4 text-[14px]">
            <div className="flex items-start justify-between gap-6 border-t border-white/15 pt-4">
              <div>
                <div className="font-semibold">Essential</div>
                <div className="text-white/70 text-[13px]">Security checks on forms and remembering this choice. Always on.</div>
              </div>
              <span className="text-[11px] uppercase tracking-widest text-white/60 pt-1">Always on</span>
            </div>
            <div className="flex items-start justify-between gap-6 border-t border-white/15 pt-4">
              <div>
                <label htmlFor="consent-analytics" className="font-semibold">Analytics</label>
                <div className="text-white/70 text-[13px]">Anonymous usage statistics that help us improve the site.</div>
              </div>
              <input
                id="consent-analytics"
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="w-5 h-5 mt-1 accent-[var(--color-cyan)]"
              />
            </div>
          </div>
        )}

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          {view === "banner" ? (
            <>
              <button type="button" onClick={() => choose(true)} className={`${btn} bg-[var(--color-cyan)] text-[var(--color-dark-blue)] hover:bg-white`}>
                Accept all
              </button>
              <button type="button" onClick={() => choose(false)} className={`${btn} bg-[var(--color-cyan)] text-[var(--color-dark-blue)] hover:bg-white`}>
                Reject all
              </button>
              <button type="button" onClick={() => setView("manage")} className={`${btn} border border-white/40 text-white hover:border-white`}>
                Manage
              </button>
            </>
          ) : (
            <>
              <button type="button" onClick={() => choose(analytics)} className={`${btn} bg-[var(--color-cyan)] text-[var(--color-dark-blue)] hover:bg-white`}>
                Save choices
              </button>
              <button type="button" onClick={() => choose(true)} className={`${btn} border border-white/40 text-white hover:border-white`}>
                Accept all
              </button>
              <button type="button" onClick={() => choose(false)} className={`${btn} border border-white/40 text-white hover:border-white`}>
                Reject all
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
