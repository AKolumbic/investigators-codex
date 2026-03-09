import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllChapters, getChapterById } from "@/lib/literary-parser";
import type { LiteraryBlock } from "@/lib/literary-parser";

export function generateStaticParams() {
  return getAllChapters().map((c) => ({ chapterId: c.id }));
}

function Block({ block }: { block: LiteraryBlock }) {
  if (block.type === "break") {
    return (
      <div className="my-8 text-center font-[family-name:var(--font-crimson)] text-lg tracking-[0.5em] text-gold-dark/50">
        *
      </div>
    );
  }

  // Centered text like «VIK SOS»
  if (block.text.startsWith("\u00AB") && block.text.endsWith("\u00BB")) {
    return (
      <p className="my-6 text-center font-[family-name:var(--font-cinzel)] text-base tracking-[4px] text-gold">
        {block.text.slice(1, -1)}
      </p>
    );
  }

  return (
    <p className="reader-paragraph mb-4 indent-6 text-justify leading-[1.75] text-cream/85">
      {block.text}
    </p>
  );
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ chapterId: string }>;
}) {
  const { chapterId } = await params;
  const chapter = getChapterById(chapterId);
  if (!chapter) notFound();

  const allChapters = getAllChapters();
  const idx = allChapters.findIndex((c) => c.id === chapterId);
  const prevChapter = idx > 0 ? allChapters[idx - 1] : null;
  const nextChapter = idx < allChapters.length - 1 ? allChapters[idx + 1] : null;

  return (
    <div className="mx-auto min-h-dvh max-w-xl px-6 py-8 sm:px-8">
      {/* Navigation */}
      <Link
        href="/read"
        className="mb-8 inline-flex items-center gap-1.5 font-[family-name:var(--font-oswald)] text-xs uppercase tracking-widest text-muted transition-colors hover:text-gold"
      >
        <span aria-hidden="true">&larr;</span>
        Chapters
      </Link>

      {/* Chapter title */}
      <header className="mb-12 text-center">
        <h1 className="font-[family-name:var(--font-cinzel)] text-sm uppercase tracking-[6px] text-gold/70">
          {chapter.chapterTitle}
        </h1>
        {chapter.subtitle && (
          <p className="mt-2 font-[family-name:var(--font-crimson)] text-xl italic text-cream/80 sm:text-2xl">
            {chapter.subtitle}
          </p>
        )}
        <div className="mx-auto mt-4 h-px w-16 bg-gold-dark/40" />
      </header>

      {/* Sections */}
      <article className="font-[family-name:var(--font-crimson)] text-[1.05rem]">
        {chapter.sections.map((section, si) => (
          <section key={si} className={si > 0 ? "mt-14" : ""}>
            {/* Section number */}
            <div className="mb-1 text-center font-[family-name:var(--font-crimson)] text-lg tracking-[3px] text-cream/50">
              {section.number}.
            </div>
            {/* Section title */}
            {section.title && (
              <div className="mb-8 text-center">
                <span className="font-[family-name:var(--font-cinzel)] text-xs uppercase tracking-[4px] text-gold-dim/70 sm:text-sm">
                  {section.title}
                </span>
              </div>
            )}

            {/* Blocks */}
            {section.blocks.map((block, bi) => (
              <Block key={bi} block={block} />
            ))}
          </section>
        ))}
      </article>

      {/* End mark */}
      <div className="mt-16 mb-8 text-center font-[family-name:var(--font-crimson)] text-sm tracking-[0.5em] text-gold-dark/40">
        - * -
      </div>

      {/* Chapter navigation */}
      <nav className="flex items-center justify-between border-t border-gold-dark/20 pt-6">
        {prevChapter ? (
          <Link
            href={`/read/${prevChapter.id}`}
            className="font-[family-name:var(--font-crimson)] text-sm text-muted transition-colors hover:text-gold"
          >
            &larr; {prevChapter.subtitle || prevChapter.chapterTitle}
          </Link>
        ) : (
          <span />
        )}
        {nextChapter ? (
          <Link
            href={`/read/${nextChapter.id}`}
            className="font-[family-name:var(--font-crimson)] text-sm text-muted transition-colors hover:text-gold"
          >
            {nextChapter.subtitle || nextChapter.chapterTitle} &rarr;
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
