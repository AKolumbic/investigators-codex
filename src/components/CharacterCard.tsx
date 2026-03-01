import Link from "next/link";
import Image from "next/image";
import type { Investigator } from "@/lib/investigators";

export function CharacterCard({ investigator }: { investigator: Investigator }) {
  return (
    <Link
      href={`/${investigator.slug}`}
      className="group relative block overflow-hidden rounded-sm border border-gold-dark/40 transition-all duration-300 hover:border-gold/60 hover:shadow-[0_0_20px_rgba(212,168,48,0.15)]"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={investigator.portrait}
          alt={investigator.fullName}
          fill
          sizes="(max-width: 640px) 45vw, 220px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      </div>

      {/* Name and occupation */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <h2
          className="font-[family-name:var(--font-oswald)] text-sm font-semibold uppercase tracking-widest text-gold"
        >
          {investigator.name}
        </h2>
        <p className="font-[family-name:var(--font-crimson)] text-xs italic text-muted">
          {investigator.occupation}
        </p>
      </div>
    </Link>
  );
}
