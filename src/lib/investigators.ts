export type InvestigatorSlug = "bill" | "nell" | "sean" | "mikel";

export type LetterStyle = "paper" | "scrap";

export interface Investigator {
  slug: InvestigatorSlug;
  name: string;
  fullName: string;
  occupation: string;
  portrait: string;
  letterStyle: LetterStyle;
  tagline: string;
}

export const investigators: Record<InvestigatorSlug, Investigator> = {
  bill: {
    slug: "bill",
    name: "Bill",
    fullName: 'Bill O\'Job',
    occupation: "Cowboy / WWI Veteran",
    portrait: "/portraits/bill.png",
    letterStyle: "paper",
    tagline: "Come ready.",
  },
  nell: {
    slug: "nell",
    name: "Nell",
    fullName: 'Eleanor "Nell" Carroway',
    occupation: "Investigative Journalist",
    portrait: "/portraits/nell.png",
    letterStyle: "scrap",
    tagline: "You notice things.",
  },
  sean: {
    slug: "sean",
    name: "Sean",
    fullName: "Sean Murphy",
    occupation: "Criminal / Bootlegger",
    portrait: "/portraits/sean.png",
    letterStyle: "paper",
    tagline: "I trust family.",
  },
  mikel: {
    slug: "mikel",
    name: "Mikel",
    fullName: "Mikel Itsaso",
    occupation: "Skilled Tradesperson",
    portrait: "/portraits/mikel.png",
    letterStyle: "scrap",
    tagline: "I need help.",
  },
};

export const investigatorSlugs = Object.keys(investigators) as InvestigatorSlug[];
