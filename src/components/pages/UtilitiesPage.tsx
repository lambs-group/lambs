import { AnimatedHeading } from "../AnimatedHeading";
import { FadeIn } from "../FadeIn";
import { SectorIndex } from "../SectorIndex";
import { UtilityNetwork } from "../motion/UtilityNetwork";
import { PageShell } from "../sections/PageShell";
import { ServiceList } from "../sections/ServiceList";
import { CTASection } from "../sections/CTASection";
import { Testimonial } from "../sections/Testimonial";
import { REFERENCES } from "../../data/references";
import { Credentials } from "../sections/Credentials";

export const services = [
  { number: "01", title: "Telecoms civils", description: "Ducting, chambers and civils supporting new telecoms networks and upgrades." },
  { number: "02", title: "Water, gas and electricity civils", description: "Civils and groundworks supporting water, gas and electricity projects." },
  { number: "03", title: "Excavation & groundworks", description: "Minor and major excavation, trenching and groundworks across roads, footpaths and development sites." },
  { number: "04", title: "Ducting & chambers", description: "Multi-utility ducting installation, marker tape, warning mesh and chamber setting-out." },
  { number: "05", title: "Drainage", description: "Drainage works supporting utility and development projects." },
  { number: "06", title: "Reinstatement", description: "Reinstatement of roads, footpaths and verges once the work is complete." },
];

export function UtilitiesPage() {
  return (
    <PageShell>
      <SectorIndex label="02 / UTILITIES" />

      <section className="relative bg-white overflow-hidden pt-[140px] pb-16 lg:pt-[180px] lg:pb-24 border-b border-[var(--color-border)]">
        <div className="grid-bg absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn><span className="eyebrow mb-6">Sector 02 · Utilities</span></FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-8">
              <AnimatedHeading as="h1" className="max-w-4xl mt-4 mb-8" stagger={40}>
                Civils and infrastructure for essential utilities.
              </AnimatedHeading>
              <FadeIn delay={260}>
                <p className="text-[var(--color-charcoal)] text-lg md:text-xl leading-relaxed max-w-3xl">
                  We carry out civils and groundworks for telecoms, water, gas and electricity projects, including excavation, ducting, chambers, drainage and reinstatement.
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-4 hidden md:block">
              <FadeIn delay={400}>
                <div className="max-w-[340px] ml-auto">
                  <UtilityNetwork />
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 text-[11px] uppercase tracking-widest text-[var(--color-mid-blue)] font-medium">
                    <span><span className="inline-block w-3 h-[2px] align-middle bg-[var(--color-dark-blue)] mr-2"></span>Power</span>
                    <span><span className="inline-block w-3 h-[2px] align-middle bg-[var(--color-mid-blue)] mr-2"></span>Water</span>
                    <span><span className="inline-block w-3 h-[2px] align-middle bg-[var(--color-cyan)] mr-2"></span>Gas</span>
                    <span><span className="inline-block w-3 h-[2px] align-middle bg-[var(--color-charcoal)] mr-2"></span>Telecoms</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <ServiceList eyebrow="What we deliver" heading="Essential utilities. One experienced team." items={services} />

      <Credentials heading="Certified, qualified and trained." tone="grey" healthSafetyNote="Our dedicated Health and Safety Manager supports safe delivery through regular audits, site checks and ongoing training." />

      <Testimonial
        tone="white"
        quote={REFERENCES.pgConsultancy.quote}
        attribution={REFERENCES.pgConsultancy.attribution}
      />

      <CTASection eyebrow="Utilities enquiries" heading="Planning utility works? Let's talk." />
    </PageShell>
  );
}
