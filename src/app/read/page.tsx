import Link from "next/link";
import { getAllChapters } from "@/lib/literary-parser";

export default function ReadIndexPage() {
  const chapters = getAllChapters();

  return (
    <div className="mx-auto min-h-dvh max-w-2xl px-4 py-8">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1.5 font-[family-name:var(--font-oswald)] text-xs uppercase tracking-widest text-muted transition-colors hover:text-gold"
      >
        <span aria-hidden="true">&larr;</span>
        Codex
      </Link>

      <div className="mb-8 text-center">
        <h1 className="font-[family-name:var(--font-cinzel)] text-lg tracking-wide text-gold sm:text-xl">
          A Literary Account of Events
        </h1>
        <div className="mx-auto mt-2 h-px w-24 bg-gold-dark/60" />
        <p className="mt-3 font-[family-name:var(--font-crimson)] text-sm italic text-muted">
          Madness on the Miskatonic
        </p>
      </div>

      {chapters.length === 0 ? (
        <p className="py-12 text-center font-[family-name:var(--font-crimson)] text-sm italic text-muted/40">
          Nothing yet&hellip;
        </p>
      ) : (
        <div className="space-y-3">
          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={`/read/${chapter.id}`}
              className="group block rounded-sm border border-gold-dark/30 bg-noir-surface px-5 py-4 transition-all duration-300 hover:border-gold/50 hover:shadow-[0_0_20px_rgba(212,168,48,0.1)]"
            >
              <span className="font-[family-name:var(--font-cinzel)] text-sm tracking-wide text-gold">
                {chapter.chapterTitle}
              </span>
              {chapter.subtitle && (
                <>
                  <br />
                  <span className="font-[family-name:var(--font-crimson)] text-sm italic text-cream/60">
                    {chapter.subtitle}
                  </span>
                </>
              )}
              <div className="mt-2 font-[family-name:var(--font-crimson)] text-xs text-muted/50">
                {chapter.sections.length} section{chapter.sections.length !== 1 ? "s" : ""}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
