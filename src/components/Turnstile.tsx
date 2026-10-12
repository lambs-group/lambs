import { useEffect, useRef } from "react";
import { TURNSTILE_SITE_KEY, loadTurnstile, turnstileEnabled } from "../utils/turnstile";

/** Human check. Renders nothing until PUBLIC_TURNSTILE_SITE_KEY is configured.
 *  Turnstile adds a hidden `cf-turnstile-response` input to the enclosing <form>. */
export function Turnstile() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!turnstileEnabled || !ref.current) return;
    let widgetId: string | undefined;
    let cancelled = false;
    loadTurnstile()
      .then(() => {
        if (cancelled || !ref.current || !window.turnstile) return;
        widgetId = window.turnstile.render(ref.current, { sitekey: TURNSTILE_SITE_KEY, theme: "light" });
      })
      .catch(() => {
        /* blocked or offline - submitForm reports the missing check */
      });
    return () => {
      cancelled = true;
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
    };
  }, []);

  if (!turnstileEnabled) return null;
  return <div ref={ref} className="min-h-[65px]" />;
}
