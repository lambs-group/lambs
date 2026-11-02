import { AnimatedHeading } from "../../AnimatedHeading";
import { FadeIn } from "../../FadeIn";

const points = [
  { title: "Regular audits", body: "Site, vehicle and equipment audits, with findings recorded and followed up." },
  { title: "Supervision", body: "Experienced supervisors and managers support the teams on site." },
  { title: "Training", body: "Training and qualifications matched to each person’s role and the requirements of the work." },
];

export function MotifQC() {
  return (
    <section className="bg-white py-24 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-4">
            <FadeIn><span className="eyebrow">Quality and safety</span></FadeIn>
          </div>
          <div className="lg:col-span-8">
            <AnimatedHeading as="h2" className="max-w-3xl">Quality control, visible and auditable.</AnimatedHeading>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border-strong)]">
          {points.map((q, i) => (
            <FadeIn key={q.title} delay={i * 120} className="bg-white p-10">
              <h3 className="text-[var(--color-dark-blue)] text-[22px] font-semibold mb-3 leading-tight">{q.title}</h3>
              <p className="text-[var(--color-charcoal)] text-[15px] leading-relaxed">{q.body}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
