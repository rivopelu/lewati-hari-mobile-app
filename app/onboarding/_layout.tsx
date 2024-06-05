import { Stack } from 'expo-router';
import React from 'react';

export default function OnBoardingLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sign-in"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
