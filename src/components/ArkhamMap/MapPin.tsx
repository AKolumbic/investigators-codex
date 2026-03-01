"use client";

import type { MapLocation } from "../../../content/map-locations";

const NEIGHBORHOOD_LABELS: Record<string, string> = {
  campus: "Campus",
  northside: "Northside",
  merchant: "Merchant Dist.",
  downtown: "Downtown",
  "french-hill": "French Hill",
  rivertown: "Rivertown",
  easttown: "Easttown",
  uptown: "Uptown",
  southside: "Southside",
  outskirts: "Outskirts",
};

export function MapPin({
  location,
  isActive,
  onTap,
}: {
  location: MapLocation;
  isActive: boolean;
  onTap: (location: MapLocation, el: HTMLElement) => void;
}) {
  const isMajor = location.tier === "major";
  const size = isMajor ? "w-5 h-5" : "w-3.5 h-3.5";

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onTap(location, e.currentTarget);
      }}
      aria-label={`${location.name} — ${NEIGHBORHOOD_LABELS[location.neighborhood] ?? location.neighborhood}`}
      className={`
        absolute -translate-x-1/2 -translate-y-full
        touch-manipulation cursor-pointer
        ${size}
        rounded-full rounded-bl-none rotate-45
        border border-gold/80
        transition-all duration-200
        ${
          isActive
            ? "bg-gold shadow-[0_0_10px_rgba(212,168,48,0.5)] scale-125 z-20"
            : isMajor
              ? "bg-gold/90 hover:bg-gold hover:scale-110 z-10 map-pin-pulse"
              : "bg-gold/70 hover:bg-gold hover:scale-110 z-10"
        }
      `}
      style={{
        left: `${location.x}%`,
        top: `${location.y}%`,
      }}
    >
      {/* Inner dot for visual weight */}
      <span
        className={`
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45
          rounded-full bg-noir-bg/40
          ${isMajor ? "w-1.5 h-1.5" : "w-1 h-1"}
        `}
      />
    </button>
  );
}
