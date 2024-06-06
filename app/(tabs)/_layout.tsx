import { Tabs } from 'expo-router';
import React from 'react';

import TabBar from '@/components/Molecules/TabBar';
import MainProviders from '@/components/layouts/MainProviders';

export default function HomeLayout() {
  return (
    <MainProviders>
      <Tabs tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="order"
          options={{
            title: 'Pesanan',
            headerShown: false,
          }}
        />
      </Tabs>
    </MainProviders>
  );
}
