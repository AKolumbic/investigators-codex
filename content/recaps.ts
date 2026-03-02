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
};

export function getRecapById(id: string): SessionRecap | undefined {
  return recaps[id];
}

export function getRecapsByIds(ids: string[]): SessionRecap[] {
  return ids.map((id) => recaps[id]).filter(Boolean);
}
