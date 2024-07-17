import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";

const LoginTeacher = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const response = await axios.get(
        `https://quiz-backend-1-yerh.onrender.com/api/teachers/username/${username}`
      );
      console.log("Teacher found:", response.data);
      router.push(`/TeacherDashboard?username=${username}`);
    } catch (error) {
      console.error("Error fetching teacher:", error);
      setError(
        error.response ? error.response.data.message : "Failed to fetch teacher"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text>Username:</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Button title="Login" onPress={handleSubmit} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  error: {
    color: "red",
  },
});

export default LoginTeacher;
