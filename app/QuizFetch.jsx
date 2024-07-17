// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { View, Text, Button, StyleSheet, TextInput } from "react-native";
// import Question from "./Question";

// const QuizFetch = ({ route }) => {
//   const { quizIds, studentId } = route.params;
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [answers, setAnswers] = useState([]);

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const response = await axios.get(
//           `https://quiz-backend-1-yerh.onrender.com/api/quizzes/${quizIds}/questions`
//         );
//         setQuestions(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching questions:", error);
//         setLoading(false);
//       }
//     };

//     fetchQuestions();
//   }, [quizIds]);

//   const handleInputChange = (questionId, questionstring, answer) => {
//     setAnswers((prevAnswers) => {
//       const existingAnswer = prevAnswers.find(
//         (a) => a.questionId === questionId
//       );
//       if (existingAnswer) {
//         return prevAnswers.map((a) =>
//           a.questionId === questionId ? { ...a, answer } : a
//         );
//       } else {
//         return [...prevAnswers, { questionId, questionstring, answer }];
//       }
//     });
//   };

//   const handleSubmit = async () => {
//     try {
//       await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/responses`, {
//         studentId,
//         quizId: quizIds,
//         answers,
//       });
//       alert("Responses submitted successfully!");
//     } catch (error) {
//       console.error("Error submitting responses:", error);
//       alert("Failed to submit responses");
//     }
//   };

//   if (loading) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {questions.map((question) => (
//         <Question
//           key={question._id}
//           question={question}
//           handleInputChange={handleInputChange}
//         />
//       ))}
//       <Button title="Submit" onPress={handleSubmit} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//   },
// });

// export default QuizFetch;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Question from "./Question";

const QuizFetch = () => {
  const { quizIds, studentId } = useLocalSearchParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          `https://quiz-backend-1-yerh.onrender.com/api/quizzes/${quizIds}/questions`
        );
        setQuestions(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching questions:", error);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [quizIds]);

  const handleInputChange = (questionId, questionstring, answer) => {
    setAnswers((prevAnswers) => {
      const existingAnswer = prevAnswers.find(
        (a) => a.questionId === questionId
      );
      if (existingAnswer) {
        return prevAnswers.map((a) =>
          a.questionId === questionId ? { ...a, answer } : a
        );
      } else {
        return [...prevAnswers, { questionId, questionstring, answer }];
      }
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post(
        `https://quiz-backend-1-yerh.onrender.com/api/responses`,
        {
          studentId,
          quizId: quizIds,
          answers,
        }
      );
      alert("Responses submitted successfully!");
    } catch (error) {
      console.error("Error submitting responses:", error);
      alert("Failed to submit responses");
    }
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      {questions.map((question) => (
        <Question
          key={question._id}
          question={question}
          handleInputChange={handleInputChange}
        />
      ))}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default QuizFetch;
