import {
  Dumbbell,
  Gauge,
  Layers3,
  Repeat2,
  Clock,
  Flame,
  Star,
} from "lucide-react";

import type { Workout } from "@/types/workout";

type SpecsPanelProps = {
  workout: Workout;
};

export default function SpecsPanel({ workout }: SpecsPanelProps) {
  const specs = [
    {
      label: "Equipment",
      value: workout.equipment,
      icon: Dumbbell,
    },
    {
      label: "Difficulty",
      value: workout.difficulty,
      icon: Gauge,
    },
    {
      label: "Sets",
      value: workout.sets,
      icon: Layers3,
    },
    {
      label: "Reps",
      value: workout.reps,
      icon: Repeat2,
    },
    {
      label: "Duration",
      value: `${workout.duration} min`,
      icon: Clock,
    },
    {
      label: "Calories",
      value: `${workout.caloriesBurned} cal`,
      icon: Flame,
    },
    {
      label: "Rating",
      value: workout.rating,
      icon: Star,
    },
  ];

  return (
    <div className="mt-8 border border-[var(--border)] bg-[var(--surface)] rounded-xl">
      {specs.map((spec) => {
        const Icon = spec.icon;

        return (
          <div
            key={spec.label}
            className="flex items-center justify-between gap-4 border-b border-[var(--border)] px-4 py-3 last:border-b-0 last:rounded-b-xl"
          >
            <div className="flex items-center gap-3 text-[var(--muted)]">
              <Icon size={16} />

              <span className="text-xs font-semibold uppercase tracking-wider">
                {spec.label}
              </span>
            </div>

            <span className="text-right text-sm font-semibold">
              {spec.value}
            </span>
          </div>
        );
      })}
    </div>
  );
}