export type LocationTier = "major" | "minor";
export type Neighborhood =
  | "campus"
  | "northside"
  | "merchant"
  | "downtown"
  | "french-hill"
  | "rivertown"
  | "easttown"
  | "uptown"
  | "southside"
  | "outskirts";

export interface MapLocation {
  id: string;
  name: string;
  neighborhood: Neighborhood;
  description: string;
  x: number; // 0–100, percentage from left
  y: number; // 0–100, percentage from top
  tier: LocationTier;
}

export const mapLocations: MapLocation[] = [
  // --- Campus ---
  {
    id: "miskatonic-university",
    name: "Miskatonic University",
    neighborhood: "campus",
    description:
      "The ivy-choked heart of Arkham's intellectual life. Half the faculty drink too much and the other half have seen too much.",
    x: 33,
    y: 52,
    tier: "major",
  },
  {
    id: "orne-library",
    name: "Orne Library",
    neighborhood: "campus",
    description:
      "Three floors of dusty scholarship and a restricted collection that nobody talks about at faculty dinners.",
    x: 35,
    y: 53,
    tier: "major",
  },
  {
    id: "fairchild-office",
    name: "Fairchild's Office (Derby Hall)",
    neighborhood: "campus",
    description:
      "Second floor, end of the corridor. The light's always on late, but the professor never remembers staying.",
    x: 32,
    y: 49,
    tier: "minor",
  },
  {
    id: "hotel-miskatonic",
    name: "Hotel Miskatonic",
    neighborhood: "campus",
    description:
      "A respectable address for visiting scholars. The night clerk has learned not to ask questions.",
    x: 37,
    y: 54,
    tier: "minor",
  },
  {
    id: "arkham-asylum",
    name: "Arkham Sanitarium",
    neighborhood: "campus",
    description:
      "The screaming carries on the wind some nights. The staff say it's just the plumbing.",
    x: 52,
    y: 13,
    tier: "major",
  },

  // --- Northside ---
  {
    id: "bm-train-station",
    name: "B&M Train Station",
    neighborhood: "northside",
    description:
      "Where the Boston & Maine line ends and Arkham begins. Porters know everyone who arrives and most of what they carry.",
    x: 38,
    y: 34,
    tier: "major",
  },
  {
    id: "arkham-gazette",
    name: "Arkham Gazette",
    neighborhood: "northside",
    description:
      "A cramped newsroom that smells of ink and cigarettes. If it happened in Arkham, somebody here wrote it down.",
    x: 39,
    y: 24.5,
    tier: "minor",
  },
  {
    id: "the-speakeasy",
    name: "The Speakeasy",
    neighborhood: "northside",
    description:
      "Knock twice, ask for soda water. Everyone knows. Even the cops — especially the cops.",
    x: 28,
    y: 20,
    tier: "minor",
  },
  {
    id: "gilded-swan",
    name: "The Gilded Swan",
    neighborhood: "northside",
    description:
      "Arkham's worst-kept secret: a jazz club behind a hat shop. The singer knows more than she lets on.",
    x: 40,
    y: 19,
    tier: "minor",
  },

  // --- Merchant District ---
  {
    id: "the-docks",
    name: "The Docks",
    neighborhood: "merchant",
    description:
      "Fish, diesel, and the faint sweetness of rum that fell off a boat. Half the cargo here has no paperwork.",
    x: 50,
    y: 42,
    tier: "major",
  },
  {
    id: "lucky-clover-cartage",
    name: "Lucky Clover Cartage Co.",
    neighborhood: "merchant",
    description:
      "A haulage outfit that does most of its business after dark. The trucks always come back empty by morning.",
    x: 60,
    y: 35,
    tier: "minor",
  },
  {
    id: "easterly-wharves",
    name: "Easterly Wharves",
    neighborhood: "merchant",
    description:
      "Rotting pilings and warehouse shadows. The river smells wrong here, and the fish won't bite downstream.",
    x: 70,
    y: 30,
    tier: "minor",
  },

  // --- Downtown ---
  {
    id: "arkham-police-station",
    name: "Arkham Police Station",
    neighborhood: "downtown",
    description:
      "Underfunded and overworked. The good cops are outnumbered, and the bad ones have expensive tastes.",
    x: 62,
    y: 28,
    tier: "minor",
  },
  {
    id: "courthouse",
    name: "Courthouse & Jail",
    neighborhood: "downtown",
    description:
      "Justice is blind in Arkham, and lately she's been looking the other way on purpose.",
    x: 63,
    y: 22,
    tier: "minor",
  },

  // --- French Hill ---
  {
    id: "sycamores",
    name: "Sycamores Speakeasy",
    neighborhood: "french-hill",
    description:
      "Old money drinks here — what's left of it. The cocktails are strong and the conversation is guarded.",
    x: 72,
    y: 55,
    tier: "minor",
  },
  {
    id: "sewer-outfall",
    name: "Garrison St. Sewer Outfall",
    neighborhood: "french-hill",
    description:
      "A rusted grate where the storm drains meet the river. Something down there echoes that isn't water.",
    x: 45,
    y: 38,
    tier: "minor",
  },

  // --- Outskirts ---
  {
    id: "fenners-roadhouse",
    name: "Fenner's Roadhouse",
    neighborhood: "outskirts",
    description:
      "Last stop before the Aylesbury Pike turns to nothing. Truckers, drifters, and people who don't want to be found.",
    x: 12,
    y: 78,
    tier: "minor",
  },

  // --- Southside ---
  {
    id: "st-marys-graveyard",
    name: "St. Mary's Graveyard",
    neighborhood: "southside",
    description:
      "The caretaker patrols with a shotgun now. Says it's for coyotes. Her hands shake when she says it.",
    x: 37,
    y: 73,
    tier: "minor",
  },
];

export const mapLocationsById = Object.fromEntries(
  mapLocations.map((loc) => [loc.id, loc])
) as Record<string, MapLocation>;
