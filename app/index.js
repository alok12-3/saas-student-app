import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

const Index = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome</Text>
      <Link href="/LoginStudent" style={{ textDecorationLine: 'underline', fontSize: 30 }}>
        Login Student
      </Link>
    </View>
  );
};

export default Index;
