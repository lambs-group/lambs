import { AnimatedHeading } from "../AnimatedHeading";
import { FadeIn } from "../FadeIn";
import { RevealImage } from "../RevealImage";
import { Button } from "../Button";
import { SectorIndex } from "../SectorIndex";
import { PageShell } from "../sections/PageShell";
import { PageHero } from "../sections/PageHero";
import { CTASection } from "../sections/CTASection";
import { Todo } from "../Placeholder";
import { ArrowUpRight } from "lucide-react";
import { withBase } from "../../utils/paths";
import { VACANCIES } from "../../data/vacancies";

const reasons = [
  { number: "01", title: "Teamwork", body: "Site and office teams work closely together, with every role contributing to delivery." },
  { number: "02", title: "Training & development", body: "Training is matched to each person\u2019s role, helping our people develop their skills and work safely." },
  { number: "03", title: "Support on the job", body: "Our teams are supported by experienced managers and a dedicated Health and Safety Manager." },
  { number: "04", title: "A family-run business", body: "Led by Simon and Amanda Lamb, with a hands-on approach and pride in our people and their work." },
];

const vacancies = VACANCIES;

const lifeImages = [
  { src: "/images/field/careers-mini-excavator-operator.webp", alt: "Lambs Group operative driving a mini excavator on a residential street" },
  { src: "/images/field/careers-plan-review-on-site.webp", alt: "Two Lambs Group operatives checking plans on site" },
  { src: "/images/field/careers-saw-cutting-pair.webp", alt: "Lambs Group operatives wearing ear defenders and masks, saw-cutting tarmac" },
  { src: "/images/field/careers-cable-locator-excavation.webp", alt: "Lambs Group operative using a cable locator beside a hand-dug excavation" },
];

export function CareersPage() {
  return (
    <PageShell>
      <SectorIndex label="- / CAREERS" />
      <PageHero
        eyebrow="Careers at Lambs Group"
        heading="Build your future with Lambs."
        lede="At Lambs Group, everyone has a part to play—from our engineers and operatives to the people supporting delivery in the office. We welcome enquiries from people who take pride in their work, value teamwork and share our commitment to safety and quality."
        image="/images/field/careers-hero-cable-locator-chamber.webp"
        imageAlt="Lambs Group operative using a gas detector and cable locator at an open chamber"
        sectionIndex="- / Careers"
      />

      <section className="bg-white py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-4">
              <FadeIn><span className="eyebrow">Why work here</span></FadeIn>
            </div>
            <div className="lg:col-span-8">
              <AnimatedHeading as="h2" className="max-w-3xl">Working as one Lambs team.</AnimatedHeading>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border-strong)]">
            {reasons.map((r, i) => (
              <FadeIn key={r.title} delay={i * 140} className="bg-white p-10 lg:p-14">
                <div className="flex items-start gap-6">
                  <span className="text-xs uppercase tracking-widest text-[var(--color-cyan)] font-semibold">{r.number}</span>
                  <div>
                    <h3 className="text-[var(--color-dark-blue)] text-[24px] lg:text-[30px] font-semibold mb-4 leading-tight">{r.title}</h3>
                    <p className="text-[var(--color-charcoal)] text-[15px] leading-relaxed">{r.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light-grey)] py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-5">
              <FadeIn><span className="eyebrow">Current vacancies</span></FadeIn>
              <AnimatedHeading as="h2" className="mt-6 max-w-md">Current opportunities.</AnimatedHeading>
            </div>
            <div className="lg:col-span-7 flex lg:justify-end lg:items-end">
              <FadeIn delay={200}>
                <p className="text-[14px]">
                  <Todo>any live vacancies to show here (none listed at present)</Todo>
                </p>
              </FadeIn>
            </div>
          </div>

          {vacancies.length === 0 ? (
            <FadeIn>
              <div className="border-t border-b border-[var(--color-border-strong)] py-12 lg:py-16">
                <p className="text-[var(--color-charcoal)] text-base lg:text-lg leading-relaxed max-w-2xl">
                  We don&rsquo;t currently have any advertised vacancies, but welcome enquiries about future opportunities on site and in the office. Tell us about your experience and the type of role you&rsquo;re interested in.
                </p>
              </div>
            </FadeIn>
          ) : (
          <ul className="border-t border-[var(--color-border-strong)]">
            {vacancies.map((v, i) => (
              <FadeIn key={v.slug} as="span" delay={i * 100} className="block border-b border-[var(--color-border-strong)]">
                <a href={withBase(`/careers/${v.slug}`)} className="group grid grid-cols-12 items-center gap-6 py-8 lg:py-10 hover:bg-white transition-colors duration-500 px-2">
                  <span className="col-span-12 md:col-span-4 text-[var(--color-dark-blue)] text-[22px] lg:text-[28px] font-semibold">{v.title}</span>
                  <span className="col-span-6 md:col-span-3 text-[11px] uppercase tracking-widest text-[var(--color-mid-blue)] font-medium">{v.location}</span>
                  <span className="col-span-6 md:col-span-3 text-[11px] uppercase tracking-widest text-[var(--color-mid-blue)] font-medium">{v.type}</span>
                  <span className="col-span-6 md:col-span-1 text-[11px] uppercase tracking-widest text-[var(--color-mid-blue)] font-medium">{v.days}d ago</span>
                  <span className="col-span-6 md:col-span-1 flex md:justify-end">
                    <ArrowUpRight className="w-5 h-5 text-[var(--color-dark-blue)] group-hover:text-[var(--color-cyan)] btn-arrow" />
                  </span>
                </a>
              </FadeIn>
            ))}
          </ul>
          )}

          <FadeIn delay={500}>
            <div className="mt-16 flex flex-col md:flex-row gap-4">
              <Button href="/careers/apply" variant="primary" size="lg">Register your interest</Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn><span className="eyebrow mb-8 block">Life on site</span></FadeIn>
          <p className="mb-8 text-[14px]"><Todo>add office photos alongside site photos, consistent with the one-team message</Todo></p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifeImages.map((img, i) => (
              <FadeIn key={img.src} delay={i * 120}>
                <RevealImage src={img.src} alt={img.alt} aspect="aspect-[3/2]" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection eyebrow="Join the team" heading="Interested in becoming part of Lambs?" primaryLabel="Register your interest" primaryHref="/careers/apply" />
    </PageShell>
  );
}
