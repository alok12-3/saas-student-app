import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import axios from "axios";

const BookmarksSection = ({ teacher, setTeacher }) => {
  const handleRemoveBookmark = async (questionId) => {
    try {
      const response = await axios.post(
        `https://quiz-backend-1-yerh.onrender.com/api/teachers/${teacher._id}/remove-bookmark`,
        { questionId }
      );
      setTeacher(response.data);
    } catch (error) {
      console.error("Error removing bookmark", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Bookmarks</Text>
      <FlatList
        data={teacher.bookmarkedQuestions}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.bookmarkItem}>
            <Text>{item.question}</Text>
            <Button
              title="Remove Bookmark"
              onPress={() => handleRemoveBookmark(item._id)}
            />
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
  bookmarkItem: {
    marginBottom: 15,
  },
});

export default BookmarksSection;
