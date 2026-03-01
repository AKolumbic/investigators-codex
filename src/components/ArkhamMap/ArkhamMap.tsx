"use client";

import { useCallback } from "react";
import {
  TransformWrapper,
  TransformComponent,
} from "react-zoom-pan-pinch";
import Image from "next/image";
import type { MapLocation } from "../../../content/map-locations";
import { MapPin } from "./MapPin";
import { MapPopup } from "./MapPopup";
import { useMapPopup } from "./useMapPopup";

// Map image intrinsic dimensions (3324 × 4306)
const MAP_WIDTH = 3324;
const MAP_HEIGHT = 4306;

export function ArkhamMap({ locations }: { locations: MapLocation[] }) {
  const { activeLocation, popupPos, openPopup, closePopup } = useMapPopup();

  const handlePinTap = useCallback(
    (location: MapLocation, pinElement: HTMLElement) => {
      if (activeLocation?.id === location.id) {
        closePopup();
      } else {
        openPopup(location, pinElement);
      }
    },
    [activeLocation, openPopup, closePopup]
  );

  const handleBackgroundClick = useCallback(() => {
    if (activeLocation) closePopup();
  }, [activeLocation, closePopup]);

  return (
    <div
      className="relative h-full w-full overflow-hidden bg-noir-bg"
      onClick={handleBackgroundClick}
    >
      <TransformWrapper
        initialScale={0.5}
        minScale={0.3}
        maxScale={4}
        centerOnInit
        wheel={{ step: 0.08 }}
        pinch={{ step: 5 }}
        onPanningStart={() => {
          if (activeLocation) closePopup();
        }}
        onZoomStart={() => {
          if (activeLocation) closePopup();
        }}
      >
        <TransformComponent
          wrapperStyle={{ width: "100%", height: "100%" }}
          contentStyle={{ width: MAP_WIDTH, height: MAP_HEIGHT }}
        >
          <div
            className="relative"
            style={{ width: MAP_WIDTH, height: MAP_HEIGHT }}
          >
            {/* Map image */}
            <Image
              src="/map/arkham-travellers-plan.jpg"
              alt="Traveller's Street Plan of Arkham, Massachusetts"
              width={MAP_WIDTH}
              height={MAP_HEIGHT}
              priority
              className="block sepia-[.15] contrast-[1.05] brightness-[0.92]"
              draggable={false}
            />

            {/* Location pins */}
            {locations.map((loc) => (
              <MapPin
                key={loc.id}
                location={loc}
                isActive={activeLocation?.id === loc.id}
                onTap={handlePinTap}
              />
            ))}
          </div>
        </TransformComponent>
      </TransformWrapper>

      {/* Popup rendered outside zoom container */}
      {activeLocation && popupPos && (
        <MapPopup
          location={activeLocation}
          screenX={popupPos.x}
          screenY={popupPos.y}
          onClose={closePopup}
        />
      )}
    </div>
  );
}
