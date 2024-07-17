import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import axios from "axios";

const AssignQuizToClassList = ({ teacher, classIds }) => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get(
          `https://quiz-backend-1-yerh.onrender.com/api/quizzes`
        );
        setQuizzes(response.data);
      } catch (error) {
        console.error("Error fetching quizzes", error);
      }
    };
    fetchQuizzes();
  }, []);

  const handleAssignQuiz = async (quizId, classId) => {
    try {
      await axios.post(
        `https://quiz-backend-1-yerh.onrender.com/api/classes/${classId}/assign-quiz`,
        { quizId }
      );
      console.log(`Quiz ${quizId} assigned to class ${classId}`);
    } catch (error) {
      console.error("Error assigning quiz", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Assign Quiz to Class</Text>
      <FlatList
        data={quizzes}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.quizItem}>
            <Text>{item.title}</Text>
            {classIds.map((classId) => (
              <Button
                key={classId}
                title={`Assign to Class ${classId}`}
                onPress={() => handleAssignQuiz(item._id, classId)}
              />
            ))}
          </View>
        )}
      />
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
  quizItem: {
    marginBottom: 15,
  },
});

export default AssignQuizToClassList;
