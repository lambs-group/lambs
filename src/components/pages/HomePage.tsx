import { ArrowDown, ArrowUpRight, Radio, Zap, Home } from "lucide-react";
import { AnimatedHeading } from "../AnimatedHeading";
import { FadeIn } from "../FadeIn";
import { RevealImage } from "../RevealImage";
import { Button } from "../Button";
import { PageShell } from "../sections/PageShell";
import { CTASection } from "../sections/CTASection";
import { withBase } from "../../utils/paths";
import { imgAttrs } from "../../utils/images";

const heroImage = "/images/field/home-hero-mini-excavator-residential.webp";
const aboutImage = "/images/field/team-site-briefing.webp";

const commercialSectors = [
  {
    icon: Radio,
    number: "01",
    title: "Telecoms",
    blurb: "Telecoms civils, ducting and chambers, fibre blowing and cabling, splicing, surveys, mole ploughing, directional drilling and cabinet installations.",
    href: "/telecoms",
  },
  {
    icon: Zap,
    number: "02",
    title: "Utilities",
    blurb: "Telecoms, water, gas and electricity infrastructure. Civils, ducting, jointing, mains laying and service connections across housing, commercial, industrial and local authority sites.",
    href: "/utilities",
  },
];

const domesticSector = {
  icon: Home,
  number: "03",
  title: "Private Works",
  blurb: "Driveways, resin surfacing, block paving, patios, brickwork, garden walls, landscaping, drainage and dropped kerbs.",
  href: "/private-works",
};

// Client names confirmed by Lambs on 2026-10-29. Entries without a logo show as text.
// Logos are greyscale to match the wall; white-only sources are flat grey.
// NTL logo is the ntl: brand mark from a logo site; swap for the confirmed logo once Amanda gives the full company name.
const clients: { name: string; logo?: string }[] = [
  { name: "Fujitsu", logo: "/images/clients/fujitsu.webp" },
  { name: "Barratt Homes", logo: "/images/clients/barratt.webp" },
  { name: "OCU Group", logo: "/images/clients/ocu-group.webp" },
  { name: "Kellys", logo: "/images/clients/kelly-group.webp" },
  { name: "MJ Quinn", logo: "/images/clients/mj-quinn.webp" },
  { name: "M Group", logo: "/images/clients/mgroup.webp" },
  { name: "Map Group UK", logo: "/images/clients/map-group.webp" },
  { name: "Freedom Fibre", logo: "/images/clients/freedom-fibre.webp" },
  { name: "Svella", logo: "/images/clients/svella.webp" },
  { name: "JN Civils", logo: "/images/clients/jn-civils.webp" },
  { name: "STL", logo: "/images/clients/stl.webp" },
  { name: "Nano UK", logo: "/images/clients/nano.webp" },
  { name: "Cellex", logo: "/images/clients/cellex.webp" },
  { name: "Coreline", logo: "/images/clients/cf.webp" },
  { name: "BWP", logo: "/images/clients/bwp.webp" },
  { name: "United Living", logo: "/images/clients/united-living.webp" },
  { name: "Virgin Media", logo: "/images/clients/virgin-media.webp" },
  { name: "Telent", logo: "/images/clients/telent.webp" },
  { name: "Morrison Telecom Services", logo: "/images/clients/mts.webp" },
  { name: "Cobra", logo: "/images/clients/cobra.webp" },
  { name: "Sierra", logo: "/images/clients/sierra.webp" },
  { name: "Alfred McAlpine", logo: "/images/clients/alfred-mcalpine.webp" },
  { name: "NMCN", logo: "/images/clients/nmcn.webp" },
  { name: "PN Daly", logo: "/images/clients/pn-daly.webp" },
  { name: "Brennan Paving Company" },
  { name: "Bury MBC", logo: "/images/clients/bury-mbc.webp" },
  { name: "EOM Construction" },
  { name: "Comex 2000", logo: "/images/clients/comex-2000.webp" },
  { name: "NTL", logo: "/images/clients/ntl.webp" },
  { name: "Lightsource Telecomm", logo: "/images/clients/lightsource.webp" },
];

