import { AnimatedHeading } from "../AnimatedHeading";
import { FadeIn } from "../FadeIn";
import { PageShell } from "../sections/PageShell";
import { PageHero } from "../sections/PageHero";
import { CTASection } from "../sections/CTASection";
import { Todo } from "../Placeholder";
import { withBase } from "../../utils/paths";

interface PersonCard {
  name: string;
  /** Omit when the title is awaiting confirmation; a highlighted marker is shown instead. */
  role?: string;
  bio?: string;
  image?: string;
  /** Highlighted note for details still awaited from Lambs. */
  pending?: string;
}

// One team, one set of cards (Lambs feedback 1 Nov 2026). The senior team appear first without separate tiers.
// Titles per Lambs: Simon Director; Amanda Director; Frankie Operations Director; Jen Business Manager;
// Luke Purchasing & Training Manager; Ethan Plant & Vehicle Manager; Lee Harnick Health & Safety Manager;
// Laura Barber Coordination Team Manager; Harry Lamb Training Manager.
// Davey Tyrer (Stores Supervisor) was removed earlier pending a photo and is not in Lambs' latest list.
const team: PersonCard[] = [
  { name: "Simon Lamb", role: "Director", bio: "Founded the business in 1988 and remains actively involved in every level of delivery.", image: "/images/team/simon-lamb.webp" },
  { name: "Amanda Lamb", role: "Director", bio: "Oversees finance, HR, operations and commercials, working alongside Simon to drive the business forward.", image: "/images/team/amanda-lamb.webp" },
  { name: "Frankie Lamb", role: "Operations Director", bio: "Frankie drives our operational performance, working closely with clients and crews to keep our teams safe, productive and delivering.", image: "/images/team/frankie-lamb.webp" },
  { name: "Jennifer Nelson", role: "Business Manager", image: "/images/team/jennifer-nelson.webp" },
  { name: "Luke Pennington", role: "Purchasing & Training Manager", image: "/images/team/luke-pennington.webp" },
  { name: "Ray Pennington", pending: "title, awaiting Amanda", bio: "Ray has been part of Lambs for 25 years, making a lasting contribution to our people, projects and the business we are today.", image: "/images/team/ray-pennington.webp" },
  { name: "Ethan Radcliffe", role: "Plant & Vehicle Manager", image: "/images/team/ethan-radcliffe.webp" },
  { name: "Laura Barber", role: "Coordination Team Manager", image: "/images/team/laura-barber.webp" },
  { name: "Lee Harnick", role: "Health & Safety Manager", image: "/images/team/lee-harnick.webp" },
  { name: "Harry Lamb", role: "Training Manager", pending: "portrait awaited" },
];

const directors = team.slice(0, 2);
const others = team.slice(2);

function PersonTile({ person: p, ratio, large }: { person: PersonCard; ratio: string; large?: boolean }) {
  return (
    <article className="group">
      <div className={`relative ${ratio} overflow-hidden bg-[var(--color-light-grey)]`}>
        {p.image ? (
          <img
            src={withBase(p.image)}
            alt={p.role ? `${p.name}, ${p.role}` : p.name}
            width={640}
            height={large ? 800 : 640}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[var(--color-mid-blue)] text-[48px] font-semibold">
            {p.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </div>
        )}
        <span className="absolute inset-x-0 bottom-0 h-[3px] bg-[var(--color-cyan)] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" aria-hidden="true" />
      </div>
      <div className="pt-5 lg:pt-6">
        <h3 className={`font-semibold leading-tight text-[var(--color-dark-blue)] ${large ? "text-[21px] lg:text-[26px]" : "text-[19px] lg:text-[24px]"}`}>{p.name}</h3>
        <p className="text-[11px] lg:text-[12px] uppercase tracking-[0.16em] mt-2 font-medium text-[var(--color-mid-blue)]">
          {p.role ?? <Todo>{p.pending ?? "title"}</Todo>}
        </p>
        {p.role && p.pending && (
          <p className="mt-2 text-[13px]"><Todo>{p.pending}</Todo></p>
        )}
        {p.bio && <p className="mt-3 text-[var(--color-charcoal)] text-[14px] leading-relaxed">{p.bio}</p>}
      </div>
    </article>
  );
}

export function TeamPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The team"
        heading="One team. Every role matters."
        lede="Lambs Group brings together the people who plan, support, manage and carry out our work. From our engineers and operatives on site to our office team and directors, everyone plays a part in delivering safe, well-managed projects."
        sectionIndex="- / Team"
      />

      <section className="bg-white pt-16 lg:pt-24">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="border border-dashed border-[var(--color-border-strong)] bg-[var(--color-light-grey)] aspect-[16/6] flex items-center justify-center text-center px-6">
            <p className="text-[15px]">
              <Todo>whole-team photograph (office, engineers, operatives and management together), awaiting photo</Todo>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14 lg:mb-20">
            <div className="lg:col-span-4">
              <FadeIn><span className="eyebrow">Meet the team</span></FadeIn>
            </div>
            <div className="lg:col-span-8">
              <AnimatedHeading as="h2" className="max-w-3xl">The people behind Lambs Group.</AnimatedHeading>
              <FadeIn delay={200}>
                <p className="mt-6 text-[15px]">
                  <Todo>directors-first layout (Simon and Amanda, then the rest of the team), awaiting Amanda&rsquo;s confirmation</Todo>
                </p>
              </FadeIn>
            </div>
          </div>

          <h3 className="text-[13px] uppercase tracking-[0.18em] text-[var(--color-mid-blue)] font-medium mb-8 max-w-2xl mx-auto">Directors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12 lg:gap-x-10 max-w-2xl mx-auto">
            {directors.map((p, i) => (
              <FadeIn key={p.name} delay={i * 90}>
                <PersonTile person={p} ratio="aspect-[4/5]" large />
              </FadeIn>
            ))}
          </div>

          <h3 className="text-[13px] uppercase tracking-[0.18em] text-[var(--color-mid-blue)] font-medium mt-20 lg:mt-28 mb-8">Senior team and colleagues</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12 sm:gap-x-8 lg:gap-x-10 lg:gap-y-16">
            {others.map((p, i) => (
              <FadeIn key={p.name} delay={(i % 4) * 90}>
                <PersonTile person={p} ratio="aspect-square" />
              </FadeIn>
            ))}
          </div>

          <div className="mt-16 space-y-3 text-[15px]">
            <p><Todo>Emma Howard, Accounts: inclusion, title and portrait to be confirmed</Todo></p>
            <p><Todo>engineers and operatives to feature, individually or in named team photos, in the same style</Todo></p>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Join the team"
        heading="Interested in joining Lambs?"
        body="We welcome enquiries from people interested in working with Lambs, both on site and in the office. Visit our Careers page to explore opportunities or register your interest."
        primaryLabel="Careers & opportunities"
        primaryHref="/careers"
      />
    </PageShell>
  );
}
