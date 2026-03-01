import { notFound } from "next/navigation";
import Image from "next/image";
import { investigators, investigatorSlugs, type InvestigatorSlug } from "@/lib/investigators";
import { isLetterVisible } from "@/lib/config";
import { letters } from "../../../content/letters";
import { LetterPaper } from "@/components/LetterPaper";
import { LetterScrap } from "@/components/LetterScrap";
import { PageShell } from "@/components/PageShell";

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

  const inv = investigators[slug as InvestigatorSlug];
  const letter = letters[slug as InvestigatorSlug];
  const visible = isLetterVisible(slug as InvestigatorSlug);

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

      {/* Letter */}
      {visible ? (
        <section>
          <p className="mb-4 text-center font-[family-name:var(--font-oswald)] text-[0.65rem] uppercase tracking-[3px] text-muted/60">
            {slug === "sean" ? "Letter from Uncle Sheamus" : "Letter from Vic Valentine"}
          </p>
          {inv.letterStyle === "paper" ? (
            <LetterPaper letter={letter} slug={inv.slug} />
          ) : (
            <LetterScrap letter={letter} slug={inv.slug} />
          )}
        </section>
      ) : (
        <div className="py-16 text-center">
          <p className="font-[family-name:var(--font-crimson)] text-sm italic text-muted/50">
            Nothing here yet&hellip;
          </p>
        </div>
      )}
    </PageShell>
  );
}
