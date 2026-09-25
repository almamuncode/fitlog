"use client";

import { RotateCw } from "lucide-react";

type ErrorPageProps = {
  reset: () => void;
};

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
          Connection issue
        </p>

        <h1 className="font-display mt-4 text-3xl font-bold uppercase sm:text-4xl">
          Workouts are unavailable
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[var(--muted)]">
          We could not load the workout library right now. Please try again in a moment.
        </p>

        <button
          type="button"
          onClick={reset}
          className="mt-7 inline-flex items-center gap-2 bg-[var(--accent)] px-5 py-3 text-sm font-bold uppercase text-black transition hover:brightness-90"
        >
          <RotateCw size={17} />
          Try again
        </button>
      </div>
    </section>
  );
}