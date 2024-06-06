import { Tabs } from 'expo-router';
import React from 'react';

import MainProviders from '@/components/layouts/MainProviders';
import TabBar from '@/components/molecules/TabBar';

export default function HomeLayout() {
  return (
    <MainProviders>
      <Tabs tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Beranda',
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
