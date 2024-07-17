import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import axios from "axios";

const QuestionsSection = ({ teacher, setTeacher }) => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `https://quiz-backend-1-yerh.onrender.com/api/questions`
        );
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions", error);
      }
    };
    fetchQuestions();
  }, []);

  const handleViewQuestion = async (questionId) => {
    try {
      const response = await axios.get(
        `https://quiz-backend-1-yerh.onrender.com/api/teachers/question/${questionId}`
      );
      setSelectedQuestion(response.data);
    } catch (error) {
      console.error("Error fetching question details", error);
    }
  };

  const handleBookmark = async (questionId) => {
    try {
      const response = await axios.post(
        `https://quiz-backend-1-yerh.onrender.com/api/teachers/${teacher._id}/bookmark-question`,
        { questionId }
      );
      setTeacher(response.data);
    } catch (error) {
      console.error("Error bookmarking question", error);
    }
  };

  return (
    <View>
      <Text style={styles.heading}>Questions</Text>
      <FlatList
        data={questions}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.questionItem}>
            <Text>{item.question}</Text>
            <Button title="View" onPress={() => handleViewQuestion(item._id)} />
            <Button title="Bookmark" onPress={() => handleBookmark(item._id)} />
          </View>
        )}
      />
      {selectedQuestion && (
        <View>
          <Text>{selectedQuestion.question}</Text>
          <Text>{selectedQuestion.difficulty}</Text>
          <Text>{selectedQuestion.subject}</Text>
          <Text>{selectedQuestion.chapter}</Text>
          <Text>{selectedQuestion.topic}</Text>
          <Text>{selectedQuestion.answerOfQuestion}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  questionItem: {
    marginBottom: 15,
  },
});

export default QuestionsSection;
