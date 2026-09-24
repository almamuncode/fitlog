"use client";

import { Dumbbell, Bookmark } from "lucide-react";
import type { Workout } from "@/types/workout";
import { useWorkoutContext } from "@/context/WorkoutContext";
import SpecsPanel from "./SpecsPanel";
import Instructions from "./Instructions";
import Image from "next/image";

type WorkoutDetailsProps = {
    workout: Workout;
};

export default function WorkoutDetails({
    workout,
}: WorkoutDetailsProps) {
    const { addToPlan, saveWorkout } = useWorkoutContext();

    return (
        <section className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:py-16">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
                {/* Workout image */}
                <div className="overflow-hidden bg-[var(--surface)]">
                    <Image
                        src={workout.image}
                        alt={workout.name}
                        width={800}
                        height={600}
                        priority
                        className="h-auto w-full object-cover"
                    />
                </div>

                {/* Workout information */}
                <div>
                    {/* Muscle groups */}
                    <div className="mb-4 flex flex-wrap gap-2">
                        {workout.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="bg-[var(--accent)] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h1 className="font-display text-4xl font-bold uppercase leading-tight sm:text-5xl lg:text-6xl">
                        {workout.name}
                    </h1>

                    {/* Description */}
                    <p className="mt-5 max-w-xl leading-7 text-[var(--muted)]">
                        {workout.description}
                    </p>

                    <SpecsPanel workout={workout} />
                    <Instructions instructions={workout.instructions} />
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <button
                            type="button"
                            onClick={() => addToPlan(workout)}
                            className="flex cursor-pointer items-center justify-center gap-2 bg-[var(--accent)] px-5 py-3 text-sm font-bold uppercase text-black transition-all duration-200 hover:brightness-90 active:scale-[0.98]"
                        >
                            <Dumbbell size={17} />
                            Add to today&apos;s plan
                        </button>

                        <button
                            type="button"
                            onClick={() => saveWorkout(workout)}
                            className="flex cursor-pointer items-center justify-center gap-2 border border-[var(--border)] px-5 py-3 text-sm font-bold uppercase transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-[0.98]"
                        >
                            <Bookmark size={17} />
                            Save for later
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}