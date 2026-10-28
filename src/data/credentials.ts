// Single source of truth for accreditations and qualifications shown on the site.
// Supplied by Lambs Group on 2026-10-23, certificate details on 2026-10-28.
// Add to this file only when Lambs confirms.
//
// Lambs confirmed on 2026-10-28 that they do NOT hold CSCS, NEBOSH, ECS, Streetworks card,
// WIRS, GIRS or NERS. Do not add them back.

export const certificationBody = "Citation ISO";

export const companyAccreditations = [
  { name: "ISO 9001:2015", area: "Quality", certificate: "200382021" },
  { name: "ISO 14001:2015", area: "Environmental", certificate: "200392021" },
  { name: "ISO 45001:2018", area: "Occupational health & safety", certificate: "200402026" },
];

export const workingTowards = ["CHAS"];

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
