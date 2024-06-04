import { Tabs } from 'expo-router';
import React from 'react';

export default function OnBoardingLayout() {
  return (
    <Tabs screenOptions={{ tabBarStyle: { display: 'none' } }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="sign-in"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
