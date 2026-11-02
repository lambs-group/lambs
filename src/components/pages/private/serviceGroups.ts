// The six Private Works service groups (Lambs feedback, 1 Nov 2026).
// Shared by the services grid and the enquiry forms so the wording stays in step.
export const SERVICE_GROUPS = [
  { title: "Driveways & surfacing", blurb: "Tarmac, block paving and resin-bound driveways, including excavation, base preparation, edging and finishing." },
  { title: "Patios & paving", blurb: "Indian sandstone, porcelain and natural stone patios, feature paving, garden paths and steps." },
  { title: "Bricklaying & building works", blurb: "Brick and blockwork, extensions, new builds, garden and retaining walls, archways, repointing, alterations and repairs." },
  { title: "Landscaping & garden improvements", blurb: "Raised beds, decorative gravel and stone areas, garden renovations and hard landscaping." },
  { title: "Fencing & drainage", blurb: "Concrete fence post replacement and repairs, ACO channel drainage, patio drainage and surface-water management." },
  { title: "Groundworks & external works", blurb: "Excavation, levelling, concrete work, foundations, dropped kerbs, masonry repairs and general external property improvements." },
] as const;

export const SERVICE_OPTIONS = [...SERVICE_GROUPS.map((g) => g.title), "Other / not sure"];
