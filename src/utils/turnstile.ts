// Cloudflare Turnstile (human check). Enabled only when PUBLIC_TURNSTILE_SITE_KEY
// is set at build time, so forms still work in preview before a key exists.
export const TURNSTILE_SITE_KEY = (import.meta.env.PUBLIC_TURNSTILE_SITE_KEY ?? "").trim();
export const turnstileEnabled = TURNSTILE_SITE_KEY.length > 0;
export const TURNSTILE_FIELD = "cf-turnstile-response";

interface TurnstileApi {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

let scriptPromise: Promise<void> | null = null;

export function loadTurnstile(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      s.async = true;
      s.onload = () => resolve();
      s.onerror = () => {
        scriptPromise = null;
        reject(new Error("Turnstile failed to load"));
      };
      document.head.appendChild(s);
    });
  }
  return scriptPromise;
}

/** Tokens are single-use - call after every submit attempt. */
export function resetTurnstile(): void {
  try {
    window.turnstile?.reset();
  } catch {
    /* widget not mounted */
  }
}
