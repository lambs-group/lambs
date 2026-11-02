import { AnimatedHeading } from "../AnimatedHeading";
import { FadeIn } from "../FadeIn";
import { Todo } from "../Placeholder";
import { SectorIndex } from "../SectorIndex";
import { FibreDraw } from "../motion/FibreDraw";
import { PageShell } from "../sections/PageShell";
import { ServiceList } from "../sections/ServiceList";
import { CTASection } from "../sections/CTASection";
import { Credentials } from "../sections/Credentials";

export const services = [
  { number: "01", title: "Civils & reinstatement", description: "Excavation, trenching, duct installation, chambers, blockage clearance and reinstatement of roads, footpaths and private land." },
  { number: "02", title: "FTTH / FTTP rollout", description: "Full-fibre to the home and premises. Surveys, splicing and commissioning to client and network requirements." },
  { number: "03", title: "Fibre blowing & cabling", description: "Fibre blowing and cable installation through new and existing duct networks." },
  { number: "04", title: "Splicing & testing", description: "Fibre splicing, testing and certification to client and network requirements." },
  { number: "05", title: "Directional drilling", description: "Moling and horizontal directional drilling for low-impact cable installs under highways, driveways and gardens." },
  { number: "06", title: "Mole ploughing", description: "High-speed duct and cable installation across verges, footpaths and rural routes with minimal reinstatement." },
  { number: "07", title: "Surveys & design", description: "Pre-build surveys, route planning and on-street validation to keep builds on programme." },
  { number: "08", title: "Cabinet installations", description: "PCP and FTTC cabinet foundations, installations, power connections and commissioning." },
];

export function TelecomsPage() {
  return (
    <PageShell darkHero>
      <SectorIndex label="01 / TELECOMS" />

      <section className="relative bg-[var(--color-dark-blue)] overflow-hidden min-h-[90svh] flex items-end">
        <div className="absolute inset-0 grid-bg-dark opacity-40" aria-hidden="true" />
        <div className="absolute inset-0 pointer-events-none">
          <FibreDraw />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-[180px] pb-20 w-full">
          <FadeIn><span className="eyebrow eyebrow-dark mb-8">Sector 01 · Telecoms</span></FadeIn>
          <AnimatedHeading as="h1" className="text-white max-w-4xl mt-8 mb-10" stagger={40}>
            Telecoms infrastructure. From the ground up.
          </AnimatedHeading>
          <FadeIn delay={280}>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl">
              Lambs Group delivers minor and major telecoms civils, drawing on decades of infrastructure and groundworks experience. Our capabilities include excavation, ducting, chambers, fibre blowing and cabling, splicing and reinstatement, with delivery managed directly by Lambs.
            </p>
          </FadeIn>
        </div>
      </section>

      <ServiceList
        eyebrow="What we deliver"
        heading="Complete telecoms delivery, managed by Lambs."
        items={services}
      />

      <section className="bg-[var(--color-light-grey)] py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn><span className="eyebrow mb-6">Project experience</span></FadeIn>
          <h2 className="mt-6 mb-8 max-w-2xl text-[var(--color-dark-blue)] text-[28px] lg:text-[40px] font-semibold leading-tight">
            <Todo>heading, once the Fujitsu and Virgin Media work is clarified</Todo>
          </h2>
          <FadeIn delay={200}>
            <p className="text-[var(--color-charcoal)] text-lg leading-relaxed max-w-2xl">
              <Todo>historical project experience wording, awaiting Lambs to confirm which work relates to which client</Todo>
            </p>
          </FadeIn>
        </div>
      </section>

      <Credentials heading="Certified, qualified and trained." tone="white" />

      <CTASection eyebrow="Planning telecoms works?" heading="Let's walk the route." />
    </PageShell>
  );
}
