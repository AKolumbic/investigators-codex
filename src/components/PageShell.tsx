import Link from "next/link";

export function PageShell({
  children,
  showBack = false,
}: {
  children: React.ReactNode;
  showBack?: boolean;
}) {
  return (
    <div className="mx-auto min-h-dvh max-w-2xl px-4 py-8">
      {showBack && (
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 font-[family-name:var(--font-oswald)] text-xs uppercase tracking-widest text-muted transition-colors hover:text-gold"
        >
          <span aria-hidden="true">&larr;</span>
          Codex
        </Link>
      )}
      {children}
    </div>
  );
}
