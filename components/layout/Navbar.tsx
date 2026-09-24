"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bookmark, Dumbbell } from "lucide-react";
import Image from "next/image";
import { useWorkoutContext } from "@/context/WorkoutContext";

export default function Navbar() {
    const pathname = usePathname();
    const { todayPlan, savedWorkouts } = useWorkoutContext();

    const isWorkoutActive =
        pathname === "/" || pathname.startsWith("/workouts");

    const isPlanActive = pathname === "/my-plan";

    return (
        <header className="border-b border-[var(--border)]">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/images/logo.png"
                        alt="FitLog"
                        width={120}
                        height={40}
                        priority
                        className="h-8 w-auto"
                    />
                    <span className="ml-2 font-display text-2xl font-bold tracking-wide">
                        FITLOG
                    </span>
                </Link>

                {/* Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <Link
                        href="/"
                        className={`text-sm font-semibold transition-colors ${isWorkoutActive
                            ? "text-[var(--accent)]"
                            : "text-[var(--muted)] hover:text-white"
                            }`}
                    >
                        Workout
                    </Link>

                    <Link
                        href="/my-plan"
                        className={`text-sm font-semibold transition-colors ${isPlanActive
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
                        <span>{todayPlan.length}</span>
                    </Link>

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-bold"
                    >
                        <Bookmark size={14} />
                        <span>Saved</span>
                        <span>{savedWorkouts.length}</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}