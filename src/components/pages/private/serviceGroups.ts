// The Private Works service groups, scaled back for launch (Lambs, 20 Nov 2026): brickwork, patios and landscaping, fencing and drainage.
// Gas, plumbing, electrical and the wider trades were removed pending registrations; restore from commit 4b8c7bb.
// Shared by the services grid and the enquiry forms so the wording stays in step.
// `todo` renders a highlighted [TO CONFIRM] note on the grid card only; it never reaches the forms or schema.
export interface ServiceGroup {
  title: string;
  blurb: string;
  todo?: string;
}

export const SERVICE_GROUPS: ServiceGroup[] = [
  { title: "Brickwork & building works", blurb: "Brick and blockwork, extensions, garden and retaining walls, archways, repointing, alterations and repairs." },
  {
    title: "Patios & landscaping",
    blurb: "Patios, feature paving, paths and steps, raised beds, decorative gravel and stone areas, garden renovations and hard landscaping.",
  },
  { title: "Fencing & drainage", blurb: "Fence post replacement, ACO channel drainage, patio drainage and surface-water management." },
];

export const SERVICE_OPTIONS = [...SERVICE_GROUPS.map((g) => g.title), "Other / not sure"];
