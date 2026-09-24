"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bookmark, Dumbbell } from "lucide-react";
import Image from "next/image";
import { useWorkoutContext } from "@/context/WorkoutContext";
import { useHydrated } from "@/hooks/useHydrated";



export default function Navbar() {
    const pathname = usePathname();
    const { todayPlan, savedWorkouts } = useWorkoutContext();

    const hydrated = useHydrated();

    const planCount = hydrated ? todayPlan.length : 0;
    const savedCount = hydrated ? savedWorkouts.length : 0;

    const isWorkoutActive =
        pathname === "/" || pathname.startsWith("/workouts");

    const isPlanActive = pathname === "/my-plan";

    return (
        <header className="border-b border-[var(--border)]">
            <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 md:h-16 md:flex-nowrap md:px-6 md:py-0">
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
                    <span className="ml-2 font-display text-xl font-bold tracking-wide sm:text-2xl">
                        FITLOG
                    </span>
                </Link>

                {/* Navigation */}
                <div className="order-3 flex w-full items-center justify-center gap-8 border-t border-[var(--border)] pt-3 md:order-none md:w-auto md:border-0 md:pt-0">
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
                        <span>{planCount}</span>
                    </Link>

                    <Link
                        href="/my-plan"
                        className="flex items-center gap-1.5 rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-bold"
                    >
                        <Bookmark size={14} />
                        <span>Saved</span>
                        <span>{savedCount}</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}