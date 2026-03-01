import type { InvestigatorSlug } from "@/lib/investigators";

export interface PersonEntry {
  name: string;
  description: string;
}

export interface CharacterLore {
  whoYouAre: string[];
  whatYouKnow: string[];
  people: PersonEntry[];
  belongings: string;
}

export const lore: Record<InvestigatorSlug, CharacterLore> = {
  bill: {
    whoYouAre: [
      "You fought in the Argonne. You came home and the world had moved on without you. The ranch work dried up when the money did. You drifted south, punched cattle, broke horses, slept in bunkhouses that smelled like sweat and kerosene. You're twenty-nine years old, you've got nine dollars to your name, and you're a thousand miles from anywhere that makes sense to you.",
      "Then the letter arrived. Vic Valentine — the only man you'd trust to watch your back since the trenches. You hadn't heard from him in years. The letter was short, careful, and wrong in a way you couldn't put your finger on. Like a man writing with someone looking over his shoulder.",
      "You took the train from Boston. You stepped off the platform into rain and cold and a town that pressed in on all sides — brick and slate and dripping eaves, the air thick with river water and coal smoke. Nothing flat. Nothing open. A long way from Texas.",
    ],
    whatYouKnow: [
      "Vic is in trouble. The kind he can't handle alone.",
      "Arkham is a college town in Massachusetts, on the Miskatonic River.",
      "Vic mentioned a professor at the university — Fairchild. Psychology department.",
      "You have nine dollars in your pocket. That's it.",
      "You took the train from Boston. You don't know anyone in this town except Vic — and Vic isn't answering.",
    ],
    people: [
      {
        name: "Vic Valentine",
        description:
          "Private investigator out of Boston. Your war buddy from the Argonne. The kind of man who writes short letters and means every word. He asked you to come. That's enough.",
      },
    ],
    belongings:
      "A worn leather bag over one shoulder. Vic's letter in your coat pocket, soft at the folds from being read and reread. A Colt .38 Super, cleaned and loaded. A wide-brimmed hat that marks you as a stranger in every direction. Nine dollars. No return ticket.",
  },

  nell: {
    whoYouAre: [
      "You've been at the Gazette for years now. Back corner desk, near the archive shelves, where the light is bad and nobody bothers you. That's where you do your real work — not the society page fluff or the eight-inch fillers Wallace assigns when he's in a mood. The real work is the scrapbook.",
      "Clippings. Dates circled in red pencil. Names connected by arrows that only make sense to you. Disappearances, madness outbreaks, odd deaths — they're adding up to something. A woman on Parsonage Street who tried to claw her own eyes out in March. A dockworker who walked into the river in April, babbling in a language his wife didn't recognize. A laborer named Gerald Fiske who attacked two men with a broken bottle, raving about shapes in the walls. Three incidents this month alone. All Northside. All men with no prior history of violence.",
      "Then a note arrived from a man who noticed you noticing. A private investigator from Boston, name of Vic Valentine. He'd read your work. He said he was looking into something at the university — something connected. He wanted to meet. That was weeks ago. You haven't heard from him since.",
    ],
    whatYouKnow: [
      "Something is wrong in Arkham, and it's getting worse.",
      "The madness outbreaks aren't random. Your scrapbook has the pattern — Northside, violent, sudden onset in people with no history.",
      "A psychology professor at Miskatonic named Gordon Fairchild keeps coming up in your notes. You've been meaning to interview him.",
      "A PI named Vic Valentine contacted you about the same pattern. He's gone silent.",
      "Your editor Wallace Baines thinks you're chasing ghosts. He's worried about you, but he won't say that.",
    ],
    people: [
      {
        name: "Vic Valentine",
        description:
          "Private investigator from Boston. Contacted you after reading your work in the Gazette. Said he was investigating something at the university. Hasn't been heard from in weeks.",
      },
      {
        name: "Wallace Baines",
        description:
          "Your editor at the Arkham Gazette. Gruff, protective, old-school. Thinks you're seeing connections where there's just bad hooch and bad luck. Doesn't tell you not to dig — he knows better than to try.",
      },
    ],
    belongings:
      "Your scrapbook — stuffed with clippings, notes, and red-pencil annotations. A reporter's notebook and two sharpened pencils. Press credentials from the Gazette. A worn leather bag. A snub-nosed revolver in the bottom of your desk drawer, for the days the stories follow you home.",
  },

  sean: {
    whoYouAre: [
      "Detroit was supposed to be the score. You'd worked your way up, knew the routes, knew the people. Then the Purple Gang decided they didn't need an Irishman cutting into their territory. They held you down and gave you the Glasgow smile — the scar that pulls at the corner of your mouth when you talk, the one that makes strangers look away. They left you bleeding in an alley and told you not to come back.",
      "So you didn't. You went south. New Orleans, the Gulf Coast, the Caribbean run. Good rum, long nights, cash in hand. You built a new operation from the waterline up — running product through ports that don't ask questions. You know bootlegging like you know breathing: the routes, the margins, the smell of a setup, the weight of a bribe. It's not a living. It's survival.",
      "Then Uncle Sheamus wrote. Sheamus doesn't write unless something's wrong, and Sheamus doesn't scare easy. But his letter had the feel of a man looking over his shoulder. Something about a colleague at the university, a detective from Boston who'd gone quiet, cult business and strange happenings. He asked you to come. You came in from the west, through Connecticut, avoiding Boston — a man with your face and your line of work doesn't drive through Boston if he can help it.",
    ],
    whatYouKnow: [
      "Sheamus is scared — and Sheamus doesn't scare easy.",
      "A private detective named Vic Valentine was investigating trouble at Miskatonic University. He's disappeared.",
      "The trouble involves a professor named Fairchild and something Sheamus calls \"cult business.\"",
      "You came in on the Aylesbury Pike from the west, avoiding Boston and the coast roads.",
      "You know bootlegging, and you know when a town smells like a setup. Arkham smells like a setup.",
    ],
    people: [
      {
        name: "Uncle Sheamus",
        description:
          "Your uncle. Northside Arkham, near the university. Naturalist, amateur cryptid hunter, hard drinker — sharp when he's sober, which isn't often. The only family you trust.",
      },
      {
        name: "The Purple Gang",
        description:
          "Detroit mob. They gave you the scar and the exile. You don't go east of the Mississippi without checking over your shoulder.",
      },
    ],
    belongings:
      "A Studebaker with mud on the fenders and a false panel behind the back seat. A Colt .38 Super under your coat. A flask — empty, for now. Sheamus's letter, folded twice. An umbrella borrowed from your uncle, older than you are and missing two ribs. The scar.",
  },

  mikel: {
    whoYouAre: [
      "The sea is your first language. English is barely your fourth. You crewed passage from Boston on a fishing trawler, watching Arkham rise from the fog like something that grew out of the riverbank. Dark stone, steep roofs, church spires vanishing into the low cloud. The river bends and the docks appear: tarred pilings, mooring lines, the smell of fish and wet rope. You know this smell. You know these sounds. The water is a language you speak fluently. It's everything else that's hard.",
      "You're Basque. A sailor and a handyman — good with rope, good with tools, good with your hands in ways that don't need explaining. You've worked boats from Bilbao to Boston, fixed engines in ports where nobody spoke your language, navigated coastlines by the color of the water and the shape of the wind. You don't need words for that. You read the water, the sky, the way men hold their shoulders when they're lying.",
      "Vic's note was short. Simple words, the kind he'd know you could parse. Arkham. Miskatonic River. University. Help. That's all it said. That's enough. Vic helped you once — pulled strings to get you work when nobody would hire the foreigner who couldn't fill out a form. You don't forget that. You have a name written on a scrap of paper: Fairchild, Miskatonic University. You'll find it.",
    ],
    whatYouKnow: [
      "Vic needs help. He's in Arkham.",
      "Miskatonic University. A professor named Fairchild.",
      "You arrived by boat on the Miskatonic River. You know the waterfront.",
      "Your English is almost nonexistent. You carry a scrap of paper with Fairchild's name on it.",
      "You don't know what the trouble is. You don't need to. Vic asked.",
    ],
    people: [
      {
        name: "Vic Valentine",
        description:
          "A friend from Boston. He helped you when no one else would. His note was short — simple words, the kind he'd know you could read. That's how you know it's serious.",
      },
    ],
    belongings:
      "A sailor's duffel, salt-stained and heavy. A good knife. Rope — you always have rope. A toolkit wrapped in oilcloth. Vic's note, folded into a square small enough to fit in your palm. A name on a scrap of paper: Fairchild. No umbrella. The rain doesn't bother you.",
  },
};
