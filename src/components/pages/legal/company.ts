// Single source for company details used on the legal pages.
// Anything still unknown is flagged TBC and rendered as a visible
// "[TO CONFIRM]" marker - fill these in before launch.
export const TBC = Symbol("tbc");

export const COMPANY = {
  tradingName: "Lambs Group",
  // Per CHAS certificate 3 Nov 2026: "LAMBS (UK) TELECOMS LTD T/A Lambs Group".
  legalName: "Lambs (UK) Telecoms Ltd" as typeof TBC | string,
  companyNumber: "12758735" as typeof TBC | string,
  icoRegistration: "ZB517164" as typeof TBC | string,
  registeredOffice: "Unit 26, Tatton Court, Kingsland Grange, Warrington, Cheshire, WA1 4RR" as typeof TBC | string,
  tradingAddress: "Unit 26 Tatton Court, Kingsland Grange, Woolston, Warrington WA1 4RR",
  email: "contact@lambsgroup.co.uk",
  phone: "01925 810 991",
};
