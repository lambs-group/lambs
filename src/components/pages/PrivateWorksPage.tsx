import { AnimatedHeading } from "../AnimatedHeading";
import { FadeIn } from "../FadeIn";
import { Button } from "../Button";
import { SectorIndex } from "../SectorIndex";
import { PageShell } from "../sections/PageShell";
import { CTASection } from "../sections/CTASection";
import { PrivateServicesGrid } from "./private/PrivateServicesGrid";
import { PricingBand } from "./private/PricingBand";
import { QuoteForm } from "./private/QuoteForm";

export function PrivateWorksPage() {
  return (
    <PageShell>
      <SectorIndex label="03 / PRIVATE WORKS" />

      <section className="relative bg-white pt-[140px] pb-20 lg:pt-[180px] lg:pb-28 border-b border-[var(--color-border)]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-9">
              <FadeIn><span className="eyebrow mb-6">Sector 03 · Private Works · Domestic</span></FadeIn>
              <AnimatedHeading as="h1" className="mt-4 mb-8" stagger={40}>
                Your driveway, finished right.
              </AnimatedHeading>
              <FadeIn delay={260}>
                <p className="text-[var(--color-charcoal)] text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
                  Tarmac, resin, block paving, patios, drainage and dropped kerbs - laid by the same crews that work on our commercial programmes. Skilled crews across our workforce. Compliance-first. Fixed quotes.
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
      <PricingBand />
      <QuoteForm id="quote" />

      <CTASection
        eyebrow="Private Works"
        heading="Ready to start your driveway?"
        primaryLabel="Get a quote"
        primaryHref="#quote"
      />
    </PageShell>
  );
}
