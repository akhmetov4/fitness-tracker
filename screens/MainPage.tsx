import React from "react";
import { View, Text, StyleSheet } from "react-native";
import WorkoutsList from "./Workout/WorkoutsList";

const MainPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Main Page!</Text>
      <WorkoutsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default MainPage;
