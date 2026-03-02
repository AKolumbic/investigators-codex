import configData from "../../content/config.json";
import type { InvestigatorSlug } from "./investigators";

interface MapConfig {
  enabled: boolean;
  visibleLocations: string[];
}

interface RecapConfig {
  visible: string[];
}

interface Config {
  letters: Record<InvestigatorSlug, boolean>;
  clues: Record<InvestigatorSlug, string[]>;
  recaps: RecapConfig;
  map: MapConfig;
}

const config: Config = configData as Config;

export function isLetterVisible(slug: InvestigatorSlug): boolean {
  return config.letters[slug] ?? false;
}

export function getVisibleClues(slug: InvestigatorSlug): string[] {
  return config.clues[slug] ?? [];
}

export function isMapEnabled(): boolean {
  return config.map?.enabled ?? false;
}

export function getVisibleLocationIds(): string[] {
  return config.map?.visibleLocations ?? [];
}

export function getVisibleRecapIds(): string[] {
  return config.recaps?.visible ?? [];
}

export default config;
