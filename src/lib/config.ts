import configData from "../../content/config.json";
import type { InvestigatorSlug } from "./investigators";

interface Config {
  letters: Record<InvestigatorSlug, boolean>;
}

const config: Config = configData as Config;

export function isLetterVisible(slug: InvestigatorSlug): boolean {
  return config.letters[slug] ?? false;
}

export default config;
