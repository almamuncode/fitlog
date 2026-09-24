import type { Workout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";

type WorkoutLibraryProps = {
  workouts: Workout[];
};

export default function WorkoutLibrary({
  workouts,
}: WorkoutLibraryProps) {
  return (
    <section
      id="library"
      className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:py-20"
    >
      {/* Section heading */}
      <div className="mb-10">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
          Workout Library
        </p>

        <h2 className="font-display text-4xl font-bold uppercase sm:text-5xl">
          The Library
        </h2>

        <p className="mt-3 text-sm text-[var(--muted)] sm:text-base">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Workout grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}
      </div>
    </section>
  );
}