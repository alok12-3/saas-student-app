// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import axios from 'axios';
// import { useLocalSearchParams } from 'expo-router';

// const StudentDashboard = () => {
//   const { username } = useLocalSearchParams();
//   const [student, setStudent] = useState(null);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const response = await axios.get(
//           `https://quiz-backend-1-yerh.onrender.com/api/student/${username}`
//         );
//         setStudent(response.data);
//       } catch (error) {
//         console.error('Error fetching student:', error);
//         setError(
//           error.response ? error.response.data.message : 'Failed to fetch student'
//         );
//       }
//     };
//     fetchStudent();
//   }, [username]);

//   if (error) {
//     return <Text style={styles.error}>{error}</Text>;
//   }

//   if (!student) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Text>Welcome, {student.name}</Text>
//       <Text>Username: {student.username}</Text>
//       <Text>Class: {student.class}</Text>
//       <Text>Section: {student.section}</Text>
//       <Text>Age: {student.age}</Text>
//       <Text>Address: {student.address}</Text>
//       <Text>Phone Number: {student.phoneNumber}</Text>
//       <Text>School ID: {student.schoolId}</Text>
//       {/* Add more fields as necessary */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   error: {
//     color: 'red',
//   },
// });

// export default StudentDashboard;


// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import axios from 'axios';
// import { useLocalSearchParams, useRouter } from 'expo-router';

// const StudentDashboard = () => {
//   const { username } = useLocalSearchParams();
//   const [student, setStudent] = useState(null);
//   const [error, setError] = useState('');
//   const router = useRouter();

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const response = await axios.get(
//           `https://quiz-backend-1-yerh.onrender.com/api/student/${username}`
//         );
//         setStudent(response.data);
//       } catch (error) {
//         console.error('Error fetching student:', error);
//         setError(
//           error.response ? error.response.data.message : 'Failed to fetch student'
//         );
//       }
//     };
//     fetchStudent();
//   }, [username]);

//   if (error) {
//     return <Text style={styles.error}>{error}</Text>;
//   }

//   if (!student) {
//     return <Text>Loading...</Text>;
//   }

//   const handleClassDetailsClick = () => {
//     router.push({
//       pathname: '/ClassDetails',
//       params: { student: JSON.stringify(student) }
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Welcome, {student.name}</Text>
//       <Text>Username: {student.username}</Text>
//       <Text>Class: {student.class}</Text>
//       <Text>Section: {student.section}</Text>
//       <Text>Age: {student.age}</Text>
//       <Text>Address: {student.address}</Text>
//       <Text>Phone Number: {student.phoneNumber}</Text>
//       <Text>School ID: {student.schoolId}</Text>
//       <Button title="Class Details" onPress={handleClassDetailsClick} />
//       {/* Add more fields as necessary */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   error: {
//     color: 'red',
//   },
// });

// export default StudentDashboard;



// import React, { useEffect, useState } from "react";
// import { View, Text, Button, StyleSheet } from "react-native";
// import axios from "axios";
// import { useSearchParams } from "expo-router";
// import { useNavigation } from '@react-navigation/native';

// const StudentDashboard = () => {
//   const { username } = useSearchParams();
//   const [student, setStudent] = useState(null);
//   const [error, setError] = useState('');
//   const navigation = useNavigation();

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const response = await axios.get(
//           `https://quiz-backend-1-yerh.onrender.com/api/student/${username}`
//         );
//         setStudent(response.data);
//       } catch (error) {
//         console.error('Error fetching student:', error);
//         setError(
//           error.response ? error.response.data.message : 'Failed to fetch student'
//         );
//       }
//     };
//     fetchStudent();
//   }, [username]);

//   if (error) {
//     return <Text style={styles.error}>{error}</Text>;
//   }

//   if (!student) {
//     return <Text>Loading...</Text>;
//   }

//   const handleClassDetails = () => {
//     navigation.navigate('ClassDetails', { student });
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Welcome, {student.name}</Text>
//       <Text>Username: {student.username}</Text>
//       <Text>Class: {student.class}</Text>
//       <Text>Section: {student.section}</Text>
//       <Text>Age: {student.age}</Text>
//       <Text>Address: {student.address}</Text>
//       <Text>Phone Number: {student.phoneNumber}</Text>
//       <Text>School ID: {student.schoolId}</Text>
//       {/* Add more fields as necessary */}
//       <Button title="Class Details" onPress={handleClassDetails} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   error: {
//     color: 'red',
//   },
// });

// export default StudentDashboard;


// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';
// import { useLocalSearchParams, useRouter } from 'expo-router';

// const StudentDashboard = ({ route }) => {
//   const { username } = useLocalSearchParams;
//   const [student, setStudent] = useState(null);
//   const [error, setError] = useState('');
//   const navigation = useNavigation();

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const response = await axios.get(
//           `https://quiz-backend-1-yerh.onrender.com/api/student/${username}`
//         );
//         setStudent(response.data);
//       } catch (error) {
//         console.error('Error fetching student:', error);
//         setError(
//           error.response ? error.response.data.message : 'Failed to fetch student'
//         );
//       }
//     };
//     fetchStudent();
//   }, [username]);

//   if (error) {
//     return <Text style={styles.error}>{error}</Text>;
//   }

//   if (!student) {
//     return <Text>Loading...</Text>;
//   }

//   const handleClassDetails = () => {
//     navigation.navigate('ClassDetails', { student });
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Welcome, {student.name}</Text>
//       <Text>Username: {student.username}</Text>
//       <Text>Class: {student.class}</Text>
//       <Text>Section: {student.section}</Text>
//       <Text>Age: {student.age}</Text>
//       <Text>Address: {student.address}</Text>
//       <Text>Phone Number: {student.phoneNumber}</Text>
//       <Text>School ID: {student.schoolId}</Text>
//       {/* Add more fields as necessary */}
//       <Button title="Class Details" onPress={handleClassDetails} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   error: {
//     color: 'red',
//   },
// });

// export default StudentDashboard;


import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { useLocalSearchParams, useRouter } from 'expo-router';

const StudentDashboard = () => {
  const { username } = useLocalSearchParams();
  const [student, setStudent] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(
          `https://quiz-backend-1-yerh.onrender.com/api/student/${username}`
        );
        setStudent(response.data);
      } catch (error) {
        console.error('Error fetching student:', error);
        setError(
          error.response ? error.response.data.message : 'Failed to fetch student'
        );
      }
    };
    fetchStudent();
  }, [username]);

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  if (!student) {
    return <Text>Loading...</Text>;
  }

  const handleClassDetailsClick = () => {
    router.push({
      pathname: '/ClassDetails',
      params: { student: JSON.stringify(student) }
    });
  };

  return (
    <View style={styles.container}>
      <Text>Welcome, {student.name}</Text>
      <Text>Username: {student.username}</Text>
      <Text>Class: {student.class}</Text>
      <Text>Section: {student.section}</Text>
      <Text>Age: {student.age}</Text>
      <Text>Address: {student.address}</Text>
      <Text>Phone Number: {student.phoneNumber}</Text>
      <Text>School ID: {student.schoolId}</Text>
      <Button title="Class Details" onPress={handleClassDetailsClick} />
      {/* Add more fields as necessary */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  error: {
    color: 'red',
  },
});

export default StudentDashboard;
