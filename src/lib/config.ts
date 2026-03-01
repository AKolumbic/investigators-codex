import configData from "../../content/config.json";
import type { InvestigatorSlug } from "./investigators";

interface Config {
  letters: Record<InvestigatorSlug, boolean>;
  clues: Record<InvestigatorSlug, string[]>;
}

const config: Config = configData as Config;

export function isLetterVisible(slug: InvestigatorSlug): boolean {
  return config.letters[slug] ?? false;
}

export function getVisibleClues(slug: InvestigatorSlug): string[] {
  return config.clues[slug] ?? [];
}

export default config;
