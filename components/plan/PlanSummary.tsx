import { Dumbbell, Clock, Flame } from "lucide-react";

type PlanSummaryProps = {
  exercises: number;
  minutes: number;
  calories: number;
};

export default function PlanSummary({
  exercises,
  minutes,
  calories,
}: PlanSummaryProps) {
  const metrics = [
    {
      label: "Exercises",
      value: exercises,
      icon: Dumbbell,
    },
    {
      label: "Minutes",
      value: minutes,
      icon: Clock,
    },
    {
      label: "Calories",
      value: calories,
      icon: Flame,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {metrics.map((metric) => {
        const Icon = metric.icon;

        return (
          <div
            key={metric.label}
            className="border border-[var(--border)] bg-[var(--surface)] p-5 rounded-lg"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--muted)]">
                {metric.label}
              </p>

              <Icon
                size={18}
                className="text-[var(--accent)]"
              />
            </div>

            <p className="font-display mt-3 text-4xl font-bold">
              {metric.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}