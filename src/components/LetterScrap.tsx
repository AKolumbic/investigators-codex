import type { LetterContent } from "../../content/letters";
import type { InvestigatorSlug } from "@/lib/investigators";

const scrapStyles: Record<
  string,
  { bg: string; rotation: string; tornColor: string; fontClass: string }
> = {
  nell: {
    bg: "#ede4cc",
    rotation: "-1.2deg",
    tornColor: "#ede4cc",
    fontClass: "font-[family-name:var(--font-caveat)] text-[1.4rem] font-semibold",
  },
  mikel: {
    bg: "#eee5ce",
    rotation: "0.8deg",
    tornColor: "#eee5ce",
    fontClass: "font-[family-name:var(--font-permanent-marker)] text-[1.3rem]",
  },
};

export function LetterScrap({
  letter,
  slug,
}: {
  letter: LetterContent;
  slug: InvestigatorSlug;
}) {
  const style = scrapStyles[slug] ?? scrapStyles.nell;

  return (
    <div
      className="paper-base fold-half torn-top mx-auto w-full max-w-[420px]"
      style={
        {
          padding: slug === "mikel" ? "45px 40px 40px" : "40px 38px 35px",
          transform: `rotate(${style.rotation})`,
          "--torn-color": style.tornColor,
          background: `
            radial-gradient(ellipse at 70% 25%, rgba(139,109,63,0.10), transparent 50%),
            radial-gradient(ellipse at 20% 75%, rgba(101,67,33,0.07), transparent 45%),
            linear-gradient(to right, rgba(120,90,50,0.18) 0%, transparent 5%, transparent 95%, rgba(120,90,50,0.18) 100%),
            linear-gradient(to bottom, rgba(120,90,50,0.12) 0%, transparent 6%, transparent 94%, rgba(120,90,50,0.12) 100%),
            ${style.bg}
          `,
          boxShadow:
            "0 3px 16px rgba(0,0,0,0.45), 0 0 0 1px rgba(120,90,50,0.12), inset 0 0 35px rgba(139,109,63,0.06)",
        } as React.CSSProperties
      }
    >
      <div
        className={`${style.fontClass} leading-[1.8]`}
        style={{ color: "#1a1a2e" }}
      >
        <p className="mb-[0.6em]">{letter.greeting}</p>

        {letter.paragraphs.map((p, i) => (
          <p key={i} className="mb-[0.6em]">
            {p}
          </p>
        ))}

        <p className="mt-[1em] mb-0 text-right text-[1.4rem] font-bold">
          {letter.signature}
        </p>
      </div>
    </div>
  );
}
