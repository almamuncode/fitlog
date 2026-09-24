"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import type { Workout } from "@/types/workout";
import { toast } from "sonner";

import {
  STORAGE_KEYS,
  getStoredWorkouts,
  getStoredNumbers,
  saveToStorage,
} from "@/lib/storage";

type WorkoutContextType = {
  todayPlan: Workout[];
  savedWorkouts: Workout[];
  completedWorkouts: number[];

  addToPlan: (workout: Workout) => void;
  saveWorkout: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;
};

const WorkoutContext = createContext<WorkoutContextType | undefined>(
  undefined
);

type WorkoutProviderProps = {
  children: ReactNode;
};

export function WorkoutProvider({
  children,
}: WorkoutProviderProps) {
  const [todayPlan, setTodayPlan] = useState<Workout[]>(() =>
    getStoredWorkouts(STORAGE_KEYS.plan)
  );

  const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>(() =>
    getStoredWorkouts(STORAGE_KEYS.saved)
  );

  const [completedWorkouts, setCompletedWorkouts] = useState<number[]>(() =>
    getStoredNumbers(STORAGE_KEYS.completed)
  );

  function addToPlan(workout: Workout) {
    setTodayPlan((currentPlan) => {
      const alreadyAdded = currentPlan.some(
        (item) => item.id === workout.id
      );

      if (alreadyAdded) {
        toast.info("Workout is already in today's plan.");
        return currentPlan;
      }

      if (currentPlan.length >= 5) {
        toast.error("Today's plan can contain up to 5 workouts.");
        return currentPlan;
      }

      const updatedPlan = [...currentPlan, workout];

      saveToStorage(STORAGE_KEYS.plan, updatedPlan);

      toast.success(`${workout.name} added to today's plan.`);

      return updatedPlan;
    });
  }

  function saveWorkout(workout: Workout) {
    setSavedWorkouts((currentSaved) => {
      const alreadySaved = currentSaved.some(
        (item) => item.id === workout.id
      );

      if (alreadySaved) {
        toast.info("Workout is already saved.");
        return currentSaved;
      }

      const updatedSaved = [...currentSaved, workout];

      saveToStorage(STORAGE_KEYS.saved, updatedSaved);

      toast.success(`${workout.name} saved for later.`);

      return updatedSaved;
    });
  }

  function removeFromPlan(id: number) {
    setTodayPlan((currentPlan) => {
      const updatedPlan = currentPlan.filter(
        (workout) => workout.id !== id
      );

      saveToStorage(STORAGE_KEYS.plan, updatedPlan);

      return updatedPlan;
    });

    setCompletedWorkouts((currentCompleted) => {
      const updatedCompleted = currentCompleted.filter(
        (workoutId) => workoutId !== id
      );

      saveToStorage(
        STORAGE_KEYS.completed,
        updatedCompleted
      );

      return updatedCompleted;
    });
  }

  function removeFromSaved(id: number) {
    setSavedWorkouts((currentSaved) => {
      const updatedSaved = currentSaved.filter(
        (workout) => workout.id !== id
      );

      saveToStorage(STORAGE_KEYS.saved, updatedSaved);

      return updatedSaved;
    });
  }

  function markAsDone(id: number) {
    setCompletedWorkouts((currentCompleted) => {
      if (currentCompleted.includes(id)) {
        return currentCompleted;
      }

      const updatedCompleted = [...currentCompleted, id];

      saveToStorage(
        STORAGE_KEYS.completed,
        updatedCompleted
      );

      return updatedCompleted;
    });
  }

  return (
    <WorkoutContext.Provider
      value={{
        todayPlan,
        savedWorkouts,
        completedWorkouts,
        addToPlan,
        saveWorkout,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkoutContext() {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "useWorkoutContext must be used inside WorkoutProvider"
    );
  }

  return context;
}