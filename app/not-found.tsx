import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <p className="font-display text-8xl font-bold text-[var(--accent)] sm:text-9xl">
          404
        </p>

        <h1 className="font-display mt-4 text-3xl font-bold uppercase sm:text-4xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[var(--muted)]">
          The page or workout you&apos;re looking for doesn&apos;t exist.
          Head back to the workout library and keep training.
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-2 bg-[var(--accent)] px-5 py-3 text-sm font-bold uppercase text-black transition hover:brightness-90"
        >
          <Dumbbell size={17} />
          Back to workouts
        </Link>
      </div>
    </section>
  );
}