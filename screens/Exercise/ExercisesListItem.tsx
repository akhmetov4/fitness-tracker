import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { useNavigation } from "@react-navigation/native";
import { Exercise } from "../../types";

interface ExercisesListItemProps {
  item: Exercise;
}

const ExercisesListItem: React.FC<ExercisesListItemProps> = ({ item }) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("ExerciseDetails", { exercise: item })}
    >
      <View style={styles.container}>
        <Image
          source={require(`../../assets/placeholder.jpeg`)}
          style={styles.image}
        />
        <View style={{ flexShrink: 1 }}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
        <Icon
          name="chevron-forward-outline"
          style={{
            marginLeft: "auto",
          }}
          size={20}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 80,
  },
  button: {
    marginBottom: 20,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 30,
  },
  name: {
    textTransform: "capitalize",
    paddingRight: 10,
  },
});

export default ExercisesListItem;
