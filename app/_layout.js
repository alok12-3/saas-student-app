// import React from 'react';
// import { Stack } from 'expo-router';


// const Layout = () => {
//   return (
//     <Stack>
//       <Stack.Screen name="LoginStudent" />
//       <Stack.Screen name="StudentDashboard"  />
//       <Stack.Screen name="ClassDetails"  />
//       <Stack.Screen name="QuizFetch"  />
//     </Stack>
//   );
// };

// export default Layout;

import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="LoginStudent" />
      <Stack.Screen name="LoginTeacher" />
      <Stack.Screen name="StudentDashboard" />
      <Stack.Screen name="ClassDetails" />
      <Stack.Screen name="QuizFetch" />
      <Stack.Screen name="TeacherDashboard" />
    </Stack>
  );
};

export default Layout;
