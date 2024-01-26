import React from "react";
import { generateMockWorkouts } from "../../mocks";
import { FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WorkoutsList: React.FC = () => {
  const navigation = useNavigation<any>();
  const mockWorkouts = generateMockWorkouts(10);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("WorkoutDetails", { id: item.id })}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      style={{ marginTop: 20 }}
      data={mockWorkouts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 20,
    marginBottom: 20,
  },
});

export default WorkoutsList;
