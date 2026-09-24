import Image from "next/image";
import Link from "next/link";
import { Check, Clock, Flame, Star, X } from "lucide-react";

import type { Workout } from "@/types/workout";

type PlanWorkoutCardProps = {
  workout: Workout;
  type: "plan" | "saved";
  completed?: boolean;
  onRemove: (id: number) => void;
  onMarkDone?: (id: number) => void;
};

export default function PlanWorkoutCard({
  workout,
  type,
  completed = false,
  onRemove,
  onMarkDone,
}: PlanWorkoutCardProps) {
  return (
    <div className="flex flex-col gap-5 border border-[var(--border)] bg-[var(--surface)] p-4 sm:flex-row sm:items-center">
      {/* Image */}
      <div className="relative h-40 w-full shrink-0 overflow-hidden bg-[var(--surface-light)] sm:h-28 sm:w-40">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(max-width: 640px) 100vw, 160px"
          className="object-cover"
        />
      </div>

      {/* Information */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="bg-[var(--accent)] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h3 className="font-display mt-3 text-2xl font-bold uppercase">
          {workout.name}
        </h3>

        <p className="mt-1 text-sm text-[var(--muted)]">
          {workout.equipment}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[var(--muted)]">
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1.5">
            <Flame size={14} />
            {workout.caloriesBurned} cal
          </span>

          <span className="flex items-center gap-1.5">
            <Star size={14} />
            {workout.rating}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 flex-wrap items-center gap-2 sm:justify-end">
        <Link
          href={`/workouts/${workout.id}`}
          className="border border-[var(--border)] px-4 py-2 text-xs font-bold uppercase transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          View Details
        </Link>

        {type === "plan" && onMarkDone && (
          <button
            type="button"
            onClick={() => onMarkDone(workout.id)}
            disabled={completed}
            className="flex cursor-pointer items-center gap-1.5 bg-[var(--accent)] px-4 py-2 text-xs font-bold uppercase text-black transition hover:brightness-90 disabled:cursor-default disabled:opacity-60"
          >
            <Check size={14} />
            {completed ? "Done" : "Mark as Done"}
          </button>
        )}

        <button
          type="button"
          onClick={() => onRemove(workout.id)}
          aria-label={`Remove ${workout.name}`}
          className="flex h-9 w-9 cursor-pointer items-center justify-center border border-[var(--border)] text-[var(--muted)] transition hover:border-red-500 hover:text-red-500"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}