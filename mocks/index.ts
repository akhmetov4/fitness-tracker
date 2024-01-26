import { Workout, Exercise } from "../types";

export function generateMockWorkouts(numWorkouts: number): Workout[] {
  const workouts: Workout[] = [];

  for (let i = 1; i <= numWorkouts; i++) {
    const workout: Workout = {
      id: i,
      name: `Workout ${i}`,
      description: `This is the description for workout ${i}`,
      exercises: generateMockExercises(5), // Generate 5 mock exercises for each workout
    };

    workouts.push(workout);
  }

  return workouts;
}

export function generateMockExercises(numExercises: number): Exercise[] {
  const exercises: Exercise[] = [];

  for (let i = 1; i <= numExercises; i++) {
    const exercise: Exercise = {
      id: i,
      name: `Exercise ${i}`,
      animation_url:
        "https://media.giphy.com/media/3o7aDcz3u24RLHjGGI/giphy.gif",
    };

    exercises.push(exercise);
  }

  return exercises;
}
