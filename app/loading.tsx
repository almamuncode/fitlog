import { Dumbbell } from "lucide-react";


export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-pulse">
          <Dumbbell
            size={42}
            strokeWidth={2}
            className="text-[var(--accent)]"
          />
        </div>

        <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
          Loading workouts...
        </p>
      </div>
    </div>
  );
}