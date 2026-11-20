// Client references supplied by Lambs (19 Nov 2026), quoted with the referees' agreement and credited by
// company or job title only. Wording is used as given. Single source for the Home carousel and for the
// single quote shown on each of the other pages.
export interface Reference {
  quote: string;
  attribution: string;
}

export const REFERENCES = {
  nationalGrid: {
    quote: "Lambs Group delivered civils works across a large and demanding programme, consistently achieving high performance levels whilst maintaining exceptional quality, safety and customer service standards.",
    attribution: "Head of Strategy, Electricity Transmission, National Grid",
  },
  openreach: {
    quote: "Lambs provided my organisation with an exemplary service in terms of safety, operational delivery, responsiveness and flexibility, quality of workmanship and performance metrics and indicators.",
    attribution: "Former Openreach Director and Chief Engineer (personal reference)",
  },
  pgConsultancy: {
    quote: "During our time working together, they consistently demonstrated exceptional project management skills, creative problem-solving, and a strong work ethic.",
    attribution: "Director, PG Consultancy Ltd",
  },
  jnCivils: {
    quote: "Lambs have further built healthy relationships with several local authorities since working with JN Civils on the Openreach civils contract.",
    attribution: "Operations Director, JN Civils",
  },
  abrConsult: {
    quote: "Lambs always sought to do a great job, and their continuity under sub-contracts from Kelly, NMC, Fujitsu, Svella, OCU just bears testimony to the delivery.",
    attribution: "ABR Consult Ltd",
  },
} satisfies Record<string, Reference>;

/** Order shown in the Home carousel: the lead client reference first, then the rest. */
export const CAROUSEL_REFERENCES: Reference[] = [
  REFERENCES.nationalGrid,
  REFERENCES.openreach,
  REFERENCES.pgConsultancy,
  REFERENCES.jnCivils,
  REFERENCES.abrConsult,
];
