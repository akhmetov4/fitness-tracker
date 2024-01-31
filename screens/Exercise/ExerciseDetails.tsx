import React from "react";
import { ScrollView, View, Image, Text, StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/routes";
import colors from "../../style/colors";

type Props = NativeStackScreenProps<RootStackParamList, "ExerciseDetails">;

const ExerciseDetails: React.FC = ({ route }: Props) => {
  const { exercise } = route.params;

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 30 }}
      style={styles.container}
    >
      <Image
        source={require(`../../assets/placeholder.jpeg`)}
        style={styles.image}
      />
      <Text style={styles.name}>{exercise.name}</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
        perferendis dicta porro animi debitis et asperiores? Ipsam non eum sit
        laborum, quia voluptatum adipisci delectus vero. Tempora illo fugit
        officia.
      </Text>
      <Text style={styles.instructionTitle}>Instruction:</Text>
      <View style={{ flex: 1 }}>
        {exercise.instructions.map((instruction, index) => (
          <View key={index} style={styles.instructionContainer}>
            <View style={styles.instructionStep}>
              <Text style={styles.instructionStepText}>{index + 1}</Text>
              <Text />
            </View>
            <Text style={styles.instructionText}>{instruction}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 50,
    backgroundColor: "white",
  },

  image: {
    width: "100%",
    maxWidth: 400,
    marginHorizontal: "auto",
  },
  name: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 20,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
  },
  instructionTitle: {
    marginTop: 30,
    fontSize: 16,
    fontWeight: "bold",
  },
  instructionContainer: {
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: colors.lightGray,
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  instructionStep: {
    fontWeight: "bold",
    marginRight: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.darkGray,
  },
  instructionStepText: {
    textAlign: "center",
    textAlignVertical: "center",
    lineHeight: 40,
    fontSize: 18,
    margin: 0,
    padding: 0,
  },
  instructionText: {
    flex: 1,
  },
});

export default ExerciseDetails;
