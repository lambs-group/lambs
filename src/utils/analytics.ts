// Cloudflare Web Analytics. Loads only when BOTH are true:
//   1. PUBLIC_CF_ANALYTICS_TOKEN is set at build time (set it for the production
//      build only, so the preview site isn't counted), and
//   2. the visitor has accepted the "Analytics" category in the cookie banner.
// Cloudflare's beacon sets no cookies and uses no local storage. `spa: true`
// makes it record client-side (view transition) page changes too.
import { onConsent, onConsentChange } from "./consent";

const token = (import.meta.env.PUBLIC_CF_ANALYTICS_TOKEN ?? "").trim();
const SCRIPT_ID = "cf-web-analytics";

export function initAnalytics(): void {
  if (!token) return;

  onConsent("analytics", () => {
    if (document.getElementById(SCRIPT_ID)) return;
    const s = document.createElement("script");
    s.id = SCRIPT_ID;
    s.defer = true;
    s.src = "https://static.cloudflareinsights.com/beacon.min.js";
    s.setAttribute("data-cf-beacon", JSON.stringify({ token, spa: true }));
    document.head.appendChild(s);
  });

  // Consent withdrawn after the beacon loaded: reload so it stops running.
  onConsentChange((c) => {
    if (!c.analytics && document.getElementById(SCRIPT_ID)) window.location.reload();
  });
}
