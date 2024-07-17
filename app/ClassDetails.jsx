// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import QuizFetch from "./QuizFetch";

// // const ClassDetails = ({ student }) => {
// //   const [classDetails, setClassDetails] = useState(null);
// //   const [quizzes, setQuizzes] = useState([]);
// //   const [selectedQuiz, setSelectedQuiz] = useState(null);
// //   const [error, setError] = useState("");

// //   useEffect(() => {
// //     const fetchClassDetails = async () => {
// //       try {
// //         const response = await axios.post(
// //           `https://quiz-backend-1-yerh.onrender.com/api/classes/by-ids`,
// //           { classIds: [student.classId] }
// //         );
// //         setClassDetails(response.data[0]);
// //       } catch (error) {
// //         console.error("Error fetching class details:", error);
// //         setError(
// //           error.response
// //             ? error.response.data.message
// //             : "Failed to fetch class details"
// //         );
// //       }
// //     };

// //     if (student.classId) {
// //       fetchClassDetails();
// //     }
// //   }, [student.classId]);

// //   useEffect(() => {
// //     const fetchQuizzes = async () => {
// //       if (classDetails && classDetails.quizId.length > 0) {
// //         try {
// //           const response = await axios.post(
// //             `https://quiz-backend-1-yerh.onrender.com/api/quiz/by-ids`,
// //             { quizId: classDetails.quizId }
// //           );
// //           setQuizzes(response.data);
// //         } catch (error) {
// //           console.error("Error fetching quizzes:", error);
// //           setError(
// //             error.response
// //               ? error.response.data.message
// //               : "Failed to fetch quizzes"
// //           );
// //         }
// //       }
// //     };

// //     fetchQuizzes();
// //   }, [classDetails]);

// //   if (error) {
// //     return <p style={{ color: "red" }}>{error}</p>;
// //   }

// //   if (!classDetails) {
// //     return <p>Loading class details...</p>;
// //   }

// //   const handleQuizClick = (quiz) => {
// //     setSelectedQuiz(quiz);
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <h2>Class Details</h2>
// //       <p>Class Name: {classDetails.className}</p>
// //       <p>Year: {classDetails.year}</p>
// //       <p>Grade: {classDetails.grade}</p>
// //       <p>Section: {classDetails.section}</p>

// //       <h3>Quizzes</h3>
// //       {quizzes.length > 0 ? (
// //         quizzes.map((quiz) => (
// //           <div
// //             key={quiz._id}
// //             onClick={() => handleQuizClick(quiz)}
// //             style={styles.quizItem}
// //           >
// //             <p>{quiz.title}</p>
// //           </div>
// //         ))
// //       ) : (
// //         <p>No quizzes available</p>
// //       )}

// //       {selectedQuiz && (
// //         <QuizFetch quizIds={selectedQuiz._id} studentId={student._id} />
// //       )}
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     padding: "20px",
// //   },
// //   quizItem: {
// //     cursor: "pointer",
// //     color: "blue",
// //     textDecoration: "underline",
// //   },
// // };

// // export default ClassDetails;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigation } from "@react-navigation/native";
// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import QuizFetch from "./QuizFetch";

// const ClassDetails = ({ route }) => {
//   const { student } = route.params;
//   const [classDetails, setClassDetails] = useState(null);
//   const [quizzes, setQuizzes] = useState([]);
//   const [selectedQuiz, setSelectedQuiz] = useState(null);
//   const [error, setError] = useState("");
//   const navigation = useNavigation();

//   useEffect(() => {
//     const fetchClassDetails = async () => {
//       try {
//         const response = await axios.post(
//           `https://quiz-backend-1-yerh.onrender.com/api/classes/by-ids`,
//           { classIds: [student.classId] }
//         );
//         setClassDetails(response.data[0]);
//       } catch (error) {
//         console.error("Error fetching class details:", error);
//         setError(
//           error.response
//             ? error.response.data.message
//             : "Failed to fetch class details"
//         );
//       }
//     };

//     if (student.classId) {
//       fetchClassDetails();
//     }
//   }, [student.classId]);

