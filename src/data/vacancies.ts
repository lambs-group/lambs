export interface Vacancy {
  slug: string;
  title: string;
  location: string;
  type: string;
  days: number;
  summary: string;
  salary?: string;
  responsibilities: string[];
  requirements: string[];
  nice: string[];
  whatWeOffer?: string[];
  reports: string;
}

// No live vacancies at present (the Openreach civils/reinstatement roles were taken down).
// Add entries here to repopulate /careers; each one gets its own /careers/<slug> page.
export const VACANCIES: Vacancy[] = [];
