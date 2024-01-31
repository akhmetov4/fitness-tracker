import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ExercisesList from "./Exercise/ExercisesList";
import { useNavigation } from "@react-navigation/native";

const MainPage: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Main Page!</Text>
      <Button
        title="Exercises List"
        onPress={() => navigation.navigate("ExercisesList")}
      />
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
    textAlign: "center",
  },
});

export default MainPage;
