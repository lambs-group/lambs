import { AnimatedHeading } from "../AnimatedHeading";
import { FadeIn } from "../FadeIn";
import { Button } from "../Button";
import { Todo } from "../Placeholder";

interface CTASectionProps {
  eyebrow?: string;
  heading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  /** Optional highlighted note for wording still awaiting confirmation. */
  note?: string;
}

export function CTASection({
  eyebrow = "Start a project",
  heading = "Your project. Our expertise. One point of contact.",
  primaryLabel = "Start a project",
  primaryHref = "/contact",
  secondaryLabel = "Call 01925 810 991",
  secondaryHref = "tel:01925810991",
  note,
}: CTASectionProps) {
  return (
    <section className="bg-[var(--color-dark-blue)] text-white py-24 lg:py-32 relative overflow-hidden">
      <div className="grid-bg-dark absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <FadeIn><span className="eyebrow eyebrow-dark mb-6">{eyebrow}</span></FadeIn>
            <AnimatedHeading as="h2" className="text-white max-w-3xl mt-8">
              {heading}
            </AnimatedHeading>
            {note && <p className="mt-6 text-[14px]"><Todo>{note}</Todo></p>}
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 items-start lg:items-end">
            <Button href={primaryHref} variant="primary" size="lg">{primaryLabel}</Button>
            <Button href={secondaryHref} variant="outline-white" size="lg" arrow="none">{secondaryLabel}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
