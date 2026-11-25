import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "../FadeIn";
import { PageShell } from "../sections/PageShell";
import { PageHero } from "../sections/PageHero";
import { CTASection } from "../sections/CTASection";
import { withBase } from "../../utils/paths";

export function CaseStudiesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Work"
        heading="Decades of experience. Proven delivery."
        lede="Explore examples of Lambs Group’s work across telecoms, utilities, civils and groundworks. Our experience spans major infrastructure programmes, smaller works and private projects, built over decades of working with contractors, developers and local authorities."
        sectionIndex="- / Our Work"
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <a href={withBase("/work/motif")} className="group block border border-[var(--color-border-strong)] p-10 lg:p-14 hover:border-[var(--color-dark-blue)] transition-colors duration-500">
              <span className="eyebrow mb-6">Project experience · Telecoms</span>
              <h2 className="text-[var(--color-dark-blue)] text-[28px] lg:text-[40px] font-semibold leading-tight mb-6 max-w-2xl">
                Virgin Media contract, delivered through Fujitsu
              </h2>
              <p className="text-[var(--color-charcoal)] text-[16px] leading-relaxed mb-8 max-w-2xl">
                Previous work: a Virgin Media contract that Lambs Group worked on through Fujitsu, delivered under the Motif name.
              </p>
              <span className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-[var(--color-dark-blue)] font-semibold">
                View project experience
                <ArrowUpRight className="w-4 h-4 btn-arrow" />
              </span>
            </a>
          </FadeIn>
        </div>
      </section>

      <CTASection eyebrow="Ready to brief us?" />
    </PageShell>
  );
}
