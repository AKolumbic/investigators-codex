"use client";

import { useState } from "react";
import { useAmbientAudio } from "./AmbientAudioProvider";

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  );
}

function VolumeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
    </svg>
  );
}

function MuteIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
    </svg>
  );
}

function MusicNoteIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55C7.79 13 6 14.79 6 17s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );
}

function VolumeSlider({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <input
      type="range"
      min={0}
      max={1}
      step={0.01}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      className="ambient-slider flex-1"
    />
  );
}

export function AmbientAudioWidget() {
  const [open, setOpen] = useState(false);
  const {
    isPlaying,
    jazzVolume,
    rainVolume,
    jazzMuted,
    rainMuted,
    togglePlay,
    setJazzVolume,
    setRainVolume,
    toggleJazzMute,
    toggleRainMute,
  } = useAmbientAudio();

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className={`
          fixed bottom-5 right-5 z-50
          flex h-11 w-11 items-center justify-center
          rounded-full border
          ${isPlaying
            ? "border-gold/60 bg-gold/15 text-gold shadow-[0_0_12px_rgba(212,168,48,0.25)]"
            : "border-gold-dark/40 bg-noir-surface text-gold-dark hover:border-gold/50 hover:text-gold"
          }
          transition-all duration-300 cursor-pointer
        `}
        title="Ambiance"
      >
        <MusicNoteIcon />
      </button>
    );
  }

  return (
    <div
      className="
        fixed bottom-5 right-5 z-50
        w-56 rounded-sm
        border border-gold-dark/40 bg-noir-surface
        shadow-[0_4px_24px_rgba(0,0,0,0.6)]
        animate-fade-in-up
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gold-dark/20 px-3 py-2">
        <span className="font-oswald text-xs uppercase tracking-widest text-gold">
          Ambiance
        </span>
        <div className="flex items-center gap-1.5">
          <button
            onClick={togglePlay}
            className="flex h-6 w-6 items-center justify-center rounded-full border border-gold-dark/40 text-gold hover:border-gold/60 hover:bg-gold/10 transition-colors cursor-pointer"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>
          <button
            onClick={() => setOpen(false)}
            className="flex h-6 w-6 items-center justify-center text-muted hover:text-cream transition-colors cursor-pointer"
            title="Close"
          >
            <CloseIcon />
          </button>
        </div>
      </div>

      {/* Jazz track */}
      <div className="px-3 py-2 space-y-1">
        <div className="flex items-center gap-2">
          <span className="font-crimson text-xs text-cream/70 w-8">Jazz</span>
          <button
            onClick={toggleJazzMute}
            className={`flex h-5 w-5 items-center justify-center transition-colors cursor-pointer ${
              jazzMuted ? "text-muted" : "text-gold-dim"
            }`}
            title={jazzMuted ? "Unmute jazz" : "Mute jazz"}
          >
            {jazzMuted ? <MuteIcon /> : <VolumeIcon />}
          </button>
          <VolumeSlider value={jazzVolume} onChange={setJazzVolume} />
        </div>
      </div>

      {/* Rain track */}
      <div className="px-3 pb-3 space-y-1">
        <div className="flex items-center gap-2">
          <span className="font-crimson text-xs text-cream/70 w-8">Rain</span>
          <button
            onClick={toggleRainMute}
            className={`flex h-5 w-5 items-center justify-center transition-colors cursor-pointer ${
              rainMuted ? "text-muted" : "text-gold-dim"
            }`}
            title={rainMuted ? "Unmute rain" : "Mute rain"}
          >
            {rainMuted ? <MuteIcon /> : <VolumeIcon />}
          </button>
          <VolumeSlider value={rainVolume} onChange={setRainVolume} />
        </div>
      </div>
    </div>
  );
}
