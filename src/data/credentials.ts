// Single source of truth for accreditations and qualifications shown on the site.
// Supplied by Lambs Group on 2026-10-23, certificate details on 2026-10-28, CHAS certificate 2026-11-03.
// Add to this file only when Lambs confirms.
//
// Lambs confirmed on 2026-10-28 that they do NOT hold CSCS, NEBOSH, ECS, Streetworks card,
// WIRS, GIRS or NERS. Do not add them back.

export const certificationBody = "Citation ISO";

export const companyAccreditations = [
  { name: "ISO 9001:2015", area: "Quality", reference: "Certificate 200382021" },
  { name: "ISO 14001:2015", area: "Environmental", reference: "Certificate 200392021" },
  { name: "ISO 45001:2018", area: "Occupational health & safety", reference: "Certificate 200402026" },
  // CHAS Standard certificate issued 3 Nov 2026, valid until 3 Nov 2027 (renew then). SSIP approved contractor [CDM].
  { name: "CHAS Standard", area: "Health & safety (SSIP approved)", reference: "Membership 180322" },
];

export const workingTowards: string[] = [];

export const teamQualifications = [
  "NRSWA (street works)",
  "Openreach-specific training",
  "Smart Awards (Openreach operative card)",
  "Manual handling",
  "Banksman",
  "Abrasive wheels",
  "First aid",
  "Asbestos awareness",
];
