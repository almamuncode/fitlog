import Link from "next/link";
import { Dumbbell } from "lucide-react";

type EmptyStateProps = {
  type: "plan" | "saved";
};

export default function EmptyState({ type }: EmptyStateProps) {
  const isPlan = type === "plan";

  return (
    <div className="flex flex-col items-center justify-center border border-[var(--border)] bg-[var(--surface)] rounded-lg px-6 py-16 text-center">
      <div className="flex h-12 w-12 items-center justify-center bg-[var(--surface-light)] text-[var(--accent)]">
        <Dumbbell size={24} />
      </div>

      <h3 className="font-display mt-5 text-2xl font-bold uppercase">
        {isPlan ? "No workouts in your plan" : "No saved workouts"}
      </h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-[var(--muted)]">
        {isPlan
          ? "Your workout plan is empty. Browse the library and add exercises for today."
          : "You haven't saved any workouts yet. Browse the library and save exercises for later."}
      </p>

      <Link
        href="/#library"
        className="mt-6 bg-[var(--accent)] px-5 py-3 rounded-md text-xs font-bold uppercase text-black transition hover:brightness-90"
      >
        Go to workouts
      </Link>
    </div>
  );
}