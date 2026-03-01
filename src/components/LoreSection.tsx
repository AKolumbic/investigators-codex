import type { PersonEntry } from "../../content/lore";

interface LoreSectionProps {
  label: string;
  children: React.ReactNode;
}

export function LoreSection({ label, children }: LoreSectionProps) {
  return (
    <section className="mb-8">
      <div className="mb-4 flex items-center gap-3">
        <div className="h-px flex-1 bg-gold-dark/30" />
        <h2 className="shrink-0 font-[family-name:var(--font-oswald)] text-[0.7rem] font-medium uppercase tracking-[3px] text-gold-dim">
          {label}
        </h2>
        <div className="h-px flex-1 bg-gold-dark/30" />
      </div>
      <div className="font-[family-name:var(--font-crimson)] text-[1.05rem] leading-relaxed text-cream/90">
        {children}
      </div>
    </section>
  );
}

export function LoreParagraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

export function LoreBullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-4">
      {items.map((item, i) => (
        <li key={i} className="list-none relative pl-4 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-gold-dark/50 before:content-['']">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function LorePeople({ people }: { people: PersonEntry[] }) {
  return (
    <div className="space-y-3">
      {people.map((person) => (
        <div key={person.name} className="rounded border border-gold-dark/20 bg-noir-surface/50 px-4 py-3">
          <span className="font-[family-name:var(--font-oswald)] text-sm font-medium uppercase tracking-wide text-gold">
            {person.name}
          </span>
          <p className="mt-1 text-[0.95rem] text-cream/70">
            {person.description}
          </p>
        </div>
      ))}
    </div>
  );
}
