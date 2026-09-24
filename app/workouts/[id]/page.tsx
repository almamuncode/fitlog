import { notFound } from "next/navigation";
import WorkoutDetails from "@/components/workout/WorkoutDetails";
import { getWorkoutById } from "@/lib/api";

type WorkoutDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export default async function WorkoutDetailsPage({
  params,
}: WorkoutDetailsPageProps) {
  const { id } = await params;

  const workout = await getWorkoutById(id);

  if (!workout) {
    notFound();
  }

  return <WorkoutDetails workout={workout} />;
}