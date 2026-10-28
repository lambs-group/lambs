import { FadeIn } from "../FadeIn";
import { certificationBody, companyAccreditations, teamQualifications, workingTowards } from "../../data/credentials";

interface CredentialsProps {
  eyebrow?: string;
  heading: string;
  /** "white" or "grey" section background, to alternate with its neighbours. */
  tone?: "white" | "grey";
}

/** Company accreditations and team qualifications, from src/data/credentials.ts. */
export function Credentials({ eyebrow = "Standards and training", heading, tone = "white" }: CredentialsProps) {
  const chip = "text-[11px] uppercase tracking-[0.18em] text-[var(--color-dark-blue)] border border-[var(--color-border-strong)] px-4 py-3 bg-white font-medium";
  return (
    <section
      className={`py-20 lg:py-28 border-y border-[var(--color-border)] ${tone === "grey" ? "bg-[var(--color-light-grey)]" : "bg-white"}`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <FadeIn>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="text-[32px] lg:text-[48px] font-semibold mt-6 mb-12 max-w-2xl leading-[1.08] text-[var(--color-dark-blue)]">{heading}</h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <FadeIn>
            <h3 className="text-[13px] uppercase tracking-[0.18em] text-[var(--color-mid-blue)] font-medium mb-5">Company accreditations</h3>
            <ul className="flex flex-col gap-3">
              {companyAccreditations.map((a) => (
                <li key={a.name} className="flex items-baseline gap-4 border-b border-[var(--color-border)] pb-3">
                  <span className="text-[var(--color-dark-blue)] font-semibold text-[17px]">{a.name}</span>
                  <span className="text-[var(--color-mid-blue)] text-[14px]">{a.area}</span>
                  <span className="ml-auto text-[var(--color-charcoal)] text-[12px] text-right">Certificate {a.certificate}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[14px] text-[var(--color-charcoal)]">Certified by {certificationBody}.</p>
            {workingTowards.length > 0 && (
              <p className="mt-2 text-[14px] text-[var(--color-charcoal)]">Working towards: {workingTowards.join(", ")}.</p>
            )}
          </FadeIn>

          <FadeIn delay={120}>
            <h3 className="text-[13px] uppercase tracking-[0.18em] text-[var(--color-mid-blue)] font-medium mb-5">Team qualifications</h3>
            <div className="flex flex-wrap gap-3">
              {teamQualifications.map((q) => (
                <span key={q} className={chip}>{q}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
