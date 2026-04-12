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

  // ── Session 2 ──────────────────────────────────────────

  // Sean
  "sean-hotel-mob": {
    id: "sean-hotel-mob",
    source: "Session 2 — Hotel Miskatonic",
    text: "The Hotel Miskatonic is an Irish mob operation. Enforcers at both entrances, and the boss — whoever he is — watches from the penthouse. Vic was staying in a gangster's building. The room is still locked.",
  },
  "sean-hotel-pistolwhip": {
    id: "sean-hotel-pistolwhip",
    source: "Session 2 — Hotel Miskatonic",
    text: "Got inside by pistol-whipping the back door guard. Couldn't break down Vic's door — shoulder's wrecked. Got out clean, but the mob will find their man. They'll put the pieces together eventually.",
  },

  // Nell
  "nell-fabric-scrap": {
    id: "nell-fabric-scrap",
    source: "Session 2 — The Riverbank",
    text: "A scrap of dark wool fabric found snagged near the bridge where Vic's body was recovered. Heavy weave, consistent with a man's overcoat. Torn in haste.",
  },
  "nell-pike-lied": {
    id: "nell-pike-lied",
    source: "Session 2 — The Morgue",
    text: "Coroner Pike claimed Vic had been in the water for weeks and died from blunt force trauma. Both lies. His eyes had burst and his face was burned. Pike is either paid off or frightened into silence.",
  },

  // Bill
  "bill-drag-marks": {
    id: "bill-drag-marks",
    source: "Session 2 — The Riverbank",
    text: "Drag marks in the mud beneath the bridge led TO the water, not from it. Someone dragged a body to the river's edge and dumped it in. Vic didn't drown. He was disposed of.",
  },
  "bill-arrested": {
    id: "bill-arrested",
    source: "Session 2 — The Morgue",
    text: "Punched a cop at the coroner's office after Pike's lies fell apart. Got shot — grazed — and arrested. Currently in Arkham lockup.",
  },

  // Mikel
  "mikel-cause-of-death": {
    id: "mikel-cause-of-death",
    source: "Session 2 — The Morgue",
    text: "Examined Vic's body. The face was destroyed — eyes burst, skin burned — but the body beneath was intact. No broken bones, no crushing injuries. He died of shock. The pain of whatever happened to his face killed him.",
  },
  "mikel-steven-white": {
    id: "mikel-steven-white",
    source: "Session 2 — The Riverbank",
    text: "A dockworker named Steven White found the body. Police took him away for questioning. He may know more about when and where Vic surfaced.",
  },

  // ── Session 3 ──────────────────────────────────────────

  "june-special-stock": {
    id: "june-special-stock",
    source: "Session 3 — The Gilded Swan",
    text: "June St. Clair confirmed the special stock is real: cursed liquor, separate from O'Bannion's supply, and bad enough that even hardened drinkers are starting to whisper about it.",
  },
  "june-king-in-shadow": {
    id: "june-king-in-shadow",
    source: "Session 3 — The Gilded Swan",
    text: "First time the name surfaced plainly: The King in Shadow. Street talk gives him ownership of the cursed liquor, but nobody seems able to put a face to him.",
  },
  "june-vic-gilded-swan": {
    id: "june-vic-gilded-swan",
    source: "Session 3 — The Gilded Swan",
    text: "Vic was here about a week before his death, asking the same questions about the special stock and the King in Shadow. He was on this trail before someone shut him up.",
  },
  "harriet-ashburn-lineage": {
    id: "harriet-ashburn-lineage",
    source: "Session 3 — Harriet Stockbridge",
    text: "Harriet Stockbridge says the Ashburns' real occult history stretches back centuries — but Elbridge Ashburn III is a pale imitation, a fool in inherited robes. Dangerous, yes. Competent, no.",
  },
  "harriet-threat": {
    id: "harriet-threat",
    source: "Session 3 — Harriet Stockbridge",
    text: "Harriet was threatened two days before her lecture. Somebody wants the Ashburn history buried badly enough to lean on an old woman in her own home.",
  },
};

/** Look up full Clue objects for a list of IDs. Unknown IDs are silently skipped. */
export function getCluesByIds(ids: string[]): Clue[] {
  return ids.map((id) => clues[id]).filter(Boolean);
}
