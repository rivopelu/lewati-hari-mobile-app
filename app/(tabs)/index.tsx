import React from 'react';
import { ScrollView, ScrollViewComponent, StatusBar, View } from 'react-native';

import { Container } from '@/components/atoms/Container';
import { HeaderGradient } from '@/components/atoms/HeaderGradient';
import { InputSearch } from '@/components/atoms/InputSearch';
import { Spacer } from '@/components/atoms/Spacer';
import { AdsSwiper } from '@/components/layouts/AdsSwiper';
import HomeHeader from '@/components/layouts/HomeHeader';
import { SIZE } from '@/constants/STYLES';

export default function Index() {
  return (
    <ScrollView>
      <View>
        <StatusBar barStyle="dark-content" />
        <Spacer y={62} />
        <HeaderGradient />
        <HomeHeader />
        <Spacer y={SIZE.XS} />
        <Container>
          <InputSearch />
        </Container>
        <Spacer y={SIZE.XS} />
        <AdsSwiper />
      </View>
    </ScrollView>
  );
}
