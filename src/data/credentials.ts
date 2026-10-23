// Single source of truth for accreditations and qualifications shown on the site.
// Supplied by Lambs Group on 2026-10-23. Add to this file only when Lambs confirms.
//
// NOT yet confirmed (removed from the site until Lambs says otherwise):
// CSCS, NEBOSH, ECS, Streetworks card, WIRS, GIRS, NERS, "Smart Awards" (what it refers to is unclear).

export const companyAccreditations = [
  { name: "ISO 9001:2015", area: "Quality" },
  { name: "ISO 14001:2015", area: "Environmental" },
  { name: "ISO 45001:2018", area: "Occupational health & safety" },
];

export const workingTowards = ["CHAS"];

export const teamQualifications = [
  "NRSWA (street works)",
  "Openreach-specific training",
  "Manual handling",
  "Banksman",
  "Abrasive wheels",
  "First aid",
  "Asbestos awareness",
];
