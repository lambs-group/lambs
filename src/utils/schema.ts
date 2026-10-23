// Builds the JSON-LD @graph for every page: the business, the website, the page
// itself, breadcrumbs, and optional page-specific nodes (service, FAQ, job).
// Everything is keyed off the build's site URL, so it flips to lambsgroup.co.uk
// automatically at launch along with canonicals and the sitemap.

export interface ServiceInput {
  name: string;
  serviceType: string;
  description: string;
  items: { name: string; description: string }[];
}
export interface FaqInput {
  question: string;
  answer: string;
}
export interface JobInput {
  title: string;
  description: string;
  datePosted?: string; // ISO date; the JobPosting is only emitted when this is set
  validThrough?: string;
  employmentType?: string; // e.g. "Full time"
  location?: string;
  salary?: string;
}

export type PageSchemaType = "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";

export interface GraphInput {
  siteRoot: string; // e.g. https://lambsgroup.co.uk/ (always ends with /)
  pageUrl: string;
  path: string; // path relative to site root, with leading/trailing slash, e.g. /telecoms/
  title: string;
  description: string;
  ogImage: string;
  schemaType?: PageSchemaType;
  dateModified?: string;
  service?: ServiceInput;
  faq?: FaqInput[];
  job?: JobInput;
}

const LINKEDIN = "https://www.linkedin.com/company/lambs-uk-civils-ltd/home/";

const CRUMB_NAMES: Record<string, string> = {
  about: "About",
  careers: "Careers",
  apply: "Send us your CV",
  contact: "Contact",
  cookies: "Cookie Policy",
  "how-we-deliver": "How We Deliver",
  privacy: "Privacy Policy",
  "private-works": "Private Works",
  team: "Our Team",
  telecoms: "Telecoms",
  terms: "Website Terms of Use",
  utilities: "Utilities",
  work: "Our Work",
  motif: "Virgin Media Motif",
};

const EMPLOYMENT: Record<string, string> = {
  "full time": "FULL_TIME",
  "part time": "PART_TIME",
  contract: "CONTRACTOR",
  temporary: "TEMPORARY",
};

export function buildGraph(i: GraphInput) {
  const business = `${i.siteRoot}#business`;
  const website = `${i.siteRoot}#website`;
  const webpage = `${i.pageUrl}#webpage`;
  const breadcrumb = `${i.pageUrl}#breadcrumb`;
  const showBreadcrumb = i.path !== "/" && i.path !== "/404/";

  const regions = ["North West England", "Yorkshire and the Humber", "West Midlands"].map((name) => ({
    "@type": "AdministrativeArea",
    name,
  }));

  const nodes: Record<string, unknown>[] = [
    {
      "@type": "GeneralContractor",
      "@id": business,
      name: "Lambs Group",
      alternateName: ["S Lamb Construction"],
      description:
        "Family-run infrastructure contractor delivering telecoms, utilities and private works with skilled teams across its workforce since 1988.",
      slogan: "Safely, compliantly, on programme.",
      url: i.siteRoot,
      logo: { "@type": "ImageObject", url: `${i.siteRoot}images/lambs-logo-v2.webp`, width: 1400, height: 241 },
      image: `${i.siteRoot}images/og-default.jpg`,
      foundingDate: "1988",
      founder: { "@type": "Person", name: "Simon Lamb", jobTitle: "Managing Director" },
      telephone: "+441925810991",
      email: "contact@lambsgroup.co.uk",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Unit 26 Tatton Court, Kingsland Grange, Woolston",
        addressLocality: "Warrington",
        postalCode: "WA1 4RR",
        addressCountry: "GB",
      },
      geo: { "@type": "GeoCoordinates", latitude: 53.405085, longitude: -2.533246 },
      hasMap: "https://www.google.com/maps/search/?api=1&query=Unit+26+Tatton+Court+Kingsland+Grange+Woolston+Warrington+WA1+4RR",
      areaServed: regions,
      knowsAbout: [
        "Fibre optic network installation (FTTH and FTTP)",
        "Fibre splicing and testing",
        "Directional drilling and mole ploughing",
        "Water, gas and electricity mains and connections",
        "Utility ducting and jointing",
        "Civils and groundworks (excavation, ducting, drainage and reinstatement)",
        "Driveways, resin surfacing, block paving and groundworks",
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:30",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: "+441925810991",
        email: "contact@lambsgroup.co.uk",
        areaServed: "GB",
        availableLanguage: "en-GB",
      },
      sameAs: [LINKEDIN],
    },
    {
      "@type": "WebSite",
      "@id": website,
      url: i.siteRoot,
      name: "Lambs Group",
      inLanguage: "en-GB",
      publisher: { "@id": business },
    },
    {
      "@type": i.schemaType ?? "WebPage",
      "@id": webpage,
      url: i.pageUrl,
      name: i.title,
      description: i.description,
      inLanguage: "en-GB",
      isPartOf: { "@id": website },
      about: { "@id": business },
      primaryImageOfPage: { "@type": "ImageObject", url: i.ogImage },
      ...(i.dateModified ? { dateModified: i.dateModified } : {}),
      ...(showBreadcrumb ? { breadcrumb: { "@id": breadcrumb } } : {}),
    },
  ];

  // Breadcrumbs for every page except the home page and the 404.
  if (showBreadcrumb) {
    const segments = i.path.split("/").filter(Boolean);
    const crumbs = [{ name: "Home", url: i.siteRoot }];
    segments.forEach((seg, idx) => {
      crumbs.push({
        name: CRUMB_NAMES[seg] ?? seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        url: i.siteRoot + segments.slice(0, idx + 1).join("/") + "/",
      });
    });
    nodes.push({
      "@type": "BreadcrumbList",
      "@id": breadcrumb,
      itemListElement: crumbs.map((c, n) => ({ "@type": "ListItem", position: n + 1, name: c.name, item: c.url })),
    });
  }

  if (i.service) {
    nodes.push({
      "@type": "Service",
      "@id": `${i.pageUrl}#service`,
      name: i.service.name,
      serviceType: i.service.serviceType,
      description: i.service.description,
      url: i.pageUrl,
      provider: { "@id": business },
      areaServed: regions,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: i.service.name,
        itemListElement: i.service.items.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.name, description: s.description },
        })),
      },
    });
  }

  // FAQ markup must match visible on-page questions - only pass `faq` once they are on the page.
  if (i.faq?.length) {
    nodes.push({
      "@type": "FAQPage",
      "@id": `${i.pageUrl}#faq`,
      mainEntity: i.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    });
  }

  if (i.job?.datePosted) {
    nodes.push({
      "@type": "JobPosting",
      "@id": `${i.pageUrl}#job`,
      title: i.job.title,
      description: i.job.description,
      datePosted: i.job.datePosted,
      ...(i.job.validThrough ? { validThrough: i.job.validThrough } : {}),
      ...(i.job.employmentType && EMPLOYMENT[i.job.employmentType.toLowerCase()]
        ? { employmentType: EMPLOYMENT[i.job.employmentType.toLowerCase()] }
        : {}),
      // Google's job markup wants the employer named inline, not just referenced.
      hiringOrganization: {
        "@type": "Organization",
        name: "Lambs Group",
        sameAs: i.siteRoot,
        logo: `${i.siteRoot}images/lambs-logo-v2.webp`,
      },
      jobLocation: {
        "@type": "Place",
        address: { "@type": "PostalAddress", addressLocality: i.job.location ?? "Warrington", addressCountry: "GB" },
      },
      directApply: true,
      url: i.pageUrl,
    });
  }

  return { "@context": "https://schema.org", "@graph": nodes };
}
