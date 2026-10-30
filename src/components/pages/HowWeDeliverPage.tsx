import { AnimatedHeading } from "../AnimatedHeading";
import { FadeIn } from "../FadeIn";
import { ScrollProgress } from "../ScrollProgress";
import { PageShell } from "../sections/PageShell";
import { PageHero } from "../sections/PageHero";
import { CTASection } from "../sections/CTASection";
import { imgAttrs } from "../../utils/images";

const stages = [
  { image: "/images/how-we-deliver/01-brief.webp", alt: "Two colleagues in an office going through a site plan together over a desk, with a laptop and a notebook beside them.", number: "01", title: "Brief", promise: "You call. We listen.", body: "Send the brief. Scope, timing, sector, constraints. We read it, ring you back within one working day, and tell you honestly whether we're the right crew for it.", chip: "1 working day" },
  { image: "/images/how-we-deliver/02-survey.webp", alt: "Two surveyors in hi-vis on a residential pavement, one scanning for buried services with a cable locator and the other recording measurements on a tablet beside a measuring wheel.", number: "02", title: "Survey", promise: "We walk the route.", body: "On-site survey with our own crew. Marker paint, measurements, photos, sketch. We find what the drawings don't show - and give you a report before we quote.", chip: "Specialist surveyors" },
  { image: "/images/how-we-deliver/03-design.webp", alt: "A designer marking up a detailed utility route drawing at a desk, with a CAD drawing on the laptop behind and material samples beside the plans.", number: "03", title: "Design", promise: "We draw it first.", body: "Route design, material schedule, programme. Coordinated with client drawings and operator specs. Reviewed internally before you see it.", chip: "Operator-standard drawings" },
  { image: "/images/how-we-deliver/04-mobilise.webp", alt: "Three crew members in hi-vis at the open back of a van, checking a clipboard while loading barriers, a compactor and cones.", number: "04", title: "Mobilise", promise: "We move the crew.", body: "Permit pulls, PPE drop, vehicle pre-checks, crew brief. Everyone on site knows the plan before the first dig.", chip: "Morning audit call" },
  { image: "/images/how-we-deliver/05-deliver.webp", alt: "Two operatives in hi-vis laying ducting into a trench in a residential street behind green safety barriers, with a mini excavator in the background.", number: "05", title: "Deliver", promise: "We dig, duct, joint, splice, lay, finish.", body: "Delivery by specialist crews across our workforce. NRSWA-compliant. ISO 45001 certified.", chip: "Trained crews" },
  { image: "/images/how-we-deliver/06-reinstate.webp", alt: "An operative using a plate compactor on freshly laid tarmac in a pavement trench while a colleague checks the level, behind green barriers.", number: "06", title: "Reinstate", promise: "We leave it right.", body: "Permanent reinstatement to NRSWA standard. Compacted, rolled, signed, photographed. Every defect addressed before we leave.", chip: "NRSWA-compliant" },
  { image: "/images/how-we-deliver/07-handover.webp", alt: "A crew member showing a client a finished, neatly reinstated section of pavement while the client records the handover on a tablet.", number: "07", title: "Handover", promise: "We sign it over.", body: "As-built drawings, test records, photos, RAMS logs, sign-off. Handover pack sent. Six-month defect window covered.", chip: "Full handover pack" },
];

export function HowWeDeliverPage() {
  return (
    <PageShell>
      <ScrollProgress />

      <PageHero
        eyebrow="How we deliver"
        heading="From brief to handover. Seven stages."
        lede="Every Lambs Group programme runs through the same seven stages. Sometimes briefly, sometimes in depth - but always in order, always directly, always audited."
        sectionIndex="- / How We Deliver"
      />

      {stages.map((stage, i) => {
        const darkBand = i % 2 === 1;
        const imageFirst = i % 2 === 1;
        return (
          <section
            key={stage.number}
            className={`py-20 lg:py-28 ${darkBand ? "bg-[var(--color-dark-blue)] text-white" : "bg-white"}`}
          >
            <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <div className={`lg:col-span-7 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}>
                  <FadeIn>
                    <img
                      {...imgAttrs(stage.image, "(min-width: 1024px) 58vw, 100vw")}
                      alt={stage.alt}
                      loading="lazy"
                      className="w-full aspect-[3/2] object-cover bg-[var(--color-light-grey)]"
                    />
                  </FadeIn>
                </div>
                <div className={`lg:col-span-5 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
                  <FadeIn>
                    <div className="text-xs uppercase tracking-widest font-semibold mb-5 text-[var(--color-cyan)]">
                      Stage {stage.number}
                    </div>
                  </FadeIn>
                  <AnimatedHeading as="h2" className={`max-w-md mb-6 ${darkBand ? "text-white" : ""}`}>
                    {stage.title}
                  </AnimatedHeading>
                  <FadeIn delay={180}>
                    <p className={`text-[22px] lg:text-[28px] font-semibold leading-tight mb-6 ${darkBand ? "text-[var(--color-cyan)]" : "text-[var(--color-dark-blue)]"}`}>
                      {stage.promise}
                    </p>
                    <p className={`text-[15px] leading-relaxed mb-8 max-w-xl ${darkBand ? "text-white/80" : "text-[var(--color-charcoal)]"}`}>
                      {stage.body}
                    </p>
                    <span className={`inline-block text-[11px] uppercase tracking-widest px-3 py-2 font-medium ${darkBand ? "border border-white/30 text-white/80" : "border border-[var(--color-border-strong)] text-[var(--color-dark-blue)]"}`}>
                      {stage.chip}
                    </span>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection eyebrow="Work with us" heading="Start at Stage 01. We'll take it from there." />
    </PageShell>
  );
}
