import { Exercise } from "./exercise";

export type RootStackParamList = {
  MainPage: undefined;
  ExerciseDetails: { exercise: Exercise };
  ExercisesList: undefined;
};
