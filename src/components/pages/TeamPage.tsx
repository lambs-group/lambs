import { AnimatedHeading } from "../AnimatedHeading";
import { FadeIn } from "../FadeIn";
import { PageShell } from "../sections/PageShell";
import { PageHero } from "../sections/PageHero";
import { CTASection } from "../sections/CTASection";
import { withBase } from "../../utils/paths";

interface PersonCard {
  name: string;
  role: string;
  bio?: string;
  image?: string;
}

const leadership: PersonCard[] = [
  { name: "Simon Lamb", role: "Director", bio: "Founded the business in 1988 and remains actively involved in every level of delivery.", image: "/images/team/simon-lamb.webp" },
  { name: "Amanda Lamb", role: "Director", bio: "Oversees finance, HR and operations, working alongside Simon to drive the business forward.", image: "/images/team/amanda-lamb.webp" },
];

// Roles and photos confirmed by Lambs on 2026-10-29. More detail (bios) to follow.
// Removed for now at Lambs' request, to add back when photos arrive:
//   Davey Tyrer (Stores Supervisor), Emma Howard (Accounts).
const team: PersonCard[] = [
  { name: "Frankie Lamb", role: "Senior Operations Manager", image: "/images/team/frankie-lamb.webp" },
  { name: "Ethan Radcliffe", role: "Plant & Vehicle Manager", image: "/images/team/ethan-radcliffe.webp" },
  { name: "Lee Harnick", role: "Health & Safety Manager", image: "/images/team/lee-harnick.webp" },
  { name: "Laura Barber", role: "Coordination Team Manager", image: "/images/team/laura-barber.webp" },
  { name: "Jennifer Nelson", role: "Senior Manager", image: "/images/team/jennifer-nelson.webp" },
  { name: "Luke Pennington", role: "Purchasing & Training Manager", image: "/images/team/luke-pennington.webp" },
];

export function TeamPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The team"
        heading="People you'll actually talk to."
        lede="Lambs Group is built on long tenures. The directors founded the business. The managers have worked here for decades. The operatives and engineers across our workforce are trained and accountable."
        sectionIndex="- / Team"
      />

      <section className="bg-white py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-4">
              <FadeIn><span className="eyebrow">Directors</span></FadeIn>
            </div>
            <div className="lg:col-span-8">
              <AnimatedHeading as="h2" className="max-w-3xl">The people who run the business.</AnimatedHeading>
            </div>
          </div>

          <div className="flex flex-col gap-10 lg:gap-12">
            {leadership.map((person, i) => (
              <FadeIn key={person.name} delay={i * 120}>
                <article className="group flex flex-col sm:flex-row items-start gap-6 sm:gap-10 lg:gap-14 pb-10 lg:pb-12 border-b border-[var(--color-border-strong)] last:border-0 last:pb-0">
                  {person.image && (
                    <div className="w-[140px] h-[140px] lg:w-[160px] lg:h-[160px] flex-shrink-0 overflow-hidden bg-[var(--color-light-grey)]">
                      <img
                        src={withBase(person.image)}
                        alt={`${person.name}, ${person.role}`}
                        width={160}
                        height={160}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 max-w-2xl">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-mid-blue)] mb-2 font-medium border-b border-[var(--color-cyan)] pb-1 inline-block">
                      {person.role}
                    </div>
                    <h3 className="text-[var(--color-dark-blue)] text-[24px] lg:text-[32px] font-semibold mb-4 leading-tight mt-2">
                      {person.name}
                    </h3>
                    {person.bio && (
                      <p className="text-[var(--color-charcoal)] text-[15px] lg:text-[16px] leading-relaxed">
                        {person.bio}
                      </p>
                    )}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <TeamGridSection
        background="bg-[var(--color-light-grey)]"
        eyebrow="The wider team"
        heading="Keeping every programme on track."
        lede="The managers and specialists behind our operations, plant, health and safety, coordination, purchasing and training."
        people={team}
      />

      <CTASection eyebrow="Join the team" heading="We're always looking for good operatives." primaryLabel="See vacancies" primaryHref="/careers" />
    </PageShell>
  );
}

interface TeamGridSectionProps {
  background: string;
  eyebrow: string;
  heading: string;
  lede: string;
  people: PersonCard[];
}

function TeamGridSection({ background, eyebrow, heading, lede, people }: TeamGridSectionProps) {
  return (
    <section className={`${background} py-24 lg:py-36`}>
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-4">
            <FadeIn><span className="eyebrow">{eyebrow}</span></FadeIn>
          </div>
          <div className="lg:col-span-8">
            <AnimatedHeading as="h2" className="max-w-3xl">{heading}</AnimatedHeading>
            <FadeIn delay={200}>
              <p className="text-[var(--color-charcoal)] text-lg leading-relaxed mt-6 max-w-2xl">
                {lede}
              </p>
            </FadeIn>
          </div>
        </div>

        {people.length === 0 ? (
          <FadeIn delay={300}>
            <div className="border border-dashed border-[var(--color-border-strong)] bg-white/60 px-8 py-12 lg:px-12 lg:py-16 max-w-3xl">
              <div className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-mid-blue)] font-medium mb-3">
                Team listing
              </div>
              <p className="text-[var(--color-charcoal)] text-[16px] leading-relaxed">
                Team details to be added. Names, roles and photos will be listed here once confirmed.
              </p>
            </div>
          </FadeIn>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
            {people.map((p, i) => (
              <FadeIn key={p.name} delay={i * 70}>
                <article className="flex flex-col">
                  <div className="w-[140px] h-[140px] overflow-hidden bg-[var(--color-light-grey)] mb-4">
                    {p.image ? (
                      <img
                        src={withBase(p.image)}
                        alt={`${p.name}, ${p.role}`}
                        width={140}
                        height={140}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[var(--color-mid-blue)] text-[28px] font-semibold">
                        {p.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                    )}
                  </div>
                  <h4 className="text-[var(--color-dark-blue)] font-semibold text-[16px] lg:text-[18px] leading-tight">{p.name}</h4>
                  <p className="text-[var(--color-mid-blue)] text-[11px] uppercase tracking-widest mt-1 font-medium">{p.role}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
