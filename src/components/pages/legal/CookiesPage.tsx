import { COMPANY } from "./company";
import { A, H2, LegalPage, Mail, P, UL } from "./LegalPage";
import { openConsentSettings } from "../../../utils/consent";

export function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      heading="Cookie Policy"
      lede="What this website stores on your device, why, and how to change your choices."
    >
      <H2>What are cookies?</H2>
      <P>
        Cookies and similar technologies (such as your browser's local storage) are small pieces of data a website saves on your
        device. Some are essential for the site to work; others are optional and only used with your permission.
      </P>

      <H2>What we use</H2>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-left text-[15px] border-collapse">
          <thead>
            <tr className="border-b border-[var(--color-border-strong)] text-[var(--color-dark-blue)]">
              <th className="py-3 pr-4 font-semibold">Name / service</th>
              <th className="py-3 pr-4 font-semibold">Purpose</th>
              <th className="py-3 pr-4 font-semibold">Type</th>
              <th className="py-3 font-semibold">Duration</th>
            </tr>
          </thead>
          <tbody className="text-[var(--color-charcoal)] align-top">
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4"><code>lambs-consent</code> (local storage)</td>
              <td className="py-3 pr-4">Remembers your cookie choice so we don't ask on every page.</td>
              <td className="py-3 pr-4">Essential</td>
              <td className="py-3">Until you clear it or change your choice</td>
            </tr>
            <tr className="border-b border-[var(--color-border)]">
              <td className="py-3 pr-4">Cloudflare Turnstile</td>
              <td className="py-3 pr-4">Security check on our forms that tells people from automated bots. Cloudflare may store short-lived values to complete the check.</td>
              <td className="py-3 pr-4">Essential (security)</td>
              <td className="py-3">Session / short-lived</td>
            </tr>
            <tr>
              <td className="py-3 pr-4">Cloudflare Web Analytics</td>
              <td className="py-3 pr-4">Counts visits and shows which pages are used, so we can improve the site. It does not use cookies or local storage to track you. It only loads if you accept analytics.</td>
              <td className="py-3 pr-4">Optional</td>
              <td className="py-3">No cookie or stored value is set</td>
            </tr>
          </tbody>
        </table>
      </div>
      <P>We do not use advertising or social media tracking cookies, and we do not load fonts or other content from Google.</P>

      <H2>Essential vs optional</H2>
      <P>
        Essential storage is needed for the site and our forms to work securely, so it does not need your consent. Optional
        storage, such as analytics, is switched off unless you accept it.
      </P>

      <H2>Change your choices</H2>
      <P>
        You can change or withdraw your consent at any time:{" "}
        <button
          type="button"
          onClick={openConsentSettings}
          className="underline underline-offset-2 decoration-[var(--color-cyan)] text-[var(--color-dark-blue)] font-medium cursor-pointer"
        >
          open cookie settings
        </button>
        . You can also block or delete cookies and site data in your browser settings, though the forms may stop working if the
        security check is blocked.
      </P>

      <H2>More information</H2>
      <P>
        For how we handle personal information more generally, see our <A href="/privacy">Privacy Policy</A>.
        Questions: <Mail address={COMPANY.email} />.
      </P>
    </LegalPage>
  );
}
