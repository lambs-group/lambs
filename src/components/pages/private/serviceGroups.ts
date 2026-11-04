// The Private Works service groups (Lambs feedback 1 Nov 2026, trades added 4 Nov 2026).
// Shared by the services grid and the enquiry forms so the wording stays in step.
// `todo` renders a highlighted [TO CONFIRM] note on the grid card only; it never reaches the forms or schema.
export interface ServiceGroup {
  title: string;
  blurb: string;
  todo?: string;
}

export const SERVICE_GROUPS: ServiceGroup[] = [
  { title: "Driveways & surfacing", blurb: "Tarmac, block paving and resin-bound driveways, including excavation, base preparation, edging and finishing." },
  {
    title: "Patios, paving & landscaping",
    blurb: "Indian sandstone, porcelain and natural stone patios, feature paving, paths and steps, raised beds, decorative gravel and stone areas, garden renovations and hard landscaping.",
    todo: "whether grounds or golf-course maintenance is offered, awaiting Lambs",
  },
  { title: "Groundworks, fencing & drainage", blurb: "Excavation, levelling, footings, concrete slabs, foundations, dropped kerbs and masonry repairs, plus concrete fence post replacement, ACO channel drainage, patio drainage and surface-water management." },
  { title: "Bricklaying & building works", blurb: "Brick and blockwork, extensions, new builds, garden and retaining walls, archways, repointing, structural joinery, alterations and repairs." },
  { title: "Roofing", blurb: "Pitched and flat roofs, including rubber and fibreglass flat-roof systems." },
  { title: "Windows, doors & glazing", blurb: "Windows, bifold doors, sliding doors, roof lanterns and skylights, manufactured in house to bespoke designs." },
  { title: "Joinery & interiors", blurb: "Fitted kitchens and bedrooms, structural joinery, plastering and tiling." },
  {
    title: "Plumbing, heating & gas",
    blurb: "Plumbing and gas engineering for your home.",
    todo: "gas and plumbing wording and Gas Safe registration, awaiting Lambs",
  },
  {
    title: "Electrical works",
    blurb: "Electrical installation and works for your home.",
    todo: "electrical wording and registration (e.g. NICEIC), awaiting Lambs",
  },
];

export const SERVICE_OPTIONS = [...SERVICE_GROUPS.map((g) => g.title), "Other / not sure"];
