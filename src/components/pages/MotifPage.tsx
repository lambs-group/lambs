import { PageShell } from "../sections/PageShell";
import { PageHero } from "../sections/PageHero";
import { CTASection } from "../sections/CTASection";
import { Todo } from "../Placeholder";
import { MotifQC } from "./motif/MotifQC";

// Interim page. The old Motif case study combined two separate workstreams (direct Virgin Media
// full-fibre work and Fujitsu work) and carried unverified figures, so it was stripped on 2 Nov 2026.
// Rebuild from confirmed information once Lambs confirm which work the Motif name, photos and figures relate to.
export function MotifPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Project experience"
        heading="Telecoms project experience."
        sectionIndex="- / Project experience"
      >
        <p className="mt-6 text-[16px] leading-relaxed max-w-2xl">
          <Todo>case study rewrite: which work the Motif name, photographs and figures relate to; scope of the direct Virgin Media work and of the Fujitsu work; historical dates. Awaiting Lambs.</Todo>
        </p>
      </PageHero>

      <MotifQC />

      <CTASection />
    </PageShell>
  );
}
