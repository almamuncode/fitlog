import type { Workout } from "@/types/workout";

const BASE_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  return response.json();
}

export async function getWorkoutById(id: string): Promise<Workout | null> {
  const response = await fetch(`${BASE_URL}/${id}`);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch workout");
  }

  return response.json();
}
