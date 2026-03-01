"use client";

import { useState, useCallback } from "react";
import type { MapLocation } from "../../../content/map-locations";

interface PopupPosition {
  x: number;
  y: number;
}

export function useMapPopup() {
  const [activeLocation, setActiveLocation] = useState<MapLocation | null>(
    null
  );
  const [popupPos, setPopupPos] = useState<PopupPosition | null>(null);

  const openPopup = useCallback(
    (location: MapLocation, pinElement: HTMLElement) => {
      const rect = pinElement.getBoundingClientRect();
      setActiveLocation(location);
      setPopupPos({
        x: rect.left + rect.width / 2,
        y: rect.top,
      });
    },
    []
  );

  const closePopup = useCallback(() => {
    setActiveLocation(null);
    setPopupPos(null);
  }, []);

  return { activeLocation, popupPos, openPopup, closePopup };
}
