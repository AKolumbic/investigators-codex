import type { InvestigatorSlug } from "../src/lib/investigators";

export interface LetterContent {
  greeting: string;
  paragraphs: string[];
  closing?: string;
  signature: string;
  postscript?: string;
}

export const letters: Record<InvestigatorSlug, LetterContent> = {
  bill: {
    greeting: "Bill,",
    paragraphs: [
      "I'll keep this short because I know you'd rather hear it straight.",
      "I'm in Arkham, Massachusetts, working a case that's gotten out of hand. The people involved aren't the kind who settle things with lawyers. I need someone at my back who can take a hit and give one back harder \u2014 and brother, I've seen you drop men twice your size without breaking a sweat. There's nobody I'd rather have in my corner when things go bad.",
      "I can't put details on paper. Whatever you remember about the Argonne \u2014 the kind of trouble where you keep your fists up and your back to the wall \u2014 that's what I'm asking you to walk into.",
      "Take the train to Boston, then the local line to Arkham. Ask for me at Miskatonic University \u2014 I've been spending most of my time there.",
      "Come soon. Come quiet. Come ready.",
    ],
    closing: "Your friend,",
    signature: "Vic",
  },
  nell: {
    greeting: "Miss Carroway \u2014",
    paragraphs: [
      "I've read your work in the Gazette. You notice things other people walk right past. That's rare in this town.",
      "I'm looking into something at the university \u2014 something that needs someone with your instincts and your nerve. I can't say more on paper.",
      "Ask around for me there. Sooner rather than later.",
    ],
    signature: "\u2014 V.V.",
  },
  sean: {
    greeting: "Nephew,",
    paragraphs: [
      "I know it's been a while and I know you've got your own troubles, but I need you in Arkham. Soon as you can.",
      "A colleague of mine at the university hasn't been himself. I can't explain it properly in a letter \u2014 you'd think your uncle had finally lost what's left of his mind. But something is wrong, Sean. Not just with him. With this whole damned town. And it's getting worse.",
      "I don't trust the people who should be handling this. I trust family. And you're the only family I've got who can handle himself when things get ugly.",
      "Come to my place in Northside, over by Derby and Brown. If I'm not home, let yourself in \u2014 I've been keeping odd hours.",
    ],
    closing: "\u2014 Uncle Sheamus",
    signature: "",
    postscript: "P.S. \u2014 Bring that iron of yours. And don't tell your mother.",
  },
  mikel: {
    greeting: "MIKEL \u2014",
    paragraphs: [
      "I NEED HELP. TAKE BOAT TO ARKHAM (MISKATONIC RIVER). FIND ME AT MISKATONIC UNIVERSITY.",
    ],
    signature: "\u2014 VIC",
  },
};