export function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative bg-white overflow-hidden min-h-[100svh] flex items-end">
        <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 pointer-events-none">
          <div className="reveal-image is-visible h-full w-full">
            <img {...imgAttrs(heroImage)} alt="Lambs Group operative driving a mini excavator inside a coned-off excavation on a residential street" fetchPriority="high" className="h-full w-full object-cover opacity-40 lg:opacity-80" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent lg:from-white lg:via-white/40" aria-hidden="true" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-[160px] lg:pt-[200px] pb-20 lg:pb-28 w-full">
          <div className="flex items-center justify-between mb-16 lg:mb-24">
            <FadeIn><span className="eyebrow">Infrastructure Services · Est. 1988</span></FadeIn>
            <FadeIn delay={120}>
              <span className="hidden md:flex items-center gap-2 text-[11px] uppercase tracking-widest text-[var(--color-dark-blue)] font-semibold bg-white/90 px-3 py-2 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-cyan)] animate-pulse" />
                Coverage: North West · Yorkshire · West Midlands
              </span>
            </FadeIn>
          </div>

          <AnimatedHeading as="h1" className="max-w-[1100px] mb-8" stagger={40}>
            Infrastructure services across the UK.
          </AnimatedHeading>

          <FadeIn delay={360}>
            <div className="inline-block bg-[var(--color-cyan)] text-[var(--color-dark-blue)] px-6 py-3 lg:px-8 lg:py-4 mb-14">
              <h2 className="text-[20px] md:text-[24px] lg:text-[28px] font-semibold tracking-tight leading-none">
                Built on experience. Delivered with care.
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-6">
              <FadeIn delay={280}>
                <p className="text-[var(--color-charcoal)] text-lg md:text-xl leading-relaxed max-w-xl">
                  Family-run since 1988, Lambs Group delivers telecoms, utilities and private works, with civils and groundworks expertise at the heart of every project. From the first dig to the final reinstatement, we bring practical experience, skilled teams and a commitment to doing the job properly.
                </p>
              </FadeIn>
            </div>

            <div className="lg:col-span-6 flex flex-col items-start lg:items-end gap-6">
              <FadeIn delay={420}>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button href="/contact" variant="primary" size="lg">Start a project</Button>
                  <Button href="/about" variant="secondary" size="lg" arrow="up-right" className="bg-white">Our story</Button>
                </div>
              </FadeIn>
              <FadeIn delay={540}>
                <a href="#sectors" className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-[var(--color-mid-blue)] hover:text-[var(--color-cyan)] transition-colors font-medium">
                  Scroll to explore
                  <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* HERITAGE STRIP */}
      <section className="bg-[var(--color-light-grey)] py-12 border-y border-[var(--color-border)]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex items-baseline gap-6">
          <div className="text-[48px] lg:text-[64px] leading-none font-semibold text-[var(--color-dark-blue)]">1988</div>
          <div className="text-[11px] uppercase tracking-widest text-[var(--color-mid-blue)] font-medium">Our roots date back to</div>
        </div>
      </section>

      {/* SECTORS */}
      <section id="sectors" className="bg-white py-24 lg:py-36 relative">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
            <div className="lg:col-span-4">
              <FadeIn><span className="eyebrow">Three sectors · One contractor</span></FadeIn>
            </div>
            <div className="lg:col-span-8">
              <AnimatedHeading as="h2" className="max-w-3xl">
                Telecoms, utilities and private works. Built on experience.
              </AnimatedHeading>
              <FadeIn delay={280}>
                <p className="text-[var(--color-charcoal)] text-lg leading-relaxed mt-8 max-w-2xl">
                  From telecoms and utilities infrastructure to driveways, patios and landscaping, we bring decades of civils and groundworks experience to every project. Our site teams work closely with our operations and office staff to deliver well-managed work, with one clear point of contact.
                </p>
              </FadeIn>
            </div>
          </div>

          <div className="mb-6"><span className="eyebrow">Commercial</span></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {commercialSectors.map((sector, i) => {
              const Icon = sector.icon;
              return (
                <FadeIn key={sector.title} delay={i * 160}>
                  <a
                    href={withBase(sector.href)}
                    className="group relative block bg-white border border-[var(--color-border-strong)] p-8 lg:p-10 h-full transition-all duration-500 hover:border-[var(--color-dark-blue)] hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-12">
                      <span className="text-xs uppercase tracking-widest text-[var(--color-mid-blue)] font-medium">{sector.number}</span>
                      <ArrowUpRight className="w-5 h-5 text-[var(--color-dark-blue)] opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    <div className="w-14 h-14 flex items-center justify-center bg-[var(--color-dark-blue)] mb-8 group-hover:bg-[var(--color-cyan)] transition-colors duration-500">
                      <Icon className="w-7 h-7 text-white group-hover:text-[var(--color-dark-blue)] transition-colors duration-500" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-[28px] lg:text-[32px] leading-none font-semibold mb-5 text-[var(--color-dark-blue)]">{sector.title}</h3>
                    <p className="text-[var(--color-charcoal)] text-[15px] leading-relaxed">{sector.blurb}</p>
                  </a>
                </FadeIn>
              );
            })}
          </div>

          <div className="mb-6"><span className="eyebrow">Domestic</span></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn className="md:col-span-3">
              <a
                href={withBase(domesticSector.href)}
                className="group relative block bg-[var(--color-light-grey)] border border-[var(--color-border-strong)] p-8 lg:p-10 transition-all duration-500 hover:border-[var(--color-dark-blue)] hover:-translate-y-1"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-1">
                    <span className="text-xs uppercase tracking-widest text-[var(--color-mid-blue)] font-medium">{domesticSector.number}</span>
                  </div>
                  <div className="md:col-span-2">
                    <div className="w-14 h-14 flex items-center justify-center bg-[var(--color-dark-blue)] group-hover:bg-[var(--color-cyan)] transition-colors duration-500">
                      <domesticSector.icon className="w-7 h-7 text-white group-hover:text-[var(--color-dark-blue)] transition-colors duration-500" strokeWidth={1.8} />
                    </div>
                  </div>
                  <div className="md:col-span-8">
                    <h3 className="text-[28px] lg:text-[32px] leading-none font-semibold mb-3 text-[var(--color-dark-blue)]">{domesticSector.title}</h3>
                    <p className="text-[var(--color-charcoal)] text-[15px] leading-relaxed">{domesticSector.blurb}</p>
                  </div>
                  <div className="md:col-span-1 flex md:justify-end">
                    <ArrowUpRight className="w-6 h-6 text-[var(--color-dark-blue)] opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* TEAM BEHIND EVERY JOB */}
      <section className="bg-white pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <p className="text-[var(--color-dark-blue)] text-[20px] lg:text-[24px] font-semibold leading-snug max-w-3xl mb-16">
              Our experienced teams deliver the full scope of works, managed by Lambs from start to finish, with one clear point of contact.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-[var(--color-border-strong)] pt-12">
            <div className="lg:col-span-4">
              <FadeIn><span className="eyebrow">Behind every job</span></FadeIn>
            </div>
            <div className="lg:col-span-8">
              <FadeIn delay={120}>
                <p className="text-[var(--color-charcoal)] text-lg leading-relaxed max-w-2xl mb-8">
                  Behind every Lambs project is a team coordinating people, programmes, permits and project information. Our office and operational teams work closely with clients and site teams to keep work organised, information current and communication clear.
                </p>
                <Button href="/how-we-deliver#team-behind-every-job" variant="secondary" size="md" arrow="right">See how we support every job</Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* OUR EXPERIENCE: civils and groundworks run through all three areas */}
      <section className="bg-[var(--color-light-grey)] py-24 lg:py-32 border-t border-[var(--color-border)]">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <FadeIn><span className="eyebrow">Our experience</span></FadeIn>
            </div>
            <div className="lg:col-span-8">
              <AnimatedHeading as="h2" className="max-w-3xl">
                Civils and groundworks, built into every job.
              </AnimatedHeading>
              <FadeIn delay={240}>
                <p className="text-[var(--color-charcoal)] text-lg leading-relaxed mt-8 max-w-2xl">
                  Since 1988, civils and groundworks have been at the heart of Lambs Group. Across telecoms, utilities and private works, we bring decades of practical experience to excavation, ducting, chambers, drainage and reinstatement. One group, one point of contact, from the first dig to the finished project.
                </p>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-border-strong)] mt-12">
                {[
                  { title: "Telecoms", body: "Civils, ducting and chambers alongside fibre blowing and cabling." },
                  { title: "Utilities", body: "Civils and groundworks supporting essential utilities, including telecoms, water, gas and electricity." },
                  { title: "Private Works", body: "Groundworks, driveways, patios, brickwork, landscaping and drainage." },
                ].map((c, i) => (
                  <FadeIn key={c.title} delay={320 + i * 100} className="bg-white p-6">
                    <div className="text-[11px] uppercase tracking-widest text-[var(--color-mid-blue)] font-medium mb-3">{c.title}</div>
                    <p className="text-[var(--color-charcoal)] text-[15px] leading-relaxed">{c.body}</p>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-[var(--color-light-grey)] py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6">
              <RevealImage src={aboutImage} alt="Lambs Group operatives reviewing plans together on a residential street" aspect="aspect-[4/5]" />
            </div>
            <div className="lg:col-span-6">
              <FadeIn><span className="eyebrow mb-8">Who we are</span></FadeIn>
              <AnimatedHeading as="h2" className="mt-6 mb-8">Family-run since 1988. Experience you can build on.</AnimatedHeading>
              <FadeIn delay={200}>
                <div className="space-y-5 text-[var(--color-charcoal)] text-lg leading-relaxed max-w-xl">
                  <p>Lambs Group is a family-run business with a proud history stretching back to 1988. Our experience spans telecoms, utilities, civils and groundworks, delivering projects for contractors, developers, local authorities and private customers.</p>
                  <p>Our site teams are supported by experienced operations and office staff and a dedicated Health and Safety Manager. Regular vehicle, equipment and site audits help us maintain high standards of safety, compliance and workmanship.</p>
                </div>
              </FadeIn>
              <FadeIn delay={320}>
                <div className="mt-10">
                  <Button href="/about" variant="primary" size="lg" arrow="up-right">Read our story</Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS LOGO WALL */}
      <section className="bg-white border-y border-[var(--color-border)] py-20">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="flex items-center justify-between mb-12">
              <span className="eyebrow">Our clients</span>
              <span className="hidden md:block text-[11px] uppercase tracking-widest text-[var(--color-mid-blue)] font-medium">
                Operators · Contractors · Developers · Local Authorities
              </span>
            </div>
          </FadeIn>
          <AnimatedHeading as="h2" className="mb-6">Who we&rsquo;ve worked with</AnimatedHeading>
          <p className="text-[var(--color-charcoal)] text-lg leading-relaxed max-w-2xl mb-12">
            Over the years, Lambs Group has delivered projects for and alongside leading contractors, network operators, developers and local authorities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-px bg-[var(--color-border)]">
            {clients.map((client, i) => (
              <FadeIn key={client.name} delay={i * 40}>
                <div className="logo-tile bg-white h-24 flex items-center justify-center px-6">
                  {client.logo ? (
                    <img
                      {...imgAttrs(client.logo)}
                      alt={client.name}
                      className="max-h-10 max-w-full w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-center text-[15px] font-semibold tracking-tight text-[var(--color-dark-blue)] opacity-60">{client.name}</span>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageShell>
  );
}
