import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-6">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell
            size={22}
            strokeWidth={2.5}
            className="text-[var(--accent)]"
          />

          <span className="font-display text-xl font-bold tracking-wide">
            FITLOG
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-center text-xs text-[var(--muted)] md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}