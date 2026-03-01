"use client";

import { useEffect, useRef } from "react";
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

export function MapPopup({
  location,
  screenX,
  screenY,
  onClose,
}: {
  location: MapLocation;
  screenX: number;
  screenY: number;
  onClose: () => void;
}) {
  const popupRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Close on window resize (stale position)
  useEffect(() => {
    window.addEventListener("resize", onClose);
    return () => window.removeEventListener("resize", onClose);
  }, [onClose]);

  // Clamp to viewport edges
  const pad = 8;
  const popupWidth = 260;
  let left = screenX - popupWidth / 2;
  if (left < pad) left = pad;
  if (left + popupWidth > window.innerWidth - pad) {
    left = window.innerWidth - pad - popupWidth;
  }

  return (
    <div
      ref={popupRef}
      role="dialog"
      aria-label={location.name}
      onClick={(e) => e.stopPropagation()}
      className="fixed z-50 animate-fade-in"
      style={{
        left: `${left}px`,
        top: `${screenY}px`,
        width: `${popupWidth}px`,
        transform: "translateY(calc(-100% - 12px))",
      }}
    >
      <div className="rounded border border-gold-dark/60 bg-noir-surface shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 border-b border-gold-dark/30 px-3 py-2">
          <div className="min-w-0">
            <h3 className="font-[family-name:var(--font-cinzel)] text-sm leading-tight text-gold">
              {location.name}
            </h3>
            <p className="font-[family-name:var(--font-oswald)] text-[0.6rem] uppercase tracking-widest text-muted">
              {NEIGHBORHOOD_LABELS[location.neighborhood] ??
                location.neighborhood}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="mt-0.5 flex-shrink-0 text-muted/60 transition-colors hover:text-cream"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M3 3l8 8M11 3l-8 8" />
            </svg>
          </button>
        </div>

        {/* Description */}
        <div className="px-3 py-2">
          <p className="font-[family-name:var(--font-crimson)] text-[0.85rem] italic leading-snug text-cream/80">
            {location.description}
          </p>
        </div>
      </div>

      {/* Arrow pointing down to pin */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: "100%", marginTop: "-1px" }}
      >
        <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
          <path d="M0 0l8 8 8-8z" fill="var(--color-noir-surface)" />
          <path
            d="M0 0l8 8 8-8"
            stroke="var(--color-gold-dark)"
            strokeOpacity="0.6"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}
