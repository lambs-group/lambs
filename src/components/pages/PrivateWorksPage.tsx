import { AnimatedHeading } from "../AnimatedHeading";
import { FadeIn } from "../FadeIn";
import { Button } from "../Button";
import { SectorIndex } from "../SectorIndex";
import { PageShell } from "../sections/PageShell";
import { CTASection } from "../sections/CTASection";
import { PrivateServicesGrid } from "./private/PrivateServicesGrid";
import { Todo } from "../Placeholder";
import { QuoteForm } from "./private/QuoteForm";

export function PrivateWorksPage() {
  return (
    <PageShell>
      <SectorIndex label="03 / PRIVATE WORKS" />

      <section className="relative bg-white pt-[140px] pb-20 lg:pt-[180px] lg:pb-28 border-b border-[var(--color-border)]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-10">
              <FadeIn><span className="eyebrow mb-6">Sector 03 · Private Works · Domestic</span></FadeIn>
              <AnimatedHeading as="h1" className="mt-4 mb-8" stagger={40}>
                Home improvements and groundworks. Built around you.
              </AnimatedHeading>
              <FadeIn delay={260}>
                <p className="text-[var(--color-charcoal)] text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
                  From driveways, patios and groundworks to building, roofing, windows and doors, joinery, plumbing and electrical works, Lambs Group brings decades of construction experience to your home. Our team manages your project from preparation to the finishing touches, with clear quotations and one point of contact.
                </p>
              </FadeIn>
              <FadeIn delay={380}>
                <Button href="#quote" variant="primary" size="lg">Get a quote</Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <PrivateServicesGrid />
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <FadeIn><span className="eyebrow">Quotations</span></FadeIn>
            </div>
            <div className="lg:col-span-8">
              <AnimatedHeading as="h2" className="max-w-3xl">A clear quote for your project.</AnimatedHeading>
              <FadeIn delay={200}>
                <p className="text-[var(--color-charcoal)] text-lg leading-relaxed mt-8 max-w-2xl">
                  Every project is different. We assess the work, discuss your requirements and provide a clear written quotation setting out what&rsquo;s included. Any changes to the agreed scope and price will be discussed with you before additional work begins.
                </p>
                <p className="mt-6 text-[15px] text-[var(--color-charcoal)]">
                  <Todo>Private Works coverage area from the new base, awaiting Amanda</Todo>
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      <QuoteForm id="quote" />

      <CTASection
        eyebrow="Private Works"
        heading="Ready to discuss your project?"
        primaryLabel="Get a quote"
        primaryHref="#quote"
      />
    </PageShell>
  );
}
