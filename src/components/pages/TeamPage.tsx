import { AnimatedHeading } from "../AnimatedHeading";
import { FadeIn } from "../FadeIn";
import { PageShell } from "../sections/PageShell";
import { PageHero } from "../sections/PageHero";
import { CTASection } from "../sections/CTASection";
import { Todo } from "../Placeholder";
import { RevealImage } from "../RevealImage";
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

// Team profiles supplied by Lambs (Lambs_Group_Website_Team_Profiles.docx, 19 Nov 2026): titles and bios are theirs. Ray's card is a tribute written by Amanda and Simon (20 Nov 2026); use a blank line (two newlines) in a bio for a new paragraph.
// The two owners lead the page; everyone else follows in Lambs' order. Davey Tyre is deliberately left off (Lambs, 20 Nov 2026).
const team: PersonCard[] = [
  { name: "Amanda Lamb", role: "Owner & Managing Director", bio: "Amanda leads Lambs Group and has helped build the business since 1988. She is the main point of contact for senior clients and brings new contracts into the business, from building relationships to negotiating terms. She oversees company finances and commercial decisions, works directly with suppliers and helps run the business alongside the senior team. She also leads the development of Lambs\u2019 Private Works service.", image: "/images/team/amanda-lamb.webp" },
  { name: "Simon Lamb", role: "Co-owner & Operations Director", bio: "Simon has helped build Lambs Group since 1988. As co-owner and Operations Director, he leads the business alongside Amanda and oversees all aspects of operations. He works closely with the senior team, advising on delivery and stepping in to solve operational problems. He also liaises directly with clients when his input is needed.", image: "/images/team/simon-lamb.webp" },
  { name: "Frankie Lamb", role: "Head of Operations", bio: "Frankie oversees and plans the whole of Lambs\u2019 day-to-day operations. He sets the schedule and work routes for every team, coordinates job allocations and requests the materials crews need for upcoming work. He leads day-to-day client communication on delivery and works with senior management, office staff and site crews to keep everyone aligned on priorities. As work progresses, he adjusts plans and resolves issues so teams can deliver safely and meet client requirements.", image: "/images/team/frankie-lamb.webp" },
  { name: "Luke Pennington", role: "Purchasing & Training Manager", bio: "Luke manages purchasing and supplier relationships and supports training coordination, helping keep operatives\u2019 qualifications and accreditations up to date. He also oversees new client onboarding and company insurance. He works closely with Lee on Lambs\u2019 ISO certifications and helped secure the company\u2019s CHAS accreditation.", image: "/images/team/luke-pennington.webp" },
  { name: "Jennifer Nelson", role: "Senior Head Office Manager", bio: "Jennifer oversees Lambs\u2019 head office, including commercial administration, client applications, compliance records, payments and reporting. She supports the operations team by making sure they have the information they need.", image: "/images/team/jennifer-nelson.webp" },
  { name: "Ray Pennington", role: "25 years with Lambs", bio: "For much of his 25 years with Lambs, Ray led the day-to-day running of the business. He oversaw operations, supported our managers and site teams, and was the person we trusted to make sure things got done. Simon and I always knew that if Ray had something in hand, we could leave it with him.\n\nThese days, Ray is easing into retirement, although he\u2019s still only a phone call away and always happy to lend a hand. That\u2019s Ray all over.\n\nThank you, Ray, for 25 years of hard work, loyalty and friendship. You\u2019ve helped make Lambs what it is today, and you\u2019ll always be part of the Lambs family.\n\nAmanda and Simon", image: "/images/team/ray-pennington.webp" },
  { name: "Lee Harnick", role: "Health & Safety Manager", bio: "Lee oversees health, safety, environmental and quality standards across Lambs. He carries out site inspections and quality checks, leads toolbox talks and investigates incidents. He also oversees environmental controls and compliance with the New Roads and Street Works Act. He works with Luke on Lambs\u2019 ISO 9001, ISO 14001 and ISO 45001 certifications and supports the company\u2019s CHAS accreditation.", image: "/images/team/lee-harnick.webp" },
  { name: "Ethan Radcliffe", role: "Plant & Vehicle Manager", bio: "Ethan manages the maintenance, inspection and allocation of Lambs\u2019 vehicles and plant. He works with the operations team to make sure crews have the equipment they need for each job and that it is properly maintained.", image: "/images/team/ethan-radcliffe.webp" },
  { name: "Laura Barber", role: "Coordination Team Manager", bio: "Laura leads the coordination team and acts as a link between clients and site crews. She oversees scheduling, job allocation and permits, and coordinates follow-up work when defects are reported.", image: "/images/team/laura-barber.webp" },
  { name: "Harry Lamb", role: "Training Manager", bio: "Harry delivers hands-on training for Lambs\u2019 site crews, drawing on his own experience leading teams in the field. He oversees inductions, street works qualifications and refresher training, helping operatives put safe working practices into use on site.", image: "/images/team/harry-lamb.webp" },
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
        {p.bio && p.bio.split("\n\n").map((para, i) => (
          <p key={i} className="mt-3 text-[var(--color-charcoal)] text-[14px] leading-relaxed">{para}</p>
        ))}
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
          <div className="max-w-5xl mx-auto">
            <RevealImage src="/images/team/office-team-nine.webp" alt="Nine members of the Lambs Group team around a meeting-room table, working together on laptops" aspect="aspect-[3/2]" sizes="(min-width: 1024px) 1000px, 100vw" />
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
            </div>
          </div>

          <h3 className="text-[13px] uppercase tracking-[0.18em] text-[var(--color-mid-blue)] font-medium mb-8 max-w-2xl mx-auto">Owners</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12 lg:gap-x-10 max-w-2xl mx-auto">
            {directors.map((p, i) => (
              <FadeIn key={p.name} delay={i * 90}>
                <PersonTile person={p} ratio="aspect-[4/5]" large />
              </FadeIn>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mt-20 lg:mt-28">
            <h3 className="text-[13px] uppercase tracking-[0.18em] text-[var(--color-mid-blue)] font-medium mb-8">Senior team and colleagues</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 lg:gap-x-10 lg:gap-y-16">
              {others.map((p, i) => (
                <FadeIn key={p.name} delay={(i % 3) * 90}>
                  <PersonTile person={p} ratio="aspect-square" />
                </FadeIn>
              ))}
            </div>
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
