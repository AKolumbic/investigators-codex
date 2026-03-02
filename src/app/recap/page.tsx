import { getVisibleRecapIds } from "@/lib/config";
import { getRecapsByIds } from "../../../content/recaps";
import { PageShell } from "@/components/PageShell";
import { LoreSection } from "@/components/LoreSection";

export default function RecapPage() {
  const visibleIds = getVisibleRecapIds();
  const recaps = getRecapsByIds(visibleIds);

  return (
    <PageShell showBack>
      <div className="mb-6 text-center sm:mb-8">
        <h1 className="font-[family-name:var(--font-cinzel)] text-lg tracking-wide text-gold sm:text-xl">
          Case Notes
        </h1>
        <div className="mx-auto mt-2 h-px w-24 bg-gold-dark/60" />
        <p className="mt-3 font-[family-name:var(--font-crimson)] text-sm italic text-muted">
          What we know so far
        </p>
      </div>

      {recaps.length === 0 ? (
        <p className="py-12 text-center font-[family-name:var(--font-crimson)] text-sm italic text-muted/40">
          Nothing yet&hellip;
        </p>
      ) : (
        recaps.map((recap) => (
          <LoreSection key={recap.id} label={recap.title}>
            <p className="mb-1 font-[family-name:var(--font-oswald)] text-[0.65rem] uppercase tracking-[2px] text-muted/60">
              {recap.date}
            </p>
            <p className="mb-4 italic text-cream/70">{recap.summary}</p>
            <div className="space-y-4">
              {recap.events.map((event, i) => (
                <p key={i}>{event}</p>
              ))}
            </div>
          </LoreSection>
        ))
      )}
    </PageShell>
  );
}
