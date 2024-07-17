import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import { useRouter, useLocalSearchParams } from "expo-router";
import TeacherClasses from "./components/TeacherClasses";
import QuestionsSection from "./components/QuestionsSection";
import CreateQuiz from "./components/CreateQuiz";
import BookmarksSection from "./components/BookmarksSection";
import AssignQuizToClassList from "./components/AssignQuizToClassList";

const TeacherDashboard = () => {
  const { username } = useLocalSearchParams();
  const [teacher, setTeacher] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const response = await axios.get(
          `https://quiz-backend-1-yerh.onrender.com/api/teachers/username/${username}`
        );
        setTeacher(response.data);
      } catch (error) {
        console.error("Error fetching teacher", error);
      }
    };
    fetchTeacher();
  }, [username]);

  const handleUpdate = async () => {
    const response = await axios.get(
      `https://quiz-backend-1-yerh.onrender.com/api/teachers/username/${username}`
    );
    setTeacher(response.data);
  };

  if (!teacher) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Welcome, {teacher.username}</Text>
      <TeacherClasses classIds={teacher.className} />
      <QuestionsSection teacher={teacher} setTeacher={setTeacher} />
      <CreateQuiz teacher={teacher} />
      <BookmarksSection teacher={teacher} />
      <AssignQuizToClassList teacher={teacher} classIds={teacher.className} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default TeacherDashboard;
