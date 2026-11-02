import { AnimatedHeading } from "../AnimatedHeading";
import { FadeIn } from "../FadeIn";
import { ScrollProgress } from "../ScrollProgress";
import { PageShell } from "../sections/PageShell";
import { PageHero } from "../sections/PageHero";
import { CTASection } from "../sections/CTASection";
import { Todo } from "../Placeholder";
import { imgAttrs } from "../../utils/images";

const stages = [
  { image: "/images/how-we-deliver/01-brief.webp", alt: "Two colleagues in an office going through a site plan together over a desk, with a laptop and a notebook beside them.", number: "01", title: "Brief", promise: "You call. We listen.", body: "Tell us about your project, including the scope, location, timing and any specific requirements. Our team will review the details and contact you to discuss the next steps.", chip: "" },
  { image: "/images/how-we-deliver/02-survey.webp", alt: "Two surveyors in hi-vis on a residential pavement, one scanning for buried services with a cable locator and the other recording measurements on a tablet beside a measuring wheel.", number: "02", title: "Survey", promise: "We walk the route.", body: "Where required, we visit the site to assess conditions, take measurements and identify practical constraints. We review the available drawings and information to help establish the scope and plan the work.", chip: "Specialist surveyors" },
  { image: "/images/how-we-deliver/03-design.webp", alt: "A designer marking up a detailed utility route drawing at a desk, with a CAD drawing on the laptop behind and material samples beside the plans.", number: "03", title: "Planning & coordination", promise: "We plan the work.", body: "We plan delivery around the agreed scope, site conditions, client drawings and relevant specifications. Materials, resources and programme requirements are coordinated before work begins.", chip: "Coordinated planning" },
  { image: "/images/how-we-deliver/04-mobilise.webp", alt: "Three crew members in hi-vis at the open back of a van, checking a clipboard while loading barriers, a compactor and cones.", number: "04", title: "Mobilise", promise: "We move the crew.", body: "We coordinate the people, plant, equipment and materials required for the work, including permits and access arrangements where applicable. Teams are briefed on the planned works, risks and site requirements before starting.", chip: "Pre-start checks & briefings" },
  { image: "/images/how-we-deliver/05-deliver.webp", alt: "Two operatives in hi-vis laying ducting into a trench in a residential street behind green safety barriers, with a mini excavator in the background.", number: "05", title: "Deliver", promise: "We dig, duct, joint, splice, lay, finish.", body: "Our teams carry out the agreed works with support from operations, office staff and our dedicated Health and Safety Manager. Regular site, vehicle and equipment checks help maintain safety, quality and compliance throughout delivery.", chip: "Trained crews" },
  { image: "/images/how-we-deliver/06-reinstate.webp", alt: "An operative using a plate compactor on freshly laid tarmac in a pavement trench while a colleague checks the level, behind green barriers.", number: "06", title: "Reinstate", promise: "We leave it right.", body: "We complete reinstatement and finishing works to the relevant specification, checking workmanship and recording completed work. Roads, footpaths, driveways and other surfaces are finished to suit the agreed requirements.", chip: "Quality checks & completion records" },
  { image: "/images/how-we-deliver/07-handover.webp", alt: "A crew member showing a client a finished, neatly reinstated section of pavement while the client records the handover on a tablet.", number: "07", title: "Handover", promise: "We sign it over.", body: "We provide the completion records required for the project, which may include photographs, test results, as-built information and client sign-off. Handover documentation and any aftercare requirements are agreed for each project.", chip: "Project completion records" },
];

const planning = [
  { title: "Planning and scheduling", body: "Desktop reviews, planning surveys, scheduling and job tracking help coordinate work around the agreed scope and programme. Our team prepares and checks information before it is issued to site, and keeps clients and operatives informed of plans and changes." },
  { title: "Streetworks and permitting support", body: "Our team supports permit requests, starts and stops, works comments, early-start applications and extensions where required. We coordinate with clients and relevant authorities around the streetworks requirements of each project." },
  { title: "Client and site communication", body: "We maintain regular contact with clients, operations managers and site teams through calls, email and progress meetings. Daily whereabouts, progress updates and early escalation of issues help everyone understand what is happening and what needs attention." },
  { title: "Project administration and commercial support", body: "We support project managers with document control, reporting, trackers, logs and self-invoicing administration where required. Keeping job information organised helps clients follow progress and supports the records needed for commercial review." },
];

const quality = [
  { title: "Job packs and safe digging information", body: "We prepare job packs and check drawings, plans, photographs and supporting information before issuing them to operatives. We liaise with clients\u2019 safe digging teams to help check that plans are current and that queries are addressed before works begin." },
  { title: "Documentation and client systems", body: "Our support includes A55 and CAD document management, updating client systems, organising photographic records and maintaining shared project information. The team has experience using Skewb, Depotnet, Fulcrum and APX and adapting to client workflows." },
  { title: "Progress and completion records", body: "We track jobs through delivery and help assemble the records required for completion. Depending on the project, these may include photographs, updated drawings, test records and client sign-off information." },
  { title: "Health and safety support", body: "Our dedicated Health and Safety Manager supports delivery through regular site, vehicle and equipment audits and checks. Findings are recorded and followed up to help maintain safety, quality and compliance across our work." },
  { title: "Training coordination", body: "Our Training Manager coordinates training requirements, tracks qualification expiry dates and arranges renewals. Training and qualifications are matched to each person\u2019s role and the requirements of the work." },
  { title: "Plant and fleet coordination", body: "Our plant and fleet team coordinates equipment, tools and vehicles, supported by regular inspections, audits and maintenance arrangements. This helps site teams access the resources they need and keeps equipment condition and availability under review." },
];

