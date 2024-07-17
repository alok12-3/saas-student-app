import React from 'react';
import { Stack } from 'expo-router';
import LoginStudent from './LoginStudent';
import StudentDashboard from './StudentDashboard';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="LoginStudent" />
      <Stack.Screen name="StudentDashboard"  />
      <Stack.Screen name="ClassDetails"  />
      <Stack.Screen name="QuizFetch"  />
    </Stack>
  );
};

export default Layout;
