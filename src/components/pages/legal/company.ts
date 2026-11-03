// Single source for company details used on the legal pages.
// Anything still unknown is flagged TBC and rendered as a visible
// "[TO CONFIRM]" marker - fill these in before launch.
export const TBC = Symbol("tbc");

export const COMPANY = {
  tradingName: "Lambs Group",
  // Per CHAS certificate 3 Nov 2026: "LAMBS (UK) TELECOMS LTD T/A Lambs Group". Companies House number still to confirm.
  legalName: "Lambs (UK) Telecoms Ltd" as typeof TBC | string,
  companyNumber: TBC as typeof TBC | string,
  icoRegistration: TBC as typeof TBC | string,
  registeredOffice: TBC as typeof TBC | string,
  tradingAddress: "Unit 26 Tatton Court, Kingsland Grange, Woolston, Warrington WA1 4RR",
  email: "contact@lambsgroup.co.uk",
  phone: "01925 810 991",
};
