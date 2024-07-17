import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Question = ({ question, handleInputChange }) => {
  const renderQuestion = () => {
    switch (question.questionType) {
      case "mcq":
        return (
          <View>
            <Text>{question.question}</Text>
            {question.options.map((option, index) => (
              <View key={index} style={styles.optionContainer}>
                <TouchableOpacity
                  style={styles.radio}
                  onPress={() =>
                    handleInputChange(question._id, question.question, option)
                  }
                >
                  <Text>{option}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        );
      default:
        return (
          <View>
            <Text>{question.question}</Text>
            <TextInput
              style={styles.input}
              placeholder="Your answer"
              onChangeText={(text) =>
                handleInputChange(question._id, question.question, text)
              }
            />
          </View>
        );
    }
  };

  return <View style={styles.container}>{renderQuestion()}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  radio: {
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
});

export default Question;
