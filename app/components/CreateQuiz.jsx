import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import axios from "axios";

const CreateQuiz = ({ teacher }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");

  const handleAddQuestion = () => {
    setQuestions([...questions, newQuestion]);
    setNewQuestion("");
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `https://quiz-backend-1-yerh.onrender.com/api/quizzes`,
        {
          title,
          description,
          questions,
          createdBy: teacher._id,
        }
      );
      console.log("Quiz created:", response.data);
      setTitle("");
      setDescription("");
      setQuestions([]);
    } catch (error) {
      console.error("Error creating quiz", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create a New Quiz</Text>
      <TextInput
        style={styles.input}
        placeholder="Quiz Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Quiz Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="New Question"
        value={newQuestion}
        onChangeText={(text) => setNewQuestion(text)}
      />
      <Button title="Add Question" onPress={handleAddQuestion} />
      <FlatList
        data={questions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.questionItem}>{item}</Text>
        )}
      />
      <Button title="Create Quiz" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  questionItem: {
    marginBottom: 15,
  },
});

export default CreateQuiz;
