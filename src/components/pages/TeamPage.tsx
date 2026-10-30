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

const directors: PersonCard[] = [
  { name: "Simon Lamb", role: "Director", bio: "Founded the business in 1988 and remains actively involved in every level of delivery.", image: "/images/team/simon-lamb.webp" },
  { name: "Amanda Lamb", role: "Director", bio: "Oversees finance, HR, operations and commercials, working alongside Simon to drive the business forward.", image: "/images/team/amanda-lamb.webp" },
];

// Ray's title is awaiting confirmation from Lambs (Frankie is now Operations Director).
const seniorTeam: PersonCard[] = [
  { name: "Frankie Lamb", role: "Operations Director", image: "/images/team/frankie-lamb.webp" },
  { name: "Ray Pennington", role: "Director", image: "/images/team/ray-pennington.webp" },
  { name: "Jennifer Nelson", role: "Senior Manager", image: "/images/team/jennifer-nelson.webp" },
  { name: "Luke Pennington", role: "Purchasing & Training Manager", image: "/images/team/luke-pennington.webp" },
];

// Roles and photos confirmed by Lambs on 2026-10-29. More detail (bios) to follow.
// Removed for now at Lambs' request, to add back when photos arrive:
//   Davey Tyrer (Stores Supervisor), Emma Howard (Accounts).
const team: PersonCard[] = [
  { name: "Ethan Radcliffe", role: "Plant & Vehicle Manager", image: "/images/team/ethan-radcliffe.webp" },
  { name: "Lee Harnick", role: "Health & Safety Manager", image: "/images/team/lee-harnick.webp" },
  { name: "Laura Barber", role: "Coordination Team Manager", image: "/images/team/laura-barber.webp" },
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-14 max-w-[1000px]">
            {directors.map((person, i) => (
              <FadeIn key={person.name} delay={i * 140}>
                <article className="group border-t-[3px] border-[var(--color-dark-blue)] pt-6">
                  <div className="flex items-baseline justify-between mb-6">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-mid-blue)] font-semibold">{person.role}</span>
                    <span className="text-[11px] tracking-widest text-[var(--color-cyan)] font-semibold">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="flex items-start gap-6 lg:flex-col lg:gap-7">
                    {person.image && (
                      <div className="relative w-[120px] sm:w-[150px] lg:w-[200px] aspect-[4/5] flex-shrink-0 overflow-hidden bg-[var(--color-light-grey)]">
                        <img
                          src={withBase(person.image)}
                          alt={`${person.name}, ${person.role}`}
                          width={400}
                          height={500}
                          loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                        />
                        <span className="absolute inset-x-0 bottom-0 h-[3px] bg-[var(--color-cyan)] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" aria-hidden="true" />
                      </div>
                    )}
                    <div className="min-w-0">
                      <h3 className="text-[var(--color-dark-blue)] text-[26px] lg:text-[34px] font-semibold leading-tight mb-3">
                        {person.name}
                      </h3>
                      {person.bio && (
                        <p className="text-[var(--color-charcoal)] text-[15px] lg:text-[16px] leading-relaxed">
                          {person.bio}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <TeamGridSection
        background="bg-[var(--color-light-grey)]"
        eyebrow="Senior team"
        heading="Leading delivery day to day."
        lede="Directors and senior managers across operations, purchasing and training, working alongside Simon and Amanda."
        people={seniorTeam}
        columns={4}
      />

      <TeamGridSection
        background="bg-[var(--color-dark-blue)]"
        dark
        eyebrow="The wider team"
        heading="Keeping every programme on track."
        lede="The managers behind our plant and vehicles, health and safety, and coordination."
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
  dark?: boolean;
  columns?: 3 | 4;
}

function TeamGridSection({ background, eyebrow, heading, lede, people, dark = false, columns = 3 }: TeamGridSectionProps) {
  return (
    <section className={`${background} relative py-24 lg:py-36 ${dark ? "text-white" : ""}`}>
      {dark && <div className="grid-bg-dark absolute inset-0 opacity-40" aria-hidden="true" />}
      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14 lg:mb-20">
          <div className="lg:col-span-4">
            <FadeIn><span className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>{eyebrow}</span></FadeIn>
          </div>
          <div className="lg:col-span-8">
            <AnimatedHeading as="h2" className={`max-w-3xl ${dark ? "text-white" : ""}`}>{heading}</AnimatedHeading>
            <FadeIn delay={200}>
              <p className={`text-lg leading-relaxed mt-6 max-w-2xl ${dark ? "text-white/75" : "text-[var(--color-charcoal)]"}`}>
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
          <div className={`grid grid-cols-2 ${columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-x-5 gap-y-10 sm:gap-x-8 lg:gap-x-10 lg:gap-y-16`}>
            {people.map((p, i) => (
              <FadeIn key={p.name} delay={i * 90}>
                <article className="group">
                  <div className={`relative aspect-square overflow-hidden ${dark ? "bg-white/5" : "bg-[var(--color-light-grey)]"}`}>
                    {p.image ? (
                      <img
                        src={withBase(p.image)}
                        alt={`${p.name}, ${p.role}`}
                        width={640}
                        height={640}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[var(--color-cyan)] text-[48px] font-semibold">
                        {p.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                    )}
                    <span className="absolute left-0 top-0 bg-[var(--color-cyan)] text-[var(--color-dark-blue)] text-[11px] font-semibold tracking-widest px-3 py-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="absolute inset-x-0 bottom-0 h-[3px] bg-[var(--color-cyan)] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" aria-hidden="true" />
                  </div>
                  <div className="pt-5 lg:pt-6">
                    <h4 className={`font-semibold text-[19px] lg:text-[24px] leading-tight ${dark ? "text-white" : "text-[var(--color-dark-blue)]"}`}>{p.name}</h4>
                    <p className={`text-[11px] lg:text-[12px] uppercase tracking-[0.16em] mt-2 font-medium ${dark ? "text-[var(--color-cyan)]" : "text-[var(--color-mid-blue)]"}`}>{p.role}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
