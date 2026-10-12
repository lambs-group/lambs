// Single source for company details used on the legal pages.
// Anything still unknown is flagged TBC and rendered as a visible
// "[TO CONFIRM]" marker - fill these in before launch.
export const TBC = Symbol("tbc");

export const COMPANY = {
  tradingName: "Lambs Group",
  legalName: TBC as typeof TBC | string,
  companyNumber: TBC as typeof TBC | string,
  icoRegistration: TBC as typeof TBC | string,
  registeredOffice: TBC as typeof TBC | string,
  tradingAddress: "Unit 26 Tatton Court, Kingsland Grange, Woolston, Warrington WA1 4RR",
  email: "contact@lambsgroup.co.uk",
  phone: "01925 810 991",
  lastUpdated: "12 October 2026",
};
