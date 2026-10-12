// Cookie / storage consent state. Stored in localStorage (no cookie is set by us).
// "Necessary" is always on. Anything optional (analytics) must wait for consent:
//
//   import { onConsent } from "../utils/consent";
//   onConsent("analytics", () => { /* inject the analytics script here */ });
//
// The callback runs immediately if consent was already given, and again on the
// first grant. It never runs while the visitor has rejected or not yet chosen.

export type ConsentCategory = "analytics";

export interface Consent {
  v: 1;
  analytics: boolean;
  ts: number;
}

const KEY = "lambs-consent";
const CHANGE_EVENT = "lambs:consent-change";
const OPEN_EVENT = "lambs:open-consent";

export function getConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.v === 1 && typeof parsed.analytics === "boolean") return parsed as Consent;
  } catch {
    /* storage blocked or corrupt - treat as no choice made */
  }
  return null;
}

export function setConsent(choice: { analytics: boolean }): void {
  const value: Consent = { v: 1, analytics: choice.analytics, ts: Date.now() };
  try {
    localStorage.setItem(KEY, JSON.stringify(value));
  } catch {
    /* storage blocked - choice only lasts for this page view */
  }
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: value }));
}

export function hasConsent(category: ConsentCategory): boolean {
  return getConsent()?.[category] === true;
}

export function onConsent(category: ConsentCategory, callback: () => void): void {
  let fired = false;
  const run = () => {
    if (fired || !hasConsent(category)) return;
    fired = true;
    callback();
  };
  run();
  window.addEventListener(CHANGE_EVENT, run);
}

export function onConsentChange(callback: (c: Consent) => void): () => void {
  const handler = (e: Event) => callback((e as CustomEvent<Consent>).detail);
  window.addEventListener(CHANGE_EVENT, handler);
  return () => window.removeEventListener(CHANGE_EVENT, handler);
}

/** Re-open the banner (used by the footer "Cookie settings" link). */
export function openConsentSettings(): void {
  window.dispatchEvent(new CustomEvent(OPEN_EVENT));
}

export const CONSENT_OPEN_EVENT = OPEN_EVENT;
