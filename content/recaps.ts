export interface SessionRecap {
  id: string;
  title: string;
  date: string;
  summary: string;
  events: string[];
}

export const recaps: Record<string, SessionRecap> = {
  "session-1": {
    id: "session-1",
    title: "Session 1 \u2014 Arrivals",
    date: "Early May, 1930",
    summary:
      "Four strangers arrive in Arkham, each drawn by an urgent letter from private detective Vic Valentine. They find each other \u2014 but not him.",
    events: [
      "Nell Carroway, reporter for the Arkham Gazette, followed up on a violent incident at a local speakeasy. The bartender let slip that the man \u2014 Fiske \u2014 had come from the docks carrying his own flask. Whatever set him off, it wasn\u2019t the house pour.",
      "Sean Murphy rolled into town from the west on the Aylesbury Pike, sent by his Uncle Sheamus to find a professor at Miskatonic University. Sheamus said the professor was the last person to see Vic.",
      "Bill O\u2019Job stepped off the train from Boston with nine dollars in his pocket and a war debt to repay. A station porter confirmed that another out-of-towner matching Vic\u2019s description had asked about the university weeks ago. Nobody had seen him since.",
      "Mikel Itsaso docked his boat on the Miskatonic in driving rain. With almost no English and a studied map of the town, he navigated to the university without asking a soul for directions.",
      "The four converged at the office of Professor Gordon Fairchild, Department of Psychology, Room 214 Warren Hall. Fairchild told them Vic had been investigating the \u201Csocial circle\u201D of a local socialite named Elbridge Ashburn. Vic had called the lead \u201Camateur hour\u201D \u2014 and then vanished.",
      "While the group debated their next move, a student burst into the office with news: Vic Valentine\u2019s body had been found washed up on the riverbank.",
    ],
  },
  "session-2": {
    id: "session-2",
    title: "Session 2 \u2014 The Body",
    date: "Early May, 1930",
    summary:
      "The investigators split up for the first time. One went to find Vic\u2019s hotel room. The rest went to find his body. Neither group found what they expected.",
    events: [
      "Sean Murphy went to the Hotel Miskatonic alone. He found it crawling with Irish mob \u2014 enforcers at both doors and the boss watching from the penthouse. He talked his way in, got turned away, circled back, knocked out the rear guard, and slipped inside. Vic\u2019s door wouldn\u2019t budge. He left with a wrecked shoulder and the knowledge that Vic had been living in a gangster\u2019s building.",
      "Bill, Nell, Mikel, and Professor Fairchild went to the riverbank. The body was already gone \u2014 taken to the county morgue. But Bill found drag marks in the mud leading toward the water, not from it. Vic\u2019s body had been dumped. Nell found a scrap of dark wool fabric snagged near the bridge.",
      "At the morgue, Coroner Rutherford Pike told them Vic had been in the water for weeks and died from blunt force trauma. The lie lasted about two minutes. Bill pushed past Pike and found the body himself: eyes burst, face burned, nothing consistent with drowning or debris.",
      "Mikel examined the body and determined the cause of death: shock. Whatever destroyed Vic\u2019s face happened all at once, and the pain killed him. Pike\u2019s story was a fabrication.",
      "Pike returned with police and pointed at Bill. While the officers focused on him, the others slipped out. Bill swung first. The fight escalated \u2014 grapple, breakout, gunfire. One bullet grazed him. Reinforcements arrived. Bill was arrested.",
      "The session ended with Bill in an Arkham jail cell, the remaining investigators standing in the rain outside the municipal building, and more questions than answers.",
    ],
  },
};

export function getRecapById(id: string): SessionRecap | undefined {
  return recaps[id];
}

export function getRecapsByIds(ids: string[]): SessionRecap[] {
  return ids.map((id) => recaps[id]).filter(Boolean);
}
