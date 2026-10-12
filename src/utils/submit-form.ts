export type FormType =
  | "contact-commercial"
  | "contact-domestic"
  | "careers-application";

export type SubmitResult =
  | { status: "ok" }
  | { status: "preview"; reason: "endpoint-not-configured" }
  | { status: "error"; message: string };

import { TURNSTILE_FIELD, resetTurnstile, turnstileEnabled } from "./turnstile";

const endpoint = (import.meta.env.PUBLIC_FORM_ENDPOINT ?? "").trim();

export async function submitForm(
  formEl: HTMLFormElement,
  formType: FormType
): Promise<SubmitResult> {
  if (!endpoint) {
    // Preview mode - no worker configured yet. Resolve to "preview" so the
    // UI can show a friendly note rather than hanging on a dead endpoint.
    if (typeof console !== "undefined") {
      console.warn(
        "PUBLIC_FORM_ENDPOINT is not set - form submissions are not being sent."
      );
    }
    return { status: "preview", reason: "endpoint-not-configured" };
  }

  const data = new FormData(formEl);
  data.set("form", formType);

  if (turnstileEnabled && !String(data.get(TURNSTILE_FIELD) ?? "")) {
    return {
      status: "error",
      message: "Please wait for the security check to finish, then try again.",
    };
  }

  try {
    const resp = await fetch(endpoint, {
      method: "POST",
      body: data,
    });

    if (resp.ok) {
      return { status: "ok" };
    }

    const body = await resp.text().catch(() => "");
    return {
      status: "error",
      message: body || `Submission failed (${resp.status})`,
    };
  } catch (e) {
    return {
      status: "error",
      message: e instanceof Error ? e.message : "Network error",
    };
  } finally {
    // The token is single-use; get a fresh one for any retry.
    if (turnstileEnabled) resetTurnstile();
  }
}
