import { FadeIn } from "../FadeIn";

interface TestimonialProps {
  quote: string;
  /** Credit by company or job title only, as agreed with Lambs. */
  attribution: string;
  /** Section background, to alternate with its neighbours. */
  tone?: "white" | "grey";
  eyebrow?: string;
}

/** A single client reference, set large. Wording is supplied by Lambs and used as given. */
export function Testimonial({ quote, attribution, tone = "white", eyebrow = "Client reference" }: TestimonialProps) {
  return (
    <section className={`py-20 lg:py-28 ${tone === "grey" ? "bg-[var(--color-light-grey)]" : "bg-white"}`}>
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <FadeIn>
          <span className="eyebrow mb-10">{eyebrow}</span>
          <figure className="mt-10 max-w-4xl border-l-[3px] border-[var(--color-cyan)] pl-6 sm:pl-10">
            <blockquote className="text-[22px] sm:text-[28px] lg:text-[36px] leading-[1.3] font-medium tracking-tight text-[var(--color-dark-blue)]">
              &ldquo;{quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 text-[12px] uppercase tracking-[0.16em] font-medium text-[var(--color-mid-blue)]">
              {attribution}
            </figcaption>
          </figure>
        </FadeIn>
      </div>
    </section>
  );
}
