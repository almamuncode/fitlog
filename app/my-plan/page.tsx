"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import PlanSummary from "@/components/plan/PlanSummary";
import PlanTabs from "@/components/plan/PlanTabs";
import { useWorkoutContext } from "@/context/WorkoutContext";
import { useHydrated } from "@/hooks/useHydrated";
import PlanWorkoutCard from "@/components/plan/PlanWorkoutCard";
import EmptyState from "@/components/plan/EmptyState";
import SortDropdown, {
    type SortOption,
} from "@/components/plan/SortDropdown";


export default function MyPlanPage() {
    const searchParams = useSearchParams();

    const [manualTab, setManualTab] =
        useState<"plan" | "saved" | null>(null);

    const urlTab =
        searchParams.get("tab") === "saved" ? "saved" : "plan";

    const activeTab = manualTab ?? urlTab;


    const {
        todayPlan,
        savedWorkouts,
        completedWorkouts,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
    } = useWorkoutContext();
    const hydrated = useHydrated();


    const [sortBy, setSortBy] = useState<SortOption>("duration");

    const planForDisplay = hydrated ? todayPlan : [];
    const savedForDisplay = hydrated ? savedWorkouts : [];

    const activeWorkouts =
        activeTab === "plan" ? planForDisplay : savedForDisplay;

    const sortedWorkouts = [...activeWorkouts].sort((a, b) => {
        if (sortBy === "duration") {
            return a.duration - b.duration;
        }

        if (sortBy === "calories") {
            return b.caloriesBurned - a.caloriesBurned;
        }

        return b.rating - a.rating;
    });

    const totalMinutes = planForDisplay.reduce(
        (total, workout) => total + workout.duration,
        0
    );

    const totalCalories = planForDisplay.reduce(
        (total, workout) => total + workout.caloriesBurned,
        0
    );

    return (
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:py-16">
            <div className="mb-10">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
                    Workout Planner
                </p>

                <h1 className="font-display text-4xl font-bold uppercase sm:text-5xl">
                    My Plan
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
                    Build today&apos;s workout, track your progress, and keep your saved
                    exercises ready for later.
                </p>
            </div>

            <PlanSummary
                exercises={planForDisplay.length}
                minutes={totalMinutes}
                calories={totalCalories}
            />

            <div className="mt-10">
                <PlanTabs
    activeTab={activeTab}
    onTabChange={setManualTab}
    planCount={planForDisplay.length}
    savedCount={savedForDisplay.length}
/>

                <div className="flex justify-end pt-6">
                    <SortDropdown
                        value={sortBy}
                        onChange={setSortBy}
                    />
                </div>

                <div className="py-8">
                    {activeTab === "plan" ? (
                        <>
                            {planForDisplay.length === 0 ? (
                                <EmptyState type="plan" />
                            ) : (
                                <div className="space-y-4">
                                    {sortedWorkouts.map((workout) => (
                                        <PlanWorkoutCard
                                            key={workout.id}
                                            workout={workout}
                                            type="plan"
                                            completed={completedWorkouts.includes(workout.id)}
                                            onRemove={removeFromPlan}
                                            onMarkDone={markAsDone}
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            {savedForDisplay.length === 0 ? (
                                <EmptyState type="saved" />
                            ) : (
                                <div className="space-y-4">
                                    {sortedWorkouts.map((workout) => (
                                        <PlanWorkoutCard
                                            key={workout.id}
                                            workout={workout}
                                            type="saved"
                                            onRemove={removeFromSaved}
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}