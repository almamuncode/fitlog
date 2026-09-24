import type { Workout } from "@/types/workout";

export const STORAGE_KEYS = {
  plan: "fitlog-plan",
  saved: "fitlog-saved",
  completed: "fitlog-completed",
};

export function getStoredWorkouts(key: string): Workout[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedData = localStorage.getItem(key);

    return storedData ? JSON.parse(storedData) : [];
  } catch {
    return [];
  }
}

export function getStoredNumbers(key: string): number[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedData = localStorage.getItem(key);

    return storedData ? JSON.parse(storedData) : [];
  } catch {
    return [];
  }
}

export function saveToStorage<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}