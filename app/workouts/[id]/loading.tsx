export default function WorkoutDetailsLoading() {
  return (
    <section className="mx-auto max-w-7xl animate-pulse px-4 py-12 md:px-6 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Image skeleton */}
        <div className="aspect-[4/3] bg-[var(--surface)]" />

        {/* Details skeleton */}
        <div>
          <div className="mb-5 flex gap-2">
            <div className="h-6 w-16 bg-[var(--surface-light)]" />
            <div className="h-6 w-20 bg-[var(--surface-light)]" />
          </div>

          <div className="h-12 w-3/4 bg-[var(--surface-light)]" />

          <div className="mt-5 space-y-2">
            <div className="h-4 w-full bg-[var(--surface-light)]" />
            <div className="h-4 w-5/6 bg-[var(--surface-light)]" />
            <div className="h-4 w-2/3 bg-[var(--surface-light)]" />
          </div>

          <div className="mt-8 space-y-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-12 bg-[var(--surface)]"
              />
            ))}
          </div>

          <div className="mt-8 flex gap-3">
            <div className="h-11 w-48 bg-[var(--surface-light)]" />
            <div className="h-11 w-40 bg-[var(--surface-light)]" />
          </div>
        </div>
      </div>
    </section>
  );
}