function SupportCards({ items }: { items: { title: string; body: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border-strong)] border border-[var(--color-border-strong)]">
      {items.map((item, i) => (
        <FadeIn key={item.title} delay={i * 80} className="bg-white p-7 lg:p-9">
          <h4 className="text-[var(--color-dark-blue)] text-[20px] lg:text-[22px] font-semibold leading-tight mb-3">{item.title}</h4>
          <p className="text-[var(--color-charcoal)] text-[15px] leading-relaxed">{item.body}</p>
        </FadeIn>
      ))}
    </div>
  );
}

export function HowWeDeliverPage() {
  return (
    <PageShell>
      <ScrollProgress />

      <PageHero
        eyebrow="How we deliver"
        heading="From planning to completion. Managed by Lambs."
        lede="Every project has different requirements. We coordinate planning, people, safety and delivery around the agreed scope, supported by experienced operations and office staff and a dedicated Health and Safety Manager. Regular audits and checks help us maintain standards throughout the work."
        sectionIndex="- / How We Deliver"
      >
        <p className="mt-6 text-[14px]">
          <Todo>heading and introduction are Amanda&rsquo;s proposed wording, awaiting her confirmation</Todo>
        </p>
      </PageHero>

      <section id="team-behind-every-job" className="bg-[var(--color-light-grey)] py-20 lg:py-28 scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
            <div className="lg:col-span-4">
              <FadeIn><span className="eyebrow">Behind the scenes</span></FadeIn>
            </div>
            <div className="lg:col-span-8">
              <AnimatedHeading as="h2" className="max-w-3xl">The team behind every job</AnimatedHeading>
              <FadeIn delay={200}>
                <p className="text-[var(--color-charcoal)] text-lg leading-relaxed mt-8 max-w-2xl">
                  Successful delivery depends on the work behind the scenes as well as the work on site. Lambs Group brings together planning, coordination, administration and operational support, helping clients manage the detail of telecoms, utilities, civils and groundworks projects.
                </p>
                <p className="text-[var(--color-charcoal)] text-lg leading-relaxed mt-5 max-w-2xl">
                  Our office team works closely with clients, operations managers, supervisors and operatives. From preparing job information and scheduling work to tracking progress and supporting completion records, we help maintain clear communication and continuity throughout delivery.
                </p>
                <p className="mt-6">
                  <a href="#delivery-stages" className="text-[11px] uppercase tracking-widest font-semibold text-[var(--color-dark-blue)] underline underline-offset-4 decoration-[var(--color-cyan)]">Jump to the delivery stages</a>
                </p>
              </FadeIn>
            </div>
          </div>

          <h3 className="text-[13px] uppercase tracking-[0.18em] text-[var(--color-mid-blue)] font-medium mb-5">Planning and coordination</h3>
          <SupportCards items={planning} />

          <h3 className="text-[13px] uppercase tracking-[0.18em] text-[var(--color-mid-blue)] font-medium mt-14 mb-5">Information quality and operational support</h3>
          <SupportCards items={quality} />

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-[var(--color-border-strong)] pt-12">
            <div className="lg:col-span-4">
              <h3 className="text-[var(--color-dark-blue)] text-[28px] lg:text-[34px] font-semibold leading-tight">One Lambs team</h3>
            </div>
            <div className="lg:col-span-8">
              <p className="text-[var(--color-charcoal)] text-lg leading-relaxed max-w-2xl">
                Office staff, engineers, operatives, supervisors and management work together as one team. Clients have a clear point of contact, with practical support connecting planning, delivery and completion.
              </p>
              <p className="mt-6 text-[15px]">
                <Todo>whole-team photograph showing office and site colleagues together, plus caption, awaiting photo</Todo>
              </p>
            </div>
          </div>
        </div>
      </section>

      {stages.map((stage, i) => {
        const darkBand = i % 2 === 1;
        const imageFirst = i % 2 === 1;
        return (
          <section
            key={stage.number}
            id={i === 0 ? "delivery-stages" : undefined}
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
                    {stage.chip && (
                      <span className={`inline-block text-[11px] uppercase tracking-widest px-3 py-2 font-medium ${darkBand ? "border border-white/30 text-white/80" : "border border-[var(--color-border-strong)] text-[var(--color-dark-blue)]"}`}>
                        {stage.chip}
                      </span>
                    )}
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection eyebrow="Work with us" heading="Tell us about your project. We'll take it from there." />
    </PageShell>
  );
}
