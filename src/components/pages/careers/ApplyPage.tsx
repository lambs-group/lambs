import { FadeIn } from "../../FadeIn";
import { PageShell } from "../../sections/PageShell";
import { PageHero } from "../../sections/PageHero";
import { withBase } from "../../../utils/paths";
import { Todo } from "../../Placeholder";
import { VACANCIES } from "../../../data/vacancies";
import { ApplicationForm } from "./ApplicationForm";

export function ApplyPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Careers"
        heading="Register your interest."
        lede="Tell us about your experience, location and the type of work you’re interested in. You can attach a CV or provide a short summary of your skills and qualifications."
        sectionIndex="- / Careers"
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7 lg:col-start-1">
              <ApplicationForm />
            </div>
            <div className="lg:col-span-5">
              <FadeIn>
                <span className="eyebrow mb-6">What happens next</span>
                <ul className="mt-6 flex flex-col gap-4 text-[var(--color-charcoal)] text-[15px] leading-relaxed">
                  <li className="flex items-start gap-4"><span className="mt-2 w-2 h-2 flex-shrink-0 bg-[var(--color-cyan)]" />Our team will review your details and contact you if there is a suitable opportunity.</li>
                  <li className="flex items-start gap-4"><span className="mt-2 w-2 h-2 flex-shrink-0 bg-[var(--color-cyan)]" /><Todo>who receives applications, whether careers@lambsgroup.co.uk is monitored, and the retention process</Todo></li>
                  <li className="flex items-start gap-4">
                    <span className="mt-2 w-2 h-2 flex-shrink-0 bg-[var(--color-cyan)]" />
                    <span>
                      See how we handle your details in our{" "}
                      <a className="underline underline-offset-2 decoration-[var(--color-cyan)] text-[var(--color-dark-blue)]" href={withBase("/privacy")}>Privacy Policy</a>.
                    </span>
                  </li>
                </ul>
                {VACANCIES.length > 0 && (
                  <p className="mt-8 text-[14px] text-[var(--color-mid-blue)]">
                    <a className="underline underline-offset-2 decoration-[var(--color-cyan)] text-[var(--color-dark-blue)]" href={withBase("/careers")}>See current vacancies</a>
                  </p>
                )}
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
