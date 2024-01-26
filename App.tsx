// Install necessary libraries
// npm install @react-navigation/native @react-navigation/stack

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import your screens
import MainPage from "./screens/MainPage";
import ProgramsList from "./screens/Program/ProgramsList";
import WorkoutsList from "./screens/Workout/WorkoutsList";
import WorkoutDetails from "./screens/Workout/WorkoutDetails";
import ExercisesList from "./screens/Exercise/ExercisesList";
import ExerciseDetails from "./screens/Exercise/ExerciseDetails";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="ProgramsList" component={ProgramsList} />
        <Stack.Screen name="WorkoutsList" component={WorkoutsList} />
        <Stack.Screen name="WorkoutDetails" component={WorkoutDetails} />
        <Stack.Screen name="ExercisesList" component={ExercisesList} />
        <Stack.Screen name="ExerciseDetails" component={ExerciseDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
