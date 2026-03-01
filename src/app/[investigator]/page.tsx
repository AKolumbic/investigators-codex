import { notFound } from "next/navigation";
import Image from "next/image";
import { investigators, investigatorSlugs, type InvestigatorSlug } from "@/lib/investigators";
import { isLetterVisible, getVisibleClues } from "@/lib/config";
import { letters } from "../../../content/letters";
import { lore } from "../../../content/lore";
import { getCluesByIds } from "../../../content/clues";
import { LetterPaper } from "@/components/LetterPaper";
import { LetterScrap } from "@/components/LetterScrap";
import { PageShell } from "@/components/PageShell";
import {
  LoreSection,
  LoreParagraphs,
  LoreBullets,
  LorePeople,
} from "@/components/LoreSection";
import { ClueList } from "@/components/ClueCard";

export function generateStaticParams() {
  return investigatorSlugs.map((slug) => ({ investigator: slug }));
}

export default async function InvestigatorPage({
  params,
}: {
  params: Promise<{ investigator: string }>;
}) {
  const { investigator: slug } = await params;

  if (!investigatorSlugs.includes(slug as InvestigatorSlug)) {
    notFound();
  }

  const s = slug as InvestigatorSlug;
  const inv = investigators[s];
  const letter = letters[s];
  const charLore = lore[s];
  const letterVisible = isLetterVisible(s);
  const visibleClueIds = getVisibleClues(s);
  const visibleClues = getCluesByIds(visibleClueIds);

  return (
    <PageShell showBack>
      {/* Investigator header */}
      <div className="mb-6 flex items-center gap-4 sm:mb-8">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-gold-dark/50 sm:h-20 sm:w-20">
          <Image
            src={inv.portrait}
            alt={inv.fullName}
            fill
            sizes="80px"
            className="object-cover object-top"
          />
        </div>
        <div>
          <h1 className="font-[family-name:var(--font-oswald)] text-base font-semibold uppercase tracking-widest text-gold sm:text-lg">
            {inv.fullName}
          </h1>
          <p className="font-[family-name:var(--font-crimson)] text-sm italic text-muted">
            {inv.occupation}
          </p>
        </div>
      </div>

      {/* Tagline */}
      <p className="mb-8 text-center font-[family-name:var(--font-crimson)] text-lg italic text-gold-dim/70">
        &ldquo;{inv.tagline}&rdquo;
      </p>

      {/* Who You Are */}
      <LoreSection label="Who You Are">
        <LoreParagraphs paragraphs={charLore.whoYouAre} />
      </LoreSection>

      {/* What You Know */}
      <LoreSection label="What You Know">
        <LoreBullets items={charLore.whatYouKnow} />
      </LoreSection>

      {/* People */}
      <LoreSection label="People">
        <LorePeople people={charLore.people} />
      </LoreSection>

      {/* Belongings */}
      <LoreSection label="Belongings">
        <p className="italic text-cream/70">{charLore.belongings}</p>
      </LoreSection>

      {/* Letter */}
      {letterVisible && (
        <LoreSection
          label={
            slug === "sean"
              ? "Letter from Uncle Sheamus"
              : "Letter from Vic Valentine"
          }
        >
          {inv.letterStyle === "paper" ? (
            <LetterPaper letter={letter} slug={inv.slug} />
          ) : (
            <LetterScrap letter={letter} slug={inv.slug} />
          )}
        </LoreSection>
      )}

      {/* Clues & Notes */}
      <LoreSection label="Clues & Notes">
        <ClueList clues={visibleClues} />
      </LoreSection>
    </PageShell>
  );
}
