import { ArrowLeft, MapPin, Briefcase, Clock, Users } from "lucide-react";
import { AnimatedHeading } from "../AnimatedHeading";
import { FadeIn } from "../FadeIn";
import { PageShell } from "../sections/PageShell";
import { withBase } from "../../utils/paths";
import { ApplicationForm } from "./careers/ApplicationForm";
import type { Vacancy } from "../../data/vacancies";

interface JobPageProps {
  vacancy: Vacancy;
}

export function JobPage({ vacancy }: JobPageProps) {
  const meta = [
    { icon: MapPin, label: vacancy.location },
    { icon: Briefcase, label: vacancy.type },
    ...(vacancy.salary ? [{ icon: Clock, label: vacancy.salary }] : []),
    { icon: Users, label: `Reports to ${vacancy.reports}` },
  ];

  return (
    <PageShell>
      <section className="relative bg-white overflow-hidden pt-[140px] pb-16 lg:pt-[180px] lg:pb-20 border-b border-[var(--color-border)]">
        <div className="grid-bg absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <a
              href={withBase("/careers")}
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[var(--color-mid-blue)] hover:text-[var(--color-dark-blue)] font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All vacancies
            </a>
          </FadeIn>

          <FadeIn delay={80}>
            <span className="eyebrow mb-6">Current vacancy</span>
          </FadeIn>
          <AnimatedHeading as="h1" className="max-w-4xl mt-4 mb-10">
            {vacancy.title}
          </AnimatedHeading>

          <FadeIn delay={240}>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
              {meta.map((m) => {
                const Icon = m.icon;
                return (
                  <span key={m.label} className="inline-flex items-center gap-2 text-[13px] text-[var(--color-dark-blue)]">
                    <Icon className="w-4 h-4 text-[var(--color-cyan)]" strokeWidth={1.8} />
                    {m.label}
                  </span>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={320}>
            <p className="text-[var(--color-charcoal)] text-lg md:text-xl leading-relaxed max-w-3xl">
              {vacancy.summary}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7 flex flex-col gap-16">
              <JobSection title="What you'll do" items={vacancy.responsibilities} />
              <JobSection title="What you'll bring" items={vacancy.requirements} />
              {vacancy.nice.length > 0 && (
                <JobSection title="Nice to have" items={vacancy.nice} muted />
              )}
              {vacancy.whatWeOffer && vacancy.whatWeOffer.length > 0 && (
                <JobSection title="What we offer" items={vacancy.whatWeOffer} />
              )}
            </div>

            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                <FadeIn>
                  <span className="eyebrow mb-6">Apply</span>
                  <h2 className="text-[var(--color-dark-blue)] text-[28px] lg:text-[36px] font-semibold mt-6 mb-3 leading-tight">
                    Send us your CV.
                  </h2>
                  <p className="text-[var(--color-charcoal)] text-[15px] leading-relaxed mb-8 max-w-md">
                    We read every application. Expect a call back within one working day.
                  </p>
                </FadeIn>

                <ApplicationForm vacancy={vacancy} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function JobSection({ title, items, muted = false }: { title: string; items: string[]; muted?: boolean }) {
  return (
    <FadeIn>
      <div>
        <span className="eyebrow mb-6 block">{title}</span>
        <ul className="flex flex-col gap-4 mt-6">
          {items.map((it) => (
            <li key={it} className="flex items-start gap-4">
              <span className={`mt-2 w-2 h-2 flex-shrink-0 ${muted ? "bg-[var(--color-mid-blue)]" : "bg-[var(--color-cyan)]"}`} />
              <span className={`text-[15px] lg:text-[16px] leading-relaxed ${muted ? "text-[var(--color-mid-blue)]" : "text-[var(--color-charcoal)]"}`}>
                {it}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}
