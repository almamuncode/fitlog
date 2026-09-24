"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell, Bookmark } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const isWorkoutActive =
    pathname === "/" || pathname.startsWith("/workouts");

  const isPlanActive = pathname === "/my-plan";

  return (
    <header className="border-b border-[var(--border)]">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Dumbbell
            size={24}
            strokeWidth={2.5}
            className="text-[var(--accent)]"
          />

          <span className="font-display text-2xl font-bold tracking-wide">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className={`text-sm font-semibold transition-colors ${
              isWorkoutActive
                ? "text-[var(--accent)]"
                : "text-[var(--muted)] hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`text-sm font-semibold transition-colors ${
              isPlanActive
                ? "text-[var(--accent)]"
                : "text-[var(--muted)] hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Status badges */}
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 rounded-full bg-[var(--accent)] px-3 py-1.5 text-xs font-bold text-black"
          >
            <Dumbbell size={14} />
            <span>Plan</span>
            <span>0</span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-bold"
          >
            <Bookmark size={14} />
            <span>Saved</span>
            <span>0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}