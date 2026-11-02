import { AnimatedHeading } from "../AnimatedHeading";
import { FadeIn } from "../FadeIn";
import { PageShell } from "../sections/PageShell";
import { PageHero } from "../sections/PageHero";
import { CTASection } from "../sections/CTASection";
import { Todo } from "../Placeholder";

const storyImage = "/images/field/team-site-briefing.webp";

const values = [
  { number: "01", title: "A skilled workforce", description: "Experienced operatives and engineers, supported by training, supervision and clear accountability.", chip: "" },
  { number: "02", title: "Safety, quality & compliance", description: "Our dedicated Health and Safety Manager supports our teams through regular site, vehicle and equipment audits, with findings recorded and followed up.", chip: "ISO 9001 · 14001 · 45001" },
  { number: "03", title: "Family-run since 1988", description: "Led by Simon and Amanda Lamb, with a hands-on approach and pride in the work we deliver.", chip: "Est. 1988" },
  { number: "04", title: "Long-standing working relationships", description: "Decades of working with contractors, network operators, developers and local authorities, building trust through practical experience and reliable delivery.", chip: "" },
];

export function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Lambs Group"
        heading="Our roots date back to 1988."
        lede="Lambs Group is a family-run infrastructure contractor with experience built since 1988. We deliver telecoms, utilities and private works, with minor and major civils and groundworks at the heart of our capabilities."
        image={storyImage}
        imageAlt="Lambs Group operatives reviewing plans together on a residential street"
        sectionIndex="- / About"
      />

      <section className="bg-white py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <FadeIn><span className="eyebrow">The story</span></FadeIn>
              <AnimatedHeading as="h2" className="mt-6 max-w-xl">A family business. Built on experience.</AnimatedHeading>
            </div>
            <div className="lg:col-span-7 space-y-6 text-[var(--color-charcoal)] text-lg leading-relaxed">
              <FadeIn delay={180}>
                <p>Led by Simon and Amanda Lamb, Lambs Group brings together decades of practical construction, civils and groundworks experience. Over the years, we have delivered work for network operators, contractors, housebuilders and local authorities. That experience continues to shape our work today, from major infrastructure projects to smaller civils works and improvements to customers&rsquo; homes.</p>
              </FadeIn>
              <FadeIn delay={260}>
                <p>Direct delivery is central to how we work. Our teams operate under Lambs&rsquo; management, giving us clear oversight of safety, quality and workmanship, and giving clients one accountable point of contact.</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-dark-blue)] text-white py-24 lg:py-36 relative">
        <div className="grid-bg-dark absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-4">
              <FadeIn><span className="eyebrow eyebrow-dark">What we stand for</span></FadeIn>
            </div>
            <div className="lg:col-span-8">
              <AnimatedHeading as="h2" className="text-white max-w-3xl">Four things we don't compromise on.</AnimatedHeading>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 140} className="bg-[var(--color-dark-blue)] p-10 lg:p-14">
                <div className="flex items-start gap-6">
                  <span className="text-xs uppercase tracking-widest text-[var(--color-cyan)] font-medium">{v.number}</span>
                  <div>
                    <h3 className="text-white text-[26px] lg:text-[32px] font-semibold mb-4 leading-tight">{v.title}</h3>
                    <p className="text-white/75 text-[15px] leading-relaxed mb-5">{v.description}</p>
                    {v.chip && (
                      <span className="inline-block text-[11px] uppercase tracking-widest text-[var(--color-cyan)] border border-[var(--color-cyan)]/50 px-3 py-1.5 font-medium">
                        {v.chip}
                      </span>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light-grey)] py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn><span className="eyebrow">One team</span></FadeIn>
          <div className="mt-10 border border-dashed border-[var(--color-border-strong)] bg-white/60 aspect-[16/7] flex items-center justify-center text-center px-6">
            <p className="text-[15px]">
              <Todo>whole-team photograph: office staff, engineers, operatives and management together, mixed rather than separated by role</Todo>
            </p>
          </div>
          <FadeIn delay={200}>
            <p className="mt-6 text-[var(--color-dark-blue)] text-[20px] lg:text-[24px] font-semibold">
              One Lambs team. Working together, on site and behind the scenes.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTASection eyebrow="Work with us" heading="Experience behind us. Commitment ahead." note="closing line is Amanda's proposal, awaiting her confirmation" />
    </PageShell>
  );
}
