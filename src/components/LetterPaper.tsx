import type { LetterContent } from "../../content/letters";
import type { InvestigatorSlug } from "@/lib/investigators";

const paperColors: Record<string, string> = {
  bill: "#f0deb0",
  sean: "#f2e1b5",
};

const fontClass: Record<string, string> = {
  bill: "font-[family-name:var(--font-caveat)] text-[1.35rem] font-medium",
  sean: "font-[family-name:var(--font-patrick-hand)] text-[1.25rem]",
};

export function LetterPaper({
  letter,
  slug,
}: {
  letter: LetterContent;
  slug: InvestigatorSlug;
}) {
  const bg = paperColors[slug] ?? "#f0deb0";

  return (
    <div
      className="paper-base fold-thirds mx-auto w-full max-w-[560px]"
      style={{
        padding: "65px 55px 55px",
        background: `
          radial-gradient(ellipse at 80% 10%, rgba(139,109,63,0.14), transparent 45%),
          radial-gradient(ellipse at 15% 85%, rgba(101,67,33,0.10), transparent 40%),
          radial-gradient(ellipse at 50% 50%, rgba(160,120,60,0.05), transparent 50%),
          linear-gradient(to right, rgba(120,90,50,0.22) 0%, transparent 4%, transparent 96%, rgba(120,90,50,0.22) 100%),
          linear-gradient(to bottom, rgba(120,90,50,0.18) 0%, transparent 4%, transparent 96%, rgba(120,90,50,0.18) 100%),
          ${bg}
        `,
      }}
    >
      <div
        className={`${fontClass[slug] ?? fontClass.bill} leading-[1.85]`}
        style={{ color: "#1e1e30" }}
      >
        <p className="mb-[0.8em]">{letter.greeting}</p>

        {letter.paragraphs.map((p, i) => (
          <p key={i} className="mb-[0.8em]">
            {p}
          </p>
        ))}

        {letter.closing && (
          <p className="mt-[1.4em] mb-0">{letter.closing}</p>
        )}

        {letter.signature && (
          <p className="mt-[0.2em] text-[1.5rem] font-bold">
            {letter.signature}
          </p>
        )}

        {letter.postscript && (
          <p className="mt-[1.6em] text-[1.15rem] italic opacity-85">
            {letter.postscript}
          </p>
        )}
      </div>
    </div>
  );
}
