"use client";

import {
  createContext,
  useContext,
  useState,
  useRef,
  useCallback,
  type ReactNode,
} from "react";

const JAZZ_TRACKS = [
  "/audio/jazz/jazz-1.mp3",
  "/audio/jazz/jazz-2.mp3",
  "/audio/jazz/jazz-3.mp3",
  "/audio/jazz/jazz-4.mp3",
];

const RAIN_TRACKS = [
  "/audio/rain/rain-1.mp3",
  "/audio/rain/rain-2.mp3",
  "/audio/rain/rain-3.mp3",
  "/audio/rain/rain-4.mp3",
];

interface AmbientAudioState {
  isPlaying: boolean;
  jazzVolume: number;
  rainVolume: number;
  jazzMuted: boolean;
  rainMuted: boolean;
  togglePlay: () => void;
  setJazzVolume: (v: number) => void;
  setRainVolume: (v: number) => void;
  toggleJazzMute: () => void;
  toggleRainMute: () => void;
}

const AmbientAudioContext = createContext<AmbientAudioState | null>(null);

export function useAmbientAudio() {
  const ctx = useContext(AmbientAudioContext);
  if (!ctx) throw new Error("useAmbientAudio must be used within AmbientAudioProvider");
  return ctx;
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function AmbientAudioProvider({ children }: { children: ReactNode }) {
  const jazzRef = useRef<HTMLAudioElement | null>(null);
  const rainRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [jazzVolume, setJazzVolumeState] = useState(0.5);
  const [rainVolume, setRainVolumeState] = useState(0.4);
  const [jazzMuted, setJazzMuted] = useState(false);
  const [rainMuted, setRainMuted] = useState(false);

  const ensureAudio = useCallback(() => {
    if (!jazzRef.current) {
      const jazz = new Audio(pickRandom(JAZZ_TRACKS));
      jazz.loop = true;
      jazzRef.current = jazz;
    }
    if (!rainRef.current) {
      const rain = new Audio(pickRandom(RAIN_TRACKS));
      rain.loop = true;
      rainRef.current = rain;
    }
  }, []);

  const togglePlay = useCallback(() => {
    ensureAudio();
    if (isPlaying) {
      jazzRef.current?.pause();
      rainRef.current?.pause();
      setIsPlaying(false);
    } else {
      // Apply current volumes before first play
      if (jazzRef.current) jazzRef.current.volume = jazzMuted ? 0 : jazzVolume;
      if (rainRef.current) rainRef.current.volume = rainMuted ? 0 : rainVolume;
      jazzRef.current?.play();
      rainRef.current?.play();
      setIsPlaying(true);
    }
  }, [isPlaying, ensureAudio, jazzVolume, rainVolume, jazzMuted, rainMuted]);

  // Apply volume directly to audio elements (no useEffect timing gap)
  const setJazzVolume = useCallback((v: number) => {
    setJazzVolumeState(v);
    if (jazzRef.current) jazzRef.current.volume = jazzMuted ? 0 : v;
  }, [jazzMuted]);

  const setRainVolume = useCallback((v: number) => {
    setRainVolumeState(v);
    if (rainRef.current) rainRef.current.volume = rainMuted ? 0 : v;
  }, [rainMuted]);

  const toggleJazzMute = useCallback(() => {
    setJazzMuted((prev) => {
      const next = !prev;
      if (jazzRef.current) jazzRef.current.volume = next ? 0 : jazzVolume;
      return next;
    });
  }, [jazzVolume]);

  const toggleRainMute = useCallback(() => {
    setRainMuted((prev) => {
      const next = !prev;
      if (rainRef.current) rainRef.current.volume = next ? 0 : rainVolume;
      return next;
    });
  }, [rainVolume]);

  return (
    <AmbientAudioContext.Provider
      value={{
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
      }}
    >
      {children}
    </AmbientAudioContext.Provider>
  );
}
