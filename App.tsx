import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainPage from "./screens/MainPage";
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
        <Stack.Screen name="WorkoutDetails" component={WorkoutDetails} />
        <Stack.Screen name="ExerciseDetails" component={ExerciseDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
