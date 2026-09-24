import { getWorkouts } from "@/lib/api";

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">FitLog Workouts</h1>

      <p className="mb-4">
        Total workouts: {workouts.length}
      </p>

      <div className="space-y-2">
        {workouts.map((workout) => (
          <div key={workout.id}>
            {workout.id}. {workout.name}
          </div>
        ))}
      </div>
    </main>
  );
}