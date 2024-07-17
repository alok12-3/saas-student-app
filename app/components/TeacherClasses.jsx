import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import axios from "axios";

const TeacherClasses = ({ classIds }) => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get(
          `https://quiz-backend-1-yerh.onrender.com/api/classes`
        );
        setClasses(response.data);
      } catch (error) {
        console.error("Error fetching classes", error);
      }
    };
    fetchClasses();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Classes</Text>
      <FlatList
        data={classes.filter((cls) => classIds.includes(cls._id))}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.classItem}>
            <Text>{item.name}</Text>
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
  classItem: {
    marginBottom: 15,
  },
});

export default TeacherClasses;
