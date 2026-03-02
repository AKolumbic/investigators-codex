import type { InvestigatorSlug } from "@/lib/investigators";

export interface Clue {
  id: string;
  source: string;
  text: string;
}

export const clues: Record<string, Clue> = {
  // ── Session 1 ──────────────────────────────────────────

  // Nell
  "nell-scrapbook-pattern": {
    id: "nell-scrapbook-pattern",
    source: "Session 1 — Nell's Scrapbook",
    text: "A pattern in the clippings: sudden violent outbursts, at least three this month. All concentrated on the Northside. All previously unremarkable people.",
  },
  "nell-fiske-flask": {
    id: "nell-fiske-flask",
    source: "Session 1 — The Speakeasy",
    text: "Catchpole said Fiske came in from the docks carrying his own flask. He poured from it into his drink — that's when he turned. The speakeasy's stock wasn't the problem. Whatever set Fiske off, he brought it with him.",
  },
  "nell-fairchild-genuine": {
    id: "nell-fairchild-genuine",
    source: "Session 1 — Fairchild's Office",
    text: "Fairchild's concern for Vic is genuine. His body language, his hesitation — he's not performing worry. He's living it. The others didn't catch this.",
  },
  "nell-ashburn-amateur": {
    id: "nell-ashburn-amateur",
    source: "Session 1 — Fairchild's Office",
    text: "Vic's own notes called Ashburn's group \"amateur hour.\" He didn't take them seriously. But he went to look into them anyway — and then he disappeared.",
  },

  // Sean
  "sean-sheamus-tip": {
    id: "sean-sheamus-tip",
    source: "Session 1 — Uncle Sheamus",
    text: "Sheamus sent him to Professor Fairchild, Department of Psychology at Miskatonic University. Vic was working with Fairchild before he went missing.",
  },
  "sean-vic-hotel": {
    id: "sean-vic-hotel",
    source: "Session 1 — Fairchild's Office",
    text: "Vic was staying at the Hotel Miskatonic. Room paid through end of May. Fairchild checked the room and found notes about Ashburn's \"social circle.\"",
  },

  // Bill
  "bill-porter-sighting": {
    id: "bill-porter-sighting",
    source: "Session 1 — B&M Train Station",
    text: "A station porter confirmed: another out-of-towner matching Vic's description asked about the university weeks ago. Nobody's seen him since.",
  },
  "bill-ashburn-lead": {
    id: "bill-ashburn-lead",
    source: "Session 1 — Fairchild's Office",
    text: "Fairchild says Vic was investigating Ashburn's \"social circle.\" Vic called it \"amateur hour\" — then disappeared. The lead is live, but Vic's own words nag at it.",
  },

  // Mikel
  "mikel-vik-sos": {
    id: "mikel-vik-sos",
    source: "Session 1 — Vic's Letter",
    text: "Vic's letter was urgent. Something in Arkham needed help. The others seem to know more — for now, watch and listen.",
  },
};

/** Look up full Clue objects for a list of IDs. Unknown IDs are silently skipped. */
export function getCluesByIds(ids: string[]): Clue[] {
  return ids.map((id) => clues[id]).filter(Boolean);
}
