import { AnimatedHeading } from "../AnimatedHeading";
import { FadeIn } from "../FadeIn";
import { SectorIndex } from "../SectorIndex";
import { UtilityNetwork } from "../motion/UtilityNetwork";
import { PageShell } from "../sections/PageShell";
import { ServiceList } from "../sections/ServiceList";
import { CTASection } from "../sections/CTASection";
import { Credentials } from "../sections/Credentials";

export const services = [
  { number: "01", title: "Water supply works", description: "New mains laying, service connections, meter installs and network extensions on housing and commercial sites." },
  { number: "02", title: "Gas supply", description: "Gas mains, service connections, riser works and safe site isolation delivered by trained crews." },
  { number: "03", title: "Electricity supply", description: "LV and HV ducting routes, service cabinets and connection works coordinated with DNO programmes." },
  { number: "04", title: "Ducting", description: "Multi-utility ducting installation, marker tape, warning mesh and chamber setting-out." },
  { number: "05", title: "Jointing", description: "Cable and pipe jointing delivered to operator standards, including LV jointing and pressure testing." },
  { number: "06", title: "Mains laying & connections", description: "From bulk mains to final service connections - one crew, one programme, one point of contact." },
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
                Water, gas, power - laid and connected.
              </AnimatedHeading>
              <FadeIn delay={260}>
                <p className="text-[var(--color-charcoal)] text-lg md:text-xl leading-relaxed max-w-3xl">
                  Utility supply works for housing, industrial and local authority schemes across the UK. From new mains to the final service connection - one trained crew, one programme, one point of contact.
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-4 hidden md:block">
              <FadeIn delay={400}>
                <div className="max-w-[340px] ml-auto">
                  <UtilityNetwork />
                  <div className="grid grid-cols-3 gap-4 mt-4 text-[11px] uppercase tracking-widest text-[var(--color-mid-blue)] font-medium">
                    <span><span className="inline-block w-3 h-[2px] align-middle bg-[var(--color-dark-blue)] mr-2"></span>Power</span>
                    <span><span className="inline-block w-3 h-[2px] align-middle bg-[var(--color-mid-blue)] mr-2"></span>Water</span>
                    <span><span className="inline-block w-3 h-[2px] align-middle bg-[var(--color-cyan)] mr-2"></span>Gas</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <ServiceList eyebrow="What we deliver" heading="Three utilities. One accountable crew." items={services} />

      <Credentials heading="Certified, qualified and trained." tone="grey" />

      <CTASection eyebrow="Utilities enquiries" heading="Need mains laid? Let's talk." />
    </PageShell>
  );
}
