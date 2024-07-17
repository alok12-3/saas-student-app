// import React from 'react';
// import { View, Text } from 'react-native';
// import { Link } from 'expo-router';

// const Index = () => {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Welcome</Text>
//       <Link href="/LoginStudent" style={{ textDecorationLine: 'underline', fontSize: 30 }}>
//         Login Student
//       </Link>
//     </View>
//   );
// };

// export default Index;


import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome</Text>
      <Button title="Login as Student" onPress={() => router.push('/LoginStudent')} />
      <Button title="Login as Teacher" onPress={() => router.push('/LoginTeacher')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
