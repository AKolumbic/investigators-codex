import Image from "next/image";
import Link from "next/link";
import { investigators, investigatorSlugs } from "@/lib/investigators";
import { isMapEnabled } from "@/lib/config";
import { CharacterCard } from "@/components/CharacterCard";

export default function Home() {
  const mapEnabled = isMapEnabled();

  return (
    <main className="mx-auto min-h-dvh max-w-lg px-4 py-8 sm:py-12">
      {/* Title card */}
      <div className="mb-6 overflow-hidden rounded-sm sm:mb-8">
        <Image
          src="/title-card.png"
          alt="Madness on the Miskatonic"
          width={800}
          height={450}
          priority
          className="w-full"
        />
      </div>

      {/* Codex heading */}
      <div className="mb-6 text-center sm:mb-8">
        <h1 className="font-[family-name:var(--font-cinzel)] text-lg tracking-wide text-gold sm:text-xl">
          Investigators&rsquo; Codex
        </h1>
        <div className="mx-auto mt-2 h-px w-24 bg-gold-dark/60" />
        <p className="mt-3 font-[family-name:var(--font-crimson)] text-sm italic text-muted">
          Arkham, Massachusetts &mdash; May 1930
        </p>
      </div>

      {/* Character grid — 2x2 on mobile, stays 2x2 */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {investigatorSlugs.map((slug) => (
          <CharacterCard key={slug} investigator={investigators[slug]} />
        ))}
      </div>

      {/* Map link — conditional */}
      {mapEnabled && (
        <Link
          href="/map"
          className="group mt-4 block rounded-sm border border-gold-dark/40 bg-noir-surface px-4 py-3 text-center transition-all duration-300 hover:border-gold/60 hover:shadow-[0_0_20px_rgba(212,168,48,0.15)] sm:mt-5"
        >
          <span className="font-[family-name:var(--font-cinzel)] text-sm tracking-wide text-gold">
            Arkham City Map
          </span>
          <br />
          <span className="font-[family-name:var(--font-crimson)] text-xs italic text-muted">
            Explore the city
          </span>
        </Link>
      )}
    </main>
  );
}
