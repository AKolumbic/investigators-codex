import type { Clue } from "../../content/clues";

export function ClueCard({ clue }: { clue: Clue }) {
  return (
    <div className="rounded border border-gold-dark/25 bg-noir-surface px-4 py-3">
      <p className="mb-1 font-[family-name:var(--font-oswald)] text-[0.65rem] uppercase tracking-[2px] text-muted/60">
        {clue.source}
      </p>
      <p className="font-[family-name:var(--font-crimson)] text-[1rem] italic leading-relaxed text-cream/80">
        {clue.text}
      </p>
    </div>
  );
}

export function ClueList({ clues }: { clues: Clue[] }) {
  if (clues.length === 0) {
    return (
      <p className="py-6 text-center font-[family-name:var(--font-crimson)] text-sm italic text-muted/40">
        Nothing yet&hellip;
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {clues.map((clue) => (
        <ClueCard key={clue.id} clue={clue} />
      ))}
    </div>
  );
}
