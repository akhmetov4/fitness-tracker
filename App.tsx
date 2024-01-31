import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "./screens/MainPage";
import WorkoutsList from "./screens/Workout/WorkoutsList";
import WorkoutDetails from "./screens/Workout/WorkoutDetails";
import ExercisesList from "./screens/Exercise/ExercisesList";
import ExerciseDetails from "./screens/Exercise/ExerciseDetails";
import { RootStackParamList } from "./types/routes";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen
          name="ExercisesList"
          component={ExercisesList}
          options={{ title: "Exercises" }}
        />
        <Stack.Screen
          name="ExerciseDetails"
          component={ExerciseDetails}
          options={({ route }) => ({
            title:
              route.params.exercise.name.charAt(0).toUpperCase() +
              route.params.exercise.name.slice(1),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
