import type { InvestigatorSlug } from "@/lib/investigators";

export interface Clue {
  id: string;
  source: string;
  text: string;
}

export const clues: Record<string, Clue> = {
  // Session 1 clues — add here as the campaign progresses
  // Example:
  // "nell-fiske-pattern": {
  //   id: "nell-fiske-pattern",
  //   source: "Session 1 — The Gazette",
  //   text: "Three violent incidents this month. All Northside. All sudden onset. All near the same stretch of Garrison Street.",
  // },
};

/** Look up full Clue objects for a list of IDs. Unknown IDs are silently skipped. */
export function getCluesByIds(ids: string[]): Clue[] {
  return ids.map((id) => clues[id]).filter(Boolean);
}
