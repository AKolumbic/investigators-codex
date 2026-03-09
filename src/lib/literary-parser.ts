import fs from "fs";
import path from "path";

export interface LiterarySection {
  number: string;
  title: string;
  blocks: LiteraryBlock[];
}

export type LiteraryBlock =
  | { type: "paragraph"; text: string }
  | { type: "break" }; // asterisk divider

export interface LiteraryChapter {
  id: string;
  chapterTitle: string;
  subtitle: string;
  sections: LiterarySection[];
}

const LITERARY_DIR = path.join(process.cwd(), "content", "literary");

function parseChapterFile(filename: string, id: string): LiteraryChapter {
  const raw = fs.readFileSync(path.join(LITERARY_DIR, filename), "utf-8");
  const lines = raw.split("\n");

  let chapterTitle = "";
  let subtitle = "";
  const sections: LiterarySection[] = [];
  let currentSection: LiterarySection | null = null;
  let pendingParagraph = "";

  function flushParagraph() {
    if (pendingParagraph.trim() && currentSection) {
      currentSection.blocks.push({
        type: "paragraph",
        text: pendingParagraph.trim(),
      });
    }
    pendingParagraph = "";
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Title line (first line): "MADNESS ON THE MISKATONIC", "CHAPTER TWO — THE BODY", "PROLOGUE — INTO ARKHAM"
    if (i === 0 && (trimmed.startsWith("MADNESS") || trimmed.startsWith("CHAPTER") || trimmed.startsWith("PROLOGUE"))) {
      if (trimmed.startsWith("CHAPTER") || trimmed.startsWith("PROLOGUE")) {
        const dashIdx = trimmed.indexOf("\u2014");
        if (dashIdx !== -1) {
          chapterTitle = trimmed.slice(0, dashIdx).trim();
          subtitle = trimmed.slice(dashIdx + 1).trim();
        } else {
          chapterTitle = trimmed;
        }
      } else {
        chapterTitle = trimmed;
      }
      continue;
    }

    // Second line for multi-line title: "A Literary Account of Events"
    if (i === 1 && trimmed.startsWith("A Literary")) {
      subtitle = trimmed;
      continue;
    }

    // Chapter line (if title was on line 0 as "MADNESS..."): "CHAPTER ONE — THE GATHERING"
    if ((trimmed.startsWith("CHAPTER") || trimmed.startsWith("PROLOGUE")) && i > 0) {
      const dashIdx = trimmed.indexOf("\u2014");
      if (dashIdx !== -1) {
        chapterTitle = trimmed.slice(0, dashIdx).trim();
        subtitle = trimmed.slice(dashIdx + 1).trim();
      } else {
        chapterTitle = trimmed;
      }
      continue;
    }

    // Section number: "I." or "V." (centered, roman numerals)
    if (/^\s*[IVX]+\.\s*$/.test(line)) {
      flushParagraph();
      currentSection = {
        number: trimmed.replace(".", ""),
        title: "",
        blocks: [],
      };
      sections.push(currentSection);
      continue;
    }

    // Section title (centered text following a section number)
    if (
      currentSection &&
      currentSection.title === "" &&
      currentSection.blocks.length === 0 &&
      /^\s{10,}/.test(line) &&
      trimmed.length > 0 &&
      trimmed !== "*" &&
      !trimmed.startsWith("- *")
    ) {
      currentSection.title = trimmed;
      continue;
    }

    // Break: centered asterisk or "- * -"
    if (/^\s*-?\s*\*\s*-?\s*$/.test(trimmed) && currentSection) {
      flushParagraph();
      currentSection.blocks.push({ type: "break" });
      continue;
    }

    // Centered text like "VIK SOS"
    if (/^\s{20,}[A-Z]/.test(line) && trimmed.length < 30 && currentSection) {
      flushParagraph();
      currentSection.blocks.push({
        type: "paragraph",
        text: `\u00AB${trimmed}\u00BB`,
      });
      continue;
    }

    // Empty line = paragraph break
    if (trimmed === "") {
      flushParagraph();
      continue;
    }

    // Regular text — accumulate into paragraph
    if (!currentSection) {
      // Preamble text before any section marker — create implicit section
      currentSection = { number: "", title: "", blocks: [] };
      sections.push(currentSection);
    }
    if (pendingParagraph) {
      pendingParagraph += " " + trimmed;
    } else {
      pendingParagraph = trimmed;
    }
  }

  flushParagraph();

  return { id, chapterTitle, subtitle, sections };
}

function deriveId(filename: string): string {
  const name = filename.replace(/\.txt$/, "");
  // Strip leading number prefix: "00-prologue" → "prologue"
  const stripped = name.replace(/^\d+-/, "");
  // Insert hyphen between letters and digits: "chapter1" → "chapter-1"
  return stripped.replace(/([a-z])(\d)/, "$1-$2");
}

export function getAllChapters(): LiteraryChapter[] {
  if (!fs.existsSync(LITERARY_DIR)) return [];

  const files = fs.readdirSync(LITERARY_DIR)
    .filter((f) => f.endsWith(".txt"))
    .sort();

  return files.map((f) => parseChapterFile(f, deriveId(f)));
}

export function getChapterById(id: string): LiteraryChapter | undefined {
  const chapters = getAllChapters();
  return chapters.find((c) => c.id === id);
}
