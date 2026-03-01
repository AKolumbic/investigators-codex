import { notFound } from "next/navigation";
import Link from "next/link";
import { isMapEnabled, getVisibleLocationIds } from "@/lib/config";
import { mapLocations } from "../../../content/map-locations";
import { ArkhamMap } from "@/components/ArkhamMap/ArkhamMap";

export default function MapPage() {
  if (!isMapEnabled()) return notFound();

  const visibleIds = new Set(getVisibleLocationIds());
  const visibleLocations = mapLocations.filter((loc) =>
    visibleIds.has(loc.id)
  );

  return (
    <div className="flex h-dvh flex-col bg-noir-bg">
      {/* Header strip */}
      <header className="flex flex-shrink-0 items-center gap-3 border-b border-gold-dark/30 px-4 py-3">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-[family-name:var(--font-oswald)] text-xs uppercase tracking-widest text-muted transition-colors hover:text-gold"
        >
          <span aria-hidden="true">&larr;</span>
          Codex
        </Link>
        <div className="h-4 w-px bg-gold-dark/30" />
        <h1 className="font-[family-name:var(--font-cinzel)] text-sm tracking-wide text-gold">
          Arkham, Massachusetts
        </h1>
      </header>

      {/* Map fills remaining viewport */}
      <div className="relative min-h-0 flex-1">
        <ArkhamMap locations={visibleLocations} />
      </div>
    </div>
  );
}