//   useEffect(() => {
//     const fetchQuizzes = async () => {
//       if (classDetails && classDetails.quizId.length > 0) {
//         try {
//           const response = await axios.post(
//             `${import.meta.env.VITE_BACKEND_URL}/api/quiz/by-ids`,
//             { quizId: classDetails.quizId }
//           );
//           setQuizzes(response.data);
//         } catch (error) {
//           console.error("Error fetching quizzes:", error);
//           setError(
//             error.response
//               ? error.response.data.message
//               : "Failed to fetch quizzes"
//           );
//         }
//       }
//     };

//     fetchQuizzes();
//   }, [classDetails]);

//   if (error) {
//     return <Text style={{ color: "red" }}>{error}</Text>;
//   }

//   if (!classDetails) {
//     return <Text>Loading class details...</Text>;
//   }

//   const handleQuizClick = (quiz) => {
//     navigation.navigate("QuizFetch", {
//       quizIds: quiz._id,
//       studentId: student._id,
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Class Details</Text>
//       <Text>Class Name: {classDetails.className}</Text>
//       <Text>Year: {classDetails.year}</Text>
//       <Text>Grade: {classDetails.grade}</Text>
//       <Text>Section: {classDetails.section}</Text>

//       <Text style={styles.header}>Quizzes</Text>
//       {quizzes.length > 0 ? (
//         quizzes.map((quiz) => (
//           <TouchableOpacity
//             key={quiz._id}
//             onPress={() => handleQuizClick(quiz)}
//           >
//             <Text style={styles.quizItem}>{quiz.title}</Text>
//           </TouchableOpacity>
//         ))
//       ) : (
//         <Text>No quizzes available</Text>
//       )}
//     </View>
//   );
// };

// const styles = {
//   container: {
//     padding: 20,
//   },
//   header: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   quizItem: {
//     color: "blue",
//     textDecorationLine: "underline",
//     marginBottom: 5,
//   },
// };

// export default ClassDetails;

import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import axios from "axios";
import { useLocalSearchParams, useRouter } from "expo-router";

const ClassDetails = () => {
  const { student } = useLocalSearchParams();
  const parsedStudent = JSON.parse(student);
  const [classDetails, setClassDetails] = useState(null);
  const [quizzes, setQuizzes] = useState([]);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchClassDetails = async () => {
      try {
        const response = await axios.post(
          `https://quiz-backend-1-yerh.onrender.com/api/classes/by-ids`,
          { classIds: [parsedStudent.classId] }
        );
        setClassDetails(response.data[0]);
      } catch (error) {
        console.error("Error fetching class details:", error);
        setError(
          error.response
            ? error.response.data.message
            : "Failed to fetch class details"
        );
      }
    };

    if (parsedStudent.classId) {
      fetchClassDetails();
    }
  }, [parsedStudent.classId]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      if (classDetails && classDetails.quizId.length > 0) {
        try {
          const response = await axios.post(
            `https://quiz-backend-1-yerh.onrender.com/api/quiz/by-ids`,
            { quizId: classDetails.quizId }
          );
          setQuizzes(response.data);
        } catch (error) {
          console.error("Error fetching quizzes:", error);
          setError(
            error.response
              ? error.response.data.message
              : "Failed to fetch quizzes"
          );
        }
      }
    };

    fetchQuizzes();
  }, [classDetails]);

  if (error) {
    return <Text style={{ color: "red" }}>{error}</Text>;
  }

  if (!classDetails) {
    return <Text>Loading class details...</Text>;
  }

  const handleQuizClick = (quiz) => {
    router.push({
      pathname: "/QuizFetch",
      params: { quizIds: quiz._id, studentId: parsedStudent._id },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student Details</Text>
      <Text>Name: {parsedStudent.name}</Text>
      <Text style={styles.header}>Class Details</Text>
      <Text>Class Name: {classDetails.className}</Text>
      <Text>Year: {classDetails.year}</Text>
      <Text>Grade: {classDetails.grade}</Text>
      <Text>Section: {classDetails.section}</Text>

      <Text style={styles.header}>Quizzes</Text>
      {quizzes.length > 0 ? (
        quizzes.map((quiz) => (
          <TouchableOpacity
            key={quiz._id}
            onPress={() => handleQuizClick(quiz)}
          >
            <Text style={styles.quizItem}>{quiz.title}</Text>
          </TouchableOpacity>
        ))
      ) : (
        <Text>No quizzes available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  quizItem: {
    color: "blue",
    textDecorationLine: "underline",
    marginBottom: 5,
  },
});

export default ClassDetails;
