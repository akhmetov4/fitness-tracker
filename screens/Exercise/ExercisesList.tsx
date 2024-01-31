import React, { useState } from "react";
import { View, TextInput, FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import colors from "../../style/colors";
import ExercisesListItem from "./ExercisesListItem";
import { loadExercises } from "../../service/exercises";

const ExercisesList: React.FC = () => {
  const exercises = loadExercises();

  const [search, setSearch] = useState("");

  const filteredExercises = exercises.filter((exercise) =>
    exercise.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="search" size={20} />
        <TextInput
          style={styles.input}
          value={search}
          onChangeText={setSearch}
          placeholder="Search"
        />
      </View>
      <FlatList
        style={{ marginTop: 20 }}
        data={filteredExercises}
        renderItem={({ item }) => <ExercisesListItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  input: {
    height: 40,
    borderWidth: 0,
    paddingLeft: 8,
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.lightGray,
    paddingHorizontal: 10,
    backgroundColor: colors.lightGray,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 20,
    marginBottom: 20,
  },
});

export default ExercisesList;
