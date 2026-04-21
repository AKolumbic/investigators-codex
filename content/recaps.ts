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
      "The four converged at the office of Professor Gordon Fairchild, Department of Psychology, Room 214 Warren Hall. Fairchild told them Vic had been investigating the \u201csocial circle\u201d of a local socialite named Elbridge Ashburn. Vic had called the lead \u201camateur hour\u201d \u2014 and then vanished.",
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
  "session-3": {
    id: "session-3",
    title: "Session 3 \u2014 The New Man",
    date: "May 5, 1930",
    summary:
      "Bill's arrest stuck. Aiden Chez arrived in his place, Nell picked up a sharper lead on the cursed-liquor trail, and the Ashburn family moved to the center of the case.",
    events: [
      "Bill O'Job's arrest held, and he was transferred to county lockup. The others chose not to try to spring him loose.",
      "Nell Carroway went to the Gilded Swan alone and spoke with June St. Clair. June confirmed the special stock is real, separate from O'Bannion's supply, and flowing through the cheaper joints near the docks. The people who drink it don't just get drunk. They start acting wrong.",
      "With Bill's arrest holding, a new investigator entered the case. Aiden Chez, a private investigator from San Francisco, came to Arkham after Vic contacted him by reputation and met Sean Murphy and Mikel Itsaso at Miskatonic University.",
      "The group regrouped with Professor Fairchild, then followed the Ashburn lead to Harriet Stockbridge, a local historian preparing a lecture on the family.",
      "Harriet confirmed that the Ashburns' occult history stretches back centuries — but said Elbridge Ashburn III is a pale imitation, playing dress-up in powers his ancestors understood better. Even a garbled ritual, she warned, can still be dangerous.",
      "Harriet also revealed that someone had come to her door two days earlier and pressured her to cancel the talk, proof that the Ashburn history still makes someone in Arkham nervous.",
      "The session ended with the investigators heading to Dr. Henry Armitage at the Orne Library, hoping the restricted collection might tell them whether Ashburn's theatrics point to something real or only to something worse hiding behind them.",
    ],
  },
  "session-4": {
    id: "session-4",
    title: "Session 4 \u2014 The King in Shadow",
    date: "May 5, 1930",
    summary:
      "A church lead pointed toward the asylum, a pack of vagrants turned the Hotel Miskatonic into a slaughterhouse, and the cursed liquor finally reached the investigators' own table.",
    events: [
      "Nell rejoined the others and shared June St. Clair's most important lead from the Gilded Swan: the name 'The King in Shadow.'",
      "At Aiden Chez's suggestion, the group postponed Dr. Armitage and went instead to St. Stanislaus Church, hoping a priest might recognize signs of possession or occult disturbance that the university would not.",
      "Fr. Pawel admitted that he had once investigated a supposed possession at the asylum. He did not believe it was a true case of demonic occupation, but he did not dismiss it as ordinary either.",
      "Leaving the church, the investigators noticed a group of vagrants moving together with unnatural purpose. They followed them to the Hotel Miskatonic.",
      "The vagrants entered the hotel and opened fire on O'Bannion's Irish mob presence inside, turning the building into a public massacre. When the shooting ended, the surviving gunmen stepped off the penthouse balcony to their deaths.",
      "One of the fallen shooters lived only long enough to gasp out the same name Nell had brought from June: 'The King in Shadow.'",
      "Mikel Itsaso went upstairs and found Danny O'Bannion already dead in the penthouse, pinned to the wall and stabbed repeatedly with a dagger. The group fled before the police could lock the scene down.",
      "The session closed at a dockside bar where the investigators finally found the new liquor in circulation. Sean Murphy drank it and found it dangerously smooth, and a fresh delivery arrived with the bartender's promise that soon the whole town would be drinking it.",
    ],
  },
  "session-5": {
    id: "session-5",
    title: "Session 5 \u2014 The Ashburn Books",
    date: "May 5-6, 1930",
    summary:
      "The investigators chased Ashburn's cemetery cult to his doorstep, then followed the missing-book trail to Orne Library and found that Fairchild had hidden a crucial part of Vic's investigation.",
    events: [
      "At the dockside bar, Sean Murphy rushed to the window to track the men who had delivered the new liquor. They were already outside staring back at him. When they turned a corner, Sean followed, but they seemed to vanish from the street.",
      "The group tried to decide whether the delivery men were tied to the Italian Mafia, but could not make that theory hold. Instead, they began treating 'The King in Shadow' as a third force in Arkham's underworld.",
      "Following the loudest occult lead, the investigators drove to St. Mary's Graveyard. They spotted a robed figure, followed, and found four cultists chanting with raised arms. When the stealth broke, the cultists ran.",
      "The cemetery yielded no clear glyphs or competent occult evidence, but the investigators found a flyer for an Ashburn Social Society meeting happening that night.",
      "The trail led to the Ashburn estate. After watching the meeting disperse, the investigators were invited inside by Elbridge Ashburn III, who smiled from the doorway and waved them in.",
      "Ashburn denied involvement with the cemetery cultists, badly. But he did not know Vic Valentine was dead, and he revealed that he had met with Professor Fairchild about retrieving the Ashburn family's occult books from Orne Library's restricted section.",
      "After Sean dreamed of drowning in dark water and being pulled down by tentacles, the investigators regrouped at the Arkham Gazette and realized Fairchild had never mentioned his meeting with Ashburn.",
      "At Orne Library, Dr. Henry Armitage refused access to the restricted section, but confirmed that Fairchild had checked out the Ashburn books. Vic had come by 4-5 days earlier asking about the same books after coming from Arkham Asylum, and he did not know Fairchild already had them.",
    ],
  },
};

export function getRecapById(id: string): SessionRecap | undefined {
  return recaps[id];
}

export function getRecapsByIds(ids: string[]): SessionRecap[] {
  return ids.map((id) => recaps[id]).filter(Boolean);
}
