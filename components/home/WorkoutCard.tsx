import Link from "next/link";
import { Clock, Flame, Star } from "lucide-react";
import type { Workout } from "@/types/workout";
import Image from "next/image";

type WorkoutCardProps = {
    workout: Workout;
};

export default function WorkoutCard({ workout }: WorkoutCardProps) {
    return (
        <Link
            href={`/workouts/${workout.id}`}
            className="group block overflow-hidden border border-[var(--border)] bg-[var(--surface)] rounded-2xl transition hover:border-[var(--accent)]"
        >
            {/* Workout image */}
            <div className="aspect-[4/3] overflow-hidden bg-[var(--surface-light)]">
                <Image
                    src={workout.image}
                    alt={workout.name}
                    width={600}
                    height={450}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
            </div>

            {/* Card content */}
            <div className="p-5">
                {/* Muscle groups */}
                <div className="mb-4 flex flex-wrap gap-2">
                    {workout.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="bg-[var(--accent)] px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-black"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Workout name */}
                <h3 className="font-display text-2xl font-bold uppercase leading-tight transition-colors group-hover:text-[var(--accent)]">
                    {workout.name}
                </h3>

                {/* Equipment */}
                <p className="mt-2 text-sm text-[var(--muted)]">
                    {workout.equipment}
                </p>

                {/* Stats */}
                <div className="mt-5 flex items-center gap-4 border-t border-[var(--border)] pt-4 text-xs text-[var(--muted)]">
                    <div className="flex items-center gap-1.5">
                        <Clock size={15} />
                        <span>{workout.duration} min</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                        <Flame size={15} />
                        <span>{workout.caloriesBurned} cal</span>
                    </div>

                    <div className="ml-auto flex items-center gap-1.5">
                        <Star size={15} />
                        <span>{workout.rating}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}